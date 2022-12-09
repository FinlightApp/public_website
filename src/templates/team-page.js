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
      backgroundImg={ {
        src: getImage(heroPanel.backgroundImg.src) || heroPanel.backgroundImg.src,
        alt: heroPanel.backgroundImg.alt
      } }
      title={ heroPanel.title }
      titleHighlight={ heroPanel.titleHighlight }
      paragraph={ heroPanel.paragraph }
      modalContent={ heroPanel.modalContent } />
      <TeamPanel
      title={ teamPanel.title }
      paragraph={ teamPanel.paragraph }
      cards={ teamPanel.cards } />
      <NonExecutiveDirectors
      title={ nonExecutiveDirectorsPanel.title }
      paragraph={ nonExecutiveDirectorsPanel.paragraph }
      cards={ nonExecutiveDirectorsPanel.cards } />
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

TeamPageTemplate.propTypes = {
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
    modalContent: PropTypes.string,
  }),
  teamPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array,
  }),
  nonExecutivedirectorsPanel: PropTypes.shape({
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
        teamPanel {
          title
          paragraph
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
            subheading
            link
          }
        }
        nonExecutiveDirectorsPanel {
          title
          paragraph
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
            subheading
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
                gatsbyImageData(quality: 100)
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