/**
 https://stackoverflow.com/questions/63121593/how-can-i-publish-an-npm-module-with-both-commonjs-and-es6-versions
 */

import {
  binarySearchEl,
  binarySearchIndex,
} from './core/algorithms/binarySearch'
import extendLocalStorage from './core/extensions/extendLocalStorage'
import { first, last } from './core/functions/arrayFunctions'
import logger from './core/logger'
export * as eMath from './core/eMath'
export { last, first }
export { extendLocalStorage }
export { logger }
export { binarySearchEl, binarySearchIndex }
