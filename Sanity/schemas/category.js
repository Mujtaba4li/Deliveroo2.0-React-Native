export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
    },
  ],
}
