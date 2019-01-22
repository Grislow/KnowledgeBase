Reference for javascript features grouped by Ecmascript specification.

#### Table of contents
* [ES5](#es5)
    * [Variables and data types](#variables-and-data-types)
	* [Global Functions][global-functions]
* [ES6](#es6)
* [ES7](#es7)
* [ES8](#es8)

&nbsp;
# ES5

This includes features available in ES5 from previous specifications.

&nbsp;
## Variables and data types

### Terminology
* Array
* Assignment
* Declaration
* Dynamic typing
* Garbage Collection
* Global properties
* Immutable
* Initialization
* Mutable
* Naming conflict
* Object
* Primitive
* Type coercion


### Naming Convention
Most answers state that variables can start with `$`, `_` and any letter followed by any alphanumeric characters. While this is what you will usually see it is not the entire truth. Check out [this](https://stackoverflow.com/a/9337047/10851837) stackoverflow post for more. 

``` javascript
var plain = 'All of these are valid';
var useCamelCase = 'its clean and a good practice';
var number1 = 'variable names can contain numbers but cant start with them';
var _ = 'lots of libraries use special characters in variable names';
var $ = 'you might end up with a naming conflict if you arent careful';
var GLOBAL_VAR = 'a global variable';
```

### Dynamically Typed
A variables type is determined during run time.
``` javascript
var someString = 'Hi';
someString = 10;
```

### Number
Both floating point numbers and integers.
``` javascript
var age = 28;
var height = 1.87;
```

### String
A sequence of 0 or more characters.
``` javascript
var firstName = 'Greg';
var stringOfDigits = '53435345';
var emptyString = '';
```

### Boolean
Represents the two truth values of logic.
``` javascript
var canCode = true;
var canSing = false;
```

### undefined
Any variable with no value assigned.
``` javascript
var noValueAssigned;
var meansItsUndefined;
```

### infinity
Numeric value representing positive or negative infinity.
``` javascript
1/0                                  // Infinity
```

### NaN
Indicates an invalid numeric value.
``` javascript
1/'string'                           // NaN
```

### Null
A value representing 'no value'.
``` javascript
var noValue = null;
```

### Array
0 or more values stored in a single variable.
```javascript
var emptyArray = [];
var multiType = [0, 'zero', false, 1, 'one', true];
var arrayInArray = [
	[1, 2, 3, 4],
	['one', 'two', 'three', 'four'],
	[
		['nest', 'as', 'much', 'as', 'you', 'want']
	]
];
```

### Object
A wrapper that contains 0 or more key-value pairs.
```javascript
var emptyObject = {};
var cat = {
	legs: 4,
	sound: 'Miauu'
};
```

### Type Coercion
Converting a value of one type to another.

This is focused on primitive data types. More on type coercion of [Arrays](#arrays) and [Objects](#objects) in their respective sections.

#### Implicit
``` javascript
// String
'Number ' + 2                        // "Number 2"
true + ''                            // "true"

// Number
2 == '2'                             // true
2 * '2'                              // 4
'6' < '5'                            // false
5/null                               // Infinity

// Boolean
while(5) {...}                       // infinite loop
!5                                   // false
5 || 'five'                          // true
```

#### Explicit
``` javascript
// String
String(undefined)                    // "undefined"
String(true)                         // "true"

// Number
Number('10')                         // 10
Number(null)                         // 0 
Number(false)                        // 0 
Number(true)                         // 1
Number('5 + 4')                      // NaN
Number(undefined)                    // NaN

// Boolean
Boolean(0)                           // false
Boolean(5)                           // true
Boolean('hi')                        // true
```

#### Gotchas
`NaN` is not equal `NaN`
``` javascript
NaN == NaN                           // false
```
`null` does not undergo numeric conversion when used with `==`. It only equals `null` or `undefined`.
``` javascript
null == 0                            // false
null == null                         // true
null == undefined                    // true
```


### Falsy values
Values that are coerced to a `false` boolean value. Everything else is converted to `true`.
``` javascript
Boolean(0)
Boolean(-0)
Boolean('')
Boolean(undefined)
Boolean(false)
Boolean(null)
Boolean(NaN)
```

### Mutable Variable Types
Only objects and arrays are mutable. This means they can be changed.
``` javascript
var tab = [1, 2, 3];
var tabTwo = tab;
tab[0] = 2;                          // changes both tab and tabTwo

var obj = { name: 'Greg'};
var objTwo = obj;
obj.name = 'John';                   // changes the name property for both obj and objTwo
```

### Immutable Variable Types
All primitive types are immutable. If you assign it a new value it points to a new block in memory.
``` javascript
var str = 'Some string';
var str2 = str;
str = 'A different string';
console.log(str);                    // prints 'A different string' 
console.log(str2);                   // prints 'Some string'
```


&nbsp;
## Strings

### Terminology
* Escape sequence


### Escape sequences
A sequence of characters that begins with an escape character and has a different meaning then its literal representation.
``` javascript
'\ - escape character'               // " - escape character"
'\\ - backslash'                     // "\ - backslash"
'\' - single quote'                  // "' - single quote"
'\" - double quote'                  // "" - double quote"
'\n - new line'                      // "
									 //  - new line"
'\t - tab'                           // "	 - tab"
'\251'
```



## Arrays

### Type coercion for arrays

### Array Methods



### Objects

## Object methods

## Type coercion for objects


## Global Functions
Functions that are called globally without specifying an object.

### Terminology
* Argument
* Escape sequence
* Expression
* Function
* Statement
* Type coercion
* URI

### decodeURI
Decodes escape sequences in a Uniform Resource Identifier, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI';
decodeURI(URI);                      // "https://google.com/search?is ! @ # $ % valid in a URI"
```

### decodeURIComponent
Decodes escape sequences in part of a Uniform Resource Identifier.
```javascript
var URIComponent = 'is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI'
decodeURIComponent(URIComponent);    // is ! @ # $ % valid in a URI
```

### encodeURI
Replaces special characters in Uniform Resource Identifier with escape sequences, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is ! @ # $ % valid in a URI';
encodeURI(URI);                      // "https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI"
```

### encodeURIComponent
Replaces special characters in part of a Uniform Resource Identifier with escape sequences.
```javascript
var URIComponent = 'is ! @ # $ % valid in a URI';
encodeURIComponent(URIComponent);    // "is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI"
```

### eval
Evaluates a string as an expression, statement or statements. If the string contains one or more statements they are executed after evaluation. 
```javascript
eval('5');                           // 5
eval('5 * 3');                       // 15 
eval('5 + 5; 2 + 2');                // 4
```

### isFinite
Check if passed value is a finite number.
```javascript
isFinite(1/0);                       // false
isFinite(1.111111);                  // true
```

### isNaN
Check if passed value is not a number. 
```javascript
isNaN();                             // true
isNaN('five');                       // true
isNaN(5);                            // false
```

### Number
Converts passed value to a number.
```javascript
Number(true);                        // 1
Number(5 + 4);                       // 9
Number('5 + 4');                     // NaN
Number('10');                        // 10
```

### parseFloat
Parses passed value and returns a floating point number.
```javascript
parseFloat(1);                       // 1
parseFloat('1');                     // 1
parseFloat(011100);                  // 4672 - 0 prefix parses as octal
parseFloat(0x1F);                    // 31   - 0x prefix parses as hexadecimal
parseFloat('2.119');                 // 2.119
parseFloat('2text111');              // 2
parseFloat('text11');                // NaN
parseFloat(true);                    // NaN
parseFloat(undefined);               // NaN
```

### parseInt
Parses passed value and returns an integer. Also takes an optional second argument which specifies what numeral system should be used.
```javascript
parseInt(1.83);                      // 1
parseInt('1984');                    // 1984
parseInt('111', 2);                  // 7  - parsed as binary
parseInt(011);                       // 9  - 0 prefix parses as octal
parseInt(11, 8);                     // 9  - parsed as octal
parseInt(0x1A);                      // 26 - 0x prefix parses as hexadecimal
parseInt('1A', 16);                  // 26 - parsed as hexadecimal
parseInt('1text234');                // 1
parseInt('text1234');                // NaN
parseInt(true);                      // NaN
```

### String
Converts passed value to a string.
```javascript
String(null);                        // "null"
String(5 + 4);                       // "9"
String(true);                        // "true"
```


## Global Objects

## Operators



# ES6


# ES7


# ES8


# ES9

