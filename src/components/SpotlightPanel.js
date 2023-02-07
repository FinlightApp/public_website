import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import SpotlightCard from './SpotlightCard';

const SpotlightPanelTemplate = (props) => {

  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { posts && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title='Stay up to date with our Spotlight'
            paragraph='Read the latest blog posts for recent company updates'>
              { posts && (
                <div className='
                  flex flex-wrap
                  justify-center
                  w-full
                  gap-12
                '>
                  { posts.map(({ node: post }, i) => (
                    ( i < props?.limit || !props?.limit ) && (
                      <SpotlightCard key={ i }
                      image={ {
                        src: getImage(post.frontmatter.image.src) || post.frontmatter.image.src,
                        alt: post.frontmatter.image.alt
                      } }
                      title={ post.frontmatter.title }
                      date={ post.frontmatter.date }
                      link={ post.fields.slug } />
                    )
                  )) }
                </div>
              ) }
            </Panel>
          </div>
        ) }
      </div>
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
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
      render={ (data) => <SpotlightPanelTemplate data={data} limit={props.limit} /> }
    />
  );
}