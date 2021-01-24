import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainCard from './MainCard';
import PricingOptions from './PricingOptions';
import { PricingPageHeroContent, PricingOptionsContent } from '../Models';

const PricingPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="pricing-page">
         <Header />
         <MainCard content={PricingPageHeroContent} />
         <PricingOptions content={PricingOptionsContent} />
         <Footer />
      </div>
   )
}

export default PricingPage
