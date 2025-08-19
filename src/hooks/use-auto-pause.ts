import { useEffect } from 'react'
import { GameState } from '@/types/game'

interface UseAutoPauseProps {
  gameState: GameState
  setGameState: (state: GameState) => void
}

export function useAutoPause({ gameState, setGameState }: UseAutoPauseProps) {
  useEffect(() => {
    const handleBlur = () => {
      if (gameState === 'playing') {
        setGameState('paused')
      }
    }

    window.addEventListener('blur', handleBlur)
    return () => window.removeEventListener('blur', handleBlur)
  }, [gameState, setGameState])
}
