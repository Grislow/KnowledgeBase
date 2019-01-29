This is something between a reference and a guide. Not quite a guide since you won't find explanations of common use cases or why a concept is important. More than a reference because you have definitions of concepts paired with examples.

The following concerns the ECMAScript version 5 specification or ES5 including features from earlier specifications.

#### Table of contents

* [Basic concepts](#basic-concepts)
	* [Data types](#data-types)
	* [Expressions](#expressions)
	* [Statements](#statements)
	* [Declaration](#declaration)
	* [Naming Convention](#naming-convention)
	* [Dynamically Typed](#dynamically-typed)
	* [Type Coercion](#Type-Coercion)
		* [Implicit](#implicit)
		* [Explicit](#explicit)
		* [Falsy values](#falsy-values)
		* [Gotchas](#gotchas)
	* [Mutability](#mutability)
		* [Mutable Variable Types](#mutable-variable-types)
		* [Immutable Variable Types](#immutable-variable-types)
	* [Execution Context](#execution-context)
* [Operators](#Operators)
    * [Arithmetic operators](#arithmetic-operators)
    * [Operator precedence](#operator-precedence)
    * [Unary operators](#unary-operators)
    * [Increment and Decrement Operators](#increment-and-decrement-operators)
    * [Comparison operators](#comparison-operators)
    * [Logical operators](#logical-operators)
    * [Ternary operator](#ternary-operator)
    * [Comma operator](#comma-operator)
    * [Bitwise operators](#bitwise-operators)
    * [Assignment operators](#assignment-operators)
* [Statements](#statements-1)
    * [Control Flow](#control-flow)
	    * [Block](#block)
		* [if...else](#if...else)
		* [switch](#switch)
		* [throw](#throw)
		* [try...catch...finally](#try...catch...finally)
		* [break](#break)
		* [continue](#continue)
		* [Labels](#labels)
    * [Iteration](#iteration)
	    * [while](#while)
	    * [do...while](#do...while)
	    * [for](#for)
	    * [for...in](#for...in)
	* [Debugger](#debugger)
* [Text](#Text)
    * [Strings](#strings)
    * [Regular Expressions](#regular-expressions)
* [Arrays](#Arrays)
	* [Array Initialization](#array-initialization)
	* [Array Indexes](#array-indexes)
    * [Array Properties](#array-properties)
	* [Array Methods](#array-methods)
	* [Array type coercion](#array-type-coercion)
* [Functions](#Functions)
    * [Global Functions](#Global-Functions)
	    * [Error](#error)
* [Objects](#Objects)
* [Global Objects](#Global-Objects)
* [DOM Manipulation](#dom-manipulation)
* [Asynchronicity](#asynchronicity)
* [Strict mode](#strict-mode)

&nbsp;
## Basic concepts
Basic as in _concepts every javascript developer should understand_, not as in _simple_.

### Terminology
* [Array](/resources/glossary.md#Array)
* [Assignment](/resources/glossary.md#Assignment)
* [Declaration](/resources/glossary.md#Declaration)
* [Dynamic typing](/resources/glossary.md#Dynamic-typing)
* [Expression](/resources/glossary.md#Expression)
* [Garbage Collection](/resources/glossary.md#Garbage-Collection)
* [Global properties](/resources/glossary.md#Global-properties)
* [Immutable](/resources/glossary.md#Immutable)
* [Initialization](/resources/glossary.md#Initialization)
* [Mutable](/resources/glossary.md#Mutable)
* [Naming conflict](/resources/glossary.md#Naming-conflict)
* [Object](/resources/glossary.md#Object)
* [Primitive](/resources/glossary.md#Primitive)
* [Statement](/resources/glossary.md#statement)
* [Type coercion](/resources/glossary.md#Type-coercion)

### Data types
As of ES5 Javascript consists of five primitive and one non primitive data types.

You can also store multiple values of any data type in a single container called an array.

#### Number
Floating point numbers `2.1231`, integers `100`, positive infinity `Infinity`, negative infinity `-Infinity` and invalid numeric value `NaN`.
``` javascript
var age = 28;
var height = 1.87;
var posInf = 1/0;                    // Infinity
var negInf = 1/-0;                   // -Infinity
var notANumber = 1/'text';           // NaN
Number.MAX_VALUE                     // 1.7976931348623157e+308
Number.MIN_VALUE                     // 5e-324
```

#### String
A sequence of 0 or more characters.
``` javascript
var firstName = 'Greg';
var stringOfDigits = '53435345';
var emptyString = '';
```

#### Boolean
Represents the two truth values of logic `true` and `false`.
``` javascript
var canCode = true;
var canSing = false;
```

#### Undefined
Any variable with no value assigned is of type `undefined`.
``` javascript
var noValueAssigned;
var meansItsUndefined;
```

#### Null
A value representing 'no value'.
``` javascript
var noValue = null;
```

#### Object
A wrapper that contains 0 or more key-value pairs.
``` javascript
var emptyObject = {};
var cat = {
	legs: 4,
	sound: 'Miauu'
};
```

#### Array
0 or more values stored in a single variable. An array is of type `object`. 
```javascript
var emptyArray = [];
var multiType = [0, 'zero', false, 1, 'one', true];
var nestedArrays = [
	[1, 2, 3, 4],
	['one', 'two', 'three', 'four'],
	[
		['nest', 'as', 'much', 'as', 'you', 'want']
	]
];
```

### Expressions
A unit of code that produces a single value. An expression can consist of 0 or more literals, operators, variables or expressions.

Expressions can be used anywhere javascript expects a value.

All of these are valid expressions.
``` javascript
2 + 2 * 2                            // 6
console.log()                        // undefined
'text'                               // "text"
someVariable                         // the variables value
undefined == console.log()           // true
```

### Statements
Express an action to be executed. A statement cannot be used where a value is expected.

The following are statements in Javascript:\
`if`, `else`, `do`, `while`, `for`, `switch`, `for`, `in`, `try`, `catch`, `throw`, `function`, `return`, `debugger`, variable declaration, function declaration, value assignment.

Check out the [statements section](#statements-1) for more on the topic.
``` javascript
var condition;
condition = true;
if(condition) { ... }
function func() { ... }
do{ ... }while(condition)
debugger
```

### Declaration
In ES5 you have variable declarations and function declaration.

Variable declarations start with the `var` keyword followed by a variable name `someVar`. These declarations can be chained together with a comma delimiter.

Function declarations start with the `function` keyword followed by a function name `funcName`, a list of parametres enclosed in paranthesis `(param1, param2)` and finally the function body within braces `{ ... }`.

Declarations are scoped to the [execution context](#execution-context) in which they occur.

Variables declarations and function declaration are loaded into memory before the [execution phase](/resources/glossary.md#Execution-Phase). This means they are accessible throughout their [execution context](#execution-context) disregarding their physical location within the source code. In Javascript terminology this is called [hoisting](/resources/glossary.md#hoisting).

``` javascript
var a;                               // variable declaration without value assignment
var b = 5;                           // variable declaration with value assignment
var c,
	d = 10,
	e;                               // chained variable declarations
```

### Naming Convention
Most online resources state that variables can start with `$`, `_` and any letter followed by any alphanumeric characters. While this is what you will usually see it is not the entire truth. Check out this [stackoverflow post](https://stackoverflow.com/a/9337047/10851837) for more. 

Keywords are reserved phrases used internally by Javascript. These are not allowed as variable names. The following phrases are keywords:\
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `enum`, `export`, `extends`, `false`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `null`, `return`, `super`, `switch`, `this`, `throw`, `try`, `true`, `typeof`, `var`, `void`, `while`, `with`, 'yield'.

In [strict mode](#strict-mode) the following are also reserved phrases:\
`implements`, `package`, `public`, `interface`, `private`, `static`, `let`, `protected`.

Not all of the above are keywords in ES5 but using them as variable names would be considered bad practice for compatibility reasons.

``` javascript
var plain = 'All of these are valid';
var useCamelCase = 'its clean and a good practice';
var number1 = 'variable names can contain numbers but cant start with them';
var _ = 'lots of libraries use special characters in variable names';
var $ = 'you might end up with a naming conflict if you arent careful';
var GLOBAL_VAR = 'a global variable name should be all caps with underscore delimitation';
```

### Dynamically Typed
A variables type is determined during run time.
``` javascript
var aVariable = 'Hi';
aVariable = false;
aVariable = 10;
```

### Type Coercion
Converting a value of one type to another.

This is focused on primitive data types. More on type coercion of [objects](#object-type-coercion).

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
Number(20).toString(2)               // "10100"  - base 10 converted to base 2
Number(20).toString(8)               // "24"     - base 10 converted to base 8 
Number(46).toString(16)              // "2e"     - base 10 converted to base 16

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

#### Falsy values
Values that are coerced to a `false` boolean value. These values are `0`, `-0`, `''`, `undefined`, `false`, `null` and `NaN`. Everything else is converted to `true`.

This is especially important in the context of [control flow](#control-flow).
``` javascript
Boolean(0)                           // false
Boolean(-0)                          // false
Boolean('')                          // false
Boolean(undefined)                   // false
Boolean(false)                       // false
Boolean(null)                        // false
Boolean(NaN)                         // false
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

### Mutability
Which variables types value's can be changed.

#### Mutable Variable Types
Only objects and arrays are mutable. This means they can be changed. These variable types hold refrences to some location in memory. 
``` javascript
var tab = [1, 2, 3];
var tabTwo = tab;
tab[0] = 2;                          // changes both tab and tabTwo

var obj = { name: 'Greg'};
var objTwo = obj;
obj.name = 'John';                   // changes the name property for both obj and objTwo
```

#### Immutable Variable Types
All primitive types are immutable. If you assign it a new value it points to a new block in memory. These variable types store the actual value assigned to them.
``` javascript
var str = 'Some string';
var str2 = str;
str = 'A different string';
console.log(str);                    // prints 'A different string' 
console.log(str2);                   // prints 'Some string'
```

### Execution context
An environment created by the in which something


&nbsp;
## Operators

### Terminology
* [Assignment](/resources/glossary.md#assignment)
* [Expression](/resources/glossary.md#Expression)
* [Operand](/resources/glossary.md#Array)
* [Literal](/resources/glossary.md#Assignment)
* [Type coercion](/resources/glossary.md#Type-coercion)

### Arithmetic operators
Take numeric operands and return a single numeric value.
```javascript
10 + 5                               // 15  - addition operator
10 - 5                               // 5   - subtraction operator
10 / 5                               // 2   - division operator
10 * 5                               // 50  - multiplication operator
10 % 6                               // 4   - remainder operator
10 ** 2                              // 100 - exponentation operator
```

### Operator precedence
Arithmetic operations follow the PEMDAS rule, which extends to - Paranthesis, Exponents, Multiplication, Division, Addition, Subtraction. Paranthesis being of highest precedence and subtraction of lowest.

A full description of operator precedence in Javascript can be found on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

``` javascript
(2 + 2) * 2                          // 8  - paranthesis precedence
2 * 2 + 2                            // 6  - multiplication precedence
3 + 3 ** 2                           // 12 - exponent precedence
```

### Unary operators
Take a single operand.

`typeof` returns the type of the operand.

`void` replaces the return value with undefined.

`+` and `-` converts the operand to a numeric data type.

`!` negates a boolean value. Equivalent to the logical NOT operator.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number. More on [bitwise operators](#Bitwise-operators).

```javascript
typeof 5                             // "number"
typeof Infinity                      // "number"
typeof NaN                           // "number"
typeof 'text'                        // "string"
typeof true                          // "boolean"
typeof undefined                     // "undefined"
typeof []                            // "object"
typeof {}                            // "object"
typeof null                          // "object"

void 1                               // undefined

!true                                // false

+'5'                                 // 5
-'5'                                 // -5

~ 10                                 // -11
~ -1                                 // 0
```

### Increment and Decrement Operators
Adds or subtracts one from its operand and returns a value. Does not work on literals.

Postfix returns the value before addition/subtraction.

Prefix returns the value after additioin/subtraction.

```javascript
var x = 1;       
x++                                  // returns 1  and x equals 2 - postfix increment
++x                                  // returns 3  and x equals 3 - prefix increment
x--                                  // returns 3  and x equals 2 - postfix decrement
--x                                  // returns 1  and x equals 1 - prefix decrement
```

### Comparison operators
Compare operands and returns a boolean value.

Operands of the equality operator `==` and inequality operator `!=` undergo type coercion if they are not of the same type.

The identity operator `===` and nonidentity operator `!==` compare the operands values and types.

```javascript
5 < 10                               // true  - less than operator
5 > 10                               // false - greater than operator
5 <= 5                               // true  - less than or equal operator
5 >= 10                              // false - greater than or equal operator
5 == '5'                             // true  - equality operator
1 != true                            // false - inequality operator
5 === '5'                            // false - identity operator
1 !== true                           // true  - nonidentity operator
```

### Logical operators
Compares boolean values.

`!` logical NOT operator.
`&&` logical AND operator.
`||` logical OR operator.

```javascript
!true                                // false
true && false                        // false
true || false                        // true
```

### Ternary operator
Also called the conditional operator takes three arguments. It returns one of two values based on a boolean type condition.

__syntax__: `condition ? value1 : value2`

```javascript
var x = 5;
var y = 10;
x > y ? 'true' : 'lesser';        // "lesser"
```

### Comma operator
Evaluate multiple expressions as one and returning the result of the final one.
```javascript
1 + 2, 2 + 2, 3 + 2               // 5
```

### Bitwise operators
Perform operations on numbers as if they were a sequence of 32bits and returns a base 10 number.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number.

`&` performs AND operation on each pair of bits in the operands.

`|` performs OR operation on each pair of bits in the operands.

`^` performs XOR operation on each pair of bits in the operands.

`<<` the __left shift operator__ shifts the bits in the first operand to the left _x_ times, where _x_ is the value of the second operand. Bits shifted to the left beyond the 32 bit sequence are discarded. New bits shifted in from the right are of value _0_.

`>>` the __right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the 32 bit sequence are discarded. New bits shifted in from the left are copies of the previous left most bit.

`>>>` the __unsigned right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the 32 bit sequence are discarded. New bits shifted in from the left are of value _0_.

```javascript
~ -2                              // false
5 & 0                             // 0
5 & -1                            // 5
5 & 3                             // 1
5 | 0                             // 0
5 | -1                            // -1
5 | 3                             // 7
5 ^ 0                             // 0
5 ^ -1                            // -6
5 ^ 3                             // 6
6 << 2                            // 24
6 >> 2                            // 1
-6 >> 2                           // -2
6 >>> 2                           // 1
-6 >>> 2                          // 1073741822
```

### Assignment operators
Assigns a value to its left operand.

This includes the following operators:
* `=`    assignment
* `+=`   addition assignment
* `-=`   subtraction assignment
* `*=`   multiplication assignment
* `/=`   division assignment
* `%=`   remainder assignment
* `<<=`  left shift assignment
* `>>=`  right shift assignment
* `>>>=` unsigned right shift assignment
* `&=`   AND assignment
* `|=`   OR assignment
* `^=`   XOR assignment
```javascript
var x = 5;                        // x === 5
x += 3;                           // x === 8
x -= 3;                           // x === 5
x *= 3;                           // x === 15
x /= 3;                           // x === 5
x %= 3;                           // x === 2
x <<= 3;                          // x === 16
x >>= 1;                          // x === 8
x >>>= 1;                         // x === 4
x &= 5;                           // x === 4
x |= 9;                           // x === 13
x ^= 10;                          // x === 7
```

Operators that are solely used with [objects](#Objects) and [functions](#Functions) have been ommited in this section.

&nbsp;
## Statements

### Control Flow
Controlling what is executed and in what order.

#### block
Groups 0 or more statements. Used to execute multiple statements where one is expected.
``` javascript
{                                 // a standalone block statement
	var x = 5;
	var y = 10;
}

if(y > x) {                       // block statement coupled with an if statement
	y = 4;
	if(y < x)
		console.log('y is lesser than x');
}

```

#### if...else
Executes code based on whether a condition is met. The `else if` enables checking of multiple conditions and executing different code within one `if...else` statement. You can specifiy a fallback if none of the conditions are met with the `else` clause.

To execute more than one statement based on a condition you will need to group them using a block statement.

If a condition is met following conditions are not checked. This is why the order of nested if...else statements is important if the conditions are not mutually exclusive. 

``` javascript
var x = 5;
var y = 10;

if (y > x)
	console.log(y);               // one statement doesn't require grouping

if(y > x) {                       // multiple statements require grouping
	console.log(y);
	console.log('y is greater');
} else {
	console.log('y is equal');
}

if(y > x)
	console.log('y is greater than x');
else if(y < x)
	console.log('y is greater than x');
else if(y === x)
	console.log('y is equal to x');
else
	console.log('y cant be compared with x');
```

#### switch
Evaluates an expression and compares the returned value with 0 or more `case` clauses. Each `case` clause has a value and a statement associated with it. If the expression value and `case` value match its statement and all following statements are executed.

Use the `default` clause for a fallback.
``` javascript
var num = 10;

switch(num) {
	case 10: 
		console.log('Num is equal to 10');
	case 15: 
		console.log('This will also execute because the first case matched');
	case 20:
		console.log('Use a break statement to avoid the cascade');
		break;
	case 30:
		console.log('This will not execute');
	default:
		console.log('This will always execute unless you break out of the switch');
}

var expr = true;

switch(expr) {
	case num % 2 == 0:
	case num % 3 == 0:
	case num % 5 == 0:
		console.log('is divisible by 2, 3 or 5');
		break;
	default: 
		console.log('is not divisible by 2, 3 or 5');
}
```

#### throw
Throws an exception. Control flow is passed on to the next catch statement. If none is specified the program is terminated.
``` javascript
function yearsOld(yearOfBirth) {
	var currentYear = new Date().getFullYear();

	if(yearOfBirth < 1900 || yearOfBirth > currentYear)
		throw 'Impossible year of birth';
	if(isNaN(yearOfBirth))
		throw 'Year of birth must be a number';
}
```

#### try...catch...finally
Code is executed within the `try` block and if any exceptions are thrown they are handled within the `catch` block. The `finally` block is executed whether or not an exception is thrown.

`catch` and `finally` are optional.
``` javascript
try {
	yearsOld('nineteen eighty');
} catch(err) {
	// prints 'Year of birth must be a number'
	console.log(err);
} finally {
	console.log('This will always be executed');
}
```

#### break
Terminates the current statement and continues to the next one. Works with labels, loops and the switch statement. 
``` javascript

```

#### continue
Terminates the current iteration and continues to the next one. Works with labels and loops.
``` javascript
var x = 0;
// prints out all odd numbers between 0 and 10
while(x < 10){
	if(++x % 2 == 0)
		continue;
	console.log(x);
}
```

#### Labels
An identifier for statements that can be later used with the `break` and `continue` statement. Label names follow the same rules as [variable names](#naming-convention).
``` javascript

// label with break
blockLabel: {
	var x = 5;
	break blockLabel;
	var y = x;                    // this will not be executed
}

// label with continue
outerLoop:
for(var i = 1; i < 3; i++) {
	innerLoop:
	for(var j = 1; j < 3; j++ ){
		if(i === 1 && j === 2)
			continue outerLoop;	
		if(i === 3 && j === 1)
			continue innerLoop;
		console.log(j*i);         // prints 1 2 4
	}
}
```

### Iteration
Repeating execution of code a set number of times or until a condition is met.

#### while
Consists of a condition and statement. As long as the condition is evaluated to `true` the statement is executed.
``` javascript
var x = 5;
while(x > 0)
	console.log('Printing the number ' + x--);
```

#### do...while
Consists of a condition and statement. Executes the statement and than evaluates the condition. If it evaluates to `true` the process is repeated.
``` javascript
do {
	console.log('This will always execute at least once');
} while(false);
```

#### for
Consists of a statement and three optional expressions that are delimited by a semicolon. Executes the statement as long as the __condition__ expression evaluates to `true`.

The three expressions are(in the below order):
* __initializer__ - an expression or variable declaration. Usually used with the __condition__ and __final__ expressions.
* __condition__ - an expression that is evaluated before each iteration. If it evaluates to `false` the loop is terminated. 
* __final__ - an expression that is executed after the for loops statement.
``` javascript
var array = ['one', 'two', 'three', 'four'];
// prints out each value in the array
for(var i = 0; i < array.length; i++) {
	console.log(array[i]);
}
```

#### for...in
Iterates over an objects properties.
``` javascript
var user = {
	id: 12345678,
	firstName: 'John',
	surName: 'Smith'
};

for(var prop in user){
	console.log(prop + ': ' + user[prop]);
}
```

### debugger
Pauses execution and calls on any debugging functionality available in the runtime environment. 

Try doing the following:
* Open Chrome Browser
* Press F12
* Paste in below code snippet
* Press 'Enter' to execute the code
* Voila! You are now in chromes debugging window. 
* Try hovering over variables. This will show you their values at the paused moment.
``` javascript
function fibo(n){
	var sqrt5 = Math.sqrt(5);
	var leftExp = ((1 + sqrt5) / 2) ** n;
	var rightExp = ((1 - sqrt5) / 2) ** n;
	debugger
	return (leftExp - rightExp) / sqrt5;
}
fibo(10);
```

The `function` and `return` statement are covered in the [function section](#functions)

&nbsp;
## Text

### Terminology
* Escape sequence

### Strings
A sequence of 0 or more characters. A character is actually a UTF-16 code unit.

#### Valid Strings
``` javascript
'single quotes'
"double quotes"
"quote's in strings"
'or quote\'s using an escape sequence'
'you can use a backslash for very long strings\ 
to make it multiline. The backslash will not be\
printed with the rest of the string'
```

#### Concatenation


#### String Properties


#### String Methods


#### Escape sequences
A sequence of characters that begins with an escape character and has a different meaning then its literal representation.
``` javascript
'\ - escape character'               // " - escape character"
'\\ - backslash'                     // "\ - backslash"
'\' - single quote'                  // "' - single quote"
'\" - double quote'                  // "" - double quote"
'\n - new line'                      // "
                                     //  - new line"
'\t - tab'                           // "	 - tab"
```

#### Unicode




### Regular Expressions



&nbsp;
## Arrays
Array is a [global object](#global-objects) used in the creation of arrays.

Instances of Array store multiple values of various types in one variable.

### Array Initialization
``` javascript
var emptyArray = [];
var multitypeArray = [
	true,
	234,
	'a string',
	undefined,
	null,
	{
		an: 'object'
	}
];
var nestedArray = [
	[
		'nest',
		[
			'as much',
			[
				'as you want'
			]
		]
	]
];
```

### Array Indexes
Each element in an array is assigned an index value which represents its position in the array. Indexes start from `0` and end at `array.length - 1`.
``` javascript
var arr = [1, 2, 3];

arr[0]                               // 1
arr['1']                             // 2
arr[arr.length - 1]                  // 3
arr[100]                             // undefined
```

### Array Properties
__length__: number of values stored in an array. Reducing the lengths value below the number of elements will delete those with indexes exceeding the new value.
__Array.prototype__: reference to the Array prototype. Allows making changes to all arrays like adding new methods.

``` javascript
var arr = [1, 2, undefined, 'one', 3, 4, 5, null, false];

arr.length                           // 9

arr.length = 7;                      // last null and false deleted

// Add method that returns the sum of all numbers in an array
Array.prototype.sumNums = function() {
	var sum = 0;
	for(var i = 0; i < this.length; i++) {
		sum += (typeof this[i] === 'number' )?this[i]:0;
	}
	return sum;
}

arr.sumNums();                       // 15
```

### Array Methods

#### Global Object Methods
Methods callable through the Array [global object](#global-objects).

`Array.isArray(arg)` - return boolean value indicating if passed argument is an Array instance.

`Array.of(arg1 ... [argN])` - create an Array instance from passed arguments.

``` javascript
Array.isArray('string');             // false
Array.isArray([1, 2, 3]);            // true

Array.of(1, 'one', true);            // [1, "one", true]
Array.of([1], [[2, 3]]);             // [[1], [[2, 3]]]
```

#### Prototype Methods
Methods callable through instances of Array.

* [Accessor](/resources/glossary.md#accessor) Methods
    * `Array.prototype.concat(arr[, ... , arrN])` - merges 2 or more arrays.
	* `Array.prototype.indexOf(match[, from])` - returns the index of the first element matching the argument or `-1` if no match is found.
	* `Array.prototype.lastIndexOf(match[, from])` - returns the index of the last element matching the argument or `-1` if no match is found. The array is searched from greatest to lowest index value.
	* `Array.prototype.slice(from[, to])` - returns a part of the array as a new array. The element to which you copy is excluded.
	* `Array.prototype.join(delim)` - converts the array to a string delimited by the value passed as an argument.
	* `Array.prototype.toString()` - converts the array to a comma delimited string.
	* `Array.prototype.toLocaleString(locale)` - converts the array to a string compliant with a [locale](/resources/glossary.md#locale) passed as an argument.
* [Mutator](/resources/glossary.md#mutator) Methods
    * `Array.prototype.pop()` - remove last element and return its value. 
	* `Array.prototype.shift()` - remove first element and return its value.
    * `Array.prototype.push(el1, [, ... , elN])` - adds 1 or more elements to the end of the array. Returns the new length of the modified array.
    * `Array.prototype.unshift(el1, [, ... , elN])` - adds 1 or more elements to the start of the array. Returns the length of the modified array.
    * `Array.prototype.reverse()` - reverses the order of elements.
    * `Array.prototype.sort([func])` - sorts the elements as if they were strings. May take a function that specifies how elements are sorted.
    * `Array.prototype.splice()` - removes, replaces and/or adds elements.
* Iteration Methods
    * `Array.prototype.every(func[, this])` - checks every element in an array against a testing function. Returns `true` if all tests return `true`.
    * `Array.prototype.some(func[, this])` - checks every element in an array against a testing function. Returns `true` if one test returns `true`.
    * `Array.prototype.filter(func[, this])` - checks every element in an array against a testing function. Returns a new array containing all elements which tested `true`.
    * `Array.prototype.forEach(func[, this])` - executes a function for each element in the array. You can not break out of the forEach function.
    * `Array.prototype.map(func[, this])` - executes a function for each element in the array. Returns a new array comprised of the returned values.
    * `Array.prototype.reduce(func[, initialValue])` - reduces an array to a single value, by executing a function on each element and storing the result in an accumulator. The value of this accumulator is returned. You can specify an initial value for the accumulator.
    * `Array.prototype.reduceRight(func[, initialValue])` - reduces an array to a single value, by executing a function on each element beginning from the last index and storing the result in an accumulator. The value of this accumulator is returned. You can specify an initial value for the accumulator.


Functions passed as arguments are [callback functions](#callback-functions).

Any __Iteration Method's__ callback function has the following parameters in the provided order:
* __current__ - current array element being processed. Is optional.
* __index__ - current array element's index. Is optional.
* __array__ - array on behalf of which the function was called. Is optional.

Each __Iteration Method__ also takes a last `this` argument which specifies the value of the [this keyword](#this-keyword) for the callback argument.

The exceptions to the above rules are `reduce()` and `reduceRight()`:
* __accumulator__ - the first parameter of their callback function followed by __current__, __index__ and __array__. Is optional.
* no `this` argument


``` javascript
// ACCESSOR
var first = [1, 2, 3];
var second = [4, 5, 6];
var arr = [0, 1, 2, 0, 1, 2];
var arrLoc = [new Date('01.02.2019 16:12:00 UTC+1')];

first.concat(second);                // [1, 2, 3, 4, 5, 6]
first.concat(second, 7, [8]);        // [1, 2, 3, 4, 5, 6, 7, 8]

arr.indexOf(2);                      // 2
arr.indexOf(2, 3);                   // 5
arr.indexOf(10);                     // -1

arr.lastIndexOf(1);                  // 4
arr.lastIndexOf(1, 3);               // 1
arr.lastIndexOf(10);                 // -1

arr.slice(4);                        // [1, 2]
arr.slice(0, 3);                     // [0, 1, 2]
arr.slice(0, 4);                     // [0, 1, 2, 0]

arr.join('');                        // "0120123"
arr.join('-');                       // "0-1-2-0-1-2-3"
arr.join('del');                     // "0del1del2del0del1del2del3"

arr.toString();                      // "0,1,2,0,1,2,3"

arrLoc.toLocaleString("en-US", {timeZone: "America/New_York"});
                                     // "1/2/2019, 10:12:00 AM"

// MUTATOR
var emptyArr = [];
var array = ['one', 'two', 'three'];
var sortAsString = [8, 9, 70, 60];

emptyArr.pop();                      // undefined
array.pop();                         // 'three' - array is ["one", "two"]
array.shift();                       // 'one'   - array is ["two"]
array.push(2);                       // 2       - array is ["two", 2]
array.unshift('one', 1);             // 4       - array is ["one", 1, "two", 2]
array.reverse();                     // [2, "two", 1, "one"]
array.sort();                        // [1, 2, "one", "two"]
sortAsString.sort();                 // [60, 70, 8, 9]
sortAsString.sort(function(a, b) {
	if (a < b) {
		return -1;
	} else if (b < a) {
		return 1;
	} else {
		return 0;
	}
});                                  // [ 8, 9, 60, 70]

// ITERATION
function isNum(value){
	return typeof value === 'number';
}

function printParams(cur, ind, arr) {
	var rawArrStr = JSON.stringify(arr);
	var rawCurStr = JSON.stringify(cur);
	console.log(rawArrStr + ': element at index ' + ind + ' has value ' + rawCurStr);
}

function numConvert(cur) {
	return +cur;
}

function integerConvert(acc, cur) {
	var add = (!isNaN(+cur) && isFinite(+cur)) ? +cur : 0;
	return acc + add;
}

var shortArr = ['one', 'two'];
var allNum = [1, 2, 3, 4, 5];
var notAllNum = [1, '2', true, undefined];
var mixedArr = [1, '1', true, [1], false, null, [], undefined, 1/0];

allNum.every(isNum);                 // true
notAllNum.every(isNum);              // false
allNum.some(isNum);                  // true
notAllNum.some(isNum);               // true

allNum.filter(isNum);                // [1, 2, 3, 4, 5]
notAllNum.filter(isNum);             // [1]

shortArr.forEach(printParams);
                                     // ["one","two"]: element at index 0 has value "one"
                                     // ["one","two"]: element at index 1 has value "two"

mixedArr.map(numConvert);            // [1, 1, 1, 1, 0, 0, 0, NaN, Infinity]

mixedArr.reduce(integerConvert);     // 4
mixedArr.reduce(integerConvert, 6);  // 10

[1, 1, 2, 3, 1, 3].reduce(function(tally, cur, ind) {
	tally[cur] = (tally[cur] + 1 || 0);
	return tally;
}, {})                               // {1: 2, 2: 0, 3: 1}

['a', 'b', 'c', 'd', 'e'].reduce(function(str, letter) {
	return str + letter;
});                                  // "abcde"

['a', 'b', 'c', 'd', 'e'].reduceRight(function(str, letter) {
	return str + letter;
}, 'Reversed: ');                    // "Reversed: edcba"
```


### Array type coercion
__Boolean__: Always converts to `true`.
__String__: Converts all values to strings and concatenates them with a comma delimiter.
__Number__: Returns `NaN` if more than one value in array. An empty array returns `0` and an array with a single string or numeric value returns that value after numeric conversion.

``` javascript
var emptyArr = [];
var falseArr = [false];
var numArr = [2];
var numStrArr = ['5'];
var nestedArr = [1, 2, 3, ['one', 'two']];

Boolean(emptyArr);                   // true
Boolean(falseArr);                   // true
String(emptyArr);                    // ""
String(nestedArr);                   // "1,2,3,one,two"
Number(emptyArr);                    // 0
Number(falseArr);                    // NaN
Number(numArr);                      // 2
Number(numStrArr);                   // 5
Number(nestedArr);                   // NaN
```


&nbsp;
## Functions

### Function declaration


### Function expression


### Callback functions
A function passed into another function as an argument.

### Closures


### Currying


### Pure functions


### Global Functions
Functions that are called globally without specifying an object.

#### decodeURI
Decodes escape sequences in a Uniform Resource Identifier, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI';
decodeURI(URI);                      // "https://google.com/search?is ! @ # $ % valid in a URI"
```

#### decodeURIComponent
Decodes escape sequences in part of a Uniform Resource Identifier.
```javascript
var URIComponent = 'is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI'
decodeURIComponent(URIComponent);    // is ! @ # $ % valid in a URI
```

#### encodeURI
Replaces special characters in Uniform Resource Identifier with escape sequences, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is ! @ # $ % valid in a URI';
encodeURI(URI);                      // "https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI"
```

#### encodeURIComponent
Replaces special characters in part of a Uniform Resource Identifier with escape sequences.
```javascript
var URIComponent = 'is ! @ # $ % valid in a URI';
encodeURIComponent(URIComponent);    // "is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI"
```

#### eval
Evaluates a string as an expression, statement or statements. If the string contains one or more statements they are executed after evaluation. 
```javascript
eval('5');                           // 5
eval('5 * 3');                       // 15 
eval('5 + 5; 2 + 2');                // 4
```

#### isFinite
Check if passed value is a finite number.
```javascript
isFinite(1/0);                       // false
isFinite(1.111111);                  // true
```

#### isNaN
Check if passed value is not a number. 
```javascript
isNaN();                             // true
isNaN('five');                       // true
isNaN(5);                            // false
```

#### Number
Converts passed value to a number.
```javascript
Number(true);                        // 1
Number(5 + 4);                       // 9
Number('5 + 4');                     // NaN
Number('10');                        // 10
```

#### parseFloat
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

#### parseInt
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

#### String
Converts passed value to a string.
```javascript
String(null);                        // "null"
String(5 + 4);                       // "9"
String(true);                        // "true"
```

&nbsp;
## Objects

## Object instantiation


### new operator
``` javascript

```


### Properties
``` javascript

```

#### Property accessors
``` javascript

```

#### this keyword

#### in operator
``` javascript

```

#### delete operator
``` javascript

```

### instanceof operator


### Object methods

### Object type coercion
__Boolean__: all objects are converted to `true`.
__String__: the objects `toString()` method is called. If it doesn't return a primitive value it's `valueOf()` method is called. If that fails to return a primitive value a TypeError is thrown.
__Number__: the objects `valueOf()` method is called. If it doesn't return a primitive value it's `toString()` method is called. If that fails to return a primitive value a TypeError is thrown.

``` javascript
var John = {
	name: 'John',
	surName: 'Smith',
	id: 123456,
	toString: function() {
		return this.name + ' ' + this.surName;
	},
	valueOf: function() {
		return this.id;
	}
}

Boolean(John);                       // true
String(John);                        // "John Smith"
Number(John);                        // 123456
```


&nbsp;
## Global Objects


### Error

#### User Defined Errors
You can create your own error objects.

Most Error properties are platform specific with `message` being the only standard property.

The below example is a minimalistic approach. You can access other properties through the stack field. Assign the `Error.prototype` to your user defined error so that it can be identified as an error object.
``` javascript
function MyError(message) { 
	this.message = message; 
	this.stack = Error().stack; 
} 
MyError.prototype = Object.create(Error.prototype); 
MyError.prototype.name = "ErrorName";

try {
	throw new MyError('Testing user defined error');
} catch(e) {
	for (var key in errorObject) {

	}
}
```

&nbsp;
## Asynchronicity



&nbsp;
## Strict mode


