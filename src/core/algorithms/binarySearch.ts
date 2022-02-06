function binarySearchIndex(
  list: Array<any>,
  searchNumber: number,
  getNumberFromItemFn: (el: any) => number = (el: number) => el
): number | null {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const guess = getNumberFromItemFn(list[middle])
    if (!guess) throw new Error(`getNumberFromItemFn returned ${typeof guess}`)

    if (guess === searchNumber) {
      return middle
    }
    if (guess > searchNumber) {
      high = middle - 1
    }
    if (guess < searchNumber) {
      low = middle + 1
    }
  }
  return null
}

function binarySearchEl(
  list: Array<any>,
  searchNumber: number,
  getNumberFromItemFn: (el: any) => number = (el: number) => el
): any {
  const index = binarySearchIndex(list, searchNumber, getNumberFromItemFn)
  return index ? list[index] : null
}

export { binarySearchIndex, binarySearchEl }
