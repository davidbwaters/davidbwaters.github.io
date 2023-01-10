// deskStructure.js
import { HomeIcon, TagIcon, DashboardIcon, CaseIcon } from '@sanity/icons'

import { orderableDocumentListDeskItem, orderRankField } from '@sanity/orderable-document-list'

export default (S, context) =>

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
    orderableDocumentListDeskItem({type: 'Skills', icon: TagIcon, title: 'Skills', S, context}),
    orderableDocumentListDeskItem({type: 'Work', icon: CaseIcon, title: 'Work', S, context}),

    ...S.documentTypeListItems().filter( listItem => {
      return ![
        'hero',
        'home',
        'Skills',
        'Work',
        'media.tag'
      ].includes(listItem.getId())
    })
  ])