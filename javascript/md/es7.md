Reference for features introduced in Javascript as of the ES2016 or ES7 specification.

#### Table of contents

* [Array Methods](#array-methods)
* [Exponentiation Operator](#exponentiation-operator)

&nbsp;
## Array Methods

`Array.prototype.includes(value)` - returns a boolean value based on whether a value exists in an array. Useful as a condition in control flow statements.

``` javascript
var arr = ['one', 'two'];

arr.includes('one');                    // true
arr.includes(1);                        // false
arr.indexOf(1);                         // -1

if(arr.includes(1)) {
    console.log('wont print');    
}

if(arr.indexOf(1)) {
    console.log('will print');    
}
```

&nbsp;
## Exponentiation Operator
Replaces the `Math.pow(base, exponent)` function.
``` javascript
10 ** 2                                 // 100 - exponentation operator
```