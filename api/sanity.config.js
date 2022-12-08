import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'
import schema from './schema/schema.js'
import structure from './deskStructure.js'
import { config } from './config'

export default defineConfig(Object.assign(config, {
  schema: {
    types: schema
  },

  plugins: [
    deskTool({
      structure: structure,
      name: 'DBW',
      title: 'DBW'
    }),
    media(),
    visionTool()
  ]
}))
