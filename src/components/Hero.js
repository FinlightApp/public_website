import React from 'react';
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

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
        flex md:flex-col lg:flex-row
        pt-48 lg:pt-52 md:py-10 lg:gap-10
        bg-[url${(img)}] bg-cover bg-center
      `} >
        <div
        className='
          hidden md:flex md:flex-col
          h-full w-full
          px-12
        '>
          <GatsbyImage
          image={ imageHero }
          className='
            self-center
            lg-w-full lg:h-auto
            w-[500px] h-[400px]
          '
          alt='imageHero'
          formats={['auto', 'webp', 'avif']}
          />
        </div>
        <div className='
          flex flex-col
          px-12 gap-y-10
          text-center text-white
        '>
          <h1 className='
            m:width-full
            lg:text-5xl text-3xl
          '>
            { title }
          </h1>
          <p
          className='
            sm:width-full
            md:text-xl sm:text-base
          '>
            { subheading }
          </p>
          <button
          className='
            self-center
            w-40
            p-2
            bg-blue-600 text-white
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
