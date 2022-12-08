// deskStructure.js
import {  DashboardIcon } from '@sanity/icons'
import { HomeIcon } from '@sanity/icons'

export default (S) =>

S.list()
.title('Base')
  .items([

    S.listItem()
      .id('home')
      .title('Home')
      .icon(HomeIcon)
      .child(
        S.editor()
          .schemaType('home')
          .title('Home')
          .documentId('home')
          .id('home')
      ),
    S.listItem()
      .id('hero')
      .title('Hero')
      .icon( DashboardIcon)
      .child(
        S.editor()
          .schemaType('hero')
          .title('Hero')
          .documentId('hero')
          .id('hero')
      ),
    ...S.documentTypeListItems().filter( listItem => {
      return ![
        'hero',
        'home',
        'media.tag'
      ].includes(listItem.getId())
    })
  ])