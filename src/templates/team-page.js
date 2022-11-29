import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import Layout from '../components/Layout';
import HeroDark from '../components/HeroDark';

/* eslint-disable */
export const TeamPageTemplate = ({
  heroImageBg,
  heroTitle,
  heroHighlight,
  heroSubHeading
}) => {
  const heroImgBg = getImage(heroImageBg) || heroImageBg; {
    return (
      <div>
        <HeroDark
        imageBg={ heroImgBg }
        title={ heroTitle }
        highlight={ heroHighlight }
        subHeading={ heroSubHeading } />
      </div>
    );
  };
}

TeamPageTemplate.propTypes = {
  heroImageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroHighlight: PropTypes.string,
  heroSubHeading: PropTypes.string
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
        heroImageBg={ frontmatter.heroImageBg }
        heroTitle={ frontmatter.heroTitle }
        heroHighlight={ frontmatter.heroTitleHighlight }
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
        heroTitle
        heroHighlight
        heroSubHeading
      }
    }
  }
`;