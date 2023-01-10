// hero.jsSkills
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const work = {
  name: 'Work',
  title: 'Work',
  type: 'document',
  orderings: [orderRankOrdering],

  fields: [
    {
      name: 'Title',
      type: 'string',
    },
    orderRankField({type: 'Work', hidden: false}),
    {
      name: 'Tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'Short_Description',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'Description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'Case_Study',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      }
    },
    {
      name: 'Hide_Modal',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      }
    },
    {
      name: 'Wide',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'checkbox',
      }
    },
    {
      name: 'Preview_Images',
      title: 'Preview Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'Images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'Links',
      type: 'object',
      fields: [
        {
          name: 'Site',
          type: 'string',
        },
        {
          name: 'Microsoft',
          type: 'string',
        },
        {
          name: 'GitHub',
          title: 'GitHub',
          type: 'string',
        },
        {
          name: 'NPM',
          type: 'string',
        },
      ]
    }

  ]
}
