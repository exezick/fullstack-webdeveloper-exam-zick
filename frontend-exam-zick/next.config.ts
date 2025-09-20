import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-exam.777tech.me",
        port: "",
        pathname: "/senior_level/layout/images/**",
      },
    ],
  },
};

export default nextConfig;
