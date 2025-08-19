# Snake Game

A modern take on the classic Snake game with smooth controls, responsive design, and persistent high scores.

**Experience Qualities**:
1. **Nostalgic** - Captures the timeless appeal of the original Snake game with familiar mechanics
2. **Responsive** - Immediate feedback to controls with smooth animations and clear visual states
3. **Engaging** - Progressive difficulty and score tracking that encourages replay

**Complexity Level**: Light Application (multiple features with basic state)
- Combines game mechanics, state management, score persistence, and responsive controls in a cohesive experience

## Essential Features

### Game Board & Snake Movement
- **Functionality**: 20x20 grid with snake that moves continuously in current direction
- **Purpose**: Core gameplay foundation with predictable movement physics
- **Trigger**: Game starts automatically, direction changes via arrow keys or WASD
- **Progression**: Game loop → Snake moves → Check collisions → Update display → Repeat
- **Success criteria**: Smooth 60fps movement with no input lag

### Food Generation & Scoring
- **Functionality**: Random food placement that increases snake length and score when consumed
- **Purpose**: Provides growth mechanic and scoring system for progression
- **Trigger**: Food appears when previous food is eaten or on game start
- **Progression**: Food appears → Snake eats food → Snake grows → Score increases → New food spawns
- **Success criteria**: Food never spawns on snake body, score increments correctly

### Collision Detection & Game Over
- **Functionality**: Detect when snake hits walls or its own body to end game
- **Purpose**: Creates challenge and failure state that drives replayability
- **Trigger**: Snake head position matches wall boundary or existing body segment
- **Progression**: Collision detected → Game stops → Score recorded → Game over screen → Option to restart
- **Success criteria**: Accurate collision detection with immediate game state response

### High Score Persistence
- **Functionality**: Store and display personal best score across sessions
- **Purpose**: Provides long-term progression and achievement tracking
- **Trigger**: Game over with score higher than stored high score
- **Progression**: Game ends → Compare with stored high score → Update if higher → Display achievement
- **Success criteria**: Scores persist between browser sessions and display correctly

### Game Controls & State Management
- **Functionality**: Pause/resume, restart, and directional controls with prevent-reverse logic
- **Purpose**: Gives players control over game flow and prevents accidental self-collision
- **Trigger**: Spacebar for pause, R for restart, arrow keys for direction
- **Progression**: Key press → Validate input → Update game state → Provide visual feedback
- **Success criteria**: All controls work reliably with visual state indicators

## Edge Case Handling

- **Rapid Key Presses**: Queue direction changes to prevent missed inputs during fast gameplay
- **Reverse Direction**: Prevent snake from immediately reversing into itself
- **Pause During Movement**: Allow pausing at any time without losing game state
- **Window Focus Loss**: Auto-pause when player switches tabs or windows
- **Mobile Adaptation**: Touch-friendly controls for mobile devices

## Design Direction

The design should feel nostalgic yet modern - combining the classic charm of retro gaming with contemporary polish and clarity that makes extended play comfortable and visually appealing.

## Color Selection

Triadic color scheme creating vibrant contrast that enhances gameplay visibility while maintaining visual harmony.

- **Primary Color**: Forest Green (oklch(0.45 0.15 145)) - Game board background that evokes classic arcade aesthetics
- **Secondary Colors**: Charcoal (oklch(0.25 0.02 260)) for UI elements, Light Gray (oklch(0.95 0.01 260)) for text
- **Accent Color**: Electric Blue (oklch(0.65 0.25 240)) - Snake body segments and interactive elements for high visibility
- **Foreground/Background Pairings**: 
  - Primary (Forest Green): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Secondary (Charcoal): White text (oklch(1 0 0)) - Ratio 12.1:1 ✓
  - Accent (Electric Blue): White text (oklch(1 0 0)) - Ratio 5.8:1 ✓
  - Background (Dark Gray oklch(0.15 0.01 260)): White text (oklch(1 0 0)) - Ratio 15.2:1 ✓

## Font Selection

Clean, monospace typography that reinforces the retro gaming aesthetic while ensuring excellent readability for scores and interface elements.

- **Typographic Hierarchy**:
  - H1 (Game Title): JetBrains Mono Bold/32px/tight letter spacing
  - H2 (Score Display): JetBrains Mono Medium/24px/normal spacing  
  - Body (Instructions): JetBrains Mono Regular/16px/relaxed spacing
  - UI Labels: JetBrains Mono Medium/14px/normal spacing

## Animations

Subtle, functional animations that enhance gameplay feedback without distracting from the core experience - smooth snake movement and satisfying food consumption effects.

- **Purposeful Meaning**: Smooth movement conveys responsive controls, food pulse indicates interaction opportunity
- **Hierarchy of Movement**: Snake movement is primary animation, food pulse is secondary, UI transitions are minimal

## Component Selection

- **Components**: Card for game container, Button for controls (Play/Pause/Restart), custom Canvas or grid-based game board
- **Customizations**: Custom game grid component with cell-based positioning, custom snake and food rendering
- **States**: Buttons show clear playing/paused/game-over states with distinct visual styling
- **Icon Selection**: Play/Pause icons from Phosphor, Arrow icons for mobile controls, Trophy for high score
- **Spacing**: Consistent 16px padding using Tailwind's p-4, 24px gaps using gap-6 for component separation
- **Mobile**: Stack controls vertically on mobile, ensure touch targets are minimum 44px, add on-screen directional controls