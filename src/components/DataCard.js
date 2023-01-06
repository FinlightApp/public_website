import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function DataCard(props) {
  const {
    image,
    title,
    paragraph,
  } = props;

  return (
    <React.Fragment>
      <div className='
        max-w-sm
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
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
            w-48 h-48
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
        { title && (
          <p className='text-lg font-normal leading-8'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='text-base font-light leading-6 text-center'>
            { paragraph }
          </p>
        ) }
      </div>
    </React.Fragment>
  );
}

DataCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string
};