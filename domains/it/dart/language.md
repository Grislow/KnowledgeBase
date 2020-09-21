# Dart Language Reference

Source:
* [dart.dev](https://dart.dev/guides/language/effective-dart)

#### Table of contents

* [General](#general)

&nbsp;
# General
Dart concepts:
* everything is an **object**
* each object belongs to a **class**
* all objects inherit from the `Object` class
* **strong typing** - but annotations are optional since types can be inferred
* `dynamic` is a special type that specifies that no type is expected
* supports **generic types** like `List<dynamic>`
* supports top-level and nested functions, static and instance methods
* supports top-level, static and instance variables
* there are no access control keywords
* an identifier that starts with `_` it is **private** to its library
* an expression cannot contain a statement
* supports **warning**, **run-time errors** which result in **exceptions** and **compile-time errors** which prevent from execution

&nbsp;
# Keywords
|Keyword|Description|
|-------|-----------|
|`abstract`|Defines a class that cant be instantiated|
|`as`|Cast an object to a type|
|`assert`|Evaluate a boolean statement and stop execution if the result is `false`|
|`async`|Marks a function as asynchronous|
|`await`|Make execution pause until an asynchronous operation is resolved|
|`break`|Stops a loop|
|`case`|Marks a value to be evaluated when determining control flow in a `switch` statement|
|`catch`|Catches an exception in order to handle it|
|`class`|Marks a class definition|
|`const`|Declares a compile-time constant|
|`continue`|Skips to the next iteration of a loop|
|`covariant`|Overrides a parameter type with a subtype|
|`default`|Executes code in a `switch` statement if no `case` was fulfilled|
|`deferred`|Loads a library on demand(deferred/lazy loading)|
|`do`|Declares a `do-while` loop|
|`dynamic`|A wildcard variable type|
|`else`|Executes code if no condition was met in an `if` and 0 or more interlinked `else if` statements|
|`enum`|A class-like structure that represent a fixed number of constant values|
|`export`|Specify packages that are to be made available for clients as part of a library|
|`extends`|Declares the superclass during class definition|
|`extension`|Declares an extension of an|
|`external`||
|`factory`||
|`false`||
|`final`|A variable that must be initialized where it is defined and its value cannot be changed|
|`finally`||
|`for`||
|`Function`||
|`get`||
|`hide`||
|`if`||
|`implements`||
|`import`|Specify external packages that should be included in the current module|
|`in`||
|`interface`||
|`is`||
|`library`||
|`mixin`||
|`new`||
|`null`||
|`on`||
|`operator`||
|`part`||
|`rethrow`||
|`return`||
|`set`||
|`show`||
|`static`||
|`super`|A reference to a subclass' superclass|
|`switch`|Evaluates the equality of a variable against a series of values and passes control flow wherever the result is `true`|
|`sync`||
|`this`||
|`throw`||
|`true`||
|`try`||
|`typedef`||
|`var`||
|`void`||
|`while`||
|`with`||
|`yield`||
