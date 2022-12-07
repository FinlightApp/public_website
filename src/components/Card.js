import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

/* eslint-disable */
export default function Card(props) {
  const {
    image,
    title,
    subheading,
    linkedin
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
      '>
        { ( image || title || subheading || linkedin ) && (
          <div  className='
            flex flex-col
            items-center
            p-6 gap-6
            bg-white rounded-2xl shadow-card
          '>
            { image?.image?.url ? (
              <img className='w-44 h-44'
              src={ image.image }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-44 h-44'
              image={ image.image }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
            { title && (
              <p className='
                text-center 
                font-normal text-sm
              '>
                { title }
              </p>
            ) }
            { subheading && (
              <p className='
                text-center
                font-light text-xs text-smallText
              '>
                { subheading }
              </p>
            ) }
            { linkedin?.image?.url ? (
              <div className='
                flex 
                justify-center
                w-full
              '>
                <a href={ linkedin.link } target='_blank'>
                  <img className='h-8 w-8'
                  src={ linkedin.image }
                  alt={ linkedin.alt } />
                </a>
              </div>
            ) : (
              <div className='
                flex 
                justify-center
                w-full
              '>
                <a href={ linkedin.link } target='_blank'>
                  <GatsbyImage className='h-12 w-12'
                  image={ linkedin.image }
                  formats={ ['auto', 'webp'] }
                  alt={ linkedin.alt } />
                </a>
              </div>
            ) }
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  linkedin: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};