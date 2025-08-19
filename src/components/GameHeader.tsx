import { Trophy } from '@phosphor-icons/react'

interface GameHeaderProps {
  score: number
  highScore: number
}

export function GameHeader({ score, highScore }: GameHeaderProps) {
  return (
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
  )
}
