module.exports = {
  siteMetadata: {
    siteUrl: "https://demo-finlight.netlify.app",
    title: "Finlight",
    description:
      "Finlight public website.",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Finlight",
        short_name: "Finlight",
        description: "Finlight public website.",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "standalone",
        icon: "src/img/icon.svg",
        cache_busting_mode: "none",
        legacy: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
          importWorkboxFrom: "cdn",
        }
      }
    },
    {
      resolve: "gatsby-plugin-loadable-components-ssr",
      options: {
        useHydrate: true,
        preloadTags: true
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          placeholder: "blurred",
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },{
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        tailwind: true,
        purgeCSSOptions: {
          safelist: [
            'text-black',
            'text-white',
            'text-primary',
            'text-secondary',
            'bg-primary',
            'bg-secondary',
            'via-primary',
            'via-secondary',
          ],
        },
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: '91278755-5200-4d1d-98b4-e53c2f943d75',
        srcUrl: 'https://analytics.finlight.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
