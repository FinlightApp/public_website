import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from 'gatsby-plugin-image';


const Card = ({ gridItems }) => (
  <div className='
    flex flex-col
    items-center justify-center
    p-6 gap-6
    lg:w-[416px] h-fit w-fit
    rounded-2xl bg-white shadow-md
  '>
    {gridItems.map((item, i) => (
      <div key={i}>
        {console.log( i, item.image)}
        { item.image?.url ? (
          <img className='h-[180px] w-[180px]'
          src={ item.image }
          alt='img' />
        ) : (
          <GatsbyImage className='h-[180px] w-[180px]'
          image={ item.image }
          formats={ ['auto', 'webp'] }
          alt='img' />
        ) }
        <p className='text-xl font-semibold'>
          { item.title }
        </p>
        <p className='text-base'>
          { item.text }
        </p>
      </div>
    ))}
 </div>
);

Card.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Card;
