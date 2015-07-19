/**
 * Dependencies
 */

import { element } from 'deku'

/**
 * Component
 */

const propTypes = {
  emoji: { source: 'emoji' }
}

function render({ props }) {
  return element('div', { class: 'emoji' }, [
    element('h1', { class: 'emoji__cell' }, `:${props.emoji.name}:`),
    element('p', { class: 'emoji__cell' }, props.emoji.char)
  ])
}

/**
 * Exports
 */

export default { propTypes, render }
