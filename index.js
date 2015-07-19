/**
 * Dependencies
 */

import { element, tree, render } from 'deku'
import Emoji from './emoji'
import random from './random'

/**
 * App
 */

const App = tree(element(Emoji)).use(random())

render(App, document.querySelector('[role="app"]'))
