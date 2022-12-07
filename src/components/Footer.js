import * as React from "react";
import { Link } from "gatsby";

import finlight_logo from "../img/finlight_logo_f6.svg";
import twitter_logo from "../img/twitter_logo.svg";
import linkedIn_logo from "../img/linkedin_logo.svg";

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
      src={finlight_logo} alt="logo" />
      <div class='flex gap-8 md:gap-16'>
        <Link className="text-white"
        to="/">
          Contact
        </Link>
        <Link className="text-white"
        to="/">
          Privacy
        </Link>
      </div>
      <div class='
        flex
        gap-8
      '>
        <a href="https://twitter.com/FinlightNews" target="_blank"
        referrerpolicy="no-referrer"
        rel="noopener noreferrer">
          <img src={twitter_logo} alt="Twitter"
          className='h-4 w-4' />
        </a>
        <a href="https://www.linkedin.com/company/finlight" target="_blank"
        referrerpolicy="no-referrer"
        rel="noopener noreferrer">
          <img src={linkedIn_logo} alt="LinkedIn"
          className='h-4 w-4' />
        </a>
      </div>
      <p className="font-light text-xs text-white">
        Ⓒ MONEY-PEASY LTD - FINLIGHT.COMTM 2022
      </p>
    </footer>
  );
};

export default Footer;
