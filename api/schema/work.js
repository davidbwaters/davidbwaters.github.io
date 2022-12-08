// hero.jsSkills
import { CaseIcon } from '@sanity/icons'

export const work = {
  name: 'Work',
  title: 'Work',
  type: 'document',
  icon: CaseIcon,

  fields: [
    {
      name: 'Title',
      type: 'string',
    },
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

  ]
}
