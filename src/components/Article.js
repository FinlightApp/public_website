import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import image from '../img/close_24.svg';
import linkedIn from '../img/linkedin_logo.svg';

export const HTMLContent = ({ content, className }) => (
  <React.Fragment>
    <div className='
      flex flex-col-reverse lg:flex lg:flex-row
      justify-center items-start
      lg:p-12 p-6
      gap-12
      h-auto
      w-full
    '>
      <div className='
        flex flex-col
        gap-6
        lg:w-[60%] w-full
      '>
        <div className='
          h-[500px]
          w-full
          overflow-y-scroll
          text-justify
        '>
          <div className={className} dangerouslySetInnerHTML={{ __html: content }} />  
        </div>
        <div className='
          flex flex-row
          justify-end
          gap-12
          '>
            <a href='https://www.linkedin.com/company/finlight' target='_blank'
              referrerPolicy='no-referrer'
              rel='noopener noreferrer'>
              <img src={linkedIn} alt='LinkedIn'
              className='h-4 w-4' />
            </a>
            <a href='https://www.linkedin.com/company/finlight' target='_blank'
              referrerPolicy='no-referrer'
              rel='noopener noreferrer'>
              <img src={linkedIn} alt='LinkedIn'
              className='h-4 w-4' />
            </a>
            <a href='https://www.linkedin.com/company/finlight' target='_blank'
              referrerPolicy='no-referrer'
              rel='noopener noreferrer'>
              <img src={linkedIn} alt='LinkedIn'
              className='h-4 w-4' />
            </a>
        </div>
      </div>
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
