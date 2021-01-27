import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLinks, FooterSocialIcons } from '../Models';
import arrow from '../assets/shared/desktop/arrow.svg';
import Logo from '../assets/logo-white.svg';


const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__left-flex-wrapper">
            <img src={Logo} alt="logo" className="footer__logo" />
            <div className="footer__social-icon-wrapper">
               {
                  FooterSocialIcons.map((socialIcon, item) => {
                     return (
                        <a href={socialIcon.link} key={item} className="footer__social-icon">
                           <img src={socialIcon.icon} alt={socialIcon.alt} />
                        </a>
                     )
                  })
               }
            </div>
            <div className="footer__pages-wrapper">
               {
                  FooterLinks.map((link, item) => {
                     return (
                        <Link to={link.link} key={item} className="footer__page-link">
                           {link.label}
                        </Link>
                     )
                  })
               }
            </div>
         </div>
         <div className="footer__right-flex-wrapper">
            <button className="footer__cta">
               Get An Invite
               <img src={arrow} alt="arrow" className="footer__arrow-icon" />
            </button>
            <p className="footer__copyright">
               Made with ❤️ by Marley A.
            </p>
         </div>
      </div>
   )
}

export default Footer
