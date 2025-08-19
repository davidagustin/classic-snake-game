import { GameState } from '@/types/game'

interface GameOverlayProps {
  gameState: GameState
  score: number
  highScore: number
}

export function GameOverlay({ gameState, score, highScore }: GameOverlayProps) {
  if (gameState === 'playing') return null

  return (
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
  )
}
