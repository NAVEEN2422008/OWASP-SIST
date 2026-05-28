import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/learning-resources",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
