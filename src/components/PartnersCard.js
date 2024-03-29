import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function PartnersCard(props) {
  const {
    image,
    title,
    link,
  } = props;

  return (
    <React.Fragment>
      <a className='
        max-w-sm
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        rounded-2xl
        shadow-card hover:shadow-card-hover
        transition transform
        ease-in-out
        delay-150
        hover:-translate-y-2 hover:scale-105
        duration-300
        motion-reduce:transition-none motion-reduce:hover:transform-none
        group/card
      '
      href={ link }
      target='_blank'
      rel='noreferrer noopener'
      referrerPolicy='no-referrer'
      aria-label={ title }>
        <div className='
          flex flex-col
          justify-center items-center
          w-48 h-48
        '>
          { image?.src?.url ? (
            <img className='
              w-full
              group-hover/card:scale-110
              transition transform
              ease-in-out
              delay-150
              duration-300
              motion-reduce:transition-none motion-reduce:hover:transform-none
            '
            src={ image.src }
            alt={ `${title} logo` } />
          ) : (
            <GatsbyImage className='
              w-full
              group-hover/card:scale-110
              transition transform
              ease-in-out
              delay-150
              duration-300
              motion-reduce:transition-none motion-reduce:hover:transform-none
            '
            objectFit='fill'
            image={ image.src }
            formats={ ['auto', 'webp'] }
            alt={ `${title} logo` } />
          ) }
        </div>
        <p className='text-xl font-normal leading-8 text-center'>
          { title }
        </p>
      </a>
    </React.Fragment>
  );
}
