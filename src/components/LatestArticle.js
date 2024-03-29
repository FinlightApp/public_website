import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import SpotlightCard from './SpotlightCard';

const LatestArticle = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;
  const lastArticle = Object.values(posts)[0]
  const perviousArticle = Object.values(posts)[1]
  const articleLink = typeof window !== 'undefined' && window.location.pathname;
  const article = lastArticle.node.fields.slug === articleLink ? perviousArticle : lastArticle

  return (
    <React.Fragment>
      { posts && (
        <div className='
          flex flex-col
          items-center
          w-full
          gap-6 md:gap-12
        '>
          <h2 className='text-3xl font-semibold'>
            Latest Article
          </h2>
          <div>
            { article && (
              <div className='
                w-full
                gap-12
              '>
                {
                  <SpotlightCard
                  image={ {
                    src: getImage(article.node.frontmatter.image.src) || article.node.frontmatter.image.src,
                    alt: article.node.frontmatter.image.alt
                  } }
                  title={ article.node.frontmatter.title }
                  date={ article.node.frontmatter.date }
                  link={ article.node.fields.slug } />
                }
              </div>
            ) }
          </div>
        </div>
      ) }
    </React.Fragment>
  )
}

SpotlightPanel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function SpotlightPanel(props) {
  return (
    <StaticQuery
      query={graphql`
        query SpotlightPanelQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: {templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  keywords
                  title
                  templateKey
                  date(formatString: "DD MMMM, YYYY")
                  image {
                    src {
                      childImageSharp {
                        gatsbyImageData(
                          quality: 100
                          placeholder: BLURRED
                          formats: [AUTO, WEBP]
                          layout: FULL_WIDTH
                          transformOptions: {
                            fit: COVER
                          }
                        )
                      }
                    }
                    alt
                  }
                }
              }
            }
          }
        }
      `}
      render={ (data) => <LatestArticle data={data} limit={props.limit} /> }
    />
  );
}