function devhook(): void {
  console.trace('devhook')
  // eslint-disable-next-line no-debugger
  debugger
}

function extendedFunction(fn: (...args: any[]) => any): IMockFunction {
  const f: IMockFunction = function (...args: any[]) {
    f.calls++
    f.argsHistory.push(args)
    f.lastArgs = args
    f.subscribers.forEach((fn) => fn.call(f))
    return fn.call(f, ...args)
  }

  f.calls = 0
  f.argsHistory = []
  f.subscribers = []
  f.lastArgs = []
  f.subscribe = (fn: () => any) => {
    f.subscribers.push(fn)
  }

  return f
}

interface IMockFunction {
  (...args: any[]): any
  calls: number
  argsHistory: any[]
  lastArgs: any[]
  subscribers: (() => any | void)[]
  subscribe: (fn: () => any) => void
}

export { devhook, extendedFunction }
