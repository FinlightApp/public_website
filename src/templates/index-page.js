import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Apply from '../components/Apply';
import Serve from '../components/Serve';
import BlogRoll from '../components/BlogRoll';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  seo,
  heroPanel,
  servePanel,
  featurePanel,
  applyPanel,
}) => {
  return (
    <>
      <Hero
      theme={ heroPanel.theme }
      imageBg={ {
        image: getImage(heroPanel.imageBg.image) || heroPanel.imageBg.image,
        alt: heroPanel.imageBg.alt
      } }
      title={ heroPanel.title }
      titleHighlight={ heroPanel.titleHighlight }
      paragraph={ heroPanel.paragraph }
      button={ heroPanel.button } />
      <Feature
      title={ featurePanel.title }
      paragraph={ featurePanel.paragraph} 
      features={ featurePanel.features } />
      <Serve
      title={ servePanel.title }
      paragraph={ servePanel.paragraph }
      cards={ servePanel.cards } />
      <BlogRoll
      limit={ 3 } />
      <Apply
      theme={ applyPanel.theme }
      imageBg={ {
        image: getImage(applyPanel.imageBg.image) || applyPanel.imageBg.image,
        alt: applyPanel.imageBg.alt
      } }
      title={ applyPanel.title }
      paragraph={ applyPanel.paragraph }
      button={ applyPanel.button } />
    </>
  );
};

IndexPageTemplate.propTypes = {
  seo: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    title: PropTypes.string,
  }),
  heroPanel: PropTypes.shape({
    theme: PropTypes.object,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  }),
  servePanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  featurePanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    features: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    theme: PropTypes.object,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout seo={ frontmatter.seo }>
      <IndexPageTemplate
      heroPanel={ frontmatter.heroPanel }
      featurePanel={ frontmatter.featurePanel }
      servePanel={ frontmatter.servePanel }
      applyPanel={ frontmatter.applyPanel } />
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
        seo {
          author
          description
          keywords
          title
        }
        heroPanel {
          theme {
            header
            line
            highlight
            paragraph
            button
          }
          imageBg {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          title
          titleHighlight
          paragraph
          button
        }
        servePanel {
          title
          paragraph
          cards {
            cardImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              alt
            }
            title
            paragraph
          }
        }
        featurePanel {
          title
          paragraph
          features {
            featureImage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
            title
          }
        }
        applyPanel {
          theme {
            header
            line
            highlight
            paragraph
            button
          }
          imageBg {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          title
          paragraph
          button
        }
      }
    }
  }
 `;