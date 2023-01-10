import * as React from "react";
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogHeader(props){

  const {
    image,
    title,
    author,
    date
  } = props;

  return(
    <>
      { ( image || title || author || date ) && (
        <div className='
          relative
          container
          overflow-hidden
          flex flex-col lg:flex-row
          m-6 md:m-12
          w-fit h-fit
          z-0 rounded-2xl
        '>
          <div className='flex w-full lg:w-[50%] lg:h-96'>
            { image?.src?.url ? (
              <img className='w-full h-full'
              src={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-full h-full'
              formats={ ['auto', 'webp'] }
              image={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) }
          </div>
          <div className='
            flex flex-col justify-center
            w-full lg:max-w-[50%] lg:h-96
            p-6 md:p-12
            gap-3 lg:gap-6
            bg-[#F6F6F6]
          '>
            { ( title &&
              <h1 className='
                text-left
                text-4xl font-bold leading-[48px]
              '>
                { title }
              </h1>
            ) }
            { ( author &&
              <p className='
                lg:hidden
                text-sm font-light leading-6
              '>
                { author }
              </p>
            ) }
            { ( date &&
              <p className='text-xs font-extralight leading-6'>
                { date }
              </p>
            ) }
         </div>
        </div>
      ) }
    </>
  )}

BlogHeader.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};