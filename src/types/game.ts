export type Position = { x: number; y: number }
export type Direction = { x: number; y: number }
export type GameState = 'playing' | 'paused' | 'gameOver' | 'notStarted'

export const GAME_CONSTANTS = {
  BOARD_SIZE: 20,
  INITIAL_SNAKE: [{ x: 10, y: 10 }] as Position[],
  INITIAL_DIRECTION: { x: 0, y: -1 } as Direction,
  INITIAL_FOOD: { x: 15, y: 15 } as Position,
  GAME_SPEED: 150,
  SCORE_INCREMENT: 10,
  MOBILE_BREAKPOINT: 768
} as const

export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 }
} as const
