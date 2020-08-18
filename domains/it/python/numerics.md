# Math and Data with Python

Official tutorials:
* [numpy](https://numpy.org/devdocs/user/quickstart.html#prerequisites)
* [pandas](https://docs.python.org/3/contents.html)
* [scipy](https://docs.python.org/3/contents.html)
* [matplotlib](https://docs.python.org/3/contents.html)

Useful:
* [data-science-ipython-notebooks](https://github.com/donnemartin/data-science-ipython-notebooks#pandas)
* [anaconda](http://quasiben.github.io/PyDataEMC/#/)

Good reads:
* [conda vs pip](https://www.anaconda.com/understanding-conda-and-pip/)

#### Table of contents

* [Numpy](#numpy)
* [Pandas](#pandas)
  * [Optimizing](#optimizing)
  * [Tricks](#ticks)
    * [mixed dtypes](#mixed-dtypes)
* [Scipy](#scipy)
* [Matplotlib](#matplotlib)


&nbsp;
# Numpy
Python library that facilitates working on large multi-dimensional arrays and matrices.

&nbsp;
## Basics
The main object in numpy is an `array` which represents homogenous(single type) multidimensional collection of data.


&nbsp;
## Shape Manipulation



&nbsp;
# Pandas
Provides data structures and operations for manipulating numerical data sets. Is build on numpy and optimized for a high volume of data.

Great choice for:
* tabular data with heterogenously typed columns(arrays)
* time series data
* matrices with indexed columns and rows

The 2 main data structures are:
* `Series` - a one-dimensional homogeneously-typed array
* `DataFrame` - a matrice of potentially heterogenous data

Strongest features:
* handling *missing data*
* size mutability - *insert* and *delete* with ease into any-dimensional data structures
* automatic and explicit *data alignment*
* data aggregation and transformation through *group by* function
* *easy conversion* of Python and numpy datatypes to pandas datatypes
* seamless slicing, indexing and subsetting
* merging and joining datasets
* reshaping and pivoting
* advanced labeling for axes
* robust io tools
* functionality facilitating time-series manipulation:
  * date range generation
  * frequency conversion
  * moving window statistics
  * moving window linear regression
  * date shifting
  * lagging

Pandas favors immutability - most methods produce new objects.

&nbsp;
## Data Types
Sources:
* [dataquest.io](https://www.dataquest.io/blog/pandas-big-data/)

Under the hood all numeric value in pandas are stored as numpy ndarrays which makes them memory efficient. This includes subtypes that use up less memory at the cost of precision.

|memory usage|float|int|uint|datetime|bool|object|
|------------|-----|---|----|--------|----|------|
|1 bytes||int8|	uint8||		bool	
|2 bytes|float16|	int16|	uint16			
|4 bytes|float32|	int32|	uint32			
|8 bytes|float64|	int64|	uint64|	datetime64		
|variable|||||||object|

&nbsp;
## Global functions
* `pd.to_numeric(downcast)` - convert a block of data to a numeric datatype
  * `downcast` - downcast to a lower-precision data type. Can take `unsigned` or specific data type string
* `mem_usage(object)` - prints the memory footprint of a passed object


&nbsp;
## Data Frames
A `DataFrame` is a matrix of data in which data is stored according to `labeled columns` and `indexed rows`. A single cell is called a `Block`. Data can be heterogenous. 

Each column has a specific datatype and if it cannot be converted to a specific pandas datatype it is considered an `object` type which are usually memory intensive.

DataFrame mutation will be reverted to avoid problems resulting do to mutation of previously referenced objects. If you want to persist changes make sure to copy it to a new DataFrame.

### Attributes
Metadata:
* `df.info()` - get basic information on dataframes size estimate, data types, columns and rows
  * `memory_usage=deep` - get exact size
* `df.dtypes` - get column count grouped by type

Creation:
* `df.copy()` - creates a copy of the referenced dataframe

Selection:
* `df.select_dtypes()` - selection based on columns
  * `include=['int']` - selects all columns of type `int`

Mutate:
* `df.apply(func, attr*)` - run operations on each cell in the dataframe or a selection. This will mutate the dataframe
* `

```python

# df.info()
df.info()

df.info(memory_usage='deep')

# df.dtypes
df.dtypes

# df.select_dtypes()
df.select_dtypes(include=['int'])

df.select_dtypes(include=['float'])

df.select_dtypes(include=['object'])

```

## Iteration

```python
for col in df.columns:
    series = df[col]
```

## Labels

Change column labels based on first column name and drop first row.
``` python
df.rename(columns=df.iloc[0]).drop(df.index[0])
```


&nbsp;
## Series
A 1-dimensional homogenous array with an immutable size.


### Attributes
* `Series.value_counts` - calculates the memory size of a series. This can be a single column in a DataFrame as well

&nbsp;
## Optimizing
Source: 
* [realpython](https://realpython.com/fast-flexible-pandas/)

## Tricks

### mixed dtypes
```python
print(joined.select_dtypes(include=['object']).applymap(type))

                   mix_id         ticker       mix_type  ... PROD@PRE_SNAPSHOT_INSTANCES PROD@PRE_SNAPSHOT_MIXES       PROD@RAW
100050_CUR  <class 'int'>  <class 'str'>  <class 'str'>  ...               <class 'int'>           <class 'int'>  <class 'int'>
100051_CUR  <class 'int'>  <class 'str'>  <class 'str'>  ...               <class 'int'>           <class 'int'>  <class 'int'>
100049_CUR  <class 'int'>  <class 'str'>  <class 'str'>  ...               <class 'int'>           <class 'int'>  <class 'int'>
100048_CUR  <class 'int'>  <class 'str'>  <class 'str'>  ...               <class 'int'>           <class 'int'>  <class 'int'>
100047_CUR  <class 'int'>  <class 'str'>  <class 'str'>  ...               <class 'int'>           <class 'int'>  <class 'int'>
...                   ...            ...            ...  ...                         ...                     ...            ...
100004_TAR  <class 'str'>  <class 'str'>  <class 'str'>  ...               <class 'str'>           <class 'str'>  <class 'str'>
100003_TAR  <class 'str'>  <class 'str'>  <class 'str'>  ...               <class 'str'>           <class 'str'>  <class 'str'>
100002_TAR  <class 'str'>  <class 'str'>  <class 'str'>  ...               <class 'str'>           <class 'str'>  <class 'str'>
100001_TAR  <class 'str'>  <class 'str'>  <class 'str'>  ...               <class 'str'>           <class 'str'>  <class 'str'>
100000_TAR  <class 'str'>  <class 'str'>  <class 'str'>  ...               <class 'str'>           <class 'str'>  <class 'str'>
```

&nbsp;
## This and that
Various useful things I found on the internet

### Cleanup

Drop duplicates based on column names:

``` python
df = df.loc[:,~df.columns.duplicated()]
```


&nbsp;
# Scipy
A collection of mathematical algorithms and convenience functions for manipulating and visualizing data.


&nbsp;
# Matplotlib
Plotting library with a robust community used for data visualization.
