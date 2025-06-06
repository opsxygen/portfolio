import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
  ],
});
