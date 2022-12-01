import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from "gatsby-plugin-image";

import Panel from './Panel';
import PartnersCard from './PartnersCard';

export default function Partners(props) {
  const {
    title,
    paragraph,
    partners,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title || paragraph || partners ) && (
          <Panel
          title={ title }
          paragraph={ paragraph }>
            { partners && (
             <div className='
                flex flex-wrap
                justify-center
                w-full
                p-6 gap-12
              '>
                { partners.map((partner, i) => (
                  <PartnersCard key={ i }
                  partnerImage={ {
                    image : getImage(partner.partnerImage.image) || partner.partnerImage.image
                  } }
                  name={ partner.name }
                  link={ partner.link } />
                )) }
              </div>
            ) }
          </Panel>
        ) }
      </div>
    </React.Fragment>
  );
}

Partners.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  partners: PropTypes.array
};
