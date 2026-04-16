import logoSrc from '../assets/skippers-logo.svg';
import cleanFinishPhoto from '../assets/gallery/clean-finish.jpg';
import heroLawnPhoto from '../assets/gallery/hero-lawn.jpg';
import oakLawnPhoto from '../assets/gallery/oak-lawn.jpg';
import widePropertyPhoto from '../assets/gallery/wide-property.jpg';
import type { IconName } from '../components/Icon';

type NavigationItem = {
  label: string;
  href: string;
};

type CTAKey = 'call' | 'text' | 'quote';

type Service = {
  title: string;
  description: string;
  icon: IconName;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

type Reason = {
  title: string;
  description: string;
  icon: IconName;
};

type GalleryItem = {
  title: string;
  description: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  imageClass?: string;
};

const phoneRaw = '4058349623';
const phoneDisplay = '405-834-9623';

export const siteContent = {
  seo: {
    title: 'Skippers Lawn Service | Reliable Lawn Care You Can Trust',
    description:
      'Dependable lawn care for homeowners needing mowing, weed eating, and leaf cleanup with fast free estimates.',
  },
  business: {
    name: 'Skippers Lawn Service',
    shortName: 'Skippers',
    tagline: 'Dependable local lawn care with straightforward service and fast free estimates.',
    logoSrc,
    logoAlt: 'Skippers Lawn Service logo',
    headline: 'Reliable Lawn Care You Can Trust',
    subheadline:
      'Professional mowing, weed eating, and leaf cleanup for homeowners who want a clean, well-kept yard without the hassle.',
    heroImageSrc: widePropertyPhoto,
    heroImageAlt: 'Freshly mowed front yard with crisp mowing lines in front of a home',
    heroImagePosition: 'center center',
    heroSecondaryImageSrc: heroLawnPhoto,
    heroSecondaryImageAlt: 'Freshly mowed backyard with clean grass lines near a fence',
    heroSecondaryImagePosition: 'center 38%',
    trustItems: ['Local and dependable', 'Fast response times', 'Free estimates'],
    serviceSummary: 'Mowing, weed eating, and leaf cleanup done right.',
  },
  contact: {
    phoneDisplay,
    phoneRaw,
    callHref: `tel:${phoneRaw}`,
    textHref: `sms:${phoneRaw}`,
    quoteHref: '#contact',
    responseText: 'Fast response, free estimates, and easy scheduling.',
    leadMessage:
      'The fastest way to get your free quote is to call or text. We keep the process simple, low-pressure, and easy to schedule.',
    photoSrc: oakLawnPhoto,
    photoAlt: 'Freshly cut lawn at sunset near a home and shade tree',
    photoPosition: 'center 40%',
  },
  ctaLabels: {
    call: 'Call Now',
    text: 'Text Now',
    quote: 'Get Free Quote',
  } satisfies Record<CTAKey, string>,
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavigationItem[],
  services: [
    {
      title: 'Mowing',
      description:
        'Regular lawn cutting that keeps your yard neat, healthy-looking, and ready to enjoy week after week.',
      icon: 'mower',
      imageSrc: widePropertyPhoto,
      imageAlt: 'Large front lawn with visible mowing lines leading toward a home',
      imagePosition: 'center 58%',
    },
    {
      title: 'Weed Eating',
      description:
        'Detailed trimming around fences, edges, flower beds, and hard-to-reach areas for a clean finished look.',
      icon: 'trimmer',
      imageSrc: heroLawnPhoto,
      imageAlt: 'Freshly trimmed backyard edge line along a wooden fence',
      imagePosition: 'center 38%',
    },
    {
      title: 'Leaf Cleanup',
      description:
        'Seasonal cleanup that removes leaves and yard debris so your property stays tidy and well cared for.',
      icon: 'leaf',
      imageSrc: oakLawnPhoto,
      imageAlt: 'Clean maintained yard beneath a large tree near a home',
      imagePosition: 'center 42%',
    },
  ] satisfies Service[],
  reasons: [
    {
      title: 'Reliable Scheduling',
      description: 'Clear communication and dependable service that helps you keep your yard on track.',
      icon: 'calendar',
    },
    {
      title: 'Detail-Focused Work',
      description:
        'We take pride in the finishing touches that make a yard look clean and professionally maintained.',
      icon: 'spark',
    },
    {
      title: 'Affordable Pricing',
      description: 'Fair, straightforward quotes based on your property and the work you actually need.',
      icon: 'dollar',
    },
    {
      title: 'Local And Trusted',
      description: 'Built for homeowners who want dependable local lawn care without the runaround.',
      icon: 'location',
    },
    {
      title: 'Fast Free Estimates',
      description: 'Reach out by call or text and get a quick response on your next mowing or cleanup job.',
      icon: 'quote',
    },
    {
      title: 'Professional Results',
      description:
        'A polished finish that helps your property look cared for, welcoming, and ready for the week.',
      icon: 'shield',
    },
  ] satisfies Reason[],
  trustFeature: {
    title: 'Clean work that helps the whole property feel looked after.',
    description:
      'From open front lawns to fence-line cleanup, the focus stays on a tidy finish, straightforward service, and results homeowners can see right away.',
    imageSrc: cleanFinishPhoto,
    imageAlt: 'Freshly maintained lawn and fence line under a bright blue sky',
    imagePosition: 'center 46%',
    imageClass: 'img-horizon-fix',
    badge: 'Trusted Local Service',
  },
  about: {
    eyebrow: 'About Skippers Lawn Service',
    title: 'Friendly, straightforward lawn care built around dependable service.',
    paragraphs: [
      'Skippers Lawn Service is focused on helping homeowners keep their properties looking clean, maintained, and easy to enjoy. Every visit is approached with the same goal: show up, do clean work, and leave the yard looking better than when we arrived.',
      'Whether you need recurring mowing, detailed weed eating, or help with seasonal leaf cleanup, the service stays simple and professional. We believe in clear communication, dependable scheduling, and work you can feel good about when you pull into the driveway.',
    ],
    values: [
      'Dependable lawn care for busy homeowners',
      'Clean work with attention to the details',
      'Straightforward service and easy communication',
    ],
    photoSrc: heroLawnPhoto,
    photoAlt: 'Clean backyard lawn with a fresh cut near a fence line',
    photoPosition: 'center 38%',
  },
  galleryItems: [
    {
      title: 'Front Yard Stripe Finish',
      description: 'A clean, even cut that helps the whole property feel sharp from the street.',
      badge: 'Recent Work',
      imageSrc: widePropertyPhoto,
      imageAlt: 'Freshly mowed front yard with visible mowing lines in front of a brick home',
      objectPosition: 'center 55%',
    },
    {
      title: 'Fence Line Cleanup',
      description: 'Backyard mowing and trimming finished cleanly along the fence and gate line.',
      imageSrc: heroLawnPhoto,
      imageAlt: 'Mowed backyard with fresh grass lines along a wooden fence',
      objectPosition: 'center 38%',
    },
    {
      title: 'Clean Cut Along The Fence Line',
      description: 'A tidy pass beside the fence that keeps the open yard looking even and well cared for.',
      imageSrc: cleanFinishPhoto,
      imageAlt: 'Freshly cut grassy yard beside a fence under a bright blue sky',
      objectPosition: 'center 45%',
      imageClass: 'img-horizon-fix',
    },
    {
      title: 'Evening Lawn Finish',
      description: 'A smooth finish that still looks polished as the sun drops and shadows settle in.',
      imageSrc: oakLawnPhoto,
      imageAlt: 'Well-kept lawn at sunset beside a home and large shade tree',
      objectPosition: 'center 40%',
    },
  ] satisfies GalleryItem[],
  pricing: {
    eyebrow: 'Free Estimates',
    title: 'Free Estimates - No Pressure',
    message: 'Every yard is different. Contact us for a fast, free quote.',
    supportItems: [
      'Pricing depends on yard size, condition, and service needs',
      'No-pressure estimates and straightforward communication',
      'Fast response for mowing, weed eating, and leaf cleanup',
    ],
  },
  serviceAreas: [
    'Chickasha',
    'Purcell',
    'Norman',
    'Blanchard',
    'Tuttle',
    'Wayne',
    'Noble',
    'Lexington',
  ],
  serviceAreaNote: 'Not sure if we service your area? Reach out and ask.',
  testimonials: [
    {
      quote:
        'They showed up on time every single week. My yard has never looked this good. Highly recommend Skippers to anyone in the area.',
      name: 'James R.',
      location: 'Chickasha, OK',
      rating: 5,
    },
    {
      quote:
        'Super easy to schedule and the crew does clean, professional work every time. The detail on the edging is what really stands out.',
      name: 'Michelle T.',
      location: 'Blanchard, OK',
      rating: 5,
    },
    {
      quote:
        'Called for a quote on a Monday, had my yard mowed by Wednesday. Fair price, great results, and friendly service. Will keep using them.',
      name: 'David L.',
      location: 'Purcell, OK',
      rating: 5,
    },
  ],
  contactFormServices: ['Mowing', 'Weed Eating', 'Leaf Cleanup', 'Multiple Services', 'Not Sure'],
} as const;

export type SiteContent = typeof siteContent;
