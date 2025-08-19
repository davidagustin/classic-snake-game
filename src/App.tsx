import { useGameLogic } from '@/hooks/use-game-logic'
import { useKeyboardControls } from '@/hooks/use-keyboard-controls'
import { useAutoPause } from '@/hooks/use-auto-pause'
import { GameHeader } from '@/components/GameHeader'
import { GameBoard } from '@/components/GameBoard'
import { GameControls } from '@/components/GameControls'
import { GameOverlay } from '@/components/GameOverlay'

function SnakeGame() {
  const {
    snake,
    food,
    gameState,
    score,
    highScore,
    setGameState,
    resetGame,
    startGame,
    pauseGame,
    changeDirection
  } = useGameLogic()

  // Set up keyboard controls
  useKeyboardControls({
    changeDirection,
    gameState,
    startGame,
    pauseGame,
    resetGame
  })

  // Set up auto-pause on window blur
  useAutoPause({
    gameState,
    setGameState
  })

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <GameHeader score={score} highScore={highScore} />
        
        <div className="relative">
          <GameBoard snake={snake} food={food} />
          <div className="absolute inset-0 flex items-center justify-center">
            <GameOverlay gameState={gameState} score={score} highScore={highScore} />
          </div>
        </div>

        <GameControls
          gameState={gameState}
          startGame={startGame}
          pauseGame={pauseGame}
          resetGame={resetGame}
          changeDirection={changeDirection}
        />
      </div>
    </div>
  )
}

export default SnakeGame