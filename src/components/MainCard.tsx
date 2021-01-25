import React from 'react';
import arrow from '../assets/shared/desktop/arrow.svg';
import arrowBlack from '../assets/shared/desktop/arrow-black.svg';
// import { HomeSectionContent } from '../Models';

type MainCardProps = {
   content: {
      imgMobile: any,
      imgTablet: any,
      imgDesktop: any,
      alt: string,
      header: string,
      info: string,
      buttonText?: string,
      sectionClass?: string,
      buttonClass?: string,
      lastMonth?: string,
      authorDate?: string,
      author?: string,
      date?: string
   }[]
}

const MainCard: React.FC<MainCardProps> = ({ content }) => {
   return (
      <div className="section-wrapper">
         {
            content.map((section, index) => {
               return (
                  <div className={
                     section.header === 'Create and share your photo stories'
                        ? 'main-card__card-wrapper main-card__card-wrapper--reverse'
                        : section.header === 'Designed for everyone'
                           ? 'main-card__card-wrapper main-card__card-wrapper--reverse'
                           : section.header === 'HAZY FULL MOON OF APPALACHIA'
                              ? 'main-card__card-wrapper main-card__card-wrapper--stories-page'
                              : 'main-card__card-wrapper'
                  }
                     key={index}>
                     <picture>
                        <source media="(min-width: 1200px)" srcSet={section.imgDesktop} />
                        <source media="(min-width: 768px)" srcSet={section.imgTablet} />
                        <img src={section.imgMobile} alt={section.alt} className="main-card__img" />
                     </picture>
                     <div className={section.sectionClass}>
                        <div className={
                           section.header === 'Create and share your photo stories'
                              ? 'main-card__wrapper main-card__wrapper--gradient-border'
                              : section.header === 'Features'
                                 ? 'main-card__wrapper main-card__wrapper--gradient-border'
                                 : 'main-card__wrapper'
                        }
                        >
                           <p className="main-card__featured">
                              {section.lastMonth}
                           </p>
                           <h1 className="main-card__content-header">
                              {section.header}
                           </h1>
                           <div className="main-card__date-author-wrapper">
                              <p className="main-card__date">
                                 {section.date}
                              </p>
                              <p className="main-card__author">
                                 {section.author}
                              </p>
                           </div>
                           <p className="main-card__content-info">
                              {section.info}
                           </p>
                           <button
                              className={section.buttonClass}
                              style={
                                 section.header === 'Features'
                                    ? { display: 'none' }
                                    : section.header === 'Pricing'
                                       ? { display: 'none' }
                                       : { display: 'block' }
                              }
                           >
                              {section.buttonText}
                              {
                                 section.buttonText === 'Get An Invite'
                                    ? <img src={arrow} alt="arrow" className="main-card__cta-arrow" />
                                    : section.buttonText === 'Read The Story'
                                       ? <img src={arrow} alt="arrow" className="main-card__cta-arrow" />
                                       : <img src={arrowBlack} alt="arrow" className="main-card__cta-arrow" />
                              }
                           </button>
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default MainCard
