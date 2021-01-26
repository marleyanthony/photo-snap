import React from 'react';
// import { FeaturesContent } from '../Models';
type FeaturesProps = {
   content: {
      icon: any,
      title: string,
      summary: string,
      alt: string
   }[]
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
   console.log(content.length)
   return (
      <section className={
         content.length === 4
            ? "features features--home"
            : "features"
      }>
         {
            content.map((feature, index) => {
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
