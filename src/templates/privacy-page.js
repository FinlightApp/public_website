import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PrivacyPanel from '../components/PrivacyPanel';

/* eslint-disable */
export const PrivacyPageTemplate = ({
  heroPanel
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
      modalContent={ heroPanel.modalContent } />
      <PrivacyPanel />
    </>
  );
};

PrivacyPageTemplate.propTypes = {
  heroPanel: PropTypes.shape({
    theme: PropTypes.object,
    backgroundImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
    modalContent: PropTypes.string,
  }),
};

const PrivacyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <PrivacyPageTemplate
      heroPanel={ frontmatter.heroPanel } />
    </Layout>
  );
};

PrivacyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default PrivacyPage;

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
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
          backgroundImg {
            src {
              childImageSharp {
                gatsbyImageData(quality: 100)
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
      }
    }
  }
`;
