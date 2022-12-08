const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const kebabCase = string => string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type ImageEl {
      alt: String
      image: File @fileByRelativePath
    }
    type Theme {
      header: String
      line: String
      highlight: String
      paragraph: String
    }

    type Frontmatter implements Node {
      heroPanel: HeroPanel
    }
    type HeroPanel implements Node {
      theme: Theme
      imageBg: ImageEl
      title: String
      titleHighlight: String
      paragraph: String
      button: String
      modalContent: String
    }

    type Frontmatter implements Node {
      applyPanel: ApplyPanel
    }
    type ApplyPanel implements Node {
      theme: Theme
      imageBg: ImageEl
      title: String
      paragraph: String
      button: String
      modalContent: String
    }

    type Frontmatter implements Node {
      ourValuesPanel: OurValuesPanel
    }
    type OurValuesPanel implements Node {
      title: String
      paragraph: String
      values: [ValueCard]
    }
    type ValueCard {
      valueImage: ImageEl
      title: String
      paragraph: String
    }

    type Frontmatter implements Node {
      partnersPanel: PartnersPanel
    }
    type PartnersPanel implements Node {
      title: String
      paragraph: String
      partners: [PartnerCard]
    }
    type PartnerCard {
      partnerImage: ImageEl
      name: String
      link: String
    }

    type Frontmatter implements Node {
      teamPanel: TeamPanel
    }
    type TeamPanel implements Node {
      title: String
      paragraph: String
      cards: [TeamCard]
    }
    type TeamCard {
      partnerImage: ImageEl
      title: String
      subheading: String
      link: String
    }
    `
  createTypes(typeDefs)
}