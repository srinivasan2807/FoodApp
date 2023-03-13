import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
    defineField({
        name: "name",
        title: "Restauarant Name",
        type: "string",
        validation: (Rule) => Rule.max(200),
      }),
      defineField({
        name: "short_desc",
        title: "Restauarant Description",
        type: "string",
      }),
      defineField({
        name: "restaurants",
        title: "Restuarants",
        type: "array",
        validation: (Rule) => Rule.required(),
        of: [{ type: "reference", to: [{ type: "restaurant" }]}]
      }),
  ],
})
