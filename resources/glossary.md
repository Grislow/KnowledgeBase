Glossary describing core concepts and phrases regarding Software Development and Information Technology in general. Ordered alphabetically.

Be aware that many of these definitions have been overly simplified to provide what is essential with as few words as possible. For a deeper understanding always do your own research.

I provide credit where its do. This provides you with an alternative formulation of the definitions - these might be harder or easier to understand, really depends on whose reading.

[A](#a)  [B](#b)  [C](#c)  [D](#d)  [E](#e)  [F](#f)  [G](#g)  [H](#h)  [I](#i)  [J](#j)
[K](#k)  [L](#l)  [M](#m)  [N](#n)  [O](#o)  [P](#p)  [Q](#Q)  [R](#r)  [S](#s)  [T](#t)
[U](#u)  [V](#v)  [W](#w)  [X](#x)  [Y](#y)  [Z](#z)

Lexical Scope, ASI(http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/),
https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6
https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
singleton

&nbsp;
# A

## Abstraction
Hiding complexities of a system by only exposing what is needed to the users. 

## Abstraction Layer
The definition depends on the context. Below are two popular cases in which you'll see this phrase used.

### Computer Architecture
In computer architecture they are elements grouped by how they can be manipulated or what operations can be performed on them. Each layer is independent of other layers and has a clearly defined way of communicating with them. This allows for __interoperability__ between different layers disregarding their exact __implementation__ or place in the __hierarchy__. 

For example a computer system could be divided into the following layers:
* __Hardware__ - CPU, RAM, HDD etc.
* __OS__ - the operating system like Windows or Linux.
* __Application__ - any applications you run on your operating system.

You can run different operating systems on the same hardware and use different hardware with the same operating system. The two layers communicate with each other through drivers. 

When you run an application you don't have to worry about how it is allocated CPU resources. The program makes a system call and the OS takes care of the rest.

### Software Architecture
In software architecture it is a way of exposing only a part of something complex. This way you can: 
* provide only what is needed without exposing how it is implemented
* simplify something otherwise complex
* control how users interact with lower level logic

When you login to your Google account you pass an email or phone number. In response you either proceed to the password screen or get a _Couldn't find your google account_ message. You don't see how Google matches your input with all existing account names in their database.

## Abstraction Level
See [Abstraction Layer](#Abstraction-Layer)

## Accessor
Also called an _Accessor Method_ or _Getter_ are methods that allow accessing an objects state data without changing it.

## Argument
Value that is passed to a function. 

Do not confuse with a [parameter](#parameter) which could colloquially be called a placeholder that is replaced by an argument when we call the function.

## Array
0 or more values stored in a single variable. 

__Javascript__: Arrays are dynamic, which means they are not limited to one type of data and their size is not predetermined.

## ASCII
American Standard Code for Information Interchange is a 7-bit character encoding scheme. The character set consists of 128 different symbols covering special characters, upper and lower case english letters, numbers and [control characters](#control-character).

## Assignment
Assigning a specific value to a variable.

## Autoboxing
Automatic conversion between a primitive type and a wrapper type.

&nbsp;
# B


&nbsp;
# C

## Call Stack
Also called and Execution Stack, Program Stack or Run-time Stack. It is a LIFO data structure containing all routines that are currently being executed or are awaiting execution. The position of subroutines on the stack determines their order of execution. 

## Callback Function
A function passed as an argument.

## Clause
An incomplete fragment of a statement.

## Closure
A function that has its own lexical environment.

## Code point
A unique number assigned to each Unicode character.

This Bento Box &#127857; is a Unicode character with the code point `U+1F371`. __U+__ is a prefix meaning Unicode.

## Code unit
A unit of storage for an encoded [code point](#code-point). How many code units are needed to represent a single code point depends on the encoding and the code point in question. 

Lets take this burger &#127828; Unicode character as an example:
* __UTF8__: 4 code units `0xf0` `0x9f` `0x8d` `0x94`
* __UTF16__: 1 code unit `0x1f354`

If a code point can't be encoded in one UTF-16 code unite it is store in a [surrogate pair](#surrogate-pair).

## Control character
A character that is used to perform an action and has no literal meaning. Some popular examples are:
* `^@` - __Null__ is used as a string terminator in the C programming language
* `^C` - __End of Text__ is used in command line interfaces to terminate a program
* `^D` - __End of Transmission__ is used in Unix based command line interfaces to indicate the end-of-file 

For a full list vist [wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_controls)

&nbsp;
# D

## Debugging
Finding and fixing errors in source code.

## Declaration
Registering a variable in its corresponding scope.

## DRY
"Don't Repeat Yourself" is a coding principle which states that if you catch yourself writing the same code over and over again then you are probably doing something wrong. Try to group repeated logic into a seperate function.

## Dynamic typing
Variables type is determined during runtime. This means any variable can be assigned and re-assigned values of any type.

&nbsp;
# E

## Encapsulation
Grouping data and into a single unit(like an object). Allows restricting access to the state of that unit.

## Error
Faults in an application. Can be grouped as:
* __Syntax errors__ - incorrect usage of a programming languages grammar, like missing brackets or semicolons. Can be easilly spotted with the right tools like automatic compilation(for compiled languages) or linters(for interpreted languages).
* __Runtime errors__ - errors that occur during execution, like trying to open a non-existant file. These are often called __Exceptions__ and can be handled programmatically.
* __Logical errors__ - mistakes made in designing the logic within your application, like using the wrong operator or variable. Fixing these errors require understanding of business logic which is beyond a computers capacity. Debugging these is often tedious and requires close inspection of the state of the application at the moment the error occured.

## Escape sequence
A sequence of characters that begins with an escape character and has a different meaning then its literal representation. In most programming languages the escape character is a backslash `\`. 

## Exception
A runtime error that disrupts a programs flow.

## Execution Phase
Or runtime is the process of executing a program on a computer or virtual machine. This usually involves a [runtime environment](#runtime-environment) which is responsible for supplying all the resources a program needs to properly execute. 


## Expression
A unit of code that produces a single value.

&nbsp;
# F

## First Class Citizen
An entity that supports basic operations such as being: 
* passed as an argument
* returned by a function
* assigned as a value

## First Class Functions
Functions that are treated as any other variable. Meaning they can be passed as an argument, returned by a function and assigned as a value.

## Function
A block of code that performs a task.

Functions __can__, but don't have to: 
* take values as arguments
* return values
* be named

__Javascript__: A callable object.

&nbsp;
# G

## Garbage Collection
An automated process that frees memory allocated to unused variables. 

## Getter
See [Accessor](#accessor).

## Global properties
Properties accessible in the global scope.

## Graceful Degradation
A methodology for building web applications that focuses on providing a specific viewing experience and makeing a less appealing, degraded version for [user agents](#user-agent) that don't support that experience.

## Grapheme
1 or more [code points](#code-point) as a single graphical unit.

A good example is the letter `ą` which is a grapheme that could be represented as a:
* single code point of `U+02DB`
* combination of `U+0061` and `U+02DB`. Which are respectively __a__ and __&#731;__

&nbsp;
# H

## Higher Order Function
A function that returns another function.

## Hoisting
The act of loading some resources to memory prior to code execution irrespective of those resources physical location in the source code. 

## Horizontal Scaling
Adding more machines into the pool of resources available to a system.

&nbsp;
# I

## Identifier
Names that identify different elements of a program like variables, functions or classes.

## Immutable
Meaning its state cannot be changed. Any attempts at changing an immutable variable result in creation of a new variable and allocating it new memory space. 

__Javascript__: All primitive types are immutable.

## Initialization
Allocation of memory for a variable.

## Interpreter
A program that directly executes instructions written in a programming language without prior compilation.

&nbsp;
# J


&nbsp;
# K

## Keyword 
A word that has a predefined meaning in a programming language.

&nbsp;
# L

## Lexical Scope
Or static scope means the availability of an element is determined by where it was created in the source code.

## Literal
A value which is expressed as itself. For example:
* `'Dog'` string literal
* `10` numeric literal
* `true` boolean literal 
* `[1, 2, 3]` array literal containing 3 numeric literals

## Locale
An object containing a regional settings like a region or language code.

List of all [valid language codes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

## Luhn Algorithm
An algorithm that checks the validity of various identification numbers like a credit card number.

&nbsp;
# M

## Method
Is a function that describes a verb of a class or an object. 

If we had a class called `Horse` it could have a method called `run`.

## Method Overriding
Changing the definition of a method inherited from a superclass to provide a subclass specific implementation.

## Module
An independent software component designed to group features performing a given task. An application is usually composed of many components.

Modules are very powerful because they provide:
* reusability - are a standalone part which you can easily include in other applications. 
* readability - only deal with a single feature making it easier to understand and debug.
* security - only exposes what is needed and hides its inner working making it safe from external influences(other programs, an inexperienced developer).

## Mutable
Meaning its state can be changed. Immutable variable types are usually assigned values which represent a reference to a space in memory. This means that any changes made to what the reference points at effects all other variables that share the same reference.

__Javascript__: Object and arrays are mutable data types.

## Mutator
Also called a _Mutator Method_ or _Setter_ are methods that allow changing an objects state data.

&nbsp;
# N

## Namespacing
Various techniques used to organize code so that it doesn't polute the global namespace.

## Naming conflict
Also called a naming collision is when two identifiers within a given scope are identical.

## Native
Something designed to work with a particular system, meaning it can use that systems resources with minimal overhead.

&nbsp;
# O

## Object
A value in memory that can be referenced through an identifier.

__Javascript__: A wrapper that contains 0 or more key-value pairs which are called properties. Properties values can be of any data type. If a value is not assigned to a property it is automatically set to `undefined`. If a value is a function then it represents a method. Properties keys can be of type String or Symbol.

## Object Oriented Programming
A programming paradigm that involves:
* Abstraction - hiding complexities of a system and only exposing what is needed to the users.   
* Encapsulation - grouping related properties and methods under a single entity.
* Inheritance - passing down properties and methods between objects or classes creating a hirarchical dependency between them.
* Polymorphism - creating a method or function that works differentely depending on context of execution.

## Operand
The object of an operation.

## Operator
Symbols that represent mathematical and logical operations.

## Overhead
Excess resources needed to perform a task.

&nbsp;
# P

## Parameter
A variable in a function declaration.

Do not confuse with an [argument](#argument) which is the actual value assigned to a parameter.

## Parser
A program that takes complex input(source code, markup, JSON, URI, etc.) and performs the following operations:
1. __Lexical Analysis__: divides the input into atomic parts called [tokens](#token).
1. __Syntactic Analysis__: groups the tokens into [expressions](#expression).
1. __Semantic Parsing__: determines the meaning of the expressions and passes it on to any programs that would make use of the parsed data.

Parsers are often components of compilers and interpreters(Javascript, Java, HTML) but can also be stand-alone libraries(URI parsers, email parsers).

Credit: https://www.techopedia.com/definition/3854/parser

## Polyfill
A [shim](#shim) specific to browsers. Used to introduce newer features to a browser that doesn't support them by combining features it does support.

## Primitive
Any data type that is not an object and has no methods. 

__Javacript__: These are `string`, `number`, `boolean`, `null`, `undefined` and `symbol`. A primitive variable stores its actual value.

## Progressive Enhancement(PE)
A methodology for building web applications that focus on providing basic content and functionality. Advanced features are built on top of that core and used only by user agents that support them.

This ensures a good experience for users with a poor internet connection, legacy browsers or old devices and a great experience for everyone else.

## Progressive Web Apps(PWA)
Web applications that work like [native](#native) applications. They:
* are responsive and work cross-browser
* present content even when offline
* can be added to the home screen of a device
* load fast even on a poor internet connection
* offer fluid page transition and scrolling

For a thorough explanation checkout what [Google](https://developers.google.com/web/progressive-web-apps/) has to say on the subject.

&nbsp;
# Q


&nbsp;
# R

## Regular Expression
A sequence of symbols expressing a pattern to be searched for in text.

__Quantifier__: special symbols that determine the number of matching elements.

__Greedy quantifier__: a quantifier that matches the maximum number of characters.

__Lazy quantifier__: a quantifier that matches the minimum number of characters.

__Zero-Length Assertions__: assert if the subexpression matches or not, but does not add it to the matched string.

Be careful when using regular expressions:
* they are very complex thus bug prone in the wrong hands
* can be hard to understand
* some implementations are slow

Rule of thumb:
* use [parsers](#parser) for complex data with a clear syntax(source code, urls, etc.)
* if the regular expression is too long think of a different approach
* don't try to solve all cases in a single regular expression(all valid emails could take a reg exp of over 1000 characters)

## Responsive Design
A design practice when creating websites. A responsive website appropriately resizes, repositions, shows or hides elements to provide a great user experience on any device.

## RFC
Request for Comments is a publication from the technology community regarding how the internet works or could work.

## Runtime
See [Execution Phase](#execution-phase).

## Runtime Environment
The RTE is an environment in which a program is executed. Think of it as a layer between written code and the machine on which it runs. This often includes the operating system, any libraries the program uses and an interpreter that translates the program into something a machine can understand.

&nbsp;
# S

## SEO
Search engine optimization

## Separator
Symbols that structure a program. 

Like a semicolon `;` to mark the end of a statement or braces {} that mark the beginning and end of a function body.

## Shim
Code that intercepts an API Call, makes changes to it and forwards it. This allows introducing features in systems that don't normally support them. 

## Slug
A human-readable URL component. Mostly used for:
* __SEO__ by fitting keywords into the url
* __Readability__ by replacing extensions and special characters with something concise and to the point

__Example__: In `www.example.com/home.html?search=shoes` you could make it more readable with a slug `www.example.com/shoes`

## Statement
An action to be executed.

__Javascript__: A statement cannot be used where a value is expected(even though in javascript statements produce a value).

## String Interpolation
Replacing placeholders in a string literal with their corresponding values.

## Subdomain
Subdomains allow creating seperate versions of a website under one domain. 

Often used for:
* __multilingual website__ - seperate a site depending on the users chosen language `en.somesite.com`, `cn.somesite.com`, `de.somesite.com`
* __mobile version__ - a seperate mobile version of a website `mobile.somesite.com`
* __complex websites__ - seperate subdomain for different features `shop.somesite.com` `vendor.somesite.com` `dashboard.somesite.com`
* __distributed server architecture__ - seperate subdomain for content served from different servers.

Advantages:
* adds a keyword to the domain name for SEO or branding.
* search engines treat it like a seperate site, which could result in your domain appearing more than once in search results. Especially useful if the original domain already has strong positioning.

This is not always the best approach. An alternative is using subdirectories. When building a feature packed web site consider using subdomains.

## Surrogate Pair
A pair of two UTF-16 [code units](#code-unit) that resolve to a single [code point](#code-point). Used for code points that can not be encoded in 16 bits.

A surrogate pair is comprised of a:
* __high surrogate__ ranging from U+D800 to U+DBFF
* __low surrogate__ ranging from U+DC00 to U+DFFF

&nbsp;
# T

## Token
Atomic element of a program. This could be an [identifier](#identifier), [keyword](#keyword), [literal](#literal), [operator](#operator) or [seperator](#separator).

## Type coercion
Converting a value of one type to another. This can happen automatically, which is called __implicit type coercion__ or with expressed intention to convert which is called __explicit type coercion__.

__Javascript__: You can only convert to __string__, __boolean__ or __number__. For a more in depth explanation check out [this article](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839).

&nbsp;
# U

## Unicode
An encoding standard that provides a unique number([code point](#code-point)) for characters in most modern languages, diacritics, symbols, emojis and more. These unique numbers are hexadecimals ranging from __0000__ to __10FFFF__ which results in __1,114,112__ different values. As of Unicode Version 9.0 __128,237__ of these are in use. 

Some popular implementations of Unicode are __UTF-8__, __UTF-16__ and __UTF-32__. These are called character encodings and work by mapping Unicode numbers to a bit sequence called a [code unit](#code-unit).

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
    * _host_ - a registered name or an ip address. If a name it is comprised of `{subdomain}.{SLD}.{TLD}`
        * [__subdomain__](#subdomain) - an alias of the domain
        * __second level domain(SLD)__ - a name usually distinguishing the site from others 
        * __top level domain(TLD)__ - a generic name that usually identifies the purpose or region of the domain
    * _port_ - the connection point within that host
* __path__ - path that resembles a file system path. 
* __query__ - a string usually consisting of name - value pairs. A single URI can have multiple query strings seperated by `&`
* __fragment__ - a string that identifies a fragment within a resource

Popular URI schemes with examples:
* __http__ - `http://www.somewebpage.com/search?q=example+search`
* __https__ - `https://john:smith@www.somewebpage.com:9000/gallery/search?phrase=kitten#paw`
* __file__ - `file:///Users/someuser/projects/website/index.html`
* __mailto__ - `mailto:someone@domain.com?subject=A%20subject&body=the%20body`
* __ftp__ - `ftp://johnsmith@example.com/`

## URL
A Uniform Resource Locator is a string that identifies a web resource. A URL specifies a resources location. It is a subset of URI's and follows the same syntax.

`http://www.somewebpage.com/search?q=example+search`

## User Agent
Software used by a user. For example:
* `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:64.0) Gecko/20100101 Firefox/64.0` - which is parsed to Firefox 64 on macOS(Mojave)
* `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36` - which is parsed to Chrome 71 on macOS(Mojave)

&nbsp;
# V

## Vertical Scaling
Adding more power to a resource available to a system.

&nbsp;
# W

## Wrapper
Or wrapper object / wrapper class is a data type that encapsulates(or "wraps") another data type extending or simplifying its usage.

&nbsp;
# X


&nbsp;
# Y


&nbsp;
# Z

