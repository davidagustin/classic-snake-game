import dynamic from 'next/dynamic'
import Head from 'next/head'

// Dynamically import the App component to avoid SSR issues
const App = dynamic(() => import('../src/App'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Classic Snake Game</title>
        <meta name="description" content="A modern, responsive implementation of the classic Snake game built with React, TypeScript, and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://classic-snake-game-phi.vercel.app/" />
        <meta property="og:title" content="Classic Snake Game" />
        <meta property="og:description" content="A modern, responsive implementation of the classic Snake game built with React, TypeScript, and Tailwind CSS" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://classic-snake-game-phi.vercel.app/" />
        <meta property="twitter:title" content="Classic Snake Game" />
        <meta property="twitter:description" content="A modern, responsive implementation of the classic Snake game built with React, TypeScript, and Tailwind CSS" />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      
      <App />
    </>
  )
}
