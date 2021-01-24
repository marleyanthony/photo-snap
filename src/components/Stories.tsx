import React from 'react';
import Header from './Header';
import MainCard from './MainCard';
import { StoryPageHeaderContent } from '../Models';

const Stories = () => {
   return (
      <div className="stories-page">
         <Header />
         <MainCard content={StoryPageHeaderContent} />
      </div>
   )
}

export default Stories
