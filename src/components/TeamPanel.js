import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import TeamCard from './TeamCard';
import Panel from './Panel';

export default function TeamPanel(props) {
  const {
    title,
    paragraph,
    cards
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title ||  paragraph || cards ) && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title={ title }
            paragraph={ paragraph }>
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
                    image: getImage(card.cardImage.image) || card.cardImage.image,
                    alt: card.cardImage.alt
                  } }
                  title={ card.title }
                  subheading={ card.subheading }
                  link={ card.link } />
                )) }
              </div>
              ) }
            </Panel>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

TeamPanel.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cards: PropTypes.array
};
