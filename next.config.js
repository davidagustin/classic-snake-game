/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Disable image optimization since we're not using Next.js Image component
  images: {
    unoptimized: true,
  },
  
  // Handle client-side routing
  trailingSlash: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig
