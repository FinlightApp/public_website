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
  seo,
  heroPanel,
  partnersPanel,
  applyPanel,
}) => {
  return (
    <>
      <Hero
      theme={ heroPanel.theme }
      backgroundImg={ {
        src: getImage(heroPanel.backgroundImg.src) || heroPanel.backgroundImg.src,
        alt: heroPanel.backgroundImg.alt
      } }
      title={ heroPanel.title }
      titleHighlight={ heroPanel.titleHighlight }
      paragraph={ heroPanel.paragraph }
      button={ heroPanel.button }
      modalContent={ heroPanel.modalContent } />
      <Partners
      title={ partnersPanel.title }
      paragraph={ partnersPanel.paragraph }
      cards={ partnersPanel.cards } />
      <Apply
      theme={ applyPanel.theme }
      backgroundImg={ {
        src: getImage(applyPanel.backgroundImg.src) || applyPanel.backgroundImg.src,
        alt: applyPanel.backgroundImg.alt
      } }
      title={ applyPanel.title }
      paragraph={ applyPanel.paragraph }
      button={ applyPanel.button }
      modalContent={ applyPanel.modalContent } />
    </>
  );
};

PartnersPageTemplate.propTypes = {
  seo: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    title: PropTypes.string,
  }),
  heroPanel: PropTypes.shape({
    theme: PropTypes.object,
    backgroundImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    modalContent: PropTypes.string,
  }),
  partnersPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    theme: PropTypes.object,
    backgroundImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    modalContent: PropTypes.string,
  }),
};

const PartnersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout seo={ frontmatter.seo }>
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
          backgroundImg {
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
          title
          titleHighlight
          paragraph
          button
          modalContent
        }
        partnersPanel {
          title
          paragraph
          cards {
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
            }
            title
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
          backgroundImg {
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
          title
          paragraph
          button
          modalContent
        }
      }
    }
  }
`;