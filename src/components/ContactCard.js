import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ContactCard(props) {
  const {
    image,
    title,
    paragraph
  } = props;

  return (
    <React.Fragment>
      <div className='
        max-w-sm
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
            w-14 h-14
          '>
            { image?.src?.url ? (
              <img className='w-14 h-14'
              src={image.src}
              alt={image.alt} />
            ) : (
              <GatsbyImage className='w-14 h-14'
              objectFit='fill'
              image={image.src}
              formats={['auto', 'webp']}
              alt={image.alt} />
            ) }
          </div>
        ) }
        { title && (
          <p className='text-xl font-normal leading-6'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='text-xl font-semibold leading-6 text-center'>
            { paragraph }
          </p>
        ) }
      </div>
    </React.Fragment>
  );
}

ContactCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  paragraph: PropTypes.string,
};