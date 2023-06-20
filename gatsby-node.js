const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
      src: File @fileByRelativePath
      alt: String
    }
    type Theme {
      header: String
      line: String
      highlight: String
      paragraph: String
    }
    type DataCard {
      image: ImageEl
      title: String
      paragraph: String
    }
    type DataColumn {
      image: ImageEl
      title: String
      paragraph: String
    }
    type ProfileCard {
      image: ImageEl
      title: String
      subheading: String
      link: String
    }
    type PartnerCard {
      image: ImageEl
      title: String
      link: String
    }

    type Frontmatter implements Node {
      heroPanel: HeroPanel
    }
    type HeroPanel implements Node {
      theme: Theme
      backgroundImg: ImageEl
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
      backgroundImg: ImageEl
      title: String
      paragraph: String
      button: String
      modalContent: String
    }

    type Frontmatter implements Node {
      featurePanel: FeaturePanel
    }
    type FeaturePanel implements Node {
      title: String
      paragraph: String
      cards: [DataCard]
    }

    type Frontmatter implements Node {
      servePanel: ServePanel
    }
    type ServePanel implements Node {
      title: String
      paragraph: String
      cards: [DataCard]
    }

    type Frontmatter implements Node {
      teamPanel: TeamPanel
    }
    type TeamPanel implements Node {
      title: String
      paragraph: String
      cards: [ProfileCard]
    }

    type Frontmatter implements Node {
      nonExecutiveDirectorsPanel: NonExecutiveDirectorsPanel
    }
    type NonExecutiveDirectorsPanel implements Node {
      title: String
      paragraph: String
      cards: [ProfileCard]
    }

    type Frontmatter implements Node {
      partnersPanel: PartnersPanel
    }
    type PartnersPanel implements Node {
      title: String
      paragraph: String
      cards: [PartnerCard]
    }

    type Frontmatter implements Node {
      ourValuesPanel: OurValuesPanel
    }
    type OurValuesPanel implements Node {
      title: String
      paragraph: String
      cards: [DataCard]
    }

    type Frontmatter implements Node {
      communityPanel: CommunityPanel
    }
    type CommunityPanel implements Node {
      title: String
      paragraph: String
      cards: [DataColumn]
    }

    type Frontmatter implements Node {
      FAQPanel: FAQPanel
    }
    type FAQPanel implements Node {
      title: String
      paragraph: String
      cards: [DataColumn]
    }
  `
  createTypes(typeDefs)
}