The main classifications for databases are __relations databases__(SQL) or __non-relational__(NoSQL) databases. 

Their main differences regard:
* how data is __structured__
* how data is __stored__
* how data is __accessed__

# Relational Databases
[Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems) provides a nice comparison of most relational database management systems.

__Characteristics__
* data stored as __tables__, __rows__, __columns__
* stored data follows a strict schema which defines the relation between columns and rows within a table
* sql dbs are all about structuring data and their relations
* data is accessed and manipulated through SQL which is fairly popular
* follow the [ACID](/resources/glossary.md#ACID) properties

__Examples__
* __MySQL__ - very popular open-source SQL database. Often combined with PHP and Apache. Number 1 choice for CMS sites
* __Oracle__ - C++ based proprietary object-relational DBMS
* __IBM DB2__ - IBM DBMS built for working with big-data
* __Sybase__ - first enterprise level RDBMS for linux
* __MS SQL Server__ - enterprise level DBMS by Microsoft. Support SQL and NoSQL
* __Maria DB__ - fork of MySQL with performance tweeks
* __PostgreSQL__ - enterprise level object-relations DBMS. Uses, thus integrates natively with Python and Perl 

Source: [newgenapps blog](https://www.newgenapps.com/blog/sql-vs-nosql-finding-the-right-dbms-for-your-project)

# Non-Relational Databases
__Characteristics__
* document-oriented data store
* can manage unstructured, multistructured and abstract data more easily
* no pre-defined schema required
* no standardized syntax(like SQL)
* high operational performance
* support graph-data modeling
* less resource hungry
* follow the [BASE](/resources/glossary.md#BASE) properties

__NoSQL DB Types__
* __key-value model__ - simple approach for storing data in schema-less fashion using indexed keys(_Microsoft Azure_)
* __column store__ - inverted table data storage(_BigTable_, _HBase_)
* __document database__ - data is stored in documents which have a unique key through which they are accessed(_MongoDB_, _CouchDB_)
* __graph database__ - data is represented as nodes that are interconnected as a graph. Allows for high level of complexity(_Polyglot_)

# Choosing
Choosing between __NoSQL__ and __SQL__:
* <u>Query Complexity</u>
    * __SQL__ - provides a more powerful langua
* <u>Data Storage</u>
    * __hirarchical data__ - NoSQL DB's are better equiped to handle hirarchical data
    * __volume__ - NoSQL is the best choice for extreme variations and high volume
* <u>Scalability</u>
    * __vertically__ - SQL databases scale vertically
    * __horizontally__ - NoSQL databases scale horizontally, which is easier/cheaper and more flexible than vertical scaling
* <u>Transactions</u>
    * SQL databases handle transactional applications better because they are more stable and ensure data integrity 


Source: [newgenapps blog](https://www.newgenapps.com/blog/sql-vs-nosql-finding-the-right-dbms-for-your-project)