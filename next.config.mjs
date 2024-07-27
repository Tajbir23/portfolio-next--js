/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
        "opengraph.githubassets.com", // Github OpenGraph Image Preview
      ],
    },
};

export default nextConfig;
