// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: "json-loader",
      type: "javascript/auto",
    })
    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !
    ignoreBuildErrors: true,
  },
  //   output: "standalone",
}

module.exports = withBlitz(config)
