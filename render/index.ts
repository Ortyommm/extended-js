function render(): void {
  const root = document.querySelector('app-root')
  if (root) {
    root.innerHTML = '<div>Hello World</div>'
  }
}

import logger from '../src/core/logger'
logger.yellow('gi')
logger('gi')
render()
