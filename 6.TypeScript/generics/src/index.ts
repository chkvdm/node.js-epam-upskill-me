/*
* Task 1: Object property getter
*/

function getProperty<T extends object, U extends keyof T>(a: T, b: U) {
  try {
    return a[b]
  } catch {
    throw new Error('Some Error');
  }
}

/*
* Task 2: Queue
*/
class Queue <T>{
  private items: Array<T> = [];

  push(value: T): void {
    this.items.push(value)
  }

  pop(): T | undefined {
    return this.items.shift()
  }

  getValue(): Array<T> {
    return this.items
  }
}


export {Queue, getProperty};
