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
  title,
  author,
  date,
  image,
  authorImage,
}) => {
  const PostContent = contentComponent || Article;

  return (
    <>
      <BlogHeader
      image={ image }
      title={ title }
      author={ author }
      date={ date } />
      <PostContent
      title={ title }
      content={ content }
      author={ author }
      image={ image }
      authorImage={ authorImage } />
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  authorImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  keywords: PropTypes.string,
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
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        authorImage={post.frontmatter.authorImage}
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
        title
        author
        date(formatString: "DD MMMM, YYYY")
        description
        image {
          src {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                layout: FULL_WIDTH
              )
            }
          }
          alt
        }
        authorImage {
          src {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                layout: FULL_WIDTH
              )
            }
          }
          alt
        }
      }
    }
  }
`;
