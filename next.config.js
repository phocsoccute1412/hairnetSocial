/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  outputFileTracing: false,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    outputStandalone: true,
  },
}