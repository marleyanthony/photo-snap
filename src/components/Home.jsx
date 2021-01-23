import React from 'react';
import Header from './reusable/Header';
import Section from './Home/Section';
import StoryCard from './Home/StoryCard';
import Features from './Home/Features';

const Home = () => {
   return (
      <div className="home-page">
         <Header />
         <Section />
         <StoryCard />
         <Features />
      </div>
   )
}

export default Home
