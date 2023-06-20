import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import DataCard from './DataCard';

export default function HowItWorks(props) {
  const {
    title,
    paragraph,
    cards,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex flex-col
        justify-center items-center
        w-full h-fit
      '>
        {( title || paragraph || cards )  && (
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
                    <DataCard key={ i }
                    index={ i + 1 }
                    right={ i%2 === 1}
                    image={ card.image ?{
                      src : getImage(card.image.src) || card.image.src,
                      alt: card.image.alt
                    } : null }
                    title={ card.title }
                    paragraph={ card.paragraph } />
                  ) ) }
                </div>
              ) }
            </Panel>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

HowItWorks.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cards: PropTypes.array,
};