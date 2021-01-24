import React from 'react';
import { FeaturesPageHeroContent, FeaturesPageFeaturesContent } from '../Models';
import Header from './Header';
import MainCard from './MainCard';
import Features from './Features';
import Footer from './Footer';

const FeaturesPage = () => {
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
