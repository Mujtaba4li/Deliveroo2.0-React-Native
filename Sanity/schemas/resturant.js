export default {
  name: "resturant",
  title: "Resturants",
  type: "document",
  fields: [
    {
      name: "resturantName",
      title: "Resturant Name",
      type: "string",
      validation: (Rule) => Rule.required().max(20),
    },

    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of resturant",
      type: "number",
    },
    {
      name: "lon",
      title: "Longitude of Resturant",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Please enter 1-5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
