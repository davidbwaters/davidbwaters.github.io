import { EyeOpenIcon } from '@sanity/icons'

export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    {
      name: 'bglight',
      title: 'BG Light',
      type: 'array',
      of: [{type: 'image'}],
      validation: Rule => Rule.required().length(2)
    },
    {
      name: 'bgdark',
      title: 'BG Dark',
      type: 'array',
      of: [{type: 'image'}],
      validation: Rule => Rule.required().length(2)
    },
    {
      name: 'portrait',
      title: 'Portrait',
      id: 'portrait',
      type: 'object',
      fields: [
        {
          type: 'image',
          name: 'light',
          title: 'Light',
        },
        {
          type: 'image',
          name: 'dark',
          title: 'Dark',
        }
      ]
    },
    {
      name: 'Name',
      type: 'string'
    },
    {
      name: 'Location',
      type: 'string'
    },
    {
      name: 'CTA',
      type: 'string'
    },
    {
      name: 'Heading',
      type: 'string'
    },
    {
      name: 'Name_Stylized',
      title: 'Name Stylized',
      type: 'string'
    },
    {
      name: 'Availability',
      type: 'string'
    },
    {
      name: 'Contact',
      type: 'string'
    },
  ]
}
