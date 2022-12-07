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
      paragraph={ heroPanel.paragraph }
      button={ heroPanel.button } />
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
          }
          imageBg {
            alt
            image {
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
          }
          title
          titleHighlight
          paragraph
          button
        }
        partnersPanel {
          title
          paragraph
          partners {
            partnerImage {
              image {
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
          }
          title
          paragraph
          button
        }
      }
    }
  }
`;