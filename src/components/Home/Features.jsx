import React from 'react';
import { FeaturesContent } from '../../Models';

const Features = () => {
   console.log(FeaturesContent)
   return (
      <section className="features">
         {
            FeaturesContent.map((feature, index) => {
               return (
                  <div className="features__wrapper" key={index}>
                     <img src={feature.icon} alt={feature.alt} className="features__icon" />
                     <h5 className="features__title">
                        {feature.title}
                     </h5>
                     <p className="features__summary">
                        {feature.summary}
                     </p>
                  </div>
               )
            })
         }
      </section>
   )
}

export default Features
