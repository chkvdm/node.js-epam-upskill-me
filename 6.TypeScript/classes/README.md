# Classes

## ⚠ Notice

**_Main focus of this course is TypeScript so you must declare all types for complex structures, function arguments and return values e.t.c_**

**_Type `any` is strictly prohibited!_**

Write your code in `src/index.ts.
_All test cases are designed as “error-free”, so don't worry about handling any errors._

## Tasks

### Vehicle

Implement the functionality to create vehicles. All vehicles must implement the BaseVehicle interface.

- Each type of a vehicle has fuel consumption and fuel level
- When an engine starts, fuel consumption starts, and fuel consumption continues every second
- Refueling restores the maximum fuel level
- Each vehicle must have a model's name and a vendor's name.

You must implement Cars.
It should remain possible to implement new types of vehicles.

| Type | Tank capacity | Startup Consumption | Work Consumption |
| ---- | ------------- | ------------------- | ---------------- |
| Car  | 40            | 3                   | 1                |

### Counter

Implement a singleton class `Counter` with the functionality to store data.
It should implement 2 service methods `getInstance, destroy`
and 3 methods with business logic - `increase, decrease, getState`.

For example:

```typescript
const instance1 = Counter.getInstance();
instance1.increase();
console.log(instance1.getState()); // 1;
const instance2 = Counter.getInstance();
console.log(instance2.getState()); // 1;
instance2.increase();
console.log(instance1.getState()); // 2;
console.log(instance2.getState()); // 2;
Counter.destroy();
Counter.getInstance().getState(); // 0
```

## Prepare and test

1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository: classes
3. Clone your newly created repo: https://gitlab.com/<%your_gitlab_username%>/classes/
4. Go to folder `classes`
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)
6. Run `npm test` or `npm run test:dev` in the command line
7. You will see the number of passing and failing tests

## Submit to [AutoCode](https://autocode.lab.epam.com/)

1. Open [AutoCode](https://autocode.lab.epam.com/) and login
2. Navigate to the your course page
3. Select your task (classes)
4. Press the submit button and enjoy, results will be available in few minutes

### Notes

1. We recommend you to use nodejs of version 16 or lower. If you using are any of the features which are not supported by v16, the score won't be submitted.
2. Each of your test case is limited to 30 sec.
