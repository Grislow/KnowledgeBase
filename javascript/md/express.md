Library that runs in the Node runtime. Makes dealing with HTTP traffic easier. Intercepts HTTP requests caught by a node server and sends them to apropriate [Route Handlers](#route-handler) which generate a response and send it back.

Source: 
* [Official docs](http://expressjs.com/)
* [frameworks](https://github.com/Raynos/http-framework#modules)
* [utility modules](http://expressjs.com/en/resources/utils.html)

#### Table of contents

* [Setup](#setup)
* [Listening on a port](#listening-on-a-port)
* [Routing](#routing)
    * [Route Methods](#route-methods)
    * [Route Paths](#route-paths)
    * [Route Parameters](#route-parameters)
    * [Route Handlers](#route-handlers)
    * [Modular Route Handlers](#modular-route-handlers)
* [Application Object](#application-object)
    * [Application Properties](#application-properties)
    * [Application Methods](#application-methods)
    * [Application Settings](#application-settings)
* [Request Object](#request-object)
    * [Request Properties](#request-properties)
    * [Request Methods](#request-methods)
* [Response Object](#response-object)
    * [Response Properties](#response-properties)
    * [Edit Response Methods](#edit-response-methods)
    * [Terminating Methods](#terminating-methods)
* [Static Files](#static-files)
    * [Options](#options)
* [Middleware](#middleware)
    * [Application-Level Middleware](#application-level-middleware)
    * [Router-Level Middleware](#router-level-middleware)
    * [Error-Handling Middleware](#error-handling-middleware)
    * [Built-In Middleware](#built-in-middleware)
    * [Third-Party Middleware](#third-party-middleware)
* [Template Engines](#template-engines)
* [Error Handling](#error-handling)
* [Debugging](#debugging)
* [Proxy](#proxy)
* [Best Practices](#best-practices)
    * [Security](#security)
    * [Performance](#performance)

&nbsp;
# Setup
Install through npm.

``` bash
npm install express --save
```

Include in node application using CommonJS modules since NodeJS doesn't natively support ES6 modules.

``` javascript
const express = require('express');

const app = express();
```

&nbsp;
# Listening on a port

`app.listen(portNum[, callback])` - Instructs the node server to listen on a specific port. Optionally runs a callback after it starts listening.

``` javascript
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
```

&nbsp;
# Routing
Handle specific types of requests, like authentication, log out, or a survey submit.

__Syntax__: `app.method(route, handler(req, res){ body }`
* __app__ - instance of `express`
* __method__ - the http method the route handler is set to listen for
* __route__ - a specific endpoint
* __handler__ - function that is executed when the route is matched
* __req__ - an object representing the received http request
* __res__ - an object representing the outgoing http response
* __body__ - logic handling the http request and response

``` javascript
app.get('/', (req, res) => {
    res.send({ data: 'this is sent back to the browser' });
});

app.post('/', (req, res) => {
    res.send('POST request received');
});
```

## Route Methods
Routing supports all HTTP methods.

There are special methods corresponding to the most popular HTTP methods:
* `app.get()`
* `app.post()`
* `app.put()`
* `app.delete()`

Other methods are supported through the bracket notation:
* `app['checkout']()`
* `app['copy']()`
* `app['head']()`
* `app['lock']()`
* `app['merge']()`
* `app['mkactivity']()`
* `app['mkcol']()`
* `app['move']()`
* `app['m-search']()`
* `app['notify']()`
* `app['options']()`
* `app['patch']()`
* `app['purge']()`
* `app['report']()`
* `app['search']()`
* `app['subscribe']()`
* `app['trace']()`
* `app['unlock']()`
* `app['unsubscribe']()`

There is also a catch all method that responds to all HTTP methods:
* `app.all()`

``` javascript
app.get('/', function (req, res) {
    res.send('This is the Homepage');
})

app.post('/', function (req, res) {
    res.send('Posting to the homepage');
})

app['lock']('/', function (req, res) {
    res.send('Lock method on homepage');
})

app.all('/admin', function (req, res) {
    res.send('Sending this no matter the request type');
})
```

## Route Paths
Defines the endpoints at which request are made.  

A route path can be a:
* string* string pattern
    * `?` - matches preceding element 0 or 1 times
    * `+` - matches preceding element 1 or more times
    * `*` - matches preceding element 0 or more times
    * `()` - treats a subexpression as a single element
* regular expression

Query strings are not included in the route during matching.

``` javascript

app.get('/howdy', (req, res) => {
    res.send('a string route path');
})

app.get('/a(bc)+', (req, res) => {
    res.send('a string pattern route path');
});

app.get(/cents$/, (req, res) => {
    res.send('a regular expression route path');
})

```

## Route Parameters
You can pass parameters as URL segments using a colon `'/someRoute/:param'`. These parameters are then available on the `req.params` property.

A parameter must be made of word characters:
* `A-Z`
* `a-z`
* `0-9`
* `_`

``` javascript
app.get('/users/:user/:post', (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>${req.params.user}</h1>
                <p>${req.params.post}</p>
            </body>
        </html>
    `)
});
```

## Route Handlers
You can use multiple handlers to handle a single request. Passing control from one handler to another is done through the `next()` function.

Multiple handlers can be as:
* an array
* an independent arguments
* arrays and independent arguments

``` javascript
function one(req, res, next) {
    console.log('do something here');
    next();
}

function two(req, res, next) {
    console.log('do something else');
    next();
}

function three(req, res) {
    res.send('Sending the response');
}

// array
app.get('/test1', [one, two, three]);

// independent arguments
app.get('/test2', (req, res, next) => {
    console.log('Executing first handler');
    next();
}, (req, res) => {
    res.send('this is called last');
})

// combination
app.get('/test3', (req, res, next) => {
    console.log('Executing first handler');
    next();
}, (req, res, next) => {
    console.log('then this is called');
    next();
}, [one, two, three]);
```

You can chain route handlers using `app.route()`

``` javascript
app.route('/cd')
    .get((req, res) => {
        res.send('Get the requested CD');
    })
    .post((req, res) => {
        res.send('Add a new CD');
    })
    .put((req, res) => {
        res.send('Update an existing CD');
    })
```

## Modular Route Handlers
Modular, self-contained routers can be created using the `express.Router` class. These are often referred to as a "mini-app" since a route module can contain both middleware and routing.

``` javascript
const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

router.get('/job', (req, res) => {
    res.send('Find the dream job');
})

module.exports = router;
```

This can be used in the app as following:

``` javascript
const express = require('express');
const job = require('./jobRouter');

const app = express();

app.use('/jobfind', job);
```

&nbsp;
# Application Object
The `app` object represents the Express application.

``` javascript
const express = require('express');
const app = express();
```

Applications can be setup in a hierarchical fashion with a parent application making use of child applications.

When a child application is mounted a `mount` event is triggered and a callback function can be made to execute as a response.

``` javascript
const express = require('express');
const student = express();

student.on('mount', parent => {
    console.log('Student mounted on ' + parent);
})

student.get('/', (req, res) => {
    res.send('Student homepage');
})

app.use('/student', student);

```

## Application Properties
`app.locals` - stores variables local for the application. These variables persist throughout the life cycle of the application. This are then available in the middleware through `req.app.locals`

`app.mountpath` - contains the path patterns on which a sub-app was mounted.

``` javascript
const express = require('express');
const app = express();

// locals
app.locals.log = (()=> {
    let count = 0;
    return () => ++count;
})();

app.get('/', (req, res) => {
    req.send(req.app.locals.log());
});

// mountpath
const subApp = express();

subApp.get('/', (req, res) => {
    console.log(subApp.mountpath);          // [ '/example', '/otherroute' ]
})

app.use(['/example', '/otherroute'], subApp);

```

## Application Methods
__Routing Methods__\
More on these in the [Routing](#Routing) section
* `app.all(path, callback1[, ... , callbackN])` - routes all HTTP requests made to a given path
* `app.delete(path, callback1[, ... , callbackN])` - routes DELETE HTTP request made to a given path
* `app.post(path, callback1[, ... , callbackN])` - routes POST HTTP request made to a given path
* `app.put(path, callback1[, ... , callbackN])` - routes PUT HTTP request made to a given path
* `app.get(path, callback1[, ... , callbackN])` - routes GET HTTP request made to a given path

__Setting Methods__\
More on these in the [application settings](#application-settings) section.
* `app.get(settingName)` - returns the value of a application setting
* `app.disable(settingName)` - sets an application settings value to `false`
* `app.disabled(settingName)` - returns a `Boolean` value indicating if a setting is disabled(value === false)
* `app.enable(settingName)` - sets an application settings value to `true`
* `app.enabled(settingName)` - returns a `Boolean` value indicating if a setting is enabled(value === true)
* `app.engine(ext, function)` - maps a template engine render function to a file extension. Express will perform this operation implicitly based on a files extension. This is useful when creating your own template engine.
* `app.set(name, value)` - sets an application settings value

__Other Methods__\
* `app.listen([port, host, backlog, callback])` - application listens for connections on a sepcific host and port. If `port` is omitted an arbitrary unused port is assigned by default. This method returns an `http.Server` object native to NodeJS.
* `app.param([param], callback)` - triggers a callback when a specific parameter or parameters are present in a route. The parameters of the callback are:
    1. `req` - the request object
    1. `res` - the response object
    1. `next` - the next middleware
    1. `val` - the value of the parameter
    1. `name` - the name of the parameter
* `app.path()` - returns a String representing the canonical path of the app 
* `app.render(view, [locals], callback)` - renders a view using a callback and returns it. Can optionally pass parameters to the template. Does not send the rendered view to the client - for that use `res.render()` which uses `app.render()` internally.
* `app.route(path)` - return an instance of a route. This can be used for cleaner code and avoiding duplicate route names.
* `app.use([path], callback1[, ... , callbackN])` - mounts middleware on a specified path or all paths if path was not passed. For more see the [middleware](#middleware) section.

``` javascript
const express = require('express');
const https = require('https');
const app = express(),
      admin = express();

app.use('/admin', admin);

/*
    app.path()
*/
console.log(app.path());                // ""
console.log(admin.path());              // "/admin"

/*
    app.param()
*/
// single param
app.param('user', (req, res, next, val, name) => {
    console.log(`value: ${val}`);
    console.log(`name: ${name}`);
    next();
})
// multiple params
app.param(['user', 'post'], (req, res, next, val, name) => {
    console.log(`value: ${val}`);
    console.log(`name: ${name}`);
    next();
})

/*
    app.route()
*/
app.route('/users')
    .all((req, res, next) => {
        // do something for all HTTP methods
    })
    .get((req, res, next) => {
        // do something for GET HTTP methods
    })
    .post((req, res, next) => {
        // do something for POST HTTP methods
    })
    .delete((req, res, next) => {
        // do something for DELETE HTTP methods
    })

/*
    app.listen()
*/
// passing it to NodeJS createServer method
https.createServer(options, app).listen(3000);

// listening through app instance
app.listen(1227, '127.0.0.1');
```

## Application Settings
The application can be setup in various ways.

Sub-apps only inherit:
* `case sensitive routing`
* `json escape`
* `json replacer`
* `json spaces`
* `strict routing`
* `trust proxy`
* `view cache` - in production only

|Setting Name|Type|Description|Values|Default|
|------------|----|-----------|------|-------|
|`case sensitive routing`|Boolean|Route matching is case sensitive|`true` \| `false`| `undefined`|
|`env`|String|Sets environment mode|`"production"` \| `"development"`| `"development"`|
|`etag`|Varied|Sets the ETag response header|`true` \| `false` \| `"strong"` \| `"weak"`| `true`|
|`jsonp callback name`|String|Sets the default JSONP callback name|any valid JS identifier| `"callback"`|
|`json escape`|Boolean|Enables escaping special characters like `<`, `>`, `&` in JSON responses from `res.json`, `res.jsonp`, `res.send`. Important for mitigating XSS attacks |`true` \| `false`| `undefined`|
|`json replacer`|Varied|The `replacer` argument in `JSON.stringify` used internally when parsing JSON data|any valid JS identifier| `undefined`|
|`json spaces`|Varied|The `space` argument in `JSON.stringify` used internally when parsing JSON data|any valid JS identifier| `undefined`|
|`query parser`|Varied|`false` disables query parsing; `simple` sets [querystring](https://nodejs.org/api/querystring.html) as the parser; `extended` sets [qs](https://www.npmjs.com/package/qs) as the parser; can also define own function for handling query parsing|`false` \| `simple` \| `extended` \| Function| `"extended"`|
|`strict routing`|Boolean|Enables strict routing where `/home/` and `/home` are treated as seperate routes|`true` \| `false`| `undefined`|
|`subdomain offset`|Number|Number of dot-seperated parts are removed from hostname to access subdomain|any valid integer| `2`|
|`trust proxy`|Varied|More on this in [Proxy](#proxy) section|see [here](#proxy)| `false`|
|`views`|String or Array|A directory or collection of directories where the system looks for template files|any valid file path| `process.cwd() + '/views'`|
|`view cache`|Boolean|Enables caching of view template compilation|`true` \| `false`| `true` in production; `undefined` anywhere else|
|`view engine`|String|The default view engine used for template files without specified extension|Any valid file extension| `undefined`|
|`x-powered-by`|Boolean|Enables the "X-Powered-By: Express" HTTP header|`true` \| `false`| `true`|

``` javascript
const express = require('express');
const app = express();

app.set('case sensitive routing', true);
app.set('etag', 'strong');
app.disable('x-powered-by');
```

&nbsp;
# Request Object
The `req` object represents an incoming HTTP request.

__Warning__: to access uploaded files on a request object use a multipart handling middleware like [busboy](https://www.npmjs.com/package/busboy) or [multer](https://www.npmjs.com/package/multer)

## Request Properties
* `req.app` - a reference to the application using the middleware handling the request
* `req.baseUrl` - the path that was matched by the request
* `req.body` - contains key-value pairs submitted in the request body. Is populated with data only through a [body-parsing middleware](https://www.npmjs.com/package/body-parser).
* `req.cookies` - used in conjunction with [cookie-parser](https://www.npmjs.com/package/cookie-parser) middleware to store cookies sent by the request
* `req.fresh` - returns a boolean value indicating if the request is fresh. A request is fresh if:
    * if `cache-control` request header doesn't have a `no-cache` directive\
    AND
    * `last-modified` is equal to or earlier than `if-modified-since` header\
    OR
    * `if-none-match` header value is `*`\
    OR
    * `if-none-match` after being parsed into its directives does not match `etag` response header
* `req.hostname` - contains the hostname from the `Host` HTTP header. If a proxy server is used hostname value is determined by the `X-Forwarded-Host` header field.
* `req.ip` - contains remote ip address of the request. If a proxy server is used ip value is determined by the `X-Forwarded-For` header field.
* `req.ips` - If a proxy server is used contains the list of ip address in `X-Forwarded-For` header field. Otherwise returns an empty array.
* `req.method` - a String representing the HTTP method used
* `req.originalUrl` - contains the original request URL. In middleware this is a combination of `req.baseUrl` and `req.path`
* `req.params` - an object containing route parameters as key-value pairs. To change request parameters use `app.param()`. Changes made directly to `req.params` are reset.
* `req.path` - contains the path part of the request URL.
* `req.protocol` - contains a string representing the request protocol - `"http" | "https"`
* `req.query` - contains a string with all query string parameters as key-value pairs.
* `req.route` - contains a reference to the `express.Route` object handling the request
* `req.secure` - boolean value indicating if the connection is secure - `'https' === req.protocol`
* `req.signedCookies` - used in conjunction with [cookie-parser](https://www.npmjs.com/package/cookie-parser) middleware to store signed cookies sent by the request
* `req.stale` - returns a boolean value indicating if the request is stale - `!req.fresh`
* `req.subdomains` - array of subdomains in the domain name of the request
* `req.xhr` - boolean value indicating if the requests `X-Requested-With` header value is `XMLHttpRequest`

``` javascript
const express = require('express');
const app = express();
const request = express();

app.use('/request', request);

// request url -> http://localhost:3000/request/aaa/1234?t=12345
request.all('/:param1/:param2', (req, res) => {
    console.log(req.app.get('etag'));           // weak
    console.log(req.baseUrl);                   // /request
    console.log(req.fresh);                     // false
    console.log(req.hostname);                  // localhost
    console.log(req.ip);                        // ::1
    console.log(req.ips);                       // []
    console.log(req.method);                    // GET
    console.log(req.originalUrl);               // /request/aaa/1234?t=12345
    console.log(req.params);                    // { param1: 'aaa', param2: '1234' }
    console.log(req.path);                      // /aaa/1234
    console.log(req.protocol);                  // http
    console.log(req.query);                     // { t: '12345' }
    console.log(req.secure);                    // false
    console.log(req.stale);                     // true
    console.log(req.subdomains);                // []
    console.log(req.xhr);                       // false
    res.end();
})
```

## Request Methods
* `req.accepts(types)` - checks if the specified content types are acceptable according to the `Accept` HTTP header. Can pass mime type string, extension string or multiple strings in an array. Returns `false` if no match is found or a string representing the best match.
* `req.acceptsCharsets(charset1[, ... , charsetN])` - returns the first accepted charset from specified charsets based on request `Accept-Charset` HTTP header field.
* `req.acceptsEncodings(encoding1[, ... , encodingN])` - returns the first accepted encoding from passed arguments based on request `Accept-Encoding` HTTP header field.
* `req.acceptsLanguages(lang1[, ... , langN])` - returns the first accepted language from passed arguments based on request `Accept-Language` HTTP header field.
* `req.get(field)` - returns the value of a specified HTTP request header field
* `req.is(type)` - returns a boolean value indicating if the request `Content-Type` HTTP header matches the passed type string.
* `req.range(size, [, options])` - parses a range of data. The size specifies the maximum size of parsed data. Options is an object that can have a  boolean `combine` property, that specifies if overlapping / adjacent ranges should be combined. Returns:
    * `-2` if header string is malformed
    * `-1` if specified range is unsatisfiable
    * an array of ranges

``` javascript
const express = require('express');
const app = express();

app.all('/methods', (req, res) => {
    /* 
        accepts()
    */
    // Accept HTTP Header
    console.log(req.get('Accept'));
        // text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    
    // extensions
    console.log(req.accepts('html'));               // html
    
    // mime type
    console.log(req.accepts('application/json'));   // application/json
    
    // array
    console.log(req.accepts(['text', 'json', 'xml']));
                                                    // xml
})
```

&nbsp;
# Response Object
The `res` object represents an HTTP response.

## Response Properties
* `res.app` - a reference to the application using the middleware sending the response
* `res.headersSent` - boolean value indicating if the app sent HTTP headers for the response
* `res.locals` - stores variables local for the request. Good for exposing request level variables

``` javascript
app.use(function(req, res, next){
  res.locals.user = req.user;
  res.locals.authenticated = ! req.user.anonymous;
  next();
});

app.get('/', function (req, res) {
  console.log(res.headersSent); // false
  res.send('OK');
  console.log(res.headersSent); // true
});
```

## Edit Response Methods
Methods that enable editing the HTTP response, without terminating the request-response cycle.

__Methods__: \
* `res.append(field[, value])` - sets the value of an HTTP response header field. Calling `res.sent()` after calling `res.append()` will reset the header value.
* `res.attachment([filename])` - sets the HTTP response `Content-Disposition` header field to `attachment`. If filename was given also sets the `filename` parameter for the `Content-Disposition` header field.
* `res.cookie(name, value, [options])` - sets the HTTP response `Set-Cookie` header. Options are:
    * __domain__ - domain name of the cookie.
        * _type_ - `String`
        * _default_ - app domain name
    * __encode__ - function used for cookie value encoding
        * _type_ - `Function`
        * _default_ - `encodeURIComponent`
    * __expires__ - the cookie expiration date in GMT
        * _type_ - `Date`
        * _default_ - creates a session cookie
    * __httpOnly__ - determines if cookie can only be accessed by the web server
        * _type_ - `Boolean`
        * _default_ - false
    * __maxage__ - sets expiration date relative to the current time in milliseconds
        * _type_ - `Number`
        * _default_ - creates a session cookie
    * __path__ - path for the cookie
        * _type_ - `String`
        * _default_ - `"/"`
    * __secure__ - determines if cookie can only be accesed through HTTPS
        * _type_ - `Boolean`
        * _default_ - false
    * __signed__ - determines if the cookie requires a signature
        * _type_ - `Boolean`
        * _default_ - false
    * __sameSite__ - sets value of the `SameSite` Set-Cookie parameter
        * _type_ - `Boolean` or `String`
        * _default_ - undefined
* `res.clearCookie(name, [options])` - clears the cookie with the specific name. Accepts same options as `res.cookie()` method
* `res.format(object)` - uses an object to specify how different content types are handled. The object contains properties which have a mime type string as a key and a handler function as a value. Uses the `req.accepts()` to determine the content type and matches it with a key belonging to the object. If the content type is matched with the one of the objects keys automatically changes the `Content-Type` response header.
* `res.get(field)` - returns the value of a HTTP response header field
* `res.links(links)` - populates the HTTP response header `Link` field with the `links` objects properties
* `res.location(path)` - sets the value of the HTTP response header `Location` field.
* `res.set(field[, value])` - sets the value of a specific HTTP response header field.
* `res.status(code)` - sets the HTTP response status. Returns the `res` object which makes it chainable.
* `res.type(type)` - sets the `Content-Type` HTTP response header
* `res.vary(field)` - adds a field to the HTTP response header `Vary` field

``` javascript
const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    console.log(res.get('Set-Cookie'));
        // foo=bar; Path=/; HttpOnly

    res.attachment('files/logo.png');
    console.log(res.get('Content-Disposition'));
        // attachment; filename="logo.png"
    console.log(res.get('Content-Type'));
        // image/png

    res.cookie('user','1001234');
    console.log(res.get('Set-Cookie'));
        // [ 'foo=bar; Path=/; HttpOnly', 'user=1001234; Path=/' ]

    res.clearCookie('foo');
    console.log(res.get('Set-Cookie'));
        /*
            [ 'foo=bar; Path=/; HttpOnly',
            'user=1001234; Path=/',
            'foo=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT' ]
        */

    res.links({
        next: 'http://example.com/products?page=3',
        last: 'http://example.com/products?page=10'
    });
    console.log(res.get('Link'));
        /*
            <http://example.com/products?page=3>; rel="next", 
            <http://example.com/products?page=10>; rel="last"
        */

    res.location('https://example.io');
    console.log(res.get('Location'));
        // https://example.io

    res.set('Content-Type', 'text/html');
    console.log(res.get('Content-Type'));
        // text/html; charset=utf-8

    res.type('png');
    console.log(res.get('Content-Type'));
        // image/png
    
    res.vary('User-Agent');
    console.log(res.get('Vary'));
        // User-Agent

    res.format({
        'text/plain': function(){
            res.send('Hello');
        },
        'text/html': function(){
            res.send('<h1>Hello</h1>');
        },
        'application/json': function(){
            res.send({ message: 'Hello' });
        },
        'default': function(){
            res.status(403).end();
        }
    });
})
```

## Terminating Methods
Calling any of these methods terminates the request-response cycle.

__Warning__: not calling any of these methods results in a hung client request.

__Methods__: \
* `res.download(path[, filename, options, fn])` - prompt a file to be downloaded. Uses `res.sendFile()` to transfer the file. Optional __filename__(path by default), __options__ same as `res.sendFile()` and __callback function__ for error handling.
* `res.end()` - end the response process. Use to end without passing any data or status.
* `res.json([body])` - sends a JSON response. Automatically converts an object to JSON format
* `res.jsonp([body])` - sends a JSON response with JSONP support. Automatically converts an object to JSON format
* `res.redirect([status, ] path)` - redirect a request. Can be a relative path, absolute path or URL.
* `res.render(view[, locals][, callback])` - render a view template. Can pass the view local variables through the __locals__ parameter. An optional __callback__. This callback takes an __error__ parameter and an __html__ parameter. The html parameter is the rendered view as a string. If the callback is specified the view has to be sent explicitly through `res.send(html)`
* `res.send(body)` - send a response of various types
* `res.sendFile(path[, options][, fn])` - send a file as an octet stream. Sets the `Content-Type` response header based on the file extension. `path` must be an absolute path unless `root` options is set. Can pass a callback function that is executed after the file is sent. Possible options are:
    * __maxAge__ - sets max-age property of the `Cache-Control` header in milliseconds or a string in [ms](https://www.npmjs.com/package/ms) format.
        * _type_ - `Number` or `String`
        * _default_ - 0
    * __root__ - root dir for relative filenames
        * _type_ - `String`
    * __lastModified__ - sets whether the `Last-Modified` header is automatically updated with last modified date of the file on the OS.
        * _type_ - `Boolean`
        * _default_ - true
    * __headers__ - object containing HTTP headers to serve with the file
        * _type_ - `Object`
    * __dotfiles__ - options for serving dot files, takes `allow`, `deny` or `ignore` as values
        * _type_ - `String`
        * _default_ - `ignore`
    * __acceptRanges__ - enables or disables accepting ranged requests
        * _type_ - `Boolean`
        * _default_ - `true`
    * __cacheControl__ - enables or disables setting `Cache-Control` response header
        * _type_ - `Boolean`
        * _default_ -  `true`
    * __immutable__ - enables or disables the immutable directive in the `Cache-Control` response header.
        * _type_ - `Boolean`
        * _default_ - false
* `res.sendStatus(statusCode)` - set the response status code and its string representation as the response body. Combines `res.status()` and `res.send()`


``` javascript
app.get('/download', (req, res) => {
    res.download('/some-file.pdf', (err) => {
        if(err) {
            // careful with error handling - response might be partially sent
        }
    });
})

app.get('/end', (req, res) => {
    res.end();
})

app.get('/json', (req, res) => {
    res.json({ prop: 123456, val: 'some value'});
})

app.get('/jsonp', (req, res) => {
    res.jsonp({ prop: 123456, val: 'some value'});
})

app.get('/redirect', (req, res) => {
    res.redirect(301, 'http://google.com');
})

app.get('/render', (req, res) => {
    res.render('index', { title: 'Awesome Website' }, (err, html) => {
        res.send(html); // this is mandatory if the callback is specified
    })
})

app.get('/send', (req, res) => {
    res.send({ data: 12345678 });
})

app.get('/sendStatus', (req, res) => {
    res.sendStatus(200);  
})
```

&nbsp;
# Static Files
Serving static files is done through the `express.static` middleware.

The middleware function takes two arguments:
* __root__ - specifies the directory from which to server files. Paths are relative to directory from which the node process is run.
* __options__ - an object that allows configuring how static files are handled. 

Use an absolute root if the express app is run from a different directory.

`app.use()` also takes a virtual path which can be used in static file request paths `<img src="/virtual_path/kitten.png">`

``` javascript
// serve static files from /public and /otherDir
app.use(express.static('public'));
app.use(express.static('otherDir'));

// pass an absolute path as root
app.use(express.static(path.join(__dirname, 'static')));

// virtual path
app.use('/assets', express.static('someDir'));
```

## Options

* __dotfiles__ - how to treat files and directories that begin with a dot like `.gitignore`
    * __type__: `String` 
    * __default__: `ignore`
    * __values__:
        * _allow_ - no special treatment
        * _deny_ - deny the request, send `403` and invoke `next()`
        * _ignore_ - ignore the request, send `404` and invoke `next()`
* __etag__ - determine if etags are generated. Etags are a caching mechanism
    * __type__: `Boolean`
    * __default__: `true`
    * __values__: `true` or `false`
* __extensions__ - file extension fallback
    * __type__: mixed
    * __default__: `false`
    * __values__:
        * ['html', 'htm']
* __fallthrough__ - sets whether client errors silently fail. If `true` errors cause middleware to call `next()`
    * __type__: `Boolean`
    * __default__: `true`
* __immutable__ - enable or disables `immutable` directive in the `Cache-Control` response header.
    * __type__: `Boolean`
    * __default__: `false`
* __index__ - sends a specified directory index file
    * __type__: mixed
    * __default__: `index.html`
    * __values__:
        * `false` - disables directory indexing
* __lastModified__ - sets the `Last-Modified` header to the last modified date of the file
    * __type__: `Boolean`
    * __default__: `true`
* __maxAge__ - sets the `max-age` property of the `Cache-Control` header in milliseconds
    * __type__: `Number` or `String`
    * __default__: `0`
* __redirect__ - if `true` redirects to trailing `/` when pathname is a directory
    * __type__: `Boolean`
    * __default__: `true`
* __setHeaders__ - function for setting HTTP header to serve with file
    * __type__: `Function`
    * __default__: none

``` javascript
app.use(express.static('public', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'html'],
    index: 'index.html',
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}))

```

&nbsp;
# Middleware
A function that has access to the `req` object, `res` object and can pass contol flow through the `next()` function. 

`next()` passes control flow to the next middleware function.

``` javascript
const express = require('express');
const app = express();

// use() sets the middleware function for every route
app.use(function timeLog (req, res, next) {
  console.log('Time: ', (new Date()).toLocaleString());
  next();
});
```

The __order__ in which middleware functions are declared is the same as the order they are executed in.

``` javascript
app.use((req, res, next) => {
    console.log('Executes first');
    next();
})

app.use((req, res, next) => {
    console.log('Executes second');
    next();
})

app.get('/', (req, res) => {
    res.send('responsing to landing page route');
})

app.use((req, res, next) => {
    console.log('this only executes for unhandled routes');
    next();
})
```

For a __configurable middleware__ use a closure as follows:
``` javascript
function configMiddle(options) {
    let hello;
    switch(options.lang){
        case 'en': hello = 'Hello'; break;
        case 'es': hello = 'Hola'; break;
        case 'pl': hello = 'Czesc'; break;
        case 'de': hello = 'Tchus'; break;
        default: hello = 'Hi';
    }
    return function(req, res, next) {
        console.log(hello);
        next();
    }
}
```

There are 5 types of middleware:
* __Application-level__ middleware
* __Router-level__ middleware
* __Error-handling__ middleware
* __Built-in__ middleware
* __Third-party__ middleware

## Application-Level Middleware
Middleware attached to an express application.

Application-level middleware is attached through:
* `app.use([route],fn)` - uses the middleware for all http methods. Can pass a route on which the middleware is mounted
* `app.get() | post() | put() | delete()` - uses the middleware for a specific http method.

``` javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Executes for all requests');
    next();
})

app.use('/', (req, res, next) => {
    console.log('Executes for any request made for the root route');
    next();
})

app.get('/user/:id', (req, res, next) => {
    console.log('User log: ' + req.params.id);
})
```

## Router-Level Middleware
Middleware attached to an express router, which can be thought of as a mini-app that performs only middleware and router functions.

Router-Level Middleware works just like Application-Level Middleware but is bound to an instance of express.Router()

To direct control flow out of the router instance invoke `next('router')`.

``` javascript
const express = require('express');

const router = express.Router();
const app = express();

router.use((req, res, next) => {
    console.log('This will execute for all router');
    next();
})

router.get((req, res, next) => {
    console.log('For any get request type control will exit out of the route instance');
    next('router');
})

// mounting the router on the application
app.use('/', router, (req, res) => {
    res.sendStatus(401);
});
```

## Error-Handling Middleware
Middleware for handling errors. Unlike other middleware functions it makes use of an error-first callback that has 4 parameters.

Error handling middleware should be defined at the end after other middleware and route handlers.

Make sure to send a response if not calling the `next()` function. Otherwise the request will hang.

``` javascript
const express = require('express');
const app = express();

// handle xhr request errors
app.use((err, req, res, next) => {
    if(req.xhr){
        console.error(err.stack);
        res.status(500).send({ error: 'Failed'});
    } else {
        next(err);
    }
})

// catch all
app.use((err, req, res, next) => {
    res.status(500).send('You broke our application...');
})
```

## Built-In Middleware
Express has some built-in middleware that can be referenced through the `express` object. 
* `express.static(root[, options])` - used for handling static files. More on this in the [static files](#static-files) section. 
* `express.json([options])` - handles any requests where the content-type is `application/json`. Available options:
    * __inflate__ - enables or disables(are rejected) handling compressed files. 
        * __type__: `Boolean`
        * __default__: `true`
    * __limit__ - maximum request body size. Either a `Number` type value that defines maximum size in bytes, or a `String` type value that is parsed by the [bytes](https://www.npmjs.com/package/bytes) library.
        * __type__: `Number`, `String`
        * __default__: `"100kb"`        
    * __revivier__ - a function that is passed as the second argument to the `JSON.parse()` method which is used internally
        * __type__: `Function`
        * __default__: null
    * __strict__ - enables or disables accepting only arrays and objects
        * __type__: `Boolean`
        * __default__: `true`
    * __type__ - determines what media types the middleware will parse. Wildcard is allowed `*`
        * __type__: `String`, `Array<String>`, `Function`
        * __default__: `application/json`
    * __verify__ - allows specifying a verification function that is invoked before parsing `verify(req, res, buf, encoding)`
        * __type__: `Function`
        * __default__: `undefined`
* `express.urlencoded([options])` - uses [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html) to parse url-encoded data. Automatically inflates `gzip` and `deflate` encodings. Available options:
    * __extended__ - determines what library is used to parse the data. `true` -> [qs](https://www.npmjs.com/package/qs#readme); `false` -> [query-string](https://www.npmjs.com/package/query-string)
        * __type__: `Boolean`
        * __default__: `true`
    * __inflate__ - enables or disables(are rejected) handling compressed files. 
        * __type__: `Boolean`
        * __default__: `true`
    * __limit__ - maximum request body size. Either a `Number` type value that defines maximum size in bytes, or a `String` type value that is parsed by the [bytes](https://www.npmjs.com/package/bytes) library.
        * __type__: `Number`, `String`
        * __default__: `"100kb"`    
    * __parameterLimit__ - maximum number of parameters in the URL-encoded data
        * __type__: `Number`
        * __default__: 1000
    * __type__ - determines what media types the middleware will parse. Wildcard is allowed `*`
        * __type__: `String`, `Array<String>`, `Function`
        * __default__: `application/x-www-form-urlencoded`
    * __verify__ - allows specifying a verification function that is invoked before parsing `verify(req, res, buf, encoding)`
        * __type__: `Function`
        * __default__: `undefined`

``` javascript
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json({
    inflate: false,                     
    limit: 10000,
    strict: false,
    type: '*/json'
}));

app.use(express.urlencoded({
    extended: true,
    inflate: false,
    limit: '100kb',
    parameterLimit: 2000,
    type: `application/x-www-form-urlencoded`
}));

```

## Third-Party Middleware
To use third party middleware just:
* install it `npm install cookie-parser`
* import it
* use it

``` javascript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

__Popular middleware modules__
|Name|Description|
|----|-----------|
|[body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)|Parses HTTP request body|
|[compression](http://expressjs.com/en/resources/middleware/compression.html)|Compress HTTP responses|
|[connect-rid](http://expressjs.com/en/resources/middleware/connect-rid.html)|Generate unique request IDs|
|[cookie-parser](http://expressjs.com/en/resources/middleware/cookie-parser.html)|Parses cookie header and populates `req.cookies`|
|[cookie-session](http://expressjs.com/en/resources/middleware/cookie-session.html)|Establishes cookie based sessions|
|[cors](http://expressjs.com/en/resources/middleware/cors.html)|Enables CORS with configurations|
|[csurf](http://expressjs.com/en/resources/middleware/csurf.html)|Protection from CSRF exploits|
|[errorhandler](http://expressjs.com/en/resources/middleware/errorhandler.html)|Error handling and debugging for development|
|[method-override](http://expressjs.com/en/resources/middleware/method-override.html)|Override HTTP methods|
|[morgan](http://expressjs.com/en/resources/middleware/morgan.html)|Logs HTTP requests|
|[multer](http://expressjs.com/en/resources/middleware/multer.html)|Parses multi-part request data|
|[response-time](http://expressjs.com/en/resources/middleware/response-time.html)|Records the HTTP response time|
|[serve-favicon](http://expressjs.com/en/resources/middleware/serve-favicon.html)|Serve favicon|
|[serve-index](http://expressjs.com/en/resources/middleware/serve-index.html)|Serve directory listing|
|[serve-static](http://expressjs.com/en/resources/middleware/serve-static.html)|Serve static files|
|[express-session](http://expressjs.com/en/resources/middleware/session.html)|Establish server-based session for development purposes|
|[connect-timeout](http://expressjs.com/en/resources/middleware/timeout.html)|Sets timeout period for HTTP request processing|
|[vhost](http://expressjs.com/en/resources/middleware/vhost.html)|creates virtual domains|
|[connect-image-optimus](https://github.com/msemenistyi/connect-image-optimus)|Enables optimized image serving, switches images to `.webp` and `.jxr`|
|[express-debug](https://github.com/devoidfury/express-debug)|Debugging tool for tracking `locals`, current session and more|
|[express-partial-response](https://github.com/nemtsov/express-partial-response)|Filters out parts of JSON responses, uses Google Partial Response|
|[express-simple-cdn](https://github.com/jamiesteven/express-simple-cdn)|Set CDN for static files, multihost support|
|[express-slash](https://github.com/ericf/express-slash)|handles routes with trailing slashes|
|[express-stormpath](https://github.com/stormpath/express-stormpath)|User storage, authentication, authorization, SSO, data security|
|[express-uncapitalize](https://github.com/jamiesteven/express-uncapitalize)|Redirects HTTP requests with uppercase letters to matching all lower case paths|
|[helmet](https://github.com/helmetjs/helmet)|Automaically sets various HTTP headers to enhance security|
|[join-io](https://github.com/coderaiser/join-io)|Joins files dynamically reducing request counts|
|[passport](https://github.com/jaredhanson/passport)|Feature packed authentication middleware|
|[connect-static-expiry](https://github.com/paulwalker/connect-static-expiry)|Fingerprint URLs / caching for static assets|
|[node-view-helpers](https://github.com/madhums/node-view-helpers)|Helper methods for views|
|[sriracha-admin](https://github.com/hdngr/sriracha)|Dynamic admin site generator for Mongoose|

&nbsp;
# Template Engines
Express supports all popular template engines. The express application generator uses [Pug](https://www.npmjs.com/package/pug) by default.

Full list of supported template engines - [here](https://github.com/expressjs/express/wiki#template-engines).

For template engines that are not supported use [Consolidate.js](https://www.npmjs.com/package/consolidate) for integration.

Rendering template files requires some setup to work:
1. set the directory where the template files are located
    * if omitted the `/views` dir in the root folder is the default
1. set the view engine
    * if omitted the view engine will be determined based on the files extension. Make sure to include it in the render method!
1. install the view engine in question


``` javascript
const express = require('express');
const app = express();

// set the directory
app.set('views', './templates');
// set the view engine
app.set('view engine', 'ejs');

/*
    Install the view engine through terminal

    npm install ejs --save
*/

app.get('/', (req, res) => {
    res.render('index', { title: 'Best Page Ever', message: 'Greeting User' });
})
```

&nbsp;
# Error Handling
Errors encountered by route handlers and middleware can be both synchronous and asynchronous. Express has a built-in default error handler.

__Synchronous Errors__ are handled by the default express error handler.

__Asynchronous Errors__ need to be handled explicitly by passing the error to the `next(err)` function. If you pass any value other than `'route'` to the `next()` function the current response will be treated as erroneous and control flow will be passed to the next error-handling router or middleware.

Calling `next(err)` will skip all remaining handlers in a chain unless they are set up to handle errors.

More on [Error Handling Middleware](#error-handling-middleware).

``` javascript
// Synchronous Error
app.get('/error', (req, res) => {
    throw new Error('FAILED');
        // this is caught by Express implicitly
})

// Asynchronous Error
app.get('/basicasync', (req, res, next) => {
    setTimeout(() => {
        // pass to next function
        next(new Error('ASYNC FAIL'));
    }, 2000);
});

app.get('/trycatch', (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error('ASYNC FAIL');
        } catch(e) {
            next(e);
        }
    }, 2000);
});

app.get('/promise', (req, res, next) => {
    Promise.resolve()
        .then(()=> {
            throw new Error('PROMISE FAIL');
        }).catch(next);
});

// Results in crash
app.get('/asyncerror', (req, res, next) => {
    setTimeout(() => {
        // this will not be handled so the app will crash
        throw new Error('ASYNC FAIL');
    }, 2000);
});
```

An error will terminate handled by the default error handler will fail the request. If you want to handle the error after the headers are sent use the `res.headersSent` property.

``` javascript
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
```


&nbsp;
# Debugging
Express uses the [debug](https://www.npmjs.com/package/debug) module to log debugger information such as:
* route matches
* used middleware functions
* application mode
* request-response cycle flow

To view the debuggers internal logs you need to specify the `DEBUG` environmental variables when launching the application.
``` shell
# shows all logs for both router and application implementation
DEBUG=express:* node index.js

# shows logs for router implementation
DEBUG=express:router node index.js

# shows logs for application implementation
DEBUG=express:application node index.js
```

Example log snippet upon launching an express app - as you can see the application settings are configured first.
``` shell
express:application set "x-powered-by" to true +0ms
express:application set "etag" to 'weak' +3ms
express:application set "etag fn" to [Function: generateETag] +0ms
express:application set "env" to 'development' +0ms
express:application set "query parser" to 'extended' +0ms
express:application set "query parser fn" to [Function: parseExtendedQueryString] +1ms
express:application set "subdomain offset" to 2 +0ms
express:application set "trust proxy" to false +0ms
express:application set "trust proxy fn" to [Function: trustNone] +0ms
express:application booting in development mode +0ms
express:application set "view" to [Function: View] +0ms
express:application set "views" to '/Users/gregorymaj/projects/node-udemy/views' +0ms
express:application set "jsonp callback name" to 'callback' +0ms
express:application set "x-powered-by" to true +0ms
express:application set "etag" to 'weak' +0ms
express:application set "etag fn" to [Function: generateETag] +0ms
express:application set "env" to 'development' +0ms
express:application set "query parser" to 'extended' +0ms
express:application set "query parser fn" to [Function: parseExtendedQueryString] +0ms
express:application set "subdomain offset" to 2 +1ms
express:application set "trust proxy" to false +0ms
express:application set "trust proxy fn" to [Function: trustNone] +0ms
express:application booting in development mode +0ms
express:application set "view" to [Function: View] +0ms
express:application set "views" to '/Users/gregorymaj/projects/node-udemy/views' +0ms
express:application set "jsonp callback name" to 'callback' +0ms
```

Example log upon matching a route:
``` shell
  express:router dispatching GET / +6m
  express:router query  : / +1ms
  express:router expressInit  : / +1ms
  express:router <anonymous>  : / +0ms
  express:router <anonymous>  : / +0ms
  express:router timeLog  : / +1ms
  express:router dispatching GET /assets/main.css +60ms
  express:router query  : /assets/main.css +0ms
  express:router expressInit  : /assets/main.css +1ms
  express:router <anonymous>  : /assets/main.css +0ms
  express:router <anonymous>  : /assets/main.css +0ms
  express:router trim prefix (/assets) from url /assets/main.css +0ms
  express:router serveStatic /assets : /assets/main.css +0ms
```

&nbsp;
# Proxy
In order to properly run an Express application behind a proxy the `trust proxy` setting has to be configured.

Possible values of trust proxy:
* `Boolean`
    * `true` - clients IP address understood as left most entry in `X-Forwarded-*` header
    * `false` - clients IP is derived from `req.connection.remoteAddress`. App is understood as directly facing the internet
* IP Address - set of subnets
    * __loopback__ - default range: 127.0.0.1/8, ::1/128
    * __linklocal__ - default range: 169.254.0.0/16, fe80::/10
    * __uniquelocal__ - default range: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fc00::/7
    * you can specify custom IP - `'loopback, 112.112.112.112'`
* `Number` - nth hop from fron-facing proxy server as client
* `Function` - custom trust implementation. Trusted if function returns `true`

How proxy affects the `req` object:
* `req.hostname` takes its value from `X-Forwarded-Host` header which can be set either by client or proxy
* `req.protocol` stores setting of the `X-Forwarded-Proto` header
* `req.ip` && `req.ips` store the list of addresses from `X-Forwarded-For` header.

``` javascript
const app = express();

// Boolean
app.set('trust proxy', false);

// IP Address
app.set('trust proxy', 'loopback');
app.set('trust proxy', 'loopback, linklocal, uniquelocal');
app.set('trust proxy', ['loopback', 'linklocal'])
app.set('trust proxy', 'loopback, 111.111.111.111')

// Number
app.set('trust proxy', 3);

// Function
app.set('trust proxy', function (ip) {
    if (ip === '127.0.0.1' || ip === '111.111.111.111') 
        return true
    else 
        return false
})
```

&nbsp;
# Best Practices
Set of best practices for security and performance in a production environment.

## Security

1\. __Avoid deprecated or vulnerable versions of Express__\
Only use version __4+__ of Express. Previous versions are no longer maintained.


2\. __Use TLS__\
Make sure to encrypt your HTTP requests when dealing with sensitive data.
* free digital certificate at [letsencrypt](https://letsencrypt.org/about/)
* TLS can be easily configured through nginx - guide [here](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)



3\. __Use Helmet__\
[Helmet](https://github.com/helmetjs/helmet) is a collection of middlewares that set your HTTP headers to protect against well-known web vulnerabilities.

Performs changes to the following headers:
* `Content-Security-Policy` - sets to help prevent XSS
* `X-Powered-By` - removes this header so that its harder to determine if the application is run on Express
* `Public-Key-Pins` - adds public key pinning to prevent MITM attacks with forged certificates
* `Strict-Transport-Security` - enforces secure connections to the server(HTTP over SSL/TLS)
* `X-Download-Options` - disables IE8 from opening untrusted HTML in the context of your site
* `Cache-Control` - disables client-side caching. Diminishes performance(better use fine grained cahcing that blocking all together)
* `X-Content-Type-Options` - prevents browsers from MIME-sniffing a response away from a declared content type
* `X-Frame-Options` - provides clickjacking protection
* `X-XSS-Protection` - enables an XSS filter in modern browsers

You can disable specific changes.

__Install__
``` shell
npm install --save helmet
```

__Include__
``` javascript
// ...
const helmet = require('helmet')
app.use(helmet())
// ...
```

If you dont use Helmet at least add the following:
``` javascript
app.disable('x-powered-by');
```

4\. __Use cookies securly__\




5\. __Prevent brute force attacks against authorization__\




6\. __Ensure dependencies are secure__\




7\. __Avoid known vulnerabilities__\







## Performance

