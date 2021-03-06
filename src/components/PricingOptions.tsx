import React, { useState } from 'react';

type PricingOptionsProps = {
   content: {
      name: string,
      summary: string,
      priceMonth: string,
      priceYear: string,
      subTypeMonth: string,
      subTypeYear: string,
      buttonClass: string
   }[]
}

const PricingOptions: React.FC<PricingOptionsProps> = ({ content }) => {
   const [monthSubType, setMonthSubType] = useState(true);

   let changeSubType = () => {
      setMonthSubType(!monthSubType);
   }

   return (
      <section className="pricing-options">
         <div className="pricing-options__sub-type-wrapper">
            <p className="pricing-options__sub-type">
               Monthly
            </p>
            <label htmlFor="toggle" className="pricing-options__switch">
               <input
                  type="checkbox"
                  className="pricing-options__slider-checkbox"
                  onClick={changeSubType}
                  id="toggle"
               />
               <span className="pricing-options__slider pricing-options__round"></span>
            </label>
            <p className="pricing-options__sub-type">
               Yearly
            </p>
         </div>
         <div className="pricing-options__card-wrapper">
            {
               content.map((card, index) => {
                  return (
                     <div className={
                        card.name === 'Pro'
                           ? 'pricing-options__card pricing-options__card--black'
                           : 'pricing-options__card'
                     }
                        key={index}
                     >
                        <div className="pricing-options__left-side-wrapper">
                           <h3 className={
                              card.name === 'Pro'
                                 ? 'pricing-options__card-header pricing-options__card-header--white'
                                 : 'pricing-options__card-header'
                           }
                           >
                              {card.name}
                           </h3>
                           <p className={
                              card.name === 'Pro'
                                 ? 'pricing-options__card-summary pricing-options__card-summary--white'
                                 : 'pricing-options__card-summary'
                           }
                           >
                              {card.summary}
                           </p>
                        </div>

                        <div className="pricing-options__right-side-wrapper">
                           <p className={
                              card.name === 'Pro'
                                 ? 'pricing-options__card-price pricing-options__card-price--white'
                                 : 'pricing-options__card-price'
                           }
                           >
                              {
                                 monthSubType === true
                                    ? card.priceMonth
                                    : card.priceYear
                              }
                           </p>
                           <p className={
                              card.name === 'Pro'
                                 ? 'pricing-options__card-sub-type pricing-options__card-sub-type--white'
                                 : 'pricing-options__card-sub-type'
                           }>
                              {
                                 monthSubType === true
                                    ? card.subTypeMonth
                                    : card.subTypeYear
                              }
                           </p>
                           <button className={card.buttonClass}>
                              Pick Plan
                           </button>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </section >
   )
}

export default PricingOptions
