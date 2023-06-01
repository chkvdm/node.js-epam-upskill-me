/*
* Task 1: Once decorator
*/

function once<T, U extends keyof T>(target: T, propertyKey: U, descriptor: TypedPropertyDescriptor<(...args: Array<number>) => Array<number>>) {
  const originalMethod = descriptor.value!;
  let hasExecuted = false;
  let result: ReturnType<typeof originalMethod> | undefined;
  descriptor.value = function(this: T, ...args: Parameters<typeof originalMethod>): ReturnType<typeof originalMethod> {
    if (!hasExecuted) {
      hasExecuted = true;
      result = originalMethod.apply(this, args);
    }
    return result!;
  };

  return descriptor;
}

/*
* Task 2: Identifier decorator
*/

function identifier(name: string): ClassDecorator {
  return function <TFunction extends Function>(
    target: TFunction
  ): TFunction {
    const identify = target.prototype.identify;
    Object.defineProperty(target.prototype, 'identify', {
      value: function() {
        return `${target.name}-${name}`
      }
    });
    return identify;
  };
}  


export {once, identifier}
