import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  siteSubtitle,
  siteDescription,
  "logo": logo{
    "url": asset->url,
    "alt": alt
  },
  socialLinks[]{
    platform,
    url,
    initials
  }
}`;

export const faqsQuery = groq`*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer
}`;

export type SiteSettings = {
  siteTitle: string;
  siteSubtitle: string;
  siteDescription: string;
  logo: {
    url: string;
    alt: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    initials: string;
  }>;
};

export type FAQ = {
  _id: string;
  question: string;
  answer: string;
};
