import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import TeamCard from './TeamCard';

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
          p-12
        '>
          { cards && (
            <div className='
              flex flex-wrap
              justify-center
              w-full
              gap-12
            '>
              { cards.map((card, i) => (
                <TeamCard key={ i }
                cardImage={ {
                  image : getImage(card.cardImage.image) || card.cardImage.image,
                  alt: card.cardImage.alt
                } }
                title={ card.title }
                subheading={ card.subheading }
                link={ card.link } />
              )) }
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
