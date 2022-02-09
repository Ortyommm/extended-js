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

interface IDebouncedFunction {
  (...args: any[]): any
  timeout?: number
}

function createDebounce(time: number): (...args: any[]) => void {
  const f: IDebouncedFunction = function (fn: (...args: any[]) => void) {
    clearTimeout(f.timeout)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    f.timeout = setTimeout(fn, time)
  }

  return f
}

export { extendedFunction, createDebounce }
