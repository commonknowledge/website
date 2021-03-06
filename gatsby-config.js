const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Common Knowledge`,
    description: `A nonprofit workers cooperative building digital infrastructure for grassroots social movements`,
    author: `@cmmonknowledge`,
    siteUrl: `https://commonknowledge.coop`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: { "consentOnContinuedBrowsing": false, "whitelabel": false, "lang": "en", "siteId": 2174512, "cookiePolicyId": 80929539, "cookiePolicyUrl": "https://commonknowledge.coop/privacy-policy/", "banner": { "acceptButtonDisplay": true, "customizeButtonDisplay": true, "acceptButtonColor": "#00e8a2", "acceptButtonCaptionColor": "white", "customizeButtonColor": "#212121", "customizeButtonCaptionColor": "white", "rejectButtonDisplay": true, "rejectButtonColor": "#00e8a2", "rejectButtonCaptionColor": "white", "position": "float-bottom-right", "textColor": "white", "backgroundColor": "#000001" } }
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify-cms-paths",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/default.layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: "gatsby-remark-static-images",
          },
          {
            resolve: `gatsby-remark-prismjs`
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/content/work/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/content/writing/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cache",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`IBM+Plex+Sans:400,400i,500,600`],
        display: "swap",
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq:
                edge.node.path.split("/").length > 1 ? "weekly" : `daily`,
              priority: edge.node.path.split("/").length > 1 ? 0.7 : 1,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const path = edge.node.file.absolutePath.split("/")
                const category = path[path.length - 2]
                const slug = category + "/" + edge.node.file.name

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.intro || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/" + slug,
                  guid: slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    id
                    html
                    file: parent {
                      ... on File {
                        name
                        absolutePath
                      }
                    }
                    frontmatter {
                      title
                      client
                      intro
                      date
                      endDate
                      date
                      url
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Common Knowledge",
            image_url: "https://commonknowledge.coop/sharecard.jpg",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/(writing|work)/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}
