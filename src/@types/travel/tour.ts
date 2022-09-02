import { AuthorProps } from '../author';
import { SocialLinks } from '../socials';

// ----------------------------------------------------------------------

export type TourProps = {
  id: string;
  slug: string;
  price: number;
  heroImg: string;
  ratings: number;
  reviews: number;
  coverImg: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  description: string;
  languages: string[];
  highlights: string[];
  tourGuide: AuthorProps;
  shareLinks: SocialLinks;
  createdAt: Date | string | number;
  availableEnd: Date | string | number;
  availableStart: Date | string | number;
  program: {
    label: string;
    text: string;
  }[];
  includes: {
    label: string;
    enabled: boolean;
  }[];
};
