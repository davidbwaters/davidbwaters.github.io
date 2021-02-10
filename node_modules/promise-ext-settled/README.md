[![Build Status](https://travis-ci.org/smelukov/PromiseSettled.svg?branch=master)](https://travis-ci.org/smelukov/PromiseSettled)

# PromiseSettled
Simple settled promise.

### How to use it?
```javascript
require('promise-ext-settled')();

Promise.allSettled(arrayOfPromises, onProgress)
    .then(function(promisesStatus) {
        console.log(promisesStatus)
    });
```

### What is that?
This is a realization of a small and simple allSettled promise, that supports CommonJS, AMD ang non-module definition.

allSettled promise - is the promise that will be resolved only when all of the passed promises will be settled (fulfilled or rejected).

allSettled promise will be resolved with an array of objects that contains an info (status and value) about all of the passed promise.

As well, onProgress function will be called (if passed) after any of the passed promises will be settled (resolved or rejected).

onProgress function may accept one argument - object that contains an info about settled promise: status (true or false) and value (fulfilled or rejected value).

---
First of all, you'll need to extend promise constructor.

In other words - you need to inject allSettled promise to promise constructor.

Just include this package in your project and call it for inject...

Injection for CommonJS:
```javascript
require('promise-ext-settled')();
```

Injection for AMD:
```javascript
require(['promiseSettled'], function(PromiseSettled){
    PromiseSettled();
});
```

Injection for non-module environment:
```html
<script src="promiseSettled.min.js"></script>
<script>
    PromiseSettled(); //in non-module environment, global function PromiseSettled will be created
</script>
```

The function that injects allSettled promise have 2 parameters:
- `PromiseConstructor` - just function-constructor, that will be extended. If nothing is passed, then default promise constructor will be used.
- `extName` - name of the settled static function. If nothing is passed, then `allSettled` will be used. Can be passed instead of the first parameter.

Some examples of injection:
```javascript
PromiseSettled(); //or
PromiseSettled(YourCustomPromiseConstructor, 'methodName'); //or
PromiseSettled('methodName');
```

After injection, you'll may use settled promise:

```javascript
Promise.allSettled(arrayOfPromises, onProgress)
    .then(function(promisesStatus) {
        console.log(promisesStatus)
    });
```
