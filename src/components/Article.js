import * as React from 'react';
import { TwitterShareButton, LinkedinShareButton, EmailShareButton } from 'react-share';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import linkedIn from '../img/linkedin_logo_blue.svg';
import twitter from '../img/twitter_logo_blue.svg';
import email from '../img/mail_icon_blue.svg';

const articleLink = typeof window !== 'undefined' && window.location.href;

export const HTMLContent = ({ content, description, image, author, authorImage }) => (
  <React.Fragment>
    {( content || description || image || author, authorImage ) && (
      <div className='
        container
        grid grid-cols-1 lg:grid-cols-10
      '>
        {/* Left Side */}
        <div className='
          col-span-1
        '>
        </div>
        {/* Central Side */}
        <div className='
          col-span-6
        '>
          { content && (
            <div className='
              flex-1
              flex flex-col
              gap-6
              min-w-fit max-w-min
              text-justify
              text-xl font-normal leading-8
            '
            dangerouslySetInnerHTML={{ __html: content }}
            />
          ) }
          <div className='
            flex lg:hidden
            flex-row
            justify-center
            gap-12
          '>
            <TwitterShareButton url={ articleLink }>
              <img
              src={ twitter }
              alt='Twitter' />
            </TwitterShareButton>
            <LinkedinShareButton url={ articleLink }>
              <img
                className='w-6 h-6'
                src={ linkedIn }
                alt='LinkedIn' />
            </LinkedinShareButton>
            <EmailShareButton url={ articleLink }>
              <img
              src={ email }
              alt='Email' />
            </EmailShareButton>
          </div>
        </div>
        {/* Right Side */}
        <div className='
          col-span-3
          flex flex-col items-center
          gap-12
          h-fit
          p-6 lg:p-12
        '>
          <h1 className='
            hidden lg:flex 
            text-3xl font-semibold
          '>
            Author
          </h1>
          <div className='
            hidden lg:flex flex-col items-center
            p-6 gap-12
            w-full
            rounded-2xl
            shadow-card hover:shadow-card-hover
          '>
            <div className='flex w-44 h-44'>
              { authorImage?.src?.url ? (
                <img className='w-full h-full rounded-full'
                src={ getImage(authorImage.src) || authorImage.src }
                alt={ authorImage.alt } />
              ) : (
                <GatsbyImage className='w-full h-full rounded-full'
                formats={ ['auto', 'webp'] }
                image={ getImage(authorImage.src) || authorImage.src }
                alt={ authorImage.alt } />
              ) }
            </div>
            { author && (
              <p className='
                px-6
                text-center
                text-xl font-light leading-4
              '> 
                { author }
              </p>
            ) }
          </div>
        </div>
      </div>
    )}
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
  author: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

HTMLContent.propTypes = Article.propTypes;

export default Article;

