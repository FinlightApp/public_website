import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import ProfileCard from './ProfileCard';
import Panel from './Panel';

export default function NonExecutiveDirectors(props) {
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
                    <ProfileCard key={ i }
                    image={ {
                      src: getImage(card.image.src) || card.image.src,
                      alt: card.image.alt
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

NonExecutiveDirectors.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cards: PropTypes.array
};
