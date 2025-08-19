import { useState, useCallback, useRef, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Position, Direction, GameState, GAME_CONSTANTS, DIRECTIONS } from '@/types/game'

export function useGameLogic() {
  const [snake, setSnake] = useState<Position[]>(GAME_CONSTANTS.INITIAL_SNAKE)
  const [direction, setDirection] = useState<Direction>(GAME_CONSTANTS.INITIAL_DIRECTION)
  const [food, setFood] = useState<Position>(GAME_CONSTANTS.INITIAL_FOOD)
  const [gameState, setGameState] = useState<GameState>('notStarted')
  const [score, setScore] = useState(0)
  const [highScoreStr, setHighScoreStr] = useKV('snake-high-score', '0')
  const highScore = highScoreStr ? parseInt(highScoreStr, 10) : 0
  
  const gameLoopRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const directionQueueRef = useRef<Direction[]>([])

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * GAME_CONSTANTS.BOARD_SIZE),
        y: Math.floor(Math.random() * GAME_CONSTANTS.BOARD_SIZE)
      }
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [])

  const resetGame = useCallback(() => {
    setSnake(GAME_CONSTANTS.INITIAL_SNAKE)
    setDirection(GAME_CONSTANTS.INITIAL_DIRECTION)
    setFood(GAME_CONSTANTS.INITIAL_FOOD)
    setScore(0)
    setGameState('notStarted')
    directionQueueRef.current = []
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current)
    }
  }, [])

  const startGame = useCallback(() => {
    setGameState('playing')
  }, [])

  const pauseGame = useCallback(() => {
    setGameState(gameState === 'paused' ? 'playing' : 'paused')
  }, [gameState])

  const changeDirection = useCallback((newDirection: Direction) => {
    if (gameState !== 'playing') return

    const currentDirection = directionQueueRef.current.length > 0 
      ? directionQueueRef.current[directionQueueRef.current.length - 1]
      : direction

    // Prevent reversing into itself
    if (currentDirection.x === -newDirection.x && currentDirection.y === -newDirection.y) {
      return
    }

    // Queue direction change
    directionQueueRef.current.push(newDirection)
  }, [direction, gameState])

  const gameLoop = useCallback(() => {
    if (gameState !== 'playing') return

    setSnake(currentSnake => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }

      // Process direction queue
      let currentDirection = direction
      if (directionQueueRef.current.length > 0) {
        currentDirection = directionQueueRef.current.shift()!
        setDirection(currentDirection)
      }

      // Move head
      head.x += currentDirection.x
      head.y += currentDirection.y

      // Check wall collision
      if (head.x < 0 || head.x >= GAME_CONSTANTS.BOARD_SIZE || head.y < 0 || head.y >= GAME_CONSTANTS.BOARD_SIZE) {
        setGameState('gameOver')
        if (score > highScore) {
          setHighScoreStr(score.toString())
        }
        return currentSnake
      }

      // Check self collision
      if (currentSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState('gameOver')
        if (score > highScore) {
          setHighScoreStr(score.toString())
        }
        return currentSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + GAME_CONSTANTS.SCORE_INCREMENT)
        setFood(generateFood(newSnake))
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameState, score, highScore, setHighScoreStr, generateFood])

  // Game loop effect
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(gameLoop, GAME_CONSTANTS.GAME_SPEED)
    } else {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [gameState, gameLoop])

  return {
    snake,
    direction,
    food,
    gameState,
    score,
    highScore,
    setGameState,
    resetGame,
    startGame,
    pauseGame,
    changeDirection,
    DIRECTIONS
  }
}
