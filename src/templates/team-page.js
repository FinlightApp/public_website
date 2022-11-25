import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import HeroLight from '../components/HeroLight';

/* eslint-disable */
export const TeamPageTemplate = ({
  heroImageBg,
  heroTitleHighlight,
  heroTitle,
  heroSubHeading
}) => {
  const heroImgBg = getImage(heroImageBg) || heroImageBg; {
    return (
      <div>
        <HeroLight
        imageBg={ heroImgBg }
        highlight={ heroTitleHighlight }
        title={ heroTitle }
        subHeading={ heroSubHeading } />
      </div>
    );
  };
}

TeamPageTemplate.propTypes = {
  heroImageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitleHighlight: PropTypes.string,
  heroTitle: PropTypes.string,
  heroSubHeading: PropTypes.string
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
        heroImageBg={ frontmatter.heroImageBg }
        heroTitleHighlight={ frontmatter.heroTitleHighlight }
        heroTitle={ frontmatter.heroTitle }
        heroSubHeading={ frontmatter.heroSubHeading } />
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
      }
    }
  }
`;