import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import HeroLight from '../components/HeroLight';
import Serve from '../components/Serve';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImageBg,
  heroTitle,
  heroHighlight,
  heroSubHeading,
  heroButton,
  serveTitle,
  serveDescription,
  serve,
  heading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImgBg = getImage(heroImageBg) || heroImageBg;
  return (
    <div>
      <HeroLight
      imageBg={ heroImgBg }
      title={ heroTitle }
      highlight={ heroHighlight }
      subHeading={ heroSubHeading }
      button={ heroButton } />
      <Serve
      title={ serveTitle }
      description={ serveDescription }
      serve={ serve } />
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
                  <Features gridItems={intro.blurbs} />
                  </div>
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
  heroTitle: PropTypes.string,
  heroHighlight: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroButton: PropTypes.string,
  serveTitle: PropTypes.string,
  serveDescription: PropTypes.string,
  serve: PropTypes.shape({
    blurbs: PropTypes.array
  }),
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
      heroTitle={ frontmatter.heroTitle }
      heroHighlight={ frontmatter.heroHighlight }
      heroSubHeading={ frontmatter.heroSubHeading }
      heroButton={ frontmatter.heroButton }
      serveTitle={ frontmatter.serveTitle }
      serveDescription={ frontmatter.serveDescription }
      serve={frontmatter.serve}
      heading={frontmatter.heading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro} />
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
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroTitle
        heroHighlight
        heroSubHeading
        heroButton
        serveTitle
        serveDescription
        serve {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
          }
        }
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