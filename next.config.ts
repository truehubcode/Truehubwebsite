import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // "Services" was renamed to "Solutions"; keep old links working.
      { source: "/services", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
