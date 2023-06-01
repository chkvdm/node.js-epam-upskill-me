# Decorators

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

### Once decorator

Implement a method decorator that allows to execute a decorated method only once.

For example:

```typescript
class Test {
  data: any;
  @once
  setData(newData: any) {
    this.newData = newData;
  }
}
const test = new Test();
test.setData([1, 2, 3]);
console.log(test.data); // [1,2,3]
test.setData("new string");
console.log(test.data); // [1,2,3]
```

### Identifier decorator

Implement the class decorator to add the “identify“ class method which returns a class name with the information passed in the decorator.

For example:

```typescript
@identifier("example")
class Test {}

const test = new Test();
console.log(test["identify"]()); // Test-example
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: decorators
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/decorators/
4. Go to folder `decorators`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (decorators)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
