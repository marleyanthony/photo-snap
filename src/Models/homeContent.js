import createImgMobile from '../assets/home/mobile/create-and-share.jpg';
import createImgTablet from '../assets/home/tablet/create-and-share.jpg';
import createImgDesktop from '../assets/home/desktop/create-and-share.jpg';
import beautifulStoriesImgMobile from '../assets/home/mobile/beautiful-stories.jpg';
import beautifulStoriesImgTablet from '../assets/home/tablet/beautiful-stories.jpg';
import beautifulStoriesImgDesktop from '../assets/home/desktop/beautiful-stories.jpg';
import designedImgMobile from '../assets/home/mobile/designed-for-everyone.jpg';
import designedImgTablet from '../assets/home/tablet/designed-for-everyone.jpg';
import designedImgDesktop from '../assets/home/desktop/designed-for-everyone.jpg';


export const HomeSectionContent = [
   {
      imgMobile: createImgMobile,
      imgTablet: createImgTablet,
      imgDesktop: createImgDesktop,
      alt: 'man standing on dock with a camera in hand',
      header: 'Creat and share your photo stories',
      info: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
      buttonText: 'Get An Invite',
      sectionClass: 'home-section home-section--black',
      buttonClass: 'home-section__cta home-section__cta--white'
   },
   {
      imgMobile: beautifulStoriesImgMobile,
      imgTablet: beautifulStoriesImgTablet,
      imgDesktop: beautifulStoriesImgDesktop,
      alt: 'computer at desk with books and phone nearby',
      header: 'Beautiful stores every time',
      info: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      buttonText: 'View the stories',
      sectionClass: 'home-section',
      buttonClass: 'home-section__cta'
   },
   {
      imgMobile: designedImgMobile,
      imgTablet: designedImgTablet,
      imgDesktop: designedImgDesktop,
      alt: 'man holding cinematic camera',
      header: 'Designed for everyone',
      info: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
      buttonText: 'View the stories',
      sectionClass: 'home-section',
      buttonClass: 'home-section__cta'
   }
]