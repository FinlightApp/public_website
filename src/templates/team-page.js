import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import HeroDark from '../components/HeroDark';

/* eslint-disable */
export const TeamPageTemplate = ({
  heroImageBg,
  heroTitleHighlight,
  heroTitle,
  heroSubHeading,
  heroButton
}) => {
  const heroImgBg = getImage(heroImageBg) || heroImageBg; {
    return (
      <div>
        <HeroDark
        imageBg={ heroImgBg }
        highlight={ heroTitleHighlight }
        title={ heroTitle }
        subHeading={ heroSubHeading }
        button={ heroButton } />
      </div>
    );
  };
}

TeamPageTemplate.propTypes = {
  heroImageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitleHighlight: PropTypes.string,
  heroTitle: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroButton: PropTypes.string
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
        heroImageBg={ frontmatter.heroImageBg }
        heroTitleHighlight={ frontmatter.heroTitleHighlight }
        heroTitle={ frontmatter.heroTitle }
        heroSubHeading={ frontmatter.heroSubHeading }
        heroButton={ frontmatter.heroButton } />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TeamPage;

export const teamPageQuery = graphql`
 query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heroImageBg  {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        heroTitleHighlight
        heroTitle
        heroSubHeading
        heroButton
      }
    }
  }
`;