export const banner = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Image Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Image title is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Slug title is required"),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required"),
    },
    {
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Mark this banner as active to display it",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().error("Please specify if the banner is active"),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description: "Specify where this banner will appear on the site",
      validation: (Rule) =>
        Rule.required().error("Please specify the position of the banner"),
      options: {
        list: [
          { title: "Main", value: "main" },
          { title: "Secondary", value: "secondary" },
          { title: "Footer", value: "footer" },
        ],
      },
    },
  ],
};
