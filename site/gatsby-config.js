// Import the shadowed font file
const fontFile = require("./src/@elegantstack/solid-ui-theme/typography-fonts.json");
// Import the shadowed color file
//const customColorFile =  require('./src/@elegantstack/solid-ui-theme/colors.js')

module.exports = {
  plugins: [
    {
      resolve: "@elegantstack/gatsby-theme-flexiblocks",
      options: {
        createDemoPages: false,
        colorMode: false,
        fonts: fontFile.fonts,
        colors: "./src/@elegantstack/solid-ui-theme/colors.js",
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: false,
        generateMatchPathRewrites: true,
      },
    },
  ],
  // Customize your site metadata
  siteMetadata: {
    title: "the hpl company",
    name: "the hpl company",
    description:
      "at the hpl company, we help our clients connect with the people who matter most to their business.",
  },
};
