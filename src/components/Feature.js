import React from 'react';
import PropTypes from 'prop-types';
import FeatureCards from './FeatureCards';

export default function Feature(props) {
  const {
    title,
    paragraph,
    features,
  } = props;

  return (
    <React.Fragment>
      <div className='
        test
        flex flex-col
        justify-center items-center
        w-full h-fit
      '>
        
        {( title || paragraph || features )  && (
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
            
            { paragraph && (
              <p className='
                lg:w-1/2
                text-center
                text-black font-normal text-xl
              '>
                { paragraph }
              </p>
            ) }


            { features && (
              <div className='
                flex-1
                flex flex-col md:flex-row
                flex-wrap
                justify-center items-center
                gap-12
              '> 
                { features.map((feature, i) => (
                  <FeatureCards key={ i }
                  cards={ feature } />
                )) }
              </div>
            ) }


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