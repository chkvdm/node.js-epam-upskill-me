# Advanced Node.js 1. Implementing Promise.all

The goal is to implement function `all` that will work in the same way original function `Promise.all` works. \
**The usage of original `Promise.all` for implementation is forbidden.**

Usage Example:  

```javascript
    all([promise1, promise2, promise3]).then((results) => {
        console.log(`All promises resolved. Results are - ${JSON.stringify(results)}`);
    }); 
```
