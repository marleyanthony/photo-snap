import heroImgMobile from '../assets/pricing/mobile/hero.jpg';
import heroImgTablet from '../assets/pricing/tablet/hero.jpg';
import heroImgDesktop from '../assets/pricing/desktop/hero.jpg';


export const PricingPageHeroContent = [
   {
      imgMobile: heroImgMobile,
      imgTablet: heroImgTablet,
      imgDesktop: heroImgDesktop,
      alt: 'person taking a photo of the sunset',
      header: 'Pricing',
      info: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
      sectionClass: 'main-card main-card--black'
   }
]




// ! pricing options content 
export const PricingOptionsContent = [
   {
      name: 'Basic',
      summary: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      priceMonth: '$19.00',
      priceYear: '$190.00',
      subTypeMonth: 'per month',
      subTypeYear: 'per year',
      buttonClass: 'pricing-options__cta-btn pricing-options__cta-btn--black'
   },
   {
      name: 'Pro',
      summary: 'More advanced features available. Recommended for photography veterans and professionals.',
      priceMonth: '$39.00',
      priceYear: '$390.00',
      subTypeMonth: 'per month',
      subTypeYear: 'per year',
      buttonClass: 'pricing-options__cta-btn'
   },
   {
      name: 'Business',
      summary: 'Additional features available such as more detailed metrics. Recommended for business owners.',
      priceMonth: '$99.00',
      priceYear: '$990.00',
      subTypeMonth: 'per month',
      subTypeYear: 'per year',
      buttonClass: 'pricing-options__cta-btn pricing-options__cta-btn--black'
   },
]