/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/articles/:slug*",
        destination: "/help/articles/:slug*",
        permanent: true,
      },
      {
        source: "/troubleshoot",
        destination: "/help/troubleshoot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
