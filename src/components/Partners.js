import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
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
        h-fit md:min-h-[700px]
      '>
        { ( title || paragraph || partners ) && (
          <div className='
            container
            flex flex-col
            items-center
            px-8 py-12 md:p-0 gap-12
          '>
            { title && (
              <Subheader>
                { title }
              </Subheader>
            ) }
            { paragraph && (
              <Paragraph>
                { paragraph }
              </Paragraph>
            ) }
            { partners && ( 
              <div class='
                flex flex-wrap
                justify-center
                p-6 gap-12
              '>
                { partners.map((partner) => (
                  <div class='
                    flex flex-col
                    basis-full md:basis-1/2-6 lg:basis-1/3-8
                    items-center
                    p-6 gap-6
                    rounded-2xl shadow-card
                  '>
                    { partner.partnerImage?.image?.url ? (
                      <img className='w-48 h-48'
                      src={ partner.partnerImage.image }
                      alt={ partner.name + ' logo' } />
                    ) : (
                      <GatsbyImage className='w-48 h-48 border'
                      objectFit='fill'
                      image={ partner.partnerImage.image }
                      formats={ ['auto', 'webp'] }
                      alt={ partner.name + ' logo' } />
                    ) }
                    <p class='font-header font-semibold'>
                      { partner.name }
                    </p>
                  </div>
                )) }
              </div>
            ) }
          </div>
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
