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
        flex flex-col
        basis-full md:basis-1/2-6 lg:basis-1/3-8
        items-center
        p-6 gap-6
        bg-white rounded-2xl shadow-card
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
            className='w-full h-36' />
          </a>
        ) }
        { title && (
          <p className='font-header font-semibold'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='font-paragraph text-center'>
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