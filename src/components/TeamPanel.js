import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import Card from './Card';

export default function TeamPanel(props) {
  const {
    cards
  } = props;

  return (
    <React.Fragment>
      { ( cards ) && (
        <div className='
          flex flex-col
          justify-center items-center
          w-full h-fit
        '>
          { cards && (
            <div className='
              flex
              justify-center
              w-full
              p-12
              bg-grey-light
           '>
              { cards && (
                <div className='
                  flex flex-wrap
                  justify-center
                  w-full
                  gap-12
                '>
                  { cards.map((card, i) => (
                    <Card key={ i }
                    image={ {
                      image : getImage(card.image.image) || card.image.image,
                      alt: card.image.alt
                    } }
                    title={ card.title }
                    subheading={ card.subheading }
                    linkedin={ {
                      image: getImage(card.linkedin.image) || card.linkedin.image,
                      alt: card.linkedin.alt,
                      link: card.linkedin.link
                     } } />
                  )) }
                </div>
              ) }
            </div>
          ) }
        </div>
      ) }
    </React.Fragment>
  );
}

TeamPanel.propTypes = {
  cards: PropTypes.array
};
