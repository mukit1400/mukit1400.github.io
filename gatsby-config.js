require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteUrl: 'http://reza.nyc',
    siteHeadline: 'Mir Reza',
    siteTitle: 'Mir Reza',
    siteTitleAlt: 'Mir Reza | Portfolio | Experiments',
    siteDescription: 'I am product manager at Bloomberg LP, building the web experiences that market the iconic Bloomberg Professional Services.'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-GLTQHF8QPS",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mir Reza - Portfolio`,
        short_name: `Reza`,
        description: `Product manager at Bloomberg LP, building the web experiences that market the iconic Bloomberg Professional Services.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
