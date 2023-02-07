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
        max-w-4xl
        flex flex-col md:flex-row
        basis-full
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
        <div className='flex-1 flex flex-col justify-around items-start gap-6 h-full'>
          { title && (
            <p className='text-xl font-normal leading-8 text-center md:text-start w-full'>
              { title }
            </p>
          ) }
          { paragraph && (
            <p className='text-lg font-light leading-6 text-center md:text-start'>
              { paragraph }
            </p>
          ) }
        </div>
      </div>
    </React.Fragment>
  );
}

DataCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string
};