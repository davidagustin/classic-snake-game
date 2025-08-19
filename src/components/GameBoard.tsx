import { Position, GAME_CONSTANTS } from '@/types/game'
import { Card } from '@/components/ui/card'

interface GameBoardProps {
  snake: Position[]
  food: Position
}

export function GameBoard({ snake, food }: GameBoardProps) {
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
    <Card className="p-6 bg-card">
      <div className="flex flex-col items-center space-y-4">
        <div 
          className="grid gap-px bg-border p-2 rounded-lg"
          style={{ 
            gridTemplateColumns: `repeat(${GAME_CONSTANTS.BOARD_SIZE}, minmax(0, 1fr))`,
            aspectRatio: '1'
          }}
        >
          {Array.from({ length: GAME_CONSTANTS.BOARD_SIZE }, (_, y) =>
            Array.from({ length: GAME_CONSTANTS.BOARD_SIZE }, (_, x) => renderCell(x, y))
          )}
        </div>
      </div>
    </Card>
  )
}
