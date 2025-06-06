import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'university',
      title: 'University',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
  ],
});
