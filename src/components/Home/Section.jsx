import React from 'react';
import arrow from '../../assets/shared/desktop/arrow.svg';
import arrowBlack from '../../assets/shared/desktop/arrow-black.svg';
import { HomeSectionContent } from '../../Models';

const Section = () => {
   return (
      <div className="section-wrapper">
         {
            HomeSectionContent.map((section, index) => {
               return (
                  <React.Fragment key={index}>
                     <picture>
                        <source media="(min-width: 1200px)" srcSet={section.imgDesktop} />
                        <source media="(min-width: 768px)" srcSet={section.imgTablet} />
                        <img src={section.imgMobile} alt={section.alt} className="hero__img" />
                     </picture>
                     <div className={section.sectionClass}>
                        <h1 className="home-section__content-header">
                           {section.header}
                        </h1>
                        <p className="home-section__content-info">
                           {section.info}
                        </p>
                        <button className={section.buttonClass}>
                           {section.buttonText}
                           {
                              section.buttonText === 'Get An Invite'
                                 ? <img src={arrow} alt="arrow" className="home-section__cta-arrow" />
                                 : <img src={arrowBlack} alt="arrow" className="home-section__cta-arrow" />
                           }
                        </button>
                     </div>
                  </React.Fragment>
               )
            })
         }
      </div>
   )
}

export default Section
