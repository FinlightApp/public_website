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
  seo,
  heroPanel,
  nonExecutiveDirectorsPanel,
  applyPanel
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
      paragraph={ heroPanel.paragraph } />
      <NonExecutiveDirectors
      title={ nonExecutiveDirectorsPanel.title }
      paragraph={ nonExecutiveDirectorsPanel.paragraph }
      nonExecutiveDirectors={ nonExecutiveDirectorsPanel.nonExecutiveDirectors } />
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

TeamPageTemplate.propTypes = {
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
  }),
  nonExecutivedirectorsPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    nonExecutiveDirectors: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    theme: PropTypes.object,
    imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
  }),
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout seo={ frontmatter.seo }>
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
        }
        nonExecutiveDirectorsPanel {
          title
          paragraph
          nonExecutiveDirectors {
            nonExecutiveDirectorImage {
              image {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              alt
            }
            name
            role
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