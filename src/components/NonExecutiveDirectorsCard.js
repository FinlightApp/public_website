import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function NonExecutiveDirectorsCard(props) {
  const {
    link,
    name,
    role,
    nonExecutiveDirectorImage,
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
        { nonExecutiveDirectorImage?.image?.url ? (
          <img className='w-48 h-48'
          src={ nonExecutiveDirectorImage.image }
          alt={ nonExecutiveDirectorImage.alt } />
        ) : (
          <GatsbyImage className='w-48 h-48 border'
          objectFit='fill'
          image={ nonExecutiveDirectorImage.image }
          formats={ ['auto', 'webp'] }
          alt={ nonExecutiveDirectorImage.alt } />
        ) }
        <p className='font-header font-semibold'>
          { name }
        </p>
        <p className='font-paragraph font-light'>
          { role }
        </p>
        <a 
        href={ link } target='_blank'
        rel='noopener noreferrer'>
          <img className='
            flex 
            justify-center
            w-8 h-8
            rounded-full
            border-2 border-black
          '
          src='/img/brussels.png'
          alt= 'linkedin icon' />
        </a>
      </div>
    </React.Fragment>
  );
}