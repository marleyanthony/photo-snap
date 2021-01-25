import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';
import PricingOptions from './PricingOptions';
import FeaturesTable from './FeaturesTable';
import { PricingPageHeroContent, PricingOptionsContent, FeaturesTableContent } from '../Models';

const PricingPage = () => {
   // useEffect(() => {
   //    window.scrollTo(0, 0);
   // }, [])

   return (
      <div className="pricing-page">
         <Header />
         <MainCard content={PricingPageHeroContent} />
         <PricingOptions content={PricingOptionsContent} />
         <FeaturesTable content={FeaturesTableContent} />
         <Footer />
      </div>
   )
}

export default PricingPage
