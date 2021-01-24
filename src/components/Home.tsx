import React, { useEffect } from 'react';
import Header from './Header';
import MainCard from './MainCard';
import StoryCard from './StoryCard';
import Features from './Features';
import Footer from './Footer';
import { HomeSectionContent, HomeStoryCardsContent, HomeFeaturesContent } from '../Models';

const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="home-page">
         <Header />
         <MainCard content={HomeSectionContent} />
         <StoryCard content={HomeStoryCardsContent} />
         <Features content={HomeFeaturesContent} />
         <Footer />
      </div>
   )
}

export default Home
