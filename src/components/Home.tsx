import React from 'react';
import Header from './Header';
import Section from './Section';
import StoryCard from './StoryCard';
import Features from './Features';
import Footer from './Footer';

const Home = () => {
   return (
      <div className="home-page">
         <Header />
         <Section />
         <StoryCard />
         <Features />
         <Footer />
      </div>
   )
}

export default Home
