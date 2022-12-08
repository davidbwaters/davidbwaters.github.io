// hero.js
import { TagIcon } from '@sanity/icons'

export const skills = {
  name: 'Skills',
  title: 'Skills',
  type: 'document',
  icon: TagIcon,

  fields: [
    {
      name: 'Name',
      type: 'string',
    },
    {
      name: 'Description',
      type: 'string',
    },
    {
      name: 'Image',
      type: 'image',
    }

  ]
}
