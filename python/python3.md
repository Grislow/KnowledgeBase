Python 3 reference.

Source:
* [quora](https://www.quora.com/What-are-some-best-Python-references)
* [python docs](https://docs.python.org/3.7/tutorial/index.html)

#### Table of contents

* [Conceptual](#conceptual)
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
* [Operators](#Operators)
    * [Arithmetic operators](#arithmetic-operators)
    * [Operator precedence](#operator-precedence)
    * [Unary operators](#unary-operators)
    * [Comparison operators](#comparison-operators)
    * [Logical operators](#logical-operators)
    * [Ternary operator](#ternary-operator)
    * [Bitwise operators](#bitwise-operators)
    * [Assignment operators](#assignment-operators)
    * [Membership operators](#membership-operators)
* [Statements](#statements-1)
    * [Control Flow](#control-flow)
		* [#if...elif...else](#if...elif...else)
		* [try...catch...finally](#try...catch...finally)
		* [break](#break)
		* [continue](#continue)
    * [Iteration](#iteration)
	    * [while](#while)
	    * [do...while](#do...while)
	    * [for](#for)
	    * [for...in](#for...in)
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
* [Lists](#lists)
	* [List Initialization](#list-initialization)
	* [List Indexes](#list-indexes)
    * [List Properties](#list-properties)
	* [List Methods](#list-methods)
	* [List type coercion](#list-type-coercion)
* [Functions](#Functions)
* [Objects](#Objects)
* [Multithreading](#multithreading)


* [Python Interpreter](#Python-interpreter)










&nbsp;
## Conceptual

### Data Types

#### Integers
Whole numbers. Integers in Python 3 are unbound meaning they have no min or max size.
``` python
0
1
2000
```

#### Floating Point Numbers
Decimal point numbers.
``` python
1.0
2.18
```

#### Boolean
Logical values.
``` python
True
False
```

#### String
Sequence of 0 or more characters.
``` python
'A single quote string'
"A double quote string"
```

#### List
Indexed collection of 0 or more objects.
``` python
[10, 0.12312, True, 'string']
```

#### Dictionary
Unordered key:value pairs.
``` python
{"key":"value", "1":"one", "name":"Greg"}
```

#### Tuple
Immutable indexed collection of objects.
``` python
(20, "some string", True)
```

#### Set
Unordered collection of unique objects.
``` python
{1, 2, 3, "a"}
```

#### None
Default return value.
``` python
None
```

### Naming Convention
Names can't start with numbers. Words should be seperated with `_`.

The following symbols are disallowed:\
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

### Dynamically Typed
A variables type is determined during run time.
``` python
a_variable = 'Hi'
a_variable = False
a_variable = 10
```

### Mutability
This is regarding built-in types. Custom classes are mutable unless attribute setting and deletion is overriden to throw an exception.

#### Mutable Variable Types
`lists`, `set` and `dict` are all mutable data types.

#### Immutable Variable Types
All primitive variable types in Python are immutable. These are `string`, `boolean`, `float`, `integer`.

The following reference data types are also immutable: `tuple`, `frozenset`


&nbsp;
## Operators

### Arithmetic operators
Take numeric operands and return a single numeric value.
``` python
print(10 + 5)                        # 15  - addition operator
print(10 - 5)                        # 5   - subtraction operator
print(10 / 4)                        # 2.5 - division operator
print(10 // 4)                       # 2   - floor division operator
print(10 * 5)                        # 50  - multiplication operator
print(10 % 6)                        # 4   - remainder operator
print(10 ** 2)                       # 100 - exponentation operator
```

### Operator precedence
Arithmetic operations follow the PEMDAS rule, which extends to - Paranthesis, Exponents, Multiplication, Division, Addition, Subtraction. Paranthesis being of highest precedence and subtraction of lowest.

``` python
print((2 + 2) * 2)                   # 8  - paranthesis precedence
print(2 * 2 + 2)                     # 6  - multiplication precedence
print(3 + 3 ** 2)                    # 12 - exponent precedence
```

### Unary operators
Take a single operand.

`+` leaves numeric operand unchanged and throws exception if operand is not numeric.

`-` negates a numeric operand and throws exception if operand is not numeric.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number. More on [bitwise operators](#Bitwise-operators).

``` python
print(+5)                            # 5
print(-5)                            # -5
print(~ 10)                          # -11
print(~ -1)                          # 0
```

### Comparison operators
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

### Logical operators
Compares boolean values.

`not` logical NOT operator.
`and` logical AND operator.
`or` logical OR operator.

``` python
print(not True)                      # False
print(True and False)                # False
print(True or False)                 # True
```

### Bitwise operators
Perform operations on numbers as if they were a sequence of bits and returns a base 10 number. 

Only work with integer values.

`~` bitwise NOT operator. Performs the NOT operator on each bit of a number.

`&` performs AND operation on each pair of bits in the operands.

`|` performs OR operation on each pair of bits in the operands.

`^` performs XOR operation on each pair of bits in the operands.

`<<` the __left shift operator__ shifts the bits in the first operand to the left _x_ times, where _x_ is the value of the second operand. New bits shifted in from the right are of value _0_.

`>>` the __right shift operator__ shifts the bits in the first operand to the right _x_ times, where _x_ is the value of the second operand. Bits shifted to the right beyond the sequence are discarded. New bits shifted in from the left are copies of the previous left most bit.

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

### Ternary operator
Also called the conditional operator takes three arguments. It returns one of two values based on a boolean type condition.

__syntax__: `a if condition else b`

``` python
var x = 5;
var y = 10;
print('true' if x > y else 'lesser') # lesser
```

### Assignment operators
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

### Membership operators
`in` determine whether variables, value or key exists in a collection.
`not in` determine whether variables, value or key does not exist in a collection.

``` python
x = 'A string';
y = {1: 'one', 2: 'two'}
print('String' in x)                 # False
print('A' in x)                      # True
print('one' in y)                    # False
print(2 in y)                        # True
```


&nbsp;
## Statements

### Control Flow
Controlling what is executed and in what order.

#### if...elif...else
Executes code based on whether a condition is met. The `elif` clause enables executing different logic based on multiple conditions. You can specifiy a fallback if none of the conditions are met with the `else` clause.

Statements are grouped using indentation.

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

#### try...catch...finally
Code is executed within the `try` block and if any exceptions are thrown they are handled within the `catch` block. The `finally` block is executed whether or not an exception is thrown.

`catch` and `finally` are optional.

#### break
Terminates the current statement and continues to the next one. Works with labels, loops and the switch statement. 


#### continue
Terminates the current iteration and continues to the next one. Works with labels and loops.


### Iteration
Repeating execution of code a set number of times or until a condition is met.

#### while
Consists of a condition and statement. As long as the condition is evaluated to `true` the statement is executed.


#### do...while
Consists of a condition and statement. Executes the statement and than evaluates the condition. If it evaluates to `true` the process is repeated.

#### for...in
Iterates over an object of an iterable data type. 

`str`, `list`, `dict`, `tuple`, `set` are all iterable data types.

``` python
name = 'Jonathan'
a_list = [1, 2, 3]
a_dict = {1: 'one', 2: 'two', 3: 'three'}
a_tuple = ('Orange', 'Banana', 'Lemon')
a_set = {1, 2, 3}
tupleList = [(1,2), (2,3), (3,4)]

for char in name:
    print(char, end = ',')			 # J,o,n,a,t,h,a,n,
print()

for el in a_list:
    print(el, end = ' ')			 # 1 2 3
print()

for num in a_set:
    if num % 2 != 0:
        print(num, end = ' ')		 # 1 3
print()

for (a, b) in tupleList:
	print(a * b, end=" ")			 # 2 6 12



```


&nbsp;
## Text

### Strings
A sequence of 0 or more characters. Python uses ASCII encoding by default.

#### Valid Strings
``` python
'single quotes'
"double quotes"
"quote's in strings"
'or quote\'s using an escape sequence'
'''
you can use a three quotes for very long strings
to make it multiline.
'''
```

#### String Formatting

#### Formatted String Literals
Directly embed variables in braces within a string literal through.

``` python
var1 = 'Hi'
var2 = 'There'
var3 = 123

print(f'{var1} {var2}! Here\'s a number {str(var3)}')
                                     # 'Hi There! Here's a number 123
```

Introduced in Python 3.6.

### Indexing and Slicing
Strings are array-like constructs meaning they have a length and indexed elements. 

To reference a elements from the end of the string use negative indexes with `-1` being the last character in the String.

Strings can be sliced using the following syntax `someString[start:stop:step]`:
* __start__ - index where slice starts
* __stop__ - index where slice stops exluding the 
* __stop__ - index where slice starts

``` python
print('abcdef'[1])                   # b
print('abcdef'[4])                   # e
print('abcdef'[-2])                  # e
print('12345678'[3:])                # 45678
print('12345678'[3:5])               # 45
print('12345678'[::2])               # 1357
print('12345678'[::-1])              # 87654321
print('12345678'[4:1:-2])            # 53
```

#### String Properties
Strings are immutable. This means you can't directly modify elements and changing the string(like through concatenation) returns a new string.

Concatenation can be done in various ways.
* `+` - concatenate a string to another string a single time
* `*` - concatenate a string to another string multiple times

``` python
'1234'.[1] = '5'                     # this throws an error

print('Hello' + ' ' + 'World')       # Hello World
print('A' * 5 + '!')                 # AAAAA!

```

#### String Functions
* `len(str)` - returns the length of the string
* `print(str)` - prints passed string to standard output

``` python
meow = 'onomatopoeia'

print('hi')                          # 'hi'
len(meow)                            # 12
```

#### String Methods
Keep in mind that strings are immutable, so all of the below methods return a new String based on the referenced string.

`string.upper()` - returns a new string with all upper case letters.
`string.lower()` - returns a new string with all lower case letters.
`string.format(arg0[, ... , argN])` - replaces placeholders `{}` within the string with values passed as arguments. Arguments are indexed from 0 to n and these indexes can be used within the placeholder `{3}`. Arguments can also be stored in variables which can be referenced in the placeholder.
`string.split(delim)` - divides the string according to a delimiter and stores each word in a list. The default delimiter is whitespace `' '`.

https://developers.google.com/edu/python/strings

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
string.split()                       # ['lower', 'case', 'letters']
string.split('e')                    # ['low', 'r cas', ' l', 'tt', 'rs']
```

#### Escape sequences
A sequence of characters that begins with an escape character and has a different meaning then its literal representation.

https://linuxconfig.org/list-of-python-escape-sequence-characters-with-examples

``` python
print('\ - escape character')        # " - escape character"
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
```

#### Unicode

``` python
'\xa9'                               # "©"
'\xaa'                               # "ª"
'\u0061'                             # "a"
'\u02da'                             # "˚"
'\u00e5'                             # "å"
'\uD83D\uDC98'                       # "💘"
'\ud83c\udfcb'                       # "🏋"
```

#### Lexicographical Comparison
When comparing two strings with a [comparison operator](#comparison-operators) the ASCII value of each character in both strings is compared starting from those at index 0.

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

### Regular Expressions
A pattern that is searched for in strings. 

### Initialization


### Search and Match


### Replace

``` python

```

### Split


&nbsp;
## Lists

### List Initialization


### List Properties

Lists can be concatenated.

Lists are mutable.

Lists can be indexed, sliced and have a length.

Lists can be nested.

### List Methods

'list.append(el[, ..., elN])' - adds 1 or more elements to the end of the list.
'list.append([ind])' - removes an element at a specified index and returns it. If no index is passed the last element is removed. Works with reversed indexing.
'list.sort()' - sorts the list from lowest to highest in place. This means it mutates the list without returning a value.
'list.reverse()' - sorts the list from highest to lowest in place. This means it mutates the list without returning a value.

``` python

```

&nbsp;
## Dictionaries

Useful when you want to access values without knowing there index.

### Dictionary Initialization
Dictionaries are key-value pairs seperated by colons grouped within braces.

``` python

```

### Dictionary Properties

Cannot be sorted.

Values are referenced through their key.

Keys can only be of an immutable data type.

Dicitionaries can be nested.

Dictionaries are mutable.

``` python

```


### Dictionary Methods

`dict.keys()` - returns an array containing all the dictionary keys as elements.
`dict.values()` - returns an array containing all the dictionary values as elements.

&nbsp;
## Tuples
Tuples are immutable so they're a great choice when data integrity is of importance.

### Tuple Initialization
Tuples contain values grouped in paranthesis.

### Tuple Properties
Tuples are immutable. 

Tuples can be indexed, sliced and have a length.

Tuple unpacking

### Tuple Methods

`tuple.count(val)` - returns the number of times an element matching the passed value occurs.
`tuple.index(val)` - returns the index of the fitst element matching the passed value.

&nbsp;
## Sets
A collection of unique values.

### Set Initialization
Sets are values seperated by commas grouped within braces.

### Set Properties
Values are unique.

Sets are unordered.

### Set Methods

`set.add(val[, ... , valN])` - add one or more value to the set. If the value already exists in the set the method call is ignored.
`set()` - cast a collection to a set. This removes any repeating values.


### File
Object containing functionality for manipulating files.

#### Loading files
`open('path/fileName.ext', [mode='m'])` - opens a file in the local file system. Mode indicates how the file is to be opened:
* __r__ - read, the default
* __w__ - write, creates a new file if it doesn't exist
* __a__ - append
* __r+__ - read and write
* __w+__ - read and write, creates a new file if it doesn't exist

On Windows the path seperator is a  double back-slash `C:\\user\\folder\\somefile.csv`

On MacOS and Linux the path seperator is a single forward-slash `/user/folder/somefile.csv`

``` python
productList = open('products/product.csv', mode='r')
poductList.close()

with open('products/product.csv') as product_list:
    products = product_list.read()
                                     # you can omit closing with this technique
```

#### File properties


#### File Methods
`file.read()` - returns whole file content as string and sets the cursor at the end of the file.
`file.readLine()` - returns one line of the file and sets the cursor at the next line.
`file.readLines()` - returns a list where each element is a one line of the file.
`file.write(str)` - writes a string to the file. This overwrites the files current content. Must be opened in write mode.
`file.writeLines(list)` - writes a list of strings to the file. This overwrites the files current content. Must be opened in write mode.
`file.append(str)` - appends a string to the file without overwriting the content. Must be opened in append mode.
`file.close()` - closes the file and frees up any system resources associated with the open file.





&nbsp;
## Functions

### Built-in Functions
Functions that are called globally without specifying a reference object.

`type(obj)` - returns the objects type

``` python
type(5)                       # int
type(1.4)                     # float
type('text')                  # str
type(True)                    # bool
type([1, 2])                  # list
type({"key":"value"})         # dict
type((1, 2, 3))               # tuple
type({1, 2, 3})               # set
type(1) is int                # True
```

## Multithreading