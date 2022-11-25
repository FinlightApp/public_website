import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function HeroDark(props) {
  const {
    imageBg,
    title,
    subHeading,
    button,
  } = props;

  return (
    <React.Fragment>
      <div className='
        relative
        flex
        justify-center lg:justify-start
      '>
        { imageBg?.url ? (
          <img className='w-full h-screen'
          src={ imageBg }
          alt='heroBg' />
        ) : (
          <GatsbyImage className='w-full h-screen'
          image={ imageBg }
          formats={ ['auto', 'webp'] }
          alt='heroBg' />
        ) }
        {( title || subHeading || button ) && (
          <div className='
            absolute
            flex flex-col self-center
            gap-8 p-10 lg:mx-36
            w-[90%] lg:w-96 md:w-[70%] h-auto
            rounded-xl  text-center
            bg-whiteHero backdrop-blur-md shadow-lg
          '>
            { title && (
              <h1 className='text-3xl lg:text-5xl text-heroTitle text-white'>
                { title }
              </h1>
            ) }
            <div className='
              w-full h-0.5
              bg-gradient-to-r from-transparent via-darkHeroBlue to-transparent
            ' />
            { subHeading && (
              <h3 className='sm:text-base md:text-xl text-heroText text-white'>
                { subHeading }
              </h3>
            ) }
            { button && (
              <button className='
                self-center
                w-40
                p-2
                bg-darkHeroBlue
                rounded text-black font-heroTitle
              '>
                { button }
              </button>
            ) }
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

HeroDark.propTypes = {
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};
