Node is a Javascript runtime written in C++ used to execute code outside of the browser.

In a client-server architecture an HTTP server is run using node. Node listens for HTTP requests on specified ports. Node can handle the requests on it's own but usually makes use of a library(like Express) that simplifies this process.

#### Table of contents

* [Conceptual](#conceptual)
    * [Environment Variables](#environment-variables)
    * [Deployment Checklist](#deployment-checklist)
* [CLI](#cli)
* [Modules](#modules)

# Conceptual

## Features
In order for JavaScript to manage a server many features needed to be implemented. Node makes this possible by including:
* working with a filesystem
* modular programming
* database interfacing
* network communication
* handling http requests and responses

All of these where implemented using C++, but wrappers written in JS are made available for simple integration into a JS application.


## Environment Variables
Variables that store runtime data. 

Environment variables are stored in the `process.env` object.

`PORT` - the port on which the app listens to.

``` javascript
const PORT = process.env.PORT;
```

## Deployment Checklist
When deploying a node server to a cloud service below is an example checklist of what needs to be done. This is as per __heroku__ cloud service requirements:
* __Dynamic Port Binding__ - specify the port which your app will be listening to
* __Specify Node Environment__ - specify the node version you app uses
* __Specify Start Script__ - specify command which will run your node environment
* __.gitignore__ - specify files which won't be included in the environment like _dependencies_

# CLI
`node` - runs a JavaScript repl
`node example.js` - runs example.js in the node runtime environment

# Modules
Node.js uses the CommonJS module syntax. 

CommonJS modules:
* are loaded synchronously
* do not allow named imports

When importing a JavaScript module you can omit the file extension.

```javascript
// import module
var example = require('./example');

// module export
module.exports = function() {
    console.log('test');
}
```