import React from 'react';
import HeroImgMobile from '../../assets/home/mobile/create-and-share.jpg';
import HeroImgTablet from '../../assets/home/tablet/create-and-share.jpg';
import HeroImgDesktop from '../../assets/home/desktop/create-and-share.jpg';
import arrow from '../../assets/shared/desktop/arrow.svg';

const Hero = () => {
   return (
      <section className="hero">
         <picture>
            <source media="(min-width: 1200px)" srcset={HeroImgDesktop} />
            <source media="(min-width: 768px)" srcset={HeroImgTablet} />
            <img src={HeroImgMobile} alt="man standing on dock with camera in hand" className="hero__img" />
         </picture>
         <div className="hero__content">
            <h1 className="hero__content-header">
               Create and share your photo stories.
            </h1>
            <p className="hero__content-info">
               Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
            </p>
            <button className="hero__cta">
               Get An Invite
               <img src={arrow} alt="arrow" className="hero__cta-arrow" />
            </button>
         </div>
      </section>
   )
}

export default Hero
