import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { NavItems } from '../../Models';

const Header = () => {
   const [showNav, setShowNav] = useState(false);

   const toggleNav = () => {
      setShowNav(!showNav);
      console.log("toggle nav")
   }

   return (
      <div className="header">
         <img src={Logo} alt="site logo" />
         <button
            href='#'
            aria-label='hamburger nav'
            className={
               showNav
                  ? 'header__hamburger-btn header__hamburger-btn--active'
                  : 'header__hamburger-btn'
            }
            onClick={toggleNav}
         >
            <span className="header__hamburger-line-1"></span>
            <span className="header__hamburger-line-2"></span>
         </button>
         <section
            className={
               showNav
                  ? 'header__responsive-nav header__responsive-nav--active'
                  : 'header__responsive-nav'
            }
         >
            <div
               className={
                  showNav
                     ? 'header__main-nav header__main-nav--responsive'
                     : 'header__main-nav'
               }
            >
               {
                  NavItems.map((navItem, index) => {
                     return (
                        <Link
                           to={navItem.link}
                           key={index}
                           className="header__nav-item"
                        >
                           {navItem.label}
                        </Link>
                     )
                  })
               }
            </div>
         </section>
      </div>
   )
}

export default Header
