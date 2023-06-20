import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function DataColumn(props) {
  const {
    image,
    title,
    paragraph,
  } = props;

  return (
    <React.Fragment>
      <div className='
        lg:max-w-sm
        flex flex-col
        shrink-0
        flex-1
        items-left justify-start
        p-6 gap-3
        bg-white rounded-2xl
        shadow-card hover:shadow-card-hover
        transition transform
        ease-in-out
        delay-150
        hover:-translate-y-2 hover:scale-105
        duration-300
        motion-reduce:transition-none motion-reduce:hover:transform-none
        group/card
      '>
        { image && (
          <div className='
            flex flex-row
            justify-center items-center
            w-8 h-8
          '>
            { image?.src?.url ? (
              <img className='
                w-full
                group-hover/card:scale-105
                transition transform
                ease-in-out
                delay-150
                duration-300
                motion-reduce:transition-none motion-reduce:hover:transform-none
              '
              src={ image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='
                w-full
                group-hover/card:scale-105
                transition transform
                ease-in-out
                delay-150
                duration-300
                motion-reduce:transition-none motion-reduce:hover:transform-none
              '
              objectFit='fill'
              image={ image.src }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
          </div>
        ) }
        <div className='flex-1 flex flex-col justify-start items-start gap-1.5 h-full'>
          { title && (
            <p className='text-xl font-medium leading-8 text-start w-full'>
              { title }
            </p>
          ) }
          { paragraph && (
            <p className='text-lg font-light leading-6 text-start'>
              { paragraph }
            </p>
          ) }
        </div>
      </div>
    </React.Fragment>
  );
}

DataColumn.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string
};