import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLinks, FooterSocialIcons } from '../../Models';
import arrow from '../../assets/shared/desktop/arrow.svg';
import Logo from '../../assets/logo-white.svg';


const Footer = () => {
   return (
      <div className="footer">
         <img src={Logo} alt="logo" className="footer__logo" />
         <div className="footer__social-icon-wrapper">
            {
               FooterSocialIcons.map((socialIcon, item) => {
                  return (
                     <img src={socialIcon.icon} alt={socialIcon.alt} key={item} />
                  )
               })
            }
         </div>
         <div className="footer__pages-wrapper">
            {
               FooterLinks.map((link, item) => {
                  return (
                     <Link to={link.label} key={item} className="footer__page-link">
                        {link.label}
                     </Link>
                  )
               })
            }
         </div>
         <button className="footer__cta">
            Get An Invite
            <img src={arrow} alt="arrow" className="footer__arrow-icon" />
         </button>
         <p className="footer__copyright">
            &#169; Copyright 2021. All Rights Reserved
         </p>
      </div>
   )
}

export default Footer
