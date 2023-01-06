import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import  linkedinIcon from '../img/linkedin_logo_blue.svg';

/* eslint-disable */
export default function ProfileCard(props) {
  const {
    image,
    title,
    subheading,
    link
  } = props;

  return (
    <React.Fragment>
      <div className='
        max-w-sm
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        bg-white
      '>
        {( image || title || subheading || link ) && (
          <div className='
            flex flex-col
            items-center
            p-6 gap-6
            bg-white rounded-2xl shadow-card
          '>
            { image?.src?.url ? (
              <img className='w-44 h-44 rounded-full'
              src={ image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-44 h-44 rounded-full'
              image={ image.src }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
            { title && (
              <p className='text-center text-lg font-normal leading-8'>
                { title }
              </p>
            ) }
            { subheading && (
              <p className='text-center text-base font-light leading-4'>
                { subheading }
              </p>
            ) }
            { link && (
              <div className='
                flex
                justify-center
                w-full
              '>
                <a href={ link } target='_blank' rel='noopener noreferrer'>
                  <img className='h-8 w-8'
                  src={ linkedinIcon } alt='linkedinIcon' />
                </a>
              </div>
            ) }
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

ProfileCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  link: PropTypes.string,
};