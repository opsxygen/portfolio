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
