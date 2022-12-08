import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Content, { HTMLContent } from '../components/Content';
import { getImage } from 'gatsby-plugin-image';

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  image,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <Hero
      theme={ {
        header: 'text-black',
        line: 'via-secondary',
        highlight: 'text-secondary',
        paragraph: 'text-black',
      } }
      imageBg={ {
        image: getImage(image.src) || image.src,
        alt: image.alt,
      } }
      title={ title }
      paragraph={ description } />
      <PostContent content={content} />
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  keywords: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        keywords={post.frontmatter.keywords}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        keywords
        date(formatString: "MMMM DD, YYYY")
        title
        description
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
`;
