# Python 3 Guide

Source:
* [python tutorial](https://docs.python.org/3.7/tutorial/index.html)
* [python docs](https://docs.python.org/3/contents.html)

TODO:
* [python glossary](https://docs.python.org/3/glossary.html#term-decorator)
* [functional python](https://docs.python.org/3/library/functional.html)

#### Table of contents

* [Control Flow](#control-flow)
    * [Grouping](#Grouping)
    * [Conditions](#Conditions)
    * [Placeholder](#Placeholder)
    * [Iteration](#iteration)
* [Functions](#functions)
    * [Function Scope](#function-scope)
    * [Function Arguments](#function-arguments)
    * [First Class Functions](#first-class-functions)
    * [Lambda Expressions](#lambda-expressions)
    * [Annotations](#annotations)
    * [Built-in Functions](#built-in-functions)
    * [Functional Python](#functional-python)
    * [Functions - Best Practices](#Functions---Best-Practices)
* [Data Structures](#data-structures)
    * [Sequence](#sequence)
        * [Sequence Operations](#sequence-operations)
        * [Sequence Comparison](#sequence-comparison)
    * [Lists](#lists)
        * [List Methods](#list-methods)
        * [List Comprehensions](#list-comprehensions)
        * [del statement](#del-statement)
    * [Tuples](#tuples)
    * [Sets](#sets)
        * [Set Operations](#set-operations)
        * [Set Methods](#set-methods)
    * [Dictionaries](#dictionaries)
        * [Dictionary Methods](#dictionary-methods)
    * [Looping Techniques](#looping-techniques)
* [Modules](#modules)
    * [Script](#script)
    * [Module Characteristics](#module-characteristics)
    * [Import](#import)
    * [Package](#package)
* [I/O](#i/o)
    * [Read and Write](#read-and-write)
    * [File Objects](#file-objects)
    * [Serializing](#serializing)
* [Errors and Exceptions](#errors-and-exceptions)
    * [Exceptions](#exceptions)
    * [Handling Exceptions](#handling-exceptions)
    * [Raising Exception](#raising-exception)
    * [User-Defined Exceptions](#user-defined-exceptions)
* [Classes](#classes)
    * [Class Basics](#class-basics)
    * [Inheritance](#inheritance)
    * [Iterators](#iterators)
    * [Generators](#generators)
    * [New Style Classes](#new-style-classes)
* [Dunders](#dunders)
* [Package Manager](#package-manager)
* [Virtual Environments](#virtual-environments)
* [Standard Library](#standard-library)
    * [Wildcards](#wildcards)
    * [Command Line Arguments](#command-line-arguments)
    * [Dates and Time](#dates-and-time)
    * [Compression](#data-compression)
    * [Output Formatting](#output-formatting)
    * [Templating](#templating)
    * [Binary Data](#binary-data)
    * [Regular Expressions](#regular-expressions)
    * [Functools](#functools)
* [Internet Access](#internet-access)
    * [Networking](#networking)
    * [Internet Data Handling](#internet-data-handling)
    * [Internet Protocols](#internet-protocols)
* [Multimedia](#multimedia)
* [OS](#os)
* [Testing](#testing)
* [Typing](#typing)
* [Performance Measurement](#performance-measurement)
    * [Execution Timing Decorator](#execution-timing-decorator)
* [Quality Control](#quality-control)
* [Concurrency and Parallelism](#concurrency-and-parallelism)
    * [Threading](#threading)
    * [Mulitprocessing](#mulitprocessing)
* [Logging](#logging)
* [Garbage Collection](#garbage-collection)
* [Development Tools](#development-tools)
* [Debugging and Profiling](#debugging-and-profiling)
* [Task Runner](#Task-Runner)
* [Snippets](#snippets)
  * [Pipeline](#pipeline)
* [GUI](#GUI)
* [Python C API](#python-c-api)
* [Glossary](#glossary)

&nbsp;
# Control Flow
Controlling what is executed and in what order.

The `try...catch` control flow statements are covered in the [Errors and Exceptions](#try...catch..finally) section

## Grouping
In most popular languages statements are grouped in curly brackets `{ body }`. In python this is done through `indentation`. Each line in the same block needs to be indented by the same amount in order for them to be properly interpreted.

``` python
a = 5
while a >= 0:
  # indented by two spaces
  a -= 1
  print(a)
```

## Conditions
The `if` statements executes code based on whether a condition is met. The `elif` clause enables executing different logic based on multiple conditions. You can specifiy a fallback if none of the conditions are met with the `else` clause.

If a condition is met following conditions are not checked. This is why the order of nested if...else statements is important if the conditions are not mutually exclusive. 

``` python
x = 5
y = 10
a_condition = False


if y > x:
	print(y)          

if a_condition:
	print('a_condition is true')
else:
	print('a_condition is not true')


if y > x:
	print('y is greater than x')
elif y < x:
	print('y is greater than x')
elif y == x:
	print('y is equal to x')
else:
  print('y cant be compared with x')
```

## Placeholder
The `pass` statement does nothing. It is used as a placeholder when you dont want to implement a function or conditional body yet

``` python
def storeLogs(*args):
  pass

# below would throw an error
def functionWithoutBody():
```

&nbsp;
## Iteration
Repeating execution of code a set number of times or until a condition is met.

### while
Consists of a condition and statement. As long as the condition is evaluated to `true` the statement is executed.
* can bind an `else` statement which is executed after the condition evaluates to `False`
``` python
i = 1
while i < 5:
  print(i, end=' ')
  i += 1              # 1 2 3 4

while False:
  print('this wont execute')
else:
  print('this will always execute')
                      # this will always execute
```

### do...while
Consists of a condition and statement. Executes the statement and than evaluates the condition. If it evaluates to `true` the process is repeated. This ensures the statement is always executed at least once.

A `do ... while` loop is not available natively in Python and must be emulated using a `while` loop and a `break` statement. 

``` python
i = 1
while True:
  print(i)
  if(i > 0):
    break
```

### for...in
Iterates over an object of an iterable data type. 
* can bind an `else` statement which is executed after the list is exhausted
* `str`, `list`, `dict`, `tuple`, `set` are iterable data types.
  * these are also sequences - a subset of iterables
* iterating over a sequence does not iterate over a copy of it
* if you want to modify the sequence while looping over it create a shallow copy with the `slice` operator
  * this is especially important when mutating the list within the loop could cause an `infinite loop`
* to iterate over a set of numbers use the `range()` function

``` python
name = 'Jonathan'
a_list = [1, 2, 3]
a_dict = {1: 'one', 2: 'two', 3: 'three'}
a_tuple = ('Orange', 'Banana', 'Lemon')
a_set = {1, 2, 3}
tuple_list = [(1,2), (2,3), (3,4)]

for char in name:
  print(char, end = ',')          # J,o,n,a,t,h,a,n,
print()

for el in a_list:
  print(el, end = ' ')            # 1 2 3
print()

for num in a_set:
  if num % 2 != 0:
    print(num, end = ' ')         # 1 3
print()

# else clause
for (a, b) in tuple_list:
  print(a * b, end=" ")           # 2 6 12 list exhausted
else:
  print('list exhausted')

# create a shallow copy with slice operator and operate on it
for number in a_list[:]:
    if number == 3: 
        a_list.insert(0, 0)

# range()
for i in range(5):
  print(i, end = ' ')             # 0 1 2 3 4

for i in range(2,5):
  print(i, end = ' ')             # 2 3 4

for i in range(2,10,2):
  print(i, end = ' ')             # 2 4 6 8
```

### break
Terminates the current statement and continues to the next one. Works with labels, loops and the switch statement. 

``` python
for i in range(5):
  if(i == 3):
    break
  print(i, end = ' ')             # 0 1 2
```


### continue
Terminates the current iteration and continues to the next one. Works with labels and loops.

``` python
for i in range(5):
  if(i == 3):
    continue
  print(i, end = ' ')             # 0 1 2 4
```


&nbsp;
# Functions
The `def` keyword is used to define a function. A function consists of(in the following order):
  * `def` - function definition statement
  * `name` - the function identifier
  * `(param1,...,paramN)` - the function parameters
  * `function body` - statements that form the body of the function with proper indentation
    * the function body may start with a string literal that is treated as a `documentation string`
    * the function body can, but doesn't have to, contain a `return` statement that returns a value
    * if no `return` statement is provided the function implicitly returns a `None` value

``` python
def print_user_action(user, action):
  """ 
  Prints the username and action performed by that user
  """
  print(user, 'has performed a', action, 'operation')
  return {'user': user, 'action': action}

print(print_user_action.__doc__)
  #   Prints the username and action performed by that user

log = print_user_action('Greg', 'delete') 
                                  # Greg has performed a delete operation

print(log)                        # {'user': 'Greg', 'action': 'delete'}

# implicit None value returned
def does_nothing():
  pass

default_value = does_nothing()
type(default_value)               # <class 'NoneType'>
```

# Function Scope
Each function has a `local symbol table`. This table stores all the values of variable assignments within that functions body.

Variable references start from looking up the value in the enclosing functions local symbol table. If a value is not found they work their way up to enclosing functions and finally to the global scope.

Variables local to a function are not available outside of it.

``` python
x = 1
y = 2
z = 3

def func():
  y = 20
  z = 30
  def funcInfunc():
    z = 300
    print(x)                      # 1
    print(y)                      # 20
    print(z)                      # 300
  funcInfunc()

def loc():
  localVar = 20

print(localVar)
# NameError: name 'localVar' is not defined
```

## Function Arguments
All arguments in python are passed using `call by value`. That means the actual value of an argument is copied into the formal parameter. The copied value is an `object reference`, not its value.

To define functions with a variable number of arguments you can use one of three forms:
* default argument values
* keyword arguments
* arbitrary argument list

Arguments are seperated into:
* `positional arguments` - when you pass the value or name of variable without the `=` symbol. Positional arguments are dependent of the order/positions of parameters in the function signature
* `keyword arguments` - when you pass the keyword followed with the `=` symbol and a value or name of variable.

### Default Arguments 
You can specify default values for arguments within the function definition. Arguments with default values assigned can be omitted when calling the function.
* default arguments can only be specified **after non-default** arguments.
* default values are **evaluated only once** during function definition. This is especially important when:
  * assigning a variable as a default value
  * assigning a mutable object as the default value

``` python
def default_argument(age, name='John', surname='Smith'):
  print(name, surname, 'is', age, 'years old')

default_argument(30);
  # John Smith is 30 years old

default_argument(30, 'Jack')
  # Jack Smith is 30 years old

default_argument(30, 'Jack', 'Black')
  # Jack Black is 30 years old

default_argument()
  # TypeError: default_argument() missing 1 required positional argument: 'age'

# only after non-default arguments
def wrong_default(age=30, name, surname):
  print(name, surname, 'is', age, 'years old')
  # SyntaxError: non-default argument follows default argument 

# assigning a variable as a default value
x = 0

def variable_value(x=x):
  print(x)

x = 10
variable_value()
  # 0

# assigning a mutable objects
def mutable_default(list=[]):
  list.append(1)
  return list

mutable_default();
list = mutable_default();
print(list)
  # [1,1]

# mutable object workaround

def mutable_workaround(list = None):
  if list == None:
    list = []
  list.append(1)
  return list
```

### Keyword Arguments 
A function can be called with the keyword argument syntax `param=value`. They:
* must follow positional arguments
* can be passed in any order as long as they are after positional arguments
* cannot be assigned a value more than once
``` python
def keyword_arguments(required, keyword='two.', arbitrary='mic check'):
  print(required, keyword, arbitrary)

keyword_arguments('one')
  # one two. mic check

keyword_arguments(required='one two, one')
  # one two, one two. mic check

keyword_arguments('one', keyword='two, one two.')  
  # one two, one two. mic check

keyword_arguments('one', arbitrary='mic works!' , keyword='two, one two.')  
  # one two, one two. mic works!

keyword_arguments()
  # TypeError: keyword_arguments() missing 1 required positional argument: 'required'

keyword_arguments(required='one', required='one two, one')
  # SyntaxError: keyword argument repeated
```

### Arbitrary Argument List
You can pass an arbitrary number of arguments using the `*name` syntax in the parameter list.
* any arguments after the `*name` parameter can only be used as keyword arguments
* these arguments are wrapped in a tuple

You can also pass an arbitrary number of `key:value` pairs through the `**name` argument.
* these arguments are wrapped in a dictionary
``` python
# *args

def summation(*nums):
  return sum(nums)

summation(1,2,3)
  # 6

def arbitrary_args(*name, only_keyword):
  return ' '.join(name) + only_keyword

arbitrary_args('hello','hi','hola',only_keyword='!')
  # 'hello hi hola!'

arbitrary_args('hello','hi','hola')
  # TypeError: arbitrary_args() missing 1 required keyword-only argument: 'only_keyword'

def args_separated(*args, separator='-'):
  return separator.join(args)

args_separated('one','two', 'three')
  # 'one-two-three'

# **kwargs
def dict_args(**keywords):
  for kw in keywords:
    print(kw, ':', keywords[kw])

dict_args(name='Gregory', surname='Maj', age='29', loves='science fiction')
  # name : Gregory
  # surname : Maj
  # age : 29
  # loves : science fiction
```

## First Class Functions
Function in python are first class citizens meaning they can be treated like any other object:
* stored in a variable
* pass as argument
* returned by a function or method

``` python
def citizen():
  pass

def function(func):
  return func

# stored in variable
var = citizen

# passed as argument and returned
returned = function(citizen) 
```

## Lambda Expressions
Anonymous functions can be created through the `lambda` keyword. A lambda function can only contain a single expression. This is syntactic sugar for a normal function.

``` python
def incrementer(n):
  return lambda x: x + n

gen_id = incrementer(100000)

gen_id(1)
  # 100001
gen_id(25)
  # 100025
```

## Annotations
Annotations are metadata information about parameter and return data types.
* they are stored in the `__annotations__` attribute of the function.

``` python
def ud_function(age: int, name: str, surname: str = 'Smith') -> str:
  return name + ' ' + surname + ': ' + str(age)

print(ud_function.__annotations__)
  # {
  #   'age': <class 'int'>, 
  #   'name': <class 'str'>, 
  #   'surname': <class 'str'>, 
  #   'return': <class 'str'>
  # }
```

## Built-In Functions
The Python Interpreter comes with a lot of functions built-in. They are available globally.

Source: [python docs](https://docs.python.org/3.7/library/functions.html)


## Functional Python
Sources:
* [functional python docs](https://docs.python.org/3/library/functional.html)
* [kite.com](https://kite.com/blog/python/functional-programming/)

Python has higher order functions.


&nbsp;
# Data Structures
Data structures are collections of data, with a set of properties that make certain operations on them more effective.

## Sequence
Sequence types are iterable data structures that support a common set of operations.

The following are sequence data types:
* [`lists`](#lists)
* [`tuples`](#tuples)
* `range`
* [`string`](#string)
* `binary sequence types`

Be careful when operating on immutable sequence types. Certain operations such as concatenation `s + t` or repetition `s * n` will result in new objects which can greatly increase runtime cost. These data types usually have methods that allow doing this in a more optimal fashion.

### Sequence Operations
|Operation|Description|
|---------|----------|
|`x in s`|Check if a value is equal to any element in the sequence|
|`x not in s`|Check if a value is not equal to any element in a sequence|
|`s + t`|Concatenate two sequences|
|`s * n`|Add a sequence to itself `n` times|
|`s[i]`|Get the element at the `i` index|
|`s[i:j]`|Slice from `i` to `j`|
|`s[i:j:k]`|Slice from `i` to `j` with step `k`|
|`len(s)`|Get the length of a sequence|
|`min(s)`|Smallest item in a sequence|
|`max(s)`|Largest items in a sequence|
|`s.index(el[, start[, end]])`|Get the index of an element in a sequence or a part of it|
|`s.count(el)`|Count the number of occurrences of an element in a sequence|
|`*s`|Packing a sequence|
|`a, b, c = s`|Unpacking a sequence|

``` python
numbers = [1, 2, 3, 4]
letters = 'aabcdef'
immutable = (5, 6, 7, 8)
interval = range(2,10) 

# x in s
2 in numbers                # True
'abc' in letters            # True
9 in immutable              # False
10 in interval              # False

# x not in s
5 not in numbers            # True
'efg' not in letters        # True
10 not in interval          # True

# s + t
numbers + [5, 6]            # [1, 2, 3, 4, 5, 6]
letters + 'gh'              # 'aabcdefgh'
immutable + (9, 10)         # (5, 6, 7, 8, 9, 10)
  # range does not support concatenation

# s * n
numbers * 2                 # [1, 2, 3, 4, 1, 2, 3, 4]
immutable * 2               # (5, 6, 7, 8, 5, 6, 7, 8)
  # range does not support repetition

# s[i]
numbers[len(numbers) - 1]   # 4
letters[3]                  # 'c'
immutable[0]                # 5
interval[3]                 # 5

# s[i:j]
numbers[1:3]                # [2,3]
letters[4:]                 # 'def'
immutable[-1:]              # (8,)

# s[i:j:k]
immutable[::-1]             # (8, 7, 6, 5)
interval[2::2]              # range(4, 10, 2)

# len(s)
len(numbers)                # 4
len(letters)                # 7
len(immutable)              # 4
len(interval)               # 8

# min(s)
min(numbers)                # 1
min(letters)                # 'a'
min(immutable)              # 5
min(interval)               # 2

# max(s)
max(numbers)                # 4
max(letters)                # 'f'
max(immutable)              # 8
max(interval)               # 9

# s.index()
numbers.index(4)            # 3
letters.index('a')          # 0
immutable.index(5, 1)       # ValueError: tuple.index(x): x not in tuple
interval.index(5)           # 3
  # range.index() only takes one argument

# s.count()
numbers.count(1)            # 1
letters.count('a')          # 2

# *s
[*numbers, *letters, *immutable, *interval]
  # [
  #   1, 2, 3, 4, 
  #   'a', 'a', 'b', 'c', 'd', 'e', 'f',
  #   5, 6, 7, 8,
  #   2, 3, 4, 5, 6, 7, 8, 9
  # ]

# a, b, c = s
a, b, c, d = numbers
  # a = 1, b = 2, c = 3, d = 4
a, b = letters
  # ValueError: too many values to unpack (expected 2)
  # values to unpack need to be equal to the length of the sequence
```

## Sequence Comparison
Same sequence type object can be compared to each other using comparison operators. * comparison is done `lexicographically`
* comparison is recursive in case of nested sequences
* mixed numeric types are compared according to numerical value

``` python
a = [1, 2, 3]
b = [1, 3, 4]

a < c
  # True
a == c[:3]
  # True
```

## Lists
A mutable indexed collection of 0 or more objects. Lists are a [sequence](#sequence) data type.

Lists are an effective way to implement the `stack` data structure because of fast insertion and retrieval from the end of the list.

They are instances of the `list` class
``` python
[10, 0.12312, True, 'string']

type([1,2,3])
# <class 'list'>

 concatenation
[1,2,3] + [4,5,6]
# [1, 2, 3, 4, 5, 6]

# mutable
a = [1,2,3]
b = a
id(b) == id(a)      # True
a[2] = 5
id(b) == id(a)      # True

# indexed
a[0]                # 1

# length
len(a)              # 3

c = [a, 6, 7]       # [[1, 2, 5], 6, 7]

# sliced
a[1:]               # [2, 5]

a[:] = []           # []

# unpacked
count = [1, 2, 3]
alphabet = ['a', 'b', 'c']
unpacked = [*count, *alphabet]
  # [1, 2, 3, 'a', 'b', 'c']
```

### List Methods
* `list.append(element)` - adds an element to the end of the list.
* `list.extend(iterable)` - appends all items in the iterable
* `list.insert(index, element)` - inserts an element at a given index
* `list.remove(value)` - removes the first element that matches the passed value from the list. Throws `ValueError` if matching element is not found
* `list.pop([index])` - removes and returns the last element in the list. If an index is specified performs the operation on the element at that index
* `list.clear()` - removes all elements from the list
* `list.index(value[, start[, end]])` - returns index of first item that matches the passed value. Can specify a `start` and `end` index which work just like the slice operator.
* `list.count(element)` - returns the number of times a value appears in the list
* `list.sort(key=None, reverse=False)` - mutates the list by sorting its items from smallest to greatest. 
  * `key` - a one argument function that is executed with each element before it is compared
  * `reverse` - if set to `True` reverses the comparison
* `list.reverse()` - mutates the list by reversing the order of its elements
* `list.copy()` - returns a shallow copy of the list

``` python
a = [0, 1, 2]

# append
a.append(3)         
  # [0,1,2,3]
a[len(a):] = [4] 
  # [0,1,2,3,4]

# extend
a.extend([5, 6])
  # [0,1,2,3,4,5,6]
a[len(a):] = [7, 8] 
  # [0,1,2,3,4,5,6,7,8]

# insert
a.insert(len(a), 9)
  # [0,1,2,3,4,5,6,7,8,9]

# remove
a.remove(9)
  # [0,1,2,3,4,5,6,7,8]
a.remove(10)
  # ValueError: list.remove(x): x not in list

# pop
last = a.pop()
first = a.pop(0)

print(a)
  # [1,2,3,4,5,6,7]
print('first:',first,'; last:',last)
  # first: 0 ; last: 8

# index
a.index(3)
  # 2
a.index(3, 3)
  # ValueError: 3 is not in list

# count
numbers = [1,1,1,2,3,4]

numbers.count(1)
  # 3
numbers.count(5)
  # 0

# sort
letters = ['Z', 'a', 'A', 'B', 'b']

letters.sort()
  # ['A', 'B', 'Z', 'a', 'b']
letters.sort(key=str.lower)
  # ['A', 'a', 'B', 'b', 'Z']
letters.sort(key=str.lower, reverse=True)
  # ['Z', 'B', 'b', 'A', 'a']

# reverse
a.reverse()
  # [7, 6, 5, 4, 3, 2, 1]

# copy
b = a.copy()
c = a[:]
d = a

print(b)
  # [7, 6, 5, 4, 3, 2, 1]
print(c)
  # [7, 6, 5, 4, 3, 2, 1]
print(d)
  # [7, 6, 5, 4, 3, 2, 1]

print(a is b)
  # False
print(a is c)
  # False
print(a is d)
  # True

# clear
a.clear()
print(a)
  # []

del letters[:]
print(letters)
  # []
```

### List Comprehensions
`List comprehensions` are a succinct way of creating lists. They consist of the following elements within square brackets `[ ]` in the following order:
* an expression
* 1 or more `for` clauses
* 0 or more `if` clauses

``` python
import math

# list comprehension without if statement
cubes = [x**3 for x in range(5)]
print(cubes)
  # [0, 1, 8, 27, 64]

# list comprehension with if statement
perfect_squares = [
  x 
  for x in range(101) 
  if math.sqrt(x).is_integer()
]
print(perfect_squares)
  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# equivalent of perfect_squares list comprehension
squares = []
for x in range(101):
  if math.sqrt(x).is_integer():
    squares.append(x)

print(squares)
  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# list comprehension with two for statements
tuples = [
  (x, y)
  for x in [1,2,3]
  for y in [4,5,6]
]  

print(tuples)
  # [
  #   (1, 4), (1, 5), (1, 6), 
  #   (2, 4), (2, 5), (2, 6), 
  #   (3, 4), (3, 5), (3, 6)
  # ]
```

### del statement
You can use the `del` statement to:
* remove elements from a list
* remove a variable - this is considered bad practice
```python
# remove elements from a list
numbers = [0,1,2,3,4,5]
del numbers[1:5]

print(numbers)
  # [0, 5]

# remove a variable
a = 5
del a
print(a)
# NameError: name 'a' is not defined
```

&nbsp;
## Tuples
Immutable indexed collection of objects. Tuples are a [sequence](#sequence) data type.
* their immutability makes them a great choice when data integrity is of importance
* you can build tuples through `tuple packing`

They are instances of the `tuple` class
``` python
(20, "some string", True)

type((1,2,3))
# <class 'tuple'>

# immutable
y = (1,2)
y[0] = 2  # TypeError: 'tuple' object does not support item assignment

# tuple packing
empty_tuple = ()
single_item = 1,
  # (1,)
many_items = 'one', 'two', 'three'
  # ('one', 'two', 'three')
```

&nbsp;
## Sets
Unordered collection of unique elements

A set can be create through a `set comprehension` which works just like a list comprehension.

They are instances of the `set` class
``` python
a = {1, 2, 3, "a"}

empty_set = set()
  # set()

type({1, 2, 3})
  # <class 'set'>

# unordered
a[1]
  # TypeError: 'set' object does not support indexing

# unique
print(a)
  # {1, 2, 3, "a"}
a.add(1)
print(a)
  # {1, 2, 3, "a"}

# set comprehension
{x**2 for x in range(10) if x not in range(4,8)}
  # {0, 1, 64, 4, 9, 81}
```

### Set Operations
Sets support certain mathematical operations.
* `a - b` -> elements in `a` but not in `b` - **Difference**
* `a | b` -> elements in `a` or in `b` - **Union**
* `a & b` -> elements in both `a` and `b` - **Intersection**
* `a ^ b` -> elements in `a` or `b`, but not in both - **Symmetric Difference**

``` python
a = {1, 2, 3, 4}
b = {1, 3, 5, 7}

a - b
  # {2, 4}

a | b 
  # {1, 2, 3, 4, 5, 7}

a & b
  # {1, 3}

a ^ b
  # {2, 4, 5, 7}

```

### Set Methods
* `set()` - cast a collection to a set. This removes any repeating values.
* `set.add(val)` - add an element to the set
* `set.clear()` - removes all elements in a set
* `set.copy()` - returns a copy of the set
* `set.difference_update(set)` - removes items in a set that are also in another set
* `set.discard(val) - removes an element from the set
* `set.intersection_update(set)` - removes items in a set that are not present in another set
* `set.isdisjoint(set)` - returns whether two sets are disjoint(no intersection)
* `set.issubset(set)` - returns whether this set is contained in another set
* `set.issuperset(set)` - returns whether this set is contained in another set
* `set.symmetric_difference_update(set)` - updates a set with its symmetric difference with another set
* `set.update(key)` - update the set with its union with another set

```python
a = {1, 2, 3}
b = {1, 3, 5}
c = {4, 5, 6}
d = set(range(10))

# set()
repeat = [1,1,1,1,2,2,2,3,3,3]
set(repeat)
  # {1, 2, 3}

# add(val)
empty_set = set()
empty_set.add(1)
  # {1}

# copy()
e = a.copy()
  # {1, 2, 3}

# diference_update()
a.difference_update(b)
print(a)
  # {2}

# discard()
a.discard(2)
print(a)
  # set()

# intersection_update()
b.intersection_update(c)
print(b)
  # {5}

# isdisjoint()
a.isdisjoint(b)
  # True

# issubset()
a.issubset(d)
  # True

# issuperset()
d.issuperset(a)
  # True

# symmetric_difference_update()
a = {2}
a.symmetric_difference_update({2, 3, 4, 5})
print(a)
  # {3, 4, 5}

# update()
b = {1, 3, 5, 7, 9}
a.update(b)
print(a)
  # {1, 3, 4, 5, 7, 9}

# clear()
a.clear()
print(a)
  # set()
```

&nbsp;
## Dictionaries
Dictionaries are sequences of unordered `key:value` pairs grouped within braces.
* cannot be sorted
* `values` are referenced through their key
* `keys` can only be of an immutable data type
* can be `nested`
* are `mutable`
* can be unpacked
* you can delete a `key:value` pair with the `del` statement
* attempting to extract a value for a non-existant key will result in a `KyeError`
* use the `in` operator to check if a key exists in a dictionary
* use the `dict()` constructor to build a dictionary from: 
  * a list of `(key, value)` pairs
  * keyword arguments
* `dict comprehensions` can be used to create a dictionary from key:value expressions. Follows similar syntax to list comprehension

Dictionaries are especially useful when you want to access values without knowing there index.

They are instances of the `dict` class
``` python
dictionary = {'key':'value', '1':'one', 'name':'Greg'}
empty_dictionary = {}

type({'a':1, 'b':2})
# <class 'dict'>

# values referenced through their key
dictionary['key']
  # 'value'

# keys can only be of immutable data types
b = {
  1: 'int', 
  1.0: 'float', 
  'a':'str', 
  True: 'bool',
  (1,2): 'tuple'
}
c = { [1]: 'arr'}
  # TypeError: unhashable type: 'list'


# can be nested
d = { 'nested': { 1: 'one', 2: 'two'}}
d['nested'][1]    
  # one

# are mutable
id_before = id(d)
d['nested'][1] = 1
id_after = id(d)
id_before == id_after   
  # True

# can be unpacked
fruits = {'oranges': 5, 'bananas': 3}
vegies = {'broccoli': 3, 'cucumbers': 5, 'carrots': 10}
shopping_cart = {**fruits, **vegies}
  # {
  #   'oranges': 5, 
  #   'bananas': 3, 
  #   'broccoli': 3, 
  #   'cucumbers': 5, 
  #   'carrots': 10
  # }

# del statement
for key, value in shopping_cart.copy().items():
  if value == 3 or value == 5:
    del shopping_cart[key]

print(shopping_cart)
  # {'carrots': 10}

# extract a value for a non-existant key
shopping_cart['chicken']
  # KeyError: 'chicken'

# in operator to check if key exists
'carrots' in shopping_cart
  # True
'chicken' in shopping_cart
  # False

# dict() constructor
shopping_cart = dict([('chicken','0.5 kg'), ('strawberries','2kg')])
print(shopping_cart)
  # {'chicken': '0.5 kg', 'strawberries': '2kg'}
playlist = dict(metronomy='Heartbreaker', lou_phelps='Come Inside', lorn='Acid Rain')
  # {'metronomy': 'Heartbreaker', 'lou_phelps': 'Come Inside', 'lorn': 'Acid Rain'}

# dict comprehension
squares = {x: x**2 for x in range(10)}
  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

products = ['bananas', 'oranges', 'green tea', 'lemons']
warehouse = {
  key:value 
  for key, value in zip(
    range(10000, 10000 + len(products)),
    products 
  )
}
  # {10000: 'bananas', 10001: 'oranges', 10002: 'green tea', 10003: 'lemons'}

warehouse_no_comprehension = dict(
  zip(
    range(10000, 10000 + len(products)),
    products 
  )
)
  # {10000: 'bananas', 10001: 'oranges', 10002: 'green tea', 10003: 'lemons'}

```

### Dictionary Methods
* list(dict) - returns a list of keys in a dictionary
* sorted(dict) - returns a sorted list containing all the keys in a dictionary
* `dict.get(key)` - return the value matched with the passed key or `None` if the key is not present
* `dict.items()` - returns a list of `(key, value)` tuples
* `dict.keys()` - returns a list of keys in a dictionary
* `dict.pop(key)` - removes a specific key and returns its value
* `dict.popitem()` - returns and removes last inserted key:value pair
* `dict.setdefault(key, value)` - returns the value of the specified key or inserts the key:value pair and returns the its value if the key is not present
* `dict.update(iterable)` - updates the dictionary with
  * key:value pairs from another dictionary
  * with key:value pairs from an iterable
  * the values of keys that are passed and already exist in the dictionary
* `dict.values()` - returns a list of values

``` python
a = {2: 'two', 3: 'three', 1: 'one'}

# list()
list(a)
  # [2, 3, 1]

# sorted()
sorted(a)
  # [1, 2, 3]

# get()
a.get(2)
  # two
a.get(4)
  # None

# items()
a.items()
  # dict_items([(2, 'two'), (3, 'three'), (1, 'one')])

# keys()
a.keys()
  # dict_keys([2, 3, 1])

# pop()
val = a.pop(1)
print(val)
  # 'one'
print(a)
  # {2: 'two', 3: 'three'}

# popitem()
last = a.popitem()
print(last)
  # (3, 'three')
print(a)
  # {2: 'two'}

# setdefault()
a.setdefault(1, 'ONE')
  # 'ONE'
a.setdefault(2, 'TWO')
  # 'two'
print(a)
  # {2: 'two', 1: 'ONE'}

# update()
numbers = {1: 'ONE', 2: 'TWO', 3: 'THREE'}
a.update(numbers)
print(a)
  # {2: 'TWO', 1: 'ONE', 3: 'THREE'}
a.update([(4, 'FOUR')])
print(a)
  # {2: 'TWO', 1: 'ONE', 3: 'THREE', 4: 'FOUR'}

# values()
a.values()
  # dict_values(['TWO', 'ONE', 'THREE', 'FOUR'])
```

## Looping Techniques
Different looping techniques can be applied for different data structures:
* `dict.items()` - to loop through keys and corresponding values
* `s.enumerate()` - to loop through sequences index and corresponding values
* `zip(s, s[, ... ,s])` - to loop through more than one sequence at the same time
* `reversed(s)` - to loop through a sequence in reversed order
* `sorted(s)` - to loop over a sorted shallow copy of a sequence

``` python 
# dict.items()
products = {'oranges':6, 'apples': 0, 'bananas': 12}
for product, quantity in products.items():
  available = str(quantity) + ' ' + product + ' available'
  not_available = product + ' not available'
  print(available if quantity > 1 else not_available)
  # 6 oranges availabe
  # apples not available
  # 12 bananas availabe

# s.enumerate()
products = ['chicken wings', 'fries', 'pepsi', 'special hot sauce']
for i, product in enumerate(products):
  print('Product', i + 1,':', product)
  # Product 1 : chicken wings
  # Product 2 : fries
  # Product 3 : pepsi
  # Product 4 : special hot sauce


# zip(s, s, s)
prices_walmart = [5.99, 4.25, 1.98, 59.00]
prices_selgros = [5.40, 4.30, 1.30, 40.00]
for wal, sel, item_number in zip(
  prices_walmart, 
  prices_selgros, 
  range(len(prices_walmart))
):
  print(
    'Item',
    item_number + 1,
    ': cheaper in',
    'walmart' if wal < sel  else 'selgros'
  )
  # Item 1 : cheaper in selgros
  # Item 2 : cheaper in walmart
  # Item 3 : cheaper in selgros
  # Item 4 : cheaper in selgros

# reversed(s)
for i in reversed(range(10)):
  print(i, end=' ')
  # 9 8 7 6 5 4 3 2 1 0

# sorted(s)
names = ['Gregory', 'Amber', 'Beth', 'Zelda', 'John']
for name in sorted(names):
  print(name, end=' ')
  # Amber Beth Gregory John Zelda
```

&nbsp;
# Modules
You can store python code in its own file for reuseability or direct execution. We call this a:
* `script` if it is used as an executable
* `module` if it is used as a library that is imported by other pieces of code

The python interpreter does not distinguish a `script` from a `module`. The names are based on how the pieces of code are used.

Python comes prepacked with a plefora of built-in modules for various tasks - linting, unit-testing, datetime manipulation, you name it!

## Script
`Scripts` are usually used to perform some specific actions when executed.

To access arguments passed through a cli use the `sys` modules `argv` list
  * the first element `argv[0]` is always the scripts name
  * you can pass in as many commandline arguments as your operating system or shell program will allow
  * command line arguments are stored in `argv` in the same order they are passed to the script, with the first one being under `argv[1]`

E.g `store_logs_snapshot.py`:
``` python
import app_log
import db_driver
import sys

try:
  current_logs = app_log.log_current()
except:
  print('Retrieving current logs failed')
  raise  

try:
  db_driver.save_logs(current_logs)
except:
  print('Persisting logs failed')
  raise

# just to demonstrate
for arg in sys.argv:
  print(arg, end=' ')

print("First argument:", sys.argv[1])
```

You would execute this in a command line interpreter
``` shell
> python store_logs_snapshot.py these are command line arguments
store_log_snapshot.py these are command line arguments
First argument: these
```

## Module Characteristics
* can contain anything you can run in the interpreter:
  * functions
  * variables
  * classes
  * statements
  * comments
  * etc.
* has its own private symbol table
  * this means any variables are restricted to that modules scope
* can import other modules
* can be run as a script
  * any code that should run in this scenario needs to be placed in the body of the following `if` statement `if __name__ == "__main__":`
  * this code is only executed if the module is run from the command line
  * running a module as a script will also execute its test suite
* if you import your module in the interpreter it will only import once, changes require restarting the interpreter session and subsequently importing the module again
  * you can use `importlib.reload(modulename)` in the interpreter if you want it to refresh automatically in a single interpreter session
* python caches compiled versions of modules in the __pycache__ directory to speed up loading
  * python automatically recompiles a cached module if a newer version is available

``` python
import some_module

# these are all available in this modules global scope
numbers = [1, 2, 3]
letters = ['a', 'b', 'c']
_not_imported = """
if a name starts with an underscore it will not be imported
when useing the import all method
"""

def print_all():
  for number, letter in zip(numbers, letters):
    print(number,letter)

if __name__ == "__main__":
  # this will run if the module is executed as a script
  print_all()
```

## Import
There are various ways of importing a module or selected names from a module:
* `import module_name` - this will add the module name to the local symbol table. All available names within that module can be refrenced through the reference to the module `module_name.some_function`
``` python
import module_name

module_name.func()
print(module_name.var)
```
* `from module_name import func, var, wahtever` - you can import specific names and reference them directly.
``` python
from module_name import func, var

func()
print(var)
```
* `from module_name import *` - imports all names from a module except those that start with an underscore `_`.  These imports are considered bad practice do to namespace polution
``` python
from module_name import *

func()
print(var)
```
* `from module_name import func as arbitrary` - this will import a selected name which will be accessible under an arbitrary alias
``` python
from module_name import func as some_function

some_function()
```

Import statements should, but dont have to be placed at the beggining of a module.

Beware of nameing conflicts. They do not throw an error, hence can result in hard to find bugs.


### Import Search Path
When importing a module the interpreter searches for the module in the following order:
* searches for `built-in module`
* search a list of directories stored in `sys.path` which is initialized from:
  * the directory containing the input script
  * PYTHONPATH
  * the installation default
  * a new location assigned to `sys.path` by a python program

``` python
import sys
# appending a new location to sys.path
sys.path.append('/path/to/lib')
```

### Check Defined Names
To check what names are available in the current namespace or the namespace of a module use the `dir()` function. This will not show built-ins.

``` python 
a = 1
b = 2
dir()
  # ['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b']

import some_module
dir(some_module)
  # ['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'some_func', 'some_var']
```

## Package
A `Package` is a way of creating a module hierarchy in which modules that share a common goal can be grouped within a package and referenced through it. This is accomplished through:
* grouping the files within a hierarchical filesystem
* placing an `__init__.py` initializes the packages making the python interpreter treat them as such

E.g. filesystem for packages:
```
manufacturing/
    __init__.py
    warehousing/
        __init__.py
        shopfloor.py
        outgoing.py
        stock_count.py
    production/
        __init__.py
        return.py
        fit.py
        form.py
        assemble.py
    quality_assurance/
        __init__.py
        heat.py
        cold.py
        durability.py    
        passed.py
        return.py
```

You can than:
* `import package1.package2.module` import a specific module under its full name
``` python
import manufacturing.warehousing.outgoing
import manufacturing.quality_assurance.passed

client = 'Apple'
finished_goods = manufacturing.quality_assurance.passed.get_items()

packed_goods = manufacturing.warehousing.outgoing.pack(finished_goods)

manufacturing.warehousing.outgoing.ship(packed_goods, client)
```
* `from package1.package2 import module` - import a specific module without package prefix
``` python
from manufacturing.warehousing import outgoing
from manufacturing.quality_assurance import passed

client = 'Microsoft'
finished_goods = passed.get_items()

outgoing.ship(outgoing.pack(finished_goods), client)
```
* `from package1.package2.module import func, var` - import a specific function or variable from a specific module
``` python
from manufacturing.warehousing.outgoing import ship, pack
from manufacturing.quality_assurance.passed import get_items

client = 'Dell'
finished_goods = get_items()

ship(pack(finished_goods), client)
```
* `import ..` - a relative import specifies a cli like path that is relative to the module that is importing
``` python
# importing from warehousing.outgoing module
from ..quality_assurance.passed import *

client = 'Asus'
finished_goods = get_items()

ship(pack(finished_goods), client)
```

### Import All

To import all the modules in a package: 
* you need to specify a list of module names under the `__all__` variable with the `__init__.py` file
``` python
# __init__.py in 'warehousing' package
__all__ = ['shopfloor', 'outgoing', 'stock_count']
```
* use the `from package import *` statement
``` python
from manufacturing.warehousing import *
from manufacturing.quality_assurance.passed import get_items

client = 'Lenovo'
finished_goods = get_items()

outgoing.ship(outgoing.pack(finished_goods), client)

```
* keep in mind - this is considered bad practice

&nbsp;
# I/O
Working with files

## Read and Write
`open('path/fileName.ext', [mode='m'])` - opens a file in the local file system. Mode indicates how the file is to be used:
* `r` - read, the default
* `w` - write, creates a new file if it doesn't exist
* `a` - append
* `x` - open for creation, fails if file already exists
* `r+` - read and write
* `w+` - read and write, creates a new file if it doesn't exist
* `b` - binary mode is used for files that dont contain text

`open` also take other arguments after mode in the following order:
* `buffering = -1` - by default the buffer size is set to the the operating system default buffer size
  * `0` - switch off buffering
  * `1` - line buffering
  * `> 1` - explicit buffer size
``` python
# to check os default buffer size
import io
print(io.DEFAULT_BUFFER_SIZE)
```
* `encoding = None` - encoding used to decode an encode the file
* `errors = None` - optional strin gon how encoding, decoding errors are handled, more [here](https://docs.python.org/3.7/library/functions.html#open)
* `newline = None` - how new lines are defined, if `None` uses system default
* `closefd = True` - if a file descriptor is passed instead of a filename this determines whether the file decriptor is kept open after the file is closed
* `file descriptor` - an indicator used to access input/output resources such as a:
    * file
    * network socket
    * pipe
* `opener = None` - pass a callable custom opener with `(file, flags)` parameters. An opener must return a file descriptor

On Windows the path seperator is a  double back-slash `C:\\user\\folder\\somefile.csv`

On MacOS and Linux the path seperator is a single forward-slash `/user/folder/somefile.csv`

Use the `with` keyword when working with files - this ensures they are closed and is more succinct then `try-finally` blocks
* the `with` statement is also called a `Context Manager`
* if not using the `with` keyword make sure to close files with the `file.close()` method
* garbage collection will eventually close the object, but when exactly depends on the Python implementation

``` python
productList = open('products/product.csv', mode='r')
productList.close()

with open('products/product.csv') as product_list:
    products = product_list.read()
  # you can omit closing with this technique
```

## File Objects
Object containing functionality for manipulating files.

### File Object Methods
* `file.close()` - closes the file and frees up any system resources associated with the open file
* `file.flush()` - empties the files buffer. This is done automatically when closing a file
* `file.isatty()` - indicates whether the file is connected to a terminal
  * a file connected to a terminal would be for example reading from the results of `cat` command in a unix terminal
* `file.read([size])` - if:
  * `size is negative or omitted`: returns whole file content as string and sets the cursor at the end of the file. 
  * `size is a positive integer`, that amount of characters or bytes are read instead of the whole file
* `file.readline([size])` - returns one line of the file and sets the cursor at the next line. 
  * When EOF is reached it returns an empty string. 
  * Can specify a `size` limit
  * `EOF` is an acronym for `End of file`
* `file.readlines()` - returns a list where each element is a one line of the file
* `file.seek(offset[, whence])` - sets the cursors position.
  * `offset` - position at which to set the cursor 
  * `whence` - how to seek:
    * `0` - absolute file position, this is the default value
    * `1` - relative to the current cursor position
    * `2` - relative to the files end
* `file.tell()` - returns the cursors current position
* `file.truncate([size]) - truncates the file to the current position or a given `size` if an argument is passed. Returns the position at which the truncation began
* `file.write(str)` - writes a string to the file. Must be opened in write mode. Does not add line seperators
* `file.writelines(list)` - writes a list of strings to the file. Must be opened in write mode. Does not add line seperators


``` python
# the content of text.txt
'''
this is some random text
i am writing of the top of my head
just to demonstrate how file object
methods work
'''

f = open('test.txt', 'r+')

# isatty()
f.isatty()
  # False
  # this file is connected to the terminal

# read()
f.read()
  # 'this is some random text\ni am writing of the top of my head\njust to demonstrate how file object\nmethods work\n'
  # the cursor is now at EOF

# seek()
f.seek(0)
  # 0
  # move the cursor to the beggining

# readline()
f.readline()
  # 'this is some random text\n'

# a for in loop will implicitly call readline()
for line in f:
  print(line, end=' ')
  # i am writing of the top of my head
  # just to demonstrate how file object
  # methods work

# tell()
f.tell()
  # 109
  # this is also EOF

# readlines()
f.seek(0)
lines = f.readlines()
print(lines)
  # [
  #   'this is some random text\n', 
  #   'i am writing of the top of my head\n', 
  #   'just to demonstrate how file object\n', 
  #   'methods work\n'
  # ]

# truncate()
f.seek(60)
  # this will place the cursor at the beginning of the 3rd line
f.truncate()
  # 60
f.seek(0)
print(f.readlines())
  # [
  #   'this is some random text\n', 
  #   'i am writing of the top of my head\n'
  # ]

# write()
f.write('some new text')
print(f.readlines())
  # [
  #   'this is some random text\n', 
  #   'i am writing of the top of my head\n', 
  #   'some new text'
  # ]

# writelines()
f.seek(60)
  # move to beginning of 3rd line
f.writelines([
  ' adding a couple of lines\n',
  'make sure to add a line separator\n',
  'there are better ways of doing this than\n',
  'adding a new line escape sequence manually\n',
  'for each line. This is not DRY\n'
])
f.seek(0)
print(f.readlines())
  # [
  #   'this is some random text\n', 
  #   'i am writing of the top of my head\n', 
  #   'a new line adding a couple of lines\n', 
  #   'make sure to add a line separator\n', 
  #   'there are better ways of doing this than\n', 
  #   'adding a new line escape sequence manually\n', 
  #   'for each line. This is not DRY\n'
  # ]


# flush()
f.flush()
  # close() wouldve done this nonetheless

# close()
f.close()
```

## Serializing
`Serializing` is the process of translating complex data structures into string representation. The following can be easily converted:
* lists
* dictionaries
* tuples
* basic data types

`Deserializing` is the reverse - converting data represented as strings back into complex data structures that can be easily read by python code.

Serialization and desrialization is made possible through the `json` module:
* `dump(obj, file)` - serialize an object as JSON formatted stream to file like object
* `dumps(obj)` - serializes object as a JSON formatted string
* `load(file)` - deserializes a file containing JSON data to a Python object
``` python
import json

# dump()
f = open('example.json', 'w')

shopping_cart = {
  'apples': 5, 
  'oranges': 10, 
  'markers': {
    'blue': 2,
    'yellow': 3
  }
}

json.dump(shopping_cart, f)

f.close()

# dumps()
json.dumps({'a':'dictionary'})
  # '{"a": "dictionary"}'
json.dumps(('a', 'tuple'))
  # '["a", "tuple"]'
json.dumps([
  "a string",
  5,
  1.1111,
  True,
  False,
  None
])
  # '["a string", 5, 1.1111, true, false, null]'

# load()
f = open('example.json', 'r')

payment_items = json.load(f)
print(payment_items)
  # {'apples': 5, 'oranges': 10, 'markers': {'blue': 2, 'yellow': 3}}
f.close()
```

&nbsp;
# Errors and Exceptions
Erros in Python can be divided into:
* `Syntax Errors` - syntax errors are detected during interpretation, before the code is executed
* `Exceptions` - are detected during runtime.
* `Warning` - indicators that something went wrong but doesnt warrant an exception or execution termination 

``` python
# Syntax Error
print """
print with no paranthesis is python 2 syntax
it will cause a syntax error if interpreted by 
a python 3 interpreter
"""
  # SyntaxError: Missing parentheses in call to 'print'.

# Exception
f = open('this_file_does_not_exists.json', 'r')
  # FileNotFoundError: [Errno 2] No such file or directory: 'this_file_does_not_exists.json'
```

## Exceptions
When code is syntactically correct but fails during runtime cause an error, this error is called an `Exception`. A `Fatal Exception` is one that causes the program to terminate execution. Not all exceptions are fatal.

Exceptions are divided into types that create a hierarchy.
* `Base Exceptions` are top level exception types that lower level exceptions inherit from. These exceptions are not raised
* `Concrete Exceptions` are lower level exceptions that inherit from base exceptions. They are more specific than base exceptions and are usually raised

Exception hierarchy with descriptions
* __`BaseException`__ - base class for all other exception types
  * __`SystemExit`__ - raised by `sys.exit()` function
  * __`KeyboardInterrupt`__ - raised when interrupt key is pressed, `Ctrl-C` or `Delete`
  * __`GeneratorExit`__ - raised when generator or coroutine is closed, `generator.close()` or `coroutine.close()`
  * __`Exception`__ - base class for all built-in non-system-exiting exceptions and any user defined exceptions
    * __`StopIteration`__ - raised to signalize there are no more items to be produced by an iterator, `next()` or `__next__()`
    * __`StopAsyncIteration`__ - must be raised by an asynchronous iterator object in the `__anext__()` method to stop iteration
    * __`ArithmeticError`__ - base class for all arithmetic errors
      * __`FloatingPointError`__ - deprecated
      * __`OverflowError`__ - can optionally be raised when the result of an arithmetic operation exceeds a required range.
      * __`ZeroDivisionError`__ - raised when dividing by `0` is attempted
    * __`AssertionError`__ - failed `assert` statement
    * __`AttributeError`__ - raised when attribute reference `obj.nonexistant` or attribute assignment `obj.nonexistant = 5` fails
    * __`BufferError`__ - buffer related errors
    * __`EOFError`__ - raised when `input()` function hits an EOF without reading data
    * __`ImportError`__ - raised when trying to import non-existant names
      * __`ModuleNotFoundError`__ - raised when module cannot be found
    * __`LookupError`__ - base class for exceptions involving invalid indexes and keys
      * __`IndexError`__ - raised if sequence index is out of range
      * __`KeyError`__ - raised when non-existant key is referenced
    * __`MemoryError`__ - raised when an operation runs out of memory
    * __`NameError`__ - raised when attempting to reference a non-existant global or local name
      * __`UnboundLocalError`__ - raised when referencing a local variable that has no value assigned to it within a function or method
    * __`OSError`__ - raised upon os related errors like `file not found`
      * __`BlockingIOError`__ - raised when an operation would block on non-blocking object like a stream
      * __`ChildProcessError`__ - raised when operation on child process fails
      * __`ConnectionError`__ - base class for connection errors
        * __`BrokenPipeError`__ - raised when attempting to write to a closed pipe or socket
        * __`ConnectionAbortedError`__ - raised when a connection attempt is aborted by the peer
        * __`ConnectionRefusedError`__ - raised when a connection attempt is refused by the peer
        * __`ConnectionResetError`__ - raised when a connection is reset by the peer
      * __`FileExistsError`__ - raised when attempting to create an already existing file or directory
      * __`FileNotFoundError`__ - raised when a requested file or directory does not exist
      * __`InterruptedError`__ - raised when a system call is interrupted
      * __`IsADirectoryError`__ - raised when attempting to perform a file operation on a directory
      * __`NotADirectoryError`__ - raised when attempting to perform a directory operation on something other than a directory
      * __`PermissionError`__ - raised when an operation has insufficient access rights
      * __`ProcessLookupError`__ - raised when a referenced process does not exist
      * __`TimeoutError`__ - raised when a system call time-out on the systems level
    * __`ReferenceError`__ - raised when a weak reference proxy is used to access an attribute which has been garbage collected
    * __`RuntimeError`__ - raised when a unknown error is encountered
      * __`NotImplementedError`__ - can raise optionally when an abstract method is not overriden by a derived class 
      * __`RecursionError`__ - raised when max recursion depth is exceeded
    * __`SyntaxError`__ - raised when a syntax error is encountered in an `import`, `exec()`, or `eval()`
      * __`IndentationError`__ - base class for errors relating to incorrect indentation
        * __`TabError`__ - raised when indentation contains inconsistant tabs and spaces 
    * __`SystemError`__ - raised when the system encounters an error in the interpreter
    * __`TypeError`__ - raised when an operation or function is used with an incompatible data type
    * __`ValueError`__ - raised when argument with the right type but incorrect value is used in an operation or function
      * __`UnicodeError`__ - raised when unicode encoding or decoding fails
        * __`UnicodeDecodeError`__ - raised when unicode decoding fails
        * __`UnicodeEncodeError`__ - raised when unicode encoding fails
        * __`UnicodeTranslateError`__ - raised when unicode translating fails
    * __`Warning`__ - base class for all warning categories
      * __`DeprecationWarning`__ - base class for warning relating to deprecated features
      * __`PendingDeprecationWarning`__ - base class for warning relating to features that will soon be deprecated
      * __`RuntimeWarning`__ - base class warning about doubtful runtime behavior
      * __`SyntaxWarning`__ - base class warning about doubtful syntax
      * __`UserWarning`__ - base class for all user-defined warnings
      * __`FutureWarning`__ - base class warning for deprecated features. This warning is aimed at end-user of Python applications
      * __`ImportWarning`__ - base class warning for possible mistakes in importing
      * __`UnicodeWarning`__ - base class warning for unicode related problems
      * __`BytesWarning`__ - base class warning relating to `bytes` and `bytearray`
      * __`ResourceWarning`__ - base class for warning related to incorrect usage of resources

## Handling Exceptions
To handle exceptions we use the `try` statement.
* each `try` statement has 1 or more `except` statements
  * `except` statements name exception types that they handle
  * an exception can name more than one exception type in a tuple
  * if a base exception is named the `except` statment will handle all concrete exception inheriting from that base exception
  * but not specifying any exception type you create a `catch all` exception block that handles all exception types
* a `try` statement can have an `else` clause after all its`except` claues
  * code in the `else` clause runs if no exception occurs
* an optional `finally` statement that is executed whether or not an exception occurs
  * this is usually used for clean-up like closing external resources even if operations on them where unsuccessful
  * if an exception is raised it will be re-raised after the `finally` clause executes
  * the `finally` will run before any `continue`, `break` or `return` statement in the `try` statement
  * if a `return` statement is present in the `finally` clause it will execute instead of a `return` statement in the `try` block

The `try` statement works in the following order:
* the `try` clause is executed
* if no exception is caught the `except` clause/s are omitted
* if an exception occurs the rest of the try clause is skipped
* if the exception type matches one specified after an `except` keyword that `except` clause is executed
  * execution continous after the `try` statement
* if the exception type does not match a specific `except` clause than the exception is passed to any outer `try` statements
  * if the type doesn't match any out `except` clauses than we call this an `unhandled exception` and execution stops showing an `error message`
* the 

``` python
def no_math_in_school():
  try:
    nan = 1 / 0
  except ZeroDivisionError:
    print('You cant divide by zero!')
  else:
    print('This is executed if no exception occurs')
  print('this will execute because the exception is handled')

no_math_in_school()
  # You cant divide by zero!
  # this will execute because the exception is handled

# nested try statements
def divide(num, den):
  try:
    numerator = num
    denominator = den
    try: 
      result = num / den
    except TypeError:
      print('None int or float type used')
    else:
      return result
  except ZeroDivisionError:
    print('The Exception is passed to the outer try clause')

divide(1,0)
  # The Exception is passed to the outer try clause

# more than one exception type
def join_strings(*args):
  try:
    result = ' '.join(*args)
  except (TypeError, ZeroDivisionError):
    print('Get your types right and stop doing crazy math')
  else:
    return result

join_strings('1','2')
  # Get your types right and stop doing crazy math

# base class exception
def i_do_things_with_files(path):
  try:
    f = open(path+'fun', 'r')
  except OSError:
    print('Sorry, your OS could not handle the operation')

i_do_things_with_files('myfile.json')
  # Sorry, your OS could not handle the operation

# catch-all except statement
def hmm_what_went_wrong(*args):
  try:
    print(*argss)
  except:
    print('Something went wrong')

hmm_what_went_wrong()
  # Something went wrong

# finally
def nice_function():
  try:
    raise TypeError
  except TypeError:
    pass
  finally:
    print('Thank you so much for calling me')

nice_function()
  # Thank you so much for calling me

```

## Raising Exception
You can force an exception to occur using the `raise` statement.
* this can be useful when you don't want to handle the exception within your try statement but want to expose the exception for handling elsewhere
* this can also be useful if you want to perform some actions before actually raising the exception - e.g.: logging it
* you can pass a custom message as an argument to the exception object

``` python
raise TypeError('Your just not my type')
  # TypeError: Your just not my type

try:
  nope = 1 + 'one'
except TypeError:
  raise NameError('Tried to trick ya!')
  # Traceback (most recent call last):
  #   File "<stdin>", line 2, in <module>
  # TypeError: unsupported operand type(s) for +: 'int' and 'str'
  # 
  # During handling of the above exception, another exception occurred:
  # 
  # Traceback (most recent call last):
  #   File "<stdin>", line 4, in <module>
  # NameError: Tried to trick ya!
```

## User-Defined Exceptions
You can create your own exception types
* they should be derived from the `Exception` class
* if a module can raise many different user defined exceptions group them under a base exception
* it is considered good practice to end exceptions names with `Error`

``` python 
class Error(Exception):
  """Base Exception Class"""
  pass

class InappropriateNameError(Error):
  """Exception raised for none-ascii variable names"""
  def __init__(self, expression, message):
    self.expression = expression
    self.message = message

class AnnotationMismatchError(Error):
  """Exception raised if function implementation does not follow annotation"""
  def __init__(self, expression, message):
    self.expression = expression
    self.message = message
```

&nbsp;
# Classes
Classes allow encapsulating cohesive functionality and data in a sort of blueprint through which you can create new types of objects. Classes can have:
* `attributes` - for maintaining the classes state
* `methods` - which perform operations on its state

Classes are created during runtime and allow reflection.

## Class Basics
Classes:
* are defined using the `class` keyword
* have their own namespace
* a class is also an object of the type `type`
* a class can have:
  * `class attributes` - attributes bound to the class. These are shared across instances of the class and the class itself
  * `class methods` - functions bound to the class. These are shared across instances of the class and class object itself
* support following operations:
  * `attribute references` - referencing a name in the classes namespace through an instance of that class or the class object itself
  * `instantiation` - creating an instance of the class
* `__init__` - a constructor is a special method that allows customizing the initial state of an instance of the class
  * the `__init__()` method is always invoked upon instantiation
* `data hiding` in Python is not possible
  * it can be achieved by implementing a module written in `C` into a Python program
* each value in Python is an object, hence it has a class which can be referenced through `object.__class__`

Instance Objects:
* are objects which are the result of a class instantiation
* only support `attribute reference`. Attributes can be:
  * `data attributes` - a piece of state bound to an object
  * `instance methods` - a function bound to an object
* `self` has no special meaning for Python, but it is good practice and convention to use it as the name of the first parameter in any method - it will usually be replaced but an instance object

Methods:
* when calling any method on behalf of an instance that instance is passed as the first argument implicitly
* assigning a value to an attribute with a name that already exists in the namespace will override the existing name
  * its a good practice to have a diffeent naming convention for data attributes and method attributes


``` python
# class definition
class Example:
  pass

type(Example)
  # <class 'type'>

class MyClass:
  """this docstring can also be referenced"""
  # adds 'state' to the classes
  state = 'some piece of data'
  def getState():
    return MyClass.state

# attribute reference
print(MyClass.__doc__)
  # this docstring can also be referenced
print(MyClass.state)
  # some piece of data
print(MyClass.getState)
  # <function MyClass.getState at 0x10daeea60>

# instantiation
obj = MyClass()

# class attribute
print(MyClass.state)
  # some piece of data
print(obj.state)
  # some piece of data

# class method
print(MyClass.getState())
  # some piece of data

obj.getState()
  # TypeError: getState() takes 0 positional arguments but 1 was given
  # obj is passed as the first argument implicitly

# constructor and self
class Person:
  """example of a class with a constructor"""
  def __init__(self, first_name, last_name):
    self.first = first_name
    self.last = last_name
  def getName(self):
    return self.first + ' ' + self.last

# instance object
john = Person('john', 'smith')

# data attributes
john.first
  # john
john.last
  # smith

# method
john.getName()
  # 'john smith'

# data attribute names override method attribute names
class Oops:
  name = 'John'
  def name():
    return 'This method overides the name data attribute'

Oops.name
  # <function Oops.name at 0x10db062f0>
```

## Inheritance
`Inheritance` is a common mechanism in OOP that allows passing down methods and state from one class called the `base class` to another class called the `derived class`.
* `attribute references` to an instance of a derived class are resolved by searching for the name in the derived classes namespace and continuing to its base class if the name is not found.
  * this works recursively if the base class is also derived from another base class
* `method overriding` is redefining a method that is available in a base class in a derived class
  * all methods are `virtual` meaning any method in a base class can be overidden
  * an overriding method can call the base class method in its body
* two built-in functions come in handy when working with inheritance:
  * `isinstance(obj, class)` - returns bool indicating if an object is an instance of a class or one of its base classes
  * `issubclass(class, class)` - returns bool indicating if a class is derived from another class
* a derived class can have `multiple base classes`, although this is considered bad practice
  * AVOID THIS AT ALL COST
  * `attribute references` for attributes that are not found in the derived class are searched for in the base classes **left to right**
* derived classes can `override any methods` of its base class or classes

``` python
class Base():
  a = 1
  b = 5
  def __init__(self, data, more_data):
    self.base_data =  data
    self.base_state = more_data
  def base_method():
    print('prints something')
  def print_data(self):
    print(self.base_data, '\n', self.base_state)

# Derived inherits from Base
class Derived(Base):
  b = 50
  # base_method is overriden
  def base_method():
    # calls the Base class method 
    Base.base_method()
    # extends it
    print('extending the base class method')

Derived.base_method()
  # prints something
  # extending the base class method

# attribute reference
print(Derived.a)
  # 1
print(Derived.b)
  # 50
obj = Derived()
  # TypeError: __init__() missing 2 required positional arguments: 'data' and 'more_data'
  # since no constructor is defined in the derived class 
  # it references the constructor in the base class which expects 2 arguments
obj = Derived('some state', 'more state')
obj.print_data()
  #some state
  # more state

# built-in function for inheritance
isinstance(obj, Derived)
  # True
isinstance(obj, Base)
  # True

issubclass(Derived, Base)
  # True
issubclass(Derived, Derived)
  # True
issubclass(Base, Derived)
  # False

# multiple inheritance
class A:
  a = 10

class B:
  a = 100
  b = 500

class C:
  a = 1000
  b = 5000
  c = 9000

class D(A, B, C):
  pass

print(D.a)
  # 10
print(D.b)
  # 500
print(D.c)
  # 9000
```

## Iterators


## Generators

Pros:
* make infinite lists without worrying about memory
* memory-efficient

Cons:
* can only be traversed serially
* once you yield an item it is removed
* cant get the length without yielding all items

### Generator Expression
A generator expression has very similiar syntax to a list comprehension, but it does not produce all the values upfront in favor of initializing them only when they are needed. This can lead to decreased memory cosumption.

```python
gen_iterable = (x**2 for x in range(100))
```

## New Style Classes
Source: [python docs new-style classes](https://www.python.org/doc/newstyle/)

In older Python code you might find Python class definitions that derive from `object`. This is to allow making use of features only available to `new-style classes`.

In Python 3.* `old-style classes` have been removed and `new-style classes` are the default so deriving from `object` has become redundant. 

``` python
# python 2.*
class A(object):
  pass

# python 3.*
class A:
  pass
```

&nbsp;
# Dunders
Or magic methods are built-in methods that start and end with double underscores(dunders).

|Dunder|Decscription|Signature|
|------|------------|---------|
|`__init__`|A constructor|`__init__(self, attr0, attrn)`|
|`__new__`|Builds the `self` object before passing it to `__init__`|`__new__(cls, *args)`|
|`__repr__`|Should return a string that can be evaluated to the constructor call that created the object|`__repr__(self)`|
|`__str__`|Should return a string that describes the object, used implicitly by `print()`|`__str__(self)`|
|`__iter__`|Return an iterable used implicitly when iterating over the class object|`__iter__(self)`|
|`__next__`|How each value is produced when iterating over the class object|`__next__(self)`|
|`__enter__`|Sets up the object for use in a Context Manager|`__enter__(self)`|
|`__exit__`|Defines cleanup tasks once the object is released by the Context Manager|`__exit__(self, exc_type, exc_val, exc_tb)`|
|`__getattr__`|Called when an attribute is read|`__getattr__(self, item)`|
|`__setattr__`|Called when an attribute is mutated or assigned|`__setattr__(self, key, value)`|


&nbsp;
# Package Manager
`pip` is Pythons package manager. You can browse for external packages on there [website](https://pypi.org) or by using the cli - `pip search something`.

&nbsp;
# Virtual Environments

&nbsp;
# Standard Library


## Wildcards


## Command Line Arguments
Source: [pydoc - command line](https://docs.python.org/3.7/using/cmdline.html#envvar-PYTHONPATH)


## Dates and Time


## Compression


## Output Formatting


## Templating


## Binary Data


## Regular Expressions
A pattern that is searched for in strings.

Source: [tutorialspoint](https://www.tutorialspoint.com/python/python_reg_expressions.htm#targetText=A%20regular%20expression%20is%20a,like%20regular%20expressions%20in%20Python.)

### Initialization

``` python

```

### Search and Match

``` python

```

### Replace

``` python

```

### Split

``` python

```

## Functools



&nbsp;
# Internet Access


## Networking


## Internet Data Handling


## Internet Protocols


&nbsp;
# Multimedia


&nbsp;
# OS


&nbsp;
# Testing
Source:
* [realpython](https://realpython.com/python-testing/)
* [unittest - docs](https://docs.python.org/3/library/unittest.html)

Testing in Python can be done natively through the `unittest` framework.

Concepts:
* `test fixture` - preperation for running tests, such as creating databases, starting a server or a process, cleanup
* `test case` - individual unit of testing
* `test suite` - a collection of tests that should be run together
* `test runner` - a utility that runs tests and presents the results to a user


## Standard Flow
1. define a class deriving from `unittest.TestCase`
1. fill it with function starting with `test_`
1. run the tests with `unittest.main()` at the EOF

```python
import unittest
from mymodule import somefunction

class TestMyModule(unittest.TestCase):
  def setUp()


```



&nbsp;
# Typing
Source:
* [typing - docs](https://docs.python.org/3/library/typing.html)


&nbsp;
# Performance Measurement

## Memory Consumption
``` python
from memory_profiler import profile, memory_usage

arg1 = 5000
arg2 = 10000
snapshot_interval = 0.2 # seconds

list_mem_usage = memory_usage((some_func,(arg1, arg2)), interval=snapshot_interval)
gen_mem_usage = memory_usage((another_func,(arg1, arg2)), interval=snapshot_interval)
```

## Execution Timing Decorator
A simple decorator function for timeing a functions runtime.

```python
import time

def timeit(method):
    def timed(*args, **kw):
        ts = time.time()
        result = method(*args, **kw)
        te = time.time()
        print(
            '{0}({2}) :{1:.2f} ms'.
            format(
                method.__name__,
                (te - ts) * 1000,
                str(args)[1:-1]
            )
        )
        return result
    return timed

@timeit
def some_func(y, x):
  # does something

some_func(20, 100)
  # func(20, 100) :0.22 ms

```

&nbsp;
# Quality Control


&nbsp;
# Concurrency and Parallelism
Source: 
* [howtodoinjava.com](https://howtodoinjava.com/java/multi-threading/concurrency-vs-parallelism/#targetText=Concurrency%20is%20when%20two%20tasks,on%20a%20multi%2Dcore%20processor.&targetText=An%20application%20can%20be%20parallel,core%20CPU%20at%20same%20time.)
* [stackoverflow](https://stackoverflow.com/questions/3044580/multiprocessing-vs-threading-python#targetText=The%20threading%20module%20uses%20threads,objects%20between%20processes%20with%20multiprocessing.&targetText=Spawning%20processes%20is%20a%20bit%20slower%20than%20spawning%20threads.)

`Concurrency` is the execution of multiple tasks in overlapping time periods. This is usually achieved through an operating system feature called *CPU time-slicing* where a part of a task runs and is then put into a waiting state while a part of another concurrent task is run. The CPU can prioritize tasks to provide them with more CPU time.
> Concurrency is about dealing with a lot of things at once

**PROS**:
* *lightweight* - low memory footprint
* shareing state across context is easier do to shared memory
* great choice for asynchronous responsive UI 
* C extensions that release the GIL can run in parallelism
* great for I/O bound applications

**CONS**:
* limited by the GIL
* cannot be interrupted or killed
* manual use of synchronization primitives must be implemented if not following a command queue/message pump model(`Queue` module).
* possible race conditions
* code can be hard to understand

`Parallelism` is the execution of multiple tasks or several parts of a single task(sub-tasks) at the same time. This utilizes the multi-core infrastructure of a CPU, by assigning each task its own core. This can only be achieved if the hardware has multiple processing units.
> Parallelism is about doing a lot of things at once

**PROS**:
* seperate memory space
* straightforward code
* optimal hardware usage
* avoids [GIL](#CPython) limitations
* synchronizing primitives is not needed if there is no shared memory across processes
* child processes can be interrupted or killed
* must for CPU-bound processing

**CONS**:
* in case of shared memory IPC needs to be implemented which results in more overhead
* *heavyweight* - larger memory footprint


## Threading
Source: [docs - threading](https://docs.python.org/3/library/threading.html#targetText=The%20func%20will%20be%20passed,run()%20method%20is%20called.&targetText=Set%20a%20profile%20function%20for,run()%20method%20is%20called.)

Threading in Python is achieved through the `threading` module.
``` python
import threading


```

## Mulitprocessing
Source: 
* [docs - multiprocessing](https://docs.python.org/3/library/multiprocessing.html)
* [machinelearningplus](https://www.machinelearningplus.com/python/parallel-processing-python/)
The `multiprocessing` module is the standard for parallelism in Python.

The maximum number of parallel processes you can run is determined by the number of processors in the machine. To assess the max number use multiproccesing `cpu_count()`

```python
import multiprocessing as mp

print("Number of processors: ", mp.cpu_count())
```

&nbsp;

Parallel processing can be done synchronously or asynchronously.
* `synchronously` - processes run sequentially which means execution is halted until they finish
* `asynchronously` - processes run independently of other processes. Executon of the app is not halted.

In `multiprocessing` parallelism can be achieved through:
* `Pool` class which enables:
  * synchronous execution through: 
    * `Pool.map(func, iter)` - takes iterable and runs function on each element
    * `Pool.starmap(func, iter)` - takes an iterable in which each element is also an iterable
    * `Pool.apply(func, arg)` - take function and runs with arguments
  * asynchronous execution through 
    * `Pool.map_async(func, iter, callback)`
    * `Pool.starmap_async(func, iter, callback)`
    * `Pool.apply_async(func, arg, callback)`
* `Process` class

Asynchronous functions work like synchronous but do not guarentee order of operations and needs a callback function that determines how computed results are stored.

``` python
import multiprocessing as mp
import numpy as np
from time import time

# Prepare data
np.random.RandomState(100)
arr = np.random.randint(0, 10, size=[200000, 5])
data = arr.tolist()
data[:5]

# Prepare function
def howmany_within_range(row, minimum, maximum):
    """Returns how many numbers lie within `maximum` and `minimum` in a given `row`"""
    count = 0
    for n in row:
        if minimum <= n <= maximum:
            count = count + 1
    return count

# Pool.apply()

pool = mp.Pool(mp.cpu_count())

results = [pool.apply(howmany_within_range, args=(row, 4, 8)) for row in data]

pool.close()

# Pool.map() - if prepared function only took one mandatory argument
pool = mp.Pool(mp.cpu_count())

results = pool.map(howmany_within_range_rowonly, [row for row in data])

pool.close()

# Pool.starmap() - would not require changing prepared function
pool = mp.Pool(mp.cpu_count())

results = pool.starmap(howmany_within_range, [(row, 4, 8) for row in data])

pool.close()

# Pool.async_apply()
results = []

def collect_result(result):
    global results
    results.append(result)

```

&nbsp;
Interested in having a progress bar displayed for each process? Use [tqdm](https://github.com/tqdm/tqdm)

``` python
from multiprocessing import Pool
import tqdm

pool = Pool(processes=8)
for _ in tqdm.tqdm(pool.imap_unordered(do_work, tasks), total=len(tasks)):
    pass
```

&nbsp;
# Logging


&nbsp;
# Garbage Collection
Source: 
* [docs - garbage collection](https://docs.python.org/3/library/gc.html)
* [arctrix.com](http://arctrix.com/nas/python/gc/)

&nbsp;
# Development Tools

&nbsp;
# Debugging and Profiling

&nbsp;
# Task Runner
A great task runner for python is `Makefile` native for unix system. It is easy to use and configure and comes straight out of the box with most unix and unix-like operating systems.

Source: 
* [short guide](https://opensource.com/article/18/8/what-how-makefile)
* [detailed guide](tutorialspoint.com/makefile/index.htm)
* [skysilk](https://www.skysilk.com/blog/2019/automating-development-workflow-python/)

Using a makefiles simplifies common tasks and enhances the developers workflow. With a single command you can:
* set up a virtaulenv based on a `requirements.txt` and `dev-requirements.txt` file
* autoformat you code with [autopep8](https://github.com/hhatto/autopep8) or use [coala](https://coala.io/#/home?lang=Python) for interactive linting and fixing
* lint your code with [pylint](https://pypi.org/project/pylint_runner/)
* run [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to lint and [test](https://docs.python.org/3/library/unittest.html) before comitting
* measure [code coverage](https://coverage.readthedocs.io/en/v4.5.x/)
* compile(ex. when using Cython), load config files and run your application with a single command
* perform clean up tasks
* delete old and generate new docs on each run

```
MIN_COVERAGE=75

install:
  pip install -r requirements.txt
  pip install -r dev-requirements.txt
  pip install codecov

run:
  python3 run.py config.json

prepush:
  pytest --cov=autodeploy --cov-report term-missing tests/ || exit 1
  coverage report --fail-under=$MIN_COVERAGE || exit 1

qc:
  autopep8 -r -diff .
  pylint_runner

test:
  py.test --verbose --color=yes $(TEST_PATH)
```

A nice convention based on Chris Bednarski's [article](https://cbednarski.com/articles/makefiles-for-everyone/) is:

```
all: init test docs package
init:
    # - Install your dependencies via gem, maven, etc.
    # - Download sql dumps or copy configuration templates
    #   that a dev needs to get up and running.
    # - Install git hooks (more below)
test:
    # Run unit tests, code coverage, and linters
docs:
    # Generate your API documentation (you do have some, don't you?)
package:
    # Build a release tarball or jar or executable
dev:
    # Start up a development server or process e.g. `vagrant up` or `node server.js`
    # Bonus: open that page in the user's browser automatically
install:
    # If your project builds an executable, place it in the `$PATH`.
    # E.g. copy or symlink it into `/usr/local/bin`
deploy:
    # If you have a simple deployment mechanism, like `rsync` or `s3cmd`, let
    # the Makefile take care of it.
.PHONY: test docs
```

And things to keep in mind:
* script names are casesensitive
* makefile orginially was made to work on files so if a script name colides with a filename it might result in surprising results: use `.PHONY: name` to specify names that shouldnt be treated as files
* bash is allowed in makefiles
* make commands can include other make commands
* install githooks for pre-commit checks

A popular alternative is [invoke](https://github.com/pyinvoke/invoke)

&nbsp;
# Optimization
* [numba](https://numba.pydata.org/numba-doc/dev/user/5minguide.html)
* [hackernoon](https://hackernoon.com/are-your-python-programs-running-slow-heres-how-you-can-make-them-7x-faster-3d6758cd3305)
* [memory management](https://realpython.com/python-memory-management/)


&nbsp;
# Snippets
Source: 
* [softwarejourneyman](https://softwarejourneyman.com/python-function-pipelines.html)

## Pipeline
A pipeline for pipeing data through a set of functions.

```python
from typing import TypeVar, Callable, Sequence

T = TypeVar('T')

def pipeline(
        value: T,
        function_pipeline: Sequence[Callable[[T], T]],
) -> T:
    '''A generic Unix-like pipeline

    :param value: the value you want to pass through a pipeline
    :param function_pipeline: an ordered list of functions that
        comprise your pipeline
    '''
    return reduce(lambda v, f: f(v), function_pipeline, value)

# Random functions
def add(n):
  return n + 10

def multiply(n):
  return n * 5

def exponent(n):
  return n**2

# creating the pipeline

numpipe = pipeline(
    value=10,
    function_pipeline=(
        add,
        multiply,
        exponent
    )
)

# currying
def num_pipeline(function_pipeline):
  def composition(value):
    return reduce(lambda v, f: f(v), function_pipeline, value)
  return composition

numeric_run = num_pipeline((add, multiply, exponent))
data_pipeline = num_pipeline((add, multiply, exponent))
```

&nbsp;
# GUI
Use [PyInstaller](https://www.pyinstaller.org/) to make a GUI application an executable.

[PySimpleGUI](https://pysimplegui.readthedocs.io/en/latest/) is a simple library that unifies `tkinter`, `Qt` and `WxPython` under a simplified API for fast python GUI development.

[GUIzero](https://lawsie.github.io/guizero/) is a very minimalistic GUI library that is easy to setup and run but with limited capabilities. Great for teaching

[Gooey](https://github.com/chriskiehl/Gooey) allows turning almost any Python command into a simple GUI application with just a decorator call! Is still very immature but definitely worth keeping an eye on. 

&nbsp;
# Python C API
Source: [official docs](https://docs.python.org/3/c-api/index.html)

&nbsp;
# Glossary
Source: [python glossary](https://docs.python.org/3/glossary.html#term-decorator)
