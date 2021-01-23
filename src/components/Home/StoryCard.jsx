import React from 'react';
import arrow from '../../assets/shared/desktop/arrow.svg';
import { StoryCardsContent } from '../../Models';

const StoryCard = () => {
   console.log(StoryCardsContent)
   return (
      <div className="story-card">
         {
            StoryCardsContent.map((card, index) => {
               return (
                  <div className="story-card__card-wrapper" key={index}>
                     <div className="story-card__card-img-wrapper">
                        <picture>
                           <img src={card.mobileImg} alt={card.alt} className="story-card__card-bg-img" />
                        </picture>
                        <div className="story-card__img-overlay"></div>
                     </div>
                     <div className="story-card__card-content-wrapper">
                        <h5 className="story-card__card-title">
                           {card.title}
                        </h5>
                        <p className="story-card__card-author">
                           by {card.author}
                        </p>
                        <div className="story-card__read-cta-wrapper">
                           <p className="story-card__read-cta-text">
                              Read Story
                           </p>
                           <img src={arrow} alt="arrow" className="story-card__read-cta-arrow" />
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}

export default StoryCard
