# AWS Certified Database Specialty

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.


#### Table of contents
* [Purpose Built Databases](#purpose-built-databases)
* [Basics](#basics)
    * [Data Types](#data-types)
    * [Relational Databases](#relational-databases)
    * [Non-relational Databases](#non-relational-databases)
* [RDS & Aurora](#rds-&-aurora)
    * [RDS](#rds)
        * [RDS - Instance Type, Storage Type & Storage Auto-Scaling](#rds---instance-type,-storage-type-&-storage-auto-scaling)
        * [RDS - Parameter Groups](#rds---parameter-groups)
        * [RDS - Option Groups](#rds---option-groups)
        * [RDS - Security - Network](#rds---security---network)
        * [RDS - Security - IAM](#rds---security---iam)
        * [RDS - Rotating DB Credentials](#rds---rotating-db-credentials)
        * [RDS - Windows Authentication in SQL Server](#rds---windows-authentication-in-sql-server)
        * [RDS - Encryption in Transit & at Rest](#rds---encryption-in-transit-&-at-rest)
        * [RDS - Backups](#rds---backups)
        * [RDS - Copying & Sharing Snapshots](#rds---copying-&-sharing-snapshots)
        * [RDS - Encrypting an Unencrypted DB](#rds---encrypting-an-unencrypted-db)
        * [RDS - DB Restore Options](#rds---db-restore-options)
        * [RDS - Export Snapshot to S3](#rds---export-snapshot-to-s3)
        * [RDS - Backup & Restore](#rds---backup-&-restore)
        * [RDS - Multi-AZ Deployments & Read Replicas](#rds---multi-az-deployments-&-read-replicas)
        * [RDS - Read Replica Use Cases](#rds---read-replica-use-cases)
        * [RDS - Promoting Read Replica to Standalone DB](#rds---promoting-read-replica-to-standalone-db)
        * [RDS - Multi-AZ Failover and Replica Promotion](#rds---multi-az-failover-and-replica-promotion)
        * [RDS - Enabling Writes on Read Replica](#rds---enabling-writes-on-read-replica)
        * [RDS - Read Replica Capabilities](#rds---read-replica-capabilities)
        * [RDS - 2nd Tier Replicas & Replica Promotion](#rds---2nd-tier-replicas-&-replica-promotion)
        * [RDS - Cross-Region Read Replicas](#rds---cross-region-read-replicas)
        * [RDS - Replicas With External DB](#rds---replicas-with-external-db)
        * [RDS - DR Strategies](#rds---dr-strategies)
        * [RDS - Replica Troubleshooting](#rds---replica-troubleshooting)
        * [RDS - Performance Hit on New Read Replicas](#rds---performance-hit-on-new-read-replicas)
        * [RDS - Scaling & Sharding](#rds---scaling-&-sharding)
        * [RDS - Monitoring](#rds---monitoring)
        * [RDS - Event Subscriptions, Recommendations & Logs](#rds---event-subscriptions,-recommendations-&-logs)
        * [RDS - Exporting Logs to S3](#rds---exporting-logs-to-s3)
        * [RDS - Enhanced Monitoring](#rds---enhanced-monitoring)
        * [RDS - Performance Insights](#rds---performance-insights)
        * [CloudWatch Application Insights](#cloudWatch-application-insights)
        * [RDS - VMWare](#rds---vmware)
        * [RDS - Good to know](#rds---good-to-know)
    * [Aurora](#aurora)
        * [Aurora - Architecture](#aurora---architecture)
        * [Aurora - Parallel Query](#aurora---parallel-query)
        * [Aurora - Serverless](#aurora---serverless)
        * [Aurora - Data API for Serverless](#aurora---data-api-for-serverless)
        * [Aurora - Multi-master](#aurora---multi-master)
        * [Aurora - Cross-Region Replicas & Global DB](#aurora---cross-region-replicas-&-global-db)
        * [Aurora - Reliability Features](#aurora---reliability-features)
        * [Aurora - Pricing Model](#aurora---pricing-model)
        * [Aurora - Security](#aurora---security)
        * [Aurora - Parameter Groups](#aurora---parameter-groups)
        * [Aurora - Scaling Options](#aurora---scaling-options)
        * [Aurora - Monitoring & Advanced Auditing](#aurora---monitoring-&-advanced-auditing)
        * [Aurora - Exporting Logs](#aurora---exporting-logs)
        * [Aurora - DB Activity Streams](#aurora---db-activity-streams)
        * [Aurora - Troubleshooting Storage Issues](#aurora---troubleshooting-storage-issues)
        * [Aurora - Benchmarking](#aurora---benchmarking)
        * [Aurora - Exporting Data into S3](#aurora---exporting-data-into-s3)
        * [Aurora - Backups & Backtracking](#aurora---backups-&-backtracking)
        * [Aurora - Backups & Snapshots & Backtrack](#aurora---backups-&-snapshots-&-backtrack)
        * [Aurora - Cloning DBs](#aurora---cloning-dbs)
        * [Aurora - Failovers](#aurora---failovers)
        * [Aurora - PostgreSQL - Cluster Cache Management (CCM)](#aurora---postgresql---cluster-cache-management-(ccm))
        * [Aurora - Simulating Fault Tolerance](#aurora---simulating-fault-tolerance)
        * [Aurora - PostgreSQL - Fast Failover](#aurora---postgresql---fast-failover)
        * [Aurora - MySQL - Cluster Replication Options](#aurora---mysql---cluster-replication-options)
    * [Aurora Replicas vs RDS MySQL Replicas](#aurora-replicas-vs-rds-mysql-replicas)
    * [RDS Deployment Comparison](#rds-deployment-comparison)
    * [Invoke Lambda from Aurora MySQL](#invoke-lambda-from-aurora-mysql)
    * [Load data from S3 into Aurora MySQL](#load-data-from-s3-into-aurora-mysql)
    * [RDS & Aurora - Good to Know](#rds-&-aurora---good-to-know)
* [DynamoDB](#dynamodb)
    * [DynamoDB - Basics](#dynamodb---basics)
    * [DynamoDB - Consistency](#dynamodb---consistency)
    * [DynamoDB - Pricing Model](#dynamodb---pricing-model)
    * [DynamoDB - Throughput](#dynamodb---throughput)
    * [DynamoDB - Calculating Capacity Units](#dynamodb---calculating-capacity-units)
    * [DynamoDB - Burst Capacity & Adaptive Capacity](#dynamodb---burst-capacity-&-adaptive-capacity)
    * [DynamoDB - LSI](#dynamodb---lsi)
    * [DynamoDB - GSI](#dynamodb---gsi)
    * [DynamoDB - LSI vs GSI](#dynamodb---lsi-vs-gsi)
    * [DynamoDB - Simple Design Patterns](#dynamodb---simple-design-patterns)
    * [DynamoDB - Errors & Exceptions in DynamoDB](#dynamodb---errors-&-exceptions-in-dynamodb)
    * [DynamoDB - Partitions](#dynamodb---partitions)
    * [DynamoDB - Partition Behavior](#dynamodb---partition-behavior)
    * [DynamoDB - Scaling Options](#dynamodb---scaling-options)
    * [DynamoDB - Scaling & Partition Behavior](#dynamodb---scaling-&-partition-behavior)
    * [DynamoDB - Best Practices](#dynamodb---best-practices)
    * [DynamoDB - Large Object Patterns & Table Operations](#dynamodb---large-object-patterns-&-table-operations)
    * [DAX](#dax)
        * [DAX - Architecture](#dax---architecture)
        * [DAX - Operations](#dax---operations)
    * [DynamoDB - Backup & Restore](#dynamodb---backup-&-restore)
    * [DynamoDB - Continuous Backup with PITR](#dynamodb---continuous-backup-with-pitr)
    * [DynamoDB - Encryption](#dynamodb---encryption)
    * [DynamoDB - Streams](#dynamodb---streams)
    * [DynamoDB - TTL](#dynamodb---ttl)
    * [DynamoDB - TTL - Use Cases](#dynamodb---ttl---use-cases)
    * [DynamoDB - Global Tables](#dynamodb---global-tables)
    * [DynamoDB - Access Control and Federation](#dynamodb---access-control-and-federation)
    * [DynamoDB - Contributor Insights](#dynamodb---contributor-insights)
* [Redshift](#redshift)
    * [Redshift - Architecture](#redshift---architecture)
    * [Redshift - Loading Data In](#redshift---loading-data-in)
    * [Redshift - Loading Data From S3](#redshift---loading-data-from-s3)
    * [Redshift - More Ways To Load Data](#redshift---more-ways-to-load-data)
    * [Redshift - Spectrum](#redshift---spectrum)
    * [Redshift - Spectrum - Querying S3](#redshift---spectrum---querying-s3)
    * [Redshift - Federated Query](#redshift---federated-query)
    * [Star Schema in Data Warehouses](#star-schema-in-data-warehouses)
    * [Redshift - Fundamentals](#redshift---fundamentals)
    * [Redshift - Workload Management (WLM)](#redshift---workload-management-(wlm))
    * [Redshift - Concurrency Scaling](#redshift---concurrency-scaling)
    * [Redshift - Scaling](#redshift---scaling)
    * [Redshift - Backup, Restore & Cross-Region Snapshots](#redshift---backup,-restore-&-cross-region-snapshots)
    * [Redshift - Multi-AZ Deployment Alternative](#redshift---multi-az-deployment-alternative)
    * [Redshift - Availability & Durability](#redshift---availability-&-durability)
    * [Redshift - Security](#redshift---security)
    * [Redshift - Enhanced VPC Routing](#redshift---enhanced-vpc-routing)
    * [Redshift - Monitoring](#redshift---monitoring)
    * [Redshift - Pricing](#redshift---pricing)
    * [Redshift - Athena & Quicksight](#redshift---athena-&-quicksight)
    * [Redshift - AQUA](#redshift---aqua)
* [ElastiCache](#elasticache)
    * [Caching Strategies](#caching-strategies)
    * [Redis](#redis)
        * [Redis - Architecture & Multi-AZ Auto-Failover](#redis---architecture-&-multi-az-auto-failover)
        * [Redis - Backup & Restore](#redis---backup-&-restore)
        * [Redis - Scaling & Replication](#redis---scaling-&-replication)
        * [Redis - Global Datastore](#redis---global-datastore)
        * [Redis - Good to know](#redis---good-to-know)
        * [Redis - Best Practices](#redis---best-practices)
        * [Redis - Use Cases](#redis---use-cases)
    * [Memcached](#memcached)
        * [Memcached - Architecture](#memcached---architecture)
        * [Memcached - Auto-Discovery](#memcached---auto-discovery)
        * [Memcached - Scaling](#memcached---scaling)
    * [Redis vs Memcached](#redis-vs-memcached)
    * [ElastiCache - Security](#elasticache---security)
    * [ElastiCache - Logging & Monitoring](#elasticache---logging-&-monitoring)
    * [ElastiCache - Pricing](#elasticache---pricing)
* [DocumentDB](#documentdb)
    * [About Document Databases](#about-document-databases)
    * [DocumentDB - Architecture](#documentdb---architecture)
    * [DocumentDB - Backup & Restore](#documentdb---backup-&-restore)
    * [DocumentDB - Scaling](#documentdb---scaling)
    * [DocumentDB - Security](#documentdb---security)
    * [DocumentDB - Pricing](#documentdb---pricing)
    * [DocumentDB - Monitoring](#documentdb---monitoring)
    * [DocumentDB - Performance Management](#documentdb---performance-management)
* [Neptune](#neptune)
    * [Neptune - Architecture](#neptune---architecture)
    * [Neptune - Bulk Loading Graph Data](#neptune---bulk-loading-graph-data)
    * [Neptune - Workbench](#neptune---workbench)
    * [Neptune - Replication & High Availability](#neptune---replication-&-high-availability)
    * [Neptune - Backup & Restore](#neptune---backup-&-restore)
    * [Neptune - Scaling](#neptune---scaling)
    * [Neptune - Cloning](#neptune---cloning)
    * [Neptune - Security](#neptune---security)
    * [Neptune - Monitoring](#neptune---monitoring)
    * [Neptune - Query Queueing](#neptune---query-queueing)
    * [Neptune - Service Errors](#neptune---service-errors)
    * [SPARQL Federated Query](#sparql-federated-query)
    * [Neptune - Streams](#neptune---streams)
    * [Neptune - Pricing](#neptune---pricing)
* [OpenSearch](#opensearch)
    * [OpenSearch - Service Patterns](#opensearch---service-patterns)
    * [OpenSearch - Multi-AZ](#opensearch---multi-az)
    * [OpenSearch - Logging](#opensearch---logging)
    * [OpenSearch - Pricing](#opensearch---pricing)
* [Timestream](#timestream)
* [QLDB](#qldb)
    * [QLDB - Architecture](#qldb---architecture)
    * [QLDB - Views](#qldb---views)
    * [Working with QLDB](#working-with-qldb)
    * [QLDB - Data Verification](#qldb---data-verification)
    * [QLDB - Backup & Restore](#qldb---backup-&-restore)
    * [QLDB - Streams](#qldb---streams)
    * [QLDB - HA, Durability & Alternative to CRR](#qldb---ha,-durability-&-alternative-to-crr)
    * [QLDB - Security](#qldb---security)
    * [QLDB - Monitoring](#qldb---monitoring)
    * [QLDB - Pricing](#qldb---pricing)
* [Keyspaces](#keyspaces)
    * [Migrating from Cassandra to Keyspaces](#migrating-from-cassandra-to-keyspaces)
    * [Keyspaces - Read & Write Consistency](#keyspaces---read-&-write-consistency)
    * [Keyspaces - Pricing](#keyspaces---pricing)
* [AWS Database Comparison](#aws-database-comparison)
* [Database Migration](#database-migration)
    * [DMS - Sources & Targets](#dms---sources-&-targets)
    * [DMS - Architecture](#dms---architecture)
    * [SCT](#sct)
    * [Workload Qualification Framework (WQF)](#workload-qualification-framework-(wqf))
    * [DMS - Tasks & Task Assessment Report](#dms---tasks-&-task-assessment-report)
    * [DMS - Migration Types](#dms---migration-types)
    * [DMS - Good to Know](#dms---good-to-know)
    * [DMS - Migrating Large Tables & LOBs](#dms---migrating-large-tables-&-lobs)
    * [DW Migration with SCT](#dw-migration-with-sct)
    * [Migration Playbooks](#migration-playbooks)
    * [DMS - Monitoring](#dms---monitoring)
    * [DMS - Validation](#dms---validation)
    * [DMS - Statistics & Control Tables](#dms---statistics-&-control-tables)
    * [DMS - Security](#dms---security)
    * [DMS - Pricing](#dms---pricing)
    * [DMS - General Best Practices](#dms---general-best-practices)
    * [DMS - Minimize Downtime](#dms---minimize-downtime)
    * [DMS - Migrating Large Databases](#dms---migrating-large-databases)
    * [DMS - Migrating to RDS](#dms---migrating-to-rds)
    * [DMS - Migrating to Aurora](#dms---migrating-to-aurora)
    * [DMS - Migrating Redis Workloads to ElastiCache](#dms---migrating-redis-workloads-to-elasticache)
    * [DMS - Migrating to DocumentDB](#dms---migrating-to-documentdb)
    * [DMS - Streaming](#dms---streaming)
* [Monitoring, Logging & Encryption](#monitoring,-logging-&-encryption)
    * [Encryption & Snapshots](#encryption-&-snapshots)
    * [Database Logging](#database-logging)
    * [Secrets Manager](#secrets-manager)
    * [Active Directory with RDS Microsoft SQL Server](#active-directory-with-rds-microsoft-sql-server)
* [CloudFormation & Automation](#cloudformation-&-automation)
    * [CloudFormation - Create Stack](#cloudformation---create-stack)
    * [CloudFormation - Update & Delete Stack](#cloudformation---update-&-delete-stack)
    * [YAML](#yaml)
    * [CloudFormation - Resources](#cloudformation---resources)
    * [CloudFormation - Parameters](#cloudformation---parameters)
    * [CloudFormation - Mappings](#cloudformation---mappings)
    * [CloudFormation - Outputs](#cloudformation---outputs)
    * [CloudFormation - Conditions](#cloudformation---conditions)
    * [CloudFormation - Intrinsic Functions](#cloudformation---intrinsic-functions)
    * [CloudFormation - Rollbacks](#cloudformation---rollbacks)
    * [CloudFormation - ChangeSets, Nested Stacks & StackSets](#cloudformation---changesets,-nested-stacks-&-stacksets)
    * [CloudFormation - RDS](#cloudformation---rds)
    * [CloudFormation - RDS DB Updates](#cloudformation---rds-db-updates)
    * [CloudFormation - RDS Protections](#cloudformation---rds-protections)
    * [CloudFormation - Aurora](#cloudformation---aurora)
    * [CloudFormation - Parameters](#cloudformation---parameters)
    * [CloudFormation - SSM Parameter Store](#cloudformation---ssm-parameter-store)
    * [CloudFormation - Secrets Manager](#cloudformation---secrets-manager)
    * [CloudFormation - Advanced Concepts](#cloudformation---advanced-concepts)
* [VPC - Networking](#vpc---networking)
    * [VPC, Subnets, IGW & NAT](#vpc,-subnets,-igw-&-nat)
    * [NACL, SG, VPC Flow Logs](#nacl,-sg,-vpc-flow-logs)
    * [VPC Peering, Endpoints, VPN, DX](#vpc-peering,-endpoints,-vpn,-dx)
    * [VPC Cheat Sheet](#vpc-cheat-sheet)
    * [Bastion Hosts](#bastion-hosts)
* [Other Topics](#other-topics)
    * [AWS Lambda Architectures](#aws-lambda-architectures)
    * [Server Migration Service](#server-migration-service)
    * [EBS-optimized Instances](#ebs-optimized-instances)
    * [Transferring Large Datasets into AWS](#transferring-large-datasets-into-aws)
    * [Disaster Recovery](#disaster-recovery)



&nbsp;
# Purpose Built Databases



&nbsp;
# Basics

## Data Types


## Relational Databases


## Non-relational Databases



&nbsp;
# RDS & Aurora


## RDS


### RDS - Instance Type, Storage Type & Storage Auto-Scaling


### RDS - Parameter Groups


### RDS - Option Groups


### RDS - Security - Network


### RDS - Security - IAM


### RDS - Rotating DB Credentials


### RDS - Windows Authentication in SQL Server


### RDS - Encryption in Transit & at Rest


### RDS - Backups


### RDS - Copying & Sharing Snapshots


### RDS - Encrypting an Unencrypted DB


### RDS - DB Restore Options


### RDS - Export Snapshot to S3


### RDS - Backup & Restore


### RDS - Multi-AZ Deployments & Read Replicas


### RDS - Read Replica Use Cases


### RDS - Promoting Read Replica to Standalone DB


### RDS - Multi-AZ Failover and Replica Promotion


### RDS - Enabling Writes on Read Replica


### RDS - Read Replica Capabilities


### RDS - 2nd Tier Replicas & Replica Promotion


### RDS - Cross-Region Read Replicas


### RDS - Replicas With External DB


### RDS - DR Strategies


### RDS - Replica Troubleshooting


### RDS - Performance Hit on New Read Replicas


### RDS - Scaling & Sharding


### RDS - Monitoring


### RDS - Event Subscriptions, Recommendations & Logs


### RDS - Exporting Logs to S3


### RDS - Enhanced Monitoring


### RDS - Performance Insights


### CloudWatch Application Insights


### RDS - VMWare


### RDS - Good to know


## Aurora


### Aurora - Architecture


### Aurora - Parallel Query


### Aurora - Serverless


### Aurora - Data API for Serverless


### Aurora - Multi-master


### Aurora - Cross-Region Replicas & Global DB


### Aurora - Reliability Features


### Aurora - Pricing Model


### Aurora - Security
* **Network** - 
* **IAM** - 
* **Encryption** - 


### Aurora - Parameter Groups


### Aurora - Scaling Options


### Aurora - Monitoring & Advanced Auditing


### Aurora - Exporting Logs


### Aurora - DB Activity Streams


### Aurora - Troubleshooting Storage Issues


### Aurora - Benchmarking


### Aurora - Exporting Data into S3


### Aurora - Backups & Backtracking


### Aurora - Backups & Snapshots & Backtrack


### Aurora - Cloning DBs


### Aurora - Failovers


### Aurora - PostgreSQL - Cluster Cache Management (CCM)


### Aurora - Simulating Fault Tolerance


### Aurora - PostgreSQL - Fast Failover


### Aurora - MySQL - Cluster Replication Options


## Aurora Replicas vs RDS MySQL Replicas


## RDS Deployment Comparison


## Invoke Lambda from Aurora MySQL


## Load data from S3 into Aurora MySQL


## RDS & Aurora - Good to Know



&nbsp;
# DynamoDB


## DynamoDB - Basics


## DynamoDB - Consistency


## DynamoDB - Pricing Model


## DynamoDB - Throughput


## DynamoDB - Calculating Capacity Units


## DynamoDB - Burst Capacity & Adaptive Capacity


## DynamoDB - LSI


## DynamoDB - GSI


## DynamoDB - LSI vs GSI


## DynamoDB - Simple Design Patterns


## DynamoDB - Errors & Exceptions in DynamoDB


## DynamoDB - Partitions


## DynamoDB - Partition Behavior


## DynamoDB - Scaling Options


## DynamoDB - Scaling & Partition Behavior


## DynamoDB - Best Practices


## DynamoDB - Large Object Patterns & Table Operations


## DAX


### DAX - Architecture


### DAX - Operations


## DynamoDB - Backup & Restore


## DynamoDB - Continuous Backup with PITR


## DynamoDB - Encryption


## DynamoDB - Streams


## DynamoDB - TTL


## DynamoDB - TTL - Use Cases


## DynamoDB - Global Tables


## DynamoDB - Access Control and Federation


## DynamoDB - Contributor Insights



&nbsp;
# Redshift


## Redshift - Architecture


## Redshift - Loading Data In


## Redshift - Loading Data From S3


## Redshift - More Ways To Load Data


## Redshift - Spectrum


## Redshift - Spectrum - Querying S3


## Redshift - Federated Query


## Star Schema in Data Warehouses


## Redshift - Fundamentals


## Redshift - Workload Management (WLM)


## Redshift - Concurrency Scaling


## Redshift - Scaling


## Redshift - Backup, Restore & Cross-Region Snapshots


## Redshift - Multi-AZ Deployment Alternative


## Redshift - Availability & Durability


## Redshift - Security


## Redshift - Enhanced VPC Routing


## Redshift - Monitoring


## Redshift - Pricing


## Redshift - Athena & Quicksight


## Redshift - AQUA



&nbsp;
# ElastiCache


## Caching Strategies


## Redis


### Redis - Architecture & Multi-AZ Auto-Failover


### Redis - Backup & Restore


### Redis - Scaling & Replication


### Redis - Global Datastore


### Redis - Good to know


### Redis - Best Practices


### Redis - Use Cases


## Memcached


### Memcached - Architecture


### Memcached - Auto-Discovery


### Memcached - Scaling


## Redis vs Memcached


## ElastiCache - Security


## ElastiCache - Logging & Monitoring


## ElastiCache - Pricing


&nbsp;
# DocumentDB


## About Document Databases


## DocumentDB - Architecture


## DocumentDB - Backup & Restore


## DocumentDB - Scaling


## DocumentDB - Security


## DocumentDB - Pricing 


## DocumentDB - Monitoring


## DocumentDB - Performance Management



&nbsp;
# Neptune


## Neptune - Architecture


## Neptune - Bulk Loading Graph Data


## Neptune - Workbench


## Neptune - Replication & High Availability


## Neptune - Backup & Restore


## Neptune - Scaling


## Neptune - Cloning


## Neptune - Security


## Neptune - Monitoring


## Neptune - Query Queueing


## Neptune - Service Errors


## SPARQL Federated Query


## Neptune - Streams


## Neptune - Pricing



&nbsp;
# OpenSearch


## OpenSearch - Service Patterns


## OpenSearch - Multi-AZ


## OpenSearch - Logging


## OpenSearch - Pricing



&nbsp;
# Timestream
* **Timestream Pricing**
    * a


&nbsp;
# QLDB


## QLDB - Architecture


## QLDB - Views


## Working with QLDB 


## QLDB - Data Verification


## QLDB - Backup & Restore


## QLDB - Streams


## QLDB - HA, Durability & Alternative to CRR


## QLDB - Security


## QLDB - Monitoring


## QLDB - Pricing



&nbsp;
# Keyspaces


## Migrating from Cassandra to Keyspaces


## Keyspaces - Read & Write Consistency


## Keyspaces - Pricing



&nbsp;
# AWS Database Comparison


&nbsp;
# Database Migration


## DMS - Sources & Targets


## DMS - Architecture


## SCT


## Workload Qualification Framework (WQF)


## DMS - Tasks & Task Assessment Report


## DMS - Migration Types


## DMS - Good to Know


## DMS - Migrating Large Tables & LOBs


## DW Migration with SCT


## Migration Playbooks


## DMS - Monitoring


## DMS - Validation


## DMS - Statistics & Control Tables


## DMS - Security


## DMS - Pricing


## DMS - General Best Practices


## DMS - Minimize Downtime


## DMS - Migrating Large Databases


## DMS - Migrating to RDS


## DMS - Migrating to Aurora


## DMS - Migrating Redis Workloads to ElastiCache


## DMS - Migrating to DocumentDB


## DMS - Streaming



&nbsp;
# Monitoring, Logging & Encryption


## Encryption & Snapshots


## Database Logging


## Secrets Manager


## Active Directory with RDS Microsoft SQL Server


&nbsp;
# CloudFormation & Automation
* **AWS CloudFormation** - an IaC solution that gives developers and businesses an easy way to automate creation, provisioning and management of AWS or third-party compute resources
    * a declarative way of outlining AWS Infrastructure for any resources
    * benefits:
        * no resources are manually created
        * code can be version controlled
        * knows in what order resources should be created / updated /deleted
        * changes to infrastructure are reviewed through code
        * cost:
            * CloudFromation in itself is free
            * stacks of resources are tagged which allows `easily identifying costs`
            * `estimate costs` of resources using the CloudFormation template
            * `savings strategy`: you can fe. automate deletion of templates at 5 PM and reacreate at 8 AM
        * productivity:
            * ability to destroy and re-create infrastructure on the fly
            * automatic generation of Diagram for your templates
            * declarative programming
        * `separation of concern` - create many stacks for many apps / layers:
            * VPC stacks
            * Network stacks
            * App stacks
    * lots of templates are available so DONT REINVENT THE WHEEL
* **Infrastructure as Code** - code that can deploy / create / update / delete our infrastructure
* **How it works**
    1. templates have to be uploaded in S3 and referenced in CloudFormation
    1. to update we have to reupload a new version of the template (no editing)
    1. stacks are identified by name
    1. deleting a stack results in all resources created by it being deleted
* **Template deployment**
    * `Manual`
        * editing templates in the CloudFormation Designer
        * using console to input parameters and making other changes
    * `Automatic`
        * editing templates in a YAML file
        * using the AWS CLI to deploy the templates
        * recommended for full flow automation
* **Building Blocks**
    * **Templates**
        * `Resources` AWS resources declared in the template (MANDATORY)
        * `Parameters` dynamic inputs for your template
        * `Mappings` static variables for your template
        * `Outputs` references to what has been created
        * `Conditionals` list of conditions to perform resource creation
        * `Metadata`
    * **Template helpers**
        * `References` linking resources in templates
        * `Functions` transform data within templates
* **Uploading Changes** - when uploading new stack(YAML) CloudFormation doesnt replace everything but figures out was is missing and configures it
    * this can be viewed in `Change set preview` section in AWS Console
* **CloudFormation Stack Notifications** - send stack events to SNS Topic (Email, Lambda, ...) by enabling *SNS Integration* using *Stack Options*


## YAML
* CloudFormation supports YAML and JSON for CloudFormation
* supports:
    * key:value pairs
    * nested objects
    * support arrays
    * multi line strings
    * comments

```yaml
invoice :   12324
date    :   2001-01-23
bill-to :
    given   :   Chris
    family  :   Dumars
    address:
        lines:  |
            Ul. Zenczykowskiego 458
            m 258
        city:   Warsaw
        state:  NA
        postal: 00-101
product:
    -   sku : 123132
        quantity: 5
        description: adasdsa
        price: 450.0
    -   sku : adasdad
        quantity: 10
        description: adsadsa
        price: 2123.00
```


## CloudFormation - Resources
* resources included in a stack created based on a template
* core of CF template (mandatory)
* resources are declared and can reference eachother
* AWS figures out creation / updates / deletes of resources for us
* over 224 types of resources -> ALMOST every service
    * you can use `AWS Lambda Custom Resources` for resources that are not available
* resource types indentifiers are of the form `AWS::aws-product-name::data-type-name`
* cannot create dynamic resources - cant perform code generation in CF YAML


## CloudFormation - Parameters
* way to provide inputs to your CF template
* important for reusability and inputs that cant be determined ahead of time
* can prevent errors in templates thx to types
* is CF Resource configuration likely to change? If YES -> make it a parameter
* **Parameter Settings**:
    * `Type`: String, Number, CommaDelimitedList, List<Type>, AWS Parameter (match against values in AWS Account to validate)
    * `Description`
    * `Constraints`
    * `ConstraintDescription` (String)
    * `Min Length` / `Max Length`
    * `Min Value` / `Max Value`
    * `Defaults`
    * `AllowedValues` (array)
    * `AllowedPattern` (regexp)
    * `NoEcho` (Boolean) - for secret values
* **Reference Patterns** using the `Fn::Ref` function -> `VpcId: !Ref MyVPC` -> shorthand syntax in YAML is `!Ref`
* **Pseudo Parameters** - parameters made available by default by AWS
    * `AWS:AccountId`
    * `AWS::NotificationARNs`
    * `AWS::NoValue`
    * `AWS::Region`
    * `AWS::StackId`
    * `AWS::StackName`


## CloudFormation - Mappings
* fixed hardcoded variables within CF template
* handy to differentiate between environments (dev/stage/prod), regions, AMI types, etc 
* good for values you know beforehand and will be reused across resources
* allow for safer control over the template
* when values are very user specific use parameters
* **Accessing Mapping Value** - `Fn::FindInMap` to return named value from specific key
    * shorthand: `!FindInMap`
    * example: `!FindInMap [ MapName, TopLevelKey, Sec]`

```yaml
Mappings:
    Mapping01:
        Key01:
            Name: Value01
        Key02:
            Name: Value02
        Key03:
            Name: Value03
```


## CloudFormation - Outputs
* declare optional output values that, if exported, can be impoted by other stacks
* outputs are available in AWS Console and through AWS CLI
* useful for collaboration cross stack
    * experts handle their own stacks and provide output for others
    * example: network CF stack outputs VPC ID
* **Reference** by using `Fn::ImportValue` function
* cant delete the underlying stack until all the references are deleted too

```yaml
Outputs:
    StackSSHSecurityGroup:
        Description: THE SSH Security Group for our Company
        Value: !Ref MyCompanyWideSSHSecurityGroup
        Export:
            Name: SSHSecurityGroup
```

```yaml
Resources:
    MySecurityInstance:
        Type: AWS::EC2::Instance
        Properties:
            AvailabilityZone: us-east-1a
            ImageId: ami-a4c7edb2
            InstanceType: t2.micro
            SecurityGroups:
                - !ImportValue SSHSecurityGroup
```


## CloudFormation - Conditions
* conditions control creation of resources or output based on a condition
* can be whatever you want but common ones are:
    * Environment
    * AWS Region
    * Any parameter value
* a condition can reference another condition
* intrinsic functions: `Fn::And`, `Fn::Equals`, `Fn::If`, `Fn::Not`, `Fn::Or`

``` yaml
Conditions:
    CreateProdResource: !Equals [ !Ref EnvType, prod ]
```

```yaml
Resources:
    MountPoint:
        Type: "AWS::EC2::VolumeAttachement"
        Condition: CreateProdResources
```


## CloudFormation - Intrinsic Functions
* available functions with a CF template:
    * `Ref` - leveraged to reference a **parameter** to gets its value or a **resource** to get its physical ID
        * shorthand: `!Ref`
    * `Fn::GetAtt` - get values of attributes of resources, check documentation for list of available attributes  
        * shorthand: `!GetAtt`
    * `Fn::FindInMap` - accessing mapping values
        * shorthand: `!FindInMap`
    * `Fn::ImportValue` - import values that have been exported by other templates
        * shorthand: `!ImportValue`
    * `Fn::Join` - join values with a delimiter
        * shorthand: `!Join`
        * syntax: `!Join [ delimiter, [ comma-delimited list of values]]`
    * `Fn::Sub` - substitute variables from a text (string interpolation)
        * shorthand: `!Sub`
    * `Condition Functions` - And, Equals, If, Not, Or

```yaml
!Sub
    - String
    - { Var1Name: Var1Value, Var2Name: Var2Value}

!Sub String
```


## CloudFormation - Rollbacks
* Stack Creation Fails
    - default: everything rolls back (gets deleted)
    - disable rolback and troubleshoot what happened
    - get details in logs
* Stack Update Fails:
    * stack automatically rolls back to previous known working state
    * check logs to view error message and debug


## CloudFormation - ChangeSets, Nested Stacks & StackSets
* **ChangeSets** - information on what is changed before a stack is updated. Can view, execute and optionally create additional change sets for greater confidence
    * does not inform if update successful
* **Nested stacks** - stacks that are parts of other stacks
    * isolate repeated patters / common components, like:
        * LB configuration
        * SG
    * considered BEST PRACTICE
    * to update nested stack -> update the parent (root stack)
    * **Cross Stacks vs Nested Stacks**:
        * **Cross Stacks** -> use when stacks have different lifecycles, use Outputs Export and !ImportValue when you need to pass export to many stacks
        * **Nested Stacks** -> helpful when components must be reused, only important to higher level stack, not shared across stacks
* **StackSets** - create / update / delete across multi account and regions with single operation
    * need admin account to create StackSets
    * trusted account to create / update / delete StackSets
    * updating one stack updates all stacks in set throughout all regions and account


## CloudFormation - RDS


## CloudFormation - RDS DB Updates


## CloudFormation - RDS Protections


## CloudFormation - Aurora


## CloudFormation - Parameters


## CloudFormation - SSM Parameter Store


## CloudFormation - Secrets Manager


## CloudFormation - Advanced Concepts



&nbsp;
# VPC - Networking

## VPC, Subnets, IGW & NAT
* **VPC** - **Virtually Private Cloud** - provisions a logically isolated section of the AWS cloud. A `private network` to deploy resources. Regional meaning each region has its own. One and only one `default VPC` is created for each **region**.
* **Subnets** - allows partitioning your VPC network (**AZ resource**)
    * `public subnet` - accessible from the internet
    * `private subnet` - not accessible from the internet
    * `Route Tables` - define access to the internet and between subnets
* **VPC CIDR Range** - a range of ips allowed within the VPC
    * https://cidr.xyz - helpful page for checking ip ranges available for specific CIDR blocks
* **Internet Gateways** - helps VPC instances connect with the internet through a gateway. Two-way communication - inbound and outbound. Defined at VPC level
    * horizontally scaled, redundant, HA
* **NAT Gateways** - AWS-managed NAT that provide internet access to the internet for `private subnets` while allowing them to remain private
    * **NAT Instance** - self-managed NAT
    * this works by creating a NAT gateway in a `public subnet` and providing a route to the NAT gateway to a `private subnet`


## NACL, SG, VPC Flow Logs
* **Security Groups** - firewall that controls traffic to and from an **ENI**(Elastic Network Interface) or an [EC2](#ec2) instance
    * can only have `ALLOW` rules
    * can reference ip addresses or other SG's
    * general:
        * `operates` at instance level
        * `supports` allow rules only
        * `stateful` - return traffic is automatically allowed
        * `evaluate all rules` before deciding whether to allow traffic
        * `applies` only if associated with specifically associated with instance
* **Network ACL (NACL)** - a firewall which controls traffic from and to a subnet
    * contains `ALLOW` and `DENY` rules
    * are attached to **Subnets**
    * rules only include IP addresses
    * general:
        * `operates` at subnet level
        * `supports` allow and deny rules
        * `stateless` - return traffic must be explicitly allowed by rules
        * `evaluate rules in number order` before deciding whether to allow traffic
        * `applies` automatically to all instances in subnet
* **VPC Flow Logs** - captures information about all traffic going into interface
    * types:
        * `VPC` Flow Logs
        * `Subnet` Flow Logs
        * `Elastic Network Interface` Flow Logs
    * helps monitoring and troubleshooting connectivity
        * subnets to internet
        * subnets to subnets
        * internet to subnets
    * captures network information from AWS managed interfaces like: ELB, ElastiCache, RDS, Aurora, etc.
    * can be stored in S3 or CloudWatch logs


## VPC Peering, Endpoints, VPN, DX
* **VPC Peering** - connect two VPC, privately using AWS network, to make them behave as if they where in the same network
    * `must not` have overlapping CIDR (IP address range)
    * `not transitive` - requires establishing for each VPC-to-VPC connection seperatly
    * this can work `cross-Region`
* **VPC Endpoints** - allow to connect AWS Services using `private network` in place of public network
    * enhanced security and lower latency for AWS services
    * enables private access from within a VPC to AWS services
    * `Amazon S3` and `DynamoDB` are the only services that have a `VPC Gateway Endpoint` - all the other services have `VPC Gateway Inteface (ENI)`(with a private IP)
    * **AWS PrivateLink** - allows establishing a private connection between a `Service VPC` that requires a `NLB` and a `Customer VPC` that requires an ENI
        * does not require VPC peering, Internet Gateway, NAT, route tables
        * most secure & scalable way to expose a service to 1000s of VPCs
        * each new customer only has to create a new PrivateLink to the Service VPC which is easy
* **Site to Site VPN** - connect on-premise VPN to AWS
    * *VPN* - automatically encrypted connection over the `public internet`
    * does not have access to VPC Endpoints from VPN
    * take away: `quick to establish but less security`
    * to setup:
        * **Customer Gateway (CGW)** must be setup on-premise
        * **Virtual Private Gateway (VGW)** must be setup on AWS side
        * once CGW and VGW are provisioned they can be connected via Site-to-Site VPN
* **Direct Connect (DX)**
    * physical connection between on-premise and AWS
    * private, secure and fast
    * over `private network`
    * takes at least a month to establish
    * does not have access to VPC Endpoints from DX
    * take away: `slow to establish but fast and secure`
* **AWS Client VPN** - connect from you computer using OpenVPN to a private network in AWS and on-premises
    * over the internet


## VPC Cheat Sheet


## Bastion Hosts
* **Bastion Hosts** - an EC2 instance that is in a public subnet and works as a gateway for interacting with private subnets
    * way to SSH into private resourcw
    * should have own SG
    * `Bastion SG` -> must allow `inbound` from the internet on port `22` from `restricted CIDR` (like public CIDR of your corporation)
    * `Private EC2 SG` -> allow `private IP` of Bastion host


&nbsp;
# Other Topics


## AWS Lambda Architectures


## Server Migration Service


## EBS-optimized Instances


## Transferring Large Datasets into AWS
* example: transfer 200 TB to the cloud with 100 MBps internet connection
* options:
    * `Over the internet / Site-to-Site VPN`
        * immediate to setup
        * example: 200(TB) * 1000(GB) * 1000(MB) * 8(Mb) /100 MBps = 16 000 000s = 185d
    * `Over direct connect 1 Gbps`
        * long for the one-time setup (over a month)
        * will take 200(TB) * 1000(GB) * 1000(MB) * 8(Mb) /1000 MBps = 1 600 000s = 18.5d
    * `Over Snowball`
        * need to order snowballs
        * will take 2-3 sbowballs in parallel
        * takes about 1 week for the end-to-end transfer
        * can be combined with DMS
    * `On-going replication / transfers` -> Site-to-Side VPN / DX with DMS / DataSync

## Disaster Recovery
* **Concepts**
    * `Disaster` - any event that has a negative impact on a companys business continuity or finances is a disaster
    * `Disaster Recovery (DR)` - preparing for and recovering from a disaster
    * `Kinds of DR`
        * `On-premise => On-premise` - traditional DR, very expensive
        * `On-premise => AWS Cloud` - hybrid recovery
        * `AWS Cloud Region A => AWS Cloud Region B` - cloud native
    * `RPO: Recovery Point Objective` - how much of a data loss are you willing to except in case of disaster - depends on backup frequency
    * `RTO: Recovery Time Objective` - how much downtime are you willing to except between disaster and recovery
* **Disaster Recovery Strategies**
    * `Backup & Restore`
        * cheapest
        * highest RTO
        * highest RPO 
        * architecture:
            * DC --> AWS Storage Gateway    --> S3      --> lifecycle   --> Glacier
            * DC --> AWS Snowball           --> Glacier
            * AWS Cloud EBS | Redshift | RDS --> regular snapshots
            * restore EC2 from snapshot AMIs
            * restore DB from RDS Snapshots
        * example: backup all data to S3 and restore in case of disaster for on-premise
    * `Pilot Light`
        * cheap
        * high RTO
        * high RPO
        * only core functions of app are in the cloud(on ec2 for example) and ready to scale
        * in case of disaster of on-premise, enable all functions and scale up pilot light
        * architecture:
            * DC --> Data Replication --> AWS RDS
            * DC --> failure --> Route 53 --> AWS EC2
    * `Warm Standby`
        * expensive
        * low RTO
        * low RPO
        * full version of the app on cloud, but small scale
        * in case of disaster, scale up cloud version to production load
        * architecture:
            * DC [Reverse Proxy] --> failure --> Route 53 --> AWS ELB
            * DC [DB] --> Data Replication --> RDS Slave (running)
            * DC [App Server] --> failure --> AWS EC2 ASG (low scale)
    * `Multi-site / Hot-site`
        * most expensive
        * very low RTO
        * very low RPO
        * full version at production scale on cloud, in case of disaster, switch to cloud version
        * architecture:
            * DC [Reverse Proxy] --> failure --> Route 53 --> AWS ELB
            * DC [DB] --> Data Replication --> RDS Slave (running)
            * DC [App Server] --> failure --> AWS EC2 ASG (production scale)
* **Disaster Recovery Tips**
    * `Backup`
        * EBS Snapshots, RDS automated backups / Snapshots
        * Regular pushes to S3 / S3 IAM / Glacier / Lifecycle Policy / Cross-Region Replication
        * From On-Premise: Snowball or Storage Gateway
    * `High Availability`
        * use Route53 to migrate DNS over Regions
        * RDS Multi-AZ, ElastiCache Multi-AZ, EFS, S3
        * Site to Site VPN as a recovery for Direct Connect
    * `Replication`
        * RDS Replication (Cross Region), AWS Aurora + Global Databases
        * Database replication from on-premise to RDS
        * Storage Gateway
    * `Automation`
        * CloudFormation / Elastic Beanstalk to re-create a whole new environment
        * Recover / Reboot EC2 instances with CloudWatch if alarms fail
        * AWS Lambda function for customized automations
    * `Chaos`
        * choas-monkey that randomly terminate EC2 instances in production to ensure the system is resilient