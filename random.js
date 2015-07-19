/**
 * Dependencies
 */

import emoji from 'emojilib'
import random from 'random-obj-key'

/**
 * Plugin
 */

function plugin() {
  return function(App) {
    const name = random(emoji)
    const item = emoji[name].char
    const char = item ? item : '(not available)'
    App.set('emoji', { name, char })
  }
}

/**
 * Exports
 */

export default plugin
