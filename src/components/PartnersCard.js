import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';


export default function PartnersCard(props) {
  const {
    link,
    name,
    partnerImage,
  } = props;

  return (
    <React.Fragment>
      <a className='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        rounded-2xl shadow-card
      '
      href={ link }
      target='_blank'
      rel='noreferrer noopener'
      referrerPolicy='no-referrer'
      aria-label={ name }>
        <div className='
          flex flex-col
          justify-center items-center
          w-48 h-48
        '>
          { partnerImage?.image?.url ? (
            <img className='w-full'
            src={ partnerImage.image }
            alt={ `${name} logo` } />
          ) : (
            <GatsbyImage className='w-full'
            objectFit='fill'
            image={ partnerImage.image }
            formats={ ['auto', 'webp'] }
            alt={ `${name} logo` } />
          ) }
        </div>
        <p className='font-header font-semibold text-center'>
          { name }
        </p>
      </a>
    </React.Fragment>
  );
}
