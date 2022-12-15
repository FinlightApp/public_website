import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogHeader from '../components/BlogHeader'
import Article, { HTMLContent } from '../components/Article';


// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  image,
  theme
}) => {
  const PostContent = contentComponent || Article;

  return (
    <>
      <BlogHeader title={ title } />
      <PostContent className='
        flex flex-col
        gap-8
      '
      content={content} />
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
  theme: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout
    seo={ {
      keywords: post.frontmatter.keywords,
      title: `Finlight - ${post.frontmatter.title}`,
      description: post.frontmatter.description,
    } }>
      <BlogPostTemplate
        theme={post.frontmatter.theme}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
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
        theme {
          header
          line
          highlight
          paragraph
        }
        date(formatString: "DD MMMM, YYYY")
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
