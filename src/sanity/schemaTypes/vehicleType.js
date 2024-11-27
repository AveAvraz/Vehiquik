import { StarIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const vehicleType = defineType({
  name: "vehicle",
  title: "Vehicle",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "model",
      type: "string",
      validation: (Rule) => Rule.required().error("Model is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "model",
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      validation: (Rule) =>
        Rule.required().error("At least one category is required"),
    }),
    defineField({
      name: "price",
      type: "object", // Change to object to include multiple fields
      title: "Price",
      fields: [
        {
          name: "amount",
          type: "number",
          title: "Amount",
          validation: (Rule) =>
            Rule.required().min(0).error("Price must be a positive number"),
        },
        {
          name: "currency",
          type: "string",
          title: "Currency",
          options: {
            list: [
              { title: "USD", value: "usd" },
              { title: "EUR", value: "eur" },
            ],
          },
          validation: (Rule) => Rule.required().error("Currency is required"),
        },
      ],
    }),
    defineField({
      name: "previewImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Preview image is required"),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.required().error("Alternative text is required"),
        },
      ],
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Main image is required"),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.required().error("Alternative text is required"),
        },
      ],
    }),
    defineField({
      name: "description",
      type: "string",
      //validation: (Rule) => Rule.required().error("Description is required"),
    }),
  ],
  preview: {
    select: {
      title: "model",
      categories: "categories.0.title",
      media: "previewImage",
    },
    prepare(selection) {
      const { category } = selection;
      return { ...selection, subtitle: category && `by ${category}` };
    },
  },
});
