import type { StaticImageData } from 'next/image';
import terminal from '@/public/images/airport-terminal.jpg';
import packing from '@/public/images/parcel-packing.jpg';
import nairobi from '@/public/images/nairobi.jpg';
import mogadishu from '@/public/images/mogadishu.jpg';
import dubai from '@/public/images/dubai.jpg';
import istanbul from '@/public/images/istanbul.jpg';
import shanghai from '@/public/images/shanghai.jpg';
import flight from '@/public/images/flight-above-clouds.jpg';
import cargo from '@/public/images/cargo-port.jpg';
import travel from '@/public/images/travel-planning.jpg';
import support from '@/public/images/personal-support.jpg';
import luggage from '@/public/images/airport-luggage.jpg';

// Static imports let Next.js generate image dimensions and blurred placeholders.
// Keep descriptions and crop positions here so replacing a photo is straightforward.
export const serviceImages = {
  flight: {
    src: flight,
    alt: 'An aircraft wing above white clouds and a deep blue sky',
    position: '50% 40%',
  },
  cargo: {
    src: cargo,
    alt: 'Rows of colorful freight containers at a cargo port',
    position: '50% 50%',
  },
  travel: {
    src: travel,
    alt: 'A traveler planning a route with a map, passport, and camera',
    position: '55% 50%',
  },
  support: {
    src: support,
    alt: 'A person using a smartphone beside an open laptop',
    position: '45% 50%',
  },
} as const;

export const journeyImage = {
  src: luggage,
  alt: 'A teal suitcase ready for departure inside an airport terminal',
  position: '50% 65%',
};

// Shared editorial images for the story, inquiry, and process sections.
export type SitePhoto = {
  src: StaticImageData;
  alt: string;
  position: string;
};

export const sectionImages = {
  terminal: {
    src: terminal,
    alt: 'Sunlight entering a spacious airport departure lounge through tall windows',
    position: '50% 55%',
  },
  packing: {
    src: packing,
    alt: 'Hands carefully sealing a cardboard parcel with packing tape',
    position: '50% 55%',
  },
} satisfies Record<string, SitePhoto>;

export const moduleImages: Record<string, SitePhoto> = {
  flights: sectionImages.terminal,
  cargo: sectionImages.packing,
  'travel-support': serviceImages.travel,
};

export const stepImages: Record<string, SitePhoto> = {
  request: serviceImages.support,
  options: serviceImages.travel,
  confirm: sectionImages.terminal,
};

// Each country uses a photograph of a verified city in that country.
export const destinationImages = {
  kenya: { src: nairobi, alt: 'Nairobi skyline and urban highways in Kenya', position: '50% 50%' },
  somalia: {
    src: mogadishu,
    alt: 'Mogadishu city rooftops beneath the evening sky in Somalia',
    position: '50% 70%',
  },
  uae: {
    src: dubai,
    alt: 'Dubai skyline with the Burj Khalifa in the United Arab Emirates',
    position: '50% 45%',
  },
  turkey: {
    src: istanbul,
    alt: 'Istanbul waterfront and mosque skyline across the Bosphorus in Türkiye',
    position: '50% 50%',
  },
  china: {
    src: shanghai,
    alt: 'Shanghai waterfront with the Oriental Pearl Tower in China',
    position: '45% 50%',
  },
} satisfies Record<string, SitePhoto>;
