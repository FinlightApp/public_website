import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

import HeroImg from '../img/new_design/Mask group.svg'

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  title2,
  image2,
  subheading2,
  heading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImg = getImage(image) || image;
  const herobg = getImage(image2) || image2;

  const backgroundImage = {
    backgroundImage: `url('${herobg}')`,
    backgroundSize: 'cover',
    position: 'center'
  };
  return (
      <div>
        <div
        style={backgroundImage}
        className='container flex flex-col justify-center h-screen text-center lg:flex-row'>
          <div className='self-center justify-center hidden w-full md:flex'>
            <img
            src={ HeroImg }
            alt='PC'
            style={{ width:'500px', height: '400px' }}/>
          </div>
          <div className='flex flex-col self-center w-full h-auto gap-8 p-8 text-white '>
            <h1 className='text-2xl md:text-5xl'>{ title2 }</h1>
            <p className='text-xl md:text-2xl'>{ subheading2 }</p>
            <div className=''>
              <button className='px-4 py-2 text-white bg-blue-600 rounded'>
                Info Request
              </button>
            </div>
          </div>
      </div>
      <FullWidthImage img={heroImg} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title2: PropTypes.string,
  subheading2: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        image2={frontmatter.image2}
        title2={frontmatter.title2}
        subheading2={frontmatter.subheading2}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
    frontmatter {
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      heading
      subheading
      title2
      image2 {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      subheading2
      mainpitch {
        title
        description
      }
      description
      intro {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
          text
        }
        heading
        description
      }
    }
  }
}
`;
