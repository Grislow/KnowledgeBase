Reference for Javascript features introduced in the ECMAScript 2015(ES6) specification. This reference assumes knowledge of core JS concepts.

#### Table of contents

* [Arrow functions](#arrow-functions)
* [Block Scoped Declarations](#block-scoped-declarations)
* [Classes](#classes)
    * [Class Definition](#class-definition)
    * [Static Properties](#static-properties)
    * [Class Inheritance](#class-inheritance)
* [Default Parameters](#default-parameters)
* [Destructuring](#destructuring)
* [Enhanced Object Literals](#enhanced-object-literals)
* [Enhanced Regular Expressions](#enhanced-regular-expressions)
* [Generators](#generators)
* [Iteration Protocols](#iteration-protocols)
	* [Iterable](#iterable)
	* [Iterator](#iterator)
	* [For-of Loop](#for-of-loop)
* [Map and Set](#map-and-set)
* [Metaprogramming](#metaprogramming)
    * [Symbols](#symbols)
        * [Symbol Properties](#symbol-properties)
        * [Global Symbol Registry](#global-symbol-registry)
        * [Well-known Symbols](#well-known-symbols)
    * [Reflection](#reflection)
    * [Proxying](#proxying)
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
* [Tail Call Optimization](#tail-call-optimization)
* [Template Literals](#template-literals)
    * [Interpolation](#interpolation)
    * [Raw String content](#raw-string-content)
* [Typed Arrays](#typed-arrays)



&nbsp;
# Arrow Functions
An unnamed function expression that lexically binds its context and allows for some syntactic sugar.  

__Syntactic Sugar__:
* omit paranthesis around parameter list if function takes 1 parameter
* if function body only contains a single statement you can omit enclosing curly brackets and the `return` keyword

``` javascript
// Syntactic Sugar - parameter list
let oneParam = param => 'One param, no enclosing paranthesis';

let noParam = () => console.log('no parameters require paranthesis');

let lotsParam = (a, b) => {
    console.log('more than one parameters');
    console.log('require enclosing paranthesis')
}

// Syntactic Sugar - function body
let oneParam = (param, param2) => 'One return value: ' + (param + param2);

let multipleStatement = () => {
    console.log('multiple statements');
    console.log('require enclosing curly brackets');
}

// Syntactic Sugar - function composition
let composed = a => b => a + b;

composed(2)(4);
    //> 6
```

Lexically bound context means the `this` keyword is inherited from its enclosing execution context.

``` javascript
/*
    In Chrome
*/
let objES6 = {
    prop: 10,
    method: function() {
        (() => console.log(this.prop))();
    }
}

var objES5 = {
    prop: 10,
    method: function(){
        (function(){
            console.log(this.prop);
        })();
    }
}

objES6.method();                        //> 10
objES5.method();                        //> undefined
```

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
A syntactically familiar way of creating class-like constructs and implementing class inheritance. This still involves prototypal inheritance and does not introduce a new class model.

A Class consists of:
* `class` statement
* optional __class name__, by convention starts with capital letter
* the __class body__ surrounded by braces `{ }`. Within the class body:
    * An optional `constructor` method used to initialize instances
    * __prototype methods__ declared outside the constructor method

__Important__
* The class body is executed in [strict mode](/javascript/md/es5.md#strict-mode).
* class declarations are not hoisted.
* classes come with all the draw backs of [constructor functions](/javascript/md/es5.md#constructor-function).
* classes enforce instantiating with the `new` keyword. Omitting it will result in a TypeError

``` javascript
// ES6 'classes'
class PersonES6 {
    // constructor method
    constructor(name, nationality) {
        this.name = name;
        this.nationality = nationality;
    }

    // prototype method
    toString() {
        return this.name + ' is from ' + this.nationality;    
    }
}

// ES5 'classes'
// constructor function
function PersonES5(name, nationality){
	this.name = name;
    this.nationality = nationality;
    this.ins
}

// prototype method
PersonES5.prototype.toString = function() {
    return this.name + ' is from ' + this.nationality
}

// Comparison
let perES6 = new PersonES6('John', 'England');
let perES5 = new PersonES5('George', 'USA');

console.log(perES6.constructor.prototype);
/*
    constructor: class PersonES6
    toString: ƒ toString()
    __proto__: Object
*/

console.log(perES5.constructor.prototype);
/*
    toString: ƒ ()
    constructor: ƒ PersonES5(name, nationality)
    __proto__: Object
*/
```

## Class Definition
A class can be defined through a declaration or an expression.

``` javascript
// Declaration
class Declared {
    constructor(example) {
        this.example = example;
    }
}

// Expression
let Expressed1 = class Named {
    constructor(example) {
        this.example = example;
    }
}

let Expressed2 = class {
    constructor(example) {
        this.example = example;
    }
}

let declared = new Declared('Class declaration');
let expressed1 = new Expressed1('Named class expression');
let expressed2 = new Expressed2('Unnamed class expression');
```

## Static Properties
Static properties are bound to the class, not to instances of it. Static methods are defined in the class body using the `static` keyword. Non-method static properties must be declared outside the class body.

``` javascript
class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    thisInstance() {
        return this;
    }
    static thisTest() {
        return this;
    }
    static compare(test1, test2) {
        return test1.a === test2.a && test1.b === test2.b;
    }
}

Test.staticProp = 10;

let t1 = new Test(1, 2);
let t2 = new Test(1, 2);

t1.thisInstance();                      // Test {a: 1, b: 2}
t1.thisTest();                          // TypeError
Test.thisTest();                        // class Test {...}

t1 === t2                               // false
Test.compare(t1, t2);                   // true
```

## Class Inheritance
A subclass inherits from a parent class using the `extend` and `super` keyword.

`extend` is used right after the class identifier to link it with an existing class.

`super` is used to access the parent class properties including its constructor.

Classes can only inherit from constructor functions or other classes.

``` javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        return 'Hi, I\'m ' + this.firstName;
    }
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Cowboy extends Person {
    constructor(firstName, lastName) {
        // calling the Person constructor
        super(firstName, lastName);
    }
    greet() {
        const greet = 'Howdy there partner!';
        const name = super.getName();
        return `${greet} Ma name be ${name}`;
    }
}

let pete = new Cowboy('Lil', 'Pete');
pete.greet();
    //> "Howdy there partner! Ma name be Lil Pete"
```

&nbsp;
# Default Parameters
Setting default function parameters. Before ES6 function parameters always defaulted to `undefined`.
``` javascript
function def(a , b = 5, condition = true) {
    if(condition) {
        return a + b;
    }
}
def(10);
    //> 15
```

&nbsp;
# Destructuring
A shorthand syntax for extracting array elements or object propeties into seperate variables.

``` javascript
// Arrays
let arr = [1, 2, 3, 4];
[one, , ,four, five] = arr;

console.log(one);                       // 1
console.log(four);                      // 4
console.log(five);                      // undefined

// Objects
let obj = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30
}

let { lastName: name, age, prop } = obj;

console.log(name);                      // Smith
console.log(age);                       // 30
console.log(prop);                      // undefined
```

Default parameters can be used with destructuring.

``` javascript
let arr = [1, 2];
let [one, two, three = 3];

console.log(three);                     // 3
```

__Examples__:
* destructuring a module
* destructuring for use as function parameters

``` javascript
// module
import { Component } from 'react';

// function parameters
function listen({ type, msg }) {
    console.log('Caught ' + type + ' event');
    console.log('MSG: ' + msg);
}

let event = {
    type: 'click',
    el: 'button',
    textContent: 'submit',
    msg: 'The registration form has been submitted'
}

listen(event);
/*
    Caught click event
    MSG: The registration form has been submitted
*/
```

&nbsp;
# Enhanced Object Literals
__Shorthand notation__:
* propety assignment -  if a key is the same as its values identifier you can simply type in the identifier.
* methods - you can omit the function keyword

__Computed property names__: 
* use an expression to set the key of an objects property

``` javascript
let userId = 123456;

// Shorthand notation
let user = {
    userId,                             // ES5 -> userId: userId
    getUserId() {                       // ES5 -> getUserId: function(){ ... }
        return userId;
    }
};

// Computed property names
let obj = {
    [userId]: 'John Smith',
    [userId + 1]: 'John Doe'
}
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
// sticky
let strSticky = 'foo1234foo';

let regExp = /foo/y;
console.log(regExp.sticky);             //> true

regExp.lastIndex = 7;

strSticky.match(regExp);
    //> ["foo", index: 7]

// unicode
let strUnicode = "A letter from the polish alphabet - ó";

let regExp = /\u{f3}/u;
console.log(regExp.unicode);            //> true

strUnicode.match(regExp);
    //> ["ó", index: 36]
```

&nbsp;
# Generators
Functions that can pause, allowing other code to run, and resume execution at a later time. Generators implement the [iteration protocols](#iteration-protocols).

A generator is defined by placing an asterisk between the `function` keyword and the function identifier. 

``` javascript
function* generatorExample() {...}
```

The `yield` keyword is used to return an iterator object and remove the generators execution context from the execution stack. 

The iterator object returned through a `yield` statement contains the following properties:
* a return value
* `done` property - contains a boolean value indicating if the generator finished execution
* `next([val])` method - calling it resumes execution. Optionally a value can be passed and used within the generator.

A generator is considered _done_ when the final `yield` statement is executed.

``` javascript


```

&nbsp;
# Iteration Protocols
Protocols that allow specifying how an object is iterated over. 

## Iterable
A protocol specifying how an object is iterated over. To implement it an object must have a property with the `Symbol.iterator` as its key and a function as its value. The function needs to return an [iterator object](#iterator).


JavaScript comes with some built-in iterable objects:
* Array
* Map
* Set
* String
* TypedArray

``` javascript
// Custom iterable
let obj = {
    [Symbol.iterator]: function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    }
}

console.log([...obj]);                  // ["a", "b", "c"]

// Built-in iterables
let arr = [1, 2, 3, 4];
console.log([...arr, 5]);               // [1, 2, 3, 4, 5]

//map

let str = 'a string';
console.log([...str]);
    //>  ["a", " ", "s", "t", "r", "i", "n", "g"]

let int8 = new Int8Array(5);
console.log([...int8]);                 // [0, 0, 0, 0, 0]


```

## Iterator
A protocol specifying how an object produces a sequence of values. To implement it an object must have a `next()` method.

`next()` - a function with no parameters that returns an object with the following properties:
    * __done__ - boolean type property. `true` if the final value of a sequence has been iterated over. `false` if a non-final value of a sequence has been iterated over.
    * __value__ - a value returned by the iterator.

``` javascript
let iteratorExample = {
    str: 'some string',
    index: 0,
    next: function() {
        let done = (this.index >= this.str.length);
        let value = this.str[this.index];
        this.index += 2;
        return {
            done,
            value
        }
    }
}

iteratorExample.next()
    //> {done: false, value: "s"}
iteratorExample.next()
    //> {done: false, value: "m"}
iteratorExample.next()
    //> {done: false, value: " "}
iteratorExample.next()
    //> {done: false, value: "t"}
iteratorExample.next()
    //> {done: false, value: "i"}
iteratorExample.next()
    //> {done: false, value: "g"}
iteratorExample.next()
    //> {done: true, value: undefined}
```

## For-of Loop


&nbsp;
# Map and Set

&nbsp;
# Metaprogramming
Features that allow dynamic analysis, generatation and transformation of source code.

Credits: [Keith Cirkel](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)

## Symbols
A new primitive value that can only be created through the `Symbol()` function. The function takes an optional description string argument which can be used for debugging.

See [__well-known symbols__](#well-known-symbols) to check how Symbols can be used for metaprogramming. 

``` javascript
let sym = Symbol();
let symWithDesc = Symbol('description');

typeof sym                              // "symbol"
```
### Symbol Properties
Symbols can be used as property keys. These properties:
* local symbols are always unique even if they have the same description
* are non-enumerable
* cannot be accessed through the `Object.getOwnPropertyNames()` method
* can be accessed through the `Object.getOwnPropertySymbols()` method

``` javascript
// Are unique
let sym1 = Symbol();
let sym2 = Symbol();

sym1 === sym2;                          // false

// Can be used as property keys
let obj = {
    enumProp: 1,
    [sym1]: 10,
    [sym2]: 20
}

console.log(obj);
    //> {enumProp: 1, Symbol(): 10, Symbol(): 20}

console.log(obj[sym1]);                 // 10
console.log(obj[sym2]);                 // 20

/* 
    Object.getOwnPropertySymbols()
*/
let objSymbols = Object.getOwnPropertySymbols(obj);
console.log(objSymbols);
    //> [Symbol(), Symbol()]

/*
    Inaccessible through other means
*/
for(x in obj) {
    console.log(x);
}                                       // enumProp

let props = Object.getOwnPropertyNames(obj);
console.log(props);
    //> ["enumProp"]

```

### Global Symbol Registry
Global Symbols can be created using the `Symbol.for()` method. Symbols created this way are assigned to the __global Symbol registry__. Global symbols are _cross-realm_ meaning they are shared across iframes and service workers and __are not always unique__.

`Symbol.for([desc])` - creates a global Symbol with an optional description.

`Symbol.keyFor(sym)` - retrieves the Symbol key from the global Symbol registry based on the passed Symbol

``` javascript
let globalSym = Symbol.for('desc');
let localSym = Symbol('desc');

console.log(Symbol.keyFor(globalSym));  // desc
console.log(Symbol.keyFor(localSym));   // undefined
```

### Well-known Symbols
Static properties of the Symbol class that are used by JavaScript internals. These can be implemented in custom objects to enhance how they work with built-in JS features.

For a full list of well-known symbols check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols).

#### __Symbol.hasInstance__
Used in conjunction with the `instanceof` operator to check if one operand is an instance of another operand. 

Allows customizing how an object checks if another object is an instance of it. 

``` javascript
class Duck {
    static [Symbol.hasInstance](instance) {
        return instance.quack && instance.swim;
    }
}

class DuckSubClass {
    constructor(quack, swim) {
        this.quack = quack;
        this.swim = swim;
    }
}

let aDuck = new DuckSubClass('Quaaack', '10km/hour');

aDuck instanceof Duck;                  // true
```

#### __Symbol.iterator__
Used in conjunction with the `for...of` loop, [spread operator](#spread-operator) and array [destructuring](#destructuring). 

Allows customizing how an object is iterated over by assigning a generator function or an [iterable](#iterable) object to __Symbol.iterator__. 

An iterator should always return an [iterable](#iterable) object, like a generator or a built-in iterable. 

``` javascript
let obj = {
    [Symbol.iterator]: function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    }
}

// for...of loop
let concat = '';
for(x of obj) {
    concat += x;
}
console.log(concat);                    // abc

// Spread Operator
console.log([...obj, 'd']);             // ["a", "b", "c", "d"]

// Array Destructuring
[a, , c] = obj
console.log(a);                         // a
console.log(c);                         // c

```

#### __Symbol.match__
Used in conjunction with the `String.prototype.match()` method.

Allows customizing how an object is matched in a String when passed as an argument to the `String.prototype.match(obj)` function.

``` javascript
const john = {
    firstName: 'John',
    lastName: 'Doe',
    [Symbol.match](string) {
        const first = string.indexOf(this.firstName);
        const last = string.indexOf(this.lastName);
        if(first === -1 || last === -1) {
            return null;
        }
        return {firstName: first, lastName: last};
    }
}

let greeting = 'Hi, John here. Last name Doe';
let morgue = 'We\'ve got another John Doe over here';

greeting.match(john);                   // {firstName: 4, lastName: 25}
morgue.match(john);                     // {firstName: 18, lastName: 23}
```

#### __Symbol.replace__
Used in conjunction with the `String.prototype.replace()` method.

Allows customizing how an object replaces elements in a String when passed as an argument to the `String.prototype.replace(obj)` function.

``` javascript
const protocol = {
    with: 'https',
    replace: ['http', 'ftp', 'mailto', 'ldap'],
    [Symbol.replace](string) {
        let clone = string;
        this.replace.forEach(proto => {
            let index = string.indexOf(proto);
            if(index !== -1) {
                clone = clone.replace(proto, this.with);
            }
        });
        return clone;
    }
}

const uri1 = 'mailto:John.Doe@example.com';
const uri2 = 'http://google.com';
const iUse = 'I use http, mailto, ftp and ldap';

uri1.replace(protocol);                 
    //> "https:John.Doe@example.com"
uri2.replace(protocol);                 
    //> "https://google.com"
iUse.replace(protocol);                 
    //> "I use https, https, https and https"
```

#### __Symbol.search__
Used in conjunction with the `String.prototype.search()` method.

Allows customizing how an object is searched for in a String when passed as an argument to the `String.prototype.search(obj)` function.

``` javascript
const iSpy = function(what) {
    return {
        [Symbol.search](string) {
            const index = string.indexOf(what);
            return index !== -1;
        }
    }
}

let surrounding = `
A yellow phone on a wooden table.
Two monitors and a black keyboard.
`;

surrounding.search(iSpy('black keyboard'));
    //> true
surrounding.search(iSpy('computer'));
    //> false
```

#### __Symbol.split__
Used in conjunction with the `String.prototype.split()` method.

Allows customizing how an object is used to split a String into an array of substrings.

``` javascript
const indexedSplit = function(delim) {
    return {
        [Symbol.split](string) {
            let arr = [],
                delimLen = delim.length,
                substr = string,
                start = 0,
                value = 0,
                end;
            do {
                end = substr.indexOf(delim);
                if(end === -1) {
                    arr.push((value++) + '. \'' + substr + '\'');
                } else {
                    insert = substr.slice(start, end);
                    substr = substr.slice(end + delimLen);
                    arr.push((value++) + '. \'' + insert + '\'');
                    start = end + delimLen;
                }
            } while(end !== -1);
            return arr;
        }
    }
}

let str = 'John Doe';
str.split(indexedSplit(' '));
    //> ["0. 'John'", "1. 'Doe'"]
str.split(indexedSplit('o'));
    //>  ["0. 'J'", "1. ' D'", "2. 'e'"]
```

#### __Symbol.toPrimitive__
Used in conjunction with implicit type coercion.

Allows customizing how an object is coerced into a primitive value:
* __\[Symbol.toPrimitive]('number')__ - how the object is coerced to a number
* __\[Symbol.toPrimitive]('string')__ - how the object is coerced to a string
* __\[Symbol.toPrimitive]('default')__ - how the object is coerced to a boolean

``` javascript
let meal = {
    [Symbol.toPrimitive](hint) {
        switch(hint){
            case 'number': return 0;
            case 'string': return '🍔';
            case 'default': return false;
        }
    }
}

console.log(+meal);                     // 0
console.log(`${meal}`);                 // 🍔
console.log(meal+'');                   // false
```

#### __Symbol.toStringTag__
Used in conjunction with the `Object.prototype.toString()` method.

Allows customizing the String tag returned when invoking the `toString()` method on an object.
``` javascript
let normalObj = {};
let taggedObj = {
    get [Symbol.toStringTag]() {
        return 'Tagged';
    }
}

normalObj.toString();                   // "[object Object]"
taggedObj.toString();                   // "[object Tagged]"
```

## Reflection


## Proxying


&nbsp;
# Modules
Modules are in strict mode by default.

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

``` javascript

```

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
Array-like objects that store numerical elements that can be represented by a specified number of bytes. Can be useful when dealing with streams of binary data.

Typed Arrays mostly have the same properties and methods as normal Arrays with some extra properties for working with Array Buffers. More on this in [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

Typed Arrays:
|Name|Value Range|Element Size(bytes)|Element Description|
|----|:-----------:|:------------:|-------------------|
Int8Array|__-128__ to __127__|	1	|8-bit signed integer|
Uint8Array|	__0__ to __255__|	1	|8-bit unsigned integer|
Uint8ClampedArray|__0__ to __255__|	1	|clamped 8-bit unsigned integer|
Int16Array|	__-32768__ to __32767__|	2	|16-bit two's complement signed integer|
Uint16Array|__0__ to __65535__|	2	|16-bit unsigned integer|
Int32Array|	__-2147483648__ to __2147483647__|	4	|32-bit two's complement signed integer|
Uint32Array|__0__ to __4294967295__|	4	|32-bit unsigned integer|
Float32Array|__1.2 x 10<sup>-38</sup>__ to __3.4 x 10<sup>38</sup>__|	4	|32-bit floating point number (max 7 digits)|
Float64Array|__5.0 x 10<sup>-324</sup>__ to __1.8 x 10<sup>308</sup>__|	8	|64-bit floating point number (max 16 digits)|
BigInt64Array|	__-2<sup>63</sup>__ to __2<sup>63</sup>-1__|	8	|64-bit signed integer|
BigInt64Array|	__0__ to __2<sup>64</sup>-1__|	8	|64-bit unsigned integer|

``` javascript
let int8 = new Int8Array([-128, 0, 127]);
let uint8 = new Uint8Array([0, 127, 255]);
let int8 = new Uint8ClampedArray([-128, 0, 127]);
let int8 = new Int16Array([-128, 0, 127]);
let int8 = new Uint16Array([-128, 0, 127]);
let int8 = new Uint32Array([-128, 0, 127]);
let int8 = new Float32Array([-128, 0, 127]);
let int8 = new Float64Array([-128, 0, 127]);
let int8 = new BigInt64Array([-128, 0, 127]);
let int8 = new BigInt64Array([-128, 0, 127]);

```

__Constructor__
* `new TypedArrName(length)` - creates a typed array of a predefined length
* `new TypedArrName(obj)` - creates a typed array out an array-like object
* `new TypedArrName(typedArr)` - creates a typed array from another typed array

``` javascript
let int16 = new Int16Array(5);
    //> [0, 0, 0, 0, 0]
let int8 = new Uint8Array([-10, ]);
    //>


```
