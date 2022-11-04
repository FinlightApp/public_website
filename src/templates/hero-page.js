import React from "react";
import PropTypes from "prop-types";
import {graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import HeroImg from '../img/new_design/Mask group.svg'

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading
}) => {
  const herobg = getImage(image) || image;

  const backgroundImage = {
    backgroundImage: `url('${herobg}')`,
    backgroundSize: 'cover',
    position: 'center'
  };
  return (
      <div>
        <div
        style={backgroundImage}
        className='container flex flex-col justify-center h-screen text-center lg:flex-row'>
          <div className='self-center justify-center hidden w-full md:flex'>
            <img
            src={ HeroImg }
            alt='PC'
            style={{ width:'500px', height: '400px' }}/>
          </div>
          <div className='flex flex-col self-center w-full h-auto gap-8 p-8 text-white '>
            <h1 className='text-2xl md:text-5xl'>{ title }</h1>
            <p className='text-xl md:text-2xl'>{ subheading }</p>
            <div className=''>
              <button className='px-4 py-2 text-white bg-blue-600 rounded'>
                Info Request
              </button>
            </div>
          </div>
      </div> 
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
      />
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
      title
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        } 
     }
   }
 }
}
`;
