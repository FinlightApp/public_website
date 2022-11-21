import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Team from '../components/Team';

/* eslint-disable */
export const TeamPageTemplate = ({
  title
}) => {
  return (
    <div>
      <Team title={title} />
      <h2>Here is the page for team page</h2>
    </div>
  );
};

TeamPageTemplate.propTypes = {
  title: PropTypes.string
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
      />
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
        title
      }
    }
  }
`;