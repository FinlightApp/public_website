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
          flex lg:flex-row
          w-full
          p-6 md:p-12
          z-0
        '>
          <div className='
            container
            overflow-hidden
            flex flex-col lg:flex-row justify-center
            w-full h-fit
            z-10 rounded-2xl
          '>
            { image?.src?.url ? (
              <img className='w-full lg:w-[50%] lg:h-96'
              src={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-full lg:w-[50%] lg:h-96'
              formats={ ['auto', 'webp'] }
              image={ getImage(image.src) || image.src }
              alt={ image.alt } />
            ) }
            <div className='
              flex  flex-col justify-center
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
              <div className='flex flex-col justify-center items-start'>
                { ( author &&
                  <p className='lg:hidden text-sm font-light leading-6'>
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