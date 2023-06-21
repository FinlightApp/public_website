import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Community from '../components/Community';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Feature from '../components/Feature';
import Apply from '../components/Apply';
import Serve from '../components/Serve';
import SpotlightPanel from '../components/SpotlightPanel';
import ChatBot from '../components/ChatBot';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  seo,
  heroPanel,
  communityPanel,
  privateMarketPanel,
  howItWorksPanel,
  FAQPanel,
  servePanel,
  featurePanel,
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
      <ChatBot />
      <Feature
      title={ featurePanel.title }
      paragraph={ featurePanel.paragraph}
      cards={ featurePanel.cards } />
      <Serve
      title={ servePanel.title }
      paragraph={ servePanel.paragraph }
      cards={ servePanel.cards } />
      <HowItWorks
      title={ howItWorksPanel.title }
      paragraph={ howItWorksPanel.paragraph }
      cards={ howItWorksPanel.cards } />
      <Community
      title={ communityPanel.title }
      paragraph={ communityPanel.paragraph }
      cards={ communityPanel.cards } />
      <Community
      title={ privateMarketPanel.title }
      paragraph={ privateMarketPanel.paragraph }
      cards={ privateMarketPanel.cards } />
      <FAQ
      title={ FAQPanel.title }
      paragraph={ FAQPanel.paragraph }
      cards={ FAQPanel.cards } />
      <SpotlightPanel
      limit={ 3 } />
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

IndexPageTemplate.propTypes = {
  seo: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    title: PropTypes.string,
  }),
  heroPanel: PropTypes.shape({
    theme: PropTypes.object,
    backgroundImg: PropTypes.object,
    title: PropTypes.string,
    titleHighlight: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    modalContent: PropTypes.string,
  }),
  communityPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  privateMarketPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  howItWorksPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  FAQPanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  servePanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array
  }),
  featurePanel: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    cards: PropTypes.array,
  }),
  applyPanel: PropTypes.shape({
    theme: PropTypes.object,
    backgroundImg: PropTypes.object,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    modalContent: PropTypes.string,
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout seo={ frontmatter.seo }>
      <IndexPageTemplate
      heroPanel={ frontmatter.heroPanel }
      communityPanel={ frontmatter.communityPanel }
      privateMarketPanel={ frontmatter.privateMarketPanel }
      howItWorksPanel={ frontmatter.howItWorksPanel }
      FAQPanel={ frontmatter.FAQPanel }
      servePanel={ frontmatter.servePanel }
      featurePanel={ frontmatter.featurePanel }
      applyPanel={ frontmatter.applyPanel } />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        communityPanel {
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
            paragraph
          }
        }
        privateMarketPanel {
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
            paragraph
          }
        }
        howItWorksPanel {
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
            paragraph
          }
        }
        FAQPanel {
          title
          paragraph
          cards {
            title
            paragraph
          }
        }
        servePanel {
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
            paragraph
          }
        }
        featurePanel {
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