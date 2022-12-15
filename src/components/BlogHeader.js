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
          px-8 py-10 lg:p-12
          gap-10 lg:gap-12
          bg-[#F6F6F6]
        '>
          { ( title &&
            <p className='
              lg:w-[60%]
              text-3xl
            '>
              { title }
            </p>
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