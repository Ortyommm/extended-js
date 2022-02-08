function devhook(): void {
  console.trace('devhook')
  // eslint-disable-next-line no-debugger
  debugger
}

function mockFunction(fn: (...args: any[]) => any): IMockFunction {
  const f: IMockFunction = function (...args: any[]) {
    f.calls++
    f.args = args
    f.subscribers.forEach((fn) => fn())
    return fn(...args)
  }

  f.calls = 0
  f.args = []
  f.subscribers = []
  f.subscribe = (fn: () => any) => {
    f.subscribers.push(fn)
  }

  return f
}

interface IMockFunction {
  (...args: any[]): any
  calls: number
  args: any[]
  subscribers: (() => any | void)[]
  subscribe: (fn: () => any) => void
}

export { devhook, mockFunction }
