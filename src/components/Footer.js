import * as React from 'react';
import { Link } from 'gatsby';

import finlight_logo from '../img/finlight_logo_f6.svg';
import twitter_logo from '../img/twitter_logo.svg';
import linkedIn_logo from '../img/social/linkedin_white.svg';

const Footer = () => {
  return (
    <footer className='
      flex flex-col
      items-center
      p-8 md:p-12 lg:p-8
      gap-16
      bg-black
    '>
      <img className='h-12'
      src={finlight_logo} alt='logo' />
      <div className='flex gap-8 md:gap-16'>
        <Link className='text-white'
        to='/contact'>
          Contact
        </Link>
        <Link className='text-white'
        to='/privacy'>
          Privacy
        </Link>
      </div>
      <div className='
        flex
        gap-8
      '>
        <a href='https://twitter.com/FinlightNews' target='_blank'
        referrerPolicy='no-referrer'
        rel='noopener noreferrer'>
          <img src={twitter_logo} alt='Twitter'
          className='h-4 w-4' />
        </a>
        <a href='https://www.linkedin.com/company/finlight' target='_blank'
        referrerPolicy='no-referrer'
        rel='noopener noreferrer'>
          <img src={linkedIn_logo} alt='LinkedIn'
          className='h-4 w-4' />
        </a>
      </div>
      <p className='font-light text-xs text-white'>
        Ⓒ MONEY-PEASY LTD - FINLIGHT.COMTM 2022
      </p>
    </footer>
  );
};

export default Footer;
