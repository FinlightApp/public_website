import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from "gatsby-plugin-image";

import Panel from './Panel';
import DataColumn from './DataColumn';

export default function Community(props) {
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
            bg-grey-light
          '>
            <Panel
            title={ title }
            paragraph={ paragraph }>
              { cards && (
                <div className='
                  flex
                  flex-col lg:flex-row
                  flex-wrap
                  justify-center
                  w-full
                  gap-12
                '> 
                  { cards.map((card, i) => (
                    <DataColumn key={ i }
                    image={ {
                      src : getImage(card.image.src) || card.image.src,
                      alt: card.image.alt
                    } }
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

Community.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cards: PropTypes.array,
};