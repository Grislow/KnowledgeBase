# InfluxDB Reference Guide

Source:
* [docs.influxdata.com](https://docs.influxdata.com/influxdb/v1.8/about_the_project/)
* [influxdata on TICK stack](https://www.influxdata.com/time-series-platform/)

#### Table of contents

* [General](#general)
* [Installation](#installation)
* [Glossary and Key Concepts](#glossary-and-key-concepts)
* [CLI](#cli)
* [Schema Design](#schema-design)
* [Storage Engine](#storage-engine)
* [Time Series Index](#time-series-index)
* [Configuration](#configuration)
* [InfluxQL](#influxql)

&nbsp;
# General
* InfluxDB is a specialistic database created for performant handling of time series data
* supports two querying languages:
    * `Flux` - data scripting language available from InfluxDB 1.8
    * `InfluxQL` - a SQL-like querying language
* is not a CRUD database - focus on optimal `Create` and `Read` since time series data is rarely deleted or modified
* simplified conflict resolution - same data is overwritten with the latest occurrence
* optimized for adding data in time ascending order
* focus on scale
* good at managing discontinuous data

&nbsp;
# Installation

## Directory Permissions
Directories in which data and the write ahead logs are stored **have to writable** or influxdb will not start.

## _internal
The `_internal` database is the only database created by default when InfluxDB is installed. It stores internal runtime metrics.


&nbsp;
# Glossary and Key Concepts
Nomenclature used when talking about InfluxDB, definitions and key concepts regarding the key words.

## aggregation
A `function` that generates a value based on a collection of `points`
* example: `COUNT()`

## batch
A batch of `points` separated by newlines(`0x0A`). 
* can be submitted to the DB with a single HTTP request
* recommended batch sizes are 5000-10000 points

## bucket
A named location in which time series data is stored. 
* only considered a separate entity in `InfluxDB 2.0`
* in `1.8+` a bucket is a combination of a `database` and `retention policy`

## continuous query(CQ)
A query that runs periodically and automatically within a `database`
* require function in `SELECT` clause
* must include a `GROUP BY time()` clause

## database
Logical container for:
* `users`
* `retention policies`
* `continuous queries`
* time series data

## dependant tag
Tags that are scoped by another tag
* example: a `social security number` could be scoped with an `email` tag, meaning each unique email tag has a unique associated `social security number`

## duration
Attribute of the `retention policy` that determines how long InfluxDB keeps the data in an associated `database`

## field
Key-value pair that represents the measured value
* example: `open=2.3456`
* **Keys** store metadata and are of `string` data types
* **values** store the measured value and can be a `string`, `float`, `integer` or `boolean`
* values are always associated with a timestamp
* fields are not indexed - queries depending on field values will be slow, because the InfluxDB engine must scan all available fields
* **field set** is a collection of field keys and values on any given point.

## functions
Built-in functions that can be used in queries. Can be grouped into:
* `aggregations` - reducing a series of values to a single value
* `selectors` - returns a single point from a range of points
* `transformation` - returns a value or series of values from a different series of values. Does not perform aggregation

## identifier
Tokens that refer to different InfluxDB entities such as:
* continuous queries
* field and tag keys
* measurement names
* retention policy names
* subscription names
* user names

## measurement
The type of data that is stored in a single data point
* in a traditional relational database a `measurement` would be a `table`
* measurement are `strings`
* example: `ram_usage`

## metastore
Controls internal InfluxDB instance data such as:
* user information
* database listing
* retention policies
* shard metadata
* continuous queries
* subscriptions

## node
An independent instance of the influxd service

## now()
The local server's nanosecond timestamp

## point
A **single record** in a time series, which represents a specific measurement at a specific datetime. 
* consists of a `timestamp`, `measurement`, at least one `field` and any number of optional `tags`
* is uniquely identified by its `series` and `timestamp`
* if a duplicate point is written(same series and timestamp) the field set becomes a union that prioritizes the new point data

Points are written to the database using the the `InfluxDB line protocol` which has the following format:
``` shell
<measurement>[,<tag-key>=<tag-value>...] <field-key>=<field-value>[,<field2-key>=<field2-value>...] [unix-nano-timestamp]

# example
stock,symbol=AAPL bid=127.46,ask=127.48
```

## query
An operation that reads data from InfluxDB.

## replication factor
Attribute of the `retention policy` that determines how many copies of an associated `databases` data are stored in a cluster.
* ensures data availability in case of node failure
* default replication is equal: 
    * the number of nodes for 3 or less nodes
    * `3` for more than 3 nodes

## reserved keys
Some keys are reserved for internal use and should not be used as keys in `fields` and `tags`. These are:
* `_field`
* `_measurement`
* `time`

## retention policy
A InfluxDB database configuration
* describes:
    * `DURATION` - how long data is kept
    * `REPLICATION` - how many copies of data are stored in a cluster of `nodes`
    * `SHARD DURATION` - time range covered by shard groups
* the default retention policy `autogen`:
    * stores one copy of the data 
    * stores data infinitely
    * sets a shard group duration of 7 days

## schema
How data is organized in InfluxDB. The fundamentals are:
* databases
* retention policies
* series
* measurements
* tag keys and values
* field keys

Not to be confused with a DB schema in relational database. In this aspect InfluxDB is `schemaless`, which means new fields, measurements and tags can be added at any time.

## selector
A `function` that returns a single `point` from a range of specified `points`
* example: `BOTTOM()`

## series
A collection of `points` that share a measurement(table), tag set(indexed columns) and field set(non-indexed columns).
* the shared data is called the `series key`

## series cardinality
Number of unique combinations of `database`, `measurement`, `tag set`, `field key` across an InfluxDB instance.
* dependant tags do not increase series cardinality

## server
A virtual or physical machine running an InfluxDB process.
* only one process should be running per server

## shard
Contains the actual encoded and compress data
* represented by `TSM` file
* belongs to only one `shard group`
* contains a specific set of series
* all point pertaining to a series in a shard group will be stored in the same shard on disk

## shard duration
Attribute of the `retention policy` that determines how much time each shard group spans. 

## shard group
Logical containers for shards
* organized by `time` an `retention policy`
* contains all the shards with data pertaining to the groups `time` interval
* `shard duration` is the interval spanned by each group

## subscription
Enable Kapacitor(see TICK stack) to recieve data from InfluxDB in a push model.
* can use `TCP` or `UDP`
* will automatically push every write for a subscribed DB to Kapacitor

## tag
Key-value pair that represents a points metadata. For example: `currency=USD`
* are indexed, which makes them a good choice for query filters.
* `tag keys` - are of a `string` format
* `tag values` - are of a `string` format
* `tag set` - a collection of tag keys and associated values in a single point

## tick stack
The TICK stack is a set of open source solutions that are designed to handle massive amounts of time-stamped information. Comprised of: 
* `Telegraf` - plugin-driven server agent for collecting and reporting metrics
* `InfluxDB` - specialized database for storing time series data
* `Chronograf` - administrative user interface and visualization engine
* `Kapacitor` - data processing engine that works with both stream and batch data

## timestamp
Denotes at what point of a time a measurement was registered.
* time in InfluxDB is UTC

## transformation
A `function` that returns a set of values based on a collection of `points`
* example: `ABS()`

## tsm
Time Structured Merge tree is a specialized data storage format for InfluxDB
* greater compaction and higher throughput than existing B+ or LSM tree implementations

## user
A configured InfluxDB instance user
* two types:
    * `Admin` - `READ` and `WRITE` access to all databases, full access to administrative queries and user management commands
    * `Non-admin users` - have `READ` or `WRITE` or `ALL` access per database
* with authentication enabled InfluxDB only executes HTTP request that are sent with a valid username and password

## values per second
The number of values that are persisted per second
* used to measure the performance of an InfluxDB instance

## wal
The Write Ahead Log is a temporary cache for recent write operations
* reduces frequency with which permanent data files are accessed
* is flush once the WAL exceeds a size or age threshold
* can be queries
* persists on system reboot
* on start points in WAL must be flushed before the system accepts new writes

&nbsp;
# CLI
``` shell
# start the influxdb server directly
influxd

# start the influxdb service
service influxdb start

# start the influxdb command line utility
influx

# view default settings
influxd config
```

&nbsp;
# Schema Design
Some recommendations regarding InfluxDB schema design.

## Queries should guide what gets stored as what
* `tags`
    * commonly queried meta data
    * data used with `GROUP BY` clause
* `fields`
    * none-string values
    * data planned to use with InfluxQL function

## Don't use keywords in tag or field names
* won't have to wrap them in double quotes(or use bracket notation in Flux)
* using other characters than `[A-z,_]` will also require wrapping in double quotes

## Avoid too many series
Highly variable information in tag leads to high series cardinality. High series cardinality leads to high memory usage. Consider storing highly variable data in a field

## Avoid the same name for a tag and field
This can lead to unexpected query results

## Avoid encoding data in measurement names
To query data in a measurement name you must use regular expressions. It can also make some queries impossible since data falling under the same measurement is merged.

## Avoid putting more than one piece of information in one tag
This will simplify queries and reduce the need for regular expressions(which are usually not very readable)

## Long shard group duration recommendations
Shard groups are organized by Retention Policies and store data within to a time interval called the `shard duration`.
* for most RP's the default shard group durations are ok
* longer shard group durations can be useful for high-throughput or long-running instances
* for data that covers decades and is never deleted a shard group duration like `1040w` (20 years) is valid
* when writing historical data temporarily increase shard group duration(52w+)

Shard group should:
* be twice as long as the longest time range of the most frequent queries
* each contain more than 100000 points
* each contain more than 1000 points per series

Recommended Shard Group Duration for specific Retention Policy duration ranges
|RP Duration|Shard Group Duration|
|-----------|--------------------|
|`<= 1 day`|`6 hours`|
|`> 1 day and <= 7 days`|`1 day`|
|`> 7 days and <= 3 months`|`7 day`|
|`> 3 months`|`30 days`|
|`infinite`|`52 weeks or longer`|

&nbsp;
# Storage Engine
The backbone of InfluxDB responsible for tying together internal components and providing an external interface for storing and querying series data.

## Storage Engine Components
The following components are what makes the Storage Engine:
* `In-Memory Index` - an index shared across shards that provides quick access
* `WAL` - a write-optimized storage format focused on durable writes
    * composed of fixed size(10MB) segments to which data is written
    * each segment stores compressed blocks of writes and deletes
    * wal file naming schema - `_000001.wal`
* `Cache` - in-memory representation of data stored in the WAL
    * queried at runtime and merged with data in TSM files
    * cached data is not compressed while in memory
    * is recreated on restart by re-reading WAL files
* `TSM Files` - read-only files containing compressed series data in a columnar format
    * composed of four sections:
        ```
        +--------+------------------------------------+-------------+--------------+
        | Header |               Blocks               |    Index    |    Footer    |
        |5 bytes |              N bytes               |   N bytes   |   4 bytes    |
        +--------+------------------------------------+-------------+--------------+
        ```
    * the **header** contains information on the file type(Magic) and version number
        ```
        +-------------------+
        |      Header       |
        +-------------------+
        |  Magic  │ Version |
        | 4 bytes │ 1 byte  |
        +-------------------+
        ```
    * the **blocks** are pairs of CRC32 checksums(used for data validation) and data
        ```
        +--------------------------------------------------------------------+
        │                           Blocks                                   │
        +---------------------+-----------------------+----------------------+
        |       Block 1       |        Block 2        |       Block N        |
        +---------------------+-----------------------+----------------------+
        |   CRC    |  Data    |    CRC    |   Data    |   CRC    |   Data    |
        | 4 bytes  | N bytes  |  4 bytes  | N bytes   | 4 bytes  |  N bytes  |
        +---------------------+-----------------------+----------------------+
        ```
* `FileStore` - mediates access to all TSM files on disk
    * ensures TSM files are installed atomically
    * removes TSM files that are no longer used
* `Compactor` - optimizes Cache and TSM data
    * optimization techniques:
        * compresses series
        * removes deleted data
        * optimizes indices
        * combines smaller files into larger ones
* `Compaction Planner` - determines which files are ready for compaction and controls concurrent compactions
* `Compression` - compresses data through various Encoders and Decoders for specific data-types 
* `Writers/Readers` - adapters for IO operations on various file types

&nbsp;
# Time Series Index
TSI is a specialized technique for handling time series databases with a very large series cardinality.

For details check out the [official docs](https://docs.influxdata.com/influxdb/v1.8/concepts/tsi-details/)


&nbsp;
# Configuration
InfluxDB can be configured either through a `influxdb.conf` file or through environment variables.
* all settings are available through both methods
* environment variables override `influxdb.conf` configs

## Default Configuration
To get the default configuration file do one of the following: 
* with docker installed and running execute the command `docker run --rm influxdb influxd config > influxdb.conf`
* upon installation the default config is placed in:
    * Linux: `/etc/influxdb/influxdb.conf`
    * macOS: `/usr/local/etc/influxdb.conf`

## Launch With Configuration
``` shell
# use the config flag to point to your config file
influxd -config /etc/influxdb/influxdb.conf

# set the path through an environment variable
INFLUXDB_CONFIG_PATH=/etc/influxdb/influxdb.conf influxd
```

## Duration Units
Supported duration units in configs:
* `ns` - nanoseconds
* `us` - microseconds
* `ms` - milliseconds
* `s` - seconds
* `m` - minutes
* `h` - hours
* `d` - days
* `w` - weeks

## Environment variables
Environment variables are grouped into:
* `global` - can affect all influxdb components
* `meta` - controls the metastore which stores information on users, databases, retention policies, shards and continuous queries
* `data` - configures where the data is stored and how it is flushed
* `coordinator` - affects query management
* `retention` - control when old data is evicted

|Variable Name|Configuration|Group|Description|Uses|Default|
|-------------|-------------|-----|-----------|----|-------|
|`GOMAXPROCS`||[global]|The maximum amount of CPUs used by InfluxDB|Don't choke other processes|Number of CPUs visible on program startup|
|`INFLUXDB_REPORTING_DISABLED`|`reporting-disabled`|[global]||Reduce network traffic||
|`INFLUXDB_BIND_ADDRESS`|`bind-address`|[global]||||
|`INFLUXDB_META_DIR`|`dir`|[meta]||||
|`INFLUXDB_META_RETENTION_AUTOCREATE`|`retention-autocreate`|[meta]||||
|`INFLUXDB_META_LOGGING_ENABLED`|`logging-enabled`|[meta]||||
|`INFLUXDB_DATA_DIR`|`dir`|[data]||||
|`INFLUXDB_DATA_WAL_DIR`|`wal-dir`|[data]||||
|`INFLUXDB_DATA_WAL_FSYNC_DELAY`|`wal-fsync-delay`|[data]||||
|`INFLUXDB_DATA_INDEX_VERSION`|`index-version`|[data]||||
|`INFLUXDB_DATA_TRACE_LOGGING_ENABLED`|`trace-logging-enabled`|[data]||||
|`INFLUXDB_DATA_QUERY_LOG_ENABLED`|`query-log-enabled`|[data]||||
|`INFLUXDB_DATA_VALIDATE_KEYS`|`validate-keys`|[data]||||
|`INFLUXDB_DATA_CACHE_MAX_MEMORY_SIZE`|`cache-max-memory-size`|[data]||||
|`INFLUXDB_DATA_CACHE_SNAPSHOT_MEMORY_SIZE`|`cache-snapshot-memory-size`|[data]||||
|`INFLUXDB_DATA_CACHE_SNAPSHOT_WRITE_COLD_DURATION`|`cache-snapshot-write-cold-duration`|[data]||||
|`INFLUXDB_DATA_COMPACT_FULL_WRITE_COLD_DURATION`|`compact-full-write-cold-duration`|[data]||||
|`INFLUXDB_DATA_MAX_CONCURRENT_COMPACTIONS`|`max-concurrent-compactions`|[data]||||
|`INFLUXDB_DATA_COMPACT_THROUGHPUT`|`compact-throughput`|[data]||||
|`INFLUXDB_DATA_COMPACT_THROUGHPUT_BURST`|`compact-throughput-burst`|[data]||||
|`INFLUXDB_DATA_TSM_USE_MADV_WILLNEED`|`tsm-use-madv-willneed`|[data]||||
|`INFLUXDB_DATA_MAX_SERIES_PER_DATABASE`|`max-series-per-database`|[data]||||
|`INFLUXDB_DATA_MAX_VALUES_PER_TAG`|`max-values-per-tag`|[data]||||
|`INFLUXDB_DATA_MAX_INDEX_LOG_FILE_SIZE`|`max-index-log-file-size`|[data]||||
|`INFLUXDB_DATA_SERIES_ID_SET_CACHE_SIZE`|`series-id-set-cache-size`|[data]||||
|`INFLUXDB_COORDINATOR_WRITE_TIMEOUT`|`write-timeout`|[coordinator]||||
|`INFLUXDB_COORDINATOR_MAX_CONCURRENT_QUERIES`|`max-concurrent-queries`|[coordinator]||||
|`INFLUXDB_COORDINATOR_QUERY_TIMEOUT`|`query-timeout`|[coordinator]||||
|`INFLUXDB_COORDINATOR_LOG_QUERIES_AFTER`|`log-queries-after`|[coordinator]||||
|`INFLUXDB_COORDINATOR_MAX_SELECT_POINT`|`max-select-point`|[coordinator]||||
|`INFLUXDB_COORDINATOR_MAX_SELECT_SERIES`|`max-select-series`|[coordinator]||||
|`INFLUXDB_COORDINATOR_MAX_SELECT_BUCKETS`|`max-select-buckets`|[coordinator]||||
|`INFLUXDB_RETENTION_ENABLED`|`enabled`|[retention]||||






&nbsp;
# InfluxQL
Influx Query Language is a syntax used to administrate, read and write data on an Influx Database.

## Admin
```shell
# Create a database
#   - no quotes required if name contains only ASCII letters, digits, underscored and does not start with a digit
CREATE DATABASE mydb

# Display existing databases
SHOW DATABASES

# Set database for future requests
USE mydb

# Show series cardinality
SHOW CARDINALITY
```

## Create
``` shell
# insert single time series data point
#   - by not providing a timestamp a local current timestamp will be assigned by default
INSERT stock,symbol=AAPL bid=127.46,ask=127.48
```

## Read
Warnings:
* using `*` without a `LIMIT` can cause performance issues
* `Ctrl + C` to cancel a query

```shell
# read data syntax
SELECT "tag1", "tagN", "field1", "fieldN" FROM "measurement"

# read data examples
SELECT "symbol", "bid", "ask" FROM "stock"
SELECT * FROM "stock"
```