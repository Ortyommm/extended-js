'use strict'
import { first, last } from './arrayFunctions'

describe('Array tests', () => {
  const arr = [0, 1]
  test('Check last function', () => {
    expect(last(arr)).toBe(1)
  })
  test('Check first function', () => {
    expect(first(arr)).toBe(0)
  })
})
