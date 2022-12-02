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
      <div className='
        flex flex-col
        items-center justify-center
        p-6 gap-6
        lg:w-[416px] h-fit w-fit
        rounded-2xl bg-white shadow-md
      '>
        { image?.url ? (
          <img className='h-[180px] w-[180px]'
          src={ image }
          alt='img' />
        ) : (
          <GatsbyImage className='h-[180px] w-[180px]'
          image={ image }
          formats={ ['auto', 'webp'] }
          alt='img' />
        ) }
        <p className='text-xl font-semibold'>
          { title }
        </p>
        <p className='text-base'>
          { text }
        </p>
      </div>
    </React.Fragment>
  );
}

Card.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  text: PropTypes.string
};
