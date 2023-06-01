# Upgrades and Features

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

### Countdown iterator

Create a countdown iterator that counts from a to b.

For example:

```js
console.log([...countdown(10, 1)]); // [10,9,8,7,6,5,4,3,2,1]

const counter = countdown(5, 2);
console.log(counter.next()); // {value: 5, done: false};
```

### Occurrences in array

Write a function to count the occurrences of a value in an array.

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
countOccurrences([1, 1, 2, 1, 2, 3], 2); // 2
countOccurrences([1, 1, 2, 1, 2, 3], 3); // 1
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: upgrades-features
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/upgrades-features/
4. Go to folder `upgrades-features`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (upgrades-features)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
