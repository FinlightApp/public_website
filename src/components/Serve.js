import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Serve(props) {
  const {
    title,
    description,
    cards
  } = props;

  return (
    <React.Fragment>
      {( title || description || cards ) && (
        <div className='
          flex flex-col
          items-center
          h-auto
          px-6 py-12 md:p-12 gap-6 lg:gap-12
          bg-[#F6F6F6]
          text-center
        '>
          {title && (
            <div className='
              flex flex-col
              justify-center
              h-auto w-[50%]
              gap-12
            '>
              <p className='text-3xl font-semibold'>{ title }</p>
              <hr className='
                h-[3px] w-1/3
                border-transparent
                bg-gradient-to-r from-transparent via-primary to-transparent
              ' />
            </div>
          )}
          {description && (
            <div className='h-auto md:w-[80%] lg:w-[50%]'>
              <p className='text-xl'>{ description }</p>
            </div>
          )}
          {cards && (
            <div className='flex flex-col items-center justify-center w-auto gap-12 lg:flex-row md:flex-wrap'>
              <Card gridItems={ cards } />
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

Serve.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cards: PropTypes.array
};