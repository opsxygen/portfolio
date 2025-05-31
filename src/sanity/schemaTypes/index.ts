import { type SchemaTypeDefinition } from 'sanity';

// Document schemas
import post from './documents/post';
import project from './documents/project';
import product from './documents/product';
import stack from './documents/stack';

import siteSettings from './documents/siteSettings';

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

    // Object types
    blockContent,
    link,
    mainImage,
  ],
};
