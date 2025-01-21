import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pxc1hd7esl.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
