/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
    ],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
