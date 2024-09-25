/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "fakestoreapi.com"],
  },
  styledComponents: true,
};

export default nextConfig;
