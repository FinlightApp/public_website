import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Hero from '../components/Hero';
import Feature from '../components/Feature';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImageBg,
  heroImage,
  heroTitle,
  heroSubHeading,
  heroButton,
  heading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImgBg = getImage(heroImageBg) || heroImageBg;
  const heroImg = getImage(heroImage) || heroImage;
  return (
    <div>
      <Hero
      imageBg={ heroImgBg }
      image={ heroImg }
      title={ heroTitle }
      subHeading={ heroSubHeading }
      button={ heroButton } />
      <Feature />
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
  heroImageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroButton: PropTypes.string,
  heading: PropTypes.string,
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
        heroImageBg={ frontmatter.heroImageBg }
        heroImage={ frontmatter.heroImage }
        heroTitle={ frontmatter.heroTitle }
        heroSubHeading={ frontmatter.heroSubHeading }
        heroButton={ frontmatter.heroButton }
        heading={frontmatter.heading}
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
        heroImageBg  {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        heroTitle
        heroSubHeading
        heroButton
        heading
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

