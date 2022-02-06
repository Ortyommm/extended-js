function typeString(value: unknown): void {
  checkType(value, 'string')
}

function typeNumber(value: unknown): void {
  checkType(value, 'number')
}

function typeBoolean(value: unknown): void {
  checkType(value, 'boolean')
}
function typeSymbol(value: unknown): void {
  checkType(value, 'symbol')
}
function typeBigInt(value: unknown): void {
  checkType(value, 'bigint')
}
function typeFunction(value: unknown): void {
  checkType(value, 'function')
}

function typeObject(value: unknown): void {
  checkType(value, 'object')
}

function typeArray(value: unknown): void {
  if (!Array.isArray(value)) throw new TypeError(`Value must be a array!`)
}

function checkType(
  value: unknown,
  type:
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function'
) {
  if (typeof value !== type) {
    throw new TypeError(`Value must be a ${type}!`)
  }
}

export {
  typeString,
  typeNumber,
  typeBoolean,
  typeSymbol,
  typeBigInt,
  typeFunction,
  typeObject,
  typeArray,
}
