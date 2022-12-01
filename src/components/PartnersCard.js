import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';


export default function PartnersCard(props) {
  return (
    <React.Fragment>
      <a class='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        rounded-2xl shadow-card
      '
      href={ props.link } target='_blank'
      rel='noreferrer noopener' referrerPolicy='no-referrer'
      aria-label={ props.name }>
        { props.partnerImage?.image?.url ? (
          <img className='w-48 h-48'
          src={ props.partnerImage.image }
          alt={ props.name + ' logo' } />
        ) : (
          <GatsbyImage className='w-48 h-48 border'
          objectFit='fill'
          image={ props.partnerImage.image }
          formats={ ['auto', 'webp'] }
          alt={ props.name + ' logo' } />
        ) }
        <p class='font-header font-semibold'>
          { props.name }
        </p>
      </a>
    </React.Fragment>
  );
}
