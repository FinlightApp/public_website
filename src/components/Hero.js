import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Header from './Header';
import Paragraph from './Paragraph';
import Button from './Button';
import Box from './Box';
import Modal from './Modal';

export default function Hero(props) {
  const {
    theme,
    imageBg,
    title,
    titleHighlight,
    paragraph,
    button,
    modalContent,
  } = props;
  const [modalActive, setModalActive] = useState(false);

  return (
    <React.Fragment>
      <header className='
        relative
        flex
        justify-center
        h-fit md:h-[700px]
      '>
        <div className='absolute inset-0'>
          { imageBg?.image?.url ? (
            <img className='
              w-full h-full
              select-none
            '
            src={ imageBg.image }
            alt={ imageBg.alt }
            draggable='false' />
          ) : (
            <GatsbyImage className='
            w-full h-full
              select-none
            '
            objectFit='cover'
            image={ imageBg.image }
            formats={ ['auto', 'webp'] }
            alt={ imageBg.alt }
            draggable={ false } />
          ) }
        </div>
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
              justify-center items-center
              px-8 py-12 gap-12
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
                <Button class={ theme.button }
                onClick={() => setModalActive(!modalActive)}>
                  { button }
                </Button>
              ) }
            </Box>
          </div>
        ) }
      </header>
      <Modal
      content={ modalContent || '' }
      active={ modalActive }
      onClose={ () => setModalActive(false) } />
    </React.Fragment>
  );
}

Hero.propTypes = {
  theme: PropTypes.object,
  imageBg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string,
  modalContent: PropTypes.string
};
