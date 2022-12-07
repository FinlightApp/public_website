import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import  linkedinIcon from '../img/social/linkedin.svg'

/* eslint-disable */
export default function TeamCard(props) {
  const {
    cardImage,
    title,
    subheading,
    link
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        bg-white
      '>
        { ( cardImage || title || subheading || link ) && (
          <div  className='
            flex flex-col
            items-center
            p-6 gap-6
            bg-white rounded-2xl shadow-card
          '>
            { cardImage?.image?.url ? (
              <img className='w-44 h-44'
              src={ cardImage.image }
              alt={ cardImage.alt } />
            ) : (
              <GatsbyImage className='w-44 h-44'
              image={ cardImage.image }
              formats={ ['auto', 'webp'] }
              alt={ cardImage.alt } />
            ) }
            { title && (
              <p className='text-center font-normal text-sm'>
                { title }
              </p>
            ) }
            { subheading && (
              <p className='text-center font-light text-xs'>
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

TeamCard.propTypes = {
  cardImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  link: PropTypes.string,
};