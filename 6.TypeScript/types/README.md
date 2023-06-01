# Types

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

#### Days to New Year

Write a function to calculate the days left until New Year (01.01.2023).

It must accept the date in 2 formats: Date() object and a string in 'DD.MM.YYYY';

Example:

```js
getDaysToNewYear(new Date(2022, 12, 31)); // 1
getDaysToNewYear(new Date(2022, 5, 15)); // 200
getDaysToNewYear("22.04.2021"); // 619
```

#### Last to first

Write a function to change the position of the first and the last characters in the given string.

Example:

```js
lastToFirst("loop"); // pool;
lastToFirst("ab"); // ba;
lastToFirst("a"); // a;
```

#### Group organization users

You have an organization with 2 types of users EMPLOYEE and CONTRACTOR.
Create function to group an array of users to `{emproyees: [], contractors: []}`
Example of data and expected result look at comments in src/index.ts.

_Please remember, that the main focus is on types and typescript features, so you should describe all possible types using mock data._

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: types
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/types/
4. Go to folder `types`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (types)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 18 or lower. If you using are any of the features which are not supported by v18, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
