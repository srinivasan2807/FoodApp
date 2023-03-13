import { defineField, defineType } from "sanity";

export default defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
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
      name: "image",
      title: "Restauarant Image",
      type: "image",
    }),
    defineField({
      name: "lat",
      title: "Restauarant Geo Latitude",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "long",
      title: "Restauarant Geo Longitude",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Restauarant Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ratings",
      title: "Restauarant ratings(1-5 stars)",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("please enter b/w 1-5"),
    }),
    defineField({
      name: "type",
      title: "Category",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    }),
    defineField({
      name: "dishes",
      title: "Dishes",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }),
  ],
});
