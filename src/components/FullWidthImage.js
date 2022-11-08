import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

import HeroImg from '../img/new_design/Mask group.svg'

export default function FullWidthImage(props) {
  const {
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  const backgroundImage = {
    backgroundImage: `url('${img}')`,
    backgroundSize: 'cover',
    position: 'imgPosition',
    height: '800px',
    width: '100%'
  };

  return (
    <React.Fragment>
      <div className='
      flex md:flex-col lg:flex-row
      pt-48 lg:pt-52 md:py-10
      lg:gap-10'
      style={backgroundImage}>
        <div
        className='
        hidden md:flex md:flex-col
        h-full w-full
        px-12'>
          <img
            src={HeroImg}
            className='self-center lg-w-full lg:h-auto'
            alt='heroImg'/>
        </div>
        <div className='
        flex flex-col
        px-12 gap-y-10
        text-center text-white'>
          <h1 className='
          m:width-full
          lg:text-5xl text-3xl'>
            {'We are making VC investing even simpler than public stock investing'}
          </h1>
          <p
          className='
          sm:width-full
          md:text-xl
          sm:text-base'>
            { 'We do more than enabling investors to allocate to top decile VCs across vintages,regions and sectors from as low as 10k GBP. We also eliminate the entire admin GPs have to go through to on-board, serve and report to LPs.' }
          </p>
          <button
          className='
          self-center
          w-40
          p-2
          bg-blue-600 text-white
          rounded'>
            {'Info Request'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};