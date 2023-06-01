function invert(obj: {[key: string | number]: string | number}): {[key: string | number]: string | number} {
    try {
      const newObj: {[key: string | number]: string | number} = {};
      for (const [key, val] of Object.entries(obj)) {
        newObj[val] = Number.isNaN(Number(key)) ? key : Number(key);
      } 
      return newObj;
    } catch {
      throw new Error('Some Error');
    }
  }

export { invert }
