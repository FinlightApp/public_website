import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function DirectorsCard(props) {
  const {
    link,
    name,
    position,
    directorImage,
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
        { directorImage?.image?.url ? (
          <img className='w-48 h-48'
          src={ directorImage.image }
          alt={ 'director image' } />
        ) : (
          <GatsbyImage className='w-48 h-48 border'
          objectFit='fill'
          image={ directorImage.image }
          formats={ ['auto', 'webp'] }
          alt={ 'director image' } />
        ) }
        <p className='font-header font-semibold'>
          { name }
        </p>
        <p className='font-paragraph font-light'>
          { position }
        </p>
        <a className='
          flex 
          justify-center
          w-8 h-8
          rounded-full
          border-2 border-black
        '
        href={ link } target='_blank' >
        </a>
      </div>
    </React.Fragment>
  );
}