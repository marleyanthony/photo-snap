import createImgMobile from '../assets/home/mobile/create-and-share.jpg';
import createImgTablet from '../assets/home/tablet/create-and-share.jpg';
import createImgDesktop from '../assets/home/desktop/create-and-share.jpg';
import beautifulStoriesImgMobile from '../assets/home/mobile/beautiful-stories.jpg';
import beautifulStoriesImgTablet from '../assets/home/tablet/beautiful-stories.jpg';
import beautifulStoriesImgDesktop from '../assets/home/desktop/beautiful-stories.jpg';
import designedImgMobile from '../assets/home/mobile/designed-for-everyone.jpg';
import designedImgTablet from '../assets/home/tablet/designed-for-everyone.jpg';
import designedImgDesktop from '../assets/home/desktop/designed-for-everyone.jpg';
// ! card images
import mountainStoryCardImgMobile from '../assets/stories/mobile/mountains.jpg';
import mountainStoryCardImgTablet from '../assets/stories/desktop/mountains.jpg';
import mountainStoryCardImgDesktop from '../assets/stories/desktop/mountains.jpg';
import sunsetStoryCardImgMobile from '../assets/stories/mobile/cityscapes.jpg';
import sunsetStoryCardImgTablet from '../assets/stories/desktop/cityscapes.jpg';
import sunsetStoryCardImgDesktop from '../assets/stories/desktop/cityscapes.jpg';
import daysStoryCardImgMobile from '../assets/stories/mobile/18-days-voyage.jpg';
import daysStoryCardImgTablet from '../assets/stories/desktop/18-days-voyage.jpg';
import daysStoryCardImgDesktop from '../assets/stories/desktop/18-days-voyage.jpg';
import architecturalsCardImgMobile from '../assets/stories/mobile/architecturals.jpg';
import architecturalsCardImgTablet from '../assets/stories/desktop/architecturals.jpg';
import architecturalsCardImgDesktop from '../assets/stories/desktop/architecturals.jpg';
// ! advantages icons 
import responsiveIcon from '../assets/features/desktop/responsive.svg';
import limitIcon from '../assets/features/desktop/no-limit.svg';
import embedIcon from '../assets/features/desktop/embed.svg';


// ! home section content
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




// ! story cards
export const StoryCardsContent = [
   {
      title: 'The Mountains',
      author: 'John Appleseed',
      mobileImg: mountainStoryCardImgMobile,
      tabletImg: mountainStoryCardImgTablet,
      desktopImg: mountainStoryCardImgDesktop,
      atl: 'mountains background'
   },
   {
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      mobileImg: sunsetStoryCardImgMobile,
      tabletImg: sunsetStoryCardImgTablet,
      desktopImg: sunsetStoryCardImgDesktop,
      atl: 'sunset cityscapes background'
   },
   {
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      mobileImg: daysStoryCardImgMobile,
      tabletImg: daysStoryCardImgTablet,
      desktopImg: daysStoryCardImgDesktop,
      atl: 'person walking with backpack on with sunset behind'
   },
   {
      title: 'Architecturals',
      author: 'Samantha Brooke',
      mobileImg: architecturalsCardImgMobile,
      tabletImg: architecturalsCardImgTablet,
      desktopImg: architecturalsCardImgDesktop,
      atl: 'Architectural building'
   },
]



// ! features 
export const FeaturesContent = [
   {
      icon: responsiveIcon,
      title: '100% Responsive',
      summary: `No matter which device you're on, our site is full responsive and stories look beautiful on any screen.`
   },
   {
      icon: limitIcon,
      title: 'No Photo Upload Limit',
      summary: `Our tool has no limits on uploads or bandwith. Freely upload in bulk and share all of your stories in one go.`
   },
   {
      icon: embedIcon,
      title: 'Available to Embed',
      summary: `Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps and more.`
   },
]