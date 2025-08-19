<div align="center">

# 🐍 Classic Snake Game

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

**A modern, responsive implementation of the classic Snake game built with cutting-edge web technologies**

[🎮 **Play Live Demo**](https://classic-snake-game--davidagustin.github.app/) | [📖 **Documentation**](#documentation) | [🚀 **Quick Start**](#quick-start)

</div>

---

## ✨ **Project Highlights**

<div align="center">

| 🎯 **Performance** | 🎨 **Design** | 📱 **Responsive** | 🔧 **Modern Stack** |
|:---:|:---:|:---:|:---:|
| 60fps smooth gameplay | Beautiful UI/UX | Mobile-first design | React 19 + TypeScript |
| Zero input lag | Custom animations | Touch controls | Tailwind CSS v4 |
| Optimized rendering | Accessibility compliant | Cross-platform | Vite build system |

</div>

---

## 🎮 **Live Demo & Screenshots**

<div align="center">

**[🎯 Try the Game Now](https://classic-snake-game--davidagustin.github.app/)**

*Experience smooth gameplay, responsive controls, and persistent high scores*

</div>

---

## 🚀 **Key Features**

### 🎯 **Core Gameplay**
- **Classic Snake Mechanics** - Authentic retro gaming experience with modern polish
- **Smooth 60fps Animation** - Buttery smooth movement with optimized rendering
- **Intelligent Collision Detection** - Precise wall and self-collision handling
- **Dynamic Food Generation** - Smart placement that never overlaps with snake

### 🎮 **User Experience**
- **Responsive Controls** - Arrow keys, WASD, or touch controls for mobile
- **Pause/Resume Functionality** - Seamless game state management
- **High Score Persistence** - Local storage for competitive gameplay
- **Auto-pause on Tab Switch** - Smart UX that respects user focus

### 📱 **Mobile Optimization**
- **Touch-Friendly Interface** - On-screen directional controls
- **Responsive Design** - Perfect on all screen sizes
- **Mobile-First Approach** - Optimized for touch interactions
- **Cross-Platform Compatibility** - Works on iOS, Android, and desktop

---

## 🛠️ **Technology Stack**

<div align="center">

### **Frontend Framework**
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript)

### **Styling & UI**
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)
![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=flat-square)

### **Build Tools**
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-9.28.0-4B32C3?style=flat-square&logo=eslint)

</div>

### **Core Technologies**
- **React 19** - Latest React with concurrent features and hooks
- **TypeScript** - Type-safe development with strict configuration
- **Tailwind CSS v4** - Utility-first styling with custom design system
- **Radix UI** - Accessible component primitives
- **Phosphor Icons** - Beautiful, consistent iconography
- **Vite** - Lightning-fast build tool and dev server

### **Advanced Features**
- **Custom Hooks** - Reusable game logic and mobile detection
- **State Management** - Efficient React state with useCallback optimization
- **Performance Optimization** - Memoized components and optimized re-renders
- **Error Boundaries** - Graceful error handling with user-friendly fallbacks

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/davidagustin/classic-snake-game.git
cd classic-snake-game

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Development Commands**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🎯 **Game Controls**

| **Action** | **Desktop** | **Mobile** |
|:---|:---|:---|
| **Start Game** | `SPACE` or Click | Tap "Start Game" |
| **Move Up** | `↑` or `W` | Tap ↑ button |
| **Move Down** | `↓` or `S` | Tap ↓ button |
| **Move Left** | `←` or `A` | Tap ← button |
| **Move Right** | `→` or `D` | Tap → button |
| **Pause/Resume** | `SPACE` | Tap "Pause/Resume" |
| **Reset Game** | `R` | Tap "Reset" |

---

## 🏗️ **Architecture & Code Quality**

### **Project Structure**
```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Card, Alert)
│   ├── GameBoard.tsx # Game grid rendering component
│   ├── GameHeader.tsx # Score and title display
│   ├── GameControls.tsx # Control buttons and mobile controls
│   └── GameOverlay.tsx # Game state messages
├── hooks/
│   ├── use-game-logic.ts # Core game logic and state management
│   ├── use-keyboard-controls.ts # Keyboard input handling
│   ├── use-auto-pause.ts # Auto-pause functionality
│   └── use-mobile.ts # Mobile detection hook
├── types/
│   └── game.ts # TypeScript types and constants
├── lib/
│   └── utils.ts # Utility functions
├── styles/
│   └── theme.css # Custom theme and color variables
├── App.tsx # Main game component
├── ErrorFallback.tsx # Error boundary component
└── main.tsx # Application entry point
```

