import { binarySearchEl, binarySearchIndex } from './binarySearch'

describe('binarySearch tests', () => {
  const testArr1 = [
    { name: 'V', i: 1 },
    { name: 'A', i: 3 },
  ]

  const testArr2 = [0, 5, 6, 7, 30, 300, 440]

  test('Test binarySearchIndex with objects array', () => {
    expect(binarySearchIndex(testArr1, 3, (el) => el.i)).toBe(1)
    expect(binarySearchIndex(testArr1, 4, (el) => el.i)).toBe(null)
    expect(() =>
      binarySearchIndex(testArr1, 30, (el) => el.none)
    ).toThrowError()
  })

  test('Test binarySearchIndex with numbers array', () => {
    expect(binarySearchIndex(testArr2, 30)).toBe(4)
    expect(binarySearchIndex(testArr2, 31)).toBe(null)
    expect(() => binarySearchIndex(testArr2, 30, (el) => el.i)).toThrowError()
    expect(() => binarySearchIndex(testArr2, 30)).not.toThrowError()
  })

  test('Test binarySearchEl with objects array', () => {
    expect(binarySearchEl(testArr1, 3, (el) => el.i).i).toBe(3)
    expect(binarySearchEl(testArr1, 4, (el) => el.i)).toBe(null)
    expect(() => binarySearchEl(testArr1, 30, (el) => el.none)).toThrowError()
  })

  test('Test binarySearchEl with numbers array', () => {
    expect(binarySearchEl(testArr2, 30)).toBe(30)
    expect(binarySearchEl(testArr2, 31)).toBe(null)
    expect(() => binarySearchEl(testArr2, 30, (el) => el.i)).toThrowError()
    expect(() => binarySearchEl(testArr2, 30)).not.toThrowError()
  })
})
