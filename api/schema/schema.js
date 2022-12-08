
import { hero } from './hero.js'
import { skills } from './skills.js'
import { work } from './work.js'

import {
  home,
  contactLink
} from './home.js'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  hero,
  contactLink,
  home,
  skills,
  work
]
