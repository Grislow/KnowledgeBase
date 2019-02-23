Reference for Javascript features introduced in the ECMAScript 2015(ES6) specification.

#### Table of contents

* [Arrow functions](#arrow-functions)
* [Block Scoped Declarations](#block-scoped-declarations)
* [Classes](#classes)
* [Default Parameters](#default-parameters)
* [Destructuring Assignments](#destructuring-assignments)
* [Enhanced Object Literals](#enhanced-object-literals)
* [Enhanced Regular Expressions](#enhanced-regular-expressions)
* [Generators](#generators)
* [Iteration Protocols](#iteration-protocols)
	* [Iterable](#iterable)
	* [Iterator](#iterator)
	* [For-of Loop](#for-of-loop)
* [Lexical 'this'](#lexical-'this')
* [Map and Set](#map-and-set)
* [Modules](#modules)
* [New Methods](#new-methods)
    * [Array Methods](#array-methods)
    * [Math Methods](#math-methods)
    * [Number Methods](#number-methods)
    * [Object Methods](#object-methods)
    * [String Methods](#string-methods)
* [New Numeric Literals](#new-numeric-literals)
* [New Properties](#new-properties)
* [Promises](#promises)
* [Spread Operator](#spread-operator)
* [Symbol Variable Type](#symbol-variable-type)
* [Tail Call Optimization](#tail-call-optimization)
* [Template Literals](#template-literals)
    * [Interpolation](#interpolation)
    * [Raw String content](#raw-string-content)
* [Typed Arrays](#typed-arrays)



&nbsp;
# Arrow Functions
-arguments objets is not available in function properties

&nbsp;
# Block Scoped Declarations
ES6 introduces the following block scoped declarations:
* `let` - variable
* `const` - constant

These declarations are hoisted and placed in a __Temporal Dead Zone__. This means they cannot be accessed until they have been declared. Any attempt to do so will result in a ReferenceError.

Constants cannot be redeclared or reassigned a value.
``` javascript
console.log(a);                         //> undefined
console.log(b);                         //> ReferenceError

var a = 1;
let b = 2;
const c = 3;
const arr = [1, 2, 3];
const obj = {};

c = 5;                                  //> TypeError
arr.push(4);
    // allowed - not redeclaring or reassigning
obj.prop = 5
    // allowed - not redeclaring or reassigning

{
    let inBlock = 10;
    console.log(inBlock);               //> 10
}
console.log(inBlock);                   //> ReferenceError
```

&nbsp;
# Classes
For more on inheritance in classes:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

__Warning__\
Classes come with all the draw backs of [constructor functions](/javascript/md/es5.md#constructor-function). 

&nbsp;
# Default Parameters
Setting default function parameters. Before ES6 function parameters always defaulted to `undefined`.
``` javascript

```

&nbsp;
# Destructuring Assignments


&nbsp;
# Enhanced Object Literals
__Shorthand notation__:
* propety assignment -  if a key is the same as its values identifier you can simply type in the identifier.
* methods - you can ommit the function keyword

__Computed property names__: 
* 

``` javascript
var userId = 123456;

var User = {
    userId,                             // ES5 -> userId: userId
    getUserId() {                       // ES5 -> getUserId: function(){ ... }
        return userId;
    }
};
```

&nbsp;
# Enhanced Regular Expressions
New properties:
* `sticky` - boolean value indicating whether the _sticky_ flag is set
* `unicode` - boolean value indicating whether the _unicode_ flag is set

New flags:
* `y` - sticky matching. The search is performed only from an index of the String. This index is specified in the `lastIndex` property of the regular expression. This flag overwrites the `g` flag.
* `u` - unicode aware matching. Treats the regular expression as a sequence of code points.

New special character:
* `\u{xxxx}` - matches UTF16 code unit, but only when the __u__ flag is set.
``` javascript

```


&nbsp;
# Generators


&nbsp;
# Iteration Protocols
Protocols that allow specifying how an object handles iteration.

## Iterable

## Iterator

## For-of Loop


&nbsp;
# Lexical 'this'


&nbsp;
# Map and Set


&nbsp;
# Modules


&nbsp;
# New Methods

## Array Methods
`Array.from(obj)` - create an array instance from any object that contains a length property.

`Array.prototype.copyWithin(target[,start][,end])` - copies part of the array into the same array at a given index. This is a [mutator method](/resources/glossary.md#mutator).
* __target__: index at which the copy is placed.
* __start__: index at which the copying starts.
* __end__: index at which the copying ends. Copying does not include element at this index.

`Array.prototype.entries()` - 

`Array.prototype.fill()` - 

`Array.prototype.find()` - 

`Array.prototype.findIndex()` - 

`Array.prototype.keys()` - 

`Array.prototype.values()` - 

`Array.prototype[@@iterator]()` - 

``` javascript
let obj = { length: 3 };
let obj2 = { 
	length: 3, 
	0: 'indexes',
	1: 'just like',
	2: 'an array'
}
let arr = [1, 2, 3, 'one', 'two', 'three'];

Array.from('Hello');                    // ['H', 'e', 'l', 'l', 'o']
Array.from(obj);                        // ['undefined', 'undefined', 'undefined']
Array.from(obj2);                       // ["indexes", "just like", "an array"]

arr.copyWithin(4);                      // [1, 2, 3, 'one', 1, 2]
arr.copyWithin(1, 3, 5);                // [1, "one", 1, "one", 1, 2]
```

## Math Methods
* Binary
    * `Math.clz32(x)` - number of leading in binary representation of x
    * `Math.imul(x, y)` - multiplication of 32-bit integer x and y
* Exponentiation
    * `Math.cbrt(x)` - cube root of x
    * `Math.expm1(x)` - euler's constant to the power of x minus 1
    * `Math.hypot([x, ... , n])` - square root of a sum of squares.
    * `Math.log1p(x)` - natural logarithm of 1 + x for x
    * `Math.log10(x)` - base 10 logarithm of x
    * `Math.log2(x)` - base 2 logarithm of x
* Miscellaneous
    * `Math.sign(x)` - sign of x
* Rounding
    * `Math.fround(x)` - nearest single precision representation of x
    * `Math.trunc(x)` - truncates decimal point numbers of x
* Trigonometry
    * `Math.acosh(x)` - hyperbolic arccosine of x
    * `Math.asinh(x)` - hyperbolic arcsine of x
    * `Math.atanh(x)` - hyperbolic arctangent of x
    * `Math.cosh(x)` - hyperbolic cosine of x
    * `Math.sinh(x)` - hyperbolic sine of x
    * `Math.tanh(x)` - hyperbolic tangent of x


``` javascript
// Binary
Math.clz32(x);
Math.imul(x, y);

// Exponentiation
Math.cbrt(x);
Math.expm1(x);
Math.hypot([x, ... , n]);
Math.log1p(x);
Math.log10(x);
Math.log2(x);

// Miscellaneous
Math.sign(x);

// Rounding
Math.fround(x);
Math.trunc(x);

// Trigonometry
Math.acosh(x);
Math.asinh(x);
Math.atanh(x);
Math.cosh(x);
Math.sinh(x);
Math.tanh(x);
```

## Number Methods
`Number.isInteger(val)` - returns a boolean indicating if the passed value is an integer
`Number.isSafeInteger(val)` - returns a boolean indicating if the passed value is a safe integer

``` javascript
Number.isInteger(1);                    // true
Number.isInteger(1.123);                // false
Number.isInteger(true);                 // false
Number.isInteger('one');                // false

Number.isSafeInteger(1000);             // true
Number.isSafeInteger(2**52);            // true
Number.isSafeInteger(2**53);            // false
```

## Object Methods

* Constructor Methods 
    * `Object.assign(tagetObj[, cpObj1, ... , cpObjN])` - copies enumerable properties from one or more objects into a target object and returns the target object.
    * `Object.getOwnPropertySymbols(obj)` - returns an array containing all own symbol property keys of an object.
    * `Object.is(val1, val2)` - compares whether two values are the same with no type coercion.
    * `Object.setPrototypeOf(obj, proto)` - assigns a new prototype to an object

``` javascript
// Object.
```

## String Methods

`String.fromCodePoint(code1[, ... , codeN])` - generates a string from 0 or more Unicode [code points](/resources/glossary.md#code-point).

```String.raw`template string literal` ``` - returns the raw value of a template string.

`String.prototype.codePointAt(ind)` - returns the Unicode code point at the given index in decimal number format.

`String.prototype.includes(search[, start])` - returns a boolean value indicating if a string exists within another string. Can optionally set an index at which the search starts. 

`String.prototype.startsWith(search[, length])` - returns a boolean value indicating if a string starts with another string. Can optionally set the length of the search, ignoring any characters with an index lower then that length.

`String.prototype.endsWith(search[, length])` - returns a boolean value indicating if a string ends with another string. Can optionally set the length of the search, ignoring any characters with an index higher then that length.

`String.prototype.normalize([form])` - normalizes a string using a Uniform Normalization Form(NFC by default).

`String.prototype.repeat(times)` - returns a new string that is the referenced string copied a set amount of times.

`String.prototype[@@iterator]()` - 

`String.prototype.()` - 

``` javascript
let str = '🍕 + 💻 = 😄';
let cTail1 = "ça";
let cTail2 = 'c\u0327a';

String.fromCodePoint(128421, 32, 0x6F, 114, 0x20, 128187);
									    // "🖥 or 💻"

String.raw`\n \uFFFF \t`;               // "\n \uFFFF \t"

str.codePointAt(0); 				    // 127829 - high surogate
str.codePointAt(1);					    // 57173  - low surogate
str.codePointAt(2);					    // 32     - space

str.includes(' = ');                    // true
str.includes('+', 4);                   // false

str.startsWith('🍕');                   // true
str.startsWith('🍕', 3);                // false
str.startsWith('+', 3);                 // true

str.endsWith('😄');                     // true
str.endsWith('😄', str.length - 3);     // false
str.endsWith('=', str.length - 3);      // true

'is \'' + cTail1 + '\' equal \'' + cTail2 + '\'?'
                                        // "is 'ça' equal 'ça'?"
cTail1 === cTail2                       // false
cTail1 === cTail2.normalize()           // true

'Hi'.repeat(4);                         // "HiHiHiHi"


```


&nbsp;
# New Numeric Literals
Binary literals start with `0b` or `0B` followed by a sequence of 1 or more binary digits.

Octal literals start with  `0o` or `0O` followed by a sequence of 1 or more octal digits.
``` javascript
0b10101                                 // 21
0B1111111111                            // 1023
0o1234567                               // 342391
0O7777777                               // 2097151
```

&nbsp;
# New Properties
__Number__:
* `Number.EPSILON` - difference between the smallest and greatest floating point number between 0 and 1
* `Number.MAX_SAFE_INTEGER` - maximum safe integer. A safe integer is one which produces expected results in operations.
* `Number.MIN_SAFE_INTEGER` - minimum safe integer. A safe integer is one which produces expected results in operations. 



&nbsp;
# Promises
An object that represents a pending asynchronous action.

A promise can be in one of four states:
* __PENDING__ - initial state when promise is created
* __FULFILLED__ - the action was successfull, the promise is finalized
* __REJECTED__ - the action was rejected, the promise is finalized
* __SETTLED/RESOLVED__ - the promise was either fulfilled or rejected


You can chain on `then(success, failure)` functions which are called once the promise is finalized.

``` javascript

```

&nbsp;
# Spread Operator
Works with any object! Uses the enumarable properties

&nbsp;
# Symbol Variable Type


# Tail Call Optimization
https://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript
http://pages.cs.wisc.edu/~vernon/cs367/notes/6.RECURSION.html#iter
https://www.sitepoint.com/recursion-functional-javascript/

&nbsp;
# Template Literals
Template literals are strings wrapped in 

## Interpolation

## Raw String content



# Typed Arrays



