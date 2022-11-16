import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero(props) {
  const {
    img,
    imageHero,
    title,
    subheading,
    heroButton,
  } = props;

  return (
    <React.Fragment>
      <div 
      className='relative flex content-center margin-top-0 margin-left-0'
      >
        {img?.url ? (
          <img
          className='w-full h-full'
          src={ img }
          alt='heroBg'/>
        ) : (
          <GatsbyImage
          image={ img }
          formats={ ['auto', 'webp'] }/>
        )}
      {(title || subheading || imageHero || heroButton ) && (
        <div
        className='absolute flex flex-col items-center justify-center w-full h-full gap-2 p-8 top-4 lg:flex-row'
        >
          {imageHero?.url ? (
            <img
            className='
              hidden md:flex
              max-h-[300px] max-w-[400px]'
              src={ imageHero }
              alt='heroImage'/>
            ) : (
            <GatsbyImage
            className='
              hidden md:flex lg:flex-row
              md:h-[250px] md:w-[200px]'
            image={ imageHero }
            formats={ ['auto', 'webp'] }/>
            )}
            <div 
            className='flex flex-col gap-4 px-10 text-center '
            >
              {title && (
                <h1 className='text-3xl text-white lg:text-5xl'>
                  { title }
                </h1>
              )}
              {subheading && (
                <h3 className='text-white sm:text-base md:text-xl'>
                  { subheading }
                </h3>
              )}
              {heroButton && (
                <button
                className='self-center w-40 p-2 text-white bg-blue-600 rounded '
                >
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
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageHero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  heroButton: PropTypes.string
};


