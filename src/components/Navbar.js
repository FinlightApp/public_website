import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/finlight_logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    { pageName:'Home', link: '/' },
    { pageName:'Team', link: '/team' },
    { pageName:'Partners', link: '/partners' },
    { pageName:'Values', link: '/our-values' },
    /* { pageName:'Spotlight', link: '/spotlight' }, */
    { pageName:'Contact', link: '/contact' }
  ]

  return (
    <nav
      className='
        navbar
        bg-black
      '
      role="navigation"
      aria-label="main-navigation"
    >
      <div className='
        container relative
        flex
        items-center
        h-20
        px-8 gap-16
      '>
        <div className='
          navbar-brand
          flex
        '>
          <Link to="/" className='
            navbar-item
            min-h-10 h-10 w-fit
          '
          title="Logo">
            <img className='' src={logo} alt="logo" />
          </Link>
          <button //Hamburger menu
            className={`
              ${isActive && "is-active"}
              navbar-burger burger
              flex md:hidden flex-col
              w-16 h-16
              gap-4
            `}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <hr className='w-full bg-white border border-white' />
            <hr className='w-full bg-white border border-white' />
            <hr className='w-full bg-white border border-white' />
          </button>
        </div>

        <ul id="navMenu" className={`
          ${isActive ? 'flex md:hidden' : 'hidden' }
          navbar-start navbar-menu
          absolute top-full
          flex-1 flex-col
          gap-8 z-10
        `}>
          { navItems.map((navItem, i) => (
            <Link className="navbar-item font-header text-xl text-white" activeClassName="bg-primary" to={ navItem.link } key={ i }>
              { navItem.pageName }
            </Link>
          )) }
        </ul>

        <ul id="navMenu" className={`
          navbar-start navbar-menu
          flex-1 hidden md:flex
          gap-8
        `}>
          { navItems.map((navItem, i) => (
            <Link className="navbar-item font-header text-xl text-white" activeClassName="bg-primary"  to={ navItem.link } key={ i }>
              { navItem.pageName }
            </Link>
          )) }
        </ul>
        <div className='
          navbar-end
          flex
        '>
          <div className='navbar-item' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
