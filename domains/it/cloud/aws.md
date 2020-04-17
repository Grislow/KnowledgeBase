# AWS Guide

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.

Source:
* [udemy - aws-certified-solutions-architect-associate](https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/)

#### Table of contents

* [General](#general)
    * [Glossary](#Glossary)
    * [Account](#Account)
* [IAM](#IAM)
* [EC2](#IAM)

&nbsp;
# General

## Glossary

**AWS Region** - a physical data center in a region, separate from other data centers. 
* named according to the following convention: `<country_code>-<region>-<availability_zone>`.
* example: eastern United States = `us-east-1a`
* AWS Consoles are region scoped(apart from IAM and S3)
* a map of AWS regions: https://aws.amazon.com/about-aws/global-infrastructure/

## Account
Account services and configurations:
* **Billing Dashboard**
    * *Budgets* - budgets are ways of controlling your spending. You can setup a maximum amount you want to spend over a period of time.
    * *Bills* - a list of all costs and descriptions


&nbsp;
# IAM
*Identity and Access Management* is how AWS security is handled.
* entities include: 
    * Users - a physical person
    * Groups - users grouped by functions(devops, admin) or teams(engineering, design)
    * Roles - a machine. Roles are used internally by AWS
* the root account should never be shared or used
* users are assigned permissions
* policies(what everyone can do) are written in `JSON`
* all AWS services interact with IAM
* has prebuilt policies(templates you can use)
* can enable MFA(multi-factor-authentication)
* **IMPORTANT**: give minimum amount of permissions required to perform job(least privilege principal)

Rules of thumb:
* 1 User per physical person
* 1 Role per application
* never share credentials
* never write IAM credentials in code and never commit them
* only use root account for initial setup
* never use root IAM credentials

## IAM Federation
A IAM solution for enterprises
* allows integration of own repository of users
* users can login using company credentials
* uses SAML standard



&nbsp;
# EC2