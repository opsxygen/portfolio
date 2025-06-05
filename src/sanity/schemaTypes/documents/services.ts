import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'eg. Service Name',
      description: 'The title of the service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      validation: (Rule) => Rule.required(),
      description: 'The description of the service',
      type: 'text',
    }),
    defineField({
      name: 'startPrice',
      title: 'Start Price',
      type: 'number',
      placeholder: 'eg. 1000',
      description: 'The starting price of the service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the service',
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
      name: 'publishedAt',
      title: 'Published At',
      validation: (Rule) => Rule.required(),
      description: 'The date the service was published',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
