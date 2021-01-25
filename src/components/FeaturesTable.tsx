import React from 'react';

type FeaturesTableProps = {
   content: {
      heading: string,
      basicCheck?: any,
      proCheck?: any,
      businessCheck?: any
   }[]
}

const FeaturesTable: React.FC<FeaturesTableProps> = ({ content }) => {
   return (
      <section className="features-table">
         <h4 className="features-table__table-header">
            The Features
         </h4>
         {
            content.map((feature, index) => {
               return (
                  <div className="features-table__row" key={index}>
                     <h5 className="features-table__heading">
                        {feature.heading}
                     </h5>
                     <div className="features-table__tier-wrapper">
                        <div className="features-table__tier">
                           <h5 className="features-table__tier-heading">
                              Basic
                           </h5>
                           <img src={feature.basicCheck} alt="check mark" className="features-table__check" />
                        </div>
                        <div className="features-table__tier">
                           <h5 className="features-table__tier-heading">
                              Pro
                           </h5>
                           <img src={feature.proCheck} alt="check mark" className="features-table__check" />
                        </div>
                        <div className="features-table__tier">
                           <h5 className="features-table__tier-heading">
                              Business
                           </h5>
                           <img src={feature.businessCheck} alt="check mark" className="features-table__check" />
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </section>
   )
}

export default FeaturesTable
