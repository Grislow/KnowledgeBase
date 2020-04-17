# Jenkins Guide

Sources:
* [Job van der Voort](https://dzone.com/articles/9-bene-ts-of-continuous-integration)

#### Table of contents
* [Introduction](#introduction)


&nbsp;
# Introduction

__Benefits of CI__:
1. Tests commited changes in the context of the whole codebase
    * whithout it Unit and Integration tests are performed on local snapshots of the codebase
1. Increase Code Coverage
    * a CI server checks code base for test coverage and presents diagnostics to the whole team
1. Increased Visibility
    * the whole time can view test coverage and build status
1. Deploy your Code
    * CI systems can automatically deploy commited changes to a testing / staging / production environment
1. Manage Lengthy Processes
    * CI system will notify you if anything goes wrong during the build process
    * CI system can restart or trigger processes
1. Faster Build
    * run multiple build processes over different machines
1. Never Ship Broken Code
    * code is only merged after all tests pass
1. Decrease Code Review Time
    * integrate CI and Version Control System to inform you when code is ready to be merged
1. Build Repeatable Processes
    * create repeatable processes within the CI tool to standardize development best practices