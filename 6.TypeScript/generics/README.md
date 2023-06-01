# Generics

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

### Object property getter

Implement and describe types for function which get's object property.

```js
getProperty({ test: "testValue" }, "test"); // testValue
getProperty({ 2: [1, 2, 3] }, 2); // [1,2,3]
getProperty([{ a: 0 }, { a: 1 }, { a: 2 }], 2); // {a: 2}
```

### Queue

Implement and describe types for Queue class.
It should support all TS types.

```typescript
const numberQueue = new Queue<number>();
numberQueue.push(1);
numberQueue.push(2);
numberQueue.push(3);
numberQueue.pop(); // 1
numberQueue.getValue(); // [2,3]

const objectQueue = new Queue<{}>();
objectQueue.push({ first: 1 });
objectQueue.push({ second: 2 });
objectQueue.pop(); // {first: 1}
objectQueue.getValue(); // [{second: 2}]
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: generics
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/generics/
4. Go to folder `generics`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (generics)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
