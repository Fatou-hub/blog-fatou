import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allows inline HTML in remark-html output to pass through in the article body
  // (section-divider, comparison, pullquote, data-grid HTML blocks)
  experimental: {},
};

export default nextConfig;
