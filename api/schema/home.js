// hero.js
import { HomeIcon } from '@sanity/icons'

export const contactLink = {
  name: 'contact_link',
  title: 'Contact Link',
  type: 'object',
  fields: [
    {
      name: 'Icon',
      type: 'string',
    },
    {
      name: 'Link',
      type: 'string',
    }
  ]
}

export const home = {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'contact_links',
      title: 'Contact Links',
      type: 'array',
      of: [{type: 'contact_link'}]
    },
    {
      type: 'image',
      name: 'Logo',
    },
    {
      type: 'image',
      name: 'Favicon',
    },
    {
      name: 'Page_Title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'Skills_Heading',
      title: 'Skills Heading',
      type: 'string'
    },

    {
      name: 'Work_Heading',
      title: 'Work Heading',
      type: 'string'
    },
    {
      name: 'Footer_Upper_Text',
      title: 'Footer Upper Text',
      type: 'string'
    },
    {
      name: 'Footer_Lower_Text',
      title: 'Footer Lower Text',
      type: 'text'
    },
  ]
}
