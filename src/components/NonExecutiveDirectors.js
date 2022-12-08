import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import NonExecutiveDirectorsCard from './NonExecutiveDirectorsCard';

export default function NonExecutiveDirectors(props) {
  const {
    title,
    paragraph,
    nonExecutiveDirectors,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title ||  paragraph || nonExecutiveDirectors ) && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title={ title }
            paragraph={ paragraph }>
              { nonExecutiveDirectors && (
                <div className='
                  flex flex-wrap
                  justify-center
                  w-full
                  gap-12
                '>
                { nonExecutiveDirectors.map((nonExecutiveDirector, i) => (
                  <NonExecutiveDirectorsCard key={ i }
                  nonExecutiveDirectorImage={ {
                    image : getImage(nonExecutiveDirector.nonExecutiveDirectorImage.image) || nonExecutiveDirector.nonExecutiveDirectorImage.image,
                    alt: nonExecutiveDirector.nonExecutiveDirectorImage.alt
                  } }
                  name={ nonExecutiveDirector.name }
                  role={ nonExecutiveDirector.role }
                  link={ nonExecutiveDirector.link } />
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
  nonExecutiveDirectors: PropTypes.array
};