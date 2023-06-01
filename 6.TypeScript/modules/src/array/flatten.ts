function flatten <T> (arr: (T | Array<T>)[]): Array<T> {
  try {
    const flat: Array<T> = [];
    arr.forEach((chank) => {
      if (Array.isArray(chank)) {
        flat.push(...flatten(chank));
      } else {
        flat.push(chank);
      }
    })
    return flat
  } catch {
    throw new Error('Not implemented');
  }
}

export { flatten }
