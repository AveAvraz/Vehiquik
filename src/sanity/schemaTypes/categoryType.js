import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "make",
      type: "string",
      validation: (Rule) => Rule.required().error("Make is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "make",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
   
  ],
});
