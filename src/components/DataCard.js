import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function DataCard(props) {
  const {
    cardImage,
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
        rounded-2xl shadow-card
      '>
        { cardImage?.image?.url ? (
          <img className='w-48 h-48'
          src={ cardImage.image }
          alt={ cardImage.alt } />
        ) : (
          <GatsbyImage className='w-48 h-48 border'
          objectFit='fill'
          image={ cardImage.image }
          formats={ ['auto', 'webp'] }
          alt={ cardImage.alt } />
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
  cardImage: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string
};