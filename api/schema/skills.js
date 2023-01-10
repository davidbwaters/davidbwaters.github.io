// hero.js
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const skills = {
  name: 'Skills',
  title: 'Skills',
  type: 'document',
  orderings: [orderRankOrdering],
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
    },
    orderRankField({type:'Skills'})

  ]
}
