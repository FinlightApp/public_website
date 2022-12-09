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
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        bg-white rounded-2xl shadow-card
      '>
        { image && (
          <div className='
            flex flex-row
            justify-center items-center
            w-48 h-48
          '>
            { image?.src?.url ? (
              <img className='w-full'
              src={ image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-full'
              objectFit='fill'
              image={ image.src }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
          </div>
        ) }
        { title && (
          <p className='font-header font-semibold'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='font-paragraph text-center'>
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