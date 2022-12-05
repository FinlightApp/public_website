import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Card(props) {
  const {
    image,
    title,
    text,
  } = props;

  return (
    <React.Fragment>
      { ( title || text || image ) && (
        <div className='
          flex flex-col
          items-center justify-center
          p-6 gap-6
          lg:w-[416px] h-fit w-fit
          rounded-2xl bg-white shadow-md
        '>
          { image?.image?.url ? (
            <img className='h-44 w-44'
            src={ image.image }
            alt={ image.alt } />
          ) : (
            <GatsbyImage className='h-44 w-44'
            image={ image.image }
            formats={ ['auto', 'webp'] }
            alt={ image.alt } />
          ) }
          { title && (
            <p className='text-xl font-semibold'>
              { title }
            </p>
          ) }
          { text && (
            <p className='text-base'>
              { text }
            </p>
          ) }
        </div>
      ) }
    </React.Fragment>
  );
}

Card.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  text: PropTypes.string
};
