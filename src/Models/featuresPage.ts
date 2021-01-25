import heroImgMobile from '../assets/features/mobile/hero.jpg';
import heroImgTablet from '../assets/features/tablet/hero.jpg';
import heroImgDesktop from '../assets/features/desktop/hero.jpg';
// ! features icon
import responsiveIcon from '../assets/features/desktop/responsive.svg';
import limitIcon from '../assets/features/desktop/no-limit.svg';
import embedIcon from '../assets/features/desktop/embed.svg';
import customDomainIcon from '../assets/features/desktop/custom-domain.svg';
import exposureIcon from '../assets/features/desktop/boost-exposure.svg';
import dragIcon from '../assets/features/desktop/drag-drop.svg';
// ! features table 
import featuresTableCheck from '../assets/check.svg';
import featuresTableNone from '../assets/close.svg';


export const FeaturesPageHeroContent = [
   {
      imgMobile: heroImgMobile,
      imgTablet: heroImgTablet,
      imgDesktop: heroImgDesktop,
      alt: 'person holding camera looking at the mountains',
      header: 'Features',
      info: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
      sectionClass: 'main-card main-card--black'
   }
]



// ! features page feature content 
export const FeaturesPageFeaturesContent = [
   {
      icon: responsiveIcon,
      title: '100% Responsive',
      summary: `No matter which device you're on, our site is full responsive and stories look beautiful on any screen.`,
      alt: 'responsive icon'
   },
   {
      icon: limitIcon,
      title: 'No Photo Upload Limit',
      summary: `Our tool has no limits on uploads or bandwith. Freely upload in bulk and share all of your stories in one go.`,
      alt: 'no photo limit icon'
   },
   {
      icon: embedIcon,
      title: 'Available to Embed',
      summary: `Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps and more.`,
      alt: 'available to embed icon'
   },
   {
      icon: customDomainIcon,
      title: 'Custom Domain',
      summary: `With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!`,
      alt: 'custom domain icon'
   },
   {
      icon: exposureIcon,
      title: 'Boost Your Exposure',
      summary: `Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.`,
      alt: 'boost your exposure icon'
   },
   {
      icon: dragIcon,
      title: 'Drag & Drop Icon',
      summary: `Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.`,
      alt: 'drag and drop icon'
   },
]




// ! features table 
export const FeaturesTableContent = [
   {
      heading: 'Unlimited Story Posting',
      basicCheck: featuresTableCheck,
      proCheck: featuresTableCheck,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Unlimited Photo Upload',
      basicCheck: featuresTableCheck,
      proCheck: featuresTableCheck,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Embedding Custom Content',
      basicCheck: featuresTableNone,
      proCheck: featuresTableCheck,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Customize Metadata',
      basicCheck: featuresTableNone,
      proCheck: featuresTableCheck,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Advanced Metrics',
      basicCheck: featuresTableNone,
      proCheck: featuresTableNone,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Photo Downloads',
      basicCheck: featuresTableNone,
      proCheck: featuresTableNone,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Search Engine Optimization',
      basicCheck: featuresTableNone,
      proCheck: featuresTableNone,
      businessCheck: featuresTableCheck
   },
   {
      heading: 'Custom Analytics',
      basicCheck: featuresTableNone,
      proCheck: featuresTableNone,
      businessCheck: featuresTableCheck
   },
]