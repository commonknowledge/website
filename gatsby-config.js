module.exports = {
  siteMetadata: {
    title: 'Common Knowledge',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
