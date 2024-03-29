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
          container
          flex flex-col lg:flex-row
          mx-auto p-6 md:p-12
          z-0
        '>
          <div className='
            flex-1
            max-h-[300px]
            lg:min-h-[400px] lg:max-h-[400px]
            overflow-hidden
            rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none
          '>
            { image?.src?.url ? (
              <img className='h-full'
              src={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='h-full'
              formats={ ['auto', 'webp'] }
              image={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) }
          </div>
          <div className='
            flex-1
            flex flex-col justify-center
            p-6 md:p-12
            gap-3 lg:gap-6
            bg-[#F6F6F6]
            rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};