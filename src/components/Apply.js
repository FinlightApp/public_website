import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Subheader from './Subheader';
import Paragraph from './Paragraph';
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
        h-fit md:h-[500px]
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
            grid grid-cols-10
            items-center
            px-8 py-12 md:p-0
          '>
            <Box className='
              col-span-10
              md:col-start-3 md:col-span-6
              lg:col-start-6 lg:col-span-4
              xl:col-start-7 xl:col-span-3
              h-fit
            '>
              { title && (
                <Subheader darkMode={ darkMode }>
                  { title }
                </Subheader>
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
