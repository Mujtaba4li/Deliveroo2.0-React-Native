export default {
  name: "resturnat",
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
      name: "shortDescription",
      title: "Short Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
