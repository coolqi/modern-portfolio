/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages doesn't support client-side routing out of the box
  // If your repository is not at the root domain, you need to specify the base path
  basePath: '/modern-portfolio', // Replace with your repository name
  // Disable image optimization since GitHub Pages doesn't support Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
  assetPrefix: '/modern-portfolio/', // Replace with your repository name
};

export default nextConfig;