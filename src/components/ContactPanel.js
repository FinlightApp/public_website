import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import ContactCard from './ContactCard';

import { getImage } from 'gatsby-plugin-image';

export default function ContactPanel(props) {
  const {
    title,
    cards,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title || cards ) && (
        <div className='
          flex
          justify-center
          w-full
          p-12
        '>
          <Panel
          title={ title }>
            <div className='
              flex flex-wrap
              justify-center
              w-full
              gap-12
            '>
              { cards.map((card, i) => (
              <ContactCard key={ i }
              image={ {
                src: getImage(card.image.src) || card.image.src,
                alt: card.image.alt
              } }
              title={ card.title }
              paragraph={ card.paragraph } />
              )) }
            </div>
          </Panel>
        </div>
        ) }
      </div>
    </React.Fragment>
  );
}

ContactPanel.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array
};
