/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'build',
  assetPrefix: '/next-js-todos-app/',
  basePath: '/next-js-todos-ui'
};

export default nextConfig;
