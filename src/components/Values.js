import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from "gatsby-plugin-image";

import Panel from './Panel';
import ValuesCard from './ValuesCard';

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
          <Panel
          title={ title }
          paragraph={ paragraph }>
            { values && ( 
             <div className='
                flex flex-wrap
                justify-center
                w-full
                p-6 gap-12
              '>
                { values.map((value, i) => (
                  <ValuesCard key={ i }
                  valueImage={ {
                    image : getImage(value.valueImage.image) || value.valueImage.image
                  } }
                  title={ value.title }
                  paragraph={ value.paragraph } />
                )) }
              </div>
            ) }
          </Panel>
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
