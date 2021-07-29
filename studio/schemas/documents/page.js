export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
    ]
}