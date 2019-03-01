This is something between a reference and a guide. Not quite a guide since you won't always find explanations of common use cases or why a concept is important. More than a reference because you have definitions of concepts paired with examples.

The following concerns the ES5 specification and its predecessors. Deprecated features are omitted.

If the description is not enough make sure to check out the examples and try it yourself in a browser console.

Credits: 
* [MDN](https://developer.mozilla.org/en-US/) for creating a huge knowledge base for seasoned and aspiring web developers
* [Eric Elliott](https://medium.com/@_ericelliott) for sharing your vast knowledge and showing devs a world without class inheritance

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
    * [Memory Management](#memory-management)
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
        * [Instantiation](#instantiation)
        * [Properties](#properties)
        * [Patterns](#patterns)
        * [Flags](#flags)
        * [Search and Test](#search-and-test)
        * [Match and Exec](#match-and-exec)
        * [Matching in a loop](#matching-in-a-loop)
        * [Split](#split)
        * [Replace](#replace)
* [Arrays](#Arrays)
    * [Array Instantiation](#array-instantiation)
    * [Array Indexes](#array-indexes)
    * [Array Properties](#array-properties)
    * [Array Methods](#array-methods)
        * [Global Object Methods](#global-object-methods)
        * [Prototype Methods](#prototype-methods)
    * [Array type coercion](#array-type-coercion)
* [Functions](#Functions)
    * [arguments](#arguments)
    * [Function Methods](#function-methods)
    * [Function Declaration](#function-declaration)
    * [Function Expression](#function-expression)
    * [First Class Functions](#first-class-functions)
    * [Recursive Functions](#recursive-functions)
    * [IIFE](#iife)
    * [Closures](#closures)
    * [Currying](#currying)
    * [Pure Functions](#pure-functions)
    * [Global Functions](#global-functions)
* [Objects](#Objects)
    * [Instantiation](#instantiation-1)
    * [Properties](#properties-1)
    * [Methods](#methods)
    * [Cascading Methods](#cascading-methods)
    * [Global Object](#global-object)
    * [this Keyword](#this-keyword)
    * [Constructor Function](#constructor-function)
    * [Factory Function](#factory-function)
    * [Prototype](#prototype)
    * [Prototype Chain](#prototype-chain)
    * [Inheritance](#inheritance)
        * [Differential Inheritance](#differential-inheritance)
        * [Class Inheritance](#class-inheritance)
        * [Concatenative Inheritance](#concatenative-inheritance)
        * [Functional Inheritance](#functional-inheritance)
    * [Property Descriptor](#property-descriptor)
    * [Object Methods](#object-methods)
    * [Object Related Operators](#object-related-operators)
    * [Object Type Coercion](#object-type-coercion)
* [Native Objects](#native-objects)
    * [Date](#date)
    * [Error](#error)
    * [JSON](#json)
    * [Math](#math)
    * [Number](#number-2)
* [Asynchronicity](#asynchronicity)
* [Strict mode](#strict-mode)
    * [Invocation](#invocation)
    * [Features](#features)


&nbsp;
# Conceptual
Concepts every JS developer should know and understand.

## Comments
An annotation that is ignored by the [interpreter](/resources/glossary.md#interpreter). Are often used for following purposes:
* inline documentation that makes your intentions clear to other developers
* disabling code for quick debugging

To fully utilize the power of comments check out a documentation generator like [JSDocs](/javascript/md/misc.md#jsdocs)
``` javascript
// this is a single line comment
// single line comments will be used for brief descriptions in this guide
//> single line comment with greater than is a returned value in this guide

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
As of ES5 JavaScript consists of five primitive and one non-primitive data type.

You can also store multiple values of any data type in a single container called an array.

### Number
Floating point numbers `2.1231`, integers `100`, positive infinity `Infinity`, negative infinity `-Infinity` and invalid numeric value `NaN`.
``` javascript
var age = 28;
var height = 1.87;
var posInf = 1/0;                       //> Infinity
var negInf = 1/-0;                      //> -Infinity
var notANumber = 1/'text';              //> NaN
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

Expressions can be used anywhere a value is expected.

If an expression ends with a semicolon it becomes an expression statement. An expression statement cannot be used as a value - `console.log(2 + 2;)` would result in an error.

All of these are valid expressions.
``` javascript
2 + 2 * 2                               //> 6
console.log()                           //> undefined
'text'                                  //> "text"
someVariable                            // the variables value
undefined == console.log()              //> true
```

## Statements
Express an action to be executed. A statement cannot be used where a value is expected.

The following are statements in JavaScript:\
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
var someVar;                            
    // variable declaration without value assignment
var b = 5;                              
    // variable declaration with value assignment
var c,
    d = 10,
    e;                                  // chained variable declarations
function funcName(param1, param2) { }   // function declaration

/*
    Below is an undeclared global variable.
    This won't generate an error but it
    IS BAD PRACTICE
*/
x = 10;                                 
```

## Naming Convention
Most online resources state that variables can start with `$`, `_` and any letter followed by any alphanumeric characters. While this is what you will usually see it is not the entire truth. Check out this [stackoverflow post](https://stackoverflow.com/a/9337047/10851837) for more. 

Keywords are reserved phrases used internally by JavaScript. These are not allowed as variable names. The following phrases are keywords:\
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `enum`, `export`, `extends`, `false`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `null`, `return`, `super`, `switch`, `this`, `throw`, `try`, `true`, `typeof`, `var`, `void`, `while`, `with`.

In [strict mode](#strict-mode) the following are also reserved phrases:\
`implements`, `package`, `public`, `interface`, `private`, `static`, `let`, `protected`, `yield`.

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
'Number ' + 2                           //> "Number 2"
true + ''                               //> "true"

// Number
2 == '2'                                //> true
2 * '2'                                 //> 4
'6' < '5'                               //> false
5/null                                  //> Infinity

// Boolean
while(5) {...}                          // infinite loop
!5                                      //> false
5 || 'five'                             //> true
```

### Explicit
``` javascript
// String
String(undefined)                       //> "undefined"
String(true)                            //> "true"
Number(20).toString(2)                  //> "10100"  - base 10 converted to base 2
Number(20).toString(8)                  //> "24"     - base 10 converted to base 8 
Number(46).toString(16)                 //> "2e"     - base 10 converted to base 16

// Number
Number('10')                            //> 10
Number(null)                            //> 0 
Number(false)                           //> 0 
Number(true)                            //> 1
Number('5 + 4')                         //> NaN
Number(undefined)                       //> NaN

// Boolean
Boolean(0)                              //> false
Boolean(5)                              //> true
Boolean('hi')                           //> true
```

### Falsy values
Values that are coerced to a `false` boolean value. These values are `0`, `-0`, `''`, `undefined`, `false`, `null` and `NaN`. Everything else is converted to `true`.

This is especially important in the context of [control flow](#control-flow).
``` javascript
Boolean(0)                              //> false
Boolean(-0)                             //> false
Boolean('')                             //> false
Boolean(undefined)                      //> false
Boolean(false)                          //> false
Boolean(null)                           //> false
Boolean(NaN)                            //> false
```

### Gotchas
`NaN` is not equal `NaN`
``` javascript
NaN == NaN                              //> false
```
`null` does not undergo numeric conversion when used with `==`. It only equals `null` or `undefined`.
``` javascript
null == 0                               //> false
null == null                            //> true
null == undefined                       //> true
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
obj.name = 'John';                      
    // changes the name property for both obj and objTwo
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
    * [this keyword](#this-keyword) - a value is assigned to the `this` keyword.
1. __Execution phase__
    * the code is executed
    * instantiated functions and variables are assigned values as the code runs

There are slight differences for the global execution context: 
* no __Activation Object__ is assigned since there are no parameters
* the __scope chain__ only contains the global object
* __Variable instantiation__ includes all top level function and variable declarations
* the __this keyword__ is assigned the global object

## Execution Stack
Or call stack is a collection of execution contexts, which are removed and added in a LIFO order(Last In First Out). The execution context at the top(most recently added) is the one that is currently being executed.

``` javascript
/* 
    The execution stack is within square brackets [...]
    The first element is the bottom of the stack
*/
// program starts -> [Global Context]
var x;
function fibo(n) {
    if (n < 1)
        return 0;
    else if (n === 1 || n === 2)
        return 1;
    return fibo(n - 1) + fibo(n - 2);   
}

x = fibo(3);    
    // fibo(3) execution -> [Global Context, fibo(3) Context]
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

You might also encounter the terms __lexical scope__ or __static scope__ in regards to JavaScript. This means you can figure out what the scope of a variable or function is just by looking at where it was declared in the source code.

``` javascript
var globalVar = 'global variable';
function globalfunc() {
    console.log('this function can be called from anywhere');
}

function ownScope() {
    var a = 'available in ownScope function and nestedFunc';
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
            console.log(a);             //> 3
            console.log(b);             //> 5
            console.log(c);             //> 8
            console.log(d);             //> 0
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

other()();                              //> 2
```

## Hoisting
Variable declarations and function declarations are loaded into memory before the [execution phase](/resources/glossary.md#Execution-Phase). This means they are accessible throughout their [execution context](#execution-context) disregarding their location within the source code.

``` javascript
console.log(hoistedVar);                //> undefined
hoistedFunc();                          //> "The function body is also hoisted"

var hoistedVar = 'hoistedVar can be accessed before declaration';

console.log(hoistedVar);                
    //> "hoistedVar can be accessed before declaration"

function hoistedFunc() {
    console.log('The function body is hoisted');
}
```

## Memory Management
In JavaScript memory is allocated and freed automatically. Memory is allocated for declarations(variables, functions) and function expressions. Memory is freed through garbage collection.

``` javascript
var a = {                               // memory allocated for a
    b: {                                // memory allocated for b
        c: 2
    },
    getB: function() {                  // memory allocated for getB
        return b;
    }
}

function Obj(prop) {                    // memory allocated for Obj
    this.prop = prop;
}

var arr = [new Obj(1), new Obj(2)];     
    // memory allocated for arr
    // memory allocated for instance of Obj
    // memory allocated for instance of Obj
```

__Garbage Collection__\
A mechanism that automatically releases unused memory. This is done based on an approximation since there is no way of knowing exactly when some data will stop being needed.

There are two popular garbage collection algorithms:
* __Reference counting__ - counts the number of references to a piece of data. If not referenced, it is considered unused and memory allocated to it is freed.
* __Mark-and-sweep__ - marks a root from which data can be accessed. Periodically, the program checks what objects can be reached from these roots and which cant. If a piece of data cant be reached, it is considered unused and memory allocated to it is freed.

Just because memory allocation and release is done automatically doesn't mean a developer should take it for granted. Poor programming could cause memory leaks, application performance decline or even crashing.

A common issue with garbage collection are __cycles__. When two objects reference each other their allocated memory is not freed even if they are not referenced anywhere else.

This is only a problem in _reference counting_ garbage collectors.

``` javascript
// hold reference to each other so memory isnt freed
var a = b;
var b = a;
```

All modern browser have _mark-and-sweep_ garbage collectors, but some of them implement mechanisms that are not compatible with _mark-and-sweep_ so cycles can still be a problem.

Garbage collection becomes a very resource hungry process in online games, where objects are created in very high volume. Knowledge of some design patterns is useful for writing code that doesn't rely so heavily on garbage collection.

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

A full description of operator precedence in JavaScript can be found on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

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
/*
    id: 12345678
    firstName: John
    surName: Smith
*/
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

A String can either be a primitive value or a String object. The String object is what we call a [wrapper type](/resources/glossary.md#wrapper-type), since it wraps the primitive value in an object providing it with additional functionality(like methods).

When invoking a method with a primitive type:
* it is converted to an object type
* the method is executed on the object
* the object is converted back to its primitive type

This mechanism is called [auto-boxing](/resources/glossary.md#autoboxing).

Always work with string primitives and let the JavaScript engine handle the conversion.

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
var withSuroggate = 'In love with JavaScript 💘';

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

* Constructor Methods
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
str.split('');                          // ["�", "�", " ", "+", " ", "�", "�", " ",
                                        // "=", " ", "�", "�"]


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
The JavaScript [RTE](/resources/glossary.md#runtime-environment) translates all strings to UTF-16 [code units](/resources/glossary.md#code-unit). What appears to be a single character can be comprised of several code units. 

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

### Instantiation
A regular expression can be instantiated through a literal or a constructor function:
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
A RegExp object has various properties of which most are read-only. Read only properties can be configured during instantiation, but not after.

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
fileName.replace('.txt', '.csv');       
    //> "products.csv; wontChange.txt"

// Replacing a matched string with a functions return value
var example = '> x';
example.replace('x', function(match, index, str){
    return "match: '" + match + "'; index: '" + index + "'; str: '" + str + "'";
});                                     
    //> "> match: 'x'; index: '2'; str: '> x'"

// Replacing a matched regular expression with a string
var name = '!@# Two words ^&*';
var re = /(\w+)\s(\w+)/;
name.replace(re, "\n $$& = '$&'\n $$` = '$`'\n $$' = '$''\n $$1 = '$1'\n $$2 = '$2'\n");
    //> "!@# 
    //>  $& = 'Two words'
    //>  $` = '!@# '
    //>  $' = ' ^&*'
    //>  $1 = 'Two'
    //>  $2 = 'words'
    //>  ^&*"

// Replacing a matched regular expression with a functions return value
var prices = 'bread 2€, milk 1.80€, salami 4€';
var re = /(\d+\.?\d*)€/g;
prices.replace(re, function(match, s1){
    return (s1 * 1.14).toFixed(2) + '$';
});                                     // "bread 2.28$, milk 2.05$, salami 4.56$"
```

&nbsp;
# Arrays
Array is a constructor function used in the creation of arrays.

Instances of Array store multiple values of various types in one variable.

## Array Instantiation
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

### Constructor Methods
Methods callable through the `Array` constructor function.

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
A block of code that performs a task. Can take values as arguments and return a single value. Functions in JavaScript are objects with properties and methods.

## arguments
An array-like object that contains the values of arguments passed to a function. 

``` javascript
function example(num, str, bool) {
    var msg = '';
    for(var i = 0; i < arguments.length; i++) {
        msg += '[' + i + ']: ' + arguments[i] + '\n';
    }
    console.log(msg);
}

example(123, 'some text', false);
/*
    [0]: 123
    [1]: some text
    [2]: false
*/
```

## Function Methods
* `Function.prototype.apply(this[, argList])` - calls a function with a specific `this` value. Function arguments can be passed within a single array. Returns the result of the function execution.
* `Function.prototype.call(this[, arg1 ... argN])` - calls a function with a specific `this` value. Accepts an argument list. Returns the result of the function execution.
* `Function.prototype.bind(this)` - returns a function with a preset `this` value.
* `Function.prototype.toString()` - returns a string containing the functions source code.

Most of these methods concern setting the context in which a function is called. More on `this` can be found in the [Object section](#this-keyword).

``` javascript
/* 
    sums up the values of an objects properties
        -can set to concatenate the values as strings
        -can set a start value to which the rest are added/concatenated
*/
function totalProps(startVal, hasStrings) {
    var total = hasStrings ? '' : 0;
    if(startVal) {
        total += startVal;
    }
    var propsAmount = Object.keys(this).length;
    for(var i = 0; i < propsAmount; i++) {
        total += this[i];
    }
    return total;
}

totalProps();                       // NaN

var obj = {
    0: 1,
    1: 2,
    2: 3
}

// apply()
totalProps.apply(obj);              // 6
totalProps.apply(obj, [null, true]);
                                    // "123"
totalProps.apply(obj, ['String: ', true]);
                                    // "String: 123"

// call()
totalProps.call(obj);               // 6
totalProps.call(obj, null, true);
                                    // "123"
totalProps.call(obj, 'String: ', true);
                                    // "String: 123"

// bind()
var totalObj = totalProps.bind(obj);

totalObj();                         // 6
obj[3] = 5;
totalObj();                         // 11

// toString()
function example(str) {
    console.log('some example logic ' + str);
}

example.toString()                      
/* 
    "function example(str) {
        console.log('some example logic ' + str);
    }"
*/

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
In JavaScript functions are __first class citizens__ meaning they can be assigned as a value, passed as an argument and returned by a function - just like a variable.

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
* nested recursions build up on the [call stack](/resources/glossary.md#call-stack) and too many can cause a stack overflow error
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
globVar1();                             // 30
globVar1();                             // 90
globVar1();                             // 270
globVar2();                             // 50
globVar2();                             // 250
globVar2();                             // 1250
```

This is an extremely powerful technique. It enables:
* __Encapsulation__: grouping data into a single unit.
* __Abstraction__: selectively exposing that data.

``` javascript
/*
    Encapsulation - Data regarding a user(name, age) is grouped in the closure
    Absaction - access to name and age only through the setter and getter methods. They cannot be referenced directly.
*/
var createUser = function(name, birth) {

    function dateCheck(birth) {
        if(isNaN(new Date(birth).getDay())) {
            throw new TypeError('invalid date string');
        }
        if(new Date(birth) > Date.now()) {
            throw new RangeError('date of birth greater than current date');
        }
    }

    function nameCheck(name) {
        if(typeof name != 'string') {
            throw new TypeError('name must be of type string');
        }
    }

    nameCheck(name);
    dateCheck(birth);

    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            try {
                nameCheck(newName);
                name = newName;
            }  catch(e) {
                console.log(e.name + ': ' + e.message);
            }
        },
        getAge: function() {
            var curDate = new Date();
            var birthDate = new Date(birth);
            var yearsDif = curDate.getFullYear() - birthDate.getFullYear();
            var monthDif = curDate.getMonth() - birthDate.getMonth();
            var daysDif = curDate.getDay() - birthDate.getDay();
            if(monthDif < 0 || (monthDif === 0 && daysDif < 0)) {
                yearsDif--;
            }
            return yearsDif;
        },
        setAge: function(birthDate) {
            try {
                dateCheck(birthDate);
                birth = birthDate;
            } catch(e) {
                console.log(e.name + ': ' + e.message);
            }
        }
    }
}

var greg = createUser('Greg', '10 oct 1989');

greg.getAge();                          // 29
greg.getName();                         // "Greg"
greg.setAge('twenty');                  // TypeError: invalid date string
greg.setAge('2100 oct 10');             // RangeError: date of birth greater than current date
greg.setAge('1989/01/01');
greg.getAge();                          // 30
greg.setName(123)                       // TypeError: name must be of type string
greg.name = 123;
greg.getName();                         // "Greg"
```

## Currying
Seperating a function that takes more than one argument into a several functions that take part of those arguments.

Currying is a very important tool for [functional composition](/javascript/md/misc.md#functional-composition) and [memoization](/resources/glossary.md#memoization)

``` javascript
var media = document.querySelector('.media__grid');

function addTag(appendTo) {
    return function(element) {
        var el = document.createElement(element);
        return function(addClass, src) {
            el.classList.add(addClass);
            el.src = src;
            appendTo.appendChild(el);
        }
    }
}

// Function is executed 1 by 1
var toMedia = addTag(media);

var addImg = toMedia('img');
var addVid = toMedia('video');

addImg('media__image--small', 'https://awesomeimages.com/image1');
addImg('media__image--large', 'https://awesomeimages.com/image2');
addVideo('media__video', 'https://awesomevideos.com/video1');

// Or in one go
addTag(media)('img')('media__image--tiny', 'https://awesomeimages.com/image3');
```

## Pure Functions
Functions that cause no side effects(don't mutate non-local variables and I/O streams) and given the same input always provides the same output.

``` javascript
/* 
    Checks if password contains:
        -1 uppercase
        -1 lowercase
        -1 number
        -8+ characters
    Does not mutate any non-local variables.
    Given the same input always produces the same output.
*/
function validatePassword(password) {
    var testRegExp = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^.{8,}$/;
    return testRegExp.test(password);
}

validatePassword('Mypass123')           // true
validatePassword('Mylongpass')          // false
validatePassword('noupper123')          // false
validatePassword('12Short')             // false
```

## Global Functions
Utility functions that are built into JavaScript and are available as properties of the [global object](#global-object).

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
0 or more key-value pairs wrapped in curly brackets.

## Instantiation
Objects can be instantiated through:
* `{ key: value }` - an object literal
* `new Object(values)` - through a constructor function. Creates an object based on the passed value
* `Object.create()` - the [create method](#builin-object-methods)

``` javascript
var objLit = { a: 'a', b: 121232, property: 'value' };
var emptyObj = {};

var consObj = new Object(12345);        // creates a Number object

var objCreate = Object.create(objLit);
objCreate.property                      // 'value'
```

## Properties
Key value pairs. 

Keys are always implicitly converted to strings.

Values can be of any data type. 

Properties can be accessed through:
* `obj.propName` - dot notation
* `obj.[['propName']] - bracket notation

``` javascript
var obj = {a: '1', b: 2};

obj.a                                   // 1
obj['b']                                // 2

var complexObj = {
    array: [1, 2, 3, 4, 5],
    arrayLike: {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three'
    }
}

complexObj.array[1];                    // 2
complexObj.arrayLike[1];                // "one"
complexObj.arrayLike['3'];              // "three"
```

## Methods
A method is an object property containing a function reference, setter `set` or getter `get`. A method is bound to its containing object - meaning the context of its execution(value of `this`) is that object.

__set__: binds a function to an object property. This function is called whenever a value is assigned to that property.

__get__: binds a function to an object property. This function is called whenever the property is looked up.

``` javascript
var vehicle = {
    speed: 0,
    // method
    accelerate: function(kmPerH) {    
        this.speed += kmPerH;
    },
    // method
    decelerate: function(kmPerH) {    
        this.speed -= kmPerH;
        if(this.speed < 0 ) {
            this.speed = 0;
        }
    },
    // method
    gauge: function() {
        var info = ( this.speed === 0 ) ? 
            'Vehicle is at a standstill' : 
            'Vehicle is moving at ' + this.speed + 'kms per hour';
        console.log(info);
    }
}

vehicle.accelerate(100);
vehicle.decelerate(50);
vehicle.gauge(50);                      //> Vehicle is moving at 50kms per hour



var car = {
    get speed() {                       // getter
        if(this._speed == null) {
            this._speed = 0;
        }
        console.log('Car is moving at ' + this._speed + 'kms per hour');
    },
    set speed(value) {                  // setter
        try {
            if(this._speed == null) {
                this._speed = 0;
            }
            if(value > 300) {
                throw new Error('Beyond the cars maximum speed');
            }
            if(value < 0) {
                throw new Error('Speed cannot be below 0km/h');
            }
            this._speed = value;
            console.log('Speed set successfully')
        } catch(e) {
            console.log(e.name + ': ' + e.message);
        }
    }
}

car.speed                               // Car is moving at 0kms per hour
car.speed = -10                         // Error: Speed cannot be below 0km/h
car.speed = 310                         // Error: Beyond the cars maximum speed
car.speed = 100                         // Speed set successfully
car.speed                               // Car is moving at 100kms per hour
```

## Cascading Methods
When methods return an object they can be chained together.

``` javascript
/*
    vehicle object example with methods
    refactored to cascade
*/
var vehicle = {
    speed: 0,
    accelerate: function(kmPerH) {    
        this.speed += kmPerH;
        return this;
    },
    decelerate: function(kmPerH) {    
        this.speed -= kmPerH;
        if(this.speed < 0 ) {
            this.speed = 0;
        }
        return this;
    },
    gauge: function() {
        var info = ( this.speed === 0 ) ? 
            'Vehicle is at a standstill' : 
            'Vehicle is moving at ' + this.speed + 'kms per hour';
        console.log(info);
    }
}

vehicle.accelerate(50).decelerate(40).gauge();
    //> Vehicle is moving at 10kms per hour
```

## Global Object
A top level object that is always available in the global scope. What it is depends on the environment.
* __Browser__ - the `window` object is the global object. All built-in functions and objects are stored as properties of the global object.
* __Node__ - `global` object is the global object.
* __strict mode__ - the global object is undefined.

The [this keyword](#this-keyword) used in the global scope or non-method functions references the global object.

``` javascript
/*
    In Chrome
*/
console.log(this);
//> Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

/*
    In Node
*/
console.log(this);
/*
    Object [global] {
        DTRACE_NET_SERVER_CONNECTION: [Function],
        DTRACE_NET_STREAM_END: [Function],
        DTRACE_HTTP_SERVER_REQUEST: [Function],
        DTRACE_HTTP_SERVER_RESPONSE: [Function],
        ...a lot more...
    }
*/
```

## this Keyword
The context of an [execution context](#execution-context).

The context is an object on behalf of which the program or a function is being executed. It's value depends on where it is used:
* [__global context__](#execution-context) - `this` is a reference to the global object
* [__function context__](#execution-context) - `this` is a reference to the global object except in [strict mode](#strict-mode) where its undefined
* [__methods__](#methods) - `this` is a reference to the object on behalf of which the method was called
* [__constructor function__](#constructor-function) - `this` is a reference to the object that is being instantiated

__GOTCHA!__
* `this` in a function nested within a method will reference the global object

``` javascript
/*
    In Chrome
*/

// Global context
this
    //> Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// Function context
function test() {
    console.log(this);
        //> Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
}

// Strict mode
(function() {
    'use strict';
    return this;
})();                                   //> undefined

// Methods
var obj = {
    checkThis: function() {
        console.log(this);              //> { checkThis: ƒ }
    }
}

// Constructor Function
function Example() {
    this.prop = 'Whatever';
    console.log(this);                  //> Example {prop: "Whatever"}
}

// Gotcha
var obj = {
    objMethod: function() {
        (function() {
            console.log(this);
                //> Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
        })();
    }
}
```

## Constructor Function
A function that is used to create an object. Called when instantiating an object with the `new` operator. 

`Object.prototype.constructor` - a reference to the constructor function that created an object. Through it you can reference the objects prototype.

__Convention__\
Constructor function names _should_ start with a capital letter.

``` javascript
function Person(name, nationality){
	this.name = name;
    this.nationality = nationality;
    this.toString = function() {
        return this.name + ' is from ' + this.nationality
    }
}

var me = new Person('Gregory Maj', 'Poland');
console.log(me + '');
    //> Gregory Maj is from Poland

console.log(me.constructor)
/*
    ƒ Person(name, nationality){
        this.name = name;
        this.nationality = nationality;
        this.toString = function() {
            return this.name + ' is from ' + this.nationality
        }
    }
*/

console.log(me.constructor.name);
    //> Person

console.log(me.constructor.prototype);
/*
    {
        constructor: ƒ Person(name, nationality)
        __proto__: Object
    }
*/
```

__Careful__\
Every object created with a constructor function gets its own copy of the specified properties. In the below example this would mean every `Person` object has its own `toWork()` function.

A better approach would be setting the `toWork()` property on the [objects prototype](#prototype). This would result in one instance of the method that is shared by all `Person` objects. This approach is called [Differential Inheritance](#inheritance). 

``` javascript
// WRONG - MULTIPLE INSTANCES OF THE METHOD
function Person(name) {
    this.name = name;
    this.toWork = function() {
        console.log(this.name + ' is going to work');
    }
}

var john = new Person('John');
var mary = new Person('Mary');

john.toWork === mary.toWork             //> false

// CORRECT - ONE INSTANCE OF THE METHOD
function Person2(name) {
    this.name = name;
}

Person2.prototype.toWork = function() {
    console.log(this.name + ' is going to work');
}

var sam = new Person2('Sam');
var jane = new Person2('Jane');

sam.toWork === jane.toWork              //> true

console.log(sam.constructor.prototype);
/*
    {
        toWork: ƒ ()
        constructor: ƒ Person2(name)
        __proto__: Object
    }
*/
```

__Warning__\
Always use the `new` operator when creating an object through a constructor function. Forgetting will not throw an exception, but will result in the new object being `undefined`. This is a popular and hard to catch bug.

``` javascript
function Person(name) {
    this.name = name;
}

var melanie = Person('Melanie');
console.log(melanie);                   //> undefined
```
__Warning__\
Constructor functions violate the [Open-Closed Principle](/resources/glossary.md#open-closed-principle). In order to add new features you have to modify the constructor function or its prototype.

__Warning__\
[Refactoring](/resources/glossary.md#refactor) a constructor function to a factory function is a breaking change. Imagine others are using your code. They instantiate objects using the `new` keyword. After you switch from a constructor function to a factory function objects instantiated with `new` might bring unexpected results.

```  javascript
// FIRST IMPLEMENTATION
function User(name) {
    this.name = name;
}

var CreateUser = { User };

var newUser = new CreateUser.User('John Doe');
                                        // works as expected

// TO FACTORY FUNCTION
var CreateUser = {
    User: function(name, role) {
        var propDesc = {
            name: {
                value: name,
                writable: true    
            }
        }
        return Object.create(this.role[role], propDesc);
    },

    role: {
        student: {
            dashboard: function() {
                console.log('Opening student dashboard');
            }
        },
        business: {
            dashboard: function() {
                console.log('Opening company dashboard');
            }
        }
    }
}

var johnSmith = CreateUser.User('John Smith', 'student');
                                        // works as expected

var johnDoe = new CreateUser.User('John Doe');
/*
    Uncaught TypeError: Cannot read property 'undefined' of undefined
*/
```

## Factory Function
A function that returns an object but is not a constructor function(or a class as of ES6). 

It is better practice to use a factory function then a constructor. It can be easily extended and omits the faulty `new` keyword.

``` javascript
var toyProto = {
    play: function() {
        console.log('playing with toy');
    }
}

function toyFactory() {
    return Object.create(toyProto);
}

var barbi = toyFactory();
barbi.play();                           //> playing with toy
```

## Prototype
A prototype is an object from which other object inherit properties.

All objects in JavaScript have a prototype. 

Do not confuse an objects Prototype with the inaccessible [[prototype]] property which is responsible for determining the [prototype chain](#prototype-chain). Only functions have an accessible prototype property.

An objects prototype can be accessed through its constructor - `Object.constructor.prototype`


``` javascript
function Person(name) {
    this.name = name;
}

Person.prototype.myName = function() {
    console.log('My name is ' + this.name);
}

var me = new Person('Greg');

console.log(me.constructor.prototype);
/*
    {
        myName: ƒ ()
        constructor: ƒ Person(name)
        __proto__: Object
    }
*/

me.constructor.prototype === Person.prototype
                                        //> true
```

## Prototype Chain
All objects in JavaScript have a prototype. That means a prototype object also has a prototype in effect creating what is called the __Prototype Chain__. This mechanism enables [inheritance](#inheritance) in JavaScript.

The final prototype in a prototype chain is of `null` value.

When accessing an objects property their prototype chain is traversed starting from the object's direct prototype. If the property is not found and the `null` prototype is reached an `undefined` value is returned.

``` javascript
var proto = {
    a: 'a'
}

var propDesc = {
    someVal: {
        value: 'someVal'  
    }
}

var objA = Object.create(proto, propDesc);

var objB = Object.create(objA);

/*
    For presentational purposes I use the __proto__
    property to traverse the prototype chain but 
    never do this in production code
*/

// Direct prototype
console.log(objB.__proto__);
    //> {someVal: "someVal"}
console.log(objB.__proto__ === objA)
    //> true

// After direct
console.log(objB.__proto__.__proto__);
    //> {a: "a"}
console.log(objB.__proto__.__proto__.__proto__);
    //> Object constructor
console.log(objB.__proto__.__proto__.__proto__.__proto__);
    //> null

/*
    Calling valueOf() on objB will go through each of the above
    prototypes until it is found in the Object constructor
*/
objB.valueOf();
    //> {}

```

## Inheritance
JavaScript has a prototype based object model. This means inheritance is determined dynamically. Objects inherit from other objects - not from classes. This mechanism is called __Prototypal Inheritence__ or __OLOO__(Objects Linking to Other Objects).

JavaScript is a very flexible language and supports 3 types of prototypal inheritance. You can also emulate class inheritance although it is considered bad practice by experienced JS developers.

Prototypal Inheritance enforces a __has-a__, __uses-a__ or __can-do__ relationship.

Class Inheritance enforces a __is-a__ relationship.

Credits: [Eric Elliott on types of prototypal inheritance](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9)

### __Differential Inheritance__
Also called __Delegation__ is when an object serves as a base for another object. This approach is memory efficient, you can store common methods in one prototype object which is referenced by the inheriting objects.
``` javascript
// CONSTRUCTOR FUNCTION VERSION
function User(name, userName, id) {
    this.name = name;
    this.userName = userName;
    this.id = id;
}

User.prototype.dashboard = function() {
    return 'Hi ' + this.name + '. Please select a product.';
}

// FACTORY FUNCTION VERSION
var proto = {
    dashboard: function() {
        return 'Hi ' + this.name + '. Please select a product.';
    }
}

function createUser(name, userName, id) {
    var user = Object.create(proto);
    user.name = name;
    user.userName = userName;
    user.id = id;
    return user; 
}
```

### __Class Inheritance__
When two classes are coupled in a parent-child relationship. The child class extends the parent class by inheriting all of its properties and adding its own. Not supported natively in JavaScript but can be emulated.

This is achieved through a 2-step process:
1. __Link constructors__ - calling the base class constructor in the subclass constructor
1. __Link prototypes__ - connecting the base class prototype to the subclass prototype.

``` javascript
function User(name, userName, id) {
    this.name = name;
    this.userName = userName;
    this.id = id;
}

User.prototype.dashboard = function() {
    console.log('Hi ' + this.name + '. Please select a product.')
}

/* STEP 1
    call base class constructor in subclass
*/
function Student(name, userName, id, products) {
    User.call(this, name, userName, id);

    this.products = products;
}

//! dashboard is not linked to Student at this point

/* STEP 2
    set the subclass prototype as an object that
    inherits from the base class prototype
*/
Student.prototype = Object.create(User.prototype);

/* EXAMPLE
    -adding a new method on the Student.prototype
    -overriding the dashboard method
*/

var bob = new User('Bob', 'Bobby007', 100233);
var john = new Student('John Doe', 'Anon123', 100234, ['book', 'pen']);

Student.prototype.listProducts = function() {
    console.log('Shopping Cart:')
    this.products.forEach(function(el, i) {
        console.log((i + 1) + '. ' + el);
    });
}

Student.prototype.dashboard = function() {
    console.log('Welcome ' + this.userName);
}

bob.dashboard();
    //> Hi Bob. Please select a product.
bob.listProducts();
    //> TypeError: bob.listProducts is not a function

john.dashboard();
    //> Welcome Anon123
john.listProducts();
/*
    Shopping Cart:
    1. book
    2. pen
*/
```

### __Concatenative Inheritance__
Also called __Cloning__ or __Mixins__ is when you copy properties from one object to another without storing a reference between the two objects. 

This can be easily done in ES6 using the `Object.assign()` method. In ES5 you have to use a workaround function available in many popular libraries(like extend() in jQuery).

``` javascript
// Workaround Function
function extend(){
    for(var i = 1; i < arguments.length; i++) {
        for(var key in arguments[i]) {
            if(arguments[i].hasOwnProperty(key)) { 
                if (typeof arguments[0][key] === 'object'
                    && typeof arguments[i][key] === 'object') {
                        extend(arguments[0][key], arguments[i][key]);
                    }
                else {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
    }
    return arguments[0];
}

var monkey = {
    jump: function() {
        console.log(this.name + ' jumped to a new tree');
    }
}

var banana = {
    eat: function() {
        console.log(this.name + ' is eating a banana');
    }
}

var georgeTheMonkey = extend(monkey, banana, { name: 'George'})

georgeTheMonkey.jump();
    //> George jumped to a new tree
georgeTheMonkey.eat();
    //> George is eating a banana
```

### __Functional Inheritance__
A combination of creating an object through a [factory function](#factory-function) and adding properties to it through concatenative inheritance. 

A function created for extending objects is called a __functional mixin__. This approach allows for data encapsulation through closures.

Credits: [Douglas Crockford](http://shop.oreilly.com/product/9780596517748.do) 
``` javascript
/* Simplified Extend
    -non-recursive
*/
function extend(){
    for(var i = 1; i < arguments.length; i++) {
        for(var key in arguments[i]) {
            if(arguments[i].hasOwnProperty(key)) {
                arguments[0][key] = arguments[i][key];
            }
        }
    }
    return arguments[0];
}

/* Concatenative Inheritance
    -object 'mixed in' through factory funtion
*/
var monkey = {
    jump: function() {
        console.log(this.name + ' jumped to a new tree');
    }
}

/* Factory Function
    -attr is private due to closures
*/
var monkeyMixin = function() {
    var attr = {};

    var propsDesc = {
        set: function(name, value) {
            attr[name] = value;
        },
        get: function(name) {
            return attr[name];
        }
    }

    return extend(this, propsDesc, monkey);
}

var george = { name: 'George' }

var georgeTheMonkey = monkeyMixin.call(george);

georgeTheMonkey.set('race', 'chimpanzee');
georgeTheMonkey.get('race');
    //> 'chimpanzee'

/*
    NO new operator
    Private properties
    Composable
    Reusable
    MIND BLOWN
*/
```

## Property Descriptor
An object that describes a property. This enables setting extra options on properties like making them read-only.

They are divided into two types:
* __data descriptor__ - key-value pair. Can have the following options:
    * _configurable_ - boolean value indicating if the property can be modified or deleted. Default = `false`
    * _enumerable_ - boolean value inditcating if the property can be iterated over. Default = `false`
    * _value_ - value assigned to the property. Default = `undefined`
    * _writable_ - boolean value indicating if the value can be changed with an assignment operator. Default = `false`
* __accessor descriptor__ - getter or setter function
    * _configurable_ - boolean value indicating if the property can be modified or deleted. Default = `false`
    * _enumerable_ - boolean value inditcating if the property can be iterated over. Default = `false`
    * _get_ - getter function for the property. Default = `undefined`
    * _set_ - setter function for the property. Default = `undefined`

``` javascript
function setProps(name) {
    var name = name;
    return {
        name: {
            get: function() {
                return name;
            },
            set: function(newName) {
                if(typeof newName === 'string'){
                    name = newName
                }
            },
            enumerable: true,
            configurable: true
        },
        id: {
            value: 100123,
            enumerable: true
        }
    }
}

var me = Object.create(null, setProps('Greg'));

me.id = 12312313;
me.name = 123131;

for(prop in me) {
    console.log(prop + ': ' + me[prop]);
}
/*
    name: Greg
    id: 100123
*/
```

## Object Methods

* Constructor Methods 
    * `Object.create(proto[, propDesc])` - creates a new object using an existing object as the prototype. Can optionally pass a property descriptor.
    * `Object.defineProperties(obj, desc)` - adds or modifies multiple object properties using a property descriptor.
    * `Object.defineProperty(targetObj, prop, desc)` - adds or modifies an object property using a property descriptor.
    * `Object.freeze(obj)` - freezes an object meaning:
        * new properties cannot be added
        * existing properties cannot be deleted
        * existing properties cannot be assigned new values
        * existing properties descriptors cannot be changed
        * its prototype cannot be changed
        * __Careful__: its object properties can still be mutated
    * `Object.getOwnPropertyDescriptor(obj, prop)` - returns a properties property descriptor. 
    * `Object.getOwnPropertyNames(obj)` - returns an array containing all own property keys of an object.
    * `Object.getPrototypeOf(obj)` - returns an objects prototype 
    * `Object.isExtensible(obj)` - returns boolean value indicating if the object can have new properties added to it.
    * `Object.isFrozen(obj)` - returns boolean value indicating if the object is frozen or not.
    * `Object.isSealed(obj)` - returns boolean value indicating if the object is sealed.
    * `Object.keys(obj)` - returns an array containing all own enumerable property keys of an object.
    * `Object.preventExtensions(obj)` -  disables adding new properties to an object
    * `Object.seal(obj)` - seals an object meaning:
        * new properties cannot be added
        * existing properties become non-configurable
        * existing properties cannot be deleted

* Instance Methods
    * `Object.prototype.hasOwnProperty(prop)` - returns boolean value indicating if property exists in object.
    * `Object.prototype.isPrototypeOf(obj)` - returns boolean value indicating if the reference object exists in the passed objects prototype chain.
    * `Object.prototype.propertyIsEnumerable(prop)` - returns boolean value indicating if an objects property is enumerable

``` javascript
/*
    Object.create()
*/
var proto = {
    drive: function() {
        console.log('**tires screeching**');
    }
}

var car = Object.create(proto);         //> **tires screeching**

car.drive();

/* 
    Object.defineProperties()
    Object.defineProperty()
*/
var obj = {};

Object.defineProperties(obj, {
    name: {
        value: 'John',
        writable: true,
        enumerable: true,
        configurable: true
    },
    printName: {
        value: function() {
            console.log('My name is ' + this.name);
        }
    }
});

console.log(obj);                       //> {name: "John", printName: ƒ}

Object.defineProperty(obj, 'name', {
    value: 'Tom'
});

console.log(obj);                       //> {name: "Tom", printName: ƒ}

/* 
    Object.freeze()
    Object.isFrozen()
*/
var obj = {
    prop: 100,
    setProp: function(val) {
        this.prop = val;
    },
    arrProp: [1, 2, 3, 4]
}

Object.freeze(obj);

obj.newProp = 1;                        // newProp not added
delete obj.prop;                        // prop is not deleted

obj.prop = 101;                         // prop same value
obj.setProp(101);                       // prop same value
obj.arrProp = [1, 2];                   // arrProp same value

obj.arrProp.pop();                      // arrProp mutated
console.log(obj.arrProp);               // [1, 2, 3]

Object.isFrozen(obj);                   //> true

/* 
    Object.getOwnPropertyDescriptor()
*/
var obj = { prop: 100 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(propDesc);
    //> {value: 100, writable: true, enumerable: true, configurable: true}

/* 
    Object.getOwnPropertyNames()
    Object.keys(obj)
*/

var propDesc = { 
    a: {
        value: 1,
        enumerable: true
    }, 
    b: {
        value: 2,
        enumerable: true
    }, 
    c: {
        value: 1,
        enumerable: false
    }
};

var obj = Object.create({}, propDesc);

var propNames = Object.getOwnPropertyNames(obj);
var keys = Object.keys(obj);

console.log(propNames);                 //> ["a", "b", "c"]
console.log(keys);                      //> ["a", "b"]

/* 
    Object.getPrototypeOf()
*/

var proto = {
    example: function() {
        console.log('This is an example method');
    }
}

var obj = Object.create(proto);

var objProto = Object.getPrototypeOf(obj);

console.log(objProto);                  //> {example: ƒ}

/* 
    Object.preventExtensions(obj)
    Object.isExtensible()
*/

var obj = {};

Object.isExtensible(obj);               //> true

Object.preventExtensions(obj);
obj.prop = 5;                           // property not added

Object.isExtensible(obj);               //> false


/* 
    Object.seal(obj)
    Object.isSealed(obj)
*/
var obj = { prop: 100 }

Object.seal(obj);

obj.newProp = 1;                        // newProp not added
delete obj.prop;                        // prop is not deleted

obj.prop = 101;                         
console.log(obj.prop);                  // 101

Object.isSealed(obj);                   //> true

/* 
    Object.prototype.hasOwnProperty(prop)
*/

var obj = Object.create({ a: 1 }, {
    b: {
        value: 2
    }
});

obj.hasOwnProperty('a');                //> false - belongs to prototype
obj.hasOwnProperty('b');                //> true

/* 
    Object.prototype.isPrototypeOf()
*/
var proto = {
    example: function() {
        console.log('An example function');
    }
}

var obj = Object.create(proto);

proto.isPrototypeOf(obj);               //> true

/*
    Object.prototype.propertyIsEnumerable()
*/
var obj = Object.create({}, {
    a: {
        value: 1,
        enumerable: true
    },
    b: {
        value: 2,
        enumerable: false
    },
    c: {
        value: 3
    }
})

obj.propertyIsEnumerable('a')           //> true
obj.propertyIsEnumerable('b')           //> false
obj.propertyIsEnumerable('c')           //> false - by default

```

## Object Related Operators

### new operator
Enables creating an instance of an object.

Does the following:
1. creates an object of type `object`
1. sets the objects prototype to its constructor functions prototype
1. replaces the `this` keyword in the constructor properties with the newly created object
1. executes the function constructor
1. returns the object unless the constructor function returns a different object

``` javascript
function Example(prop) {
    this.prop = prop;
}

var exp = new Example('hello');
/*
    1. exp = {}
    2. exp.__proto__ = Example.prototype
    3. Example(prop) { exp.prop = prop }
    4. Example('hello');
    5. exp = Example('hello');
*/
```

### in operator
Returns a boolean value indicating if a property exists in the operand or its prototype chain.
``` javascript
var obj = {a: 1};

'a' in obj                              //> true  
'b' in obj                              //> false
'toString' in obj                       //> true
```

### delete operator
Deletes property belonging to an object.

Will not delete properties of any prototype in the prototype chain.

Will not delete properties in the global or function scope.

Will not delete non-configurable properites.

``` javascript
var obj = Object.create({}, {
    a: {
        value: 1,
        configurable: true
    },
    b: {
        value: 2,
        configurable: false
    },
    example: {
        value: function() {
            console.log('An example method');
        },
        configurable: true
    }
});

delete obj.a;                           //> a deleted
delete obj.b;                           //> b not deleted
delete obj.example;                     //> example deleted
```

### instanceof operator
Checks whether a prototype exists in an objects prototype chain.

Careful:
* prototypes can be changed
* primitive data types have an undefined prototype

The instanceof operator has more gotchas - make sure to read what MDN has to say on the [topic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

A better alternative to type checking with `instanceof` is __duck typing__. Duck typing is determing if an object is suitable for a given purpose by checking its properties(not its type).

In ES6 you can customize how classes handle the `instanceof` operator making it work like duck typing.

``` javascript
function Person(name) {
    this.name = name;
}

var me = new Person('Greg');

console.log(me instanceof Person);      //> true
console.log(me.constructor === Person)  //> true
console.log(me instanceof Object);      //> true

// Change of prototype
Person.prototype = {};

console.log(me instanceof Person);      //> false

// Primitive data types
console.log(5 instanceof Number);       //> false
console.log(true instanceof Boolean);   //> false
console.log('str' instanceof String);   //> false

// Duck typing
function Duck() {
    this.look = 'duck',
    this.sound = 'quack'
}

Duck.prototype.swim = function() {
    console.log('Is swimming');
}

var duckProto = {
    swim: function() {
        console.log('Swimming like a duck');
    }
}

var duck = new Duck();

Duck.prototype = duckProto;

function isDuck(obj) {
    var looksLikeDuck = obj.look === 'duck';
    var soundsLikeDuck = obj.sound === 'quack';
    var swimsLikeDuck = Boolean(obj.swim);
    return looksLikeDuck && soundsLikeDuck && swimsLikeDuck;
}

duck instanceof Duck                    //> false
isDuck(duck);                           //> true
```

## Object Type Coercion
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
# Native Objects
Built-in objects that are always available in the global scope.

All built-in objects except `Math` and `JSON` are constructor functions.

``` javascript
Array instanceof Function               // true
Date instanceof Function                // true
Error instanceof Function               // true
Object instanceof Function              // true

Math instanceof Function                // false
JSON instanceof Function                // false
```

The following are built-in objects:
* [Array](#arrays)
* [Boolean](#boolean)
* [Date](#date)
* [Error](#error)
* [Function](#functions)
* [JSON](#json)
* [Math](#math)
* [Number](#number-2)
* [Object](#objects)
* [RegExp](#regular-expressions)
* [String](#strings)

## Date
Represents a moment in time based on the number of milliseconds starting from __1 Jan 1970__ - this specific date is called the __UNIX Epoch__ and enables standardizing the representation of time across computer systems.

Always needs to be instantiated using the `new` operator. Has various valid constructors:
* `new Date()` - returns current date
* `new Date(string)` - transforms a string into a date object
* `new Date(year, mon[, day, hrs, min, sec, mlsec])` - create date object by specifying each component separately. Months are indexed from 0.
``` javascript
var now = new Date();
var fromString = new Date('Feb 14 2018, 20:00');
var comp = new Date(2018, 0, 1, 18, 58, 0, 900);
```

### Methods
Each date component has a respective [getter](/resources/glossary.md#mutator) and [setter](/resources/glossary.md#accessor) method.

Methods parse according to local time unless specified otherwise or contain UTC in method identifier.

Parsing according to a `locale` object is platform specific and might work inconsistently across different browsers, operating systems or JavaScript engines.

Constructor Methods:
* `Date.UTC(year, mon[, day, hrs, min, sec, mlsec])` - takes date component arguments and returns a UTC date.
* `Date.now()` - returns the amount of milliseconds since the UNIX Epoch.
* `Date.parse(string)` - parses the passed date string and returns the amount of milliseconds between it and the UNIX Epoch 

Prototype Methods:
* Time
    * `Date.prototype.getMilliseconds() | setMilliseconds(val)` - returns the milliseconds component | sets the milliseconds component value
        * UTC : `getUTCMilliseconds()` | `setUTCMilliseconds()`    
    * `Date.prototype.getSeconds() | setSeconds(val)` - returns the seconds component | sets the seconds component value
        * UTC : `getUTCSeconds()` | `setUTCSeconds()`    
    * `Date.prototype.getMinutes() | setMinutes(val)` - returns the minutes component | sets the minutes component value
        * UTC : `getUTCMinutes()` | `setUTCMinutes()`
    * `Date.prototype.getHours() | setHours(val)` - returns the hour component | sets the hours component value
        * UTC : `getUTCHours()` | `setUTCHours()`    
* Date
    * `Date.prototype.getDay()` - returns the day of the week with 0 being Sunday and 6 being Saturday
        * UTC : `getUTCDay()`
    * `Date.prototype.getDate() | setDate(val)` - returns the day component as 1 - 31 | sets the date component value
        * UTC : `getUTCDate()` | `setUTCDate()`
    * `Date.prototype.getMonth() | setMonth(val)` - returns the month components as 0 - 11 | sets the month component value
        * UTC : `getUTCMonth()` | `setUTCMonth()`    
    * `Date.prototype.getFullYear() | setFullYear(val)` - returns the year component | sets the year component value
        * UTC : `getUTCFullYear()` | `setUTCFullYear()`    
* Difference
    * `Date.prototype.getTime()` - returns the difference between the referenced date and UNIX Epoch in milliseconds. Uses UTC standard.
    * `Date.prototype.getTimezoneOffset()` - returns the difference between locale timezone and UTC time in minutes.
* Format
    * `Date.prototype.toTimeString()` - returns time in human-readable format.
    * `Date.prototype.toLocaleTimeString(locale)` - returns time in format specific to passed locale.
    * `Date.prototype.toDateString()` - returns date in human-readable format.
    * `Date.prototype.toLocaleDateString(locale)` - returns date in format specific to passed locale.
    * `Date.prototype.toString()` - returns datetime in human-readable format.
    * `Date.prototype.toUTCString()` - formats datetime to UTC timezone and returns it in human-readable format.
    * `Date.prototype.toLocaleString(locale)` - returns datetime in format specific to passed locale.
    * `Date.prototype.toISOString()` - returns datetime in ISO format.
    * `Date.prototype.toJSON()` - returns datetime in ISO format. Uses the `toISOString()` method and throws an error if that is not available.

``` javascript
// My local timezone is GMT+2 in Polish datetime format
// User agent: Google Chrome v71, macOS Mojave 10.14

// Constructor Methods
var googleUTC = Date.UTC(98, 8, 4, 12, 30, 45);
                                        // 904912245000
var now1 = Date.now(), now2 = Date.parse(new Date());
now1 === now2                           // false
                                        // now2 computed milliseconds before now1

Date.now() === new Date()

// Date google was founded
var google = new Date(1998, 8, 4, 12, 30, 45, 900);

// FORMAT
google.toTimeString();                  // "12:30:45 GMT+0200"
google.toLocaleTimeString('ko-KR');     // "오후 12:30:45"
google.toDateString();                  // "Fri Sep 04 1998"
google.toLocaleDateString('ko-KR');     // "1998. 9. 4."
google.toString();                      // "Fri Sep 04 1998 12:30:45 GMT+0200"
google.toUTCString();                   // "Fri, 04 Sep 1998 10:30:45 GMT"
google.toLocaleString('ko-KR');         // "1998. 9. 4. 오후 12:30:45"
google.toISOString();                   // "1998-09-04T10:30:45.900Z"
google.toJSON();                        // "1998-09-04T10:30:45.900Z"

// TIME
google.getMilliseconds();               // 900
google.setMilliseconds(500);
google.getSeconds();                    // 45
google.setSeconds(0);                    
google.getMinutes();                    // 30
google.setMinutes(59);
google.getHours();                      // 12
google.setHours(23);   

google.toTimeString();                  // "23:59:00 GMT+0200"

// DATE
google.getDay();                        // 4
google.getDate();                       // 3
google.setDate(10);
google.getMonth();                      // 8
google.setMonth(0);
google.getFullYear();                   // 1998
google.setFullYear(2006);

var apple = google;                     // Original 15-inch MacBook Pro release date announcement
apple.toDateString();                   // "Tue Jan 10 2006"

// DIFFERENCE
google.getTime();                       // 904905045900
google.getTimezoneOffset();             // -120
```

### Elapsed time
Operations on date objects are performed on their millisecond representations. Using this property by subtracting the current time at one point from another you can calculate elapsed time.

``` javascript
var start = new Date();

// Do something you want to measure
for(var x = 0, i = 0; i < 1000000; i++){
    x = Math.random();
}

var end = new Date();
var elapsed = end - start;
```

## Error
Built-in Error objects:
* `Error` - used to create runtime errors. User defined errors should inherit this object
* `RangeError` - invalid value is passed to a function.
* `ReferenceError` - referencing a non-existant variable.
* `SyntaxError` - intrpreter evaluates syntactically incorrect code.
* `TypeError` - value is of an unexpected type.
* `URIError` - incorrect usage of URI function

All built-in errors inherit from the Error object.

All Error constructors have a optional message argument. This message is shown when the error is thrown.

``` javascript
try {
    throw new Error('Custom error message');
} catch(e) {
    console.log(e.message + ' - ' + e.name);
                                        // Custom error message - Error
}
```

### Properties
* `message` - description of the error
* `name` - the type of the error
* `stack` - trace of execution up until the error. This is not standard and could work differently across browsers.

``` javascript
function test() {
    try {
        throw new SyntaxError('Please use linter');
    } catch(e) {
        console.log('Message: ' + e.message);
        console.log('Name: ' + e.name);
        console.log(e.stack);
    }
}

test();
/*
    Message: Please use linter
    Name: SyntaxError
    SyntaxError: Please use linter
        at test (<anonymous>:3:15)
        at <anonymous>:11:1
*/

```

### User Defined Errors
You can create your own error objects.

Most Error properties are platform specific with `message` being the only standard property.

The below example is a minimalistic approach. You can access other properties through the stack field. Assign the `Error.prototype` to your user defined error so that it can be identified as an error object.
``` javascript
function MyError(message) {
    this.name = 'MyError';
    this.message = message; 
    this.stack = (new Error()).stack;
    this.stack.replace()
} 
MyError.prototype = Object.create(Error.prototype); 

function test() {
    try {
        throw new MyError('Testing user defined error');
    } catch(e) {
        console.log('Message: ' + e.message);
        console.log('Name: ' + e.name);
        console.log(e.stack);
    }
}

test();
/*
    Message: Testing user defined error
    Name: MyError
    Error
        at new MyError (<anonymous>:4:19)
        at test (<anonymous>:11:15)
        at <anonymous>:19:1
*/
```

## JSON
Object used to work with [JSON](/resources/glossary.md#json) data.

Methods:
* `JSON.parse(jsonString)` - parses the JSON string and returns a value or object.
* `JSON.stringify(obj | val)` - tranforms a JavaScript value or object into a JSON string.

``` javascript
var json = '{"key1" : "value","key2" : 2}';
var obj = { a: 'a', b: true, c: undefined, d: [1, 2, 3, 4]};

JSON.parse(json);                       // {key1: "value", key2: 2}
JSON.stringify(obj);                    // "{"a":"a","b":true,"d":[1,2,3,4]}"
                                        // omits c because 'undefined' is not valid JSON
```

## Math
Object used for mathematical constants and functions.

Math methods are platform specific and might work inconsistently across different browsers, operating systems or JavaScript engines.

Trigonometric functions work with radians.

Properties:
* `Math.E` - euler's number
* `Math.LN2` - natural logarithm of 2
* `Math.LN10` - natural logarithm of 10
* `Math.LOG2E` - base 2 logarithm of E
* `Math.LOG10E` - base 10 logarithm of E
* `Math.PI` - pi constant
* `Math.SQRT1_2` - 1 over the square root of 2
* `Math.SQRT2` - square root of 2

Methods:
* Exponentiation
    * `Math.exp(x)` - euler's constant to the power of x
    * `Math.log(x)` - natural logarithm of x
    * `Math.pow(x, y)` - x to the power of y
    * `Math.sqrt(x)` - square root of x
* Miscellaneous
    * `Math.abs(x)` - absolute value of x
    * `Math.max([x, ..., n])` - largest of a series of numbers
    * `Math.min([x, ..., n])` - smallest of a series of numbers
    * `Math.random()` - random number between 0 and 1
* Rounding
    * `Math.ceil(x)` - smallest integer greater or equal x
    * `Math.floor(x)` - largest integer less then or equal x
    * `Math.round(x)` - x rounded to the nearest integer
* Trigonometry
    * `Math.acos(x)` - arccosine of x
    * `Math.asin(x)` - arcsine of x
    * `Math.atan(x)` - arctangent of x
    * `Math.atan2(x, y)` - arctangent of the quotient of x and y
    * `Math.cos(x)` - cosine of x
    * `Math.sin(x)` - sine of x 
    * `Math.tan(x)` - tangent of x

``` javascript
// User agent: Google Chrome v71, macOS Mojave 10.14

Math.E                                  // 2.718281828459045
Math.LN2                                // 0.6931471805599453
Math.LN10                               // 2.302585092994046
Math.LOG2E                              // 1.4426950408889634
Math.LOG10E                             // 0.4342944819032518
Math.PI                                 // 3.141592653589793
Math.SQRT1_2                            // 0.7071067811865476
Math.SQRT2                              // 1.4142135623730951

// Converts degress to rad
function toRad(x) {
    return x * (Math.PI / 180);
}

// Round to nth decimal digit
function roundTo(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

// Exponentiation
Math.exp(1);                            // 2.718281828459045
Math.log(2.718281828459045);            // 1
Math.pow(2, 4);                         // 16
Math.sqrt(16);                          // 4

// Miscellaneous
Math.abs(-10);                          // 10
Math.max(1, 2, 3, 6, 7);                // 7
Math.min(1, 2, 3, -6, 7);               // -6
Math.random();                          // 0.019366580087217145

// Rounding
Math.ceil(1.01);                        // 2
Math.floor(1.99);                       // 1
Math.round(1.01);                       // 1
Math.round(1.99);                       // 2
Math.round(1.5);                        // 2

// Trigonometry
var deg0 = toRad(0);                    // 0
var deg30 = toRad(30);                  // 0.5235987755982988
var deg45 = toRad(45);                  // 0.7853981633974483
var deg60 = toRad(60);                  // 1.0471975511965976
var deg90 = toRad(90);                  // 1.5707963267948966

Math.sin(deg0);                         // 0
Math.sin(deg30);                        // 0.49999999999999994 - 0.5 rounded
Math.sin(deg45);                        // 0.7071067811865475  - 1 / √2
Math.sin(deg60);                        // 0.8660254037844386  - √3 / 2
Math.sin(deg90);                        // 1

Math.cos(deg0);                         // 1
Math.cos(deg30);                        // 0.8660254037844386  - √3 / 2
Math.cos(deg45);                        // 0.7071067811865475  - 1 / √2
Math.cos(deg60);                        // 0.5000000000000001  - 0.5 rounded
Math.cos(deg90);                        // 0

Math.tan(deg0);                         // 0
Math.tan(deg30);                        // 0.5773502691896257  - 1 / √3
Math.tan(deg45);                        // 0.9999999999999999  - 1 rounded
Math.tan(deg60);                        // 1.7320508075688767  - √3
Math.tan(deg90);                        // 16331239353195370

Math.asin(deg45);                       // 0.9033391107665127 
Math.acos(deg45);                       // 0.6674572160283838
Math.atan(deg45);                       // 0.6657737500283538

Math.atan2(deg45, deg90);               // 0.4636476090008061
```

## Number
This is the [wrapper type](/resources/glossary.md#wrapper-type) for numeric primitve values.

### Properties and Methods
Properties:
* `Number.MAX_VALUE` - the largest non-infinite value.
* `Number.MIN_VALUE` - the smallest non-infinite value.

Methods:
* `Number.prototype.toExponential([decimalNum])` - returns a string of the number in exponential notation. Can specify number of digits after decimal point
* `Number.prototype.toFixed(n)` - returns number with specified number of digits after decimal point

``` javascript
Number.MAX_VALUE                        // 1.7976931348623157e+308
Number.MIN_VALUE                        // 5e-324

var num = 1234.5678;

num.toExponential(1);                   // "1.2e+3"
num.toFixed(2);                         // "1234.57"
```

&nbsp;
# Asynchronicity
Running a process seperate from the main thread, outside of the general flow of the application.

Asynchronicity in JavaScript is managed by the __Event Loop__ and the __Event Queue__.

Whenever an asynchronous function call is encountered in the main thread it is placed in the __Event Queue__ instead of on the [__Execution Stack__](#execution-stack).

The __Event Loop__ periodically inspects the Execution Stack. If the Execution Stack is empty the first function from the Queue is placed on it. This is repeated until the Queue is empty.

Each function on the Event Queue needs to be fully processed before the next one can be loaded into the main thread(the execution stack). Be careful with functions that have a long execution time. This could block other asynchronous actions like events(user interaction with your app).

The event loop is a non-blocking mechanism. Most lengthy asynchronous processes like AJAX requests or I/O operations work on a call-wait-then basis - a function is called and waits for a response. While its waiting other functions can be executed.

__Disclaimer__: setTimeout is part of a Web API, not a standard JavaScript feature.
``` javascript
var startRun = new Date();
var countAsync = 0;

var async = function() {
	setTimeout(function() {
        console.log('Async() -> ' + ++countAsync);
        console.log('Execution Time: ' + ((new Date()) - startRun) + 'ms');
	}, 2000);
}

var first = function() {
	console.log('Before async()');
	async();
	async();
	async();
	console.log('After async()');
}

first();

setTimeout(function() {
    console.log('After first()');
    console.log('Execution Time: ' + ((new Date()) - startRun) + 'ms');
}, 1000);

console.log('Synchronous Execution Time: ' + ((new Date()) - startRun) + 'ms');

/* OUTPUT
    Before async()
    After async()
    Synchronous Execution Time: 0ms
    After first()
    Execution Time: 1005ms
    Async() -> 1
    Execution Time: 2004ms
    Async() -> 2
    Execution Time: 2004ms
    Async() -> 3
    Execution Time: 2005ms
*/
```

&nbsp;
# Strict mode
Strict mode runs JavaScript code in a restricted operating environment. This means:
* some errors which are usually silent will throw exceptions
* disallows some features that are hard to optimize for the JavaScript engine
* future-proofs your syntax by disallowing usage of keywords that are or might be included in later ES specifications.
* reduced security risk of in app code execution

__Careful__:\
Strict mode is not cross-browser compatible so be careful when using it in the context of client-side scripting.

## Invocation
Strict mode can only be applied to an execution context. To invoke strict mode place `'use strict';` before any other statement. If invoked in the global scope all functions in that scope also run in strict mode.

``` javascript
// whole script will be in strict mode
'use strict';

var s = 'some statement';

(function() {
    // the entire function will run in strict mode
    'use strict';
    var x = 'this function runs in strict mode';
})();

(function() {
    var inh = 'global scope strict mode applies to this function';
})();

var x = eval('"use strict"; var val = "in strict mode"; val');
```

## Features
Here is a list of strict mode features:
* Errors
    * __non-declared__ variables throw a ReferenceError
    * certain __value assignments__ will throw a TypeError:
        * to a global property
        * to a non-writable property
        * a new property to a non-extensible object
    * __deleting__ an __undeletable__ property will throw a TypeError
    * setting a __property__ on a __primitive__ value throws a TypeError
    * __deleting names__ will throw a SyntaxError
    * __duplicated__ function __parameters__ throw a SyntaxError
    * __octal__ literals(ES6) and escape sequences throw a SyntaxError
    * using `eval` and `arguments` as an identifier throws a SyntaxError
    * using a functions `arguments` object and its properties throws a TypeError
* Optimization
    * enables better mapping of variables to their definitions in code
* Security
    * `this` is not autoboxed. If unspecified will default to `undefined`.
    * disabling usage of `arguments` object disallows accessing private variables
* Future-proof
    * the following words throw a Syntax Error when used as identifiers:
        * `implements`
        * `interface`
        * `let`
        * `package`
        * `private`
        * `protected`
        * `public`
        * `static`
        * `yield`


``` javascript
'use strict';
x = 5;                                  // ReferenceError

var obj = Object.create({}, {
    cantWrite: {
        value: 10,
        writable: false
    }
});

var obj2 = { a: 1, b: 2};
Object.freeze(obj2);

undefined = 10;                         // TypeError
obj.cantWrite = 20;                     // TypeError
obj2.c = 'nope';                        // TypeError

delete obj.cantWrite;                   // TypeError
delete Object.prototype;                // TypeError

undefined.prop = 5;                     // TypeError
Infinity.val = true;                    // TypeError

delete Object                           // SyntaxError
delete undefined                        // SyntaxError
var name;
delete name;                            // SyntaxError

function dupl(x, x) {                   // Syntax Error
    var whatever = 10;
    return x * whatever;
}

0123                                    // Syntax Error - ES6
'\0123'                                 // Syntax Error

var eval;                               // Syntax Error
var arguments;                          // Syntax Error

(function(){
    console.log(arguments.callee);      // TypeError
})();

(function(){
    console.log(this);                  // undefined
})();

var implements;                         // SyntaxError
var interface;                          // SyntaxError
var let;                                // SyntaxError
var package;                            // SyntaxError
var private;                            // SyntaxError
var protected;                          // SyntaxError
var public;                             // SyntaxError
var static;                             // SyntaxError
var yield;                              // SyntaxError
```