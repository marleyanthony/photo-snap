import React, { useEffect } from 'react';
import Header from './Header';
import MainCard from './MainCard';
import StoryCard from './StoryCard';
import Footer from './Footer';
import { StoriesCardContent, StoryPageHeaderContent } from '../Models';

const Stories = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [])

   return (
      <div className="stories-page">
         <Header />
         <MainCard content={StoryPageHeaderContent} />
         <StoryCard content={StoriesCardContent} />
         <Footer />
      </div>
   )
}

export default Stories
