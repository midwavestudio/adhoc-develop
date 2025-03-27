/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Uncomment to enable static HTML export
  // distDir: 'build', // Custom build directory
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'adhoc-develop.vercel.app']
    }
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  // Set server options for development
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config
    return config;
  },
}

module.exports = nextConfig 