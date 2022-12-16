import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import image from '../img/close_24.svg';
import linkedIn from '../img/social/linkedin.svg';
import twitter from '../img/social/twitter.svg';
import share from '../img/social/share.svg';

export const HTMLContent = ({ content, className }) => (
  <React.Fragment>
    <div className='
      flex flex-col-reverse lg:flex lg:flex-row
      justify-center items-center
      gap-12
      h-auto
      w-full
    '>
      <div className='
        flex flex-col
        px-6 py-12 md:p-12
        gap-6
        w-full lg:w-[60%]
      '>
        <div className='
          container
          h-auto lg:h-[500px] w-full
          lg:overflow-y-scroll
          text-justify
        '>
          <p className='text-sm font-medium' dangerouslySetInnerHTML={{ __html: content }} />  
        </div>
        <div className='
          flex flex-row
          justify-end
          gap-12
        '>
          <button>
            <img
            src={ twitter }
            alt='LinkedIn' />
          </button>
          <button>
            <img
            src={ linkedIn }
            alt='LinkedIn' />
          </button>
          <button>
            <img
            src={ share }
            alt='LinkedIn' />
          </button>
        </div>
      </div>
      <div className='
        hidden lg:flex
        h-[600px] w-1
        bg-[#F0F0F0] rounded-lg '/>
      <div className='
        flex flex-col
        justify-center
        gap-6
        h-auto
        lg:w-[40%] w-full
      '>
        { image?.src?.url ? (
          <img className='w-full h-auto'
          src={ image.src }
          alt={ image.alt } />
        ) : (
          <GatsbyImage className='w-full h-auto'
          formats={ ['auto', 'webp'] } />
        ) }
        <p className='
          px-6
          text-center
          italic
        '> 
          Every year, over 12 million people in the UK go through the ordeal of tax preparation.
        </p>
      </div>
    </div>
  </React.Fragment>
);

const Article = ({ content, className }) => (
  <Panel>
    <div className='grid grid-cols-10'>
      <div className='
        col-span-10
        xl:col-start-2 xl:col-span-8
        flex flex-col
        px-4 md:px-8 py-8 md:py-16 gap-16
      '>
        <div className={className}>{content}</div>
      </div>
    </div>
  </Panel>
);

Article.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Article.propTypes;

export default Article;
