function take <T> (arr: Array<T>, n: number): Array<T> {
  try {
    return arr.slice(0, n)
  } catch {
    throw new Error('Some Error');
  }
}

export { take }
