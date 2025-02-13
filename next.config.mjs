/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.ctfassets.net", protocol: "https" }],
  },
};

export default nextConfig;
