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
    backgroundImg,
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
          { backgroundImg?.src?.url ? (
            <img className='
              w-full h-full
              select-none
            '
            src={ backgroundImg.src }
            alt={ backgroundImg.alt }
            draggable='false' />
          ) : (
            <GatsbyImage className='
            w-full h-full
              select-none
            '
            objectFit='cover'
            image={ backgroundImg.src }
            formats={ ['auto', 'webp'] }
            alt={ backgroundImg.alt }
            draggable={ false } />
          ) }
        </div>
        { ( title || paragraph || button ) && (
          <div className='
            container
            grid grid-cols-12
            items-center
            px-8 py-12 md:p-0
          '>
            <Box className='
              col-span-12
              md:col-start-2
              md:col-span-10
              xl:col-start-3
              xl:col-span-8
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
  backgroundImg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string,
  modalContent: PropTypes.string
};
