import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Card = ({ gridItems }) => (
  <div className='flex flex-col items-center justify-center w-auto gap-12 lg:flex-row md:flex-wrap'>
    {gridItems.map((item) => (
      <div key={item.title} className='
        flex flex-col
        items-center justify-center
        p-6 gap-6
        lg:w-[416px] h-fit w-fit
        rounded-2xl bg-white shadow-md
      '>
        <PreviewCompatibleImage imageInfo={ item.image } />
        <p className='text-xl font-semibold'>{ item.title }</p>
        <p className='text-base'>{ item.text }</p>
      </div>
    ))}
  </div>
);

Card.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Card;
