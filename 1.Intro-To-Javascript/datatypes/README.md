# Data types

## Tasks

### Back to front string

Create the function "backToFront" which gets a string and symbols count. And it should return a string.
For example:

```js
backToFront("hello", 1); // ohelloo
backToFront("abc", 3); // abcabcabc
backToFront("world", 2); // ldworldld
backToFront("world", 20); // world
```

### Nearest number

Create the function "nearest" to find a value which is nearest to z from two given values (x and Y);
For example:

```js
nearest(100, 22, 122); // 122;
nearest(50, 22, 122); // 22;
```

### Remove array duplicates

Create the function "removeDuplicate" to remove all duplicated values from array; do not use a set.
For example:

```js
removeDuplicate([1, 2, 3, 2, 3, 1, 1]); // [1,2,3]
removeDuplicate(["a", 1, "2", "b", 1, "2", "b"]); // ['a', 1, '2', 'b']
```

Write your code in `src/index.js.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: data-types
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/data-types/
4. Go to folder `data-types`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` in the command line
7. You will see the number of passing and failing tests
