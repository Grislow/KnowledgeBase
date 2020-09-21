Node is a Javascript runtime written in C++ used to execute code outside of the browser.

In a client-server architecture an HTTP server is run using node. Node listens for HTTP requests on specified ports. Node can handle the requests on it's own but usually makes use of a library(like Express) that simplifies this process.

__TODO__:
* [web scraping](https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb)
* [skim official guide](https://nodejs.org/en/docs/guides/)

Source:
* [nodejs docs](https://nodejs.org/api/)
* [nodejs guide](https://nodejs.org/en/docs/guides/)

#### Table of contents

* [Conceptual](#conceptual)
    * [Features](#features)
    * [Environment Variables](#environment-variables)
    * [Global and Module Objects](#global-and-module-objects)
    * [Deployment Checklist](#deployment-checklist)
* [CLI](#cli)
* [Modules](#modules)
    * [CommonJS](#CommonJS)
* [Events](#events)
    * [Custom Events](#custom-events)
    * [System Events](#system-events)
* [Assert](#Assert)
* [Buffer](#buffer)
* [C/C++ Addons](#c/c++-addons)
* [Child Process](#child-process)
* [Cluster](#Cluster)
* [Console](#console)
* [Crypto](#crypto)
* [Debugger](#debugger)
* [DNS](#dns)
* [Errors](#errors)
* [File System](#file-system)
* [HTTP and HTTPS](#HTTP-and-HTTPS)
* [Net](#net)
* [OS](#os)
* [Path](#path)
* [Process](#process)
* [Query String](#query-string)
* [Readline](#readline)
* [REPL](#repl)
* [Stream](#stream)
* [String Decoder](#string-decoder)
* [Timers](#timers)
* [TLS](#tls)
* [UDP](#udp)
* [URL](#url)
* [Util](#util)
* [V8](#v8)
* [VM](#vm)
* [Zlib](#Zlib)
* [Security](#security)
* [Database Integration](#database-integration)
* [Misc](#misc)


&nbsp;
# Conceptual
Core concepts and ideas you should understand as a node developer.

## Features
In order for JavaScript to manage a server many features needed to be implemented. Node makes this possible by including:
* working with a filesystem
    * fs module
    * zlib module
* modular programming
    * CommonJS
* database interfacing
    * http, serialization
* network communication
    * http module, sockets
* handling http requests and responses
    * http module
* dealing with tasks that take a long time
    * streams
    * buffers
    * libuv module

All of these where implemented using C++, but wrappers written in JS are made available for simple integration into a JS application.

__Error First Callbacks__\
NodeJS makes heavy usage of error first callbacks, which are simply callback functions with the error object as their first parameter.

## Environment Variables
SKIM: [John Papa](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)

Variables that store runtime or environment data.

Environment variables are stored in the `process.env` object.

`PORT` - the port on which the app listens to.

``` javascript
const PORT = process.env.PORT;
```

A common practice is to store environment variables in a `.env` file and excluding them in `.gitignore`.
``` shell
# This is a comment and is ignored
SOME_ENV_VAR="this can be reference through process.env.SOME_ENV_VAR"
PAY_API_LOGIN="greg"
PAY_API_TOKEN="asdasdasd12312312"
```



## Global and Module Objects
Source: [globals](https://nodejs.org/api/globals.html)

Objects that are available either globally in NodeJS or in all modules.

Module Objects:
* `__dirname` - the absolute path to the scripts location
* `__filename` - the absolute path to the scripts location with the scripts name

Global Objects:
* `` - 

``` javascript
console.log(__dirname);
    // /Users/some_user/some_folder/project_folder
console.log(__filename);
    // /Users/some_user/some_folder/project_folder/app.js
```

## Deployment Checklist
When deploying a node server to a cloud service below is an example checklist of what needs to be done. This is as per __heroku__ cloud service requirements:
* __Dynamic Port Binding__ - specify the port which your app will be listening to
* __Specify Node Environment__ - specify the node version you app uses
* __Specify Start Script__ - specify command which will run your node environment
* __.gitignore__ - specify files which won't be included in the environment like _dependencies_

&nbsp;
# CLI
Source: [cli](https://nodejs.org/api/cli.html)

`node` - runs a JavaScript repl
`node example.js` - runs example.js in the node runtime environment

&nbsp;
# Modules
Source: [modules](https://nodejs.org/api/modules.html)

NodeJS supports the CommonJS module syntax natively. ES6 modules can be used if transpiled using babel.

## CommonJS
CommonJS modules:
* are loaded synchronously
* do not allow named imports

When importing a JavaScript file you can omit the file extension. NodeJS also supports .json and .node files. For any other extensions you will have to use a library.

When importing a .js file its content is wrapped in a closure. This closure only exposes module.exports and makes the rest inaccessible.

If the required file is not found node looks for a folder with the same name and attempts to load its `index.js` file.

You can import:
* __localfile__ - example `require('./myfile')`
* __node module__ - example `require('fs')`
* __npm module__ - example `require('express')` - this will first look for a node module of the given name

```javascript
// import module
var example = require('./example');
var fs = require('fs');
var express = require('express');

// module export
module.exports = function() {
    console.log('test');
}
```

You can export multiple functions or variables by wrapping them in an object literal.

``` javascript
// Module
var example = function() {
    console.log('This is an example function');
}

var someVar = 1000;

module.exports = {
    example: exmaple,
    prop: someVar
}
```

``` javascript
// app.js
var example = require('./example');
var justProp = require('./example').prop;

example.example();

console.log(justProp);
```

&nbsp;
# Events
An occurence that you can catch and respond to in your application.

Events in NodeJS are seperated into two groups:
* System Events - events that are triggered by the system. These are handled by the __libuv__ module and are forwarded to event emitters.
* Custom Events - events generated by an EventEmitter that can be handled using JavaScript code.

## Custom Events
Custom Events in NodeJS are handled by an Event Emitter that listening for and handling events.

__Event Emitter__:
* listens for events and stores them
* provides an interface for adding events and handling event emission

It is common for objects to add an event emitter to their prototype chain to customize how they handle events.

Example of a very simplistic custom event emitter module.
``` javascript
var emitterFactory = function() {
    var events = {};

    var proto = {
        on: function(type, listener) {
            events[type] = events[type] || [];
            events[type].push(listener);
        },
        emit: function(type) {
            if(events[type]) {
                events[type].forEach(function(listener) {
                    listener();
                });
            }
        }
    }

    return Object.create(proto);
}

module.exports = emitterFactory;
```

It is good practice to store event types in a seperate config file.

``` javascript
module.exports = {
    events: {
        OPEN: 'open',
        SAVE: 'save',
        CLICK: 'click'
    }
}
```

## System Events
System Events in NodeJS are handled by a C library called __libuv__. This feature resides in the V8 engine. 

__Process__:
1. libuv makes a request to the operating system.
1. The operating system handles the request. 
1. After processing the request the outcome is placed on a queue maintained by libuv
1. An event loop checks the queue
1. A callback is executed if any values are found in the libuv queue
1. Once the V8 engines execution stack is empty the callback is executed

This mechanism makes request handling non-blocking in NodeJS. This is especially important with lengthy operations such as: 
* I/O operations
* connecting to databases
* retrieving/sending information over a network

Events comming from libuv are usually linked with an event emitter for custom handling.

&nbsp;
# Assert
Source: [assert](https://nodejs.org/api/assert.html)

A module for performing assertion tests to test invariants.

``` javascript
const assert = require('assert');
```


&nbsp;
# Buffer
Enables reading and manipulating streams of data. Buffers are available globally in NodeJS. Buffers are usually not manipulated directly, but rather used by NodeJS internally.

Buffers represent a fixed amount of data. Its length is a constant. Writing values beyond that length results in overwriting starting from the buffers first element.

Originally created before `TypedArray` was implemented in ES6 JavaScript. NodeJS buffers implement the `Uint8Array` typed array.

Buffer Instantiation:
``` javascript
// utf-8 is default
var buffer1 = Buffer.from('Hello');
var buffer2 = Buffer.from('Hello', 'utf-16);
```

Buffer Methods:
`Buffer.prototype.toString()` - explicit coercion to String
`Buffer.prototype.toJSON()` - returns a JSON representation of the buffers content
`Buffer.prototype.write(val)` - writes a new value to the buffer

``` javascript
var buffer = Buffer.from('Hello');

buffer.toString();
    // Hello
buffer.toJSON();
    // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
buffer.write('J');
    // Jello
```

&nbsp;
# C/C++ Addons
Source: [addons](https://nodejs.org/api/addons.html)

C or C++ modules integrated into a NodeJS app.


&nbsp;
# Child Process
Source: [child_process](https://nodejs.org/api/child_process.html)

A module that enables spawning child processes.

``` javascript
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
```


&nbsp;
# Cluster
Source: [cluster](https://nodejs.org/api/cluster.html)

A module that allows creation of child processes that all use the same port and can run on seperate processing units.

``` javascript
const cluster = require('cluster');
```


&nbsp;
# Console
Source: [console](https://nodejs.org/api/console.html)

A debugging console like the one available in web browsers.


&nbsp;
# Crypto
Source: [crypto](https://nodejs.org/api/crypto.html)

Cryptographic functionalities for:
* OpenSSL hash
* HMAC
* cipher
* decipher
* sign
* verify functions

``` javascript
const crypto = require('crypto');
```

&nbsp;
# Debugger
Source: [debugger](https://nodejs.org/api/debugger.html)

Debugging utility accessible through built-in debugging client.


&nbsp;
# DNS
Source: [dns](https://nodejs.org/api/dns.html)

Contains functions:
* `dns.lookup()` - uses os to perform name resolution without necessarily performing network communication.
* functions that connect to DNS server to perform name resolution

``` javascript
const dns = require('dns');
```


&nbsp;
# Errors
Source: [errors](https://nodejs.org/api/errors.html)

NodeJS applications experience 4 kinds of errors:
* __JavaScript Errors__ 
* __System Errors__
* __User-specific Errors__
* __Assertion Errors__


&nbsp;
# File System
Source: [fs](https://nodejs.org/api/fs.html)

For I/O operations the NodeJS fs library is used.

``` javascript
const fs = require('fs');
```

File System Methods:
* `fs.readFile(fullPath[, enc], callback)` - reads a file asynchronously and encodes it based on specified character encoding or utf-8 by default. Executes a callback after the file is read. The callback takes an `error` parameter and a `data` parameter.
* `fs.readFileSync(fullPath[, enc])` - reads a file synchronously and encodes it based on specified character encoding or utf-8 by default.

``` javascript
fs.readFile(__dirname + 'test.txt', (err, data) => {
        console.log(data.toString());
})

fs.readFileSync(__dirname + 'test.txt');
```

&nbsp;
# HTTP and HTTPS
Source:
* [http](https://nodejs.org/api/http.html)
* [http/2](https://nodejs.org/api/http2.html#http2_http_2)
* [https](https://nodejs.org/api/https.html)

A module for handling HTTP requests and sending HTTP responses.

``` javascript
const http = require('http');
const http2 = require('http2');
const https = require('https');
```
__HTTP classes__:
* `http.Agent` - manages connection persistance and reuse for HTTP clients. Has a queue of pending requests for a given host and port. 
* `http.ClientRequest` - an object returned from `http.request()` that represents a request that has already been queued and is being processed.
* `http.Server` - extends `net.Server` which is responsible for creating a TCP or IPC server
* `http.ServerResponse` - an object created by an HTTP server. Is passed as second param to `request` event and inherits from `Stream`.
* `http.IncomingMessage` - create by `Server` and `ClientRequest` and passed as first argument to `request` and `response` event.

__HTTP methods__:
* `http.createServer([options][, reqCallback])` - creates a new instance of `http.Server` with an optional callback function that handles request made to the server.

__Server methods__:
* `Server.prototype.listen(port[, host, callback])` - server listens for requests on a given port. Can specify the host name or ip(localhost by default) and a callback that is executed after the connection is established.

__IncomingMessage properties__:
* `url` - the request url string

``` javascript
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello node user\n');
}).listen(9000, () => console.log('Connected on port 9000'));

http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('This is the root');
    }
}).listen(9001);

```

&nbsp;
# Net
Source: [net](https://nodejs.org/api/net.html)

An asynchronous network API for creation of stream-based TCP server, IPC servers and clients.

``` javascript
const net = require('net');
```


&nbsp;
# OS
Source: [os](https://nodejs.org/api/os.html)

Collection of operating system utility methods.

``` javascript
const os = require('os');
```


&nbsp;
# Path
Source: [path](https://nodejs.org/api/path.html#path_path)

Enables working with file and directory paths.

``` javascript
const path = require('path');
```


&nbsp;
# Process
Source: [process](https://nodejs.org/api/process.html)

A global object containing a set of properties and methods that provide information and control over the current NodeJS process.

Features:
* is an instance of EventEmitter.


&nbsp;
# Query String
Source: [querystring](https://nodejs.org/api/querystring.html)

Utility module for parsing and formatting URL query strings.

``` javascript
const querystring = require('querystring');
```


&nbsp;
# Readline
Source: [readline](https://nodejs.org/api/readline.html)

An interface for reading data one line at a time from a Readable stream.

``` javascript
const readline = require('readline');
```


&nbsp;
# REPL
Source: [repl](https://nodejs.org/api/repl.html)

A REPL that is available as a standalone program or as a component embedded in an application.

``` javascript
const repl = require('repl');
```


&nbsp;
# Stream
Source: [stream](https://nodejs.org/api/stream.html)

Provides an interface for working with stream data. This is important to control the amount of data the is being processed at a given time.

__Features__:
* Streams are abstract objects
* Streams are linked to EventEmitter
* Streams are used to create custom streams

There are 4 types of streams:
* __Writable__ - a stream to which data can be written
* __Readable__ - a stream from which data can be read
* __Duplex__ - a stream that allows both writing to and reading from
* __Transform__ - a stream that allows writing to, reading from and data modification or transformation during reading and writing.

The type of the stream determines available operations from nodes perspective. For example a Readable Stream is probably Written to outside of the NodeJS application. It is only readable in the NodeJS application.

Streams are created using the `fs` module.
* `fs.createReadStream(filepath[, options])` - returns a readable stream. Is 64bytes long by default. Can take an options object
* `fs.createWriteStream(filepath[, options])` - returns a writable stream. Is 64bytes long by default. Can take an options object. If the file at the specified path does not exist it will be created automatically.

``` javascript
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/example.txt', {
    encoding: 'utf8',
    highWaterMark: 2 * 1024 // Stream size = 2 KB
});

const writeStream = fs.createWriteStream(__dirname + '/other.txt', {
    encoding: 'utf8',
    highWaterMark: 2 * 1024 // Stream size = 2 KB
});

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})
```

Stream methods:
* `Stream.Readable.prototype.on(event, callback)` - executes the callback when specified event is triggered. Available events:
    * `close` - when the buffer is explicitly closed
    * `data` - when the buffer passes on a chunk of data to a consumer
    * `end` - when there is no more data to be consumed
    * `error` - when an internal error occurs(invalid chunk, processing failure)
    * `readable` - when there is data available to be read
* `Stream.prototype.pipe(writable)` - pipes the read data to a writable stream. Pipe can be chained


&nbsp;
# String Decoder
Source: [string_decoder](https://nodejs.org/api/string_decoder.html)

Enables decoding `Buffer` objects into strings preserving encoded multi-byte UTF-8 and UTF-16 characters.

``` javascript
const { StringDecoder } = require('string_decoder');
```


&nbsp;
# Timers
Source: [timers](https://nodejs.org/api/timers.html)

A global API for scheduling function calls built around the NodeJS event loop.


&nbsp;
# TLS
Source: [tls](https://nodejs.org/api/tls.html)

An implementation of TLS and SSL protocols built on top of OpenSSL.

``` javascript
const tls = require('tls');
```


&nbsp;
# UDP
Source: [dgram](https://nodejs.org/api/dgram.html)

An implementation of UDP Datagram sockets.

``` javascript
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
```


&nbsp;
# URL
Source: [url](https://nodejs.org/api/url.html)

Collection of utilities for parsing and resolving URL's.

``` javascript
const url = require('url');
```


&nbsp;
# Util
Source: [util](https://nodejs.org/api/util.html)

Various utilities depeneded upon heavily by NodeJS internals.

``` javascript
const util = require('util');
```

`util.inherits(const, superConst)` - deprecated


&nbsp;
# V8
Source: [v8](https://nodejs.org/api/v8.html)

Module exposing NodeJS V8 engine specific APIs. 

Changes often, thus should be used with caution and avoided in production.

``` javascript
const v8 = require('v8');
```

&nbsp;
# VM
Source: [vm](https://nodejs.org/api/vm.html)

Module for compiling and running code in a V8 Virtual Machine.

__Warning__: this does not provide a secure isolation layer - should not be used for sandboxing

``` javascript
const vm = require('vm');
```


&nbsp;
# Zlib
Source: [stream](https://nodejs.org/api/stream.html)

Built in compression functionality. Allows gzip, deflate/inflate and brotli compression.

``` javascript
const zlib = require('zlib');

const gzip = zlib.createGzip();
    // this creates a transform stream

// transform streams are duplex
readStream.pipe(gzip).pipe(compressedFile);
```


&nbsp;
# Security
Source: 
* [risingstack security tips](https://blog.risingstack.com/node-js-security-tips/)
* [risingstack security checklist](https://blog.risingstack.com/node-js-security-checklist/)
* [OWASP Security Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

__Basic Guidelines__
1. don't use eval
    * slows down application and opens to injection attacks
    * eval is used by `eval()`, `setInterval()`, `setTimeout()`, `new Function()`
1. use __strict mode__
1. use __static code analysis__
    * JSLint, JSHint or ESLint
1. perform tests
    * lots of unit tests
    * moderate amount of integration tests
    * small amount of E2E tests
1. use an HTTP server/proxy
    * allows listening on port 80 or 443
    * use nginx or Apache
1. avoid command injection
    * especially when use child_process
1. use stream for temp files
    * large files can use up massive amounts of disk space
1. be aware of __Reflected Cross Site Scripting__
    * never insert untrusted data into the DOM
    * HTML escape before inserting
1. stop __cookie theft__
    * set the `HttpOnly` flag on cookies
1. enable __Content Security Policy__
    * done through `Content-Security-Policy` HTTP header
1. prevent __Cross-Site Request Forgery__
    1. upon `GET` request check for CSRF token
    1. create the token if one is not present
    1. when user input is shown add a hidden input with the CSRF tokens value
    1. when form is submitted make sure the token value from the form and session are a match
1. use [helmet](https://github.com/helmetjs/helmet) for express apps
1. use [retire.js](https://retirejs.github.io/retire.js/) to check for vulnerabilities across dependencies

__Configuration Management__
1. __Security HTTP headers__ - all can be set using [helmet](https://github.com/helmetjs/helmet) or in web server configuration when using a backward proxy like [nginx](https://gist.github.com/plentz/6737338)
    * `Strict-Transport-Security` - enforces secure (HTTP over SSL/TLS) connections to the server
    * `X-Frame-Options` - clickjacking protection
    * `X-XSS-Protection` - enables the Cross-site scripting (XSS) filter
    * `X-Content-Type-Options` - prevents browsers from MIME-sniffing a response away from the declared content-type
    * `Content-Security-Policy` - prevents a wide range of attacks, including Cross-site scripting and other cross-site injections
1. __Sensitive Data Client-Side__ - make sure to never expose API secrets and credentials in source code
    * use of pull requests
    * regular code reviews

__Authentication__
1. __Brute Force Protection__ - login endpoints are often susceptible to brute force attacks
    * implement [rate-limiting](https://www.npmjs.com/package/ratelimiter)
    * use a penetration test like [hydra](https://github.com/vanhauser-thc/thc-hydra)

__Session Management__
1. __Cookie Flags__
    * __secure__ - only sends cookie over HTTPS
    * __HttpOnly__ - blocks access to cookies through scripts
1. __Cookie Scope__
    * __domain__ - compares against the domain the cookie is being requested at
    * __path__ - compares against the path the cooie is being requested at
    * __expires__ - sets persistant cookies
1. __CSRF__
    * use a module for mitigating these attacks like [csrf](https://www.npmjs.com/package/csrf) for pure NodeJS and [csurf](https://www.npmjs.com/package/csurf) if using Express

__Data Validation__
1. __XSS__ - can be JS injected into HTML response or JS injected into stored user input
    * always filter/sanitize user input
1. __SQL Injection__
    * use parametrized queries
    * use prepared statements
    * use a sql penetration test like [sqlmap](http://sqlmap.org/)
1. __Command Injection__ - technique used to run OS commands on a remote web server
    * filter and sanitize user input
    * use `child_process.execFile` over `child_process.exec` when using the [Child Process](#child-process) module.

__Secure Transmisssion__
1. __SSL Version, Algorithms, Key Length__
    * check that cipher, key and renegotiation are properly configured
    * test certificate validity
    * this can be achieved through the use of [nmap](https://nmap.org/) and [sslyze](https://github.com/iSECPartners/sslyze)
    ``` shell
    nmap --script ssl-cert,ssl-enum-ciphers -p 443,465,993,995 www.example.com

    ./sslyze.py --regular example.com:443
    ```
1. __HSTS__
    * test the `Strict-Transport_Security` header
    ``` shell
    curl -s -D- https://example.com/ | grep -i Strict
    ```

__Denial of Service__
1. __Account Lockout__ - mitigate brute force guessing attacks prohibiting login after a small number of unsuccessful login attempts
    * use the rate-limiter pattern
1. __Regular Expression__ - mitigate harmful `Evil Regexes` that have grouping with repetition and alternation with overlapping
    * use tools like [safe-regex](https://www.npmjs.com/package/safe-regex)

__Error Handling__
* an error stack may leak sensitive data
* always log errors
* do not show them to the users

__NPM__\
Packages can often contain vulnerabilities. Use with caution and audit them with various tools
1. __Node Security Project__ - a tool that allows checking used packages for known vulnerabilities
    ``` shell
    npm i nsp -g

    # either audit the shrinkwrap
    nsp audit-shrinkwrap

    # or the package.json
    nsp audit-package
    ```
1. __Snyk__ - detects vulnerabilities and attempts to fix them - [snyk.io](https://snyk.io/)

&nbsp;
# Database Integration
Popular database integrations.

__Source__: [expressjs](http://expressjs.com/en/guide/database-integration.html)

## Cassandra
__Module__: `cassandra-driver`

__Installation__
``` shell
$ npm install cassandra-driver
```

__Example__
``` javascript
var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['localhost'] })

client.execute('select key from system.local', function (err, result) {
    if (err) throw err
    console.log(result.rows[0])
})
```


## Couchbase
__Module__: couchnode

__Installation__
``` shell
$ npm install couchbase
```

__Example__
``` javascript
var couchbase = require('couchbase')
var bucket = (new couchbase.Cluster('http://localhost:8091')).openBucket('bucketName')

// add a document to a bucket
bucket.insert('document-key', { name: 'Matt', shoeSize: 13 }, function (err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})

// get all documents with shoe size 13
var n1ql = 'SELECT d.* FROM `bucketName` d WHERE shoeSize = $1'
var query = N1qlQuery.fromString(n1ql)
bucket.query(query, [13], function (err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})
```

## CouchDB
__Module__: nano

__Installation__
``` shell
$ npm install nano
```

__Example__
``` javascript
var nano = require('nano')('http://localhost:5984')
nano.db.create('books')
var books = nano.db.use('books')

// Insert a book document in the books database
books.insert({ name: 'The Art of war' }, null, function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
})

// Get a list of all books
books.list(function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body.rows)
  }
})
```

## LevelDB
__Module__: levelup

__Installation__
``` shell
$ npm install level levelup leveldown
```

__Example__
``` javascript
var levelup = require('levelup')
var db = levelup('./mydb')

db.put('name', 'LevelUP', function (err) {
  if (err) return console.log('Ooops!', err)

  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err)

    console.log('name=' + value)
  })
})
```

## MySQL
__Module__: mysql

__Installation__
``` shell
$ npm install mysql
```

__Example__
``` javascript
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7',
  database : 'my_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
```

## MongoDB
__Module__: mongodb

__Installation__
``` shell
$ npm install mongodb
```
__Example (v2.*)__
``` javascript
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
```

__Example (v3.*)__
``` javascript
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
  if (err) throw err

  var db = client.db('animals')
  
  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
```

If you want an object model driver for MongoDB, look at Mongoose.


## Neo4j
__Module__: apoc

__Installation__
``` shell
$ npm install apoc
```

__Example__
``` javascript
var apoc = require('apoc')

apoc.query('match (n) return n').exec().then(
  function (response) {
    console.log(response)
  },
  function (fail) {
    console.log(fail)
  }
)
```

## Oracle
__Module__: oracledb

__Installation__
``` shell
$ npm install oracledb
```

__Example__
``` javascript
const oracledb = require('oracledb');
const config = {
  user: '<your db user>',                // Update me
  password: '<your db password>',        // Update me
  connectString: 'localhost:1521/orcl'   // Update me
};

async function getEmployee(empId) {
  let conn;

  try {
    conn = await oracledb.getConnection(config);

    const result = await conn.execute(
      'select * from employees where employee_id = :id',
      [empId]
    );

    console.log(result.rows[0]);
  } catch (err) {
    console.log('Ouch!', err);
  } finally {
    if (conn) { // conn assignment worked, need to close
       await conn.close();
    }
  }
}

getEmployee(101);
```

## PostgreSQL
__Module__: pg-promise

__Installation__
``` shell
$ npm install pg-promise
```

__Example__
``` javascript
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
```

## Redis
__Module__: redis

__Installation__
``` shell
$ npm install redis
```

__Example__
``` javascript
var redis = require('redis')
var client = redis.createClient()

client.on('error', function (err) {
  console.log('Error ' + err)
})

client.set('string key', 'string val', redis.print)
client.hset('hash key', 'hashtest 1', 'some value', redis.print)
client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)

client.hkeys('hash key', function (err, replies) {
  console.log(replies.length + ' replies:')

  replies.forEach(function (reply, i) {
    console.log('    ' + i + ': ' + reply)
  })

  client.quit()
})
```

## SQL Server
__Module__: tedious

__Installation__
``` shell
$ npm install tedious
```

__Example__
``` javascript
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
  userName: 'your_username', // update me
  password: 'your_password', // update me
  server: 'localhost'
}

var connection = new Connection(config);

connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    executeStatement();
  }
});

function executeStatement() {
  request = new Request("select 123, 'hello world'", function(err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
    connection.close();
  });

  request.on('row', function(columns) {
    columns.forEach(function(column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        console.log(column.value);
      }
    });
  });

  connection.execSql(request);
}
```

## SQLite
__Module__: sqlite3

__Installation__
``` shell
$ npm install sqlite3
```

__Example__
``` javascript
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
})

db.close()
```

## ElasticSearch
__Module__: elasticsearch

__Installation__
``` shell
$ npm install elasticsearch
```

__Example__
``` javascript
var elasticsearch = require('elasticsearch')
var client = elasticsearch.Client({
  host: 'localhost:9200'
})

client.search({
  index: 'books',
  type: 'book',
  body: {
    query: {
      multi_match: {
        query: 'express js',
        fields: ['title', 'description']
      }
    }
  }
}).then(function (response) {
  var hits = response.hits.hits
}, function (error) {
  console.trace(error.message)
})
```

&nbsp;
# Misc

## Experimental API's
* [async hooks](https://nodejs.org/api/async_hooks.html)
* [inspector](https://nodejs.org/api/inspector.html)
* [performance hooks](https://nodejs.org/api/perf_hooks.html)
* [policies](https://nodejs.org/api/policy.html)
* [report](https://nodejs.org/api/report.html)
* [tracing](https://nodejs.org/api/tracing.html)
* [worker_threads](https://nodejs.org/api/worker_threads.html)


## Simple API Gateway
Source: [hackernoon](https://hackernoon.com/creating-simple-api-gateway-using-node-js-6d5933c214b8)

## Watch files with node
Source: [thisdavej](https://thisdavej.com/how-to-watch-for-files-changes-in-node-js/)

## Local Test Server
Sources:
* [hackernoon](https://hackernoon.com/build-your-first-local-server-and-web-app-with-node-js-5a5d9e00aff0)
* [websiteforstudents](https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/)
* [itsfoss](https://itsfoss.com/install-linux-in-virtualbox/)

## Process Manager
A tool that facilitates:
* deployment
* high availability
    * restarts app upon failure
    * control clustering
* application runtime monitoring
    * statistics on runtime performance, resource consumption
    * dynamically modify settings

It is important to use a __Process Manager__ when running a NodeJS application. Some popular solutions are:
* [Forever](https://github.com/foreverjs/forever) - cli tool for running a script continuously
* [PM2](https://github.com/Unitech/pm2) - built-in load balancer, keep-alive, automatic reload, logging, monitoring, clustering
* [Strong-PM](http://strong-pm.io/) - load balancing, monitoring, mult-host deployment, cli tool for building, packaging and deploying node apps
* [SystemD](https://www.axllent.org/docs/view/nodejs-service-with-systemd/) - native Linux process manager

## Integration with Python
__Source__: [Laurence Holmes](https://medium.com/@HolmesLaurence/integrating-node-and-python-6b8454bfc272)