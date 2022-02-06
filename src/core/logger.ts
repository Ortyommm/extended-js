function logger(...args: any[]): void {
  console.log(...args);
}

// const loggerProxy = new Proxy(logger, {
//   get(
//     target: (...args: any[]) => void,
//     p: string | symbol,
//     receiver: any
//   ): any {
//     return logger[p] || console[p];
//   },
// });

export function createStyledPrinter(styles: string) {
  return function (...args: any[]): void {
    console.log(`%c${args.join(" ")}`, styles);
  };
}

logger.yellow = createStyledPrinter(
  "color: yellow; background: black; font-weight: bold;"
);
logger.orange = createStyledPrinter("color: orange");
logger.red = createStyledPrinter("color: red;");
logger.green = createStyledPrinter("color: green;");

// for (const key in console) {
//   logger[key] = console[key];
// }

export default logger;
