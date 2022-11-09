import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Hero(props) {
  const {
    img,
    imageHero,
    title,
    subheading,
    button,
  } = props;

  return (
    <React.Fragment>
      <div className={`
        flex flex-1 flex-col lg:flex-row
        p-10
        bg-[url${(img)}] bg-cover bg-center
      `}>
        <div
        className='
          hidden md:flex flex-1 flex-col
          p-10
        '>
          <GatsbyImage className='self-center'
          image={ imageHero }
          alt='imageHero'
          formats={ ['auto', 'webp'] }
          />
        </div>
        <div className='
          flex flex-1 flex-col
          gap-y-10
          text-center text-black
        '>
          <h1 className='lg:text-5xl text-3xl'>
            { title }
          </h1>
          <p className='sm:text-base md:text-xl'>
            { subheading }
          </p>
          <button className='
            self-center p-2 w-40
            bg-blue-600 text-black
            rounded
          '>
            { button }
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

Hero.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
