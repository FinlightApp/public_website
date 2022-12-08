import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TeamPanel from '../components/TeamPanel';
import NonExecutiveDirectors from '../components/NonExecutiveDirectors';
import Apply from '../components/Apply';

/* eslint-disable */
export const TeamPageTemplate = ({
  seo,
  heroPanel,
  teamPanel,
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
      <TeamPanel
      title={ teamPanel.title }
      paragraph={ teamPanel.paragraph }
      cards={ teamPanel.cards } />
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
  teamPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array,
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
      teamPanel={ frontmatter.teamPanel }
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
        teamPanel {
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
            subheading
            link
          }
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