# Functions

## Tasks

### Nth non-repeated value

Create a JavaScript function to find the Nth non-repeated value in the given array (numbers only).
There is at least 1 non-repeated value in the array.

For example:

```js
nThNoRepeatedValue([321, 43, 3213, 1689], 2); // result: 43 (among 4 unique elements the 2nd is 43)
nThNoRepeatedValue([1, 1, 3, 4, 3, 10], 1); // result: 4 (among 2 unique elements the 1st is 4)
nThNoRepeatedValue([1, 2, 1, 1], 1); // result: 2 (among 1 unique elements the 1st is 2)
```

Write your code in `src/index.js.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

### Prime values

Create a JavaScript function which converts the given array of numbers to an array of booleans. Each element is `true` if the number is a prime number, and `false` otherwise.

For example:

```js
primeValues([4, 2, 7, 10, 13]); // result: [false, true, true, false, true]
primeValues([17, 3, 21]); // result: [true, true, false]
```

Write your code in `src/index.js.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: functions
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/functions/
4. Go to folder `functions`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` in the command line
7. You will see the number of passing and failing tests
