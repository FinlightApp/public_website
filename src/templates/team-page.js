import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NonExecutiveDirectors from '../components/NonExecutiveDirectors';
import Apply from '../components/Apply';

/* eslint-disable */
export const TeamPageTemplate = ({
  heroPanel,
  nonExecutiveDirectorsPanel,
  applyPanel
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
      <NonExecutiveDirectors
      title={ nonExecutiveDirectorsPanel.title }
      nonExecutiveDirectors={ nonExecutiveDirectorsPanel.nonExecutiveDirectors } />
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

TeamPageTemplate.propTypes = {
  heroPanel: PropTypes.shape({
    darkMode: PropTypes.bool,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
  }),
  nonExecutivedirectorsPanel: PropTypes.shape({
    title: PropTypes.string,
    nonExecutiveDirectors: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    darkMode: PropTypes.bool,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
      heroPanel={ frontmatter.heroPanel }
      nonExecutiveDirectorsPanel={ frontmatter.nonExecutiveDirectorsPanel }
      applyPanel={ frontmatter.applyPanel } />
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
          paragraph
        }
        nonExecutiveDirectorsPanel {
          title
          nonExecutiveDirectors {
            nonExecutiveDirectorImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
            name
            role
            link
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