import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Cards = ({ gridItems }) => (
  <div className='
    flex flex-col lg:flex-row
    md:flex-wrap items-center justify-center
    gap-12
    w-auto
  '>
    {gridItems.map((item) => (
      <div key={item.title} className='
        flex flex-col
        items-center justify-center
        p-6 gap-6
        lg:w-[416px] h-fit w-fit
        rounded-2xl bg-white shadow-lg
      '>
        <PreviewCompatibleImage imageInfo={ item } />
        <p className='font-semibold text-sm'>{ item.title }</p>
        <p className='text-xs'>{ item.text }</p>
      </div>
    ))}
  </div> 
);

Cards.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default Cards;
