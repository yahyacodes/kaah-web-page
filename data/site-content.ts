import { destinationImages, serviceImages } from './site-images';

export const navigation = [
  { label: 'Flights', href: '#flights' },
  { label: 'Cargo', href: '#cargo' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQs', href: '#faq' },
];

export const services = [
  {
    title: 'Flight Booking',
    description:
      "Tell us where you're going and when. We'll help you find suitable flight options for your journey.",
    type: 'flight',
    href: '#flights',
  },
  {
    title: 'Cargo Services',
    description:
      'Send personal packages, documents, belongings, and commercial cargo to supported destinations.',
    type: 'cargo',
    href: '#cargo',
  },
  {
    title: 'Travel Assistance',
    description:
      'Get help understanding available routes, travel arrangements, and requirements for your journey.',
    type: 'travel',
    href: '#travel-support',
  },
  {
    title: 'Personal Support',
    description:
      'Have a question? Speak directly with our team before, during, and after your booking or shipment.',
    type: 'support',
    href: '#contact',
  },
] as const;

export const modules = [
  {
    id: 'flights',
    label: 'Flights',
    title: 'Find the Right Flight Without the Hassle.',
    description:
      'Tell us your departure city, destination, and travel date. Our team will check available options and help you choose a flight that works for your schedule and budget.',
    callouts: [
      ['Flexible Options', 'Compare available routes, schedules, and flight options.'],
      ['Human Support', 'Need help deciding? Speak directly with our team.'],
    ],
  },
  {
    id: 'cargo',
    label: 'Cargo',
    title: 'Your Cargo. Handled With Care.',
    description:
      "Whether you're sending a small parcel, personal belongings, documents, or commercial cargo, Kaah makes the process straightforward. Tell us what you're sending, where it's going, and approximately how much it weighs.",
    callouts: [
      ['Clear Information', 'Know the available option, price, and process before you send.'],
      ['Shipment Support', 'Need assistance with your shipment? Our team is available to help.'],
    ],
  },
  {
    id: 'travel-support',
    label: 'Travel Support',
    title: 'More Than Just a Booking.',
    description:
      "Every journey is different. Whether you're travelling for business, visiting family, or exploring somewhere new, our team can help you understand your available travel options and make the process easier.",
    callouts: [
      ['Route Assistance', 'Find suitable connections for your journey.'],
      ['Direct Support', 'Get help from a real person.'],
    ],
  },
];

export const assistance = [
  { title: 'Route Assistance', description: 'Find suitable routes and connections.' },
  {
    title: 'Travel Information',
    description: 'Understand relevant travel requirements and arrangements.',
  },
  { title: 'Direct Support', description: 'Speak directly with the Kaah team when you need help.' },
];

export const steps = [
  {
    title: 'Tell Us What You Need',
    description:
      'Looking for a flight or sending cargo? Send us the details through our website or WhatsApp.',
    type: 'request',
  },
  {
    title: 'Get Your Options',
    description:
      'Our team checks the available options and provides the relevant pricing and information.',
    type: 'options',
  },
  {
    title: 'Confirm & Go',
    description:
      "Choose the option that works for you, confirm with our team, and we'll handle the next steps.",
    type: 'confirm',
  },
] as const;

// Keep country flags local so the destination cards do not depend on an image service.
export const destinations = [
  { name: 'Kenya', flag: '/flags/ke.svg', photo: destinationImages.kenya },
  { name: 'Somalia', flag: '/flags/so.svg', photo: destinationImages.somalia },
  { name: 'UAE', flag: '/flags/ae.svg', photo: destinationImages.uae },
  { name: 'Türkiye', flag: '/flags/tr.svg', photo: destinationImages.turkey },
  { name: 'China', flag: '/flags/cn.svg', photo: destinationImages.china },
  { name: 'More Destinations', flag: null, photo: serviceImages.flight },
];

// Editorial placeholders only. Never render as verified customer endorsements.
export const testimonials = [
  {
    role: 'Customer',
    quote:
      'Kaah made the whole process easy. I knew what I needed to do and could reach the team whenever I needed help.',
    isPlaceholder: true,
  },
  {
    role: 'Traveller',
    quote: 'Quick communication and straightforward service from beginning to end.',
    isPlaceholder: true,
  },
  {
    role: 'Business Customer',
    quote:
      'I use Kaah whenever I need help sending cargo. The process is simple and communication is clear.',
    isPlaceholder: true,
  },
];

export const faqs = [
  [
    'How do I get a flight quote?',
    'Send us your departure city, destination, travel date, and number of passengers. Our team will check the available options and contact you.',
  ],
  [
    'How do I get a cargo quote?',
    "Tell us where you're sending from, the destination, cargo type, and approximate weight. We'll provide the available shipping information and pricing.",
  ],
  [
    'What kind of cargo can I send?',
    "We handle different types of cargo depending on the destination and applicable transport requirements. Send us details of what you're shipping and we'll confirm the available options.",
  ],
  [
    'How long does cargo delivery take?',
    "Delivery times depend on the origin, destination, route, and service. We'll provide an estimated timeframe when you request your quote.",
  ],
  [
    'Can businesses send cargo through Kaah?',
    'Yes. Businesses can contact us about regular or commercial shipments and available cargo arrangements.',
  ],
  [
    'How can I contact Kaah?',
    'The fastest option is WhatsApp. You can also submit a request through our website to send it directly to our team by email.',
  ],
];

export const footerLinks = [
  {
    title: 'Travel',
    links: [
      { label: 'Flight Booking', href: '#flights' },
      { label: 'Travel Assistance', href: '#travel-support' },
      { label: 'Destinations', href: '#destinations' },
    ],
  },
  {
    title: 'Cargo',
    links: [
      { label: 'Send Cargo', href: '#cargo' },
      { label: 'Get a Cargo Quote', href: '#cargo' },
      { label: 'Business Cargo', href: '#cargo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Kaah', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'WhatsApp', href: 'whatsapp' },
      { label: 'Call Us', href: 'phone' },
      { label: 'Visit Our Office', href: 'office' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];
