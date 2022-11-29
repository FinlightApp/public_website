import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import Header from './Header';
import Button from './Button';
import Box from './Box';

export default function Apply(props) {
  const {
    darkMode,
    imageBg,
    title,
    subHeading,
    button,
  } = props;
  
  return (
    <React.Fragment>
      <div className='
        relative
        flex
        justify-center
        min-h-[500px]
      '>
        { imageBg?.image?.url ? (
          <img className='
            absolute inset-0
            brightness-50
          '
          src={ imageBg.image }
          alt={ imageBg.alt } />
        ) : (
          <GatsbyImage className='
            absolute inset-0
            brightness-50
          '
          objectFit='fill'
          image={ imageBg.image }
          formats={ ['auto', 'webp'] }
          alt={ imageBg.alt } />
        ) }
        {( title || subHeading || button ) && (
          <div className='
            container
            flex flex-1
            items-center justify-center lg:justify-end
            p-6 md:px-32
          '>
            <Box class='w-full lg:w-1/2 xl:w-1/3 h-fit'>
              { title && (
                <Header darkMode={ darkMode }>
                  { title }
                </Header>
              ) }
              { subHeading && (
                <h3 className={`
                  ${ darkMode ? 'text-white' : 'text-black' }
                  text-xl text-center font-light font-p
                `}>
                  { subHeading }
                </h3>
              ) }
              { button && (
                <Button darkMode={ darkMode }>
                  { button }
                </Button>
              ) }
            </Box>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

Apply.propTypes = {
  darkMode: PropTypes.bool,
  imageBg: PropTypes.object,
  title: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};
