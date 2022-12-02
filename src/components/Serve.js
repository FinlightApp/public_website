import React from 'react';
import PropTypes from 'prop-types';
import Card from './Cards';
export default function Serve(props) {
  const {
    title,
    description,
    cards
  } = props;

  return (
    <React.Fragment>
      {( title || title || cards )  && (
        <div className='
          flex flex-col
          items-center
          h-auto
          px-6 py-12 md:p-12 gap-6 lg:gap-12
          bg-[#F6F6F6]
          text-center
        '>
          <div className='h-auto w-[50%]'>
            {title && (
              <p className='text-3xl font-semibold'>{ title }</p>
            )}
          </div>
          <hr className='
            h-[3px] w-1/3
            border-transparent
            bg-gradient-to-r from-transparent via-primary to-transparent
          ' />
          <div className='h-auto md:w-[80%] lg:w-[50%]'>
            {description && (
              <p className='text-xl'>{ description }</p>
            )}
          </div>
          <div>
            {cards && (
              <Card gridItems={ cards } />
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Serve.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  blurbs: PropTypes.array
};