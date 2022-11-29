import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function HeroLight(props) {
  const {
    imageBg,
    title,
    highlight,
    subHeading,
    button,
  } = props;
  const titleEl = React.useRef();

  const highlighted = (text, toHighlight) => {
    if (titleEl.current) {
      titleEl.current.innerHTML = text;
      if (toHighlight) {
        const textSplit =  text.split(toHighlight);
        titleEl.current.innerHTML = `
          ${textSplit[0] ? textSplit[0] : ''}
          <span class='text-secondary'>${toHighlight}</span>
          ${textSplit[1] ? textSplit[1] : ''}
        `;
      }
    }
  }

  React.useEffect(() => {
    highlighted(title, highlight)
  });

  return (
    <React.Fragment>
      {/* Main wrapper */}
      <div className='
        relative
        flex flex-col
        h-fit md:h-[700px]
      '>
        {/* Image wrapper in background */}
        <div className='absolute inset-0'>
          { imageBg?.url ? (
            <img className='h-full w-full object-cover'
            src={ imageBg }
            alt='heroBg' />
          ) : (
            <GatsbyImage className='h-full w-full object-cover'
            image={ imageBg }
            formats={ ['auto', 'webp'] }
            alt='heroBg' />
          ) }
        </div>
        {/* Content wrapper */}
        <div className='
          container flex-1
          flex flex-row
          justify-center items-center
          mx-auto md:p-12
          p-6
        '>
          {/* Left empty space element 10% on tablet and desktop */}
          <div className='grow-[0] md:grow-[1]' />
          {/* Text wrapper */}
          <div className='
            grow-[1] md:grow-[2] lg:grow-[3]
            flex flex-col
            justify-center items-center
            py-12 px-8
            gap-12
            h-fit
            rounded-2xl
            bg-white/[.15]
            drop-shadow-[0_0_32px_rgba(74,74,74,0.75)]
            backdrop-blur-[7.5px]
          '>
            { title && (
              <h1 className='
                min-w-fit w-min
                text-center
                text-black font-semibold text-3xl
                font-sans
              '
              ref={ titleEl }>
                { title }
              </h1>
            ) }
            <hr className='
              h-[3px] w-full
              border-transparent
              bg-gradient-to-r from-transparent via-secondary to-transparent
            ' />
            { subHeading && (
              <p className='
                min-w-fit w-min
                text-center
              text-light-Black font-normal text-xl
              '>
                { subHeading }
              </p>
            ) }
            { button && (
              <button className='
                py-2 px-4
                rounded
                bg-secondary
                text-white font-semibold text-xl
              '>
                { button }
              </button>
            ) }
          </div>
          {/* Left empty space element 60% on tablet and desktop */}
          <div className='grow-[0] md:grow-[1] lg:grow-[6]' />
        </div>
      </div>
    </React.Fragment>
  );
}

HeroLight.propTypes = {
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  highlight: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};
