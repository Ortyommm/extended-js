function devhook(): void {
  console.trace('devhook')
  // eslint-disable-next-line no-debugger
  debugger
}

export { devhook }
