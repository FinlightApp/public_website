import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../img/finlight_logo.svg';
import chevronIcon from '../img/chevron_up_f6.svg';

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

  React.useEffect(() => {
    if(isActive) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [isActive]);
  return (
    <nav className='
      navbar
      sticky top-0
      z-10
      bg-black
    '
    role='navigation'
    aria-label='main-navigation'>
      <div className='
        container relative
        flex
        items-center
        h-16 lg:h-20
        px-4 md:gap-16
      '>
        {/* Nav Start - Logo */}
        <div className='
          navbar-brand
          flex-1 lg:flex-none flex
        '>
          <Link to='/' className='
            navbar-item
            min-h-10 h-8 lg:h-10 w-fit
          '
          title='Logo'>
            <img className='flex h-full' src={logo} alt='logo' />
          </Link>
        </div>
        {/* Nav Menu */}
        <ul className={`
          navbar-start navbar-menu
          flex-1 hidden md:flex
          gap-4 lg:gap-8
        `}>
          { navItems.map((navItem, i) => (
            <Link className='
              navbar-item
              px-2
              font-header text-sm lg:text-base text-white
            '
            activeClassName='border-b border-b-primary'
            to={ navItem.link } key={ i }>
              { navItem.pageName }
            </Link>
          )) }
        {/* Nav End */}
        <div className='
          navbar-end
          flex-1 lg:flex-none flex
          justify-end
        '>
          {/* Hamburger Toggle */}
          <button className={`
            ${isActive && 'is-active'}
            navbar-burger burger
            flex md:hidden flex-col
            justify-between
            w-8 h-6
          `}
          aria-expanded={ isActive }
          onClick={() => setIsActive(!isActive)}>
            <div className='w-full h-px bg-white' />
            <div className='w-full h-px bg-white' />
            <div className='w-full h-px bg-white' />
          </button>
          {/* Sign-In */}
          <a href='https://app.finlight.com'
          className='
            navbar-item
            hidden md:flex
            px-4
            font-header text-sm lg:text-base text-primary
          '>
            Sign In
          </a>
        </div>
      </div>
      {/* Hamburger Menu */}
      <ul id='navMenu' className={`
        ${isActive ? 'flex md:hidden' : 'hidden' }
        navbar-start navbar-menu
        fixed inset-0 top-16 z-10
        flex-col
        items-center justify-between
        py-8 px-16 gap-8
        bg-black
      `}>
        <div className='
          flex-1 flex flex-col
          w-full
          gap-12
          items-center
        '>
          { navItems.map((navItem, i) => (
            <Link className='
              navbar-item
              flex
              justify-center
              w-full
              py-2
              font-header text-white text-lg font-medium
            '
            activeClassName='border-b border-b-primary'
            to={ navItem.link } key={ i }>
              { navItem.pageName }
            </Link>
          )) }
          <div className='
            flex
            w-1/2
            justify-center
          '>
            <hr className='w-full px-4 border-t border-grey' />
          </div>
          <a href='https://app.finlight.com'
          className='
            navbar-item
            flex
            justify-center
            w-full
            py-2
            font-header text-primary text-lg font-medium
          '>
            Sign In
          </a>
        </div>
        <div className='
          flex flex-col
          gap-4
          justify-center items-center
          h-12 w-full
        ' onClick={() => setIsActive(!isActive)}>
          <img className='h-4 w-4' src={chevronIcon} alt='close' />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
