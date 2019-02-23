Various Javascript-related things I think are worth knowing or having available for quick reference when needed.

#### Table of contents
* [Algorithms](#algorithms)
* [Data Structures](#data-structures)
* [Design Patterns](#design-patterns)
* [Function Decorators](#function-decorators)
* [Functional Composition](#functional-composition)
* [Good Practice](#good-practice)
* [JSDocs](#JSDocs)
* [Node Package Manager(npm)](#node-package-manager(npm))
* [Performance](#performance)
* [Regular Expressions](#regular-expressions)
    * [Digits](#digits)
    * [Alphanumeric](#alphanumeric)
    * [Login](#login)
    * [URL](#url)
    * [IP](#ip)
    * [Dates and Time](#dates-and-time)
    * [Credit Cards](#credit-cards)
* [Types of Prototypal Inheritance](#types-of-prototypal-inheritance)
* [V8](#V8)

&nbsp;
# Algorithms

Credit to:
* [Algorithms + Data Structures + Explanations](https://github.com/trekhleb/javascript-algorithms)

## Search


## Sort




&nbsp;
# Data Structures
Credit to:
* [Algorithms + Data Structures + Explanations](https://github.com/trekhleb/javascript-algorithms)

https://medium.com/@felipernb/algorithms-data-structures-and-web-development-7772e088f1d3
https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

Data structures are ways of grouping data which define how this data is related and how you you can work with it. 

## Linked Lists
A linear collection of nodes. Each node contains some data and a reference to the next node creating a sequence.

``` javascript

```

## Doubly Linked Lists
A collection of linked __nodes__. Each node contains some data, a reference to the previous element and a reference to the next element. At the end and beginning of the collection there are __sentinel nodes__ which enables travesal of the list.

If there is only _one sentinel node_ it contains a reference to the beginning and end of the collection and makes the data structure a __circularly linked list__

``` javascript

```

## Queue


## Priority Queue


## Stack



## Hash Table


## Heap



## Trie



## Tree



## Binary Search Tree



## Graph
Can be directed and undirected


## Disjoint Set



## Bloom Filter



&nbsp;
# Design Patterns
-http://sd.blackball.lv/library/JavaScript_Patterns_%282010%29.pdf
-https://addyosmani.com/resources/essentialjsdesignpatterns/book/

## Singleton Pattern
https://codeburst.io/javascript-global-variables-vs-singletons-d825fcab75f9 


&nbsp;
# Function Decorators
A higher order function that returns an enhanced version of its argument function.

Good exmaple is a timing decorator function that could be used for profiling.

Credits: [Cristi Salcescu](https://medium.freecodecamp.org/how-to-use-decorators-with-factory-functions-373fb972b6d4)

``` javascript
function logExecDuration(fn) {
    return function decorator(...args){
        let start = Date.now();
        let result = fn.apply(this, args);
        let duration = Date.now() - start;
        console.log(fn.name + "() duration : " + duration);
        return result;
    }
}
```

&nbsp;
# Functional Composition
Combining simple composable functions into one more complex function. This can be achieved by passing the result of one function as an argument to another function(over and over if needed). Composable functions should only take one argument and output one value.

This makes your code more readable, simplifies testing and simplifies debugging.

Credit for the compose and pipe functions: [Joel Thoms](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)

In ES5 syntax.
``` javascript
var compose = function compose() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
    }

    return function (data) {
        return functions.reduceRight(function (value, func) {
            return func(value);
        }, data);
    };
};

var pipe = function pipe() {
    for (var _len2 = arguments.length, functions = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        functions[_key2] = arguments[_key2];
    }

    return function (data) {
        return functions.reduce(function (value, func) {
            return func(value);
        }, data);
    };
};
```

This is much cleaner with ES6 syntax.

``` javascript
const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

const pipe = (...functions) => data =>
    functions.reduce((value, func) => func(value), data)
```

&nbsp;
# Good Practice
Credits to:
* [An article by Eric Elliot's](#https://medium.com/javascript-scene/the-single-biggest-mistake-programmers-make-every-day-62366b432308) on a good approach to implementing software

## Plan then execute
Before development plan out the minimalistic version of your product. Get a piece of paper and draw a __block scheme__. Include only the essentials. 
* Don't make it perfect
* Don't make it handle every edge case
* Don't focus on one component for too long

Make sure it's the __absolute minimum__ and than remove some more. Once your out of ideas - start writing tests.

## Test Driven
Before you start implementing the bare bone solution - write tests. These test should cover only the basics. Next start developing against these test, not the other way around.

## KISS
Keep It Simple, Stupid meaning you should focus on making your code:
* easy to understand
* easily used and reused
* easily extended

Following this principle keep the following in mind: 
* each variable should represent only one thing
* each function should do only one thing
* use options objects over argument lists as function parameters
* dont make a function cover lots of cases - create a seperate one for each case
* avoid side-effects - be extra careful with mutable datatypes
* comment any complex logic
* write code that a junior developer could understand
* create modules that you can cut and paste without breaking anything

&nbsp;
# JSDocs
JSDocs is a documentation generator. It uses tags to describe characteristics of functions, modules and classes.

You can find its full documentation [here](http://usejsdoc.org/).

&nbsp;
# Node Package Manager(npm)

## Semantic Versioning
The following is the standard for [versioning node packages](https://docs.npmjs.com/about-semantic-versioning). 

|Code Description|Stage|Rule|Example Version|
|----|----|----|:----:|
|Initial Release|New release|Start with 1.0.0|1.0.0|
|Bug fixes|Patch release|Increment third digit|1.0.1|
|New features|Minor release|Increment middle digit, reset last digit|1.1.0|
|Non-backward compatible changes|Major release|Increment first digit, reset other digits|2.0.0|

In a __package.json__ to specify acceptable version ranges:
|Concerns|Syntax|Example|Example Range|
|----|:----:|:----:|:----:|
|Patch releases|n.n|1.1|**1.1.0** - 1.1.20|
|Patch releases|n.n.x|2.2.x|**2.2.0** - 2.2.14|
|Patch releases|~n.n.n|~3.0.4|**3.0.4** - 3.0.20|
|Minor releases|n|1|**1.0.0** - 1.6.4|
|Minor releases|n.x|1.x|**1.0.0** - 1.6.4|
|Minor releases|^n.n.n|^1.11.1|**1.11.1** - 1.20.10|
|Major releases|*|*|**any version**|
|Major releases|x|x|**any version**|

&nbsp;
# Performance
Avoid using the `new` operator whenever possible.

&nbsp;
# Regular Expressions
More on regular expressions in [Javascript](/javascript/md/es5.md#regular-expressions).

Credits to: 
* [Digital Fortress](https://digitalfortress.tech/tricks/top-15-commonly-used-regex/) - for the list and inspiration. Keep in mind that lots of their regular expressions had to be fixed not to match empty strings and some had to be trimmed to reduce excess subexpressions.
* [regular-expressions.info](https://www.regular-expressions.info) - a comprehensive guide on regular expressions.

A `^` at the beginning together with `$` at the end of any regular expression searches for an exact match(for example no trailing whitespace). Otherwise it will search it as a substring meaning it can be preceeded or followed by any characters.

Some of these are just fun examples - if a regular expression is too long you should think of a different approach:
* [parsers](/resources/glossary.md#parser)
* extract atomic parts(subexpressions) and check them individually
* use control flow and string properties/methods that don't involve regular expressions

## Digits
``` javascript
// whole numbers
var whole = /^\d+$/;
// decimal numbers
var dec = /^\d*\.\d+$/;
// whole and decimal numbers
var wholeDec = /^\d*\.?\d+$/;
// negative/postive whole and decimal numbers
var negPosWholeDecimal = /^-?\d*\.?\d+$/;
// whole, decimal and fraction numbers
var wholeDecFrac = /^[-]?\d?[,.]?\d+([\/]\d+[,.]?\d*)*$/;
```

## Alphanumeric
``` javascript
// alphanumeric excluding whitespaces
var ANnoWhiteSpace = /^[a-zA-Z0-9]+$/;
// alphanumeric including whitespaces
var ANwithWhiteSpace = /^[a-zA-Z0-9 ]+$/;
```

## Login
``` javascript
// username of 3-16 characters
var username = /^[a-zA-Z0-9_-]{3,16}$/;

// email excluding some edge cases youll probably never encounter
var email = /^([a-zA-Z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

// weak password: 1 letter, 1 number, 8+ characters
var weak = /(?=.*\d)(?=.*[a-zA-Z])^.{8,}$/;

// moderate password: 1 uppercase, 1 lowercase, 1 number, 8+ characters
var moderate = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^.{8,}$/

// strong password: 1 uppercase, 1 lowercase, 1 number, 1 special character, 8+ characters
var strong = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])^.{8,}$/;
```

## URL
``` javascript
// slug
var slug = /[a-z0-9]+(?:-[a-z0-9]+)*/;

// http(s) protocol
var httphttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// https
var https = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// http protocol
var http = /http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// optional http or https protocal
var optional = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// ftp protocol :D - i know but according to RFC959 the username and password can contain almost all ASCII characters
var ftp = /^ftp:\/\/[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]{2,}(:[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]+)?@[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/;

// ftp handling usernames with only dots and underscores
var ftpBetter = /^ftp:\/\/[a-zA-Z0-9._]{2,}(:[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]+)?@[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/;
```

## IP
``` javascript
// IP4 address
var ip4 = /^((2[0-5]{2}|1\d{2}|0?\d{1,2})\.){3}(2[0-5]{2}|1\d{2}|0?\d{1,2})$/;

// IP6 address
var ip6 = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$/;
```

## Dates and Time
Components of a __date__(year, month, day, seperator) and __time__(hours, minutes, seconds, milliseconds, seperator) in various formats.

These are pieces out of which you can create a regular expression matching any date/time/datetime format.
``` javascript
// YEAR
var yy = /(\d{2})/;                     // 89, 18, 10
var yyyy = /([12]\d{3})/;               // 1001, 2018, 2100 
var yANY = /(([12]\d{3})|(\d{2}))/;     // 01, 2001, 99, 1999

// MONTH
var m = /(1[0-2]|[1-9])/;               // 1, 11
var mm = /(0[1-9]|1[0-2])/;             // 01, 09, 12
var mmm = /([jJ]an|[fF]eb|[mM]ar|[aA]pr|[mM]ay|[jJ]un|[jJ]ul|[aA]ug|[sS]ep|[oO]ct|[nN]ov|[dD]ec)/;
                                        // jan, Oct, dec
var mmmm = /([jJ]anuary|[fF]ebruary|[mM]arch|[aA]pril|[mM]ay|[jJ]une|[jJ]uly|[aA]ugust|[sS]eptember|[oO]ctober|[nN]ovember|[dD]ecember)/;
                                        // january, December, October
var mORmm = /(1[0-2]|0?[1-9])/;         // 1, 01, 11
var NOmmmm = /((1[0-2]|0?[1-9])|([jJ]an|[fF]eb|[mM]ar|[aA]pr|[mM]ay|[jJ]un|[jJ]ul|[aA]ug|[sS]ep|[oO]ct|[nN]ov|[dD]ec))/;
                                        // 1, 01, jan, Jan

// DAY
var d = /([12]\d|3[01]|[1-9])/;         // 1, 11, 21, 31
var dd = /(0[1-9]|[12]\d|3[01])/;       // 01, 09, 11
var ddd = /([sS]un|[mM]on|[tT]ue|[wW]ed|[tT]hu|[fF]ri|[sS]at)/;
                                        // Thu, fri, sat
var dORdd = /([12]\d|3[01]|0?[1-9])/;   // 1, 01, 21, 30, 31

// DATE SEPARATORS
var dot = /\./;
var space = / /;
var dash = /-/;
var slash = /\//;
var all = /[-./ ]/;

// HOUR
var h12 = /(1[0-2]|0?\d)/;              // 0, 7, 12
var hh12 = /(0\d|1[0-2])/;              // 00, 07, 12
var h24 = /(1\d|2[0-3]|\d)/;            // 0, 1, 12, 23
var hh24 = /(0\d|1\d|2[0-3])/;          // 00, 01, 12, 23 

// MINUTES OR SECONDS
var s = /([1-5]?\d)/;                   // 0, 1, 11, 59
var ss = /([1-5]\d|0\d)/;               // 00, 01, 11, 59

// MILLISECONDS
var ms = /([1-9]\d{1,2}|\d)/;           // 1, 11, 111
var msms = /(\d{3})/;                   // 001, 011, 111

// TIME MARKER
var ampm = /(am|AM|pm|PM)/;             

// TIME SEPARATOR
var colon = /:/;
var space = / /;

// DATE-TIME SEPERATORS
var spaceORT = /[ T]/;
```

Connect date components using date seperators.
``` javascript
// YYYYMMDD with any seperator
var yyyymmdd = /([12]\d{3})[-./ ](0[1-9]|1[0-2])[-./ ](0[1-9]|[12]\d|3[01])/;
// D-M-YY
var dmyy = /([12]\d|3[01]|[1-9])-(1[0-2]|[1-9])-(\d{2})/;
```

Connect time components using a colon.
``` javascript
// HHMMSSmsms 24h clock
var hhmmssmili = /(0\d|1\d|2[0-3]):([1-5]\d|0\d):([1-5]\d|0\d):(\d{3})/;
// HMS 12h clock
var hms12 = /(1[0-2]|0?\d):([1-5]?\d):([1-5]?\d) (am|AM|pm|PM)/;
```

Connect date and time using `T` or space.
``` javascript
// DD.MM.YYYYTHHMMSS
var datetime = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.([12]\d{3})T(0\d|1\d|2[0-3]):([1-5]\d|0\d):([1-5]\d|0\d)/;
```

## Credit Cards
``` javascript
var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
var mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
var americanExpress = /^3[47][0-9]{13}$/;
var dinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
var jcb = /^(?:2131|1800|35\d{3})\d{11}$/;
```


## Prep string literal
Credits to: 
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-unicode-escape)
``` javascript
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

var wrongRegExp = new RegExp('100.5$');
var rightRegExp = new RegExp(escapeRegExp('100.5$'));

var str = 'A course cost 100.5$ which is way too much';

str.match(wrongRegExp);                 // null
str.match(rightRegExp)[0];              // "100.5$"
```

&nbsp;
# Types of Prototypal Inheritance
https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9

&nbsp;
# V8
A popular open-source JavaScript Engine written in C++. Used in Node and Chrome. A JavaScript engine is what translates JavaScript code into [machine code](/resources/glossary.md#machine-code).

You can embed V8 in a C++ program and modify it to add features to JavaScript.