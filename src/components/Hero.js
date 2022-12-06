import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Header from './Header';
import Paragraph from './Paragraph';
import Button from './Button';
import Box from './Box';

export default function Hero(props) {
  const {
    theme,
    imageBg,
    title,
    titleHighlight,
    paragraph,
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
        { ( title || paragraph || button ) && (
          <div className='
            container
            grid grid-cols-10
            items-center
            px-8 py-12 md:p-0
          '>
            <Box className='
              col-span-10
              md:col-start-3 md:col-span-6
              lg:col-start-2 lg:col-span-4
              xl:col-start-2 xl:col-span-3
              h-fit
            '>
              { title && (
                <Header
                headerClass={ theme.header }
                lineClass={ theme.line }
                highlightClass={ theme.highlight }
                highlight={ titleHighlight }>
                  { title }
                </Header>
              ) }
              { paragraph && (
                <Paragraph class={ theme.paragraph }>
                  { paragraph }
                </Paragraph>
              ) }
              { button && (
                <Button class={ theme.button }>
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

Hero.propTypes = {
  theme: PropTypes.object,
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string
};
