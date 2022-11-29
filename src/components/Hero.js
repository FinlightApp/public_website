import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero(props) {
  const {
    imageBg,
    image,
    title,
    subHeading,
    button,
  } = props;

  return (
    <React.Fragment>
      <div className='
        relative 
        flex 
        justify-center
        margin-top-0 margin-left-0
      '>
        { imageBg?.url ? (
          <img
          className='w-full max-h-[500px] brightness-50'
          src={ imageBg }
          alt='heroBg' />
        ) : (
          <GatsbyImage
          className='w-full max-h-[500px] brightness-50'
          image={ imageBg }
          formats={ ['auto', 'webp'] }
          alt='heroBg' />
        ) }
        {( title || subHeading || image || button ) && (
          <div
          className='
            absolute
            container
            flex flex-col lg:flex-row
            items-center justify-center
            w-full h-full
            p-8
          '>
            <div className='
              hidden md:flex lg:flex-row
              flex-1
              justify-center
            '>
              { image?.url ? (
                <img
                className='
                  md:h-[250px] md:w-[350px]
                '
                src={ image }
                alt='heroImage' />
                ) : (
                <GatsbyImage
                className='
                  md:h-[250px] md:w-[350px]
                '
                image={ image }
                formats={ ['auto', 'webp'] } 
                alt='heroImage' />
                ) }
              </div>
              <div
              className='
                flex flex-col flex-1
                justify-center
                gap-4
                text-center
              '>
                { title && (
                  <h1 className='text-3xl text-white lg:text-5xl'>
                    { title }
                  </h1>
                ) }
                { subHeading && (
                  <h3 className='text-white sm:text-base md:text-xl'>
                    { subHeading }
                  </h3>
                ) }
                { button && (
                  <button
                  className='
                    self-center
                    w-40
                    p-2
                    text-white bg-blue-600
                    rounded
                  '>
                    { button }
                  </button>
                ) }
            </div>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

Hero.propTypes = {
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};