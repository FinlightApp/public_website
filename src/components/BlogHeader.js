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
          flex flex-col justify-center
          w-full
          px-6 py-8 lg:p-12
          gap-10 lg:gap-12
          bg-[#F6F6F6]
        '>
          { ( title &&
            <h1 className='
              lg:w-[60%]
              text-3xl font-semibold
            '>
              { title }
            </h1>
          ) }
          <div className='
            flex flex-col
            justify-center items-end
            w-full
          '>
            { ( author &&
              <p className='text-sm'>
                { author }
              </p>
            ) }
            { ( date &&
              <p className='text-sm'>
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
  date: PropTypes.object,
};