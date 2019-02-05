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
    * [String Methods](#string-methods)
* [New Numeric Literals](#new-numeric-literals)
* [Promises](#promises)
* [Spread Operator](#spread-operator)
* [Symbol Variable Type](#symbol-variable-type)
* [Template Literals](#template-literals)
    * [Interpolation](#interpolation)
    * [Raw String content](#raw-string-content)



&nbsp;
## Arrow Functions


&nbsp;
## Block Scoped Declarations


&nbsp;
## Classes


&nbsp;
## Default Parameters


&nbsp;
## Destructuring Assignments


&nbsp;
## Enhanced Object Literals


&nbsp;
## Enhanced Regular Expressions
New flags:
* `y` - sticky matching. The search is performed only from an index of the String. This index is specified in the `lastIndex` property of the regular expression. This flag overwrites the `g` flag.
* `u` - unicode aware matching. Treats the regular expression as a sequence of code points.

New special character:
* `\u{xxxx}` - matches UTF16 code unit, but only when the __u__ flag is set.
``` javascript

```


&nbsp;
## Generators


&nbsp;
## Iteration Protocols
Protocols that allow specifying how an object handles iteration.

### Iterable

### Iterator

### For-of Loop


&nbsp;
## Lexical 'this'


&nbsp;
## Map and Set


&nbsp;
## Modules


&nbsp;
## New Methods

### Array Methods
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

Array.from('Hello');                 // ['H', 'e', 'l', 'l', 'o']
Array.from(obj);                     // ['undefined', 'undefined', 'undefined']
Array.from(obj2);                    // ["indexes", "just like", "an array"]

arr.copyWithin(4);                   // [1, 2, 3, 'one', 1, 2]
arr.copyWithin(1, 3, 5);             // [1, "one", 1, "one", 1, 2]
```

### String Methods

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

String.raw`\n \uFFFF \t`;            // "\n \uFFFF \t"

str.codePointAt(0); 				 // 127829 - high surogate
str.codePointAt(1);					 // 57173  - low surogate
str.codePointAt(2);					 // 32     - space

str.includes(' = ');                 // true
str.includes('+', 4);                // false

str.startsWith('🍕');                 // true
str.startsWith('🍕', 3);              // false
str.startsWith('+', 3);               // true

str.endsWith('😄');                  // true
str.endsWith('😄', str.length - 3);  // false
str.endsWith('=', str.length - 3);   // true

'is \'' + cTail1 + '\' equal \'' + cTail2 + '\'?'
                                     // "is 'ça' equal 'ça'?"
cTail1 === cTail2                    // false
cTail1 === cTail2.normalize()        // true

'Hi'.repeat(4);                      // "HiHiHiHi"


```


&nbsp;
## New Numeric Literals
Binary literals start with `0b` or `0B` followed by a sequence of 1 or more binary digits.

Octal literals start with  `0o` or `0O` followed by a sequence of 1 or more octal digits.
``` javascript
0b10101                              // 21
0B1111111111                         // 1023
0o1234567                            // 342391
0O7777777                            // 2097151
```


&nbsp;
## Promises


&nbsp;
## Spread Operator


&nbsp;
## Symbol Variable Type


&nbsp;
## Template Literals
Template literals are strings wrapped in 

### Interpolation

### Raw String content







