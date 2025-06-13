import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'eg. Project Name',
      description: 'The title of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullTitle',
      title: 'Full Title',
      type: 'string',
      placeholder: 'eg. Project Full Name',
      description: 'The full title of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      placeholder: 'eg. E-Commerce',
      description: 'The service provided by the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      placeholder: 'eg. Company Name',
      description: 'The client of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'The main image of the project',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      validation: (Rule) => Rule.required(),
      description: 'The description of the project',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      validation: (Rule) => Rule.required(),
      description: 'The date the project was published',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
