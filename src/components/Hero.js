import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero(props) {
  const {
    heroImageBg,
    heroImage,
    heroTitle,
    heroSubHeading,
    heroButton,
  } = props;

  return (
    <React.Fragment>
      <div 
      className='
       relative
       flex
       content-center 
       margin-top-0 margin-left-0
      '>
        {heroImageBg?.url ? (
          <img
          className='w-full h-full'
          src={ heroImageBg }
          alt='heroBg' />
        ) : (
          <GatsbyImage
          image={ heroImageBg }
          formats={ ['auto', 'webp'] } />
        )}
      {(heroTitle || heroSubHeading|| heroImage || heroButton ) && (
        <div
        className='
          absolute
          flex flex-col lg:flex-row
          items-center justify-center
          w-full h-full 
          gap-2 p-8 top-4
        '>
          {heroImage?.url ? (
            <img
            className='
              hidden md:flex
              md:h-[250px] md:w-[350px]'
              src={ heroImage }
              alt='heroImage' />
            ) : (
            <GatsbyImage
            className='
              hidden md:flex lg:flex-row
              md:h-[250px] md:w-[300px]'
            image={ heroImage }
            formats={ ['auto', 'webp'] } />
            )}
            <div 
            className='
              flex flex-col 
              gap-4 px-10 
              text-center
            '>
              {heroTitle && (
                <h1 className='text-3xl text-white lg:text-5xl'>
                  { heroTitle }
                </h1>
              )}
              {heroSubHeading&& (
                <h3 className='text-white sm:text-base md:text-xl'>
                  { heroSubHeading }
                </h3>
              )}
              {heroButton && (
                <button
                className='
                  self-center 
                  w-40 p-2 
                  text-white bg-blue-600 
                  rounded
                '>
                  { heroButton }
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Hero.propTypes = {
  heroImageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroTitle: PropTypes.string,
  heroSubHeading: PropTypes.string,
  heroButton: PropTypes.string
};
