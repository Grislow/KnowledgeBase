# Azure Devops Reference

#### Table of contents

* [Test Plans](#test-plans)

&nbsp;
# Test Plans
Test plans in Azure Dev Ops are a web based tool designed for planning, authoring, executing and tracking manual tests.

Official guide: [doc.microsoft.com](https://docs.microsoft.com/en-us/azure/devops/test/overview?view=azure-devops)

## Permissions
* Required access level:
    * Basic - can edit test cases
    * Basic + Test Plan - all test plan features
* User Level permissions required(or):
    * Project Administrator group
    * Manage Test Plans and Manage Test Suites permission

## Manual testing
Manual testing in ADO encompasses the following business processes:
* **planned testing** - organize tests into test plans and test suites linked to work items in the Azure Devops Boards
* **user acceptance testing** - verify that the value delivered by a product meets customer requirements
* **exploratory testing** - explore the software system and share your finding without using specific test plans and test suites
* **stakeholder feedback** - enable users outside of the implementation team(like sales or marketing) to test the product and provide feedback

## Test Artifacts
* **test plans** - group test suites within a project
* **test suites** - group test cases withing a test plan. Come in different colors:
    * static test suites
    * **requirement-based suites** - selects work items that require testing based on a query
    * query-based suites
* **test cases** - validate individual parts of your code or application
* **test configuration** - 
* **shared step** - 
* **shared parameter** -
