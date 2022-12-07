import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Apply from '../components/Apply';
import Partners from '../components/Partners';

/* eslint-disable */
export const PartnersPageTemplate = ({
  heroPanel,
  applyPanel,
  partnersPanel,
}) => {
  return (
    <div>
      <Hero
      theme={ heroPanel.theme }
      imageBg={ {
        image: getImage(heroPanel.imageBg.image) || heroPanel.imageBg.image,
        alt: heroPanel.imageBg.alt
      } }
      title={ heroPanel.title }
      titleHighlight={ heroPanel.titleHighlight }
      paragraph={ heroPanel.paragraph } />
      <Partners
      title={ partnersPanel.title }
      paragraph={ partnersPanel.paragraph }
      partners={ partnersPanel.partners } />
      <Apply
      theme={ applyPanel.theme }
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

PartnersPageTemplate.propTypes = {
  heroPanel: PropTypes.shape({
    theme: PropTypes.object,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
  }),
  partnersPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    partners: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    theme: PropTypes.object,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  }),
};

const PartnersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <PartnersPageTemplate
      heroPanel={ frontmatter.heroPanel }
      partnersPanel={ frontmatter.partnersPanel }
      applyPanel={ frontmatter.applyPanel } />
    </Layout>
  );
};

PartnersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default PartnersPage;

export const partnersPageQuery = graphql`
 query PartnersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        }
        partnersPanel {
          title
          paragraph
          partners {
            partnerImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
            name
            link
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