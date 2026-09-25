import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // A stray ~/package-lock.json otherwise makes Next infer the wrong workspace root
    root: __dirname,
  },
};

export default nextConfig;
