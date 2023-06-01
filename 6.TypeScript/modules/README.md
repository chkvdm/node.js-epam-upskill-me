# Modules

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

Create the functionality to work with basic typescript data structures.

- Array
  - take
  - flatten
- Object
  - clone
  - invert

Each function should be in a separate file.

#### Take

Implement the _take_ function which returns the first _n_ elements of the given array.

For example:

```typescript
take([1, 2, 3], 2); // [1,2]
```

#### Flatten

Implement the _flatten_ function which returns the flattened array.

For example:

```typescript
flatten([[1], 2, [3, [4]]]); // [1,2,3,4]
```

#### Clone

Implement the _clone_ function which deeply clones an object.

For example:

```typescript
const obj = { a: { b: { c: 3 } } };
const copy = clone(obj);
console.log(obj === copy); // false
```

#### Invert

Implement the _invert_ function which inverts the given object.

For example:

```typescript
invert({ 1: "a", 2: "b" }); // {a: 1, b: 2}
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: modules
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/modules/
4. Go to folder `modules`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (modules)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
