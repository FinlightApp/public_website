import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Apply from '../components/Apply';
import Values from '../components/Values';

/* eslint-disable */
export const OurValuesPageTemplate = ({
  heroPanel,
  applyPanel,
  ourValuesPanel,
}) => {
  return (
    <div>
      <Hero
      darkMode={ heroPanel.darkMode }
      imageBg={ {
        image: getImage(heroPanel.imageBg.image) || heroPanel.imageBg.image,
        alt: heroPanel.imageBg.alt
      } }
      title={ heroPanel.title }
      titleHighlight={ heroPanel.titleHighlight }
      paragraph={ heroPanel.paragraph } />
      <Values
      title={ ourValuesPanel.title }
      paragraph={ ourValuesPanel.paragraph }
      values={ ourValuesPanel.values } />
      <Apply
      darkMode={ applyPanel.darkMode }
      imageBg={ {
        image: getImage(applyPanel.imageBg.image) || applyPanel.imageBg.image,
        alt: applyPanel.imageBg.alt
      } }
      title={ applyPanel.title }
      paragraph={ applyPanel.paragraph }
      button={ applyPanel.button } />
    </div>
  );
};

OurValuesPageTemplate.propTypes = {
  heroPanel: PropTypes.shape({
    darkMode: PropTypes.bool,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
  }),
  ourValuesPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    values: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    darkMode: PropTypes.bool,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  }),
};

const OurValuesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <OurValuesPageTemplate
      heroPanel={ frontmatter.heroPanel }
      ourValuesPanel={ frontmatter.ourValuesPanel }
      applyPanel={ frontmatter.applyPanel } />
    </Layout>
  );
};

OurValuesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default OurValuesPage;

export const ourValuesPageQuery = graphql`
 query OurValuesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heroPanel {
          darkMode
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
        }
        ourValuesPanel {
          title
          paragraph
          values {
            valueImage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
            title
            paragraph
          }
        }
        applyPanel {
          darkMode
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