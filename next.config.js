/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && '/next-blog',
  reactStrictMode: true,
}

module.exports = nextConfig
