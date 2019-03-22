Various handy checklists and best practices for developers or project managers.

#### Table of contents

* [Containerization](#containerization)
    * [Can App Be Containerized](#can-app-be-containerized)
* [Databases](#databases)
    * [Database Design Checklist](#database-design-checklist)
    * [MongoDB Checklist](#mongoDB-checklist)
* [Interviews](#interviews)
    * [Python](#python)
    * [Tester](#tester)
    * [Javascript](#javascript)
* [Backend Development Checklist](#backend-development-best-practices)
* [NodeJS Best Practices](#nodejs-best-practices)
* [OWASP Security Guidelines](#owasp-security-guidelines)
* [RODO](#rodo)
* [Tech Lead Checklist](#tech-lead-checklist)
* [Web Application Checklist](#web-application-checklist)

&nbsp;
# Containerization

## Can App Be Containerized
Source: [mesosphere.com](https://mesosphere.com/blog/five-steps-you-can-use-to-determine-if-an-existing-app-can-be-containerized/)

1. Is App a single binary? 
    * single binaries or JARs are easy to containerize
1. Is the build platform containerized?
    * many popular platforms like Node.js, Drupla, Joomla are available as docker containers.
1. If its a 3rd party App check with vendor
    * Lots of vendors offer containerized versions of their software
1. Is the App stateless?
    * apps that do not hold persistent data locally are easier to containerize
1. Is your application already a part of CI/CD pipeline?
    * if an apps integration and development is streamlined its not only easier but beneficial to containerize it

&nbsp;
# Databases

## Database Design Checklist
Source: [stackoverflow](https://stackoverflow.com/questions/580233/what-are-the-most-important-considerations-when-designing-a-database)

* <u>Transaction rate</u>
    - [ ] __Hi__    -> web portal
    - [ ] __Low__   -> hr system
* <u>Security</u>
    - [ ] __Important__ -> personal, financial data
    - [ ] __Trivial__   -> product catalog
* <u>Transaction type</u>
    - [ ] __Write__ -> lots of insterts/updates
    - [ ] __Read__  -> only reading data
* <u>Users and Usage patterns</u>
    - [ ] __Peak Load__             -> is there a peak usage
    - [ ] __Evenly Distributed__    -> is usage evenly dist
* <u>Uptime</u>
    - [ ] __24x7__  -> is it essential that its always up
    - [ ] __16x5__  -> can be up only during business hours
* <u>Target Size</u>
    - [ ] __Big__   -> __partition__
    - [ ] __Small__
* <u>Hosting type</u>
    - [ ] __Enterprise cluster__ -> __hot failover__
    - [ ] __Normal Hosting__
* <u>Administration Type</u>
    - [ ] __assigned__ -> backups, integration with systems, data loading
    - [ ] __reactive__
* <u>__Data Loading__</u>
* <u>__Data Integrity__</u>
    - [ ] __Modeling the UoD__

## MongoDB Checklist

### Development Checklist
Source: [MongoDB Development Checklist](https://docs.mongodb.com/manual/administration/production-checklist-development/)


### Security Checklist
Source: [MongoDB Security Checklist](https://docs.mongodb.com/manual/administration/security-checklist/)


### Operations Checklist
Source: [MongoDB Operations Checklist](https://docs.mongodb.com/manual/administration/production-checklist-operations/)

&nbsp;
# Interviews

## Python
- [ ] What is Python?
    * interpreted language, does not need to compile before execution
    * dynamically typed
    * OOP - supports classes, composition, inheritance, no access specifiers
    * classes are first class citizens
    * functions are first class citizens
    * execution is slow(interpreter language), so Python allows C based extensions to optimize bottlenecks
- [ ] How do you keep track of different versions of your code?
    * versioning tools
    * pull requests
- [ ] What are *args, **kwargs?
    * *args is a collection of all arguments passed to a function
    * **kwargs* is a collection of all keyword arguments passed to a function
- [ ] What paradigms(paradygmaty) does Python support and how?
    * OOP - classes, composition, inheritance
    * Functional - first class functions
- [ ] How does garbage collection in Python work?
    * makes use of reference counting
    * can clean up reference cycles
    * newer objects are prioritized
- [ ] What would make you a good candidate for this project?
- [ ] What do you feel are your weaknesses?
- [ ] Do you have any personal projects?
- [ ] How long does one have to learn to become a good developer?
    -jak dlugo czlowiek musi sie uczyc zeby byc dobrym deweloperem? ile trwa ten proces nauki
- [ ] Do you like programming?
- [ ] What was your road to a career in programming?


## Tester
- [ ] something

## Javascript
- [ ] something


&nbsp;
# Backend Development Best Practices
Source: [futurice](https://github.com/futurice/backend-best-practices#bill-of-materials)

## Development Environment
- [ ] 
- [ ] 

## Data


&nbsp;
# NodeJS Best Practices
Source: [i0natan](https://github.com/i0natan/nodebestpractices)



&nbsp;
# OWASP Security Guidelines
Source: 
    * [OWASP Security PDF](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
    * [OWASP Secure Coding Practices](https://www.owasp.org/index.php/OWASP_Secure_Coding_Practices_-_Quick_Reference_Guide)



&nbsp;
# RODO
Source: https://mamstartup.pl/prawo/12190/wplyw-rodo-na-aplikacje-e-sklepy-i-serwisy-internetowe-praktyczny-przewodnik


&nbsp;
# Tech Lead Checklist
Source: [dev.to](https://dev.to/backendandbbq/what-does-a-tech-lead-do-1cpj)

<u>Software Development Methodology</u>
- [ ] Number of days in iteration
- [ ] Which tasks should be estimated
- [ ] How to estimate tasks
- [ ] Should changes in requirements between iterations be acceptable
- [ ] Rules on task types and priorities

<u>Technical Stack</u>
- [ ] __Client__ (React / Angular / Vue)
- [ ] __Web Server__ (nginx / Apache / Node.js)
- [ ] __Application Server__ (AWS / Node.js / Python )(Express)
- [ ] __Data Persistance__ (MongoDB / MySQL / SQL Server)
- [ ] __Module Bundler__ (webpack)
- [ ] __Task Runner__ (npm-scripts / gulp)
- [ ] __Testing__ (jest / enzyme / cypress)

<u>Software Architecture</u>
- [ ] __Conceptual Model__
- [ ] __Logical Model__
- [ ] __Physical Model__
- [ ] __Component Level Design__
- [ ] __Technical Documentation__ (implementation details, reusability, risks)

<u>Non-Functional Requirements</u>
- [ ] __MVP__
- [ ] __MMP__
- [ ] __Perfect product__(optional)
- [ ] __Future of product__

<u>Tools</u>
- [ ] __Knowledge Repository__ (confluence)
- [ ] __Issue Tracking Tool__ (jira)
- [ ] __Repository__ (github)
- [ ] __Code Reviews__ (github)
- [ ] __Live Communication__ (skype / slack)

<u>Internal Milestones</u>
- [ ] __Functional Roadmap__
- [ ] __Clear Milestones__
- [ ] __Independent Work Streams__ for remote teams

<u>Service Level Indicators</u>
- [ ] __Identify Services__
- [ ] __Monitor Services__
- [ ] __Number of processed jobs__ - do we need it?

<u>Rollout Schedule</u>
- [ ] __Deployment plan__ (after merges / every x time)

<u>Communication</u>
- [ ] __How often__
- [ ] __Form of communication__
- [ ] __Subject of communication__
- [ ] __Retrospectives__ how often?

<u>Split of Work</u>
- [ ] __How to decide priority__
- [ ] __Who does what__
- [ ] __Determine bottle-necks__

<u>Code Review Policy</u>
- [ ] __how are pull requests approved__ (consensus / senior engineers / team lead)
- [ ] __pull request standards__
    * what changed
    * checklists(docs, test)
    * how to use the feature(like a gif)
    * how it changed design
    * dev notes
    * interactive rebasing
- [ ] bug identification (type(style, missing, wrong), severity(minor, medium, major), location(line num), description)

<u>EOD Contributions</u>
- [ ] __Hot Fixes__
- [ ] __POC for Pull Request__
- [ ] __Commit DB / Configuration Changes__
- [ ] __Investigate Weird Bugs__
- [ ] __Investigate Implementation Ideas__


&nbsp;
# Web Application Checklist
Source: [dhilipsiva](https://github.com/dhilipsiva/webapp-checklist)

## Front End

### User Experience
- [ ] 
- [ ] 
- [ ] 
