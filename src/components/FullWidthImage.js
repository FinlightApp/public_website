import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

import HeroImg from '../img/new_design/Mask group.svg'

export default function FullWidthImage(props) {
  const {
    height= 750,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  const backgroundImage = {
    backgroundImage: `url('${img}')`,
    backgroundSize: 'cover',
    position: 'center',
    height: '750px',
    width: '100%'
  };

  return (
    <React.Fragment>
      <div className='grid'>
        {img?.url ? (
          <img
          src={img}
          objectFit={'cover'}
          objectPosition={imgPosition}
          alt='heroBg'
          style={{
            gridArea: '1/1',
            height: height,
            width: '100%',
          }}
          />
        ) : (
          <GatsbyImage
            image={HeroImg}
            objectFit={'cover'}
            objectPosition={imgPosition}
            alt='heroBg'
            style={{
              gridArea: '1/1',
               maxHeight: height,
            }}
            layout='fullWidth'
            aspectratio={3/1}
            formats={['auto', 'webp', 'avif']}/>
        )}
        {(title || subheading ) && (
          <div className='
          grid-cols-1 lg:grid-cols-2
          content-center
          width-full h-full
          lg:gap-10
          mx-5 md:mx-10'
          style={{
            gridArea: '1/1',
            position: 'relative',
            display: 'grid',
          }} >
            <div
            className='hidden md:flex md:flex-col h-full w-full m-8'>
              {img?.url ? (
                <img
                  src={HeroImg}
                  className='self-center lg-w-full lg:h-auto'
                  alt='heroImg'
                />
                ) : (
                <GatsbyImage
                  image={img}
                  style={{
                  }}
                  alt='heroImg'
                  formats={['auto', 'webp', 'avif']}
                />
              )}
            </div>
            {/* Any content here will be centered in the component */}
            <div className='flex flex-col text-center text-white'>
                {title && (
                <h1 className='
                sm:width-full
                mb-10
                lg:text-5xl text-3xl'>
                  {'We are making VC investing even simpler than public stock investing'}
                </h1>
              )}
              {subheading && (
                <p
                className='
                sm:width-full
                mb-10
                md:text-xl
                sm:text-base'>
                  { 'We do more than enabling investors to allocate to top decile VCs across vintages,regions and sectors from as low as 10k GBP. We also eliminate the entire admin GPs have to go through to on-board, serve and report to LPs.' }
                </p>
              )}
              {subheading && (
                <button
                className='
                self-center
                w-40
                p-2
                bg-blue-600 text-white
                rounded'>
                  {'Info Request'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {/* second way */}
      <div className='
      flex md:flex-col lg:flex-row
      pt-48 lg:pt-52 md:pt-2
      lg:gap-20'
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
        px-12
        text-center text-white'>
          <h1 className='
          m:width-full
          mb-10
          lg:text-5xl text-3xl'>
            {'We are making VC investing even simpler than public stock investing'}
          </h1>
          <p
          className='
          sm:width-full
          mb-10
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