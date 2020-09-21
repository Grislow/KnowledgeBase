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
Written in C and Python `CPython` is the default and most popular Python implementation. It is both an interpreter and and compiler - it compiles Python code to bytecode before interpreting it. 

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