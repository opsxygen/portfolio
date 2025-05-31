import { groq } from 'next-sanity';

export const searchProjectsQuery = groq`*[_type == "project" && (title match $searchTerm || service match $searchTerm || client match $searchTerm)]{
  _id,
  title,
  service,
  client,
  "slug": slug.current,
  "mainImage": mainImage{
    "url": asset->url,
    "alt": alt
  }
}[0...10]`;

export const searchProductsQuery = groq`*[_type == "product" && (name match $searchTerm || tagline match $searchTerm || description match $searchTerm)]{
  _id,
  name,
  tagline,
  "slug": slug.current,
  "mainImage": mainImage{
    "url": asset->url,
    "alt": alt
  }
}[0...10]`;

export type SearchProject = {
  _id: string;
  title: string;
  service: string;
  client: string;
  slug: string;
  mainImage: {
    url: string;
    alt: string;
  };
};

export type SearchProduct = {
  _id: string;
  name: string;
  tagline: string;
  slug: string;
  mainImage: {
    url: string;
    alt: string;
  };
};

export type SearchResult = {
  projects: SearchProject[];
  products: SearchProduct[];
};
