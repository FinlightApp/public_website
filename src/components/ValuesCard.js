import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';


export default function ValuesCard(props) {
  return (
    <React.Fragment>
      <div className='
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        rounded-2xl shadow-card
      '>
        { props.valueImage?.image?.url ? (
          <img className='w-48 h-48'
          src={ props.valueImage.image }
          alt={ props.valueImage.alt } />
        ) : (
          <GatsbyImage className='w-48 h-48 border'
          objectFit='fill'
          image={ props.valueImage.image }
          formats={ ['auto', 'webp'] }
          alt={ props.valueImage.alt } />
        ) }
        <p className='font-header font-semibold'>
          { props.title }
        </p>
        <p className='font-paragraph text-center'>
          { props.paragraph }
        </p>
      </div>
    </React.Fragment>
  );
}
