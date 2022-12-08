import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Panel from './Panel';

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
              <div className='
                flex flex-wrap
                justify-center
                w-full
                gap-12
              '>
                { posts.map(({ node: post }, i) => (
                  ( i < props?.limit || !props?.limit ) && (
                    <div className='
                      flex flex-col
                      basis-full md:basis-1/2-6 lg:basis-1/3-8
                      items-center
                      min-h-[10rem]
                      bg-white rounded-2xl shadow-card
                      overflow-hidden
                    '
                    key={ i }>
                      { post.frontmatter.image && (
                        <div className='
                          flex-1
                          flex flex-row
                          justify-center items-center
                          w-full
                        '>
                          { post.frontmatter?.image?.url ? (
                            <img className='w-full'
                            src={ getImage(post.frontmatter.image.src) || post.frontmatter.image.src }
                            alt={ post.frontmatter.image.alt } />
                          ) : (
                            <GatsbyImage className='w-full'
                            objectFit='fill'
                            image={ getImage(post.frontmatter.image.src) || post.frontmatter.image.src }
                            formats={ ['auto', 'webp'] }
                            alt={ post.frontmatter.image.alt } />
                          ) }
                        </div>
                      ) }
                      { (post.frontmatter.title || post.frontmatter.date || post.fields.slug) && (
                        <div className='
                          flex-1
                          flex flex-col
                          p-6
                          gap-6
                        '>
                          { post.frontmatter.title && (
                            <p className='font-header font-semibold text-center'>
                              { post.frontmatter.title }
                            </p>
                          ) }
                          { post.frontmatter.date && (
                            <p className='font-header font-semibold text-center'>
                              { post.frontmatter.date }
                            </p>
                          ) }
                          <Link className='text-right'
                          to={post.fields.slug}>
                          Keep Reading →
                          </Link>
                        </div>
                      ) }
                    </div>
                  )
                ) ) }
              </div>
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
                  date(formatString: "MMMM DD, YYYY")
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