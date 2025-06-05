import { type SchemaTypeDefinition } from 'sanity';

// Document schemas
import post from './documents/post';
import project from './documents/project';
import product from './documents/product';
import stack from './documents/stack';
import faq from './documents/faq';
import siteSettings from './documents/siteSettings';
import testimonials from './documents/testimonials';
import service from './documents/services';

// Object schemas
import blockContent from './objects/blockContent';
import link from './objects/link';
import mainImage from './objects/mainImage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document types
    post,
    project,
    product,
    stack,
    siteSettings,
    faq,
    testimonials,
    service,
    // Object types
    blockContent,
    link,
    mainImage,
  ],
};
