import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import DataCard from './DataCard';

export default function Feature(props) {
  const {
    title,
    paragraph,
    features,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex flex-col
        justify-center items-center
        w-full h-fit
      '>
        {( title || paragraph || features )  && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title={ title }
            paragraph={ paragraph }>
              { features && (
                <div className='
                  flex flex-wrap
                  justify-center
                  w-full
                  gap-12
                '> 
                  { features.map((feature, i) => (
                    <DataCard key={ i }
                    cardImage={ {
                      image : getImage(feature.featureImage.image) || feature.featureImage.image,
                      alt: feature.featureImage.alt
                    } }
                    title={ feature.title }
                    paragraph={ feature.paragraph } />
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

Feature.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cards: PropTypes.array,
};