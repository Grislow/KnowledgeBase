Reference for Javascript features introduced in the ECMAScript 2015(ES6) specification. This reference assumes knowledge of core JS concepts.

Main sources:
* [MDN](https://developer.mozilla.org/en-US/)
* http://es6-features.org
* [flaviocopes](https://flaviocopes.com/es6/#generators)
* a whole lot of articles and blogs

#### Table of contents

* [Arrow functions](#arrow-functions)
* [Block Scoped Declarations](#block-scoped-declarations)
* [Classes](#classes)
    * [Class Definition](#class-definition)
    * [Static Properties](#static-properties)
    * [Class Inheritance](#class-inheritance)
* [Collections](#Collections)
    * [Map](#map)
    * [Set](#set)
    * [Weak-Link Collections](#weak-link-collections)
    * [Typed Arrays](#typed-arrays)
* [Destructuring](#destructuring)
* [Enhanced Object Literals](#enhanced-object-literals)
* [Enhanced Parameter Handling](#enhanced-parameter-handling)
    * [Default Parameters](#default-parameters)
    * [Rest Parameters](#rest-parameters)
    * [Spread Operator](#spread-operator)
* [Enhanced Regular Expressions](#enhanced-regular-expressions)
* [Generators](#generators)
* [Internalization and Localization](#internalization-and-localization)
* [Iteration Protocols](#iteration-protocols)
	* [Iterable](#iterable)
	* [Iterator](#iterator)
	* [For-of Loop](#for-of-loop)
* [Metaprogramming](#metaprogramming)
    * [Symbols](#symbols)
        * [Symbol Properties](#symbol-properties)
        * [Global Symbol Registry](#global-symbol-registry)
        * [Well-known Symbols](#well-known-symbols)
    * [Reflect](#reflect)
    * [Proxy](#proxy)
* [Modules](#modules)
* [New Methods](#new-methods)
    * [Array Methods](#array-methods)
    * [Math Methods](#math-methods)
    * [Number Methods](#number-methods)
    * [Object Methods](#object-methods)
    * [String Methods](#string-methods)
* [New Number Constants](#new-number-constants)    
* [New Numeric Literals](#new-numeric-literals)
* [Promises](#promises)
* [Tail Call Optimization](#tail-call-optimization)
* [Template Literals](#template-literals)

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
# Collections
New built in array-like objects.

# Map
A ordered collection of key-value pairs. Before ES6 objects where usually used for this purpose.

__Characteristics__:
* keys can be of any data-type.
* keys are unique
* [iterable](#iterable)
* has a `size` property indicating the number of stored key-value pairs
* optimized for fast addition/removal of key-value pairs

__Maps over Object__:
* when keys are unknown until execution phase
* when all keys are of the same data type and all values are of the same data type
* storing primitive values as keys

``` javascript
/* 
    Keys of any data-type
*/
let primitiveMap = new Map([
    [true, 'boolean key'],
    [10,'number key'], 
    ['string', 'string key'],
    ['string', 'same key?']
]);

let anyTypeMap = new Map([
    [{}, 'object key'], 
    [function f(){}, 'function key'],
    [NaN, 'NaN key'],
    [undefined, 'undefined key'],
    [null, 'null key']
])

/*
    Keys are unique
*/
console.log(primitiveMap);
    //> {true => "boolean key", 10 => "number key", "string" => "same key?"}
    // "string" => 'string key' was overwritten

/*
    Iterable
*/
for(let [key, val] of anyTypeMap) {
    console.log(`${key}: ${val}`);
}
    //> [object Object]: object key
    //> function f(){}: function key
    //> NaN: NaN key
    //> undefined: undefined key
    //> null: null key

let [arr,,] = primitiveMap;

console.log(arr);
    //> [true, "boolean key"]

/*
    Size property
*/
console.log(anyTypeMap.size);
    //> 5

/*
    Optimized addition
    -as seen below it depends on the runtime
*/
let timeFunc = function(func) {
    let before = new Date();
    func();
    let after = new Date();
    return 'Execution time: ' + (after - before) + 'ms';
}

let map = new Map();
let obj = {};

timeFunc(() => {
    for(let i = 0; i < 100000; i++) {
        map.set(i , i);
    }
}); //> "Execution time: 12ms"

timeFunc(() => {
    for(let i = 0; i < 100000; i++) {
        obj[i] = i;
    }
}); //> "Execution time: 4ms"

/*
    Optimized deletion
    -as seen below it depends on the runtime
*/
timeFunc(() => {
    for(let i = 0; i < 100000; i++) {
        map.delete(i);
    }
}); //> "Execution time: 12ms"

timeFunc(() => {
    for(let i = 0; i < 100000; i++) {
        delete obj[i];
    }
}); //> "Execution time: 7ms"
```

Map instance methods:
* `Map.prototype.set(key, value)` - adds or updates a key-value pair
* `Map.prototype.get(key)` - returns the value matching the specified key
* `Map.prototype.has(key)` - returns a boolean indicating if a key exists
* `Map.prototype.forEach(func)` - iterators over each key-value pair
* `Map.prototype.entries()` - returns an iterator object containing all key-value pairs
* `Map.prototype.keys()` - returns an iterator object containing all keys
* `Map.prototype.values()` - returns an iterator object containing all value
* `Map.prototype.delete(key)` - deletes the specified key-value pair
* `Map.prototype.clear()` - removes all key-value pairs

``` javascript
let map = new Map([
    [1, 'one'],
    [2, 'two']
])

map.set(3, 'three');
    //> Map(3) {1 => "one", 2 => "two", 3 => "three"}
map.set(1, 'ONE');
    //> Map(3) {1 => "ONE", 2 => "two", 3 => "three"}

map.get(3);
    //> "three"
map.get(4);
    //> undefined

map.has(1);
    //> true
map.has(4);
    //> false

map.forEach((val, key) => console.log(`${key}: ${val}`));
    //> 1: ONE
    //> 2: two
    //> 3: three

let mapIterator = map.entries();
mapIterator.next().value;               //> [1, "ONE"]
mapIterator.next().value;               //> [2, "two"]
mapIterator.next().value;               //> [3, "three"]

let keyIterator = map.keys();
keyIterator.next().value;               //> 1
keyIterator.next().value;               //> 2
keyIterator.next().value;               //> 3


let valueIterator = map.values();
valueIterator.next().value;             //> "ONE"
valueIterator.next().value;             //> "two"
valueIterator.next().value;             //> "three"

map.delete(1);                          //> true
console.log(map);
    //> Map(2) {2 => "two", 3 => "three"}

map.clear();
console.log(map);
    //> Map(0) {}
```

__Careful:__\
Objects are stored by reference. Remember this when assigning an object literal as a key. You will not be able to access it directly(only through enumaration). For example: 
* `{} === {}` is false
* `[1, 2, 3] === [1, 2, 3]` is false
* `(function () {}) === (function () {})` is false

``` javascript
let map = new Map([
    [{}, 'object literal'],
    [[], 'array literal'],
    [function () {}, 'function expression']
])

map.get({});                            //> undefined
map.get([]);                            //> undefined
map.get(function () {});                //> undefined

for(let [key, value] of map) {
    console.log(`${key} : ${value}`);
}
    //> [object Object] : object literal
    //>  : array literal
    //> function () {} : function expression
```

# Set
An ordered iterable collection of unique values of any data type.

The number of elements is stored in the `size` property.

``` javascript
let arr = [1, 1, 2, 2, 3, 3];
let str = 'aaabbbccc';

let set = new Set(arr);
console.log(set);                       //> Set(3) {1, 2, 3}

let strSet = new Set(str);
console.log(strSet);                    //> Set(3) {"a", "b", "c"}

let emptySet = new Set();
console.log(emptySet);                  //> Set(0) {}

/*
    size property
*/
console.log(set.size);                  //> 3
console.log(emptySet.size);             //> 0

/*
    is iterable
*/
for(let el of set) {
    console.log(el);
}
    //> 1
    //> 2
    //> 3
```

Set instance methods:
* `Set.prototype.add(value)` - adds an element
* `Set.prototype.has(value)` - returns a boolean indicating if a value exists
* `Set.prototype.forEach(func)` - iterates over each element
* `Set.prototype.entries()` - returns an iterator object containing all values as value-value pairs. The values in the pairs are the same - implemented this way to mimick a maps `entries()` method behavior.
* `Set.prototype.values(value)` - returns an iterator object containing all values
* `Set.prototype.delete(value)` - removes specified element
* `Set.prototype.clear()` - removes all elements

``` javascript
let set = new Set([1,2]);

set.add(3);
console.log(set);
    //> Set(3) {1, 2, 3}

set.has(3);
    //> true
set.has(4);
    //> false

set.forEach(el => console.log(el))
    //> 1
    //> 2
    //> 3

let entryIterator = set.entries();
entryIterator.next().value;             //> [1, 1]
entryIterator.next().value;             //> [2, 2]
entryIterator.next().value;             //> [3, 3]

let valueIterator = set.values();
valueIterator.next().value;             //> 1
valueIterator.next().value;             //> 2
valueIterator.next().value;             //> 3

set.delete(3);                          //> true
console.log(set);                       //> Set(2) {1, 2}

set.clear();
console.log(set);
    //> Set(0) {}
```
## Weak-Link Collections
Weak-link collections make use of weak references to objects. A weak reference means that if it is the only reference to an object that object can be garbage collected. Because of this weak-link collections are not iterable.

These data-structures are used as a memory efficient alternative to their non-weak linked counterparts. 

__WeakMap__: like a [Map](#map) but keys can only be objects. The stored reference to objects is weak - if there is no reference to a key or its value it may be garbage collected. 

Available methods:
* `WeakMap.prototype.delete(key)`
* `WeakMap.prototype.get(key)`
* `WeakMap.prototype.has(key)`
* `WeakMap.prototype.set(key, value)`

__WeakSet__: like a [Set](#set) but values can only be objects. The stored reference to objects is weak - if there is no reference to a value it may be garbage collected.

Available methods:
* `WeakSet.prototype.delete(value)`
* `WeakSet.prototype.add(value)`
* `WeakSet.prototype.has(value)`

``` javascript
let obj1 = {};
let obj2 = {};

let weakmap = new WeakMap([
    [obj1, 'val1'],
    [obj2, 'val2']
])

let weakset = new WeakSet([obj1, obj2]);

console.log(weakmap);
    //> WeakMap {{…} => "val1", {…} => "val2"}
console.log(weakset);
    //> WeakSet {{…}, {…}}

/* 
    not iterable
*/
for(let [key, value] of weakmap) {
    console.log(`${key} : ${value}`);
}
    //> TypeError: weakmap is not iterable

for(let value of weakset) {
    console.log(value);
}
    //> TypeError: weakset is not iterable

```

# Typed Arrays
Array-like objects that store numerical elements that can be represented by a specified number of bytes. Can be useful when dealing with streams of binary data.

Typed Arrays mostly have the same properties and methods as normal Arrays with some extra properties for working with Array Buffers. More on this in [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray).

Unsigned means there is no bit representing the numbers sign. In effect only positive values and 0 are stored.

Clamped arrays set out of range numbers to either the highest or lowest possible value within the arrays element size.

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
BigUInt64Array|	__0__ to __2<sup>64</sup>-1__|	8	|64-bit unsigned integer|

``` javascript
let int8 = new Int8Array([-128, 0, 127]);
let uint8 = new Uint8Array([0, 127, 255]);
let clampedUint8 = new Uint8ClampedArray([0, 127, 255]);
let int16 = new Int16Array([-32768, 0, 32767]);
let uint16 = new Uint16Array([0, 65535]);
let int32 = new Int32Array([-2147483648, 0, 2147483647]);
let uint32 = new Uint32Array([0, 4294967295]);
let float32 = new Float32Array([1.2*10**(-38), 0, 3.4*10**38]);
let float64 = new Float64Array([5*10**(-324), 0, 1.8*10**308]);

// Clamped
let clamped = new Uint8ClampedArray([-100, 300, 123132143]);
    // Uint8ClampedArray(3) [0, 255, 255]
```

__Constructor__
* `new TypedArrName(length)` - creates a typed array of a predefined length
* `new TypedArrName(obj)` - creates a typed array out of an array-like object
* `new TypedArrName(typedArr)` - creates a typed array from another typed array

TypedArray are often constructed using an `ArrayBuffer`.

``` javascript
let int16 = new Int16Array(5);
    //> [0, 0, 0, 0, 0]
let int8 = new Uint8Array([-10, -129, -130, 130, 0.123]);
    //> Uint8Array(5) [246, 127, 126, 130, 0]

let buffer = new ArrayBuffer(8)
    // creates an 8 byte buffer
    // the buffer cannot be manipulated directly

let int32 = new Int32Array(buffer);
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
# Enhanced Parameter Handling

## Default Parameters
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

## Rest Parameters
A syntax that allows representing an indefinite number of parameters.

``` javascript
function addTo(start, ...values) {
    return values.reduce((acc, val) => {
        return acc + val;
    }, start)
}

addTo(10, 1, 2, 3);                     //> 16
addTo('Hi, ', 'im', ' ', 'Greg');       //> "Hi, im Greg"
```


## Spread Operator
Expands an iterable object or a non-iterable objects enumerable properties.

``` javascript
let arr = [1, 2, 3];
let str = 'string';

// spread an array
let newArr = [0, ...arr];
console.log(newArr);                    //> [0, 1, 2, 3]

// spread a string 
let strArr = [...str];
console.log(strArr);                    //> ["s", "t", "r", "i", "n", "g"]

// spread a function argument
function everyOther(){
    let str = '';
    for(let i = 0; i < arguments.length; i += 2) {
        str += arguments[i];
    }
    return str;
}

everyOther(...str);                     //> "srn"
everyOther(str);                        //> "string"
everyOther(...arr);                     //> "13"
everyOther(arr);                        //> "1,2,3"

// spread an object
let obj = Object.create(null, {
    val1: {
        value: 10,
        enumerable: true
    },
    val2: {
        value: 20,
        enumerable: true
    },
    val3: {
        value: 30,
        enumerable: false
    }
})

let objClone = {...obj};
console.log(objClone);
    //> {val1: 10, val2: 20}
    // only enumerable properties
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

A generator function is defined by placing an asterisk between the `function` keyword and the function identifier. 

``` javascript
function* generatorExample() {...}
```

A generator method(using es6 shorthand syntax) is defined by placing an asterisk before the method identifier.

``` javascript
obj = {
    * genFun() {...}
}
```

The `yield` keyword is used to return an iterator object(or yield a value depending on the context) and remove the generators execution context from the execution stack. 

The iterator object returned through a `yield` statement contains the following properties:
* a return value
* `done` property - contains a boolean value indicating if the generator finished execution
* `next([val])` method - calling it resumes generators execution. Optionally a value can be passed and used within the generator.

A generator is considered _done_ when the final `yield` is executed or a `return` statement is encountered.

Generator can be used in many ways and involve some interesting data patterns. Read more about this on [exporingjs](http://exploringjs.com/es6/ch_generators.html#sec_generators-as-observers).

``` javascript
// Basic generator
function * simpleGen() {
    yield 1;
    yield 2;
}

let simpleIterator = simpleGen();
simpleIterator.next();                  // {value: 1, done: false}
simpleIterator.next();                  // {value: 2, done: false}
simpleIterator.next();                  // {value: undefined, done: true}

// Return in generator
function * returnGen() {
    yield 10;
    return 20;
    yield 30;   // unreachable
}
let retIterator = returnGen();
retIterator.next();                     // {value: 10, done: false}
retIterator.next();                     // {value: 20, done: false}
retIterator.next();                     // {value: undefined, done: true}
```

The `yield*` expression yields data from another generator or iterable.

``` javascript
function* gen() {
    yield 1;
    yield 2;
}

let arr = [3, 4];

function* delegatingGen() {
    yield* gen();
    yield* arr;
}

var iterator = delegatingGen();
iterator.next().value;                  // 1
iterator.next().value;                  // 2
iterator.next().value;                  // 3
iterator.next().value;                  // 4
iterator.next().value;                  // undefined
```

Generators are a great tool for [lazy evaluation](/resources/glossary.md#lazy-evaluation)

``` javascript
function* resourceHungry(a, b, c) {
    yield {
        number: a,
        bigNumber: a**b,
        hugeNumber: (a**b)**c
    }
}

let executeResourceHungry = resourceHungry(2, 10, 40);
/*
    ...executing code
*/
let nowIneedTheData = executeResourceHungry.next().value;
    //> {number: 2, bigNumber: 1024, hugeNumber: 2.5822498780869086e+120}

```

&nbsp;
# Internalization and Localization
Source: http://es6-features.org/#Collation

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
/* 
    Custom iterable
*/
let obj = {
    * [Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
}

console.log([...obj]);                  //> ["a", "b", "c"]

/* 
    Built-in iterables
*/
let arr = [1, 2, 3, 4];
console.log([...arr, 5]);               //> [1, 2, 3, 4, 5]

let map = new Map([
    [1, 'one'],
    [2, 'two']
]);
console.log([...map]);                  //> [[1, "one"], [2, "two"]]

let set = new Set(['a', 'b', 'c', 'd']);
console.log([...set]);                  //> ["a", "b", "c", "d"]

let str = 'hello';                      //> ["h", "e", "l", "l", "o"]
console.log([...str]);

let int8 = new Int8Array(5);
console.log([...int8]);                 //> [0, 0, 0, 0, 0]
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
A loop that iterates over iterable objects.

``` javascript
function* genIterable() {
    yield 'hi';
    yield 'there';
    yield 'having fun?';
}

// iterable
let obj = {
    [Symbol.iterator]: function() {
        // iterator
        return {
            str: 'text',
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
    }
}

for(let val of genIterable()) {
    console.log(val);
}
    //> hi
    //> there
    //> having fun?

for(let val of obj) {
    console.log(val);
}
    //> t
    //> x
```

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

## Reflect
A new global object that enables [reflection](/resources/glossary.md#reflection) through introspection by exposing some JavaScript internal methods as static methods of the `Reflect` object.

Introduction of the Reflect object aims at replacing existing reflection methods belonging to `Object` and `Function` with a more readable and unified approach.

Strength of Reflect over existing internal methods:
* __readable__ - all reflection methods are called through the `Reflect` object which sends a clear message to anybody viewing the code
* __concise__ - some of the Reflect methods provide extended functionality which could otherwise only be achieved by combining 2 or more different functions.
* __secure__ - Reflect methods handle errors better than their original counterparts

Reflect is coupled with the new [Proxy](#proxy) constructor. Every reflect method is paired with a proxy handler method.

Reflect methods:
* __`Reflect.apply(to, context, argList)`__ - applies a context and arguments list(as an array) to a function. Like the `Function.prototype.apply()` method.
* __`Reflect.construct(constructor, argList [, proto])`__ - mimics new operator behaviour. Takes a constructor argument, array of arguments to call with that constructor and an optional prototype argument which sets the returned objects prototype.
* __`Reflect.defineProperty(obj, key, propDesc)`__ - allows adding a new property using a property descriptor. Similiar to `Object.defineProperty()` method.
* __`Reflect.getOwnPropertyDescriptor(obj, key)`__ - returns a properties descriptor. Similiar to `Object.getOwnPropertyDescriptor()` method.
* __`Reflect.deleteProperty(obj, key)`__ - deletes an objects property. Similar to the `delete` operator.
* __`Reflect.getPrototypeOf(obj)`__ - returns an objects prototype. Similar to the `Object.getPrototypeOf()` method.
* __`Reflect.setPrototypeOf(obj, proto)`__ - sets an objects prototype. Similar to the `Object.setPrototypeOf()` method.
* __`Reflect.isExtensible(obj)`__ - returns a boolean value indicating if an object is extensible. Similar to the `Object.isExtensible()` method.
* __`Reflect.preventExtensions(obj)`__ - disables adding new properties to an object. Similar to the `Object.preventExtensions()` method.
* __`Reflect.get(obj, key[, context])`__ - retrieves a property value based on a passed key. Throws error if the first argument is not an object. Can set context through an optional final argument.
* __`Reflect.set(obj, key, val [, context])`__ - sets a property value based on a passed key. Throws error if the first argument is not an object. Can set context through an optional final argument.
* __`Reflect.has(obj, key)`__ - returns a boolean value indicating if an obj has a property. Does not need to own that property. Similar to the `in` operator.
* __`Reflect.ownKeys(obj)`__ - returns all own property keys including symbols. Similar to a combination of the `Object.getOwnPropertyNames()` and `Object.getOwnPropertySymbols()` methods.

``` javascript
/*
    Reflect.apply()
*/

function sum() {
    let factor  = this.factor || 1;
    let sum = 0;
    [...arguments].forEach((num) => sum += num * factor );
    return sum;
}

let context = {factor: 3};

sum(1, 2, 3, 4, 5);                     
    //> 15

Reflect.apply(sum, {factor: 2}, [1, 2, 3, 4, 5]);
    //> 30

Reflect.apply(sum, context, [1, 2, 3, 4, 5]);
    //> 45

/*
    Reflect.construct()
*/
class A {
    constructor(a) {
        this.val = 'A constructor';
        this.a = a;
    }
    example() {
        console.log('A.prototype');
    }
}

class Proto {
    constructor(b) {
        this.val = 'Proto constructor';
        this.b = b;
    }
    example() {
        console.log('Proto.prototype');
    }
}

let objA = Reflect.construct(A, [5]);
let withProto = Reflect.construct(A, [5], Proto);

objA.__proto__ === A.prototype          //> true
withProto.__proto__ === Proto.prototype //> true

objA.example();                         //> A.prototype
withProto.example();                    //> Proto.prototype



console.log(objA.val);                  //> A constructor
console.log(withProto.val);             //> A constructor
console.log(withProto.a);               //> 5
console.log(withProto.b);               //> undefined

/*
    Reflect.defineProperty()
*/
let obj = {};

Reflect.defineProperty(obj, 'id', {
    value: 10982,
    enumerable: true
})

console.log(obj.id);                    //> 10982


/*
    Reflect.getOwnPropertyDescriptor()
*/
let obj = { 
    prop: 'value',
    get val() {
        return this.prop;
    }
};

Reflect.getOwnPropertyDescriptor(obj, 'prop');
    //> {value: "value", writable: true, enumerable: true, configurable: true}

/*
    Reflect.deleteProperty()
*/
let obj = { prop: 1234 };

Reflect.deleteProperty(obj, 'prop');

console.log(obj);                       //> {}

/*
    Reflect.setPrototypeOf()
    Reflect.getPrototypeOf()
*/
let obj = {
    name: 'value'
}

let proto = {
    getName() {
        return this.name;
    }
}

Reflect.setPrototypeOf(obj, proto);

obj.getName();                          //> "value"

Reflect.getPrototypeOf(obj)             //> {getName: ƒ}


/*
    Reflect.preventExtensions()
    Reflect.isExtensible()
*/
let obj = { a: 5};

Reflect.preventExtensions(obj);

obj.b = 10;
console.log(obj.b);                     //> undefined

Reflect.isExtensible(obj);              //> false


/*
    Reflect.get()
*/
let obj = {
    prop: 'value'
}
let str = 'string';

Reflect.get(obj, 'prop');               //> "value"
Reflect.get(str, '1');                  //> TypeError

/*
    Reflect.set()
*/
let obj = {
    prop: 'value'
}
let str = 'string';

Reflect.set(obj, 'prop', 'new value');
Reflect.set(obj, 'val', 10);

console.log(obj);                       //> {prop: "new value", val: 10}

Reflect.set(str, '6', 's');             //> TypeError

/*
    Reflect.has()
*/
let obj = {
    prop: 'Value'
}

Reflect.has(obj, 'prop');               //> true 
'prop' in obj;                          //> true

Reflect.has(obj, 'val');                //> false
'val' in obj;                           //> false

/*
    Reflect.ownKeys()
*/
let obj = {
    prop: 'value',
    [Symbol('desc')]: 10
}

let objKeys = Reflect.ownKeys(obj);

console.log(objKeys);                   // ["prop", Symbol(desc)]
```

## Proxy
A new global constructor that enables [reflection](/resources/glossary.md#reflection) through intercession by wrapping an object in a handler. The handler has a set of methods that customize how an object behaves in certain operations.

__Proxy constructor__ - `Proxy(obj, handler)`

``` javascript
let handler = {
    set(obj, prop, value) {
        if(prop === 'name') {
            if(typeof value !== 'string'){
                throw new TypeError('name is not a string');
            }
        }
        obj[prop] = value;
        return true;
    }
}

let obj = {};

let user = new Proxy(obj, handler);

user.age = 20;
user.name = 'John';

console.log(user);
    //> Proxy {age: 20, name: "John"}

user.name = 10;
    //> TypeError: name is not a string
```

Proxy is coupled with the new [Reflect](#reflect) constructor. Every proxy handler method __traps__ a respective Reflect method. This means it effects how the Reflect method works for the Proxy object.
* __`handler.apply()`__ - traps `Reflect.apply(to, context, argList)`
* __`handler.construct()`__ - traps `Reflect.construct(constructor, argList [, proto])`
* __`handler.defineProperty()`__ - traps `Reflect.defineProperty(obj, key, propDesc)`
* __`handler.getOwnPropertyDescriptor()`__ - traps `getOwnPropertyDescriptor(obj, key)`
* __`handler.deleteProperty()`__ - traps `Reflect.deleteProperty(obj, key)`
* __`handler.getPrototypeOf()`__ - traps `Reflect.getPrototypeOf(obj)`
* __`handler.setPrototypeOf()`__ - traps `Reflect.setPrototypeOf(obj, proto)`
* __`handler.isExtensible()`__ - traps `Reflect.isExtensible(obj)`
* __`handler.preventExtensions()`__ - traps `Reflect.preventExtensions(obj)`
* __`handler.get()`__ - traps `Reflect.get(obj, key[, context])`
* __`handler.set()`__ - traps `Reflect.set(obj, key, val [, context])`
* __`handler.has()`__ - traps `Reflect.has(obj, key)`
* __`handler.ownKeys()`__ - traps `Reflect.ownKeys(obj)`

``` javascript
// Hiding props
function hidePrivate(obj) {
    let handler = {
        has: function(obj, prop) {
            if(prop[0] === '_') {
                return false;
            }
            return Boolean(obj[prop]);
        },
        ownKeys: function() {
            return Object.getOwnPropertyNames(obj).filter((el) => el[0] !== '_');
        },
        getOwnPropertyDescriptor(obj, prop) {
            if(prop[0] === '_') {
                return undefined;
            }
            return Object.getOwnPropertyDescriptor(obj, prop);
        }
    }
    return new Proxy(obj, handler);
}

let obj = {
    _hidden: 123456,
    _key: 98765,
    exposed: 'exposed prop'
}

let proxyObj = hidePrivate(obj);

console.log('_hidden' in obj);          //> true
console.log('_hidden' in proxyObj);     //> false
console.log('exposed' in obj);          //> true
console.log('exposed' in proxyObj);     //> true

console.log(obj.hasOwnProperty('_key'));
    //> true
console.log(proxyObj.hasOwnProperty('_key'));
    //> false
console.log(obj.hasOwnProperty('exposed'));
    //> true
console.log(proxyObj.hasOwnProperty('exposed'));
    //> true

console.log(Object.getOwnPropertyNames(obj));
    //> ["_hidden", "_key", "exposed"]
console.log(Object.keys(obj));
    //> ["_hidden", "_key", "exposed"]

console.log(Object.getOwnPropertyNames(proxyObj));
    //> ["exposed"]
console.log(Object.keys(proxyObj));
    //> ["exposed"]

console.log(Object.getOwnPropertyDescriptor(obj, '_hidden'));
    //> {value: 123456, writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(proxyObj, '_hidden'));
    //> undefined
```

&nbsp;
# Modules
A native system for dealing with modules in JavaScript. 

Sources:
    * [exploringjs](http://exploringjs.com/es6/ch_modules.html)
    * [mdn on import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    * [mdn on export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
    * [hacks.mozilla.org](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

__Module features:__
* executed in strict mode by default
* `import` includes bindings exported by another module
* `export` exposes bindings for external consumption
    * __named__ - exports an identifier. Can have multiple named exports per module. At import the identifier has to be matched.
    * __default__ - default exported value. Can only have one default export per module. Default export does not require an identifier
* `import` and `export` are static(evaluated before code execution)
* named imports and exports
* works asynchronously - loading a module is divided into steps which can be executed asynchronously. 

__Steps in module loading__:
1. __Construction__ - finds, stores and parses all imported modules
1. __Instantiation__ - creates locations in memory and links the parsed modules with those locations.
1. __Evaluation__ - executes the modules code to assign values to linked locations in memory

``` javascript
/* 
    EXPORT
*/
let internal = 100;

const val1 = 5;
const val2 = 10;
const val3 = 15;
const val4 = 20;

console.log('Hello');

// named exports
export const val5 = 30, val6 = 'whatever';

export const func = function(val) {
    return internal + val;
}

export class A {
    constructor() {
        this.value = 'a';
    }
}

export val1, val2;

export {val3, val4};

// default export
export default { 
    prop: 'val', 
    sum: val1 + val2
};
```

``` javascript
/* 
    IMPORT
    -based on export above
*/

// importing default export
import isDefault from './my-module';
console.log(isDefault.prop);            //> val
console.log(isDefault.sum);             //> 15

// Aliases
import {val1 as someVal, val2 as anything} from './my-module';
import * as accessor from './my-module';

console.log(someVal);                   //> 5
console.log(anything);                  //> 10

console.log(accessor.func(200));        //> 300

// import for side effects
//  -only executes module code
//  -does not import any data
import './my-module';                   //> Hello
```

Performing __module redirects__ by exporting from another module.

``` javascript
export {default} from './some-module';
```

&nbsp;
# New Methods

## Array Methods
`Array.from(obj)` - create an array instance from any array-like object.

`Array.prototype.copyWithin(target[,start][,end])` - copies part of the array into the same array at a given index. This is a [mutator method](/resources/glossary.md#mutator).
* __target__: index at which the copy is placed.
* __start__: index at which the copying starts.
* __end__: index at which the copying ends. Copying does not include element at this index.

`Array.prototype.entries()` - returns an iterator that contains all arrays index-value pairs.

`Array.prototype.keys()` - returns an iterator that contains all arrays indexes.

`Array.prototype.values()` - returns an iterator that contains all arrays values.

`Array.prototype.fill(val, [start, end])` - replaces elements in an array with values. Can optionally specify at which index replacing starts and ends. By default the whole array is replaced.

`Array.prototype.find(func)` - returns the first element for which the passed function returns `true`

`Array.prototype.findIndex(func)` - returns the index of the first element for which the passed function returns `true`

``` javascript
let obj = { length: 3 };
let obj2 = { 
	length: 3, 
	0: 'indexes',
	1: 'just like',
	2: 'an array'
}
let arr = [1, 2, 3, 'one', 'two', 'three'];

/*
    Array.from()
*/
Array.from('Hello');                    //> ['H', 'e', 'l', 'l', 'o']
Array.from(obj);                        //> ['undefined', 'undefined', 'undefined']
Array.from(obj2);                       //> ["indexes", "just like", "an array"]

/*
    Array.prototype.copyWithin()
*/
arr.copyWithin(4);                      //> [1, 2, 3, 'one', 1, 2]
arr.copyWithin(1, 3, 5);                //> [1, "one", 1, "one", 1, 2]

/*
    Array.prototype.entries()
    Array.prototype.keys()
    Array.prototype.values()
*/
let arr = ['zero', 'one', 'two'];

let arrEntries = arr.entries();
let arrIndexes = arr.keys();
let arrValues = arr.values();

arrEntries.next().value;                //> [0, "zero"]
arrEntries.next().value;                //> [1, "one"]
arrEntries.next().value;                //> [2, "two"]

arrIndexes.next().value;                //> 0
arrIndexes.next().value;                //> 1
arrIndexes.next().value;                //> 2
arrIndexes.next().value;                //> undefined

arrValues.next().value;                 //> "one"
arrValues.next().value;                 //> "two"

/*
    Array.prototype.fill()
*/
let arr = [1, 2, 3, 4, 5];

arr.fill(0);
console.log(arr);                       //> [0, 0, 0, 0, 0]

arr.fill(1, 1, 4);
console.log(arr);                       //> [0, 1, 1, 1, 0]

/*
    Array.prototype.find()
    Array.prototype.findIndex()
*/
let users = [
    {name: 'John', id: 12345},
    {name: 'Tom', id: 12346},
    {name: undefined, id: 12347}
]

function wrongName(el) {
    return typeof el.name !== 'string';
}

users.find(wrongName);
    //> {name: undefined, id: 12347}
users.findIndex(wrongName);
    //> 2
```

## Math Methods
* Binary
    * `Math.clz32(x)` - number of leading zeros in binary representation of x
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
Math.clz32(1);                          //> 31
Math.clz32(111111111);                  //> 5

Math.imul(0xf, 0xf);                    //> 225

// Exponentiation
Math.cbrt(8);                           //> 2
Math.cbrt(27);                          //> 3
Math.expm1(1);                          //> 1.718281828459045
Math.hypot(3, 4);                       //> 5
Math.log1p(-1);                         //> -Infinity
Math.log10(10000);                      //> 4
Math.log2(16);                          //> 4

// Miscellaneous
Math.sign(-5);                          //> -1
Math.sign(5);                           //> 1
Math.sign('text');                      //> NaN

// Rounding
Math.fround(-5.01);                     //> -5.010000228881836
Math.trunc(0.123456);                   //> 0

// Trigonometry
Math.acosh(1);                          //> 0
Math.asinh(1);                          //> 0.881373587019543
Math.atanh(1);                          //> Infinity
Math.cosh(1);                           //> 1.5430806348152437
Math.sinh(1);                           //> 1.1752011936438014
Math.tanh(1);                           //> 0.7615941559557649
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
/* 
    Object.assign()
*/
let obj = {};
let a = { a: 'a', [Symbol('ten')]: 10};
let b = { b: 'b'};
let c = { c: 'c'};
let letterPrinter = {
    printLet() {
        console.log(this.a + this.b + this.c)
    }
}

obj = Object.assign(obj, a, b, c, letterPrinter)
console.log(obj);
    //> {a: "a", b: "a", c: "a", printLet: ƒ, Symbol(ten): 10}
obj.printLet()
    //> abc

/* 
    Object.getOwnPropertySymbols()
*/
let obj = {
    prop1: 10,
    prop2: 20,
    * [Symbol.iterator]() {
        yield 1;
    },
    [Symbol('1')] : 1
}

let objSym = Object.getOwnPropertySymbols(obj);
console.log(objSym);
    //> [Symbol(Symbol.iterator), Symbol(1)]

/* 
    Object.is()
*/
Object.is(undefined, undefined);        //> true
Object.is(null, null);                  //> true
Object.is(false, false);                //> true
Object.is(true, true);                  //> true
Object.is(NaN, NaN);                    //> true
Object.is('string', 'string');          //> true

Object.is({}, {});                      //> false
Object.is(+0, -0);                      //> false
Object.is('1', 1);                      //> false


/* 
    Object.setPrototypeOf()
*/
let user = {firstName: 'John', lastName: 'Doe'};
let namePrinter = {
    namePrint() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

Object.setPrototypeOf(user, namePrinter);
user.namePrint();
    //> John Doe

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
# New Number Constants
__Number__:
* `Number.EPSILON` - difference between the smallest and greatest floating point number between 0 and 1
* `Number.MAX_SAFE_INTEGER` - maximum safe integer. A safe integer is one which produces expected results in operations.
* `Number.MIN_SAFE_INTEGER` - minimum safe integer. A safe integer is one which produces expected results in operations. 

``` javascript
console.log(Number.EPSILON);
    //> 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER);
    //> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
    //> -9007199254740991
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
# Promises
An object that represents a pending asynchronous action. Unlike asynchronous operations in ES5 which involved passing callbacks, promises involve chaining callbacks which are called depending on the outcome of the asynchronous action.

The Promise constructor takes a function as an argument. This function should have the following parameters:
* __resolve function__ - is called if the promise is successfully resolved
* __reject function__ - is called if the promise fails

``` javascript
let successPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000)
});

let failPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise failed');
    }, 1500)
});

function success(val) {
    console.log(val);
}

function failure(val) {
    try {
        throw new Error(val)
    } catch(e) {
        console.log(e.name + ': ' + e.message);
    }
}

successPromise.then(success, failure);
    //> Promise resolved
failPromise.then(success, failure);
    //> Error: Promise failed
```

A promise can be in one of four states:
* __PENDING__ - initial state when promise is created
* __FULFILLED__ - the action was successfull, the promise is finalized
* __REJECTED__ - the action was rejected, the promise is finalized
* __SETTLED/RESOLVED__ - the promise was either fulfilled or rejected

``` javascript
// resolve and reject function
function res(val) {
    console.log(val);
    return val;
}

function err(val) {
    try {
        throw new Error(val);
    } catch(e) {
        console.log(e.name + ': ' + e.message);
        return e.name + ': ' + e.message;
    }
}

// creating one promise that gets rejected and one that is fulfilled
let successPromise = new Promise((res, err) => {
    setTimeout(() => {
        res('Promise resolved');
    }, 2000)
});

let errorPromise = new Promise((res, err) => {
    setTimeout(() => {
        try {
            err('Promise failed');
        } catch(e) { }
    }, 2000)
});

setTimeout(() => {
    console.log(successPromise);
        //> Promise {<pending>}
    console.log(errorPromise);
        //> Promise {<pending>}
}, 1000);

setTimeout(() => {
    console.log(successPromise);
        //> Promise {<resolved>: "Promise resolved"}
    console.log(errorPromise);
        //> Promise {<rejected>: "Promise failed"}
}, 2100);

errorPromise.then(res, err);
    //> Promise {<resolved>: "Error: Promise failed"}
```

Promises can be chained creating what is called a __promise chain__. This enables sequential execution of various asynchronous actions.

``` javascript
let promiseFactory = function() {
    let count = 0;
    let value = 0;
    let start = new Date();
    function create() {
        return new Promise((res, err) => {
            setTimeout(() => {
                let elapsed = (new Date()) - start;
                console.log(`Promise ${++count} resolved after ${elapsed}ms`);
                value += 5;
                res(value);
            }, 1000)
        });    
    }
    return create;
}

let creator = promiseFactory();

creator()
.then((result)=> {
    console.log('value : ' + result);
    return creator();
})
.then((result)=> {
    console.log('value : ' + result);
    return creator();
})
.then((result)=> {
    console.log('value : ' + result);
    return creator();
})

/*
    Promise 1 resolved after 1005ms
    value : 5
    Promise 2 resolved after 2009ms
    value : 10
    Promise 3 resolved after 3015ms
    value : 15
    Promise 4 resolved after 4015ms
*/
```

__Promise methods:__
* Chaining
    * `Promise.prototype.then(resFunc, rejFunc)` - calls a resolution or rejection function depending on a promises status
    * `Promise.prototype.catch(rejFunc)` - calls a function if an error is encountered in the promise chain
    * `Promise.prototype.finally()` - calls a function once a promise is resolved disrespective of the outcome of the asynchronous action
* Composition
    * `Promise.all(iterable)` - combines promises available through an iterable into one. When all the promises are fulfilled the combined promise is fulfilled. When one is rejected all are rejected.
    * `Promise.race(iterable)` - combines promises available through an iterable into one. When one of the promises is fulfilled or rejected the combined promise is fulfilled or rejected.
    * `Promise.reject(reason)` - returns an already rejected promise. Takes a 'reason' argument which specifies why the promise failed(like an error)
    * `Promise.resolve(arg)` - return an already resolved promise. Takes the resolved value as an argument.

``` javascript
let examplePromise = new Promise((res, err) => {
    res('Promise resolved');
});

/* 
    CHAINING
*/

examplePromise
.then((res) => {
    console.log(res);
        //> Promise resolved
    return 'Some returned value';
})
.then((res) => {
    console.log(res);
        //> Some returned value
    throw new Error('error encountered');
})
.then((res) => {
    console.log('this is never executed')
})
.catch((err) => {
    console.log(err);
        //> Error: error encountered
})
.finally(() => {
    console.log('Called no matter what');
        //> called no matter what
})

/* 
    COMPOSITION
*/
let prom1 = Promise.resolve('resolved');
let prom2 = new Promise((res, err) => {
    setTimeout(res, 1000, 'resolved value');
});
let prom3 = new Promise((res, err) => {
    setTimeout(()=> {
        try {
            throw new Error('failed');
        } catch(e) {
            console.log(`${e.name}: ${e.message}`)
        }
    }, 1200);
})

// Promise.all()
const allResolved = Promise.all([prom1, prom2])
.then((results) => {
    console.log(results);
        //> ["resolved", "resolved value"]
});

const oneFailed = Promise.all([prom1, prom2, prom3])
.then((results) => {
    console.log(results);
        // not logged - prom3 failed
})
.catch((e) => {
    console.log(e);
        //> Error: failed
});

// Promise.race()
const raceResolved = Promise.race([prom1, prom2])
.then((results) => {
    console.log(results);
        //> resolved
});

const raceFailed = Promise.race([prom1, prom2, prom3])
.then((results) => {
    console.log(results);
        //> resolved
})
.catch((e) => {
    console.log(e);
        // not logged, a promise is resolved before one fails
});


// Promise.reject()
let rejPromise = Promise.reject(new Error('failed'));
console.log(rejPromise);
    //> Promise {<rejected>: Error: failed}

// Promise.resolve()
let resPromise = Promise.resolve('resolved');
console.log(resPromise);
    //> Promise {<resolved>: "resolved"}

```

&nbsp;
# Tail Call Optimization
Source: [2ality](http://2ality.com/2015/06/tail-call-optimization.html)

``` javascript

```

&nbsp;
# Template Literals
Template literals are strings wrapped in backticks `` ` `` with additional features:
* multiline
* string interpolation
* access to raw string

``` javascript
/*
    MULTILINE
*/
let multiline = `A
very very long string
That spans across multiple lines
    respects whitespaces
\nRespects escape sequences
`

console.log(multiline);
/*
A
very very long string
That spans across multiple lines
    respects whitespaces

Respects escape sequences
*/

/*
    INTERPOLATION
*/
let age = 40, name = 'John';

let interpolation = `Hi, my name is ${name} and I'm ${age - 5} years old`;

console.log(interpolation);
    //> Hi, my name is John and I'm 35 years old


/*
    RAW VALUE
*/
const wrongFilePath = `C:\files\programs\myproject\index.js`;

const filePath = String.raw`C:\files\programs\myproject\index.js`;

console.log(wrongFilePath);
    //> C:ilesprogramsmyprojectindex.js
console.log(filePath);
    //> C:\files\programs\myproject\index.js
```


