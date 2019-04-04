Various handy checklists and best practices for developers or project managers.

#### Table of contents

* [Containerization](#containerization)
    * [Can An App Be Containerized](#can-app-be-containerized)
* [Databases](#databases)
    * [Database Design Checklist](#database-design-checklist)
    * [MongoDB Checklist](#mongoDB-checklist)
* [Interviews](#interviews)
    * [Python Engineer](#python-engineer)
    * [Quality Assurance Engineer](#quality-assurance-engineer)
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
Source: [awesome-interview-questions](https://github.com/MaximAbramchuck/awesome-interview-questions)


## React Developer
Source: [edureka.com](https://www.edureka.co/blog/interview-questions/react-interview-questions/)


## Python Engineer
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
    * **kwargs is a collection of all keyword arguments passed to a function
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
    * jak dlugo czlowiek musi sie uczyc zeby byc dobrym deweloperem? ile trwa ten proces nauki?
- [ ] Do you like programming?
- [ ] What was your road to a career in programming?

## Quality Assurance Engineer
- [ ] Difference betweeen __Quality Assurance__, __Quality Control__ and __testing__?
    * __Quality Assurance__ => planning/defining how tests are implemented/monitored and quality standards
    * __Quality Control__ => process of finding defects and providing suggestions to improve quality
    * __testing__ => process of finding bugs and defects
- [ ] When should QA activities start?
    * as soon as possible
    * delay of QA activities can cost a lot of time, money and efforts
- [ ] What is the difference between the __Test Plan__ and __Test Strategy__?
    * __Test Strategy__ => higher level established by PM that demonstrates the overall approach to testing
    * __Test Plan__ => how an application in a particular project should be tested
- [ ] Explain the software testing lifecycle?
    * STLC is a process which has specific steps that are executed in a sequence to ensure quality goals have been met:
        1. __Requirements phase__ - study reqs, determine if testable, scope of testing
        1. __Planning phase__ - identify resources/activities to meet testing objectives. Identify metrics, method of gathering and tracking metrics. Take into account:
            * requirements
            * test strategy
            * risk analysis / risk management / risk mitigation
        1. __Analysis phase__ - "WHAT" to test, identify test conditions:
            * levels and depth of testing
            * complexity of the product
            * product and project risks
            * software development life cycle
            * test management
            * skills and knowledge of team
            * availability of stakeholders
        1. __Design phase__ - "HOW" to test
            * break down conditions into multiple sub conditions
            * identify and get test data
            * create requirement traceability metrics
            * create test coverage metrics
        1. __Implementation phase__
            * test case priorities
            * identify which test cases become part of regression suite
            * review test cases
            * select which test cases can be automated
            * script those test cases
        1. __Execution phase__
            * execute test cases
            * log defects
            * fill your traceability metrics to track progress
        1. __Conclusion phase__
            * exit criteria
            * reporting
            * DSR - daily status report
            * WSR - weekly status report
        1. __Closure phase__ - check for completion, lessons learnt meeting, lessons learnt document
- [ ] Define a format of writing a good test case?
    * test case id
    * test case description
    * severity
    * priority
    * environment
    * build version
    * steps to execute
    * expected results
    * actual results
- [ ] What is a good test case?
    * one which finds defects, or one which is detailed with high coverage
- [ ] What would you do if you had to execute a large suite in little time?
    * execute high priority test cases first
- [ ] Should QA's participate to resolve production issues?
    * yes, especially for environmental issues(restarting services, clearing logs)
- [ ] How would you make sure a bug you found in production was not introduced again?
    * create a test case for the defect and include it in the regression suite
- [ ] What is the difference between __functional__ and __nonfunctional__ testing?
    * __functional testing__ - tests if application behaves as per the requirement and specification 
    * __nonfunctional testing__ - tests environmental factors like performance, load, stress
- [ ] What is __negative testing__? How is it different from __positive testing__?
    * __negative testing__ - checks if system behaves gracefully in case of invalid inputs
    * __positive testing__ - checks if system behaves appropriately in case of valid inputs
- [ ] How do you ensure testing is complete and has good coverage?
    * through requirement traceability matrix and test coverage matrices
- [ ] What are different artifacts you refer when you write test cases?
    * __Functional Requirement Specification__
    * __Requirement understanding document__
    * __Use Cases__
    * __Wireframes__
    * __User Stories__
    * __Acceptance criteria__
    * __Many a time UAT test cases__
- [ ] Have you ever wrote test cases without having documents?
    * yes, best approach is:
        * collaborate with BA and development team
        * look for information in mails
        * dig into older test cases/regression suites
        * if feature is new read wiki or documentation
        * sit with developer and understand changes
        * identify test case and send to BA or stakeholders for review
- [ ] What is __Verification__ and __Validation__?
    * __Verification__ - evaluating intermediary work products of Software development lifecycle
    * __Validation__ - evaluating the final product to determine if it meets business needs
- [ ] Name different verification techniques you know?
    * __review__ - code/test cases are reviewed by someone other than the author
    * __inspection__ - technical and disciplined review to examine and correct defects. Roles:
        * moderator - facilitates inspection meeting
        * recorder - records minutes of the meeting
        * reader - reads out document/code
        * producer - the author of the tested artifact
        * reviewer - experts reviewing the artifact
    * __walkthrough__ - author reads the content and gets feedback
- [ ] What is the difference between __Load testing__ and __Stress Testing__?
    * __Load testing__ - validate under expected load - concurrent users or resources accessing the system
    * __Stress Testing__ - validates behavior of system under stress
        * gradually reduce system resources to check behavior and find limit
- [ ] What do you dont when you have doubts about the project?
    * read through available artifacts/documentation
    * then ask immediate supervisor or friend
- [ ] Have you used any Automation Tools?
- [ ] How do you determine which piece of software requires how much testing?
    * cyclomatic complexity


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

# NodeJS Security Checklist
Source: [Gergely Nemeth](https://blog.risingstack.com/node-js-security-checklist/)


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
