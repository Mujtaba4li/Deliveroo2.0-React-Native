export default {
    name: "featured",
    title: "Featured Menu Categories",
    type: "document",
    fields: [
      {
        name: "featureName",
        title: "Feature category name",
        type: "string",
        validation: (Rule) => Rule.required().max(20),
      },
  
  
      {
        name: "shortDescription",
        title: "Short Description",
        type: "string",
        validation: (Rule) => Rule.required().max(200),
      },
    
      {
        name: "resturants",
        title: "Resturants",
        type: "array",
        validation: (Rule) => Rule.required(),
        of: [{ type: "reference", to: [{ type: "resturant" }] }],
      },
    ],
  };
  