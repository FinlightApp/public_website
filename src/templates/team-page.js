import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';

/* eslint-disable */
export const TeamPageTemplate = ({
  heroPanel
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
      subHeading={ heroPanel.subHeading } />
    </div>
  );
};

TeamPageTemplate.propTypes = {
  heroPanel: PropTypes.shape({
    darkMode: PropTypes.bool,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    subHeading: PropTypes.string,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
      heroPanel={ frontmatter.heroPanel } />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    })
  })
};

export default TeamPage;

export const teamPageQuery = graphql`
 query TeamPage($id: String!) {
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
          subHeading
        }
      }
    }
  }
`;