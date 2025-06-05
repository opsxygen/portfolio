/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  siteSubtitle,
  siteDescription,
  siteTagline,
  bookAppointmentLink,
  logo,
  socialLinks[]
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
  siteTagline: string;
  bookAppointmentLink: string;
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

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  fullTitle,
  service,
  client,
  slug,
  mainImage,
  description,
  publishedAt,
}`;

export type Project = {
  _id: string;
  title: string;
  fullTitle: string;
  service: string;
  client: string;
  slug: {
    current: string;
  };
  mainImage: {
    url: string;
    alt: string;
  };
  description: string;
  publishedAt: string;
};

export const servicesQuery = groq`*[_type == "service"] | order(_createdAt desc){
  _id,
  title,
  description,
  startPrice,
  image
}`;

export type Service = {
  _id: string;
  title: string;
  description: string;
  startPrice: number;
  image: {
    url: string;
    alt: string;
  };
};

export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  tagline,
  description,
  mainImage,
  slug,
  gallery[],
  body,
  liveDemo,
  price,
  buy
}`;

export type Product = {
  _id: string;
  name: string;
  tagline: string;
  description: string;
  mainImage: {
    url: string;
    alt: string;
  };
  price: number;
  liveDemo: string;
  buy: string;
  body: any;
  gallery: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  slug: {
    current: string;
  };
};

export const postQuery = groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  slug,
  mainImage,
  category,
  body,
  publishedAt,
}`;

export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    url: string;
    alt: string;
  };
  category: string;
  body: any;
  publishedAt: string;
};


export const stackQuery = groq`*[_type == "stack"] | order(orderRank){
  _id,
  name,
  tagline,
  description,
  logo,
  slug
}`;

export type Stack = {
  _id: string;
  name: string;
  tagline: string;
  description: string;
  logo: {
    url: string;
    alt: string;
  };
  slug: {
    current: string;
  };
};


export const testimonialsQuery = groq`*[_type == "testimonials"] | order(_createdAt desc){
  _id,
  name,
  position,
  starCount,
  quote,
  image,
}`;

export type Testimonials = {
  _id: string;
  name: string;
  position: string;
  starCount: number;
  quote: string;
  image: {
    url: string;
    alt: string;
  };
};
