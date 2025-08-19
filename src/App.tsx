import { useState, useEffect, useCallback, useRef } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Trophy, RotateCcw } from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'

const BOARD_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_DIRECTION = { x: 0, y: -1 }
const INITIAL_FOOD = { x: 15, y: 15 }
const GAME_SPEED = 150

type Position = { x: number; y: number }
type Direction = { x: number; y: number }
type GameState = 'playing' | 'paused' | 'gameOver' | 'notStarted'

function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION)
  const [food, setFood] = useState<Position>(INITIAL_FOOD)
  const [gameState, setGameState] = useState<GameState>('notStarted')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useKV('snake-high-score', 0)
  
  const gameLoopRef = useRef<NodeJS.Timeout>()
  const directionQueueRef = useRef<Direction[]>([])
  const isMobile = useIsMobile()

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE)
      }
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [])

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setFood(INITIAL_FOOD)
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
      if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
        setGameState('gameOver')
        if (score > highScore) {
          setHighScore(score)
        }
        return currentSnake
      }

      // Check self collision
      if (currentSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState('gameOver')
        if (score > highScore) {
          setHighScore(score)
        }
        return currentSnake
      }

      newSnake.unshift(head)

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 10)
        setFood(generateFood(newSnake))
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameState, score, highScore, setHighScore, generateFood])

  // Game loop effect
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(gameLoop, GAME_SPEED)
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

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
          e.preventDefault()
          changeDirection({ x: 0, y: -1 })
          break
        case 'arrowdown':
        case 's':
          e.preventDefault()
          changeDirection({ x: 0, y: 1 })
          break
        case 'arrowleft':
        case 'a':
          e.preventDefault()
          changeDirection({ x: -1, y: 0 })
          break
        case 'arrowright':
        case 'd':
          e.preventDefault()
          changeDirection({ x: 1, y: 0 })
          break
        case ' ':
          e.preventDefault()
          if (gameState === 'notStarted') {
            startGame()
          } else if (gameState === 'playing' || gameState === 'paused') {
            pauseGame()
          }
          break
        case 'r':
          e.preventDefault()
          resetGame()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [changeDirection, gameState, startGame, pauseGame, resetGame])

  // Auto-pause on window blur
  useEffect(() => {
    const handleBlur = () => {
      if (gameState === 'playing') {
        setGameState('paused')
      }
    }

    window.addEventListener('blur', handleBlur)
    return () => window.removeEventListener('blur', handleBlur)
  }, [gameState])

  const renderCell = (x: number, y: number) => {
    const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y
    const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y)
    const isFood = food.x === x && food.y === y

    let cellClass = 'w-4 h-4 border border-border/20'
    
    if (isSnakeHead) {
      cellClass += ' bg-accent shadow-lg'
    } else if (isSnakeBody) {
      cellClass += ' bg-accent/80'
    } else if (isFood) {
      cellClass += ' bg-destructive rounded-full animate-pulse'
    } else {
      cellClass += ' bg-primary/20'
    }

    return <div key={`${x}-${y}`} className={cellClass} />
  }

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Snake Game</h1>
          <div className="flex justify-center items-center gap-8">
            <div className="text-xl font-medium">
              Score: <span className="text-accent">{score}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Trophy className="text-accent" size={20} />
              <span>Best: {highScore}</span>
            </div>
          </div>
        </div>

        {/* Game Board */}
        <Card className="p-6 bg-card">
          <div className="flex flex-col items-center space-y-4">
            <div 
              className="grid gap-px bg-border p-2 rounded-lg"
              style={{ 
                gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
                aspectRatio: '1'
              }}
            >
              {Array.from({ length: BOARD_SIZE }, (_, y) =>
                Array.from({ length: BOARD_SIZE }, (_, x) => renderCell(x, y))
              )}
            </div>

            {/* Game State Overlay */}
            {gameState !== 'playing' && (
              <div className="text-center space-y-4">
                {gameState === 'notStarted' && (
                  <div className="space-y-2">
                    <p className="text-lg">Press SPACE or click Play to start</p>
                    <p className="text-sm text-muted-foreground">
                      Use arrow keys or WASD to move
                    </p>
                  </div>
                )}
                {gameState === 'paused' && (
                  <p className="text-lg text-accent">Game Paused</p>
                )}
                {gameState === 'gameOver' && (
                  <div className="space-y-2">
                    <p className="text-lg text-destructive">Game Over!</p>
                    <p className="text-sm">Final Score: {score}</p>
                    {score === highScore && score > 0 && (
                      <p className="text-accent font-medium">New High Score! 🎉</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>

        {/* Controls */}
        <div className="space-y-4">
          <div className="flex justify-center gap-4">
            {gameState === 'notStarted' && (
              <Button onClick={startGame} className="gap-2">
                <Play size={16} />
                Start Game
              </Button>
            )}
            
            {(gameState === 'playing' || gameState === 'paused') && (
              <Button onClick={pauseGame} variant="outline" className="gap-2">
                {gameState === 'playing' ? <Pause size={16} /> : <Play size={16} />}
                {gameState === 'playing' ? 'Pause' : 'Resume'}
              </Button>
            )}
            
            <Button onClick={resetGame} variant="outline" className="gap-2">
              <RotateCcw size={16} />
              Reset
            </Button>
          </div>

          {/* Mobile Controls */}
          {isMobile && (
            <div className="flex flex-col items-center space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeDirection({ x: 0, y: -1 })}
                className="w-12 h-12"
              >
                <ArrowUp size={20} />
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeDirection({ x: -1, y: 0 })}
                  className="w-12 h-12"
                >
                  <ArrowLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changeDirection({ x: 1, y: 0 })}
                  className="w-12 h-12"
                >
                  <ArrowRight size={20} />
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeDirection({ x: 0, y: 1 })}
                className="w-12 h-12"
              >
                <ArrowDown size={20} />
              </Button>
            </div>
          )}

          {/* Instructions */}
          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>Arrow Keys or WASD to move • SPACE to pause • R to reset</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SnakeGame