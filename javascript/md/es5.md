This is something between a reference and a guide. Not quite a guide since you won't find explanations of common use cases or why a concept is important. More than a reference because you have definitions of concepts paired with examples.

The following concerns the ES5 specification and its predecessors. Deprecated features are omitted.

If the description is not enough make sure to check out the examples and try it yourself in a browser console.

#### Table of contents

* [Conceptual](#conceptual)
    * [Comments](#Comments)
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
    * [Execution Stack](#execution-stack)
    * [Scope](#Scope)
    * [Scope Chain](#scope-chain)
    * [Hoisting](#hoisting)
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
        * [Valid Strings](#valid-strings)
        * [Concatenation](#concatenation)
        * [String Properties](#string-properties)
        * [String Methods](#string-methods)
        * [Escape sequences](#escape-sequences)
        * [Unicode](#unicode)
        * [Lexicographical Comparison](#lexicographical-comparison)
    * [Regular Expressions](#regular-expressions)
        * [Initialization](#initialization)
        * [Properties](#properties)
        * [Patterns](#patterns)
        * [Flags](#flags)
        * [Search and Test](#search-and-test)
        * [Match and Exec](#match-and-exec)
        * [Matching in a loop](#matching-in-a-loop)
        * [Split](#split)
        * [Replace](#replace)
* [Arrays](#Arrays)
    * [Array Initialization](#array-initialization)
    * [Array Indexes](#array-indexes)
    * [Array Properties](#array-properties)
    * [Array Methods](#array-methods)
        * [Global Object Methods](#global-object-methods)
        * [Prototype Methods](#prototype-methods)
    * [Array type coercion](#array-type-coercion)
* [Functions](#Functions)
    * [Function Methods](#function-methods)
    * [Function Declaration](#function-declaration)
    * [Function Expression](#function-expression)
    * [First Class Functions](#first-class-functions)
    * [Recursive Functions](#recursive-functions)
    * [IIFE](#iife)
    * [Closures](#closures)
    * [Currying](#currying)
    * [Pure functions](#pure-functions)
    * [Global Functions](#global-functions)
* [Objects](#Objects)
* [Global Objects](#Global-Objects)
    * [Error](#error)
* [Asynchronicity](#asynchronicity)
* [Strict mode](#strict-mode)

&nbsp;
# Conceptual
Concepts every JS developer should know and understand.

## Comments
An annotation that is ignored by the [interpreter](/resources/glossary.md#interpreter). Are often used for following purposes:
* inline documentation that makes your intentions clear to other developers
* disabling code for quick debugging

To fully utilize the power of comments check out a documentation generator like [JSDocs](/javascript/md/misc.md#jsdocs)
``` javascript
// This is a single line comment
// these will be used to show produced values in further examples

/*
    This is a multiline comment
    It can span 
    as 
    many 
    lines 
    as 
    you 
    wish
*/
```

## Data types
As of ES5 Javascript consists of five primitive and one non-primitive data type.

You can also store multiple values of any data type in a single container called an array.

### Number
Floating point numbers `2.1231`, integers `100`, positive infinity `Infinity`, negative infinity `-Infinity` and invalid numeric value `NaN`.
``` javascript
var age = 28;
var height = 1.87;
var posInf = 1/0;                       // Infinity
var negInf = 1/-0;                      // -Infinity
var notANumber = 1/'text';              // NaN
Number.MAX_VALUE                        // 1.7976931348623157e+308
Number.MIN_VALUE                        // 5e-324
```

### String
A sequence of 0 or more characters.
``` javascript
var firstName = 'Greg';
var stringOfDigits = '53435345';
var emptyString = '';
```

### Boolean
Represents the two truth values of logic `true` and `false`.
``` javascript
var canCode = true;
var canSing = false;
```

### Undefined
Any variable with no value assigned is of type `undefined`.
``` javascript
var noValueAssigned;
var meansItsUndefined;
```

### Null
A value representing 'no value'.
``` javascript
var noValue = null;
```

### Object
A wrapper that contains 0 or more key-value pairs.
``` javascript
var emptyObject = {};
var cat = {
    legs: 4,
    sound: 'Miauu'
};
```

### Array
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

## Expressions
A unit of code that produces a single value. An expression can consist of 0 or more literals, operators, variables or expressions.

Expressions can be used anywhere javascript expects a value.

If an expression ends with a semicolon it becomes an expression statement. An expression statement cannot be used as a value - `console.log(2 + 2;)` would result in an error.

All of these are valid expressions.
``` javascript
2 + 2 * 2                               // 6
console.log()                           // undefined
'text'                                  // "text"
someVariable                            // the variables value
undefined == console.log()              // true
```

## Statements
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

## Declaration
In ES5 you have variable declarations and function declarations.

Variable declarations start with the `var` keyword followed by a variable name `someVar`. These declarations can be chained together with a comma delimiter.

Function declarations start with the `function` keyword followed by a function name `funcName`, a list of parametres enclosed in paranthesis `(param1, param2)` and finally the function body within braces `{ ... }`.

``` javascript
var someVar;                            // variable declaration without value assignment
var b = 5;                              // variable declaration with value assignment
var c,
    d = 10,
    e;                                  // chained variable declarations
function funcName(param1, param2) { }   // function declaration
```

## Naming Convention
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

## Dynamically Typed
A variables type is determined during run time.
``` javascript
var aVariable = 'Hi';
aVariable = false;
aVariable = 10;
```

## Type Coercion
Converting a value of one type to another.

This is focused on primitive data types. More on type coercion of [objects](#object-type-coercion).

### Implicit
``` javascript
// String
'Number ' + 2                           // "Number 2"
true + ''                               // "true"

// Number
2 == '2'                                // true
2 * '2'                                 // 4
'6' < '5'                               // false
5/null                                  // Infinity

// Boolean
while(5) {...}                          // infinite loop
!5                                      // false
5 || 'five'                             // true
```

### Explicit
``` javascript
// String
String(undefined)                       // "undefined"
String(true)                            // "true"
Number(20).toString(2)                  // "10100"  - base 10 converted to base 2
Number(20).toString(8)                  // "24"     - base 10 converted to base 8 
Number(46).toString(16)                 // "2e"     - base 10 converted to base 16

// Number
Number('10')                            // 10
Number(null)                            // 0 
Number(false)                           // 0 
Number(true)                            // 1
Number('5 + 4')                         // NaN
Number(undefined)                       // NaN

// Boolean
Boolean(0)                              // false
Boolean(5)                              // true
Boolean('hi')                           // true
```

### Falsy values
Values that are coerced to a `false` boolean value. These values are `0`, `-0`, `''`, `undefined`, `false`, `null` and `NaN`. Everything else is converted to `true`.

This is especially important in the context of [control flow](#control-flow).
``` javascript
Boolean(0)                              // false
Boolean(-0)                             // false
Boolean('')                             // false
Boolean(undefined)                      // false
Boolean(false)                          // false
Boolean(null)                           // false
Boolean(NaN)                            // false
```

### Gotchas
`NaN` is not equal `NaN`
``` javascript
NaN == NaN                              // false
```
`null` does not undergo numeric conversion when used with `==`. It only equals `null` or `undefined`.
``` javascript
null == 0                               // false
null == null                            // true
null == undefined                       // true
```

## Mutability
Which variables types value's can be changed.

### Mutable Variable Types
Only objects and arrays are mutable. This means they can be changed. These variable types hold refrences to some location in memory. 
``` javascript
var tab = [1, 2, 3];
var tabTwo = tab;
tab[0] = 2;                             // changes both tab and tabTwo

var obj = { name: 'Greg'};
var objTwo = obj;
obj.name = 'John';                      // changes the name property for both obj and objTwo
```

### Immutable Variable Types
All primitive types are immutable. If you assign it a new value it points to a new block in memory. These variable types store the actual value assigned to them.
``` javascript
var str = 'Some string';
var str2 = str;
str = 'A different string';
console.log(str);                       // prints 'A different string' 
console.log(str2);                      // prints 'Some string'
```

## Execution Context
The environment within which code is executed. An execution context is created when the program starts and whenever a function is invoked. Each execution context is placed on the [execution stack](#execution-stack).

The are two types of execution contexts:
* __Global Execution Context__ - where the program starts execution.
* __Function Execution Context__ - is created any time a function is invoked. Ends when a `return` statement is executed or the funtion body closing bracket is encountered.

Each execution context consists of two stages:
1. __Creation phase__
    * __Activation Object creation__ - an array-like object consisting of function parameters is created.
    * __Scope assignment__ - a scope is assigned. The scope consists of a list of objects that reflect the contexts scope chain.
    * __Variable instantiation__ - a variable object(VO) is created out of the activation object.
        * Argument values are assigned to parameters.
        * Parameters without assigned argument values are set to `undefined`.
        * Inner functions are instantiated and assigned as properties to the VO.
        * Any local variables declared within the function are stored as properties in the VO.
    * __this keyword__ - a value is assigned to the `this` keyword. 
1. __Execution phase__
    * the code is executed
    * instantiated functions and variables are assigned values as the code runs

There are slight differences for the global execution context: 
* no __Activation Object__ is assigned since there are no parameters
* the __scope chain__ only contains the global object
* __Variable instantiation__ includes all top level function and variable declarations
* the __this keyword__ is assigned the global object

## Execution Stack
Or call stack is a collection of execution contexts, which are removed and added to the stack in a LIFO order(Last In First Out). The execution stack at the top(most recently added) is the one that is currently being executed.

``` javascript
/* 
    The execution stack is within square brackets [...]
    The first element is the bottom of the stack
*/
// programs starts -> [Global Context]
var x;
function fibo(n) {
    if (n < 1)
        return 0;
    else if (n === 1 || n === 2)
        return 1;
    return fibo(n - 1) + fibo(n - 2);   
}

x = fibo(3);    // fibo(3) execution -> [Global Context, fibo(3) Context]
                // fibo(2) execution -> [Global Context, fibo(3) Context, fibo(2) Context]
                // fibo(2) returns 1 -> [Global Context, fibo(3) Context]
                // fibo(1) execution -> [Global Context, fibo(3) Context, fibo(1) Context]
                // fibo(1) returns 1 -> [Global Context, fibo(3) Context]
                // fibo(3) returns 2 -> [Global Context]
// program exits
```

## Scope
The context in which variables and functions can be referenced.

Scopes can be nested within eachother. Each nested scope gains access to its enclosing scope.

Variables and functions can be in one of two scopes:
* __Global Scope__: when declared outside a function it is accessible in every context of the application.
* __Function Scope__: when declared inside a function it can only be referenced within that function and its nested functions.

You might also encounter the terms __lexical scope__ or __static scope__ in regards to Javascript. This means you can figure out what the scope of a variable or function is just by looking at where it was declared in the source code.

``` javascript
var globalVar = 'global variable';
function globalfunc() {
    console.log('this function can be called from anywhere');
}

function ownScope() {
    var a = 'available in ownScope() function and nestedFunc()';
    var b = globalVar + ' can be referenced here';
    var x = 5;
    globalFunc();

    function nestedFunc() {
        // functions and variables from all enclosing scopes are available
        var c = a + b + globalVar;
        // y is only accessible in the nestedFunc()
        var y = 10 + x;
    }
}
```

## Scope Chain
Is a mechanism used to resolve the values of variables. When scopes are nested each nested scope has access to its outer scope which in turn has access to its outer scope. This goes on until the global scope is reached, thus creating a chain of scopes. 

When a variable is used in a function the scope chain is traveresed to find the _nearest_ assigned value of that variable. Traversing starts from where the variable was called and moves up.

__Variable Shadowing__: When an identifier available in an outer scope is reused in an inner scope.

``` javascript
var a = 0;
var b = 0;
var c = 0;
var d = 0;
function x() {
	var a = 1;                          // a is shadowed
    b = 4;
    c = 8;
	function y() {
        a = 2;
        b = 5;
        function z() {
            a = 3;
            console.log(a);             // 3
            console.log(b);             // 5
            console.log(c);             // 8
            console.log(d);             // 0
        }
    }
}

// functions can be shadowed like any other variable
function func() {
    console.log(1);
}

function other() {
    // func from global scope is shadowed by func from local scope
    function func() {
        console.log(2);
    }
    return func;
}

other()();                              // 2
```

## Hoisting
Variable declarations and function declarations are loaded into memory before the [execution phase](/resources/glossary.md#Execution-Phase). This means they are accessible throughout their [execution context](#execution-context) disregarding their location within the source code.

``` javascript
console.log(hoistedVar);                // undefined
hoistedFunc();                          // "The function body is also hoisted"

var hoistedVar = 'hoistedVar can be accessed before declaration';

console.log(hoistedVar);                // "hoistedVar can be accessed before declaration"

function hoistedFunc() {
    console.log('The function body is hoisted');
}
```


&nbsp;
# Operators

## Arithmetic operators
Take numeric operands and return a single numeric value.
```javascript
10 + 5                                  // 15  - addition operator
10 - 5                                  // 5   - subtraction operator
10 / 5                                  // 2   - division operator
10 * 5                                  // 50  - multiplication operator
10 % 6                                  // 4   - remainder operator
```

## Operator precedence
Arithmetic operations follow the PEMDAS rule, which extends to - Paranthesis, Exponents, Multiplication, Division, Addition, Subtraction. Paranthesis being of highest precedence and subtraction of lowest.

Exponents aren't introduced until ES7.

A full description of operator precedence in Javascript can be found on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

``` javascript
(2 + 2) * 2                             // 8  - paranthesis precedence
2 * 2 + 2                               // 6  - multiplication precedence
```

## Unary operators
Take a single operand.

`typeof` returns the type of the operand.

`void` replaces the return value with undefined.

`+` and `-` converts the operand to a numeric data type.

`!` negates a boolean value. Equivalent to the logical NOT operator.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number. More on [bitwise operators](#Bitwise-operators).

```javascript
typeof 5                                // "number"
typeof Infinity                         // "number"
typeof NaN                              // "number"
typeof 'text'                           // "string"
typeof true                             // "boolean"
typeof undefined                        // "undefined"
typeof []                               // "object"
typeof {}                               // "object"
typeof null                             // "object"

void 1                                  // undefined

!true                                   // false

+'5'                                    // 5
-'5'                                    // -5

~ 10                                    // -11
~ -1                                    // 0
```

## Increment and Decrement Operators
Adds or subtracts one from its operand and returns a value. Does not work on literals.

Postfix returns the value before addition/subtraction.

Prefix returns the value after additioin/subtraction.

```javascript
var x = 1;       
x++                                     // returns 1  and x equals 2 - postfix increment
++x                                     // returns 3  and x equals 3 - prefix increment
x--                                     // returns 3  and x equals 2 - postfix decrement
--x                                     // returns 1  and x equals 1 - prefix decrement
```

## Comparison operators
Compare operands and returns a boolean value.

Operands of the equality operator `==` and inequality operator `!=` undergo type coercion if they are not of the same type.

The identity operator `===` and nonidentity operator `!==` compare the operands values and types.

Strings as operands are compared [lexicographically](#lexicographical-comparison).

```javascript
5 < 10                                  // true  - less than operator
5 > 10                                  // false - greater than operator
5 <= 5                                  // true  - less than or equal operator
5 >= 10                                 // false - greater than or equal operator
5 == '5'                                // true  - equality operator
1 != true                               // false - inequality operator
5 === '5'                               // false - identity operator
1 !== true                              // true  - nonidentity operator
```

## Logical operators
Compares boolean values.

`!` logical NOT operator.
`&&` logical AND operator.
`||` logical OR operator.

```javascript
!true                                   // false
true && false                           // false
true || false                           // true
```

## Ternary operator
Also called the conditional operator takes three arguments. It returns one of two values based on a boolean type condition.

__syntax__: `condition ? value1 : value2`

```javascript
var x = 5;
var y = 10;
x > y ? 'true' : 'lesser';              // "lesser"
```

## Comma operator
Evaluate multiple expressions as one and return the result of the final one.
```javascript
1 + 2, 2 + 2, 3 + 2                     // 5
```

## Bitwise operators
Perform operations on numbers as if they were a sequence of 32bits and returns a base 10 number.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number.

`&` performs AND operation on each pair of bits in the operands.

`|` performs OR operation on each pair of bits in the operands.

`^` performs XOR operation on each pair of bits in the operands.

`<<` the __left shift operator__ shifts the bits in the first operand to the left _x_ times, where _x_ is the value of the second operand. Bits shifted to the left beyond the 32 bit sequence are discarded. New bits shifted in from the right are of value _0_.

`>>` the __right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the 32 bit sequence are discarded. New bits shifted in from the left are copies of the previous left most bit.

`>>>` the __unsigned right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the 32 bit sequence are discarded. New bits shifted in from the left are of value _0_.

```javascript
~ -2                                    // 1
5 & 0                                   // 0
5 & -1                                  // 5
5 & 3                                   // 1
5 | 0                                   // 5
5 | -1                                  // -1
5 | 3                                   // 7
5 ^ 0                                   // 5
5 ^ -1                                  // -6
5 ^ 3                                   // 6
6 << 2                                  // 24
6 >> 2                                  // 1
-6 >> 2                                 // -2
6 >>> 2                                 // 1
-6 >>> 2                                // 1073741822
```

## Assignment operators
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
var x = 5;                              // x === 5
x += 3;                                 // x === 8
x -= 3;                                 // x === 5
x *= 3;                                 // x === 15
x /= 3;                                 // x === 5
x %= 3;                                 // x === 2
x <<= 3;                                // x === 16
x >>= 1;                                // x === 8
x >>>= 1;                               // x === 4
x &= 5;                                 // x === 4
x |= 9;                                 // x === 13
x ^= 10;                                // x === 7
```

Operators that are solely used with [objects](#Objects) and [functions](#Functions) have been ommited in this section.

&nbsp;
# Statements

## Control Flow
Controlling what is executed and in what order.

### block
Groups 0 or more statements. Used to execute multiple statements where one is expected.
``` javascript
{                                       // a standalone block statement
    var x = 5;
    var y = 10;
}

if(y > x) {                             // block statement coupled with an if statement
    y = 4;
    if(y < x)
        console.log('y is lesser than x');
}

```

### if...else
Executes code based on whether a condition is met. The `else if` clause enables executing different code blocks based on multiple conditions. You can specifiy a fallback if none of the conditions are met with the `else` clause.

To execute more than one statement based on a condition you will need to group them using a block statement.

If a condition is met following conditions are not checked. This is why the order of nested if...else statements is important if the conditions are not mutually exclusive. 

``` javascript
var x = 5;
var y = 10;

if (y > x)
    console.log(y);                     // one statement doesn't require grouping

if(y > x) {                             // multiple statements require grouping
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

### switch
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

### throw
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

### try...catch...finally
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

### break
Terminates the current statement and continues to the next one. Works with labels, loops and the switch statement. 
``` javascript

```

### continue
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

### Labels
An identifier for statements that can be later used with the `break` and `continue` statement. Label names follow the same rules as [variable names](#naming-convention).
``` javascript

// label with break
blockLabel: {
    var x = 5;
    break blockLabel;
    var y = x;                          // this will not be executed
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
        console.log(j*i);               // prints 1 2 4
    }
}
```

## Iteration
Repeating execution of code a set number of times or until a condition is met.

### while
Consists of a condition and statement. As long as the condition is evaluated to `true` the statement is executed.
``` javascript
var x = 5;
while(x > 0)
    console.log('Printing the number ' + x--);
```

### do...while
Consists of a condition and statement. Executes the statement and than evaluates the condition. If it evaluates to `true` the process is repeated.
``` javascript
do {
    console.log('This will always execute at least once');
} while(false);
```

### for
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

### for...in
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

## debugger
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
    var leftExp = Math.pow(((1 + sqrt5) / 2), n);
    var rightExp = Math.pow(((1 - sqrt5) / 2), n);
    debugger
    return (leftExp - rightExp) / sqrt5;
}
fibo(10);
```

The `function` and `return` statement are covered in the [function section](#functions)

&nbsp;
# Text

## Strings
A sequence of 0 or more characters. 

A String can either be a primitive value or a String object. The String object is what we call a [wrapper type](/resources/glossary.md#wrapper), since it wraps the primitive value in an object providing it with additional functionality(like methods).

When invoking a method with a primitive type:
* it is converted to an object type
* the method is executed on the object
* the object is converted back to its primitive type

This mechanism is called [auto-boxing](/resources/glossary.md#autoboxing).

Always work with string primitives and let the Javascript engine handle the conversion.

``` javascript
var str = 'string primitive';
str                                     // "string primitive"
typeof str                              // "string"
str.charAt(0);                          // "s"
typeof str                              // "string"

var strObj = new String('string object');
strObj                                  // String { "string object" }
typeof strObj                           // "object"
```

### Valid Strings
``` javascript
'single quotes'
"double quotes"
"quote's in strings"
'or quote\'s using an escape sequence'
'you can use a backslash for very long strings\ 
to make it multiline. The backslash will not be\
printed with the rest of the string'
'日本語'
```

### Concatenation
``` javascript
var str = '';
str += 'JavaScript';                    // str === "JavaScript"
str = str.concat(' ES', 5, ' is');      // str === "JavaScript ES5 is"
str + ' not that hard'                  // "JavaScript ES5 is not that hard"
```

### String Properties
__length__: number of [code units](/resources/glossary.md#code-unit) stored in a string.
__String.prototype__: reference to the String prototype. Allows making changes to all strings like adding new methods.

Strings are array-like constructs meaning they have a length and indexed elements.

``` javascript
var str = 'Hello';
var withSuroggate = 'In love with Javascript 💘';

str.length                              // 5
'abcdef'[1]                             // "b"

String.prototype.hasSurrogate = function() {
    var highSurrogate = /[Dd][89AaBb][0-9A-Fa-f]{2}/g;
    for(var i = 0; i < this.length; i++) {
        var codePoint = this.charCodeAt(i).toString(16);
        if(highSurrogate.exec(codePoint) != null)
            return true;
    }
    return false;
}

str.hasSurrogate()                      // false
withSurrogate.hasSurrogate()            // true
```

### String Methods
Keep in mind that strings are immutable. None of the below methods modifies the referenced String.

* Global Object Methods
    * `String.fromCharCode(code1[, ... , codeN])` - generates a string from 0 or more UTF-16 [code units](/resources/glossary.md#code-unit).
* Prototype Methods
    * `String.prototype.charAt(ind)` - returns the character at the specified index.
    * `String.prototype.charCodeAt(ind) - returns the UTF-16 code unit at the specified index in decimal number format.
    * `String.prototype.concat(str1[, ... , strN])` - returns the result of concatenating 1 or more strings.
    * `String.prototype.indexOf(search[, from])` - searches a string for another string. Returns the index at which the first occurence was found or -1 if the string was not found. Can optionally specify an index at which the search starts.
    * `String.prototype.lastIndexOf(search[, end])` - searches a string for another string. Returns the index at which the last occurence was found or -1 if the string was not found. Can optionally specify an index which is considered the final character of the string.
    * `String.prototype.localeCompare(str[, locales][, options])` - performs [lexicographical comparison](#lexicographical-comparison) on two strings. Returns a positive number if the referenced string is greater than the argument string, a negative number if it is lesser and 0 if they are equal. Can pass 0 or more [locales](/resources/glossary.md#locale) to treat the strings as region specific and a set of options(like case or accent sensitivity).
    * `String.prototype.slice(start[,end])` - cuts out part of a string and returns it. Can specify an index at which to start and end the operation. A negative start index counts from the end of the string.
    * `String.prototype.substring(start[, end])` - returns part of a string. Can specify where the operation starts and ends. Excludes the character at the end index. This method has some quirky behaviors:
        * a negative or `NaN` argument is converted to 0
        * if `start > end` the arguments are swapped
    * `String.prototype.split(delim[, limit])` - splits a string into an array of strings depending on a delimiter. Can limit the amount of splits. If an empty string is passed as the delimiter an array of all [code units](/resources/glossary.md#code-unit) in the string is returned. The delimiter can be a regular expression.
    * `String.prototype.toLowerCase()` - returns a new string with all upper case letters converted to lower case. When working with region specific characters use [toLocaleLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)
    * `String.prototype.toUpperCase()` - returns a new string with all lower case letters converted to upper case. When working with region specific characters use [toLocaleUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)
    * `String.prototype.trim()` - removes all whitespace and line terminator characters from the beginning and end of a string. To remove only on one side:
        * __Left__: `String.prototype.trimStart()` or `String.prototype.trimLeft()`. These methods are interchangeable.
        * __Right__: `String.prototype.trimEnd()` or `String.prototype.trimRight()`. These methods are interchangeable.
    * `String.prototype.valueOf()` - get the primitive value of a String object.


Methods involving [regular expressions](#regular-expressions) are covered in depth further on:
* [String.prototype.match()](#match-and-exec)
* [String.prototype.replace()](#replace)
* [String.prototype.search()](#search-and-test)
* [String.prototype.split()](#split)

``` javascript
// GLOBAL
String.fromCharCode();                  // ""
String.fromCharCode(0x49, 0x20, 0x2764, 0x20, 74, 83);
                                        // "I ❤ JS"

// PROTOTYPE
var hi = 'Hello';
var str = '🍕 + 💻 = 😄';
var meow = 'onomatopoeia';
var polish = 'ląd';
var english = 'lad';

hi.charAt(0);                           // "H"
str.charAt(0);                          // "�"
str.charAt(3);                          // "+"
hi.charCodeAt(0);                       // 72
str.charCodeAt(0);                      // 55356
str.charCodeAt(3);                      // 43

hi.concat(': ', str);                   // "Hello: 🍕 + 💻 = 😄"

meow.indexOf('o');                      // 0
meow.indexOf('top');                    // 5
meow.indexOf('o', 3);                   // 6
meow.indexOf('');                       // 0
meow.indexOf('z');                      // -1

meow.lastIndexOf('o');                  // 8
meow.lastIndexOf('o', 3);               // 2
meow.lastIndexOf('');                   // 12

'a1'.localeCompare('aa');               // -1
polish.localeCompare(english);          // 1
polish.localeCompare(english, 'en', {sensitivity: 'base'});
                                        // 0

str.slice(5);                           // "💻 = 😄"
str.slice(-2);                          // "😄"
str.slice(0, 2);                        // "🍕" - no pun intended
str.slice(-7, -5);                      // "💻"

str.substring(5);                       // "💻 = 😄"
str.substring(-2);                      // "🍕 + 💻 = 😄"
str.substring(0, 2);                    // "🍕"
str.substring(2, 0);                    // "🍕"
str.substring(-7, -5);                  // ""

str.split(' ');                         // ["🍕", "+", "💻", "=", "😄"]
str.split(' ', 2);                      // ["🍕", "+"]
meow.split('o');                        // ["", "n", "mat", "p", "eia"]
str.split('');                          // ["�", "�", " ", "+", " ", "�", "�", " ", "=", " ", "�", "�"]


'Hello'.toLowerCase();                  // "hello"
'Hello'.toUpperCase();                  // "HELLO"

'  HI  '.trim();                        // "HI"
'\nHI\n'.trim();                        // "HI"
'  HI  '.trimLeft();                    // "HI  "
'  HI  '.trimStart();                   // "HI  "
'  HI  '.trimRight();                   // "  HI"
'  HI  '.trimEnd();                     // "  HI"

new String('Hello').valueOf()           // "Hello"

```

### Escape sequences
A sequence of characters that begins with an escape character and has a different meaning then its literal representation.

`\r` `\b` `\v` `\f` only work in a specific context.

Comments contain results of executing the expressions __in a browser__.
``` javascript
'\ - escape character'                  // " - escape character"
'\\ - backslash'                        // "\ - backslash"
'\' - single quote'                     // "' - single quote"
'\" - double quote'                     // "" - double quote"
'\n - new line'                         // "
                                        //  - new line"
'\r - carriage return'                  // "
                                        //  - carriage return"
'\b - backspace'                        // " - backspace"
'\v - vertical tab'                     // " - vertical tab"
'\f - form feed'                        // " - form feed"
'\t - tab'                              // "	 - tab"
'\xFF - hexadecimal escape'             // "ÿ - hexadecimal escape"
```

### Unicode
The Javascript [RTE](/resources/glossary.md#runtime-environment) translates all strings to UTF-16 [code units](/resources/glossary.md#code-unit). What appears to be a single character can be comprised of several code units. 

This is important to remember when working with: 
* [regular expressions](#regular-expressions)
* string lengths
* character positions
* string comparison

In ES5 you can express code units using:
* `\xXX` __hexadecimal escape sequence__ which can represent [code points](/resources/glossary.md#code-point) from U+00 to U+FF.
* `\uXXXX` __unicode escape sequence__ which can represent code points from U+0000 to U+FFFF with a single code unit and any code point beyond that using [surogate pairs](/resources/glossary.md#surogate-pair).

``` javascript
'\xa9'                                  // "©"
'\xaa'                                  // "ª"
'\u0061'                                // "a"
'\u02da'                                // "˚"
'\u00e5'                                // "å"
'\uD83D\uDC98'                          // "💘"
'\ud83c\udfcb'                          // "🏋"
"🚵‍".length                             // 3
'I 😍 💻'.charAt(2)                     // "�"
```

### Lexicographical Comparison
When comparing two strings with a [comparison operator](#comparison-operators) they are converted to UTF-16 [code units](/resources/glossary.md#code-unit) and each code unit of both strings is compared starting from those at index 0.

If at any point the code units are not equal the result is returned and the remaining characters are not compared.

``` javascript
'baa' > 'azzzzz'                        // true 
'12123123123' < 'a'                     // true
'💘' >= '🏋'                            // true
'8999999' <= '9'                        // true
'Hello ' == 'Hello'                     // false
'anotcompared' != 'znotcompared'        // true
'a' === '\u0061'                        // true
'hi' !== '\u0068\u0069'                 // false
```

## Regular Expressions
Or regexp are objects containing a pattern that is searched for in strings. A regexp can either return the first match or it can search the whole string if a _global_ flag is set.

### Initialization
A regular expression can be initialized through a literal or a constructor function:
* __literal__ is better if the reg exp is a constant
* __constructor function__ is better if the reg exp may change

The constructor function takes a source string(or another regexp) as the first argument and [flags](#flags) string as optional second. Any escape sequence will be evaluated before it is stored as a pattern which might result in an incorrect regular expression. 

``` javascript
var regLiteral = /[A-Z][a-z]{,10}/;
var literalFlag = /abc/g;
var regConstructor = new RegExp('[A-Z][a-z]{,10}');
var regEscapeSeq = new RegExp('\ta\t');
                                        // /	a	/
var regWithFlags = new RegExp('abc', 'gi');
var anotherRegexp = new RegExp(regLiteral);

regLiteral instanceof RegExp            // true
regConstructor instanceof RegExp        // true
```

### Properties
A RegExp object has various properties of which most are read-only. Read only properties can be configured during initialization, but not after.

__Read-only__:
* `source` - the source string of the regular expression.
* `flags` - a string representing assigned [flags](#flags).
* `global` - boolean value indicating whether the _global flag_ is set.
* `ignoreCase` - boolean value indicating whether the _case-insensitive_ flag is set.
* `multiline` - boolean value indicating whether the _multi-line_ flag is set.

__Writable__:
* `lastIndex` - indicates the index at which the last matched substring ends in a global search.

``` javascript
var regexp = /hi/gim;

regexp.source                           // "hi"
regexp.flags                            // "gim"
regexp.global                           // true
regexp.ignoreCase                       // true
regexp.multiline                        // true

regexp.flags = "g";                     // does not change the read only property
regexp.flags                            // "gim"

var newReg = new RegExp(regexp, 'g');

newReg.flags                            // "g"

var str = 'Hi there, hi friend, HIIII!';
regexp.lastIndex                        // 0
regexp.exec(str)                        // ["Hi", index: 0]
regexp.lastIndex                        // 2
regexp.lastIndex = 12                   // this will move the search past 2nd "hi"
regexp.exec(str)                        // ["HI", index: 21]
```

### Patterns
Patterns are comprised of __special characters__ that have special meaning and __non-special characters__ which are treated literally.

__Quantifier__: special characters that determine the number of matching elements `*`, `+`, `?`, 

__Greedy quantifier__: matches the maximum number of characters.

__Lazy quantifier__: matches the minimum number of characters.

__Zero-Length Assertions__: assert if the subexpression matches or not, but does not add it to the matched string.  

For clarification the phrase __substring__ in the following definitions means a string of 1 or more characters. It can be a part of a string, but in some cases it could be the whole string.

Special Characters
* `\` - if preceeding a special character indicates it should be treated literally. If preceeding a non-special character gives it a special meaning.
* `^` - matches the beginning of a string. Performs zero-length assertion. Works differently if enclosed in brackets.
* `$` - matches the end of a string. Performs zero-length assertion.
* `*` - matches prior element 0 or more times. Greedy quantifier.
* `+` - matches prior element 1 or more times. Greedy quantifier.
* `?` - matches prior element 0 or 1 times. Greedy quantifier. Used after `*`, `+`, `?` or `{}` transforms them into lazy quantifiers.
* `{n}` - matches if prior element occurs exactly _n_ times.
* `{n,m}` - matches if prior element occurs _n_ to _m_ times. If _m_ is omitted it is treated as infinity.
* `.` - matches a single character.
* `(exp)` - __capturing paranthesis__ allows using a subexpression as a single element. The subexpression is assigned an index(1-n) that can be referenced in the [match method](#replace) `\n` where `n` is that index.
* `(?:exp)` - __non-capturing paranthesis__ matches a subexpression without indexing it.
* `el(?=exp)` - __positive lookahead__ matches `el` if followed by a match to the subexpression. Performs zero-length assertion.
* `el(?!exp)`- __negative lookahead__ matches `el` if not followed by a match to the specified subexpression. Performs zero-length assertion.
* `el1|el2` - attempts to match `el1` or `el2`. If `el1` is matched `el2` is not.
* `[abc]` - __character set__ matches any of the characters within the brackets. Special characters are treated literally when in a character set.
* `[^abc]` - __negated character set__ matches any characters that are not within the brackets. Special characters are treated literally when in a negated character set.
* `\b` - __word boundary__ marks the beginning/end of a string or word. It does not match characters but sets rules for following or preceeding subexpressions. Performs zero-length assertion.
* `\B` - __non-word boundary__ marks a position that is not the beginning/end of a string or word. Performs zero-length assertion.
* `\cL` - matches control characters. Replace `L` with a character from A to Z.
* `\d` - matches any digit.
* `\D` - matches any non-digit.
* `\s` - matches a whitespace character including some escape sequences like `\f`, `\n`, `\r`, `\t`, `\v`.
* `\S` - matches a non-whitespace character.
* `\w` - matches any alphanumeric character and an underscore.
* `\W` - matches any character that is not alphanumeric or an underscore.
* `\uXXXX` - matches a code unit. Replace each X with a hexadecimal digit.
* `[\b]` - matches a backspace.
* `\f` - matches a form feed.
* `\n` - matches a line feed.
* `\r` - matches a carriage return.
* `\t` - matches a horizontal tab.
* `\v` - matches a vertical tab.
* `\0` - matches a null character.

All the below example regular expressions have the [global flag](#flags) assigned to catch all matches.
``` javascript
var noSpecial = /abc/g;
var backslash = /\^/g;
var carrot = /^start/g;
var dollar = /end$/g;
var asterisk = /a*bc/g;
var plus = /a+bc/g;
var question = /abc?/g;
var nTimes = /a{3}/g;
var nTOm = /a{1,3}/g;
var nORmore = /a{2,}/g;
var dot = /../g;
var capture = /(one)(two)/g;
var noncapture = /(?:<p>)([\s\S]+)(?:<\/p>)/g;
var posLookahead = /hello(?=\d)/g;
var negLookahead = /hello(?!\d)/g;
var or = /(ab)|(bc)/g;
var set = /[A-C]+ [^a-c]+/g;
var word = /\b.+?\b/g;
var nonword = /\B.+\B/g;
var inword = /\B\w+\B/g;
var control = /\cC/g;
var digits = /\d+ \D+/g;
var whitespaces = /\s+ \S+/g; 
var alphanumerics = /\w+ \W+/g;
var unit = /\u2297/g;
var escapeSeq = /[\b] \f \n \r \t \v/g;
var nullChar = /\0/g;

'aabcc'.match(noSpecial);               // ["abc"]
'a bcdefg'.match(noSpecial);            // null

'escaped ^'.match(backslash);           // ["^"]
'start match'.match(carrot);            // ["start"]
'match end'.match(dollar);              // ["end"]

'aaaabcbc'.match(asterisk);             // ["aaaabc", "bc"]
'ab'.match(asterisk);                   // null

'aaaabc'.match(plus);                   // ["aaaabc"]
'bc'.match(plus);                       // null

'abaabcc'.match(question);              // ["ab", "abc"]

'aaaabbaaaa'.match(nTimes);             // ["aaa", "aaa"]
'a'.match(nTimes);                      // null

'babaaab'.match(nTOm);                  // ["a", "aaa"]

'abaaaaab'.match(nORmore);              // ["aaaaa"]
'ab'.match(nORmore);                    // null

'ab_!\r\n'.match(dot);                  // ["ab", "_!"]

'onetwo'.match(capture);                // ["onetwo"]
'onetwo'.replace(capture, '$2 $1');     // "two one"
'<p>text</p>'.replace(noncapture, '$1');// "text"

'hello123'.match(posLookahead);         // ["hello"]
'hello123'.match(negLookahead);         // null

'abc'.match(or);                        // ["ab"]

'ABC ABC'.match(set);                   // ["ABC ABC"]

// Only included matches for brevity
'Some text 123'.match(word);            // ["Some", " ", "text", " ", "123"]
'Some text 123'.match(inword);          // ["om", "ex", "2"]
'Some text 123'.match(nonword);         // ["ome text 12"]

'\x03'.match(control);                  // [""]

'12345 A_,!.'.match(digits);            // ["12345 A_,!."]
' \t\v\t 0A+'.match(whitespaces);       // [" 		 0A+"]
'aA12_ @#%^'.match(alphanumerics);      // ["aA12_ @#%^"]

'⊗'.match(unit);                        // ["⊗"]
'\b \f \n \r \t \v'.match(escapeSeq);   // ["  ↵ 
                                        // 	 "]
'\0 \x00'.match(nullChar);              // ["", ""]
```

### Flags
Allow setting rules for how the regular expressions are matched.

`g` - _global_ search finds all matches.
`i` - _ignores_ letter casing.
`m` - _multiline_ treats each line in a string as a seperate string.

``` javascript
var glob = /oo/g;
var casing = /howdy/i;
var multi = /^And/m;

glob.exec('wooden woodchuck');          // ["oo", index: 1]
glob.exec('wooden woodchuck');          // ["oo", index: 8]
casing.exec('HOWDY there');             // ["HOWDY", index: 0]
multi.exec('This\nAnd that\n');         // ["And", index: 5]
```

### Search and Test

`RegExp.prototype.test(string)` - returns a boolean value indicating if a regexp match was found in a string.

`String.prototype.search(regexp)` - searches a string from beginning to end. Returns the index at which a substring matching a passed regular expression is found. Returns -1 if no match is found.

``` javascript
var testreg = /\s+/;
var searchreg = /\s+/;
var str = 'Search whitespace';

testreg.test(str);                      // true
str.search(searchreg);                  // 6
```

### Match and Exec
`RegExp.prototype.exec(string)` - searches a string form beginning to end against a regular expression. Returns an array containing information regarding the match or null if no match is made.

`String.prototype.match(regexp)` - searches a string form beginning to end against a regular expression. Returns an array containing information regarding the match or null if no match is made.

These two methods behave differently with global regular expressions.
* `exec()` - each consecutive call starts searching where the last match ended. 
* `match()` - returns an array containing all matched substrings.

``` javascript
var regExec = /\d{3}/g;
var regMatch = /\d{3}/g;
var str = '123 and 456 and 789';

regExec.exec(str);                      // ["123", index: 0]
regExec.exec(str);                      // ["456", index: 8]
regExec.exec(str);                      // ["789", index: 16]
regExec.exec(str);                      // null

str.match(regMatch);                    // ["123", "456", "789"]
```

### Matching in a loop
Matching in a loop can be done using the `exec()` method on a global regular expression.

__Syntax__:
``` javascript
var arr;
while (arr = regexp.exec(string)) {
    // each iteration stores the match details in arr
}
```

__Warning__ - the following results in an infinite loop:
* using a RegExp literal in the while condition
* using a different method than `exec()`
* using a non-global regular expression

Below is an example `allMatch()` method which checks a string against a regular expression and prints out any match. The method sets the regular expressions [flag](#flags) to global to avoid an infinite loop.

``` javascript
String.prototype.allMatch = function(regexp) {
    if(!(regexp instanceof RegExp)){
        return [];
    }
    var flags = (regexp.flags.indexOf('g') != -1) ? regexp.flags : regexp.flags + 'g';
    var re = new RegExp(regexp, flags);
    var resultArr;
    while (resultArr = re.exec(this)) {
        console.log(resultArr[0]);
    }
}

var re = /\b[a-zA-Z]{3}\b/;
var str = 'one two three four five six';

str.allMatch(re);                       // "one"
                                        // "two"
                                        // "six"
```

### Split
`String.prototype.split(delim[, limit])` - splits a string into an array of strings depending on a delimiter. Can limit the amount of splits. The delimiter can be a regular expression.

``` javascript
var re = /[ ;]+/;
var csv = 'name  ;id  ;salary ;  department';
csv.split(re);                          // ["name", "id", "salary", "department"]
```

### Replace
`String.prototype.replace(strMatch | regexp, strRep | func)` - replaces substrings within a string.

Substrings are matched according to:
* __strMatch__ - a substring. The first match found starting from the beginning is replaced.
* __regexp__ - a regular expression. If a global regular expression is passed all matches are replaced.

Matches are replaced:
* __strRep__ - with a string that can contain special characters:
    * `$&` - inserts the matched substring.
    * ``$` `` - inserts all characters preceeding the matched substring.
    * `$'` - inserts all characters following the matched substring.
    * `$n` - replace n with an index to insert a captured substring. Only works when the match is made according to a regular expression containing __capturing paranthesis__.
    * `$$` - inserts '$'.
* __func__ - using a function that can have the following parameters.
    * `match` - the matched substring.
    * `s1 ... sn` - substrings captured using __capturing paranthesis__.
    * `index` - the index at which the match was made.
    * `str` - the whole inspected string.

``` javascript
// Replacing a matched string with another string
var fileName = 'products.txt; wontChange.txt';
fileName.replace('.txt', '.csv');       // "products.csv; wontChange.txt"

// Replacing a matched string with a functions return value
var example = '> x';
example.replace('x', function(match, index, str){
    return "match: '" + match + "'; index: '" + index + "'; str: '" + str + "'";
});                                     // "> match: 'x'; index: '2'; str: '> x'"

// Replacing a matched regular expression with a string
var name = '!@# Two words ^&*';
var re = /(\w+)\s(\w+)/;
name.replace(re, "\n $$& = '$&'\n $$` = '$`'\n $$' = '$''\n $$1 = '$1'\n $$2 = '$2'\n");
                                        // "!@# 
                                        //  $& = 'Two words'
                                        //  $` = '!@# '
                                        //  $' = ' ^&*'
                                        //  $1 = 'Two'
                                        //  $2 = 'words'
                                        //  ^&*"

// Replacing a matched regular expression with a functions return value
var prices = 'bread 2€, milk 1.80€, salami 4€';
var re = /(\d+\.?\d*)€/g;
prices.replace(re, function(match, s1){
    return (s1 * 1.14).toFixed(2) + '$';
});                                     // "bread 2.28$, milk 2.05$, salami 4.56$"
```

&nbsp;
# Arrays
Array is a [global object](#global-objects) used in the creation of arrays.

Instances of Array store multiple values of various types in one variable.

## Array Initialization
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

## Array Indexes
Each element in an array is assigned an index value which represents its position in the array. Indexes start from `0` and end at `array.length - 1`.
``` javascript
var arr = [1, 2, 3];

arr[0]                                  // 1
arr['1']                                // 2
arr[arr.length - 1]                     // 3
arr[100]                                // undefined
```

## Array Properties
__length__: number of values stored in an array. Reducing the lengths value below the number of elements will delete those with indexes exceeding the new value.
__Array.prototype__: reference to the Array prototype. Allows making changes to all arrays like adding new methods.

``` javascript
var arr = [1, 2, undefined, 'one', 3, 4, 5, null, false];

arr.length                              // 9

arr.length = 7;                         // last null and false deleted

// Add method that returns the sum of all numbers in an array
Array.prototype.sumNums = function() {
    var sum = 0;
    for(var i = 0; i < this.length; i++) {
        sum += (typeof this[i] === 'number' ) ? this[i] : 0;
    }
    return sum;
}

arr.sumNums();                          // 15
```

## Array Methods

### Global Object Methods
Methods callable through the Array [global object](#global-objects).

`Array.isArray(arg)` - return boolean value indicating if passed argument is an Array instance.

`Array.of(arg1 ... [argN])` - create an Array instance from passed arguments.

``` javascript
Array.isArray('string');                // false
Array.isArray([1, 2, 3]);               // true

Array.of(1, 'one', true);               // [1, "one", true]
Array.of([1], [[2, 3]]);                // [[1], [[2, 3]]]
```

### Prototype Methods
Methods callable through instances of Array.

* [Accessor](/resources/glossary.md#accessor) Methods
    * `Array.prototype.concat(arr[, ... , arrN])` - merges 2 or more arrays and returns the result.
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
    * `Array.prototype.splice(start[, delete][,el1 ... elN])` - removes, replaces and/or adds elements. Returns an array containing any removed elements and an empty array if none were deleted.
        * __start__: index at which the operations should start. A negative value starts from the end of the array with -1 being the last element.
        * __delete__: number specifying how many elements should be deleted. If ommited deletes all elements from index equal to __start__ value to end of array. If less than 1 no elements are deleted.  
        * __el1 ... elN__: specify 0 or more elements that should replace existing elements and/or be added to the array.
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

first.concat(second);                   // [1, 2, 3, 4, 5, 6]
first.concat(second, 7, [8]);           // [1, 2, 3, 4, 5, 6, 7, 8]

arr.indexOf(2);                         // 2
arr.indexOf(2, 3);                      // 5
arr.indexOf(10);                        // -1

arr.lastIndexOf(1);                     // 4
arr.lastIndexOf(1, 3);                  // 1
arr.lastIndexOf(10);                    // -1

arr.slice(4);                           // [1, 2]
arr.slice(0, 3);                        // [0, 1, 2]
arr.slice(0, 4);                        // [0, 1, 2, 0]

arr.join('');                           // "0120123"
arr.join('-');                          // "0-1-2-0-1-2-3"
arr.join('del');                        // "0del1del2del0del1del2del3"

arr.toString();                         // "0,1,2,0,1,2,3"

arrLoc.toLocaleString("en-US", {timeZone: "America/New_York"});
                                        // "1/2/2019, 10:12:00 AM"

// MUTATOR
var emptyArr = [];
var array = ['one', 'two', 'three'];
var sortAsString = [8, 9, 70, 60];
var spArr = [1, 2, 3];

emptyArr.pop();                         // undefined
array.pop();                            // 'three' - array is ["one", "two"]
array.shift();                          // 'one'   - array is ["two"]
array.push(2);                          // 2       - array is ["two", 2]
array.unshift('one', 1);                // 4       - array is ["one", 1, "two", 2]
array.reverse();                        // [2, "two", 1, "one"]
array.sort();                           // [1, 2, "one", "two"]
sortAsString.sort();                    // [60, 70, 8, 9]
sortAsString.sort(function(a, b) {
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
});                                     // [ 8, 9, 60, 70]
                                        //asdasd
spArr.splice(1);                        // [2,3]    - spArr is [1]
spArr.splice(1, 0, 2, 3);               // []       - spArr is [1, 2, 3]
spArr.splice(-2, 1, 'two');             // [2]      - spArr is [1, 'two', 3]

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

allNum.every(isNum);                    // true
notAllNum.every(isNum);                 // false
allNum.some(isNum);                     // true
notAllNum.some(isNum);                  // true

allNum.filter(isNum);                   // [1, 2, 3, 4, 5]
notAllNum.filter(isNum);                // [1]

shortArr.forEach(printParams);
                                        // ["one","two"]: element at index 0 has value "one"
                                        // ["one","two"]: element at index 1 has value "two"

mixedArr.map(numConvert);               // [1, 1, 1, 1, 0, 0, 0, NaN, Infinity]

mixedArr.reduce(integerConvert);        // 4
mixedArr.reduce(integerConvert, 6);     // 10

[1, 1, 2, 3, 1, 3].reduce(function(tally, cur, ind) {
    tally[cur] = (tally[cur] + 1 || 0);
    return tally;
}, {})                                  // {1: 2, 2: 0, 3: 1}

['a', 'b', 'c', 'd', 'e'].reduce(function(str, letter) {
    return str + letter;
});                                     // "abcde"

['a', 'b', 'c', 'd', 'e'].reduceRight(function(str, letter) {
    return str + letter;
}, 'Reversed: ');                       // "Reversed: edcba"
```


## Array type coercion
__Boolean__: Always converts to `true`.
__String__: Converts all values to strings and concatenates them with a comma delimiter.
__Number__: Returns `NaN` if more than one value in array. An empty array returns `0` and an array with a single string or numeric value returns that value after numeric conversion.

``` javascript
var emptyArr = [];
var falseArr = [false];
var numArr = [2];
var numStrArr = ['5'];
var nestedArr = [1, 2, 3, ['one', 'two']];

Boolean(emptyArr);                      // true
Boolean(falseArr);                      // true
String(emptyArr);                       // ""
String(nestedArr);                      // "1,2,3,one,two"
Number(emptyArr);                       // 0
Number(falseArr);                       // NaN
Number(numArr);                         // 2
Number(numStrArr);                      // 5
Number(nestedArr);                      // NaN
```


&nbsp;
# Functions
A block of code that performs a task. Can take values as arguments and return a single value. Functions in Javascript are objects with built-in properties and methods.

## Function Methods
`Function.prototype.apply(this[, argList])` - calls a function with a specific `this` value. Function arguments can be passed within a single array. Returns the result of the function execution.
`Function.prototype.call(this[, arg1 ... argN])` - calls a function with a specific `this` value. Accepts an argument list. Returns the result of the function execution.
`Function.prototype.bind(this)` - returns a function with a preset `this` value.
`Function.prototype.toString()` - returns a string containing the functions source code.

Most of these methods concern setting the context in which a function is called. More on `this` can be found in the [Object section](#this-keyword).

``` javascript
// apply()


// call()


// bind()
var bmw = 

function drive() {
    this.speed;
    this.state = '';
}

// toString()
function example(str) {
    console.log('some example logic ' + str);
}

example.toString()                      // "function example(str) {
                                        //    console.log('some example logic ' + str);
                                        // }"

```

## Function Declaration
Declaring a named function in the [global scope](#scope) or in the top level of a block statement results in a function declaration.

Has to start with the `function` statement, followed by an identifier, a parameter list and a function body. 

Function declarations are [hoisted](#hoisting) meaning they can be accessed anywhere within the scope in which they where declared.

``` javascript
function identifier (param1, param2) {
    var x = 'this is the function body';
    return x;
}

function a () {
    function b () {
        console.log('declaration - top level of a block statement');
    }
}

if (true) {
    function func () {
        console.log('declaration - top level of a block statement');
    }
}

a instanceof Function;                  // true
a.constructor === Function;             // true 

```

## Function Expression
Declaring a function wherever a value is expected results in a function expression. A function expression can be anonymous or named.

Naming a function allows it to reference itself and provides a better debugging experience. The name is displayed in error messages which in some cases simplifies pinpointing the source of a bug.

By wrapping a function expression in paranthesis and invoking it you create a construct called an [IIFE](#IIFE).

Function expressions are not [hoisted](#hoisting).
``` javascript
var func = function() {
    console.log('expression - assigned as a value');
}

var fibonacci = function fibo(n){
    if(n < 1)
        return 0;
    else if(n === 1 || n === 2)
        return 1;
    return fibo(n - 1) + fibo(n - 2);   // not possible with anonymous function
}

(function(){                            // an IIFE with an anonymous function
    throw new Error('Some error has occurred');
})();
/*
    VM1210:2 Uncaught Error: Some error has occurred
    at <anonymous>:2:11
    at <anonymous>:3:3
*/

(function named(){                      // an IIFE with a named function
    throw new Error('Some error has occurred');
})();
/*
    VM72:2 Uncaught Error: Some error has occurred
    at named (<anonymous>:2:11)
    at <anonymous>:3:3
*/
```

## First Class Functions
In Javascript functions are __first class citizens__ meaning they can be assigned as a value, passed as an argument and returned by a function - just like a variable.

__Callback function__:\
A function passed as an argument. Callback functions are run [asynchronously](#asynchronicity).

__Higher order function__:\
A function that returns a function and/or takes 1 or more functions as arguments. 

``` javascript
function withCallback(x){
    console.log('does something');
    x();
}

var funcVarNamed = function func() {
    console.log('named function assigned as a value');
}

var funcVarAnon =  function() {
    console.log('anonymous function assigned as a value');
}

withCallback(function(){
    console.log('anonymous callback function');
});

withCallback(function namedCallback(){
    console.log('named callback function');
});

function higherOrderFunction(a) {
     return function b(b) {
        return function c(c) {
            return a + b + c;
        }
    }
}

higherOrderFunction(1)(2)(3);           // 6
```

## Recursive Functions
Functions that call themselves. This is an alternative way of looping.

Recursion can result in a cleaner solution when solving certain types of problems. A good example are [Tree traversal](#https://en.wikipedia.org/wiki/Tree_traversal) algorithms.

Be careful when using recursion:
* just like an infinite loop you can cause __infinite recursion__
* nested recursions build up on the call stack and too many can cause a stack overflow error
``` javascript
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    return n * factorial(n - 1);
}

factorial(8);                           // 40320
```

## IIFE
An Immediately Invoked Function Expression is a function that is executed immediately after it is defined. Variables within the function are confined to its [scope](#scope). This is a strong feature because: 
* you can create private variables which are only accessible within the function
* you can choose what you expose to external use through the `return` statement
* variables contained in a function do not polute the global namespace

IIFE's are used for:
* [namespacing](/resources/glossary.md#namespacing)
* [modules](/resources/glossary.md#module)
* data privacy

The modules code snippet is an example of the __Module Pattern__.

Both modules and data privacy work because of [closures](#closures).

If you can use ES6 make sure to check out [modules](/javascript/md/es6.md#modules) implemented in that spec before using an IIFE.

``` javascript
// namespacing
var x = (function($, global, document) {
    /* 
        do some jquery stuff without
        polluting the global namespace
        with a $ identifier  
    */
})(jQuery, window, document);

// modules
var createUser = (function() {
    'use strict';

    var privProp = 'privProp cannot be assigned a new value';
    var pubProp = 'pubProp can be assigned a new value';

    function privFunc() {
        console.log(privProp);
    }

    function pubFunc() {
        privFunc();
    }

    return {
        showPriv: pubFunc,
        mutateProp: pubProp
    };

})();

createUser.showPriv();                  // privProp cannot be assigned a new value
createUser.mutateProp = 'Changed the pubProp property';


// data privacy
var genId = (function() {
    var curId = 10000;
    return function() {
        return ++curId;
    }
})();
genId();                                // 10001
genId();                                // 10002
genId();                                // 10003
```

## Closures
A closure is created when a higher order function returns its inner function as a value and that value is assigned to an object property or a global variable. 

``` javascript
/* 
    The eclosing and innner function where given names for clarification.
    They could just as well be anonymous.
*/
function enclosing(a) {
    var x = 10;
    return function inner() {
        x *= a;
        return x;
    }
}

var globVar1 = enclosing(3); 
var globVar2 = enclosing(5); 
```

The enclosing functions scope chain is preserved 'as is' at the time of assignmemt creating an isolated environment.

``` javascript
/*
    As seen below the closure assigned to globVar1 
    and globVar2 are two seperate environments
*/
globVar1();                         // 30
globVar1();                         // 90
globVar1();                         // 270
globVar2();                         // 50
globVar2();                         // 250
globVar2();                         // 1250
```

This is an extremely powerful technique. It enables:
* __Encapsulation__: grouping data into a single unit.
* __Abstraction__: selectively exposing that data.

``` javascript

```


## Currying

``` javascript

```

## Pure functions

``` javascript

```

## Global Functions
Functions that are built into Javascript and are available in the global scope.

### decodeURI
Decodes escape sequences in a Uniform Resource Identifier, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI';
decodeURI(URI);                         // "https://google.com/search?is ! @ # $ % valid in a URI"
```

### decodeURIComponent
Decodes escape sequences in part of a Uniform Resource Identifier.
```javascript
var URIComponent = 'is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI'
decodeURIComponent(URIComponent);       // is ! @ # $ % valid in a URI
```

### encodeURI
Replaces special characters in Uniform Resource Identifier with escape sequences, but ommits `,` `/` `?` `:` `@` `&` `=` `+` `$` `#`.
```javascript
var URI = 'https://google.com/search?is ! @ # $ % valid in a URI';
encodeURI(URI);                         // "https://google.com/search?is%20!%20@%20#%20$%20%25%20valid%20in%20a%20URI"
```

### encodeURIComponent
Replaces special characters in part of a Uniform Resource Identifier with escape sequences.
```javascript
var URIComponent = 'is ! @ # $ % valid in a URI';
encodeURIComponent(URIComponent);       // "is%20!%20%40%20%23%20%24%20%25%20valid%20in%20a%20URI"
```

### eval
Evaluates a string as an expression, statement or statements. If the string contains one or more statements they are executed after evaluation. 
```javascript
eval('5');                              // 5
eval('5 * 3');                          // 15 
eval('5 + 5; 2 + 2');                   // 4
```

### isFinite
Check if passed value is a finite number.
```javascript
isFinite(1/0);                          // false
isFinite(1.111111);                     // true
```

### isNaN
Check if passed value is not a number. 
```javascript
isNaN();                                // true
isNaN('five');                          // true
isNaN(5);                               // false
```

### Number
Converts passed value to a number.
```javascript
Number(true);                           // 1
Number(5 + 4);                          // 9
Number('5 + 4');                        // NaN
Number('10');                           // 10
```

### parseFloat
Parses passed value and returns a floating point number.
```javascript
parseFloat(1);                          // 1
parseFloat('1');                        // 1
parseFloat(011100);                     // 4672 - 0 prefix parses as octal
parseFloat(0x1F);                       // 31   - 0x prefix parses as hexadecimal
parseFloat('2.119');                    // 2.119
parseFloat('2text111');                 // 2
parseFloat('text11');                   // NaN
parseFloat(true);                       // NaN
parseFloat(undefined);                  // NaN
```

### parseInt
Parses passed value and returns an integer. Also takes an optional second argument which specifies what numeral system should be used.
```javascript
parseInt(1.83);                         // 1
parseInt('1984');                       // 1984
parseInt('111', 2);                     // 7  - parsed as binary
parseInt(011);                          // 9  - 0 prefix parses as octal
parseInt(11, 8);                        // 9  - parsed as octal
parseInt(0x1A);                         // 26 - 0x prefix parses as hexadecimal
parseInt('1A', 16);                     // 26 - parsed as hexadecimal
parseInt('1text234');                   // 1
parseInt('text1234');                   // NaN
parseInt(true);                         // NaN
```

### String
Converts passed value to a string.
```javascript
String(null);                           // "null"
String(5 + 4);                          // "9"
String(true);                           // "true"
```

&nbsp;
# Objects

## Object instantiation

## Constructor Function

### new operator
``` javascript

```

## Properties
``` javascript

```

### Property accessors
``` javascript

```

### this keyword

### in operator
``` javascript

```

### delete operator
``` javascript

```

## instanceof operator


## Object methods

## Object type coercion
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

Boolean(John);                          // true
String(John);                           // "John Smith"
Number(John);                           // 123456
```


&nbsp;
# Global Objects
Built-in objects that are available in the global scope.

## Error

### User Defined Errors
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
# Asynchronicity



&nbsp;
# Strict mode


