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
            <div
               className="pricing-options__switch"
               onClick={changeSubType}
            >
               <input type="checkbox" className="pricing-options__slider-checkbox" />
               <span className="pricing-options__slider pricing-options__round"></span>
            </div>
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
                        key={index}>
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
                  )
               })
            }
         </div>
      </section >
   )
}

export default PricingOptions
