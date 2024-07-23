/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'play-lh.googleusercontent.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
