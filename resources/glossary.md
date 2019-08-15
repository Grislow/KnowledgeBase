# IT Terminology

Glossary describing core concepts and phrases regarding Software Development and Information Technology in general. Ordered alphabetically.

Be aware that many of these definitions have been overly simplified to provide what is essential with as few words as possible. For a deeper understanding always do your own research.

I provide credit where its do. This provides you with an alternative formulation of the definitions - these might be harder or easier to understand, really depends on whose reading.

[A](#a)  [B](#b)  [C](#c)  [D](#d)  [E](#e)  [F](#f)  [G](#g)  [H](#h)  [I](#i)  [J](#j)
[K](#k)  [L](#l)  [M](#m)  [N](#n)  [O](#o)  [P](#p)  [Q](#Q)  [R](#r)  [S](#s)  [T](#t)
[U](#u)  [V](#v)  [W](#w)  [X](#x)  [Y](#y)  [Z](#z)

# TODO
* Lexical Scope
* ASI - (http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/),
* TDZ - https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6
* http request
* route
* functional programming in js - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
* graph databases -https://neo4j.com/developer/graph-db-vs-nosql/
* published interfaces
* indirection
* wrapping
* security kernels
* CSRF exploits - https://www.npmjs.com/package/csrf
* XSS attacks
* Virtual Domains
* SSO
* Fingerprint url
* wire protocol
* collation
* containerization
* container-orchestration
* app performance monitoring
* traffic routing

&nbsp;
# A

## AB Tests
Testing two version of the same website against how each version [converts](#conversion-rate).

Source: [vwo](https://vwo.com/ab-testing/)

How its done:
1. __Perform research__ - find out what is effecting conversion by analyzing metrics from website analytics tools:
    * Google Analytics
    * heatmaps
    * surveys
    * user tests
1. __Hypothesis formulation__ - based on researched metrics form a hypothesis aimed at increasing conversion.
1. __Creating a variation__ - create a new version of the website and test it against the old version. Use a [Bayesian Calculator](https://vwo.com/ab-split-test-duration/) to determine how long the tests should run.
1. __Testing__ - let the tests run, wait until you have enough data for a statistically significant result.
1. __Conclusions__ - if the new version improved conversion - deploy it, if not - reiterate with what you've learned.

## Abstraction
Hiding complexities of a system by only exposing what is needed to the users. 

## Abstraction Layer
The definition depends on the context. Below are two popular cases in which you'll see this phrase used.

### Computer Architecture
In computer architecture they are elements grouped by how they can be manipulated or what operations can be performed on them. Each layer is independent of other layers and has a clearly defined way of communicating with them. This allows for __interoperability__ between different layers disregarding their exact __implementation__ or place in the __hierarchy__. 

For example a computer system could be divided into the following layers:
* __Hardware__ - CPU, RAM, HDD etc.
* __OS__ - the operating system like Windows or Linux.
* __Application__ - any applications you run on your operating system.

You can run different operating systems on the same hardware and use different hardware with the same operating system. The two layers communicate with each other through drivers. 

When you run an application you don't have to worry about how it is allocated CPU resources. The program makes a system call and the OS takes care of the rest.

### Software Architecture
In software architecture it is a way of exposing only a part of something complex. This way you can: 
* provide only what is needed without exposing how it is implemented
* simplify something otherwise complex
* control how users interact with lower level logic

When you login to your Google account you pass an email or phone number. In response you either proceed to the password screen or get a _Couldn't find your google account_ message. You don't see how Google matches your input with all existing account names in their database.

## Abstraction Level
See [Abstraction Layer](#Abstraction-Layer)

## Accessor
Also called an _Accessor Method_ or _Getter_ are methods that allow accessing an objects state data without changing it.

## ACID
Stands for **A**tomicity, **C**onsistency, **I**solation, **D**urability is a set of properties a relational database should have to guarentee validity in event of sudden system failure(errors, power failures, etc.). A single operation that satisfies the ACID properties is called a __transaction__.

<u>**A**tomicity</u>
* each transaction is treated as a __single unit__
* a single unit can either __succeed completely__ or __fail completely__
* if any operation within a transactioin fail the whole transaction fails

<u>**C**onsistency</u>
* transaction can only change shift the DB from one __valid state__ to another valid state
* transactions maintain the databases invariants
* any data written to the DB is valid(constraints, cascades, triggers)
* this does not mean all transactions are valid but all changes they could make must be valid

<u>**I**solation</u>
* transactions change the database sequentially, but can be executed concurrently

<u>**D**urability</u>
* if a transaction is complete it will remain complete upon system failure
* completed transaction should be stored in non-volatile memory

<br>

__TECHNIQUES__:
* __Write-ahead Logging(WAL)__ - Provides atomicity and durability. Any changes must be recorded in a log prior to being written to the database. [ARIES](https://en.wikipedia.org/wiki/Algorithms_for_Recovery_and_Isolation_Exploiting_Semantics) is a popular algorithm that facilitates WAL.
* __Shadow Paging__ - Provides atomicity and durability. When data is to be modified a copy of the data(shadow page) is created in physical storage. Any changes are commited to that copy. Once changes are complete any references to that data in the database are replaced with the copy making it durable. 
* __Locking__ - marking data that is being manipulated by a transaction and blocking any other transactions from making changes to that data
* __Multiversion Concurrency Control(MVCC)__ - when a transaction requires data that is currently being processed by another transaction a copy of the data before modification is created. Each concurrent transaction works on a copy of the data after which the changes are consolidated(for example using snapshot isolation)
* __Snapshot Isolation__ - all transactions see a consistant snapshot of the database(db state right before transaction execution). A transaction will only commit if that would cause no conflicts with operations that have been completed since the snapshot was taken.
* __Two-Phase Commit Protocol__ - used in distributed databases. Commiting a transaction is a 2-stage process:
    1. __Voting Phase__ - a coordinator node queries all nodes participating(participants) in a transaction if they have finished execution on behalf of that particular transaction.
    1. __Commit Phase__ - only if all participants reply positively is the transaction commited

Source: [wikipedia](https://en.wikipedia.org/wiki/ACID_(computer_science))

## Acknowledgement(ACK)
A signal passed between communicating processes that signifies receipt of a message.

## AJAX
**A**synchronous **J**avascript **A**nd **X**ML is a technique that makes use of various technologies such as HTML, CSS, JavaScript, DOM, XML, XSLT and XMLHttpRequest object to update a web application through XML or JSON documents without reloading the entire page.

## Amdahl's Law
A formula that predicts the overall imporvement in execution speed one can achieve through parallelizing tasks. 

Amdahl's Law shows that no matter how much you parallelize, execution speed will always be limited by tasks that can't be parallelized.

## API Gateway
A central point through which various microservices can connect. An API Gateway usually handles protocol translations and message routing to enable communication between disparate components.

Popular API gateway features:
* authentication
* security policy enforcement
* load balancing
* cache management
* dependency resolution
* contract and service level agreement management

Source: [whatis.techtarget.com](https://whatis.techtarget.com/definition/API-gateway-application-programming-interface-gateway)

## Argument
Value that is passed to a function. 

Do not confuse with a [parameter](#parameter) which could colloquially be called a placeholder that is replaced by an argument when we call the function.

## Array
0 or more values stored in a single variable. 

__JavaScript__: Arrays are dynamic, which means they are not limited to one type of data and their size is not predetermined.

## ASCII
American Standard Code for Information Interchange is a 7-bit character encoding scheme. The character set consists of 128 different symbols covering special characters, upper and lower case english letters, numbers and [control characters](#control-character).

## Assignment
Assigning a specific value to a variable.

## Asynchronous Programming
Running a process seperate from the main thread, outside of the general flow of the application.

## Authentication
Comfirming a users identity. Can be thought of as a contract between the server and the user agent.

<u>Concepts</u>:
* __Multi-factor Authentication__ - using a combination of factors and/or methodologies to authenticate a user. For example through a login/password and a secret phrase or phone number.
* __Single-Sign On(SSO)__ - authentication on one service instantly authenticates on other services connected to a common domain. 
* __One Time Password(OTP)__ - a password that authenticates the user for only one session.
* __Token__ - some data stored on the client side that can be directly or indirectly matched with some data stored on the server side.

<u>Methodologies</u>:
* <u>__Basic Authentication__</u> - or basic HTTP authentication is when a user name and password are included in the HTTP request header. Credentials are stored in base64 format seperated by a semicolon. Does not require cookies, session identifiers, login pages, handshakes
    * `https://johndoe:pass123@www.example.com/index.html`
* <u>__Cookie Authentication__</u> - server verifies credentials sent through an HTTP request. If verified a session id is created server side and sent back to client via cookie. When the user logs out session id is cleared from server and client cookies.
* <u>__Token Authentication__</u> - upon verifying credentials received from the client the server generates a signed web token and sends it back to the client. The server does not store the token, only verifies it. The client stores the token in local storage, session storage or cookies. A popular implementation is the __JSON Web Token(JWT)__. The token usually consists of 3 parts which are Base65Url encoded and dot delimited:
    * __Header__ - token type(ex. JWT), signing algorithm(ex. HMAC, SHA256, RSA)
    * __Payload__ -  consists of _claims_ - user data. Payload is not encrypted so dont store sensitive data in it. Three types of claims:
        * __Registered__ - set of predefined claims like __iss__(issuer), __exp__(expiration date), __sub__(subject) or __aud__(audience)
        * __Public__ - custom public claims. Can cause namespace collision(unless defined appropriatly)
        * __Private__ - custom private claims. Allow sharing information between parties that agree to use that type of claim
    * __Signature__ - the result of signing encoded header, encoded payload and a secret using the tokens algorithm. This verifies the message wasnt changed along the way.
* <u>__3rd Party Authentication__</u> -  authentication happens through a 3rd party called an __identity provider__. The identity provider generates a token based on passed credentials.
    * __API Token__ - all authentication requests are sent through a gateway which returns an API Token for validated users.
    * __OpenId__ - a HTTP based protocol that uses a 3rd party(like google, facebook, etc) to authenticate a user. The resulting token is in __JSON__ format. Usually works in conjunction with OAuth.
    * __SAML__ - **S**ecurity **A**ssertion **M**arkup **L**anguage uses a 3rd party to authenticate a user. The resulting token is in __XML__ format.
* <u>__Mobile Authentication__</u> - verify identity through a mobile device. User passes something that uniquely identifies the mobile device(like a phone number). The server sends some information to that mobile device that allows verification that the device belongs to the user. Successful verification generates a token for authorization.

<u>Usage</u>:
* __Single Sign On__ :
    * __OpenId__ best choice for __consumer market__ since it has lots of common services under one domain(google, facebook, twitter etc)
    * __SAML__ best choice for __enterprise solution__ since it can be easily customized and extended for business needs
* __Web Apps__ - both cookie and token authentication
* __Mobile Apps__ - cookie based api token  


Source: 
* [Vivek Madurai](https://medium.com/@vivekmadurai/different-ways-to-authenticate-a-web-application-e8f3875c254a)
* [jwt.io](https://jwt.io/introduction/)
* [RFC on JWT](https://tools.ietf.org/html/rfc7519#section-4.1)

## Authorization
Providing an authenticated user access to resources based on their permissions and rights.

__OAuth__\
An authorization protocol that relies on HTTPS for security and is implemented by Google, Facebook, Twitter and more giants of the IT world. 
* after authentication an OAuth Token is generated for authorization purposes
* The OAuth token is stored on the client side for a set amount of time(not indefinetly or until manual deletion)
* OAuth in effect delegates authorization to a 3rd party(like Google)
* OAuth is not an authentication method - it deals with permissions and rights of a verified user, not verification itself. 
* OAuth 1.0 is not compatible with OAuth 2.0. Use 2.0 whenever possible - its easier to configure

## Autoboxing
Automatic conversion between a primitive type and a wrapper type.

&nbsp;
# B

## BASE
A set of requirements for effectively storing data in a distributed database system. Formulated based on [CAP Theorum](#CAP-theorum)

<u>**B**asically **A**vailable</u>
* guarantees data availability as in there will be a response to every request
* response can be a failure
* data can be inconsistant

<u>**S**oft state</u>
* system state can change even when lack of input
* this happens because of internal operations focused on providing eventual consistency

<u>**E**ventual Consistency</u>
* system state will eventually be consistant once it stop receiving input
* consistancy of all transactions is not checked

## Batch Processing
Sequential execution of a collection of programs that require no human interaction.

## Blue/green Deployment
A type of AB testing where an application is run on two identical environments. One envrionment is __active__ and the other __idle__. The active environment serves the users while the idle environment runs a newer version of the application. Once the newer version is thoroughly tested the idle environment is activated and the former active environment becomes idle and awaits a new version of the application.

## Breakpoint
A moment that pauses the execution of a progra for inspection by a debugger tool.

&nbsp;
# C

## Caching
Storing data in a cache so that it can be quickly accessed. Increases performance by reducing calls to on-disk data(database).

Choosing a caching strategy depends on various factors:
* read and write ratio
* is the same data read many times
* is data returned usually unique

<u>Caching Strategies</u>
* __Cache-Aside__ - application communicates directly with both the DB and cache. If data is missing in the cache it is retrieved from the DB and stored in the cache.
    * good for read-heavy workloads
    * loads data lazily
    * failover to DB during cache failure
    * data in cache can be structured differently than in DB
* __Read-through Cache__ - all data read by the application goes through the cache. The application only communicates directly with the cache. 
    * App <- Cache <- DB
    * good for read-heavy workloads where same data is read many times
    * loads data lazily
    * data in cache needs to have the same structure as in DB
* __Write-Through Cache__ - all data written to db goes through the cache. The application only communicates directly with the cache.
    * App -> Cache -> DB
    * consistency guarentee
    * works well with read-through cache
* __Write-Around__ - aplication writes data directly to the DB, only read data is stored in the cache
    * good when data is written once and not read frequently
* __Write-Back__ - apllication writes to cache. After a while the cache data is written to the DB.
    * great for write-heavy workloads
    * combined with read through good for mixed workloads
    * resilient to db failures


Source: [codeahoy.com](https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/)

## Call Stack
Also called and Execution Stack, Program Stack or Run-time Stack. It is a LIFO data structure containing all routines that are currently being executed or are awaiting execution. The position of subroutines on the stack determines their order of execution. 

## Callback Function
A function passed as an argument.

## Canary Deployment
Pushing application changes to a few users who are unaware of it. This minimizes damage caused if the code is buggy since it doesn't affect the whole user base. 

## CAP Theorum
Source: [wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)

A theorum stating that a distributed data store can only provide at most two of three quarentess:
* __Consistency__ - every read either receives the most recent write or an error
* __Availability__ - every request receives a non-error response, but not neccessarily the latest data
* __Partition Tolerance__ - system continues to operate even if nodes in it fail 

## Cardinality
The number of elements in a collection of elements as a property of that collection.

## Character Encoding
Maps a code point to a concrete binary representation.

__Examples__: UTF-8, UTF-16, UTF-32

## Character Set
A collection of characters that are mapped to [code points](#code-point).

__Examples__: [Unicode](#unicode), [ASCII](#ascii)

## Chunk
A piece of data being sent through a stream.

## Clause
An incomplete fragment of a statement.

## Client
In [Client-Server Architecture](#client-server-architecture) it is the consumer of services. It sends requests which are realized by a [server](#server).

## Client-Server Architecture
A [network architecture](#network-architecture) in which [clients](#client) communicate with a central [server](#server) in order to consume resources and make use of services. A client sends __requests__ to the server, the server performs tasks in order to meet these requests and finally sends back an appropriate __response__. 

For example a browser could be a client. You type in a url and hit enter. This sends an http request to a web server. The web server then fetches the requested files and sends them back to the browser in an http response.

## Client Side Storage
Storing data on a users device. 

This can be achieved through various means. Some of the most popular options are:
* __Cookies__ - stores a small amount of data(up to 5KB) that is exchanged between client and server. An expiration duration can be set on a cookie. Cookies can be set(httpOnly flag) to only be accessible server-side.
* __Local Storage__ - data is cached on client side and persists until it is manually (cache clear) or programatically(client-side scripting) removed. Maximum data size is greater than in session storage. Local storage can only be accessed client-side.
* __Session Storage__ - data is cached on the client side only while a given context is active(browser tab is open). Maximum data size is greater than a cookie(over 5MB). Session storage can only be accessed client-side.

## Closure
A function that has its own lexical environment.

## Clustering
The ability of several servers to connect to a single database.

Advantages:
* __fault tolerance__ - if a server crashes another can resume operations on its behalf
* __load balancing__ - can allocate users to the server with the least load

## Code Coverage
Or __test coverage__ is the percent of the entire code base that was executed when a test suite runs. 

## Code point
A unique number assigned to a character in a character set.

This Bento Box &#127857; is a Unicode character with the code point `U+1F371`. __U+__ is a prefix meaning Unicode.

## Code unit
A unit of storage for an encoded [code point](#code-point). How many code units are needed to represent a single code point depends on the encoding and the code point in question. 

Lets take this burger &#127828; Unicode character as an example:
* __UTF8__: 4 code units `0xf0` `0x9f` `0x8d` `0x94`
* __UTF16__: 1 code unit `0x1f354`

If a code point can't be encoded in one UTF-16 code unite it is store in a [surrogate pair](#surrogate-pair).

## Comman Line Interface(CLI)
A program in which you type commands for the operating system to execute.

## Concurrent Programming
Pertaining to managing multiple threads of execution at the same time.

## Confluence
A wiki tool for collaboration and knowledge sharing in an IT project(but is not limited to).

Source: [official website](https://www.atlassian.com/software/confluence)

## Container
A form of OS virtualization. A container consists of all necessary executables, binaries, libraries and configurations to run an application without including the operating system(as opposed to virtual machines).

Containers offer a streamlined mechanism for building, testing and deploying applications on multiple environments.

<u>Benefits</u>:
* __less overhead__ - no OS
* __increased portability__ - OS and hardware independent
* __consistancy__ - runs the same on various platforms
* __efficiency__ - ease of deployment, patching and scaling
* __enhanced development__ - support accelerated development, testing and production cycles

<u>Use Cases</u>:
* make existing application compliant with a modern cloud architecture
* refactor applications for containers to enable full benefits of containerization
* provides better support for microservice architecture
* easily integrated with CI/CD tools
* simple deployment for repetitive jobs and tasks

<u>Popular Tools</u>:
* __Docker__ - runtime environment for software containerization and deploying containers.
* __Kubernetes__ - container management tool used for operations on large amounts of containers. Good for automation and scaling of container based workloads.

Source: [netapp](https://www.netapp.com/us/info/what-are-containers.aspx)

## Continuous Deployment
A development practice where every code commit that passes the automated testing phase is automatically deployed to production. This requires adhering to production-level development practices and real-time monitoring in production.

__Practices__:
* rollback capabilities
* [canary deployment](#canary-deployment)
* [sharding](#sharding)
* [blue/green deployment](#blue/green-deployment)
* [feature flags(toggles)](#feature-flags(toggles))

__Tools__:
* Configuration management: [Puppet](https://puppet.com/) or [Ansible](https://www.ansible.com/)
* Acceptance Tests: [Cucumber](https://cucumber.io/) and [Calabash](https://calaba.sh/)
* Monitoriing Tools: [Splunk](https://www.splunk.com/en_us), [AppDynamics](https://www.appdynamics.com/)

## Continuous Integration
A development practice that focuses on merging code into a shared repository several times a day. Each merge is verified by an automated build and automated testing. This allows quickly detecting and correction of integration errors.

__Benefits__:
* simplifies integration
* increased visibility - improved communication
* catch issues early
* less debugging, more coding
* builds a solid foundation

__Practices__:
* single source repository
* automated build
* hook automated testing to build
* each commit builds on an integration machine
* fast build
* test in a clone of production env
* easy access to latest executable version
* transparent work flow
* automated deployment

__Process__:
1. devs check out into their private workspace
1. after completion they commit changes to the repository
1. CI server monitors repository and checks any changes
1. CI server builds system and runs unit/integration tests
1. CI server releases deployable artefacts for testing
1. CI server assigns a build label to the built code
1. CI server notifies of success or failure
1. If the build failed the team reacts immediatly
1. Start over at 1

__Responsibilities__:
* check in frequently
* dont check in broken code
* dont check in untested code
* dont check in when build is broker
* dont go home after checking in until the system builds

__Popular Tools__:
* [Buddy](https://buddy.works/) - proprietary, easy to configure, integrates with other popular tools
* [Jenkins](https://jenkins.io/) - open-source, popular, easy installation
* [Travis CI](https://travis-ci.com/) - open-source, notifications, easy setup, good for small projects

Source: [thoughtworks.com](https://www.thoughtworks.com/continuous-integration)


## Control character
A character that is used to perform an action and has no literal meaning. Some popular examples are:
* `^@` - __Null__ is used as a string terminator in the C programming language
* `^C` - __End of Text__ is used in command line interfaces to terminate a program
* `^D` - __End of Transmission__ is used in Unix based command line interfaces to indicate the end-of-file 

For a full list vist [wikipedia](https://en.wikipedia.org/wiki/C0_and_C1_control_codes#C0_controls)

## Conversion Rate
Ratio of visitors of a website that complete a desired goal.

## Conway's Law
M. Conway:
> organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations.

Social boundaries reflect how well a system or component is designed. Authors must communicate with eachother frequently to achieve a high level of quality. 

## Currying
Seperating a function that takes multiple arguments into several functions that take a part of those arguments.

&nbsp;
# D

## Data Binding and Flow
Connecting state with sources of its change. State can usually be changed externally for example by user input, or internally by mechanisms in the application.

__Two Way Data Binding__
State can be changed both by the user and internal mechanism. This makes it hard to track and control what the source of change is.

__One Way Data Flow__
When data is only changed by an internal mechanism. User input is sent through to the model of the application which in turn updates a components state.

An example is a UI Form that is controlled by state.

## Data Buffer
A region of physical memory that temporarily stores data that is being moved from one place to another.

## Data Stream
A sequence of data made available over time. The sequence combines into a whole.

## Data Structures
Data structures are ways of grouping data which define how this data is related and how you you can work with it.

Knowing Data Structures is important because they are proven and tested ways of solving certain types of problems.

![Data Structure Choice Graph](data_structures.png)

## Data Base
> A structured set of computerized data with an accessible interface.

## Debugging
Finding and fixing errors in source code.

## Declaration
Registering a variable in its corresponding scope.

## Declarative Programming
A programming paradigm that focuses on describing what needs to be done over how its done. It does not consider the sequence in which something should be executed.

__Examples__: SQL, Prolog

## Domain Naming System(DNS)
Source: [ns1.com](https://ns1.com/resources/dns-types-records-servers-and-queries)

A system responsible for translating IP Addresses into Domain Names(like www.google.com). This involves DNS Servers which store these mappings in a database or cache.

When a [user agent](#user-agent) requests a domain it sends a query to a __DNS Resolver__ that attempts to match a human-readable hostname to an IP address. Upon failure the request is forwarded to another DNS Server until a mapping is found.

__DNS Query Types__
* __Recursive__ - if the resolver can't provide an answer it queries other DNS Servers possibly reaching the Authoritative Name Server
* __Iterative__ - the DNS server either provides the answer or a reference to another DNS Server to which the DNS client has to repeat its request.
* __Non-recursive__ - the DNS Server either stores the mapping or knows which external DNS Server holds the mapping. The request is resolved immediately. 

__DNS Server Types__
* __DNS Resolver__ - or recursive resolver, receives DNS queries which include human-readable hostnames and track the hostname - IP address mapping.
* __DNS Root Server__ - responsible for resolving the Top Level Domain(TLD) like __.com__. There are 13 root servers worldwide.
* __Authoritative DNS Server__ - resolves the authoritative name server for a hostname like __google__.

__DNS Records__
DNS Servers created records to store information on domains. These are some of them:
* __A__ - stores mapping of hostname and IPv4 address
* __AAAA__ - stores mapping of hostname and IPv6 address
* __CNAME__ - stores mapping between a hostname and another hostname
* __MX__ - stores mapping between hostname and an SMTP server
* __NS__ - stores mapping of a DNS zone(example.com) to a Authoritative DNS Server
* __TXT__ - machine-readable data(for example for encryption)

__Advanced DNS Solutions__
* __Global Server Load Balancing__ - controlling routing between globally distributed data centers
* __Multi CDN__ - routing users to the nearest CDN
* __Geographical Routing__ - routing users to the nearest resources
* __Cloud Migration__ - migrating local data to a cloud resource
* __Internet Traffice Management__ - reducing network congestion


__Time to Live__(TTL) - when a domain name is resolved the DNS Server to which the request was originally made caches the mapping for a faster future resolution. TTL is how long that mapping is stored.

__8.8.8.8__ is the ip address of Google's DNS Server. If you ever have DNS related problems try configuring your DNS settings to that server.

## DRY
"Don't Repeat Yourself" is a coding principle which states that if you catch yourself writing the same code over and over again then you are probably doing something wrong. Try to group repeated logic into a seperate function.

## Duck typing
Checking if an object is of a certain type by checking its properties.

> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

## Dynamic Reconfiguration
Assigning new resources to a process while its being executed.

## Dynamic typing
Variables type is determined during runtime. This means any variable can be assigned and re-assigned values of any type.

&nbsp;
# E

## ECMAScript
The core standard of JavaScript. Not to be confused with JavaScript which is the actual language built according to the standard.

Official Webpage: http://ecma-international.org/

## Encapsulation
Grouping data and into a single unit(like an object). Allows restricting access to the state of that unit.

## Endpoint
One end of a communcation channel. Usually associated with a URI.

This could be in a file system:
``` 
/endpoint
C:\\ProgramFiles\some-endpoint
/account
```

A domain specific endpoint:
```
https://example.com/endpoint
https://example.com/app/login/some-endpoint
```

Different HTTP methods form different endpoints
```
GET /item/{endpoint}
PUT /item/{endpoint}
```
## Environment Variable
A global variable specific to an environment on which code is being executed.

## Error
Faults in an application. Can be grouped as:
* __Syntax errors__ - incorrect usage of a programming languages grammar, like missing brackets or semicolons. Can be easilly spotted with the right tools like automatic compilation(for compiled languages) or linters(for interpreted languages).
* __Runtime errors__ - errors that occur during execution, like trying to open a non-existant file. These are often called __Exceptions__ and can be handled programmatically.
* __Logical errors__ - mistakes made in designing the logic within your application, like using the wrong operator or variable. Fixing these errors require understanding of business logic which is beyond a computers capacity. Debugging these is often tedious and requires close inspection of the state of the application at the moment the error occured.

## Escape sequence
A sequence of characters that begins with an escape character and has a different meaning then its literal representation. In most programming languages the escape character is a backslash `\`. 

## Exception
A runtime error that disrupts a programs flow.

## Execution Phase
Or runtime is the process of executing a program on a computer or virtual machine. This usually involves a [runtime environment](#runtime-environment) which is responsible for supplying all the resources a program needs to properly execute. 


## Expression
A unit of code that produces a single value.

&nbsp;
# F

## Feature Flags(Toggles)
A technique that allows testing and developing features without maintaining multiple source-code branches. Each feature has a flag associated with it which a developer can use to toggle if the feature is available in production, only for testing or completely disabled.

## First Class Citizen
An entity that supports basic operations such as being: 
* passed as an argument
* returned by a function
* assigned as a value

## First Class Functions
Functions that are treated as any other variable. Meaning they can be passed as an argument, returned by a function and assigned as a value.

## Function
A block of code that performs a task.

Functions __can__, but don't have to: 
* take values as arguments
* return values
* be named

__JavaScript__: A callable object.

## Function Composition
Combining simple composable functions into one more complex function. This can be achieved by passing the result of one function as an argument to another function(over and over if needed). Composable functions should only take one argument and output one value.

## Function Decorator
A [higher order function](#higher-order-function) that returns an enhanced version of its argument function.

## Functional Programming
A programming paradigm where programs are created using functions and state, and data types are immutable.

The core of functional programming involves:
* [Higher Order Functions](#higher-order-function)
* [Pure Functions](#pure-function)
* [Immutability](#immutable)
* [Function Composition](#function-composition)
* [Generic Programming](#generic-programming)

Pros:\
* simply
* easy to test
* flexible
* no shared state
* no side effects
* scales well

Cons:\
* if done wrong reduces readability
* hard to grasp for junior devs
* not as popular as OOP

__Examples__: Python, Lisp, Haskell

&nbsp;
# G

## Garbage Collection
An automated process that frees memory allocated to unused variables. 

## Generic Programming
A programming technique that defines a construct as a template. The data types used within the construct are evaluated at runtime.

## Getter
See [Accessor](#accessor).

## Global properties
Properties accessible in the global scope.

## Graceful Degradation
A methodology for building web applications that focuses on providing a specific viewing experience and makeing a less appealing, degraded version for [user agents](#user-agent) that don't support that experience.

## Grapheme
1 or more [code points](#code-point) as a single graphical unit.

A good example is the letter `ą` which is a grapheme that could be represented as a:
* single code point of `U+02DB`
* combination of `U+0061` and `U+02DB`. Which are respectively __a__ and __&#731;__

&nbsp;
# H

## Handshaking
An initial message sent by one device to another when attempting to establish communication over a network.

This is followed by a series of messages that establishing a protocol through which they will communicate. 

## Higher Order Function
A function that returns another function.

## Hoisting
The act of loading some resources to memory prior to code execution irrespective of those resources physical location in the source code. 

## Horizontal Scaling
Adding more machines into the pool of resources available to a system.

## HTTP
THe Hyper Text Transfer Protocol is a standard format for sending data across TCP/IP. 

A typical HTTP message contains: 
* __status code__ regarding success or failure of the transmission
* __http method__ type of performed operation, like GET or POST
* __headers__ with metadata
* __message body__ containing the payload

&nbsp;
# I

## IaaS
__Infrastructure as a Service__ is a cloud computing service model where the user is provided access to a computing infrastructure. The provider is responsible for Storage, Networking, Servers and Virtualization while the consumer is responsible for configuring, installing and maintaining an OS, Middlewares, a runtime environment, any applications and data.

__Example__: Amazon EC2, Windows Azure, Google Compute Engine

## Identifier
Names that identify different elements of a program like variables, functions or classes.

## Immutable
Meaning its state cannot be changed. Any attempts at changing an immutable variable result in creation of a new variable and allocating it new memory space. 

__JavaScript__: All primitive types are immutable.

## Imperative Programming Paradigm
A programming paradigm focused on changing a programs state by executing a series of statements.

Think of telling someone step-by-step how to do something. The 'someone' is a computer and the 'step-by-step' is a program following the imperative programming paradigm.

[Procedural Programming](#procedural-programming) or [Object-Oriented Programming](#object-oriented-programming) follow the Imperative Programming Paradigm.

## In-memory Database(IMDB)
A database which stores data in the systems main memory(RAM) in a compressed, non-relational format. This enables higher and more predictable performance during data retrieval at the price of volatility. 

IMDB's as a concept dont support "durability" of the [ACID](#acid) properties.

<u>Durability Techniques</u>
* __Snapshot__ - periodically save images of in-memory data on non-volatile memory. Supports only partial durability(data after snapshot can be lost)
* __Transaction Logging__ - records changes to DB or changing commands in a journal. This usually works in an append-only manner(append operations are fast even on HDD)
* __NVRAM(Non Volatile RAM)__ - NVRAM do not lose data after reboot
* __High availability__ - database replication with automated failover implemented
* __Hybrids__ - storing the most frequently accessed data on disk as a backup

Popular implementations are [Redis](https://redis.io/) and [Memchached](https://memcached.org/). 

<u>Comparison</u>
* Data Structures
    * __Redis__ better with complicated operations and data structures(String, Hash, List, Set, Sorted Set)
* Memory Efficiency
    * __Memcached__ uses memory more efficiently
* Data Volume
    * __Redis__ is better for small data sets(utilizies one core)
    * __Memcached__ is better for large data sets(utilizies multiple cores)
* Memory Management
    * __Redis__ when size exceeds RAM, data that is accessed infrequently is moved to the disk
    * __Memcached__ uses _slab allocation_ which is grouping data of a similiar size in bytes and storing it together
* Data Persistency
    * __Redis__ - supports snapshots(can lose data) and transaction logging(safer but less optimal)
    * __Memcached__ - does not support data persistency
* Cluster Managements
    * __Redis__ - distribute storage on server side. Master-slave pattern possible, when master fails cluster will automatically redirect data flow to child.
    * __Memcached__ - distributed storage only configurable on client side

Source:
* [wikipedia](https://en.wikipedia.org/wiki/In-memory_database)
* [comparison](https://medium.com/@Alibaba_Cloud/redis-vs-memcached-in-memory-data-storage-systems-3395279b0941)

## Inheritance
Passing down properties and methods between objects or classes.

## Initialization
Allocation of memory for a variable.

## Internet Protocol
__IP__ is a protocol that standardizes how datagrams are transmitted across network boundaries. Its purpose is to encapsulate delivered data and label it with a source and destination address. This makes routing the data and delivering the data possible.

An __IP Address__ is a unique identifier for resources connected to a computer network using the Internet Protocol.

## Interpreter
A program that directly executes instructions written in a programming language without prior compilation.

## Inter-Process Communication(IPC)
A mechanism an operating system provides to allow sharing data between processes.

IPC comes in various flavors:
|Method|Description|
|------|-----------|
|__File__|A record stored on disk which can be shared across processes|
|__Signal__|A system message sent by one process to control another process|
|__Socket__|Sending data over a network interface between processes on the same computer or on the same network|
|__Message Queue__|A data stream from which multiple processes can read and write without being interconnected|
|__Pipe__|A unidirectional data stream|
|__Shared Memory__|A block of memory that serves as a buffer from which multiple processes can read and write|
|__Message passing__|Communication between multiple processes using a message queues and non-OS managed channels|

Source: [wikipedia](https://en.wikipedia.org/wiki/Inter-process_communication#Remote_procedure_call_interfaces)

&nbsp;
# J

## JIRA
A tool used mostly for tracking issues and bugs related to your software. Useful for managing a project.

Source: [official website](https://www.atlassian.com/software/jira)

## JSON
JavaScript Object Notation is a language independent data-interchange format based on object syntax in JavaScript.

JSON files are constructed of key-value pairs and arrays. Square brackets denote an array and curly brackets denote an object.

A key is always a string in double quotes followed by a colon. Key-value pairs and array values are seperated using commas.

``` json
{
    "key1" : "value",
    "key2" : 2,
    "key3" : true,
    "key4" : null,
    "key5" : {
        "key 5.1" : [
            1, 2 , "one"
        ]
    },
    "key6" : "unicode characters 🍔",
    "key7" : "escape reserved characters \b \f \n \r \t \" \\",
    "key8" : "JSON strings can be huge, so you shouldnt worry about putting too much in here. The maximum length is 4MB which is 2,097,152 characters. A 250 page book has around 500,000 characters spaces included"
}
```

&nbsp;
# K

## Keyword 
A word that has a predefined meaning in a programming language.

## KISS
> Keep it simple, stupid

A software design principal stating that it's always a good idea to keep your code simple. Make sure it can be easily understood, reused and extended.

&nbsp;
# L

## Lazy Evaluation
The act of deferring the evaluation of an expression until that expression is needed.

__Example__\
Imagine you have a program where someone can borrow money based on his 'Credibility Index'. The 'Credibility Index' is based on various information from the users profile. Calculating it is a complex operation and takes up a lot of resources. 

Instead of calculating it every time changes to the profile are made, you can make the program remember that you need to calculate it with the current profile data. Then perform the actual calculations only when the user attempts to actually borrow money.

## Lexical Scope
Or static scope means the availability of an element is determined by where it was created in the source code.

## Licenses
A legal instrument that determines how and whether software can be used, modified and/or sold. 

There are various types of licenses:
* __Public Domain__ - no restrictions on how the software is used. You can use it, modify it, sell it in any way you like. 
* __Creative Commons(CC0)__ - simplifies making your software available to the public domain. A straightforward way of specifying what rights are waived and which are reserved in situations where waiving all rights is not possible.
* __Permissive__ - allows the usage, modification and redistribution under certain rules. For example including the license in the copied code, or waiving your right to hold the author accountable.  
* __Copyleft__ - any work derivitive of copyleft licensed software must also be under that same license.
* __Proprietary__ - the software belongs to a legal entity that permits its use under an __EULA__(end-user license agreement). The EULA determines exactly what you can do with the software.

It might seem like using software you can freely modify and redistribute is the way to go, but this introduces __security vulnerabilities__ - whose to say a malicious party hasn't made modifications. There are various tools for checking the security risks of open-source dependencies.

You can find a list of popular licenses and what they entail - [__here__](https://tldrlegal.com/)

## Literal
A value which is expressed as itself. For example:
* `'Dog'` string literal
* `10` numeric literal
* `true` boolean literal 
* `[1, 2, 3]` array literal containing 3 numeric literals

## Load Balancing
A mechanism that distributes workloads across a systems resources in a way so that resource hungry components don't become a bottle-neck.

## Locale
An object containing a regional settings like a region or language code.

List of all [valid language codes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

## Luhn Algorithm
An algorithm that checks the validity of various identification numbers like a credit card number.

&nbsp;
# M

## Machine Code
A programming language that can be directly translated to processor instructions. All applications are finally compiled to some form of machine code.

## Magic String
A string that has special meaning that determines how the code works. Strings should never be the basis for logic in an application thus magic strings should be avoided. 

Instead, use encapsulated constant values in place of magic strings.

## Marshalling
Transforming data into a standard format that can be transmitted over a network and decoded by other applications.

Decoding marshalled data is called unmarshalling.

__Example__: Transforming client stub parameters during an RPC before trasnferring them to the server stub.

## Memoization
Storing the result of a function call. When the function is called again with the same input the cached result is returned instead of calling the function again.

This is an important technique for optimization.

## Memory Leak
When an application fails to release unused memory. This could slow the application down or even cause its untimely termination.

## Memory Life Cycle
Memory usage across almost all [runtime environments](#runtime-environment) goes through the same process:
1. Allocating memory when needed
1. Using the allocated memory
1. Releasing memory when its not needed

Environments with [garbage collection](#garbage-collection) usually handle the first and last step implicitly.

## Message Broker
A middleware that intercepts published messages, translates them and sends them to the appropriate receiver. This creates a central point for connecting various components and systems that would otherwise be hard to connect.

Popular message broker software:
* [RabbitMQ](https://www.rabbitmq.com/)
* [Apache Kafka](https://kafka.apache.org/)

## Metaprogramming
Writing programs that can analyse, generate and transform source code.

## Method
Is a function that describes a verb of a class or an object. 

If we had a class called `Horse` it could have a method called `run`.

## Method Overriding
Changing the definition of a method inherited from a superclass to provide a subclass specific implementation.

## Microservice Architecture
A software design model where an application is built using many independent, self-contained components that run on their own resources. 

Credits: [Eric Elliot](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)

__Pros__
* __more readable__ - each component can be understood on its own
* __better organized__ - components dont depend on each other
* __reusable__ - components can easily be adjusted to work with other apps
* __scalable__ - hot services can be isolated and scaled independent of the rest of the app

__Cons__
* __complex shared functionilty__ - cross-cutting concers will need to either be handled in seperate modules or in a service layer that all traffic is routed through
* __more expensive__ - microservices are frequently on seperate VMs requiring configuration and maintenance overhead - this can be automated with container fleet management tools.

![3 Principles of Modeling Microservices](microservices.png)

### Implementation Strategies
Credits: [Xiao Ma](https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f)

* __Build new services with clear value__
  * dont create a service if it has no clear product or developmentvalue
  * its ok to leave some app components in a monolith
* __Monolithic Persistent Storage is Harmful__
  * avoid shared persistent storage where possible
  * shared data violates loose coupling - changes to data formats, technology, caching etc have to be reflected in all services
  * shared data violates high cohesion - behaviors in one service are leaked into other services and have to be handled/replciated
* __Decouple "Building a Service" and "Runnning a Service"__
  * running services is harder than building services because of networking, communication protocols, deployment, observability
  * make running services technology agnostic
  * tools for this are containerization, container-orchestration, service mesh, app performance monitoring
  * __Networking__ - use a [service mesh](#service-mesh) to handle communication between services
  * __Communication__ - use a mature, typed RPC framework for handling communication. While REST is great for client-server communication, RPC excels in server-server communication since it requires less boilerplate and is better with large volumes of requests.
  * __Deployment__ - make sure you have a consistant way of building, testing, packaging and deploying your services. Containerize and manage your container through tools like Kubernetes and/or AWS ECS
* __Thorough and Consistent Observability__
  * make sure you understand how your system is working
  * methods that facilitate this are: logging, performance tracking, metrics, dashboards, alerting
  * observability becomes especially hard in distributed systems
* __Not Every New Service Needs to be Built from Scratch__
  * try to peel of as much as you can from an existing monolith
  * prognod development overhead should be a key factor when deciding to build a new service
* __Respect Failure Because They Will Happen__
  * more things can fail in a distributed environment
  * assume everything will fail at some point
  * put extra effore to secure mission-critical services, especially RPC calls
  * good observibility helps you detect and understand failures
  * testing failures should always be done when implementing a new service
  * build __auto recovery__
* __Avoid Microservice Syndromes from Day One__
  * be aware of what problems microservices may cause
  * be aware from __day one__
  * services need to be well modeled, especially when in abundance
  * do not overly expand the tech stack - this increases operational costs and fragments engineering organization
  * decouple building and running
  * focus on data modeling so that each service has its own persistance layer
  * implement observability to detect and understand failures and performance
  * create services with the holistic picture in mind




## MIME Type
**M**ultipurpose **I**nternet **M**ail **E**xternsions is a standard for specifying a type of data being sent over a computer network. 

## Minimum Viable Product(MVP)
A version of a product with minimum functionality needed to sell and use the product. The goal of an MVP is encouraging early adopters to start using the product and enhancing the product based on the feedback they provide.

## Module
An independent software component designed to group features performing a given task. An application is usually composed of many components.

Modules are very powerful because they provide:
* reusability - are a standalone part which you can easily include in other applications. 
* readability - only deal with a single feature making it easier to understand and debug.
* security - only exposes what is needed and hides its inner working making it safe from external influences(other programs, an inexperienced developer, namespace pollution).

## Monolithic Architecture
A software design model where an application is built using tightly coupled components that work as a single unit sharing the same memory space and resources.

Credits: [Eric Elliot](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)

__Pros__
* __shared functionalities__ - ease of connecting components to shared functionality(logging, rate limiting, audit trails, DOS protection)
* possible __performance boost__

__Cons__
* __dont scale well__ - hard to decouple resource hungry components
* __harder to understand__ - often have to understand the whole to understand a piece of it

Also check-out [Microservice Architecture](#microservice-architecture).

## Multiplexing
A mechanism that combines multiple signals into one over a shared medium.

## Mutable
Meaning its state can be changed. Immutable variable types are usually assigned values which represent a reference to a space in memory. This means that any changes made to what the reference points at effects all other variables that share the same reference.

__JavaScript__: Object and arrays are mutable data types.

## Mutator
Also called a _Mutator Method_ or _Setter_ are methods that allow changing an objects state data.


&nbsp;
# N

## Namespacing
Various techniques used to organize code so that it doesn't polute the global namespace.

## Naming conflict
Also called a naming collision is when two identifiers within a given scope are identical.

## Native
Something designed to work with a particular system, meaning it can use that systems resources with minimal overhead.

## Network Architecture
The framework of a computer network. A diagram consisting of all resources and how they are connected. 

This includes:
* cabling
* connections and their types(wireless, LAN etc.)
* physical layout of the network
* protocols
* various hardware devices

## Network Protocols
Sets of rules for communication between network-enabled devices like server, computers or routers.

These protocols can be grouped by the network layer in which they operator:
* __Communication protocols__ - basic data interchange -> TCP/IP, HTTP
* __Security protocols__ - secure network communication -> HTTPS, SSL, SFTP
* __Management protocols__ - network governance and maintenance -> SNMP, ICMP

## Networking
The process of designing, building and maintaining a computer network. Computer networks are usually divided into various types of wireless and wired networks. 

Networking includes the hardware infrastructure(routers, switches, cables) and protocols that standardize the transfer of data over the infrastructure.

&nbsp;
# O

## Object
A value in memory that can be referenced through an identifier.

__JavaScript__: A wrapper that contains 0 or more key-value pairs which are called properties. Properties values can be of any data type. If a value is not assigned to a property it is automatically set to `undefined`. If a value is a function then it represents a method. Properties keys can be of type String or Symbol.

## Object Oriented Programming
A programming paradigm that involves:
* Abstraction - hiding complexities of a system and only exposing what is needed to the users.   
* Encapsulation - grouping related properties and methods under a single entity.
* Inheritance - passing down properties and methods between objects or classes creating a hirarchical dependency between them.
* Polymorphism - creating a method or function that works differentely depending on context of execution.

OOP focuses on data over algorithms. 

__Pros__:\
* Easy to understand
* Popular
* Readable if done right

__Cons__:\
* depends on shared state
* race conditions
* easy to mess up with multi-level inheritance
* hard to debug when messed up
* not future-proof

__Examples__: C++, C#, Java

## Object Oriented Design Problems
Object oriented programming can be very problematic in large and lengthy projects - especially when dealing with inheritance. Below are some issues that are so frequent they where given names.

### __Fragile Base Class Problem__
Classic inheritance means tight coupling means any changes in a base class must be handled appropriatly in any derivitive classes. Base class modification can essentially break any classes that inherit from it.

### __Gorilla Banana Problem__
In classical inheritance when you want to extend some class your new subclass adopts all the base class properties. And the base class could also be inheriting so you have to adopt its base class properties as well. And this goes on all the way up to the top level class. 

This way you could end up with a massive amount of unneeded properites on your newly created class. 

The name of the problem comes from a famous quote by Joe Armstrong:
> I think the lack of reusability comes in object-oriented languages, not functional languages. Because the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.

You wanted to create a Banana class that inherits form the Gorilla class which in turn inherits from the Jungle class and in the end you got a 'gorilla holding the banana and the entire jungle'.


### __Duplication By Necessity Problem__
To fix a problem or introduce a new feature in a series of classes coupled by inheritance you start from the top level class and build your way down. In effect you end up duplicating your code along the way - that is not [DRY](#DRY) code.


### __Tight Coupling Problem__
A parent and child class are tightly coupled. Any changes made to one of these classes could in effect break the other class.

## Observability
Processes, convention and tooling that allows us to track how the system is working.

This includes:
* logging
* performance tracking(profiling)
* collecting metrics
* dashboards
* alerting

Popular tools:
* [datadog](https://www.datadoghq.com/) - monitoring and analytics tool that works on any tech stack
* [lightstep](https://lightstep.com/) - gain insights and diagnostics on any type of application

## Off-by-one Error
A common logic error that occurs when a boundary condition is miscalculated by a measure of 1 unit. A good example is when a loop iterates 1 time too many or 1 time too few.

## Operand
The object of an operation.

## Operator
Symbols that represent mathematical and logical operations.

## OSI Model
The *O**pen **S**ystems **I**nterconnection model is a layered representation of how a telecommunication or computer network operates. Consists of 7 layers which create a hirarchical structure with the top layer being closest to the end user.

An alternative is the [TCP/IP model](#tcp/ip-model). It groups the application, presentation and session layers into one.

1. <u>__Application Layer__</u>
    * functionalities the end user interacts with directly
    * __examples__: Chrome, Skype, FileZilla
    * __protocols__: HTTP, POP3, SMTP, FTP, SOAP, IRC
1. <u>__Presentation Layer__</u>
    * facilitates communication between different elements in the application layer - creates a common context for them
    * __examples__: encryption, decryption
    * __protocols__: TLS, SSL
1. <u>__Session Layer__</u>
    * facilitates setup, coordination , termination of sessions between two devices or servers
    * __examples__: connecting to a remote VM
    * __protocols__: [RPC](#remote-procedure-call(rpc)), NetBIOS, PAP, PPTP
1. <u>__Transport Layer__</u>
    * coordinates data transfer(size of data, rate of transfer, destination) between edge devices like systems and hosts.
    * __examples__: transfering data over an established websocket between two servers
    * __protocols__: TCP, UDP, SCTP
1. <u>__Network Layer__</u>
    * facilitates communication between nodes in different networks
    * __examples__: a router in London sending packets to a router in Boston
    * __protocols__: IP, ICMP, NAT
1. <u>__Data Link Layer__</u>
    * controls the physical connection between two devices. The conditions for connection establishment, termination, error handling, flow control.
    * __examples__: when your phone connects to your wifi and you have to type in a password
    * __protocols__: Ethernet, WiFi(IEEE 802.11), ARP, VLAN, PPP, MAC, LLC
1. <u>__Physical Layer__</u>
    * facilities transmission of raw data through physcial medium
    * __examples__: transfering digital bits through a USB Bus from your thumb drive you your hard drive.
    * __protocols__: USB, DSL, ISDN, Infrared

Source:
* [wikipedia on protocols](https://en.wikipedia.org/wiki/List_of_network_protocols_(OSI_model)#Layer_7_(Application_Layer))
* [wikipedia on OSI](https://en.wikipedia.org/wiki/OSI_model#Layer_5:_Session_Layer)

## Overhead
Excess resources needed to perform a task.

&nbsp;
# P

## PaaS
__Platform as a Service__ is a cloud computing service model where the user is provided access to a computing platform which includes an OS, a runtime and any middleware. The user than installs, configures and manages any applications or data on that platform.

__Examples__: AWS, Heroku, Windows Azure

## Package
A namespace that organizes a set of related features.

## Package Manager
A program that automates installing, versioning, updating packages and managing dependencies.

## Parallel Programming
Pertaining to executing multiple threads at the same time.

## Parameter
A variable in a function declaration.

Do not confuse with an [argument](#argument) which is the actual value assigned to a parameter.

## Parser
A program that takes complex input(source code, markup, JSON, URI, etc.) and performs the following operations:
1. __Lexical Analysis__: divides the input into atomic parts called [tokens](#token).
1. __Syntactic Analysis__: groups the tokens into [expressions](#expression).
1. __Semantic Parsing__: determines the meaning of the expressions and passes it on to any programs that would make use of the parsed data.

Parsers are often components of compilers and interpreters(JavaScript, Java, HTML) but can also be stand-alone libraries(URI parsers, email parsers).

Credit: https://www.techopedia.com/definition/3854/parser

## Pipe
Connecting the output of one entity to the input of another.

For example reading data from one text file and writing it to another.

## Point-free Style
A function that does not reference its arguments. Usually achieved by composing simple functions that only take one argument and return one value.

## Polyfill
A [shim](#shim) specific to browsers. Used to introduce newer features to a browser that doesn't support them by combining features it does support.

## Port
An endpoint in communication that allows identification of a single process on a single machine. This works in conjunction with IP to enable process specific connection over a single IP.

## POSIX
A family of standards for providing a uniform API to UNIX and UNIX-based operating systems.

Making your application conform to POSIX standards ensures it will easily port to a large family of systems(example Linux, macOS).


## Proof of Concept(POC)
A realization of an idea to prove its feasability. A PoC is usually incomplete and doesn't necessarily abide by good coding standards. 

## Protocol
A set of rules two sides agree to when communicating. A standardized template for communication in various environments.

## Proxy Server
A server that acts as a gateway between a client and a server he makes requests to. A proxy intercepts connection between a sender and reciever providing an additional abstraction layer.

Types of proxy servers:
* __forward proxy__ - used by the client. Can work as a cache server for frequently downloaded resources or as a mechanism for hiding your identity by scrambling the clients IP.
* __reverse proxy__ - used by the server. Provides a layer responsible for forwarding a request to the appropriate server. This can be very useful for load balancing or increasing availability. For example it is common practice to run a reverse proxy in `nginx` to forward requests to one of many NodeJS servers.

## Primitive
Any data type that is not an object and has no methods. 

__Javacript__: These are `string`, `number`, `boolean`, `null`, `undefined` and `symbol`. A primitive variable stores its actual value.

## Procedural Programming
A programming paradigm focused on performing a task through subroutines that are executed one by one.

Procedural Programming focuses on algorithms over data.

__Examples__: PASCAL, C

## Profiling
Program analysis that measures various parameters of a programs performance:
* space complexity
* time complexity
* usage
* frequency of function calls
* real-time state

Usually done through a tool called a __profiler__. Aids in software optimization.

## Progressive Enhancement(PE)
A methodology for building web applications that focus on providing basic content and functionality. Advanced features are built on top of that core and used only by user agents that support them.

This ensures a good experience for users with a poor internet connection, legacy browsers or old devices and a great experience for everyone else.

## Progressive Web Apps(PWA)
Web applications that work like [native](#native) applications. They:
* are responsive and work cross-browser
* present content even when offline
* can be added to the home screen of a device
* load fast even on a poor internet connection
* offer fluid page transition and scrolling

For a thorough explanation checkout what [Google](https://developers.google.com/web/progressive-web-apps/) has to say on the subject.

## Pure Function
A function that:
* given the same input always provides the same output(are deterministic)
* produces no side effects

Side effects can be:
* mutating static variables
* mutating non-local variables
* mutating reference arguments
* mutating I/O streams

Pure function are independent of outside state meaning they:
* are immune to bugs that come with mutability
* can easily run concurrently
* are easy to refactor
* are easy to extend

Rull of thumb: _If you run it without using it's return value than it's probably not a pure function_

Pure functions are the backbone of [functional programming](#functional-programming) and using the is good programming practice.

## Push Notification
Small message that are sent as a response to a trigger. This trigger doesn't have to be an open aplication.

A web application can send push notifications through the __Notification API__ and __Push API__.

&nbsp;
# Q


&nbsp;
# R

## Race Conditions
When two or more threads share data and try to modify it at the same time. The result depends on the order of execution which is often impossible to control(thread switching depends on non-programmable mechanism).

## Refactor
Changing existing code so that it works better without changing how its used.

## Reflection
Examining and modifying a program at runtime.

__Reflection Types__:
* __Reflection within implementation__ - implementing features that change the codes behaviour
* __Reflection through introspection__ - examining low level information about the code
* __Reflection through intercession__ - wrapping objects and examing/modifying their behaviour through intercepting/changing input and output.

__Example__: Changing a function definition during execution.

## Regular Expression
A sequence of symbols expressing a pattern to be searched for in text.

__Quantifier__: special symbols that determine the number of matching elements.

__Greedy quantifier__: a quantifier that matches the maximum number of characters.

__Lazy quantifier__: a quantifier that matches the minimum number of characters.

__Zero-Length Assertions__: assert if the subexpression matches or not, but does not add it to the matched string.

Be careful when using regular expressions:
* they are very complex thus bug prone in the wrong hands
* can be hard to understand
* some implementations are slow

Rule of thumb:
* use [parsers](#parser) for complex data with a clear syntax(source code, urls, etc.)
* if the regular expression is too long think of a different approach
* don't try to solve all cases in a single regular expression(all valid emails could take a reg exp of over 1000 characters)

## 

## Remote Procedure Call(RPC)
A remote procedure call is when a client calls a procedure on a server located on another computer or network without having to understand the underlying network details.

A popular RPC framework - [grpc](https://grpc.io/about/).

## REPL
A __Read-eval-print-loop__ is a simple programming environment where you can easily run and execute your code without the hastle of installing extra software. 

## Responsive Design
A design practice when creating websites. A responsive website appropriately resizes, repositions, shows or hides elements to provide a great user experience on any device.

## REST
**Re**presentation **S**tate **T**ransfer is a method of data interchange over HTTP that focuses on loose-coupling between communicating entities and fast data transfer. The format of data is usually JSON or XML and the communnicating entities are usually a client and server. Request are made through specialized URL's.

<u>RESTful APIs Characteristics</u>:
* __seperation of concerns__ - the internal working of the client and server are isolated. 
    * reusable
    * flexible
    * scalable
* __stateless__ - servers and clients do not need to store information regarding eachothers state. They do not rely on interfaces, but on standard http message types(get, set, put etc.)
    * reliable
    * performant

<u>Client Request Content</u>
Client requests in a RESTful API usually consist of:
* __HTTP Verb__ - the type of operation being performed(get, set, etc.)
* __Header__  - the type of content being sent(mime type), the `accept` field in an HTTP request
* __Path__ - path to the resource the operation performs operations on. A path should be human readable and easy to understand
* __Body__ - additional data regarding the item. For example data with which to update a resource

<u>Server Response Content</u>
* __Status Code__ - HTTP status code regarding the operation
* __Content Type__ - the mime type of the data that is being sent back

<u>Used HTTP Verbs</u>:
|url example|verb|operation|success status code|
|-----------|----|---------|-------------------|
|/\<name>		|__POST__  |create new item| 200 |
|/\<name>		|__GET__   |fetch all items| 200 |
|/\<name>/:id	|__GET__   |fetch specific item| 200 |
|/\<name>/:id	|__PUT__   |update specific item| 201 |
|/\<name>/:id	|__DELETE__|delete specific item| 204 |

<u>Common Response Codes</u>
|Status code|Name|Description|
|:-----------:|----|-----------|
|200|OK|Successful request|
|201|CREATED|Item sucessfully created|
|204|NO CONTENT|Succesful request with empty response body|
|400|BAD REQUEST|General client error response|
|403|FORBIDDEN|No permission to access this resource|
|404|NOT FOUND|The resource could not be located|
|500|INTERNAL SERVER ERROR|General server error response|

## Retransmission
Mechanism that resends data that has been corrupted or lost during transmission from one entity to another.

## RFC
Request for Comments is a publication from the technology community regarding how the internet works or could work.

## Routing
In the context of Server Side Scripting it is mapping a specific http request to a specific response.

It the context of networking it is selecting a path for traffic within a network or across several networks.

## Runtime
See [Execution Phase](#execution-phase).

## Runtime Environment
An environment in which a program is executed. Think of it as a layer between written code and the machine on which it runs. This often includes the operating system, any libraries the program uses and an interpreter that translates the program into something a machine can understand.

&nbsp;
# S

## SaaS
__Software as a Service__ is a cloud computing service model where the user is provided with access to application software while the provider takes care of installing, setup and running the application.

__Examples__: Atlassian Suite, Google Apps

## Search Engine
A program that searches for items in a database based on querries submitted by users.

Popular _web search engines_ are made available by __Google__, __Yahoo__ or __Baidu__.

When creating an application that deals with a large amounts of variable search queries you can implement a search engine of you own. Popular solutions are:
* [ElasticSearch](https://www.elastic.co/)
* [Apache Solr](http://lucene.apache.org/solr/)

## Secure Shell(SSH)
A network protocol for connecting network services in a secure way over an unsecure network. Most often this network service is providing access to a remote machines command line. 

A very popular tool for SSH is OpenSSH(preinstalled on macOS).

## Semantic Versioning
Versioning software in a way where different components of the version number have a standardized meaning.

Source: [semver](https://semver.org/)

## SEO
Search engine optimization.

<u>Best SEO Practices</u>:
* aasdasdas

Source: [it-consultis](https://it-consultis.com/blog/best-seo-practices-for-react-websites)

## Separator
Symbols that structure a program. 

Like a semicolon `;` to mark the end of a statement or braces {} that mark the beginning and end of a function body.

## Serialization
Converting an object into a format that can be stored in memory, a database or a file. These formats could be a stream of bytes, JSON, CSV or XML.

## Server
A program(logical) or device(physical) that manages network resources and performs services.

There are various server types:
* <u>Web Server</u> - focuses on handling http requests
    * __Apache HTTP Server__ - free and open-source web server used by almost all hosting providers
    * __Nginx__ - an event-driven asynchronous web server good for handling high loads
    * __MS IIS__ - microsoft web server popular for connecting windows machines
* <u>Application Server</u> - focuses on handling business logic. Not limited to any particular protocol
    * __Apache Tomcat__ - an application server for working with java files
    * __Oracle WebLogic__ - durable and easy to use application server released by Oracle
* <u>Database Server</u> - focuses on data persistance

## Service Discovery
The automatic detection of services available on various devices on a computer network. This is usually done through a Service Discovery Protocol(SDP).

__Example__: DHCP is a Service Discovery Protocol.

## Service Mesh
An infrastructure layer that handles communication between various parts of an application.

__Examples__:
* [istio](https://istio.io/)
* [envoy](https://www.envoyproxy.io/)

## Service Worker
A script that is run by the browser outside of a web page.

Most common use cases are:
* sending [push notifications](#push-notifications)
* enabling offline support
* background sync
* client-side [load balancing](#load-balancing)

## Sharding
Database partitioning strategy that seperates large databases into many smaller parts called data shards.

## Shim
Code that intercepts an API Call, makes changes to it and forwards it. This allows introducing features in systems that don't normally support them.

## Singleton Pattern
A design pattern which restricts instantation of a class or specific object to a single instance.

## Slug
A human-readable URL component. Mostly used for:
* __SEO__ by fitting keywords into the url
* __Readability__ by replacing extensions and special characters with something concise and to the point

__Example__: In `www.example.com/home.html?search=shoes` you could make it more readable with a slug `www.example.com/shoes`

## Software Architecture
Defining software components and how they interact in order to meet specific business needs. It can be seen as a __blueprint__ for a system.

## Software Development Methodologies
How an IT project is strucutered, planned and controlled during its lifecycle.

Main categories are:
* __<u>Agile</u>__ - iterative development over short timeframes. Each iteration is like a mini-project of its own focusing on planning, requirement analysis, design, coding, testing and documentation. Priorities are re-evaluated at the end of each iteration.
    * flexible
    * realtime communication
    * working software as primary measure of progress
* __<u>Waterfall</u>__ - a rigid and linear methodology. Focuses on phases and each phase needs to be completed the next phase is started.
    * greater control
    * rigid
* __<u>Spiral</u>__ - extension of the waterfall method. Focuses on determining different risk factors and working on reducing them in iterations. If the team only starts work on the next iteration if risks at that stage are considered manageable.
    * focused on risk reduction
    * can be aborted at any iteration
    * focuses on prototyping

<u>Agile Methods</u>
* __DSDM__ - **D**ynamic **S**ystem **D**evelopment **M**odel treats software development like an exploratory endeavor. Nine principles:
    * active user involvement
    * teams have the authority to make decisions
    * frequent delivery of products
    * main criteria for deliverables is how well they fit business requirements
    * iterative and incremental development
    * reversible changes in development
    * high-level baselined requirements
    * constant integrated testing
    * collaboratioini among all stakeholders
* __XP__ - E**x**treme **P**rogramming is a very flexible, test-driven methodology that focuses on lowering the cost of implementing changes. Core practices based on taking good practices to the extreme:
    * team has customer on site for fast feedback
    * test early, test often
    * simple is better, on meet essential requirements, reduce code complexity
    * pair programming to review code as it is written
    * tests are written before the code is written
* __LD__ - **L**ean **D**evelopment focuses on creating change-tolerant software. Core principles are:
    * customer satisfaction is of highest priority
    * provide best value for the budget
    * active customer participation
    * focused on team effort
    * everything is changeable
    * domain, no point solutions
    * complete, don't construct
    * an 80% today over 100% solution tomorrow
    * minimalism is essential
    * needs determine technology
    * product growth is feature growth, not size growth
    * dont push team beyond limits
* __Scrum__ - focuses on team productivity. Features include:
    * backlog of prioritized work
    * completing a predetermined set of backlog items in a series of sprints
    * daily brief - progress, upcoming work, risk assessment
    * planning session for backlog description
    * heartbeat retrospective on lessons learned from previous sprints

Source: [itinfo](http://www.itinfo.am/eng/software-development-methodologies/)

## SOLID
5 coding principles relating to [Object Oriented Programming](#object-oriented-programming), but is not only limited to OOP languages(consider JavaScript which is a multiparadigm language).

Keep in mind that programming is all about tradeoffs. Keep coding principles in mind but don't go crazy trying to abide by them and use common sense wherever possible. 

### **S**ingle Responsibility Principle
> A class or function should only perform one job

When implementing something complex figure out if any common logic can be extracted into smaller reusable functions. On the other hand if a set of functions is always called together consider grouping them under a wrapper function.

### **O**pen Closed Principle
> Software entities should be open to extension but closed to modification

Your functions, modules, classes should work in a way that you can add new features on top of them without changing their underlying code.

No client should ever be forced to edit an external function/module/class in order to fit it to their needs. They should be able to create an abstraction layer that can communicate with it.

### **L**iskov Substitution Principle
> A subclass should be substitutable for its base class

Subclasses should override all their base class methods in a way that you could use them interchangeably without causing errors. If this is not possible then reconsider how or if to use inheritance.

### **I**nterface Segregation Principle
> No client should be forced to depend on methods it does not use

When writing code that is meant to be reused always make sure only the bare minimum is required and the rest is optional.

### **D**ependency Inversion Principle
> High-level modules should not depend on low-level modules. Both should depend on abstractions

Modules should interact with each other through abstractions - not directly. This way you can change the inner workings of a module without affecting how it communicates with other applications.

> Abstractions should not depend on details. Details should depend on abstractions

You should not have to change an abstraction just because it needs to be used by a different client.

Quite often by following the _Single Responsibility Principle_ and _Open Closed Principle_ you also conform to the _Dependency Inversion Principle_.


## Statement
An action to be executed.

__JavaScript__: A statement cannot be used where a value is expected(even though in JavaScript statements produce a value).

## Static Analysis
Inspecting and debugging code without running it. Checking the source code itself, not how it executes. 

Lots of code editors have static analysis built-in which allows catching syntax error and poor practices early on.

## String Interpolation
Replacing placeholders in a string literal with their corresponding values.

## Stub
Is a mockup component used for testing software. 

Sometimes you need to test a component that relies on another component that hasnt been implemented yet. In order to do this you create a simplified version of that component in order to perform the testing.

## Subdomain
Subdomains allow creating seperate versions of a website under one domain. 

Often used for:
* __multilingual website__ - seperate a site depending on the users chosen language 
    * `en.somesite.com`
    * `cn.somesite.com`
    * `de.somesite.com`
* __mobile version__ - a seperate mobile version of a website `mobile.somesite.com`
* __complex websites__ - seperate subdomain for different features 
    * `shop.somesite.com` 
    * `vendor.somesite.com` 
    * `dashboard.somesite.com`
* __distributed server architecture__ - seperate subdomain for content served from different servers.
    * `admin.somesite.com`
    * `app.somesite.com`

Advantages:
* adds a keyword to the domain name for SEO or branding.
* search engines treat it like a seperate site, which could result in your domain appearing more than once in search results. Especially useful if the original domain already has strong positioning.

This is not always the best approach. An alternative is using subdirectories. When building a feature packed web site consider using subdomains.

## Surrogate Pair
A pair of two UTF-16 [code units](#code-unit) that resolve to a single [code point](#code-point). Used for code points that can not be encoded in 16 bits.

A surrogate pair is comprised of a:
* __high surrogate__ ranging from U+D800 to U+DBFF
* __low surrogate__ ranging from U+DC00 to U+DFFF

&nbsp;
# T

## Technical Debt
The later cost(additional rework, refactor) for implementing a faster/easier/incomplete solution now. 

__Common causes__:
* poorly defined product/functionality at implementation phase
* pressure from product owner / stakeholders
* lack of understanding the possibility of technical debt
* tightly coupled components
* no test suite
* no documentation
* no collaboration
* parallel development - later merging increases technical debt
* delayed refactoring
* poor coding practices
* poor technological leadership
* last minute changes to specification

## Task Runner
Allow automating various tasks required during software development. Anything that can be executed from the command line can be bundled into a script. Task runners control how and when these scripts are executed.

Popular task runners include:
* [npm scripts](https://docs.npmjs.com/misc/scripts)
* [grunt](https://gruntjs.com/)
* [gulp](https://gulpjs.com/)

Comparison:
* [gulp vs npm-scripts](https://gist.github.com/elijahmanor/179e47828bf760c218bb3820d929836d)

## Template
A file containing placeholders that are replaced with values during runtime.

## Transmission Control Protocol(TCP)
__TCP__ is a standard that defines how two devices communicate over an IP network. TCP is responsible for providing rules on:
* establish and maintaining a connection between devices
* how transmitted data is broken up into pieces(packets)
* sending and accepting packets from the network layer
* managing flow control
* retransmission
* transmission acknowledgement

Every operating system is TCP capable.

## TCP/IP Model
Also called the __Internet Protocol Suite__ or __Department of Defense model__ is a layered representation of how a computer network operates. Consists of 4 layers which create a hirarchical structure with the top layer being closest to the end user.

An alternative is the [OSI model](#osi-model) which seperates the Application Layer into 3 seperate layers.

1. <u>__Application Layer__</u>
    * applications which allow interaction with the end user and communication between those applications on the same host
    * __examples__: Chrome, Skype, FileZilla
    * __protocols__: HTTP, SMTP, FTP, SSH, DHCP
1. <u>__Transport Layer__</u>
    * facilitates host to host connectivity. May provide error control, flow control, congestion control, segmentation and application addressing(port numbers)
    * __examples__: transfering data over an established websocket between two servers
    * __protocols__: TCP, UDP
1. <u>__Internet Layer__</u>
    * facilitates communication between nodes in different networks
    * __examples__: a router in London sending packets to a router in Boston
    * __protocols__: IP, ICMP, NAT
1. <u>__Link Layer__</u>
    * controls the physical connection between two devices and the transmission of raw data through physcial medium
    * __examples__: connecting a thumb drive to a computer and transfering its data to your hard drive.
    * __protocols__: MAC, USB

## Token
Atomic element of a program. This could be an [identifier](#identifier), [keyword](#keyword), [literal](#literal), [operator](#operator) or [seperator](#separator).

## Type coercion
Converting a value of one type to another. This can happen automatically, which is called __implicit type coercion__ or with expressed intention to convert which is called __explicit type coercion__.

__JavaScript__: You can only convert to __string__, __boolean__ or __number__. For a more in depth explanation check out [this article](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839).

&nbsp;
# U

## Unicode
A character set that provides a unique number([code point](#code-point)) for characters in most modern languages, diacritics, symbols, emojis and more. These unique numbers are hexadecimals ranging from __0000__ to __10FFFF__ which results in __1,114,112__ different values. As of Unicode Version 9.0 __128,237__ of these are in use. 

Some popular implementations of Unicode are __UTF-8__, __UTF-16__ and __UTF-32__. These are called character encodings and work by mapping Unicode numbers to a bit sequence called a [code unit](#code-unit).

As of 2018 __UTF-8__ is used on over 90% websites.

Here is a [list of Unicode characters](https://unicode-table.com/en/) and their matching numbers.

__JavaScript__: Most JavaScript engines use __UTF-16__ encoding.


## URI
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

## URL
A Uniform Resource Locator is a string that identifies a web resource. A URL specifies a resources location. It is a subset of URI's and follows the same syntax.

`http://www.somewebpage.com/search?q=example+search`

## User Agent
Software used by a user. For example:
* `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:64.0) Gecko/20100101 Firefox/64.0` - which is parsed to Firefox 64 on macOS(Mojave)
* `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36` - which is parsed to Chrome 71 on macOS(Mojave)

&nbsp;
# V

## Vertical Scaling
Adding more power to an existing resource.

&nbsp;
# W

## Web Services
A service that facilitates transfering data(XML, JSON) between machines using a networking protocol like HTTP.

Examples: [AJAX](#ajax), [REST](#rest).

## Web Sockets
A communication protocol that allows two-way data exchange between client and server over a single TCP connection. Web Socket connections are persistant. If one side disconnects unexpectedly both sides will attempt to reestablish the connection.

## Wrapper Type
Or wrapper object / wrapper class is a data type that encapsulates(or "wraps") another data type extending or simplifying its usage.

&nbsp;
# X


&nbsp;
# Y

## YAGNI
> You Ain't Gonna Need It

A coding principle stating that you shouldn't implement a functionality until you are absolutely sure you need it.


&nbsp;
# Z

