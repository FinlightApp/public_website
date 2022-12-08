import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from "gatsby-plugin-image";

import Panel from './Panel';
import DataCard from './DataCard';

export default function Values(props) {
  const {
    title,
    paragraph,
    values,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title || paragraph || values ) && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title={ title }
            paragraph={ paragraph }>
              { values && ( 
                <div className='
                  flex flex-wrap
                  justify-center
                  w-full
                  gap-12
                '>
                  { values.map((value, i) => (
                    <DataCard key={ i }
                    cardImage={ {
                      image : getImage(value.valueImage.image) || value.valueImage.image,
                      alt: value.valueImage.alt
                    } }
                    title={ value.title }
                    paragraph={ value.paragraph } />
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

Values.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  values: PropTypes.array
};
