Source:
* [Official Docs](https://dev.mysql.com/doc/refman/8.0/en/)

#### Table of contents

* [Introduction](#introduction)
    * [Installation](#installation)
    * [Commands](#commands)
* [Entities](#entities)
    * [Databases](#databases)
    * [Tables](#tables)
        * [Table Creation](#Table-Creation)
        * [Table Deletion](#Table-Deletion)
        * [NULL and NOT_NULL](#NULL-and-NOT_NULL)
        * [Default Values](#Default-Values)
    * [Settings](#settings)
    * [Warnings](#warnings)
* [Data Types](#data-types)
    * [Numeric Types](#numeric-types)
    * [String Types](#string-types)
* [CRUD Operations](#crud-operations)
    * [Create](#create)
    * [Read](#read)
    * [Update](#update)
    * [Destroy](#destroy)
* [String Functions](#string-functions)
* [Refined Selections](#refined-selections)
* [Aggregate Functions](#aggregate-functions)
* [Data Types](#data-types)
* [Logical Operators](#logical-operators)
* [Relationships](#relationships)
    * [One to Many](#one-to-many)
    * [Many to Many](#many-to-many)
* [Database Triggers](#database-triggers)
* [Indexes](#indexes)
* [Node Integration](#node-integration)

&nbsp;
# Introduction

## Installation
1. Go to [downloads page](https://dev.mysql.com/downloads/) and download __MySQL Community Server__
1. Install it
1. Run `mysql -u root -p`

If command not found encountered:
1. open shell profile config file `code ./.zshrc
1. paste in `export PATH=${PATH}:/usr/local/mysql/bin`
1. restart shell

## Commands
__CLI__:
* `mysql -u root -p` - login on root user
* `ctrl + d` - exits the sql cli
* `ALTER USER 'root'@'localhost' IDENTIFIED BY 'a password'` - for setting up the password on root user of a MySQL instance

__SQL Commands__
* __ALTER__ - changes an entry, table or DB
* __CREATE__ - creates a table or DB
* __DROP__ - deletes an entry, table or DB
* __USE__ - uses a DB


&nbsp;
# Entities

## Databases
__CLI Commands__
|command|description|
|-------|-----------|
|`list databases;`|lists all available DBs|
|`create database some_name;`| creates a DB|
|`drop database some_name;`| deletes a DB|
|`use some_name;`| specifies the current DB|
|`select database();`| returns the name of the current DB|


## Tables
> A collection of related data held in a structured format within a database.

In relational databases a table consists of columns and rows. 
* __Columns__ represent types of data and their identifiers. 
* __Rows__ represent data that is stored in the table and conforms to the structure defined through the columns.

According to convention table names should be __pluralized__.

To view all tables in current db:
``` shell
mysql> show tables;

+-------------------+
| Tables_in_my_test |
+-------------------+
| humans            |
+-------------------+
```

To view all columns in a table use one of:
* `show columns in table_name;`
    ``` shell
    mysql> show columns in humans;

    +-------+--------------+------+-----+---------+-------+
    | Field | Type         | Null | Key | Default | Extra |
    +-------+--------------+------+-----+---------+-------+
    | name  | varchar(100) | YES  |     | NULL    |       |
    | age   | int(11)      | YES  |     | NULL    |       |
    +-------+--------------+------+-----+---------+-------+
    ```
* `DESC table_name;`
    ``` sql
    DESC humans;

    +-------+--------------+------+-----+---------+-------+
    | Field | Type         | Null | Key | Default | Extra |
    +-------+--------------+------+-----+---------+-------+
    | name  | varchar(100) | YES  |     | NULL    |       |
    | age   | int(11)      | YES  |     | NULL    |       |
    +-------+--------------+------+-----+---------+-------+
    ```

### Table Creation
``` sql
CREATE TABLE humans
    (
        name VARCHAR(100),
        age INT
    );
```

### Table Deletion
``` sql
DROP TABLE humans;
```

### NULL and NOT_NULL
A `NULL` value is an unknown value.

To disallow `NULL` values in a column you need to use the `NOT NULL` constraint.

``` sql
CREATE TABLE humans
    (
        name VARCHAR(100) NOT NULL,
        age INT NOT NULL
    );
```

### Default Values
A column can be assigned a default value. Whenever there is missing data it will be implicitly set to the specified default value.

Default values do not make `NOT NULL` constraint redundant since `NULL` values can still be set explicitly.

``` sql
CREATE TABLE humans
    (
        name VARCHAR(100) DEFAULT 'no name',
        age  INT DEFAULT 100
    );
```

### Primary Keys
A unique piece of data that can unambiguously identify a row of data in a table.

``` sql
CREATE TABLE humans
    (
        person_id INT NOT NULL,
        name VARCHAR(100),
        age  INT,
        PRIMARY KEY (person_id)
    );

DESC humans;

+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| person_id | int(11)      | NO   | PRI | NULL    |       |
| name      | varchar(100) | YES  |     | NULL    |       |
| age       | int(11)      | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
```

Attempting to insert data with existing primary key value will result in an error.

``` sql
INSERT INTO humans(person_id, name, age)
VALUE (1, 'Jane', 20);

INSERT INTO humans(person_id, name, age)
VALUE (1, 'John', 40);

> ERROR 1062 (23000): Duplicate entry '1' for key 'PRIMARY'
```

Set the `AUTO_INCREMENT` option to delegate handling the primary key value to the database.

``` sql
CREATE TABLE humans
    (
        person_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100),
        age  INT,
        PRIMARY KEY (person_id)
    );

/* No need to specify person_id, the DB handles this internally */
INSERT INTO humans(name, age)
VALUE ('John', 40);
```

## Settings
``` sql
SET @@global.sql_mode= '';
```

## Warnings
Warnings are unplanned behaviors that cannot result in system failures.

__Example__: truncating characters in an varchar that exceeds the limit

Warnings are usually handled programatically by the application layer.
``` sql
SHOW WARNINGS;

+---------+------+-------------------------------------------------------------+
| Level   | Code | Message                                                     |
+---------+------+-------------------------------------------------------------+
| Warning | 1366 | Incorrect integer value: 'ripper' for column 'age' at row 1 |
+---------+------+-------------------------------------------------------------+
```



&nbsp;
# Data Types
There are numerous data types divided across:
* Numeric Types
* String Types
* Date and Time Types
* Spatial Data Types
* JSON Type

## Numeric Types
|name|description|range|storage(bytes)
|----|-----------|:-----:|:-------:|
|INT|whole number|-2147483648 to 2147483647|4|
|SMALLINT||||
|TINYINT||||
|MEDIUMINT||||
|BIGINT||||
|DECIMAL||||
|NUMERIC||||
|FLOAT||||
|DOUBLE||||
|BIT||||


## String Types
|name|description|range|storage(bytes)
|----|-----------|:-----:|:-------:|
|CHAR|fixed length string|1 to 255 chars||
|VARCHAR|variable length string|
|BINARY||
|VARBINARY||
|BLOB||
|TINYBLOB||
|MEDIUMBLOB||
|LONGBLOB||
|TEXT||
|TIINYTEXT||
|MEDIUMTEXT||
|LONGTEXT||
|ENUM||

&nbsp;
# CRUD Operations
CRUD stands for **C**reate, **R**ead, **U**pdate, **D**elete. These are operations that most apps working with persistant data should be able to perform.

## Create
Creating data is done through the `INSERT INTO` command.

``` sql
INSERT INTO humans(name, age)
VALUES  ('John', 30),
        ('Jane', 28);
```

To read data use the `SELECT` command.
``` sql
SELECT * FROM humans;

+------+------+
| name | age  |
+------+------+
| John |   30 |
| Jane |   28 |
+------+------+
```

## Read
Reading data is done through the `SELECT` clause.
* `SELECT * FROM table_name` - reads all the data in table_name
* `SELECT name, age FROM table_name` - only reads values in selected columns

``` sql
SELECT * FROM employees;

+----+------+-----+--------+
| id | name | age | salary |
+----+------+-----+--------+
|  1 | Greg |  28 |  10000 |
|  2 | John |  35 |  12000 |
|  3 | Jim  |  20 |   3000 |
+----+------+-----+--------+

SELECT name, age FROM employees;

+------+-----+
| name | age |
+------+-----+
| Greg |  28 |
| John |  35 |
| Jim  |  20 |
+------+-----+
```

To filter out data use the `WHERE` clause.
* `WHERE some_col = some_val` 




## Update


``` sql

```

## Destroy


``` sql

```

&nbsp;
# String Functions


&nbsp;
# Refined Selections


&nbsp;
# Aggregate Functions


&nbsp;
# Data Types


&nbsp;
# Logical Operators


&nbsp;
# Relationships


## One to Many
    
    
## Many to Many


&nbsp;
# Database Triggers


&nbsp;
# Indexes


&nbsp;
# Node Integration