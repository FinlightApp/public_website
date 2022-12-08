import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Subheader from './Subheader';
import Paragraph from './Paragraph';
import Button from './Button';
import Box from './Box';
import Modal from './Modal';

export default function Apply(props) {
  const {
    theme,
    imageBg,
    title,
    paragraph,
    button,
    modalContent,
  } = props;
  const [modalActive, setModalActive] = useState(false);

  return (
    <React.Fragment>
      <div className='
        relative
        flex
        justify-center
        h-fit md:h-[500px]
      '>
        { imageBg && (
          <div className='absolute inset-0'>
            { imageBg?.image?.url ? (
              <img className='
                w-full h-full
                brightness-50
              '
              src={ imageBg.image }
              alt={ imageBg.alt } />
            ) : (
              <GatsbyImage className='
                w-full h-full
                brightness-50
              '
              objectFit='cover'
              image={ imageBg.image }
              formats={ ['auto', 'webp'] }
              alt={ imageBg.alt } />
            ) }
          </div>
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
              lg:col-start-6 lg:col-span-4
              xl:col-start-7 xl:col-span-3
              justify-center items-center
              px-8 py-12 gap-12
            '>
              { title && (
                <Subheader
                headerClass={ theme.header }
                lineClass={ theme.line }>
                  { title }
                </Subheader>
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
      </div>
      <Modal
      content={ modalContent || '' }
      active={ modalActive }
      onClose={ () => setModalActive(false) } />
    </React.Fragment>
  );
}

Apply.propTypes = {
  theme: PropTypes.object,
  imageBg: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string,
  modalContent: PropTypes.string
};
