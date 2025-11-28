/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  
  // For static export (optional)
  // output: 'export',
}

module.exports = nextConfig

