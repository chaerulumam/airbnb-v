/** @type {import('next').NextConfig} */
const nextConfig = {
  serverless: {
    maxLambdaInstances: 10,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
