import * as React from "react";
import PropTypes from 'prop-types';

export default function BlogHeader(props){

  const {
    title,
    author,
    date
  } = props;

  return(
    <>
      { ( title || author || date ) && (
        <div className='
          relative
          flex
          w-full h-fit
          z-0
        '>
          <div className='absolute inset-0 bg-[#F6F6F6] bg-cover z-0' />
          <div className='
            container
            flex-1
            flex flex-col justify-center
            py-12
            gap-10 lg:gap-12
            z-10
          '>
            { ( title &&
              <h1 className='
                px-6 md:px-12
                lg:max-w-[60%]
                text-left
                text-3xl md:text-4xl font-semibold
              '>
                { title }
              </h1>
            ) }
            <div className='
              px-6 md:px-12
              flex flex-col
              justify-center items-end
            '>
              { ( author &&
                <p className='text-sm font-light'>
                  { author }
                </p>
              ) }
              { ( date &&
                <p className='text-sm font-extralight'>
                  { date }
                </p>
              ) }
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