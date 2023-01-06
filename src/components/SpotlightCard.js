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
        max-w-sm
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        bg-white
      '>
        {( image || title || date || link ) && (
          <div className='
            flex-1
            flex flex-col
            bg-white rounded-2xl
            shadow-card hover:shadow-card-hover
            overflow-hidden
            transition transform
            ease-in-out
            delay-150
            hover:-translate-y-2 hover:scale-105
            duration-300
            motion-reduce:transition-none motion-reduce:hover:transform-none
            group/card
          '>
            { image?.src?.url ? (
              <img className='
                w-full h-64
                group-hover/card:scale-110
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
                w-full h-64
                group-hover/card:scale-110
                transition transform
                ease-in-out
                delay-150
                duration-300
                motion-reduce:transition-none motion-reduce:hover:transform-none
              '
              image={ image.src }
              formats={ ['auto', 'webp'] }
              alt={ image.alt } />
            ) }
            <div className='
              flex-1
              flex flex-col
              p-6 gap-6
            '>
              { title && (
                <p className='text-lg font-normal leading-8 text-left'>
                  { title }
                </p>
              ) }
              { date && (
                <p className='text-xs font-light leading-4 text-left'>
                  { date }
                </p>
              ) }
              { link && (
                <div className='flex-1 flex justify-start items-end'>
                  <Link className='
                    text-base
                    font-normal
                    leading-6
                    underline
                  '
                  to={link}>
                    Read Full Article
                  </Link>
                </div>
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