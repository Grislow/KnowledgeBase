Library that runs in the Node runtime. Makes dealing with HTTP traffic easier. Intercepts HTTP requests caught by a node server and sends them to apropriate [Route Handlers](#route-handler) which generate a response and send it back to.

#### Table of contents

* [Conceptual](#conceptual)
    * [Including Express](#including-express)
* [Route Handler](#route-handlers)

## Copy

``` javascript

```

# Conceptual

## Including Express
Common.js usually used since node.js doesn't natively support ES6 modules

``` javascript
const express = require('express');

const app = express();
```

## Listening on a port

`app.listen(portNum[, callback])` - Instructs the node server to listen on a specific port. Optionally runs a callback after it starts listening.

``` javascript
app.listen(3000, () => {
    console.log('server listening on port 3000');
});
```

# Route Handler
Handle specific types of requests, like authentication, log out, or a survey submit.

__Syntax__: `[express-app].[request-method]('route', callback([incoming-req], [outgoing-response]){ handler-body }`
* __express-app__ - the app that registers the route handler `app`
* __request-method__ - the http request type the route handler is set to catch `get`
* __route__ - the route which triggers this route handler `/`
* __calback__ - function that is called when a http request is intercepted `(req, res) => { ... }`
* __incoming-req__ - an object representing the http request header `req`
* __outgoing-response__ - an object representing the response sent back to the browser `res`
* __handler-body__ - any logic regarding the request and response `res.send({ ... })`

``` javascript
app.get('/', (req, res) => {
    res.send({ data: 'this is sent back to the browser' });
});
```