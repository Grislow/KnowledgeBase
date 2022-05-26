# Python Ecosystem Reference

Source:
* [developintelligence.com](https://www.developintelligence.com/the-python-ecosystem-of-2020/)
* [python peps](https://www.python.org/dev/peps/)
* [pypi](https://pypi.org/)

#### Table of contents

* [Overview](#overview)
* [Coding Style](#coding-style)
* [Good Practices](#good-practices)
* [PEP](#pep)
* [PyPI](#pypi)
* [Data Science](#data-science)
    * [Resources](#resources)
    * [Manuals](#manuals)


&nbsp;
# Overview


&nbsp;
# Coding Style
The most popular coding style guide for python is [pep8](https://www.python.org/dev/peps/pep-0008/)

You can format you code automatically to conform to pep8 standards with an auto-formatter: [autopep8](https://github.com/hhatto/autopep8)

Most important points:
* use 4-space indentation
* use blank lines to separate functions, classes and larger code blocks within functions
* put comments on a line of their own
* use docstrings
* use spaces around operators and after commas
* name classes using `PascalCase`
* name functions and methods using `lowercase_with_underscores`
* use `self` as the first method argument
* use UTF-8 encoding
* don't use none-ASCII characters in identifiers

&nbsp;
# Good Practices
Most good practices when it comes to coding style can be found in [pep8](https://www.python.org/dev/peps/pep-0008/).

Another fun gem when it comes to good practices is the Zen of Python which you can see by typing `import this` in your interpreter. 

```python
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

An example file structure for a python program take from [dev.to](https://dev.to/codemouse92/dead-simple-python-project-structure-and-imports-38c6)

```
omission-git
├── LICENSE.md
├── omission
│   ├── app.py
│   ├── common
│   │   ├── classproperty.py
│   │   ├── constants.py
│   │   ├── game_enums.py
│   │   └── __init__.py
│   ├── data
│   │   ├── data_loader.py
│   │   ├── game_round_settings.py
│   │   ├── __init__.py
│   │   ├── scoreboard.py
│   │   └── settings.py
│   ├── game
│   │   ├── content_loader.py
│   │   ├── game_item.py
│   │   ├── game_round.py
│   │   ├── __init__.py
│   │   └── timer.py
│   ├── __init__.py
│   ├── __main__.py
│   ├── resources
│   └── tests
│       ├── __init__.py
│       ├── test_game_item.py
│       ├── test_game_round_settings.py
│       ├── test_scoreboard.py
│       ├── test_settings.py
│       ├── test_test.py
│       └── test_timer.py
├── pylintrc
├── README.md
└── .gitignore
```

&nbsp;
# PEP
PEP stands for *Python Enhancement Proposals*. It is an index of all proposed changes to the Python language.

Link: https://www.python.org/dev/peps/


&nbsp;
# PyPI


&nbsp;
# Data Science

## Resources

### General
* [data-science-ipython-notebooks](https://github.com/donnemartin/data-science-ipython-notebooks#pandas)
* [anaconda](http://quasiben.github.io/PyDataEMC/#/)

### Visualization
* [dash for beginners](https://medium.com/swlh/dashboards-in-python-for-beginners-and-everyone-else-using-dash-f0a045a86644)
* [reporting dashboard with dash and plotl](https://towardsdatascience.com/how-to-build-a-complex-reporting-dashboard-using-dash-and-plotl-4f4257c18a7f)
* [barchart race animation](https://medium.com/dunder-data/create-a-bar-chart-race-animation-in-python-with-matplotlib-477ed1590096)
* [3 part series on Bokeh](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4)

## Manuals
* [numpy](https://numpy.org/devdocs/user/quickstart.html#prerequisites)
* [matplotlib](https://matplotlib.org/3.3.1/users/index.html)
* [dash](https://dash.plotly.com/)
* [plotly](https://plotly.com/python/)
* [bokeh](https://bokeh.org/)


&nbsp;
# Trading

## Resources
* [Build an AI stock trading bot](https://medium.com/swlh/build-an-ai-stock-trading-bot-for-free-4a46bec2a18)