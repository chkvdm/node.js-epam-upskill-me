function clone <T> (obj: T): T {
  try {
    const cloneObject: T = JSON.parse(JSON.stringify(obj))
    return cloneObject
  } catch {
    throw new Error('Some Error');
  }
}

export { clone }
