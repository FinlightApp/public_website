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
    backgroundImg,
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
        bg-black
      '>
        { backgroundImg && (
          <div className='absolute inset-0'>
            { backgroundImg?.src?.url ? (
              <img className='
                w-full h-full
                brightness-50
              '
              src={ backgroundImg.src }
              alt={ backgroundImg.alt } />
            ) : (
              <GatsbyImage className='
                w-full h-full
                brightness-50
              '
              objectFit='cover'
              image={ backgroundImg.src }
              formats={ ['auto', 'webp'] }
              alt={ backgroundImg.alt } />
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
              lg:col-start-4 lg:col-span-6
              xl:col-start-3 xl:col-span-7
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
              {/* { button && (
                <Button class={ theme.button }
                onClick={() => setModalActive(!modalActive)}>
                  { button }
                </Button>
              ) } */}
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
  backgroundImg: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string,
  modalContent: PropTypes.string
};
