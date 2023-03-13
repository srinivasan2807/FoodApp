import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "short_desc",
      title: "Dish Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Dish Amount",
      type: "number",
    }),
    defineField({
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
