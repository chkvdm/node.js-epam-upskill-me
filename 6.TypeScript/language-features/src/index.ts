/*
* Task 1: Times
*/
function times(array: number[], times: number = 2): number[] {
  try {
    let extendedArray: number[] = array;
    for (let i = 1; i < times; i++) {
      extendedArray = [...extendedArray, ...array]
    };
    return extendedArray;
  } catch {
    throw new Error('Some Error');
  }
}

/*
* Task 2: Logger
*/
interface ServiceConfig {
  serviceName: string,
  serviceId: number
};

interface Output { [key: string]: string };

function logger(
  data: string[], 
  serviceInfo: ServiceConfig = {serviceName: 'global', serviceId: 1}
): Output {
  try {
    const dataForRegister: Output = {};
    data.forEach(
      (el, index) => (
        dataForRegister[
          `${serviceInfo.serviceId}-${index}`
        ] = `[${serviceInfo.serviceName}] ${el}`
      )
    );
    return dataForRegister;
  } catch {
    throw new Error('Some Error');
  }
}

/*
* Task 3: Array NTH Element
*/
function everyNth(arr: number[], nth: number = 1): number[] {
  try {
    const arrayFromNthElement: number[] = [];
    let i = nth - 1;
    while( i < arr.length ) {
      arrayFromNthElement.push(arr[i])
      i += nth
    }
    return arrayFromNthElement
  } catch {
    throw new Error('Some Error');
  }
}

export {times, logger, everyNth}
