Glossary describing core concepts and phrases regarding software development and Information Technology in general. Ordered alphabetically.

[A](#a)  [B](#b)  [C](#c)  [D](#d)  [E](#e)  [F](#f)  [G](#g)  [H](#h)  [I](#i)  [J](#j)
[K](#k)  [L](#l)  [M](#m)  [N](#n)  [O](#o)  [P](#p)  [Q](#Q)  [R](#r)  [S](#s)  [T](#t)
[U](#u)  [V](#v)  [W](#w)  [X](#x)  [Y](#y)  [Z](#z)

# A

## Argument
Value that is passed to a function. 

Do not confuse with a [parameter](#parameter) which could colloquially be called a placeholder that is replaced by an argument when we call the function.

## Array
0 or more values stored in a single variable. 

__Javascript__: Arrays are dynamic, which means they are not limited to one type of data and their size is not predetermined.

## Assignment
Assigning a specific value to a variable.


# B


# C


# D

## Declaration
Registering a variable in its corresponding scope.

## Dynamic typing
This means that a variables type is determined during runtime.

# E

## Escape sequence
A sequence of characters that begins with an escape character and has a different meaning then its literal representation. In most programming languages the escape character is a backslash `\`. 

## Expression
A combination of elements(including other expressions) that produce a single value.


# F

## Function
A block of code that performs a task.


# G

## Garbage Collection
The process of freeing memory allocated to unused variables. 

__Javascript__: This happens automatically.

## Global properties
Properties accessible in the global scope.


# H


# I

## Immutable
Meaning its state cannot be changed. Any attempts at changing an immutable variable result in creation of a new variable and allocating it new memory space. 

__Javascript__: All primitive types are immutable.

## Initialization
Allocation of memory for a variable.


# J


# K


# L

## Literal
A value which is expressed as itself. For example:
* `'Dog'` string literal
* `10` numeric literal
* `true` boolean literal 
* `[1, 2, 3]` array literal containing 3 numeric literals

# M

## Method
Is a function that describes a verb of a class or an object. 

If we had a class called `Horse` it could have a method called `run`.


## Mutable
Meaning its state can be changed. Immutable variable types are usually assigned values which represent a reference to a space in memory. This means that any changes made to what the reference points at effects all other variables that share the same reference.

__Javascript__: Object and arrays are mutable data types.


# N

## Naming conflict
Also called a naming collision is when two identifiers within a given scope are identical.


# O

## Object
A wrapper that contains 0 or more key-value pairs which are called properties. Properties values can be of any data type. If a value is not assigned to a property it is automatically set to `undefined`. If a value is a function then it represents a method.


# P

## Parameter
A variable in a function declaration. 

## Primitive
Any data type that is not an object and has no methods. 

__Javacript__: These are `string`, `number`, `boolean`, `null`, `undefined` and `symbol`.


# Q



# R

## RFC
Request for Comments is a publication from the technology community regarding how the internet works or could work.


# S

## Statement
Expresses some action to be executed.

__Javascript__: A statement cannot be used where a value is expected(even though in javascript statements produce a value).

# T

## Type coercion
Converting a value of one type to another. This can happen automatically, which is called __implicit type coercion__ or with expressed intention to convert which is called __explicit type coercion__.

__Javascript__: You can only convert to __string__, __boolean__ or __number__. For a more in depth explanation check out [this article](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839).


# U

## Unicode
An encoding standard that provides a unique number for characters in most modern languages, diacritics, symbols, emojis and more. These unique numbers are hexadecimals ranging from __0000__ to __10FFFF__ which results in __1,114,112__ different values. As of Unicode Version 9.0 __128,237__ of these are in use. 

Some popular implementations of Unicode are __UTF-8__, __UTF-16__ and __UTF-32__. These are called character encodings and work by mapping Unicode numbers to a bit sequence called a __Code unit__.

As of 2018 __UTF-8__ is used on over 90% websites.

Here is a [list of Unicode characters](https://unicode-table.com/en/) and their matching numbers.

__Javascript__: Most Javascript engines use __UTF-16__ encoding.

## URI
A Uniform Resource Identifier is a string that allows the unambiguous identification of a resource.

URI Syntax: `[scheme]:{//authority}[path]{?query}{#fragment}`
* __scheme__ - specifies how the rest of the URI should be interpreted. 
* __authority__ - optional component that is comprised of `{userinfo}@{host}:{port}`
    * _userinfo_ - composed of two parts `user:pass`
        * __user__ - a username
        * __pass__ - password matching the username
    * _host_ - a registered name or an ip address
    * _port_ - the connection point within that host
* __path__ - path that resembles a file system path. 
* __query__ - a string usually consisting of name - value pairs. A single URI can have multiple query strings seperated by `&`
* __fragment__ - a string that identifies a fragment within a resource

Popular URI schemes with examples:
* __http__ - `http://www.somewebpage.com/search?q=example+search`
* __https__ - `https://john:smith@www.somewebpage.com:9000/gallery/search?phrase=kitten#largest`
* __file__ - `file:///Users/someuser/projects/website/index.html`
* __mailto__ - `mailto:someone@domain.com?subject=A%20subject&body=the%20body`

## URL
A Uniform Resource Locator is a string that identifies a web resource. A URL specifies a resources location. It is a subset of URI's and follows the same syntax.

`http://www.somewebpage.com/search?q=example+search`


# V


# W



# X


# Y


# Z

