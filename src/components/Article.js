import * as React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Panel from './Panel';
import linkedIn from '../img/linkedin_logo_blue.svg';
import twitter from '../img/twitter_blue.svg';
import email from '../img/mail_blue.svg';

const articleLink = typeof window !== 'undefined' && window.location.href;

export const HTMLContent = ({ content, description, image, title }) => (
  <React.Fragment>
    {( content || description || image ) && (
      <div className='
        container
        flex flex-col-reverse lg:flex-row
        lg:justify-start lg:items-start
      '>
        {/* Text side */}
        <div className='
          grow lg:grow-[6]
          flex flex-col
          px-6 py-12 md:p-12
          gap-6
        '>
          { content && (
            <div className='
              flex-1
              flex flex-col
              gap-6
              min-w-fit max-w-min
              text-justify
              font-normal text-base lg:text-xl
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
            <a
            href={ `https://twitter.com/intent/tweet/?text=${title}&amp;url=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on Twitter'>
              <img
              src={ twitter }
              alt='Twitter' />
            </a>
            <a
            href={ `https://www.linkedin.com/shareArticle?mini=true&amp;url=${articleLink}&amp;title=${title}&amp;summary=${title}&amp;source=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on LinkedIn'>
              <img className='w-6 h-6'
              src={ linkedIn }
              alt='LinkedIn' />
            </a>
            <a
            href={ `mailto:?subject=${title}&amp;body=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share by E-Mail'>
              <img
              className='w-6 h-6'
              src={ email }
              alt='Email' />
            </a>
          </div>
        </div>
        {/* Image side */}
        <div className='
          lg:sticky lg:top-20
          grow lg:grow-[4]
          flex flex-col
          gap-6
          py-12 px-6 md:p-12
        '>
          { image?.src?.url ? (
            <img className='w-full'
            src={ getImage(image.src) || image.src }
            alt={ image.alt } />
          ) : (
            <GatsbyImage className='w-full'
            formats={ ['auto', 'webp'] }
            image={ getImage(image.src) || image.src }
            alt={ image.alt } />
          ) }
          { description && (
            <p className='
              px-6
              text-center
              italic
            '> 
              { description }
            </p>
          ) }
          <div className='
            hidden lg:flex
            flex-row
            justify-center
            gap-12
          '>
            <a
            href={ `https://twitter.com/intent/tweet/?text=${title}&amp;url=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on Twitter'>
              <img
              src={ twitter }
              alt='Twitter' />
            </a>
            <a
            href={ `https://www.linkedin.com/shareArticle?mini=true&amp;url=${articleLink}&amp;title=${title}&amp;summary=${title}&amp;source=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on LinkedIn'>
              <img className='w-6 h-6'
              src={ linkedIn }
              alt='LinkedIn' />
            </a>
            <a
            href={ `mailto:?subject=${title}&amp;body=${articleLink}` }
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share by E-Mail'>
              <img
              className='w-6 h-6'
              src={ email }
              alt='Email' />
            </a>
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
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

HTMLContent.propTypes = Article.propTypes;

export default Article;