### **Code Quality Features**
- **TypeScript Strict Mode** - Comprehensive type safety
- **ESLint Configuration** - Code quality and consistency
- **Component Architecture** - Modular, reusable components
- **Performance Optimization** - Efficient rendering and state management
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### **Performance Metrics**
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Load Time**: Fast initial load with Vite's instant hot module replacement
- **Runtime Performance**: 60fps gameplay with optimized game loop
- **Memory Usage**: Efficient state management with minimal re-renders

### **Recent Refactoring Improvements**
- **Modular Architecture** - Separated game logic into custom hooks
- **Component Decomposition** - Broke down large App component into smaller, focused components
- **Type Safety** - Centralized types and constants in dedicated files
- **Code Cleanup** - Removed unused dependencies and simplified CSS
- **Performance Optimization** - Improved game loop and state management
- **Maintainability** - Better separation of concerns and code organization

---

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Forest Green `oklch(0.45 0.15 145)` - Game board background
- **Accent**: Electric Blue `oklch(0.65 0.25 240)` - Snake and interactive elements
- **Destructive**: Red `oklch(0.577 0.245 27.325)` - Food and error states
- **Background**: Dark Gray `oklch(0.15 0.01 260)` - Main background
- **Foreground**: White `oklch(1 0 0)` - Text and high contrast elements

### **Typography**
- **Font Family**: JetBrains Mono (monospace for retro gaming aesthetic)
- **Hierarchy**: Clear typographic scale for scores, titles, and instructions
- **Accessibility**: High contrast ratios exceeding WCAG AA standards

### **Animations**
- **Smooth Movement**: CSS transitions for snake movement
- **Food Pulse**: Subtle animation to draw attention to food
- **Button States**: Interactive feedback for all user actions
- **Performance**: Hardware-accelerated animations for optimal performance

---

## 📊 **Technical Implementation**

### **Game Engine**
```typescript
// Core game loop with optimized performance
const gameLoop = useCallback(() => {
  if (gameState !== 'playing') return;
  
  setSnake(currentSnake => {
    // Efficient collision detection
    // Optimized state updates
    // Smooth animation handling
  });
}, [gameState, direction, food]);
```

### **State Management**
- **React Hooks** - useState and useCallback for efficient state management
- **Custom Hooks** - Reusable game logic and mobile detection
- **Local Storage** - Persistent high score tracking
- **Error Boundaries** - Graceful error handling

### **Performance Optimizations**
- **Memoization** - useCallback for expensive operations
- **Efficient Rendering** - Optimized component re-renders
- **Game Loop Optimization** - Smooth 60fps gameplay
- **Bundle Optimization** - Tree-shaking and code splitting

---

## 🧪 **Testing & Quality Assurance**

### **Code Quality**
- **TypeScript** - Comprehensive type safety and IntelliSense
- **ESLint** - Code quality and consistency enforcement
- **Prettier** - Consistent code formatting
- **Git Hooks** - Pre-commit quality checks

### **Browser Compatibility**
- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement** - Graceful degradation for older browsers

---

## 🤝 **Contributing**

I welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Maintain consistent code style with ESLint
- Add tests for new features
- Update documentation as needed
- Ensure mobile responsiveness

---

## 📈 **Future Enhancements**

### **Planned Features**
- [ ] **Multiplayer Mode** - Real-time competitive gameplay
- [ ] **Power-ups** - Special abilities and bonuses
- [ ] **Level System** - Progressive difficulty with obstacles
- [ ] **Leaderboards** - Global high score tracking
- [ ] **Custom Themes** - Multiple visual themes
- [ ] **Sound Effects** - Immersive audio experience

### **Technical Improvements**
- [ ] **PWA Support** - Offline gameplay capability
- [ ] **Performance Monitoring** - Real-time performance metrics
- [ ] **A/B Testing** - Feature experimentation framework
- [ ] **Analytics** - User behavior tracking and insights

---

## 📞 **Contact & Links**

<div align="center">

**David Agustin** - Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davidsyagustin/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/davidagustin)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://davidagustin.github.io/)

**🎮 [Play the Game](https://classic-snake-game--davidagustin.github.app/) | 📧 [Get in Touch](mailto:your.email@example.com)**

</div>

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

*Built with ❤️ using React, TypeScript, and Tailwind CSS*

</div>
