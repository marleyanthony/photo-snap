import React from 'react';
import Header from './Header';
import MainCard from './MainCard';
import StoryCard from './StoryCard';
import Features from './Features';
import Footer from './Footer';
import { HomeSectionContent } from '../Models';

const Home = () => {
   return (
      <div className="home-page">
         <Header />
         <MainCard content={HomeSectionContent} />
         <StoryCard />
         <Features />
         <Footer />
      </div>
   )
}

export default Home
