import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureCards = ({ cards}) => (
  <div className='
      flex-1
      flex flex-col md:flex-row
      flex-wrap
      justify-center items-center
      gap-12
  '> 
      {cards.map((card) => (
        <div key={ card.title } className='
          flex flex-col
          justify-center items-center
          lg:w-96 h-fit w-fit
          p-6 gap-6
          border rounded-2xl drop-shadow-lg bg-white 
        '>
          <PreviewCompatibleImage imageInfo={ card } />
          <p className='
            text-center
            text-black font-semibold text-xl
          '>
            { card.title }
          </p>
        </div>
      ))}
  </div>
);

FeatureCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
    })
  ),
};

export default FeatureCards;
