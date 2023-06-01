/*
* Task 1: Countdown iterator
*/
function* countdown(a: number, b: number): Generator<number> {
  try{ 
    for(let i = a; i >= b; i--) {
      yield i;
    }
  } catch {
    throw new Error('Some Error');
  }
}

/*
* Task 2: Occurrences in array
*/
function countOccurrences <T>(arr: Array<T>, val: T): number {
  try{ 
    let num: number = 0;
    arr.forEach(i => {
      if (i === val) {
        num++
      }
    })
    return num
  } catch {
    throw new Error('Some Error');
  }
}


export {countdown, countOccurrences}
