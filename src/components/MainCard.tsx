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
                  <React.Fragment key={index}>
                     <picture>
                        <source media="(min-width: 1200px)" srcSet={section.imgDesktop} />
                        <source media="(min-width: 768px)" srcSet={section.imgTablet} />
                        <img src={section.imgMobile} alt={section.alt} className="main-card__img" />
                     </picture>
                     <div className={section.sectionClass}>
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
                                 : { display: 'block' }
                           }
                        >
                           {section.buttonText}
                           {
                              section.buttonText === 'Get An Invite' || 'Read The Story'
                                 ? <img src={arrow} alt="arrow" className="main-card__cta-arrow" />
                                 : <img src={arrowBlack} alt="arrow" className="main-card__cta-arrow" />
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

export default MainCard
