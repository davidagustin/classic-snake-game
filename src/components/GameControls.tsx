import { Direction, GameState } from '@/types/game'
import { Button } from '@/components/ui/button'
import { Play, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw } from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'

interface GameControlsProps {
  gameState: GameState
  startGame: () => void
  pauseGame: () => void
  resetGame: () => void
  changeDirection: (direction: Direction) => void
}

export function GameControls({
  gameState,
  startGame,
  pauseGame,
  resetGame,
  changeDirection
}: GameControlsProps) {
  const isMobile = useIsMobile()

  return (
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
  )
}
