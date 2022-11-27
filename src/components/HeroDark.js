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
          ${textSplit[0]}
          <span class='text-darkHeroBlue'>${toHighlight}</span>
          ${textSplit[1]}
        `;
      }
    }
  }

  React.useEffect(() => {
    highlighted(title, highlight)
  });

  return (
    <React.Fragment>
      <div className='
        relative
        flex
        justify-center lg:justify-start
      '>
        { imageBg?.url ? (
          <img className='w-full h-[700px]'
          src={ imageBg }
          alt='heroBg' />
        ) : (
          <GatsbyImage className='w-full h-[700px]'
          image={ imageBg }
          formats={ ['auto', 'webp'] }
          alt='heroBg' />
        ) }
        {( title || subHeading || button ) && (
          <div className='
            absolute
            container
            flex flex-col self-center
            gap-12 p-8 lg:mx-36
            w-[268px] md:w-[431px] h-auto
            rounded-2xl text-center
            bg-whiteHero backdrop-blur-sm shadow-box-shadow
          '>
            { title && (
              <h1 className='text-2xl text-heroTitle text-white'
              ref={titleEl}>
                { title }
              </h1>
            ) }
            <div className='
              w-full h-hrHeight
              bg-gradient-to-r from-transparent via-darkHeroBlue to-transparent
            '>
            </div>
            { subHeading && (
              <h3 className='text-xl text-heroText text-white'>
                { subHeading }
              </h3>
            ) }
            { button && (
              <button className='
                self-center
                w-40
                px-2 py-4
                bg-darkHeroBlue
                rounded text-white font-heroTitle text-xl
              '>
                { button }
              </button>
            ) }
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

HeroLight.propTypes = {
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  highlight: PropTypes.string,
  title: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};
