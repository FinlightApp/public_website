import React from 'react';
import PropTypes from 'prop-types';
import FeatureCards from './FeatureCards';

export default function Feature(props) {
  const {
    title,
    subHeading,
    featureCards,
  } = props;

  return (
    <React.Fragment>
      <div className='
        test
        flex flex-col
        justify-center items-center
        w-full h-fit
      '>
        
        {( title || subHeading || featureCards )  && (
          <div className='
            container flex-1
            flex flex-col
            justify-center items-center
            p-12 gap-12
          '>
            { title && (
              <div className='
                flex flex-col
                justify-center items-center
                gap-12
              '>
                <h2 className='text-black font-semibold text-3xl'>
                  { title }
                </h2>
                <hr className='
                  h-[3px] w-1/3
                  border-transparent
                  bg-gradient-to-r from-transparent via-primary to-transparent
                ' />
              </div>
            ) }
            
            { subHeading && (
              <p className='
                lg:w-1/2
                text-center
                text-black font-normal text-xl
              '>
                {subHeading}
              </p>
            ) }  
            <div>
              { featureCards && (
                <FeatureCards cards={ featureCards } />
              )}
            </div>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  subHeading: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
    })
  ),
};