import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

/* eslint-disable */
export default function SpotlightCard(props) {
  const {
    image,
    title,
    date,
    link
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        bg-white
      '>
        {( image || title || date || link ) && (
          <div className='
            flex flex-col
            bg-white rounded-2xl shadow-card
            overflow-hidden
          '>
            { image?.src?.url ? (
              <img className='w-full h-64'
              src={ image.src }
              alt={ image.alt } />
            ) : (
              <GatsbyImage className='w-full h-64'
              image={ image.src }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
            <div className='
              flex flex-col
              items-center
              p-6 gap-6
            '>
              { title && (
                <div className='
                  flex
                  justify-center items-center
                  h-8
                '>
                  <p className='text-center text-sm'>
                    { title.length < 65 ? title : title.slice(0,62)+'...' }
                  </p>
                </div>
              ) }
              { date && (
                <div className='
                  flex
                  justify-center items-center
                  h-6
                '>
                  <p className='text-center font-light text-xs'>
                    { date }
                  </p>
                </div>
              ) }
              { link && (
                <Link className='
                  flex
                  justify-end items-center
                  w-full h-8
                  text-sm
                '
                to={link}>
                  <span>
                    Keep Reading →
                  </span>
                </Link>
              ) }
            </div>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

SpotlightCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
};