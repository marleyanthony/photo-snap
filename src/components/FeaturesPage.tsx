import React, { useEffect } from 'react';
import { FeaturesPageHeroContent, FeaturesPageFeaturesContent } from '../Models';
import Header from './Header';
import MainCard from './MainCard';
import Features from './Features';
import Footer from './Footer';

const FeaturesPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="features-page">
         <Header />
         <MainCard content={FeaturesPageHeroContent} />
         <Features content={FeaturesPageFeaturesContent} />
         <Footer />
      </div>
   )
}

export default FeaturesPage
