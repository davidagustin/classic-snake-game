import { useEffect } from 'react'
import { Direction, GameState } from '@/types/game'
import { DIRECTIONS } from '@/types/game'

interface UseKeyboardControlsProps {
  changeDirection: (direction: Direction) => void
  gameState: GameState
  startGame: () => void
  pauseGame: () => void
  resetGame: () => void
}

export function useKeyboardControls({
  changeDirection,
  gameState,
  startGame,
  pauseGame,
  resetGame
}: UseKeyboardControlsProps) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'w':
          e.preventDefault()
          changeDirection(DIRECTIONS.UP)
          break
        case 'arrowdown':
        case 's':
          e.preventDefault()
          changeDirection(DIRECTIONS.DOWN)
          break
        case 'arrowleft':
        case 'a':
          e.preventDefault()
          changeDirection(DIRECTIONS.LEFT)
          break
        case 'arrowright':
        case 'd':
          e.preventDefault()
          changeDirection(DIRECTIONS.RIGHT)
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
}
