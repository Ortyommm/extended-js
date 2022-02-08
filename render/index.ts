import { extendedFunction } from '../src'
import logger from '../src/core/logger'

function render(): void {
  // devhook()
  const root = document.querySelector('app-root')
  if (root) {
    root.innerHTML = '<div>Hello World</div>'
  }
}

const testFn = extendedFunction(function () {
  console.log(this.calls)
})

testFn.subscribe(function (x = 20) {
  console.log(this.calls, x)
})
testFn(3)
testFn(30)
console.log(testFn.calls, testFn.lastArgs, testFn.argsHistory)
logger.yellow('gi')
logger('gi')

render()
