import React from 'react';
import Header from './reusable/Header';
import Section from './Home/Section';
import StoryCard from './Home/StoryCard';
import Features from './Home/Features';
import Footer from './reusable/Footer';

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
