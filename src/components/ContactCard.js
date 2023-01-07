import React from 'react';
import PropTypes from 'prop-types';

export default function ContactCard(props) {
  const {
    image,
    title,
    paragraph,
    link,
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
      '>
        { image && (
          <a className='
            flex flex-row
            justify-center items-center
            w-14 h-14
          '
          href={ link } target='_blank'
          referrerPolicy='no-referrer'
          rel='noopener noreferrer'>
            <img src={image.src} alt={image.alt} />
          </a>
        ) }
        { title && (
          <p className='text-xl font-normal leading-6'>
            { title }
          </p>
        ) }
        { paragraph && (
          <p className='text-xl font-semibold leading-6 text-center'>
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
  link: PropTypes.string,
};