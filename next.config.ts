module.exports = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    domains: ["emotipet-bucket.s3.us-east-2.amazonaws.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
