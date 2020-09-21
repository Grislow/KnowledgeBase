Reference for Javascript as of the ECMAScript version 8 specification.

Source:
* [MDN](https://developer.mozilla.org/en-US/)
* [flaviocopes](https://flaviocopes.com/es2017/)

#### Table of contents

* [Async-Await](#async-await)
* [Enhanced Concurrency](#enhanced-concurrency)
    * [Shared Memory](#shared-memory)
    * [Atomics](#atomics)
* [Object Methods](#object-methods)
* [String Padding](#string-padding)
* [Trailing Commas](#trailing-commas)


&nbsp;
## Async-Await
Handling promises using generators.

&nbsp;
## Enhanced Concurrency

### Shared Memory

### Atomics



&nbsp;
## Object Methods

`Object.entries(obj)` - returns an array of all the objects enumerable properties. Includes keys and values.
`Object.getOwnPropertyDescriptors(obj)` - returns all own properties property descriptors
`Object.values()` - returns an array of all the objects enumerable properties values. 

``` javascript
/*
    Object.entries()
*/


/*
    Object.getOwnPropertyDescriptors()
*/


/*
    Object.values()
*/
```

&nbsp;
## String Padding
`String.prototype.padEnd(length[, str])` - appends a string to the end of another string until it is of a set length.

`String.prototype.padStart(length[, str])` - appends a string to the beginning of another string until it is of a set length.

``` javascript
let str = 'Hello';

str.padEnd(10);                      // "Hello     "
str.padEnd(10, '.');                 // "Hello....."
str.padEnd(str.length + 6, '~@');    // "Hello~@~@~@"

str.padStart(10);                      // "     Hello"
str.padStart(10, '.');                 // ".....Hello"
str.padStart(str.length + 6, '~@');    // "~@~@~@Hello"

```

&nbsp;
## Trailing Commas

``` javascript

```