import React from 'react';
import PropTypes from 'prop-types';

export default function ContactCard(props) {
  const {
    image,
    title,
    paragraph,
    link
  } = props;

  return (
    <React.Fragment>
      <div className='
        max-w-sm
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        bg-white rounded-2xl shadow-card
        transition transform
        ease-in-out
        delay-150
        hover:-translate-y-2 hover:scale-105
        duration-300
        motion-reduce:transition-none motion-reduce:hover:transform-none
        group/card
      '>
        { image && (
          <a className='
            flex flex-row
            justify-center items-center
            w-48 h-48
          '
          href={ link } target='_blank'
          referrerPolicy='no-referrer'
          rel='noopener noreferrer'>
            <img src={image.src} alt={image.alt}
            className='
              w-full h-36
              group-hover/card:scale-110
              transition transform
              ease-in-out
              delay-150
              duration-300
              motion-reduce:transition-none motion-reduce:hover:transform-none
            ' />
          </a>
        ) }
        { title && (
          <p className='text-lg font-normal leading-8'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='text-base font-light leading-6 text-center'>
            { paragraph }
          </p>
        ) }
      </div>
    </React.Fragment>
  );
}

ContactCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  link: PropTypes.string
};