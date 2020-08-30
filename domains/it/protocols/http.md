# HTTP, HTTPS, HTTP 3

__Source__:
* [official guide](https://redux.js.org/introduction/getting-started)

#### Table of contents

* [Introduction](#introduction)
* [MIME](#mime)
* [HTTP 3](#HTTP-3)



&nbsp;
# Introduction
__Source__: [client-server](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

![HTTP](content/http.png)

&nbsp;
# URI
A Uniform Resource Identifier is a string that allows the unambiguous identification of a resource.

URI Syntax: `[scheme]:{//authority}[path]{?query}{#fragment}`
* __scheme__ - specifies how the rest of the URI should be interpreted. 
* __authority__ - optional component that is comprised of `{userinfo}@{host}:{port}`
    * _userinfo_ - composed of two parts `user:pass`
        * __user__ - a username
        * __pass__ - password matching the username
    * _host_ - a registered name or an ip address. If a name it is comprised of `{subdomain}.{SLD}.{TLD}`
        * [__subdomain__](#subdomain) - an alias of the domain
        * __second level domain(SLD)__ - a name usually distinguishing the site from others 
        * __top level domain(TLD)__ - a generic name that usually identifies the purpose or region of the domain
    * _port_ - the connection point within that host
* __path__ - path that resembles a file system path. 
* __query__ - a string usually consisting of name - value pairs. A single URI can have multiple query strings seperated by `&`
* __fragment__ - a string that identifies a fragment within a resource

Popular URI schemes with examples:
* __http__ - `http://www.somewebpage.com/search?q=example+search`
* __https__ - `https://john:smith@www.somewebpage.com:9000/gallery/search?phrase=kitten#paw`
* __file__ - `file:///Users/someuser/projects/website/index.html`
* __mailto__ - `mailto:someone@domain.com?subject=A%20subject&body=the%20body`
* __ftp__ - `ftp://johnsmith@example.com/`

## Data URI
The `data:` scheme allows embedding small files inline in documents.

__Syntax__:\
`data:[<mediatype>][;base64],<data>`
* `<mediatype>` - the mime type of the data being sent
* `base64` - an optional base64 token 



&nbsp;
# MIME
__Source__: [Mime-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)

&nbsp;
# HTTP 3
__Source__: [towardsdatascience](https://towardsdatascience.com/http-3-is-out-and-about-7c903f9aab9e)