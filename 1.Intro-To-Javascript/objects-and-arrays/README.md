# Objects and Arrays

## Tasks

### Number of duplicates

Transform an array of elements (a number, a string) into an array where each item is represented by a number of element appearances before the element index in the original array (including the current index).

For example:

```js
numberOfDuplicates([1, 2, 1, 1, 3]); // [1, 1, 2, 3, 1]
numberOfDuplicates(["a", "a", "aa", "a", "aa"]); // [1, 2, 1, 3, 2]
```

Write your code in `src/index.js.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

### Object strength

Let's introduce Object strength specificity.
Specificity is a weight that is applied to a given object, determined by the number of each property type.
Each type costs:

```js
0 - undefined
1 - boolean
2 - number
3 - string
5 - object
7 - function
9 - bigint
10 - symbol
```

Implement a function for counting object strength.

For example:

```js
countObjectStrength(Array); // 31 (2 + 3 + 5 + 7 + 7 + 7)
countObjectStrength(Array.prototype); // 226 (2 + 7 * 32)
countObjectStrength([]); // 2
countObjectStrength({ some: "value" }); // 3
```

Write your code in `src/index.js.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: objects-and-arrays
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/objects-and-arrays/
4. Go to folder `objects-and-arrays`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` in the command line
7. You will see the number of passing and failing tests
