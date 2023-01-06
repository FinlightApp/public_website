import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Apply from '../components/Apply';
import ContactPanel from '../components/ContactPanel';

/* eslint-disable */
export const ContactPageTemplate = ({
  seo,
  heroPanel,
  applyPanel,
  contactPanel
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
      <ContactPanel
      title={ contactPanel.title }
      cards={ contactPanel.cards } />
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

ContactPageTemplate.propTypes = {
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
  contactPanel: PropTypes.shape({
    title: PropTypes.string,
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

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout seo={ frontmatter.seo }>
      <ContactPageTemplate
      heroPanel={ frontmatter.heroPanel }
      contactPanel={ frontmatter.contactPanel }
      applyPanel={ frontmatter.applyPanel } />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default ContactPage;

export const contactPageQuery = graphql`
 query ContactPage($id: String!) {
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
        contactPanel {
          title
          cards {
            image {
              src {
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