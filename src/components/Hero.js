import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Header from './Header';
import Paragraph from './Paragraph';
import Button from './Button';
import Box from './Box';

export default function Hero(props) {
  const {
    darkMode,
    imageBg,
    title,
    titleHighlight,
    subHeading,
    button,
  } = props;

  return (
    <React.Fragment>
      <div className='
        relative
        flex
        justify-center
        h-fit md:h-[700px]
      '>
        { imageBg?.image?.url ? (
          <img className='absolute inset-0'
          src={ imageBg.image }
          alt={ imageBg.alt } />
        ) : (
          <GatsbyImage className='!absolute inset-0'
          objectFit='fill'
          image={ imageBg.image }
          formats={ ['auto', 'webp'] }
          alt={ imageBg.alt } />
        ) }
        {( title || subHeading || button ) && (
          <div className='
            container
            grid grid-cols-10
            items-center
            px-8 py-12 md:p-0
          '>
            <Box className='
              col-span-10
              md:col-start-3 md:col-span-6
              lg:col-start-3 lg:col-span-4
              xl:col-start-2 xl:col-span-3
              h-fit
            '>
              { title && (
                <Header darkMode={ darkMode }
                highlight={ titleHighlight }>
                  { title }
                </Header>
              ) }
              { subHeading && (
                <Paragraph darkMode={ darkMode }>
                  { subHeading }
                </Paragraph>
              ) }
              { button && (
                <Button darkMode={ darkMode }>
                  { button }
                </Button>
              ) }
            </Box>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Hero.propTypes = {
  darkMode: PropTypes.bool,
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.string
};
