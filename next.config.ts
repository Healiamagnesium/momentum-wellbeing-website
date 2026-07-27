// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Ensure static files are handled correctly
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [], // Add external image domains here if needed
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',      value: 'nosniff' },
          { key: 'X-Frame-Options',              value: 'DENY' },
          { key: 'X-XSS-Protection',             value: '1; mode=block' },
          { key: 'Referrer-Policy',              value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',           value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      // Legacy URL redirects — add as needed
      // { source: '/old-page', destination: '/new-page', permanent: true },
    ]
  },

  // Compress output
  compress: true,

  // Strict mode for React
  reactStrictMode: true,

  // Disable powered-by header
  poweredByHeader: false,
}

export default nextConfig
