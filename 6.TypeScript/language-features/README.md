# Language features

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

#### Times

Implement the _times_ function which copies an array a specified number of times. If the second argument is not specified it must copy an array twice.

For example:

```js
times([1, 2, 3], 3); // [1,2,3,1,2,3,1,2,3]
times([1, 2, 3]); // [1,2,3,1,2,3]
```

#### Logger

Implement the _logger_ function which will prepare data for logging.
It should have default service configuration `{serviceName: 'global', serviceId: 1}`

For example:

```js
// {"3-0":"[auth_service] Wrong email","3-1":"[auth_service] Wrong password","3-2":"[auth_service] Success login"}
logger(["Wrong email", "Wrong password", "Success login"], {
  serviceName: "auth_service",
  serviceId: 3,
});

// {"1-0":"[global] Fatal error","1-1":"[global] Data corrupted"}
logger(["Fatal error", "Data corrupted"]);
```

#### Array NTH Element

Implement the _everyNth_ function to get every nth element in the given array. By default, nth = 1.

For example:

```js
console.log(everyNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(everyNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: language-features
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/language-features/
4. Go to folder `language-features`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (language-features)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
