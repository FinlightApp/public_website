import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import PartnersCard from './PartnersCard';
import Subheader from './Subheader';
import Paragraph from './Paragraph';

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
             <div class='
                flex flex-wrap
                justify-center
                w-full
                p-6 gap-12
              '>
                { partners.map((partner) => (
                  <PartnersCard 
                  partnerImage={ partner.partnerImage }
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
