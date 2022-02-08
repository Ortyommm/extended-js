import { devhook, mockFunction } from '../src'

function render(): void {
  // devhook()
  const root = document.querySelector('app-root')
  if (root) {
    root.innerHTML = '<div>Hello World</div>'
  }
}

const testFn = mockFunction(() => {
  console.log('test')
})

testFn.subscribe(console.log)
testFn(3)
testFn(30)
console.log(testFn.calls, testFn.args)
import logger from '../src/core/logger'
logger.yellow('gi')
logger('gi')

render()
