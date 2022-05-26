# Python Language Reference

Source:
* [python docs](https://docs.python.org/3/reference/index.html#reference-index)

#### Table of contents

* [Introduction](#introduction)
* [Python Interpreter](#python-interpreter)
    * [CLI Arguments](#cli-arguments)
    * [Encoding](#encoding)
    * [CPython](#cpython)
    * [Alternative Python Installation](#alternative-python-installation)
* [Naming Convention](#Naming-Convention)
* [Basic Mechanics](#Basic-Mechanics)
    * [Variable Initialization](#variable-initialization)
    * [Typing](#typing)
    * [Mutability](#mutability)
    * [Scopes and Namespaces](#scopes-and-namespaces)
* [Data Types](#Data-Types)
    * [Integers](#Integers)
    * [Floating Point Numbers](#Floating-Point-Numbers)
    * [Boolean](#Boolean)
    * [String](#String)
        * [Valid Strings](#valid-strings)
        * [Printing](#printing)
        * [Formatted String Literals](#formatted-string-literals)
        * [Indexing and Slicing](#indexing-and-slicing)
        * [String Properties](#string-properties)
        * [String Methods](#string-methods)
        * [Escape Sequences](#escape-sequences)
        * [Unicode](#unicode)
        * [Lexicographical Comparison](#lexicographical-comparison)
    * [None](#none)
* [Operators](#Operators)
    * [Arithmetic](#arithmetic)
    * [Precedence](#Precedence)
    * [Unary](#unary)
    * [Comparison](#comparison)
    * [Logical](#logical)
    * [Bitwise](#bitwise)
    * [Ternary](#Ternary)
    * [Membership](#Membership)




&nbsp;
# Introduction
Python is an object oriented, strongly and dynamically typed, general purpose programming language known for its clean and concise syntax.

&nbsp;
# Python Interpreter
Python is preinstalled on many unix and unix-like operating systems.
``` shell
# Path on most linux distros
/usr/local/bin

# Path on Mac OS X
/System/Library/Frameworks/Python.framework 

# Path on Mac OS X from third-party install
/Library/Frameworks/Python.framework
```

You can open the interpreter with the `python` command and close it with the `exit()` function.

Python version 3.x is not fully compatible with version 2.x which causes some people to install both versions. Binding the `python3` command to execute v 3.x code is a good option.

To execute a python script from the command-line just use `python somescript.py`

## CLI Arguments
You can pass arguments to a python script from the command-line and use them within the python script through the `sys` library.

``` python
# hash symbol denotes a comment

# below is an import statement
import sys

# prints the name of the script
print(sys.argv[0])

# prints the first argument after the script
# will throw an error if no argument is passed
print(sys.argv[1])

# python this_script.py test
#    ...would print...
# > this_script.py
# > test
```

## Encoding
Python source code is treated as UTF-8 while its standard libraries only use ASCII characters for portability. A different encoding can be set through a special comment line.

``` python
# -*- coding: UTF-16 -*-
```
Or in case you want to make it directly executable on certain linux distributions
``` python
#!/usr/bin/env python3.7
# -*- coding: UTF-16 -*-
```

## CPython
Written in C, `CPython` is the default and most popular Python implementation. It is both an interpreter and and compiler - it compiles Python code to bytecode before interpreting it. 

Makes use of `GIL` or `Global Interpreter Lock` which limits a single python process to executing only one thread at any given moment. 

Alternatives:
* *Cython* - a superset of Python that is statically typed and compiled into C code
* *Jython* - written in Java, makes use of the JVM, has no GIL implemented
* *PyPy* - translates Python code into C, has a built in JIT Compiler, also makes use of a GIL

For more information on GIL: [python wiki](https://wiki.python.org/moin/GlobalInterpreterLock)

## Alternative Python Installation
Steps to install python3.7 and configure it as the default python3 interpreter.

1. Install the python3.7 package using apt-get
`sudo apt-get install python3.7`
`apt install python3.7`

2. Add python3.6 & python3.7 to update-alternatives
`sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1`
`sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.7 2`

3. Update python3 to point to python3.7
`sudo update-alternatives --config python3`
Enter 2 for python3.7

4. Test the version of python
python3 -V
Python 3.7.1

&nbsp;
# Naming Convention
Variable names can't start with numbers. Words should be separated with `_`.

The following symbols are disallowed in variable names:\
`:`, `"`, `'`, `,` , `<` , `>`, `/` , `?`, `|`, `\`, `(`, `)`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `~`, `-`, `+`

Local variable names should be lower case and global variable names should be all caps.

The following are keywords in python and can not be used as identifiers:

||||||
--------|-----|--------|-----|-----|
and     |as   |assert  |break|class|
continue|def  |del     |elif |else |
except  |False|finally |for  |from |
global  |if   |import  |in   |is   |
lambda  |None |nonlocal|not  |or   |
pass    |raise|return  |True |try  |
with    |while|yield

&nbsp;
# Basic Mechanics

## Variable Initialization
Each declared variable needs to be initialized.

`Multiple assignment` allows assigning multiple values to multiple variables within one expression.

```python
# initialized
a = 5

b
# NameError: name 'b' is not defined

a,b = 1,5
# a == 1; b == 5
```

## Typing
Python is:
* `dynamically typed` - meaning variables are not tied to a data type. Only their runtime object is assigned a type. 
* `strongly typed` - type coercion needs to be explicit

```python
# dynamically typed
x = 5
x = 'string'
x = True

# strongly typed
a = 'string'
b = 5

a + b
# TypeError: can only concatenate str (not "int") to str
```

## Mutability
This is regarding built-in types. Custom classes are mutable unless attribute setting and deletion is overridden to throw an exception.

### Mutable Data Types
`lists`, `set` and `dict` are all mutable data types.

Mutable data types are not hashable

```python
# id() returns the objects id in memory
y = [1, 2, 3]
id(y)   # 4400832328
y[2] = 4
id(y)   # 4400832328

hash(y)
  # TypeError: unhashable type: 'list'
```

### Immutable Data Types
All primitive variable types in Python are immutable. These are `string`, `boolean`, `float`, `integer`.

Immutable data types are hashable.

The following reference data types are also immutable: `tuple`, `frozenset`

```python
y = (1,2)
y[0] = 3
# TypeError: 'tuple' object does not support item assignment

hash(y)
  # 3713081631934410656
```

## Scopes and Namespaces
A `namespace` is a dictionary containing mappings of names(identifiers) to objects(everything is an object). A namespace can be tied to a module, an object, a function or the interpreter as is with built-in functions and objects. You can check what names are available using the `dir()` function.

``` python
import builtins

a = 1
b = 2
name = 'some name'

# available names in current namespace excluding built-ins
dir()
  # [
  #   '__annotations__', '__builtins__', '__doc__', 
  #   '__loader__', '__name__', '__package__', '__spec__',
  #   'a', 'b', 'builtins', 'name'
  # ]

def func():
  only_available_in_func = 5
  # shows the functions namespace
  print(dir())
    # ['only_available_in_func']

# available built-in names
dir(builtins)
  # [
  #   'ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException',
  #   'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 
  #   'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 
  #   'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 
  #   'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 
  #   'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 
  #   'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 
  #   'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 
  #   'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 
  #   'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 
  #   'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 
  #   'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 
  #   'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 
  #   'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 
  #   'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 
  #   'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 
  #   'UserWarning', 'ValueError', 'Warning', 'ZeroDivisionError', '_', '__build_class__', 
  #   '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', 
  #   '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 
  #   'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 
  #   'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 
  #   'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 
  #   'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 
  #   'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 
  #   'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 
  #   'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 
  #   'sum', 'super', 'tuple', 'type', 'vars', 'zip'
  # ]
```

A `scope` is a region of a program in which elements of a namespace can be referenced. Scopes are determined statically. Namespaces are tied to scopes - as mentioned earlier this could be a function, a function enclosing that function, a class, module or the interpreters scope through which all built-ins are made available.

Scopes are searched in the following order when resolving a reference:
* `innermost scope` which contains the local names
* `enclosing scopes` which contain the names of any number of enclosing functions. The closest enclosing scope is searched first up until the farthest enclosing scope 
* `next-to-last scope` containing the modules global names
* `outermost scope` contains all built-in names

``` python
# globally the following scopes are accessible:
#   -the modules global scope
#   -the outermost scope with all built-in names
g = 'global g'
x = 'global x'
y = 'global y'
z = 'global z'

def outer_func():
  # this function has access to the following scopes:
  #   -this functional local scope
  #   -the modules global scope
  #   -the outermost scope with all built-in names
  x = 'outer x'
  y = 'outer y'
  z = 'outer z'
  def mid_func():
    # this function has access to the following scopes:
    #   -this functional local scope
    #   -the outer_func local scope
    #   -the modules global scope
    #   -the outermost scope with all built-in names
    y = 'mid y'
    z = 'mid z'
    def inner_func():
        # this function has access to the following scopes:
        #   -this functional local scope
        #   -the mid_func local scope
        #   -the outer_func local scope
        #   -the modules global scope
        #   -the outermost scope with all built-in names
      z = 'inner z'
      print('Resolved values in inner function scope:')
      print('g:', g)
      print('x:', x)
      print('y:', x)
      print('z:', z)
    
    return inner_func
  return mid_func

outer_func()()()
  # Resolved values in inner function scope:
  # g: global g
  # x: outer x
  # y: outer x
  # z: inner z
```

Variables in an outer scope cannot be reassigned a value in the current scope. A new local variable will be created when an attempt is made. You can change this behavior with the following:
* `global` keyword - when used in a function allows modifying the value of a variable in the modules namespace
* `nonlocal` keyword - when used in a funtion allows modifying the value of a variable in an enclosing non-global scope

``` python
mutable = [1]
g = 5

# global
def no_global():
  # mutation is possible
  mutable.append(2)
  # this will create a new local variable with the value 15
  
  g = 5 + 10
  print(g)
    # 15 

def with_global():
  global g
  g = g + 15
  print(g)

with_global()
  # 20
print(g)
  # 20

def only_global_scope():
  g = 5
  def inner():
    global g
    print(g)
      # 20
  inner()

# nonlocal
def nonlocal_example():
  g = 5
  def inner():
    nonlocal g
    g = 5 * 100
    print(g)
      # 500
  inner()
  print(g)
    # 500
```


&nbsp;
# Data Types
Every value in Python is an object. All data types and data structures are associated with a specific class.

## Integers
Whole numbers. Integers in Python 3 are unbound meaning they have no min or max size. 

They are instances of the `int` class
``` python
0
1
2000

type(1)
# <class 'int'>
```

&nbsp;
## Floating Point Numbers
Decimal point numbers.

They are instances of the `float` class
``` python
1.0
2.18

type(1.0)
# <class 'float'>
```

&nbsp;
## Boolean
Logical values.

They are instances of the `bool` class

In python the following are `Falsy` values:
* `0`
* `0.0`
* an sequence with a zero length

``` python
True
False

type(False)
# <class 'bool'>

bool(0)       # False
bool(0.0)     # False
bool('')      # False
bool([])      # False
bool(())      # False
bool({})      # False

bool(1)       # True
bool(1.0)     # True
bool('a')     # True
bool([0])     # True
bool((1))     # True
bool({'a':1}) # True
```

&nbsp;
## String
Sequence of 0 or more characters. String are a [sequence](#sequence) data type.

They are instances of the `str` class

### Valid Strings
``` python
'single quotes'
"double quotes"
"quote's in strings"
'or quote\'s using an escape sequence'
'''
you can use a three quotes for very long strings
to make it multiline.
'''
print('''\
Use the \\ symbol to prevent
automatically including an end of line
''')

type('test')
# <class 'str'>
```

### Printing
You can print a string through the `print()` function. Seperate arguments using a comma. 

A newline is printed at the end by default. To avoid this use the `end=''` argument.

Use the `repr()` function to print the raw value of a string.

``` python
print('I am', 29, 'years old and', 1.87, 'm tall')
  # I am 29 years old and 1.87 m tall

print('first line', end=',')
print('second line')
  # first line, second line

# repr()
str_with_escape = '\t hello \nyou'
print(str_with_escape)
  # 	 hello
  # you
print(repr(str_with_escape))
  # '\t hello \nyou'
```

### Formatted String Literals
Directly embed variables in braces within a string literal through.

Introduced in Python 3.6.
``` python
var1 = 'Hi'
var2 = 'There'
var3 = 123

print(f'{var1} {var2}! Here\'s a number {str(var3)}')
                                     # 'Hi There! Here's a number 123
```

### Indexing and Slicing
Strings are array-like constructs meaning they have a length and indexed elements. 

To reference a elements from the end of the string use negative indexes with `-1` being the last character in the String.

Strings can be sliced using the following syntax `someString[start:stop:step]`:
* __start__ - index where slice starts
* __stop__ - index where slice stops exluding the element at that index
* __step__ - direction and amount by which the index changes from `start` to `stop`

Slicing handles IndexErrors gracefully, meaning they wont interrupt execution if an out of bound index is passed.

``` python
len('onomatopoeia')                  # 12

print('abcdef'[1])                   # b
print('abcdef'[4])                   # e
print('abcdef'[-2])                  # e
print('12345678'[3:])                # 45678
print('12345678'[3:5])               # 45
print('12345678'[::2])               # 1357
print('12345678'[::-1])              # 87654321
print('12345678'[4:1:-2])            # 53

print('abcdef'[10])
# IndexError: string index out of range

print('abcdef'[:100])
# abcdef
```

### String Properties
Strings are immutable. This means you can't directly modify elements and changing the string(like through concatenation) returns a new string.

Concatenation can be done in various ways.
* `+` - concatenate a string to another string a single time
* `*` - concatenate a string to another string multiple times
* string literals side by side are automatically concatenated

``` python
'1234'.[1] = '5'                     # this throws an error

print('Hello' + ' ' + 'World')       # Hello World
print('A' * 5 + '!')                 # AAAAA!

'hey' ' you'                         # hey you
```

### String Methods
Keep in mind that strings are immutable, so all of the below methods return a new String based on the referenced string.

More methods: [String Methods](https://docs.python.org/3.7/library/stdtypes.html#string-methods)

* `string.upper()` - returns a new string with all upper case letters.
* `string.lower()` - returns a new string with all lower case letters.
* `string.format(arg0[, ... , argN])` - replaces placeholders `{}` within the string with values passed as arguments. Arguments are indexed from 0 to n and these indexes can be used within the placeholder `{3}`. Arguments can also be stored in variables which can be referenced in the placeholder.
* `string.split(delim)` - divides the string according to a delimiter and stores each word in a list. The default delimiter is whitespace `' '`.

``` python
string = 'lower case letters'

string = string.upper()              # 'LOWER CASE LETTERS'
string = string.lower()              # 'lower case letters'

interpolation = 'This {} string {}'
counting = '{2} {1} {0} Go!'
mic_test = 'Mic test {a} {b} {a} {b}'
float_format = 'Formating floats {num: 1.4f}'

interpolation.format('is', 'interpolation')
  # 'This is string interpolation'

counting.format(str(1), str(2), str(3))
  # '3 2 1 Go!'

mic_test.format(a = 'one', b = 'two')
  # 'Mic test one two one two'

float_format.format(num = 0.1234567)
  # 'Formating floats  0.1235'
  
string.split()
  # ['lower', 'case', 'letters']

string.split('e')
  # ['low', 'r cas', ' l', 'tt', 'rs']
```

### Escape Sequences
A sequence of characters that begins with an escape character and has a different meaning then its literal representation.

You can print a raw string without escaping special characters using the `r` prefix.


``` python
'\ - escape character'               # " - escape character"
'\\ - backslash'                     # "\ - backslash"
'\' - single quote'                  # "' - single quote"
'\" - double quote'                  # "" - double quote"
'\n - new line'                      # "
                                     #  - new line"
'\r - carriage return'               # "
                                     #  - carriage return"
' \b - backspace'                    # " - backspace"
'\v - vertical tab'                  # " - vertical tab"
'\f - form feed'                     # " - form feed"
'\t - tab'                           # "	 - tab"
'\xFF - hexadecimal escape'          # "ÿ - hexadecimal escape"

print(r'C:\this\a\path')             # C:\this\a\path
```

### Unicode
When using Unicode in python keep in mind that by default Python scripts are UTF-8 encoded.
``` python
'\xa9'                               # "©"
'\xaa'                               # "ª"
'\u0061'                             # "a"
'\u02da'                             # "˚"
'\u00e5'                             # "å"

# These would only work if encoding was changed to UTF-16
'\uD83D\uDC98'                       # "💘"
'\ud83c\udfcb'                       # "🏋"
```

### Lexicographical Comparison
When comparing two strings with a [comparison operator](#comparison) the ASCII value of each character in both strings is compared starting from those at index 0.

If at any point the ASCII values are not equal the result is returned and the remaining characters are not compared.

``` python
'baa' > 'azzzzz'                     # true 
'12123123123' < 'a'                  # true
'8999999' <= '9'                     # true
'Hello ' == 'Hello'                  # false
'anotcompared' != 'znotcompared'     # true
'a' === '\u0061'                     # true
'hi' !== '\u0068\u0069'              # false
```

&nbsp;
## None
Default return value.

They are instances of the `NoneType` class
``` python
None

type(None)
# <class 'NoneType'>
```

&nbsp;
# Operators

## Arithmetic
Arithmetic operators take numeric operands and return a single numeric value
* `/` - Division always returns a `float`
* `//` - Floor division always returns an `int`

``` python
print(10 + 5)                        # 15  - addition operator
print(10 - 5)                        # 5   - subtraction operator
print(10 / 4)                        # 2.5 - division operator
print(10 // 4)                       # 2   - floor division operator
print(10 * 5)                        # 50  - multiplication operator
print(10 % 6)                        # 4   - remainder operator
print(10 ** 2)                       # 100 - exponentation operator
```

&nbsp;
## Precedence
Arithmetic operations follow the PEMDAS rule, which extends to - Paranthesis, Exponents, Multiplication, Division, Addition, Subtraction. Paranthesis being of highest precedence and subtraction of lowest.

``` python
print((2 + 2) * 2)                   # 8  - paranthesis precedence
print(2 * 2 + 2)                     # 6  - multiplication precedence
print(3 + 3 ** 2)                    # 12 - exponent precedence
```

&nbsp;
## Unary
Take a single operand.

`+` leaves numeric operand unchanged and throws exception if operand is not numeric.

`-` negates a numeric operand and throws exception if operand is not numeric.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number. More on [bitwise operators](#Bitwise).

``` python
print(+5)                            # 5
print(-5)                            # -5
print(~ 10)                          # -11
print(~ -1)                          # 0
```

&nbsp;
## Comparison
Compare operands and returns a boolean value.

The identity operator `is` and nonidentity operator `is not` check if operands refer to the same object.
``` python
print(5 < 10)                        # True  - less than operator
print(5 > 10)                        # False - greater than oprator
print(5 <= 5)                        # True  - less than or equal operator
print(5 >= 10)                       # False - greater than or equal operator
print(5 == '5')                      # True  - equality operator
print(1 != True)                     # False - inequality operator
print('string' is 'string')          # True  - identity operator
print([1, 2] is [1, 2])              # False - identity operator
print(1 is not int('1'))             # False - nonidentity operator
```

&nbsp;
## Logical
Compares boolean values.

`not` logical NOT operator.
`and` logical AND operator.
`or` logical OR operator.

``` python
print(not True)                      # False
print(True and False)                # False
print(True or False)                 # True
```

&nbsp;
## Bitwise
Perform operations on numbers as if they were a sequence of bits and returns a base 10 number. 

Only work with integer values.
* `~` bitwise NOT operator. Performs the NOT operator on each bit of a number.
* `&` performs AND operation on each pair of bits in the operands.
* `|` performs OR operation on each pair of bits in the operands.
* `^` performs XOR operation on each pair of bits in the operands.
* `<<` the __left shift operator__ shifts the bits in the first operand to the left _x_ times, where _x_ is the value of the second operand. New bits shifted in from the right are of value _0_.
* `>>` the __right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the sequence are discarded. New bits shifted in from the left are copies of the previous left most bit.

``` python
print(~ -2)                          # 1
print(5 & 0)                         # 0
print(5 & -1)                        # 5
print(5 & 3)                         # 1
print(5 | 0)                         # 5
print(5 | -1)                        # -1
print(5 | 3)                         # 7
print(5 ^ 0)                         # 5
print(5 ^ -1)                        # -6
print(5 ^ 3)                         # 6
print(6 << 2)                        # 24
print(6 >> 2)                        # 1
print(-6 >> 2)                       # -2
```

&nbsp;
## Ternary
Also called the conditional operator takes three arguments. It returns one of two values based on a boolean type condition.

__syntax__: `a if condition else b`

``` python
x = 5;
y = 10;
print('greater' if x > y else 'lesser') # lesser
```

&nbsp;
## Assignment
Assigns a value to its left operand.

This includes the following operators:
* `=`    assignment
* `+=`   addition assignment
* `-=`   subtraction assignment
* `*=`   multiplication assignment
* `/=`   division assignment
* `//=`  floor division assignment
* `%=`   remainder assignment
* `**=`  exponential assignment
* `&=`   AND assignment
* `|=`   OR assignment
* `^=`   XOR assignment
* `<<=`  left shift assignment
* `>>=`  right shift assignment

``` python
x = 5                                # x == 5
x += 3                               # x == 8
x -= 3                               # x == 5
x *= 3                               # x == 15
x /= 3                               # x == 5
x //= 2                              # x == 2
x %= 3                               # x == 2
x **= 1                              # x == 2
x <<= 3                              # x == 16
x >>= 1                              # x == 8
x &= 5                               # x == 0
x |= 9                               # x == 9
x ^= 10                              # x == 3
```

&nbsp;
## Membership
* `in` determines whether variables, value or key exists in a collection
* `not in` determines whether variables, value or key does not exist in a collection

``` python
x = 'A string';
y = {1: 'one', 2: 'two'}
print('String' in x)                 # False
print('A' in x)                      # True
print('string' not in x)             # False
print('one' in y)                    # False
print(2 in y)                        # True
```