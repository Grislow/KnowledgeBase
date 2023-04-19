# AWS Certified Cloud Practitioner - CLF-C01

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.

#### Table of contents

* [Basic terminology](#basic-terminology)
* [AWS History](#aws-history)
* [Problems with traditional IT](#problems-with-traditional-it)
* [Cloud computing](#cloud-computing)
    * [5 charactersitics of Cloud Computing](#5-charactersitics-of-cloud-computing)
    * [6 Advantages of Cloud Computing](#6-advantages-of-cloud-computing)
    * [Problems solved by Cloud Computing](#Problems-solved-by-cloud-computing)
    * [Types of Cloud Computing](#Types-of-cloud-computing)
    * [Cloud Pricing](#cloud-pricing)
* [AWS Global Infrastrucure](#aws-global-infrastrucure)
* [AWS Shared Responsiblity](#aws-shared-responsiblity)
* [AWS Acceptable Use Policy](#aws-acceptable-use-policy)
* [AWS Billing](#aws-billing)
* [IAM](#iam)
    * [IAM Policies](#iam-policies)
    * [IAM MFA Overview](#iam-mfa-overview)
    * [IAM Best Practices](#iam-best-practices)
* [AWS CLI](#aws-cli)
    * [AWS CloudShell](#aws-cloudshell)
* [AWS SDK](#aws-sdk)
* [EC2](#ec2)
    * [EC2 User Data](#ec2-user-data)
    * [EC2 Instance Types](#ec2-instance-types)
    * [Security Groups](#security-groups)
    * [Classic Ports](#classic-ports)
    * [EC2 Purchasing Options](#ec2-purchasing-options)
    * [AMI](#ami)
* [EBS](#ebs)
* [EFS](#efs)
* [Amazon FSx](#amazon-fsx)
* [Scalability & High Availability](#scalability-&-high-availability)
* [ELB](#elb)
* [ASG](#asg)
    * [ASG Scaling Policies](#asg-scaling-policies)
* [S3](#S3)
    * [S3 Storage Classes](#s3-storage-classes)
    * [AWS Snow Family](#aws-snow-family)
* [Databases and Analytics](#databases-and-analytics)
    * [RDS](#rds)
    * [ElastiCache](#elasticache)
    * [DynamoDB](#dynamodb)
    * [Redshift](#redshift)
    * [EMR](#emr)
    * [Athena](#athena)
    * [QuickSight](#quicksight)
    * [DocumentDB](#documentdb)
    * [Neptune](#neptune)
    * [QLDB](#qldb)
    * [Managed Blockchain](#managed-blockchain)
    * [Glue](#glue)
    * [DMS](#dms)
* [Docker](#docker)
    * [ECS](#ecs)
    * [Fargate](#fargate)
    * [ECR](#ecr)
* [Serverless](#serverless)
    * [Lambda](#lambda)
    * [API Gateway](#api-gateway)
* [Batch](#batch)
* [Lightsail](#lightsail)
* [Deployment & Managing Infrastructure](#deployment-&-managing-infrastructure)
    * [CloudFormation](#CloudFormation)
    * [CDK](#cdk)
    * [Beanstalk](#beanstalk)
    * [CodeDeploy](#codedeploy)
    * [CodeCommit](#codecommit)
    * [CodeBuild](#codebuild)
    * [CodePipeline](#codepipeline)
    * [CodeArtifact](#codeartifact)
    * [CodeStar](#codestar)
    * [Cloud9](#cloud9)
    * [SSM](#ssm)
    * [OpsWorks](#opsworks)
* [Leveraging Global Infrastructure](#leveraging-global-infrastructure)
    * [Route 53](#route-53)
    * [CloudFront](#cloudfront)
    * [S3 Transfer Accelerator](#s3-transfer-accelerator)
    * [AWS Global Accelerator](#aws-global-accelerator)
    * [AWS Outposts](#aws-outposts)
    * [AWS WaveLength](#aws-wavelength)
    * [AWS Local Zones](#aws-local-zones)
    * [Global Applications Architecture](#global-applications-architecture)
* [Integrations](#integrations)
    * [SQS](#sqs)
    * [Kinesis](#kinesis)
    * [SNS](#sns)
    * [Amazon MQ](#amazon-mq)
* [Monitoring](#monitoring)
    * [CloudWatch](#cloudwatch)
    * [EventBridge](#eventbridge)
    * [CloudTrail](#cloudtrail)
    * [X-Ray](#x-ray)
    * [CodeGuru](#codeguru)
    * [Dashboards](#dashboards)
* [VPC](#vpc)
* [Security & Compliance](#security-&-compliance)
    * [WAF & Shield](#waf-&-shield)
    * [Penetration Testing](#penetration-testing)
    * [KMS & CloudHSM](#kms-&-cloudhsm)
    * [AWS Certificate Manager (ACM)](#aws-certificate-manager-(acm))
    * [Secrets Manager](#secrets-manager)
    * [Artifact](#artifact)
    * [GuardDuty](#guardduty)
    * [Inspector](#inspector)
    * [Config](#config)
    * [Macie](#macie)
    * [Security Hub](#security-hub)
    * [Amazon Detective](#amazon-detective)
    * [AWS Abuse](#aws-abuse)
    * [Root User Privileges](#root-user-privileges)
* [Machine Learning](#machine-learning)
    * [Rekognition](#rekognition)
    * [Transcribe](#transcribe)
    * [Polly](#polly)
    * [Translate](#translate)
    * [Lex + Connect](#lex-+-connect)
    * [Comprehend](#comprehend)
    * [SageMaker](#sagemaker)
    * [Forecast](#forecast)
    * [Kendra](#kendra)
    * [Personalize](#personalize)
    * [Textract](#textract)
* [Account Management, Billing & Support](#account-management,-billing-&-support)
    * [Organizations](#organizations)
    * [Control Tower](#control-tower)
    * [Pricing Models](#pricing-models)
    * [Savings Plan](#savings-plan)
    * [Compute Optimizer](#compute-optimizer)
    * [Billing & Costing Tools](#billing-&-costing-tools)
    * [Estimating Costs - Pricing Calculator](#estimating-costs---pricing-calculator)
    * [Tracking Costs](#tracking-costs)
    * [Monitoring Costs](#monitoring-costs)
    * [AWS Trusted Advisor](#aws-trusted-advisor)
    * [Support Plans](#support-plans)
    * [Account Best Practices](#account-best-practices)
* [Advanced Identity](#advanced-identity)
    * [Security Token Service (STS)](#security-token-service-(STS))
    * [Cognito](#Cognito)
    * [Directory Services](#directory-services)
    * [AWS IAM Identity Center](#aws-iam-identity-center)
* [Other Services](#other-services)
    * [WorkSpaces](#workspaces)
    * [AppStream 2.0](#appstream-2.0)
    * [Sumerian](#sumerian)
    * [IoT Core](#iot-core)
    * [Elastic Transcoder](#elastic-transcoder)
    * [AppSync](#appsync)
    * [Amplify](#amplify)
    * [Device Farm](#device-farm)
    * [AWS Backup](#aws-backup)
    * [Disaster Recovery Strategies](#disaster-recovery-strategies)
    * [AWS Elastic Disaster Recovery](#aws-elastic-disaster-recovery)
    * [AWS DataSync](#aws-datasync)
    * [Application Discovery & Migration Service](#application-discovery-&-migration-service)
    * [AWS Fault Injection Simulator (FIS)](#aws-fault-injection-simulator-(fis))
    * [Step Functions](#step-functions)
    * [Ground Station](#ground-station)
    * [AWS Pinpoint](#aws-pinpoint)
* [AWS Architecting & Ecosystem](#aws-architecting-&-ecosystem)
    * [AWS WhitePapers Well-Architected Framework](#aws-whitepapers-well-architected-framework)
    * [Right Sizing](#right-sizing)
    * [AWS Ecosystem](#aws-ecosystem)
    * [AWS Knowledge Center](#aws-knowledge-center)
    * [AWS IQ & re:Post](#aws-iq-&-re:post)
* [AWS Service Overview](#aws-service-overview)


&nbsp;
# Basic terminology
* **network** - cables, routers, servers connected to eachother 
* **router** - networking device that forwards data packets between computer networks
* **switch** - routes packets to servers/clients within a network
* **scale out** - adding more parallel nodes to spread out a load
* **scale up** - making a component bigger/faster to handle more load
* **bootstrapping** - launching commands when a machine starts
* **DDOS Attack** - Distributed Denial-of-Service is a malicious action where an attacker launches multiple `master servers` that spawn `bots` that send requests to an `application server` to overload it and make it not accessible/non-responsive

&nbsp;
# Problems with traditional IT
* pay for rent/power supply, cooling, maintenance of data center
* scaling is slow/expensive/limited (adding/replacing hardware is hard)
* need to hire ppl to monitor the infrastructure 24/7
* hard ot deal with disasters

&nbsp;
# AWS History
* 2002 - launched internally
* 2003 - idea to market
* 2004 - launched publicly with SQS
* 2006 - relaunched publicly with SQS, S3, EC2
* 2007 - launched in Europe
* 2019 - $35.02 billion annual revenue, 47% of market, pioneer and leader of Cloud Market for 9th consecutive year, over 1 mil active users

&nbsp;
# Cloud Computing
* on-demand delivery of IT resources
* pay-as-you-go pricing
* easy provisioning of resources
* instant access to additional resources
* simply access to resources through a UI
* various deployment models:
    * **private cloud** - private, complete control, secure for sensitive data, specific for a business
    * **public cloud** - owned and operated by third-party and delivered over the internet
    * **hybrid cloud** - keep some servers on premise and some on Cloud, have full control over private assetts, flexibility for third-party controlled assetts

## 5 charactersitics of Cloud Computing
* **On-demand self service** - provision/use resources without human interaction from service provider
* **Broad network access** - resources available over network for diverce client platforms
* **Multi-tenancy and resource pooling** - customers can share infrastructure/applications with security/privacy and are serviced from same physical resources
* **Rapid elasticity and scalability** - automatically provision/tear-down of resources on-demand, quick/easy scaling
* **Measured service** - usage is measured, pay for what you use

## 6 Advantages of Cloud Computing
* **Trade CAPEX for OPEX** - dont own hardware. rent it which reduces TCO
    * **CAPEX** - Capital expense - money spend to buy/maintain/improve fixed assets
    * **OPEX** - Operational expense - ongoing cost for running a product/business/system
    * **TCO** - financial estimate of direct/indirect costs of product/service
* **Benefit from massive economies of scale** - reduced prices due to efficient use of AWS resources due to large scale
* **Stop guessing capacity** - scale automatically based on actual usage
* **Increase speed and agility** - create/operate on-demand/right away
* **Stop spending money running/maintaining data centers**
* **Go global in minutes** - leverage AWS global infrastructure

## Problems solved by Cloud Computing
* **Flexibility** - easily change the type of resources
* **Cost-effectiveness** - pay as you go for what you use
* **Scalability** - handle larger loades by scaling up/out
* **Elasticity** - easily scale up/out
* **High-availability / Fault-tolerance** - build across data centers in different regions and availability zones
* **Agility** - rapidly develop/test/launch software applications

## Types of Cloud Computing
* **On-premise** - manage all IT infrastructure on your own
    * **You manage** -> Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking
* **Infrastructure as a Service (IaaS)** - building blocks for cloud IT
    * provide networking/computers/data storage space
    * high level of flexibility
    * easy migration from traditional on-premises IT
    * **You manage** -> Applications, Data, Runtime, Middleware, O/S
    * **They manage** -> Virtualization, Servers, Storage, Networking
    * *Example* -> AWS EC2, GCP, Azure, Rackspace, Digital Ocean, Linode
* **Platform as a Service (PaaS)** - managed infrastructure
    * remove need of managing infrastructure for an organization
    * focus on deployment/management of applications
    * **You manage** -> Applications, Data
    * **They manage** -> Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking
    * *Example* -> AWS Elastic Beanstalk, Heroku, Google App Engine (GCP), Windows Azure (MS)
* **Software as a Service (SaaS)** - complete product run and managed by service provider
    * **They manage** -> Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking
    * *Example* -> AWS Rekognition for Machine Learning, Google Apps (Gmail), Dropbox, Zoom

## Cloud Pricing
AWS has 3 fundamental pricing models for pay-as-you-go pricing model:
* **Compute** - pay for compute time
* **Storage** - pay for data stored in the cloud
* **Network** - pay for data transfer OUT of the cloud

&nbsp;
# AWS Global Infrastrucure
https://infrastructure.aws/
* **AWS Regions** - all around the world, have codes(us-east-1), cluster of datacenters, most services scoped to region. How to choose an AWS region:
    * *Compliance* - with data governance and legal requirements, data does not leave region without explicit permission
    * *Proximity* - to customers to reduce latency
    * *Available services** - not all Regions have all services available
        * Region table: https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/
    * *Pricing* - varies region to region
* **AWS Availability Zones** - 3-6 in each region, isolated from each other, connected with high bandwidth/ultra-low latency networking, have codes(ap-southeast-2a), one or more discrete data centers with redundant power/networking/connecitvity
* **AWS Data Centers**
* **AWS Edge Locations/Points of Presence** - 216 PoP ( 205 edge locations & 11 Regional Caches) in 84 cities across 42 countries, content delivered to users with lower latency

&nbsp;
# AWS Shared Responsiblity
* https://aws.amazon.com/compliance/shared-responsibility-model/
* **Customer Responsiblity** - security `in` the cloud:
    * customer data
    * platform/applications/identity & access management
    * operating system/network/firewall configuration
    * client-side data encryption/data integrity authentication
    * server-side encryption (file system/data)
    * networking traffic protection (encryption/integrity/identity)
    * **IAM**:
        * users, groups, roles, policies management and monitoring
        * enable MFA on all accounts
        * rotate your keys often
        * use IAM tools to apply appropriate permissions
        * analyze access patterns & review permissions
    * **EC2**:
        * security groups rules
        * O/S patches and updates
        * software and utilities install on the EC2 instance
        * IAM roles for EC2 & IAM user access management
        * data security on instance - firewall / network configuration
    * **EC2 Storage**:
        * setting up backup / snapshot procedures
        * setting up data encryption
        * data on the drives
        * risk of using EC2 Instance Store(ephemeral, hardware failure)
    * **S3**:
        * versioning
        * bucket configuration
        * bucket policies / public settings
        * replication setup
        * logging and monitoring
        * optimal storage classes
        * data encryption at rest and in transit
        * IAM user and roles
    * **Databases**
        * if run on EC2 must handle all things that are done by AWS in managed db (see AWS database responsibility model)
        * check the ports / IP / security group inbound rules in DB's SG
        * in-database user creation and permissions
        * creating a database with or without public access
        * ensure parameter groups or DB is configured to only allow SSL connections
* **AWS Responsiblity** - security `of` the cloud
    * software - compute/storage/database/networking
    * hardware/global infrastructure - regions/az/edge locations, global network security
    * configuration and vulnerability analysis
    * compliance validation
    * **Security**:
        * protecting infrastructure (hardware, sotware, facilities, networking) that runs all the AWS services
        * protecting services like S3, DynamoDB, RDS, etc
    * **EC2**:
        * infrastructure (global network security)
        * isolation on physical hosts
        * replacing faulty hardware
        * compliance validation
    * **EC2 Storage**:
        * infrastructure
        * replication for data for EBS volumes/EFS drives
        * replacing faulty hardware
        * ensuring employees cannot access your data
    * **S3**:
        * infrastructure -> global security, durability, availability, sustain concurrent loss of data in two facilities
        * configuration and vulnerability analysis
        * compliance validation
        * guarentee unlimied storage
        * guarentee encryption
        * ensure separation of data between different customers
        * ensure AWS employees cant access your data
    * **Databases**
        * manage underlying EC2 instances, disable SSH access
        * automated DB patching
        * automated OS patching
        * audit the underlying instance and disks & guarentee it functions
        * offers to manage databases which makes them:
            * quickly provisioned
            * highly available
            * fault tolerance
            * easy vertical and horizontal scaling
            * automated backup & restore
            * automated operations / upgrades
            * automated operating system patching
            * monitoring/alerting out of the box
* **Shared Responsibility**
    * patch management
    * configuration management
    * awareness & training

&nbsp;
# AWS Acceptable Use Policy
* no illegal, harmful, offensive use/content
* no security violations
* no network abuse
* no email/message abuse

&nbsp;
# AWS Billing
* accessible from `My Account` > `My Billing Dashboartd`
    * the root account needs to set if access to Billing Information can be controlled through an IAM policy - `My Account` > `IAM User and Role Access to Billing Information`
* **Budgets** enables setting a budget to control and get notified when costs exceed a specified threshold
* **Bills** you can find very specific information on what you are paying for
* **AWS Free tier** shows all services that are free to use

&nbsp;
# IAM
* Identity and Access Management
* **Global** service
* **Users** are people withing your organization
    * you should download credentials in CSV after creating a user
* **Groups** are collection of users with shared identity and access settings
    * users can belong to multiple groups but dont have to belong to any 
    * groups cannot contain other groups
* **IAM Policies** are JSON documents that specify what a user or group is allowed to do
* **Least privilege principle** means you don't give a user more permissions than he needs
* **Account Alias** is a unique name of the account that you can set and use instead of the number during log in
* **IAM Roles** are policies applied to services. Common roles:
    * EC2 Instance Roles
    * Lambda Function Roles
    * Roles for CloudFormation
* **IAM Security** comprise of MFA and Password Policies
* **IAM Secutiy Tools** various tools for checking how secure your IAM configuration is:
    * *IAM Credentials Report* - list of account's users and various credential status - `account level`
    * *IAM Access Advisor* - list of service permissions granted to user and when they where last accessed. Very handy to revise policies assigned to user - `user level`
* **AWS CLI** used to manage AWS services with a command line
* **AWS SDK** used to manage AWS services with a programming language
* **Access Keys** enable access to AWS using CLI or SDK
* **IAM Audit** can be done through IAM Credential Reports & IAM Access Advisor

## IAM Policies
* JSON document that specifies permissions
* **inline** policy is one that is only attached to a user
* **IAM Policy structure**
    * *Version* - policy language version, always select `2012-10-17`
    * *Id* - idenitifier for the policy [`optional`]
    * *Statement* - one or more individual statement
        * *Sid* - statement identifier [`optional`]
        * *Effect* - whether statement allows or denies access [`Allow`, `Deny`]
        * *Principal* - account/user/role to which this policy is applied to
        * *Action* - list of actions the policy allows or denies
        * *Resource* - list of resources the policy is applied to
        * *Condition* - conditions for when the policy is in effect [`optional`]
* custom policies can be created either through JSON format or Visual Editor

```JSON
{
    "Version": "2012-10-17",
    "Id": "S3-Investor-Permissions",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
                "AWS": ["arn:aws:iam:123456789012:root"]
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": ["arn:aws:s3:::inv-*"]
        }
    ]
}
```

## IAM MFA Overview
* **Password Policies**
    * set minimum length
    * require specific characters like: uppercase/lowercase letters, number, non-alphanumeric characters
    * allow all IAM users to change their own passwords
    * password expiration
    * prevent password re-use
* **Multi Factor Authentication**
    * a combination of a *password that you know* and a *device that you own*
    * a hacker would need access to physical device:
        * *Virtual MFA device* - Google Authenticator(phone-only) or Authy(multi-device)
            * supports multiple tokens on a single device
        * *Universal 2nd Factor (U2F) Security Key* - YubiKey by Yubico (3rd party)
            * supports multiple root and IAM users on a single security key
            * looks like a usb drive
        * *Hardware Key Fob MFA Device* - a small device that shows and refreshes MFA code
        * *Hardware Key Fob MFA Device for AWS GovCloud (US)* - special key fob provided by SurePassID

## IAM Best Practices
* only use root account for AWS account setup
* **one** physical user = **one** AWS user
* assign users to groups and assign permissions to groups
* create a strong password policy
* enforce MFA
* create and use `Roles` for giving permissions to AWS services
* use and protect access keys for programmatic access (CLI / SDK)
* use IAM Credentials Report to audit credentials of accounts
* **never** share IAM users & access keys

&nbsp;
# AWS CLI
* Command Line Interface
* alternative to using the AWS Management Console
* protected by access keys
    * generated through AWS Console
    * contains an *Access Key ID* which is like a username and *Secret Access Key* which is like a password
* enables direct access to *public APIs of AWS services* and allows writing *scripts to manage your resources*
* is open-source https://github.com/aws/aws-cli
* is effected by IAM policies

``` bash
# configure the CLIby adding access keys
aws configure

# IAM
aws iam list-users
```

## AWS CloudShell
* a browser based environment with AWS CLI and other tools installed
* persists files
* easily download and upload files between local environment and AWS CloudShell
* only available in some regions

&nbsp;
# AWS SDK
* Software Developer Kit
* used for accessing AWS APIs from code and protected by access keys 
* SDK's are language specific
* allows managing AWS services programmatically
* the SDK is embedded within your applications
* supports:
    * *SDKs* - JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, C++ and more
    * *Mobile SDKs* - Android, iOS and more
    * *IOT Device SDKs* - Embedded C, Arduino and more

&nbsp;
# EC2
* Elastic Compute Cloud
* Infrastructure as a Service
* consists of the following capabilities:
    * *EC2* - renting virtual machines
    * *EBS* - storing data on virtual drives
    * *ELB* - distributing load across machines
    * *ASG* - scaling the services using an auto-scaling group
* *EC2 Instance Store* - high-performance ephemeral storage connected directly to the EC2 hardware
    * better I/O performance than network drives
    * losses storage on instance termination(ephemeral)
    * good for buffer/cache/scratch data/temporary content
    * risk of data loss if hardware fails -> Backup and Replication is your responsiblity
    * provides block level storage
* Sizing and configuration:
    * *OS* - Linux, Windows, Mac OS, Amazon OS
    * *CPU* - how much power and cores
    * *RAM* - how much volatile memory
    * *Storage* - network attached through *EBS & EFS* or hardware *EC2 Instance Store*
        * you can set volumes to be deleted on instance termination
    * *Network* - speed of network card, public IP address
    * *Firewall rules* - inbound and outbound rules defined in a **Security Group**
        * You need to create a key pair and assign it to an instance in order to SSH into it
            * `.pem` for newer OS like MacOS or Windows - make sure to run `chmod 0400 test.pem` before using it
            * `.ppl` for older OS like Windows 7/8
        *  when connecting via `SSH` make sure the `pem` file is in `cwd` - `ssh -i test.pem ec2-user@3.250.11.10`
    * *Bootstrap script* - configure an EC2 instance at launch through *EC2 User Data*
* On creation an instance gets:
    * *Instance ID* unique identifier of the EC2 instance
    * *Public IPv4 address* if it is configured for public access
    * *Private IPv4 adresses* which enable access internally by other AWS services
* `EC2 Instance Connect` allows connecting with EC2 through your browser, only available for `Amazon Linux 2`
    * default user is named `ec2-user`
    * dont use AWS Account credentials in EC2 instance to configure access to resources
* **Summary**:
    * *EC2 Instance* - AMI(OS) + Instance Size (CPU + RAM) + Storage + SG + EC2 User Data
    * *Security Groups* - firewall attached to the ec2 instance
    * *EC2 User Data* - script launch on first start up of instance
    * *SSH* - start a terminal into EC2 instance on port 22
    * *EC2 Instance Role* - set instance permissions based on IAM role
    * *Purchasing Options* - On-Demand, Spot, Reserved, (Standard + Convertible + Scheduled), Dedicated Host, Dedicated Instance

## EC2 User Data
* a script that allows bootstrapping an EC2 instance
* launches commands on startup
* the script is only run once on startup
* automates boot tasks such as:
    * installing updates
    * installing software
    * downloading common files form the internet
* runs with the root user (`sudo` rights)

``` bash
#!/bin/bash
# Use this for your user data
# install httpd
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

## EC2 Instance Types
* a good reference is https://aws.amazon.com/ec2/instance-types/
* instance types are separated into classes:
    * *General Purpose* - the `t` class is good for diveristy of workloads like `web servers` or `code repositories`. Balance between Compute, Memory, Networking
    * *Compute Optimized* - the `c` class is good for workloafds that require high performance processors like:
        * `batch processing`
        * `media transcoding`
        * `high performance web servers`
        * `(HPC) high performance computing`
        * `scientific modeling & machine learning`
        * `dedicated gaming servers`
    * *Memory Optimized* - the `m` class is good for processing large data sets in memory like:
        * `high performance for relational/non-relational databases`
        * `distributed web scale cache stores (ElastiCache)`
        * `in-memory databases optimized for BI`
        * `Application performing real-time processing of big unstructered data`
    * *Storage Optimized* - `i`, `d` and `h1` class is great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage like:
        * `high frequency online transaction processing (OLTP) systems`
        * `Relational & NoSQL databases`
        * `Cache for in-memory databases (Redis)`
        * `Data warehousing applications`
        * `Distributed file systems`
* instance naming convention following an example `m5.2xlarge`
    * `m` - instance class
    * `5` - generation, the hardware of the instance which is improved over time
    * `2xlarge` - size within the instance class, the bigger the higher hardware specs

Tool for comparing instances: https://instances.vantage.sh

## Security Groups
* a firewall on EC2 instances
* fundamental of network security in AWS
* control inbound and outbound traffic of a EC2 instances
* only contain `allow` rules
* can reference by IP or by other security groups
    * which means you can `authorise` specific security groups and traffic comming from EC2 instances with that group is allowed
* they regulate:
    * access to ports
    * authorised IP ranges - IPv4 and IPv6
    * control of inbound network (from other to the instance)
    * control of outbound network (from the instance to other)
* can be attached to multiple instances and vice versa
* locked down to a region / VPC combination
* live outside of the EC2 instance
* **Good Practice** - maintain one separate security group for SSH access
* a `time out` is usually a security group issue
* a `connection refused` error means you got through and got an application error
* all inbound is `blocked` by default - `Source 0.0.0.0/0`
* all outbound is `autherized` by default - `Destination 0.0.0.0/0`
* you can attach `IAM` roles to EC2 instances to give them access to resources (like using the AWS CLI in them)
    * Instance > Actions > Modify IAM role
    * dont use AWS Account credentials in EC2 instance to configure access to resources


## Classic Ports
* `22` = **SSH** (Secure Shell) - log into a Linux instances
* `21` = **FTP** (File Transfer Protocol) - upload files into a file share
* `22` = **SFTP** (Secure File Transfer Protocol) - upload files using SSH
* `80` = **HTTP** - access unsecured websites
* `443` = **HTTPS** - access secured websites
* `3389` = **RDP** (Remote Desktop Protocol) - log into a Windows instance

## EC2 Purchasing Options
* **Tenancy** defines how EC2 instances are distributed across physical hardware and affect pricing
* purchase options include:
    * **On-Demand Instances** - short workload, predictable pricing, pay by second
        * billing per second after first minute for Linux or Windows
        * billing per hour for other OS
        * *highest cost* but no *upfront payment*
        * best if: 
            * *short* workload
            * *uninterrupted* workload
            * *cant predict* application behavior
    * **Reserved** (1 & 3 years)
        * types:
            * **Reservecd Instances** - long workloads
            * **Convertible Reserved Instances** - long workloads with flexible instances
        * Up to 72% discount compared to On-demand
        * reserve specific instance attributes (Type, Region, Tenancy, OS)
        * the higher the *reservation period* the higher the discount
        * *payment options* - no upfront, partial upfront, all upfront
        * *scope* - region or zonal
        * can buy and sell in the `Reserved Instance Marketplace`
        * best for:
            * steady-state usage applications (like DB)
    * **Savings Plan** (1 & 3 years) - commitment to an amount of usage
        * discount based on long-term usage
        * commit to a type of usage (like $/hour for 1 or 3 years)
        * usage beyond Saving Plans is billed at On-Demand price
        * **locked** to *instance family* and *AWS region*
        * **flexible** across *instance size*, *os*, *tenancy*(Host, Dedicated, Default)
    * **Spot Instances** - short workloads, can lose instances (less reliable)
        * up to 90% disount compared to on-demand
        * can lose at any point of time if your max price is less then current spot price
        * *most cost-efficient* instances
        * useful for workloads that are *resilient to failure* like:
            * *batch jobs*
            * *data analysis*
            * *image processing*
            * *distributed workkloads*
            * *workloads with flexible start and end time*
        * *not suitable* for critical jobs or databases
    * **Dedicated Hosts** - book an entire **physical server**, control instance placement
        * physical server with EC2 capacity fully dedicated to your use
        * allows addressing *compliance requirements* and *existing server-bound software licenses*(per-socket, per-core, per-VM software licenses)
        * purchasing options: *On-demand*, *Reserved (No Upfront, Partial Upgront, All Upfront)*
        * characteristics:
            * enables the use of dedicated physical servers
            * per host billing
            * visibility of sockets, cores, host ID
            * affinity between a host and instance
            * targeted or automatic instance placement
            * add capacity using an allocation request
    * **Dedicated Instances** - no other customers will share your hardware
        * runs on **hardware* that is dedicated to you, but may share it with other instances you control
        * you have no control over instance placement
        * per instance billing (subject to 2$ per region fee)
    * **Capacity Reservations** - reserve capacity in a specific AZ for any duration
        * reserve On-Demand instances capacity in an AZ for any duration
        * always have access to that capacity
        * pay hourly rates even if you dont use it
        * *not time commitment* and *no billing discounts*
        * sutiable for *short-term uninterrupted workloads* that need to be in a specific AZ

## AMI
* **AMI** - **Amazon Machine Image** - *customization* of an EC2 instance:
    * add own software. configuration, OS, monitoring
    * faster boot thx to pre-packaged software
* region specific and can be copied across regions
* you can launch EC2 instances from:
    * *A public AMI* - provided by AWS
    * *Your own AMI* - you make and maintain them
    * *AWS Marketplace AMI* - an AMI someone else made and potentially sells
* you can:
    * build an AMI from an existing EC2 instance(which creates EBS snapshot)
* **EC2 Image Builder** - automate creation of VM or container images
    * a regional service
    * free service, only pay for underlying resources(EC2 instances, storage of AMI)
    * automate the creation/maintenance/validation/testing of EC2 AMIs
    * steps:
        * creates a *Builder EC2 Instance* - build components applied like custom software
        * creates a new AMI from the Builder EC2 instance
        * creates a *Test EC2 Instance* from the AMI - runs test suite to check if its working/secure/app running
        * distributes the AMI - allows distribution to multiple regions
    * can run on a schedule like weekly/triggers(package updates)/manually
    * *Recipe* - how source image is customized
    * *Infrastructure Configuration* - ec2 instance type and configs(like IAM)
    * *Distribution Settings* - what regions the AMI will be distributed to

&nbsp;
# EBS
* **EBS** - **Elastic Block Store** - a network drive you can attach to an instance while they run
    * persist data even when instance is terminated
    * can only mount to 1 instance at a time (CCP level, CCA level "multi-attach" feature for some possible)
    * bound to AZ
        * to move across AZ first need to *snapshot* a volume
    * think of them as *network USB stick*
    * is a *network drive*:
        * can cause latency
        * easily attached and detached
    * capacity(GB, IOPS) needs to be provisioned in advance
* **parameters**
    * *Delete on Termination* - deletes the EBS volume on EC2 instance termination
        * by default `on` for root volumes
        * by default `off` for non-root volumes
        * use case: disable for root volume to preserve on ec2 termination
* **EBS Snapshot** - a backup of an EBS volume at any point of time
    * not necessary to detach volume (but recommended)
    * can copy across AZ or Region
    * Features:
        * *EBS Snapshot Archive* - allows moving to an "archive tier" that is 75% cheaper, takes 24-72h to restore
        * *Recycle Bin for EBS Snapshots* - rules to retain deleted snapshots, specify retention 1d-1y


&nbsp;
# EFS
* **EFS** - **Elastic File System** - is a *managed NFS*(network file system) that can be mounted on many EC2(efs mount targets)
    * an EFS can work in multi-AZ
    * highly available, scalable, expensive, pay per use
    * uses *NFSv4.1 protocol*
    * access controlled by *security group*
    * only compatible with Linux based AMI
    * encryption at rest using KMS
    * *POSIX* file system with a standard API
    * scales automatically (no capacity planning!)
* use cases:
    * content management
    * web serving
    * data sharing
    * wordpress
* performance and storage classes:
    * **Scale** - 1000s of concurrent NFS clients, 10 GB+ throughput, grow to Petabyte-scale NFS automatically
    * **Performance mode** - set at EFS creation time:
        * *General purpose* (default) - latency-sensitive use cases (web server, CMS, etc...)
        * *Max I/O* - higher latency, throughput, highly parallel (big data, media processing)
    * **Throughput mode** set at EFS creation time:
        * *Bursting* - 1 TB = 50MiB/s + burst of up to 100MiB/s, the more space you use the more throughput
        * *Provisioned* -  set throughput regardless of storage size
* storage classes:
    * **Storage Tiers** - lifecycle management features
        * *Standard* - for frequently accessed files
        * *Infrequent access* (EFS-IA) - cost to retrieve files, lower price to store 
            * enable with a Lifecycle policy, which moves from standard automatically based on last access time 
            * optimal for non-frequent access(up to 92% lower costs compared to standard)
    * **Availability and Durability**
        * *Regional* - multi-AZ, great for prod
        * *One Zone* - one AZ, cheaper, compatible with IA (EFS One Zone-IA), backup enabled by default, good for dev

&nbsp;
# Amazon FSx
* 3rd-party high performance file systems on AWS
* fully managed services
* options:
    * *FSx for Lustre*
        * full managed/high-performance/scalable file storage
        * for High Performance Computing (HPC)
        * *Luster* -> Linux + Cluster
        * good for Machine Learning/AnalyticsVideo Processing/Financial Modeling
        * scales up to 100s GB/s, millions of IOPS, sub-ms latencies
        * proxy that allows sharing data between corporate data center and AWS compute instances
        * stores data on AWS Storage services like S3
    * *FSx for Windows File Server*
        * fully managed/highly reliable/scalable/Windows native shared file system
        * built on Windows File Server
        * supports SMB protocol & Windows NTFS
        * can integrate with a windows client in a corporate data center and serves as a proxy that enables access for cloud resources(ec2)
        * integration with Microsoft Active Directory
        * can be access from AWS resources and on-premise infrastructure
    * FSx for NetApp ONTAP


&nbsp;
# Scalability & High Availability
* **Scalability** - can handle greater loads by adapting
    * *Vertical Scalability* - increasing the size of an instance, `scale up / down`
        * common for non-distributed systems like a DB ( RDS, ElastiCache )
        * limited by hardware
    * *Horizontal Scalability* (elasticity) - increasing number of instances / systems for application, `scale out / in`
        * implies distributed systems like a web application / modern application
        * not everything can be distributed
        * made simple by cloud services like [ASG](#asg), [ELB](#elb)
* **High Availability** - running your application in at least 2 data centers(2 AZ)
    * goal is to survive a data center loss
    * *Passive* - a resource that can take over when an active resource fails (like DB replica in another AZ) 
    * *Active* - multiple replicas of the resource are in use(like horizontally scaled architecture)
    * facilitated by services like [ASG](#asg) with multi AZ enabled or [ELB](#elb) with multi AZ enabled
* **Definitions**
    * *Scalibility* - ability to accommodate a larger load by making the hardware stronger, or by adding nodes
    * *Elasticity* - the system can automatically scale based on the load it is receiving 
    * *Agility* - how easily available new IT resources are ( 1 week, 1 minute, etc.)

&nbsp;
# ELB
* **Load Balances** - servers that forward traffic to multiple servers downstream. Used to:
    * `spread load` across instances
    * expose a `single point of access` (DNS) to your application
    * seamlessly `handle` downstream instance `failure` 
    * perform `healthchecks`
    * provide `SSL termination` (HTTPS) for your websites => decrypting SSL-encrypted data traffic before offloading it to a web server
    * enforce `stickiness` with cookies => assign identification(through cookies or IP details) and fix routing based on it
        * *Stickiness* - the ability to route traffice from a client to a single destination, instead of balancing traffic across multiple destinations
    * enable `HA` across zones
    * separate `public` from `private traffic`
* **ELB** - **Elastic Load Balancing** - a managed load balancer 
    * *managed* means:
        * AWS guarentees it will be working
        * AWS takes care of upgrades, maintenance and HA
        * AWS provides only a few configuration knobs
    * cheaper to setup own LB but a lot more effort
    * integrated with AWS services:
        * [EC2](#ec2), [ASG](#asg), [ECS](#ecs)
        * [ACM](#other-services), [CloudWatch](#cloudwatch)
        * [Route 53](#route-53), WAF, AWS Global Accelarator
* **Health Checks** are crucial for loadbalancers
    * enable to know if instances handling traffic can reply to requests 
    * are done on a specific port and a specific route like `/health` for example:
        * Protocol: `HTTP`
        * Port: `4567`
        * Endpoint: `/health`
    * if response to health check is not `200 (OK)` then labeled `unhealthy`
* **4 kinds** of LB are available on AWS:
    * **CLB** - *Classic Load Balancer* - `v1`, old generation, LB available from 2009 
        * operates on Layer 4 and Layer 7
        * for `protocols` HTTP, HTTPS, TCP, SSL (secure TCP)
        * retired in 2023
    * **ALB** - *Application Load Balancer* - `v2`, new generation, LB available from 2016
        * Layer 7
        * HTTP routing features
        * Static DNS (URL)
        * for `protocols` HTTP, HTTPS, WebSocket, gRPC
    * **NLB** - *Network Load Balancer* - `v2`, new generation, LB available from 2017
        * ultra-high performance (millions of requests per second)
        * Static IP through Elastic IP
        * Layer 4
        * for `protocols` TCP, TLS (secure TCP), UDP
    * **GWLB** - *Gateway Load Balancer* - modern LB available from 2020
        * operates at layer 3 (Network layer) - IP Protocol
        * for `GENEVE protocol` on IP Packets
        * Route Traffic to Firewalls that you manage on EC2 Instances
        * Use cases: Intrusion detection, Deep packet inspection
        * sends traffic through 3rd Party Security Virtual Appliances before routing it to the destination(application)
    * newer generation load balancers have more features and are recommended
* load balancer can be setup as:
    * **private** - for your internal network
    * **public** - for public facing applications (ELBs)
* **security groups** for loadbalancers should be such that:
    * allow all inbound and outbound traffic for the **LB** on the pertinent protocols like:
        1. Type: `HTTP` \ Protocol: `TCP` \ Port Range: `80` \ Source: `0.0.0.0/0`
        1. Type: `HTTPS` \ Protocol: `TCP` \ Port Range: `443` \ Source: `0.0.0.0/0`
    * on connected **instances** only allow traffic to and from the LB:
        1. Type: `HTTP` \ Protocol: `TCP` \ Port Range: `80` \ Source: `sg-1231231theloadbalancersSecurityGroup`


&nbsp;
# ASG
* **ASG** - **Auto Scaling Groups** - a group of EC2 isntances that is treated as a logical grouping for the purpose of automatically scalling
    * work hand in hand with [ELB](#elb)
* the goal of an ASG is to:
    * *Scale out* - add instances to match increased load
    * *Scale in* - remove instances to match a decreased load
    * ensure there is a `min` and `max` of machines running
    * automatically register new instances to a load balancer
* parameters include:    
    * *minimum size* - the minimum amount of running instances
    * *actual size / desired capacity* the actual ammount of running instances at a given moment
    * *maximum size* - the maximum amount of running instances
* attributes:
    * *launch configuration* or *launch templates* (newer - recommended) - how a new instance is launched and attached configurations such as:
        * AMI + Instance Type
        * EC2 User Data
        * EBS Volumes
        * Security Groups
        * SSH Key Pair
        * `IAM roles` -> are attached to each instance
    * *Mix Size* 
    * *Max Size*
    * *Initial Capacity*
    * *Network + Subnets* information
    * *Load Balancer* information
    * *Scaling Policies* what will trigger a scale out and scale in
* you update an ASG by providing a new launch configuration | template
* ASG is free, you pay for the launched resources
* if an instance within ASG is terminated, ASG will *automatically* create new replacements 
    * example: a LB marks instance as unhealthy
* **Scaling Strategies**:
    * *Manual Scaling* - update size of ASG manually
    * *Dynamic Scaling* - respond to changing demand
        * *Simple / Step Scaling* - when an alarm is triggered add/remove n units
        * *Target Tracking Scaling* - scale so that average CPU usage is around 40%
        * *Scheduled Scaling* - anticipate scaling based on known usage patterns, like increase capacity between 2PM-4PM on Friday
    * *Predictive Scaling* - use machine learning to scale ahead of time based on traffic forcasts
        * automatically provision based on prediction
        * useful when your load has predictable time-based patterns
* **Clean-up** - delete ASG > delete ALB > delete EC2 instances

## ASG Scaling Policies
* **Auto Scaling Alarms** - can scale an ASG based on [CloudWatch](#cloudwatch) alarms
    * alarms monitor system metrics
    * metrics are computed for the overall ASG instances
    * the alarm can trigger:
        * scale-out policies
        * scale-in policies
* **Auto Scaling New Rules** - easy to setup rules for scale-out and scale in like:
    * target avg cpu usage
    * number of requests on ELB per instance
    * average network in/out
* **Auto Scaling Custom Metric** - can control scaling based on custom metric, which is defined and emitted from your application
    * can be based on a schedule
    * can be transferred from the application to CloudWatch, which can have alarms configured


&nbsp;
# S3
* **S3** - **Simple Cloud Storage** - infinitely scaling storage
* one of the main building blocks of AWS
* use cases: backup/storage/disaster recovery/archive/hybrid cloud storage/application hosting/media hosting/data lakes/big data analytics/software deleviry/static websites
* buckets names are unique accross all AWS
* **Buckets** - directories containing objects
* **Objects** - files within buckets
    * each one has a **key** which is the full path composed of *prefix* + *object name*. Example: 
        * `s3://my-bucket/some_key.txt` -> some_key.txt
        * `s3://my-bucket/some_folder/some_key.txt` -> some_folder/some_key.txt
    * no directories, but objects can behave as directories
    * **value** is the content of the body
    * **type** is the objects mime type
    * max size 5TB
    * if uploading more than 5GB, must use `multi-part upload`
    * **metadata** - list of text key/value pairs, system/user metadata
    * **tags** - up to 10 unicode key/value pair, good for security/lifecycle
    * **version id** - if versioning enabled
    * a public url gives access to the S3 object, a pre-signed public url contains auth information on the user which is trying to view the object
* buckets defined at region level
* naming convention: no uppercase, no underscore, 3-62 chars, not an ip, starts with lowercase letter/number, no prefix xn--, no suffix -s3alias
* **Security**
    * **User-Based** - IAM Policies
    * **Resource Based**
        * *Bucket Policies* - bucket wide rules from the S3 console - allows cross account access
            * used for:
                * grant public access
                * force object encryption on upload
                * grant cross account access
            * JSON document
                * Resource -> buckets and objects
                * Action -> allow or deny
                * Actions -> set of api to allow or deny
                * Principal -> the account or user to apply the policy to
        * *Object Access Control List (ACL)* - finer grain (can be disabled)
        * *Bucket Access Control List (ACL)* - less common (can be disabled)
    * an IAM principal can access S3 object if:
        * user IAM perm ALLOW it OR resource policy ALLOWS it
        * AND there's no explicit DENY
    * **Encryption** - encrypt object using encryption keys. Different types of encryption available:
        * *Server Side Encryption* - the server storing the object encrypts it after receiving it (encryption at rest)
        * *Client Side Encryption* - file is encrypted before it is uploaded ( encryption in flight)
    * new buckets are configured by default to block all public access even if you allow it through a bucket policy - disable this in settings
* **Static Webstie Hosting** - S3 can host static websites
    * url examples:
        * http://bucket-name.s3-website-aws-region.amazonaws.com
        * http://bucket-name.s3-website.aws-region.amazonaws.com
    * enable this in S3 settings
    * bucket must be made public
* **Versioning** - makes uploading objects with existing key create a new version without deleting the old version
    * enabled at bucket level
    * a good practice, easy to restore on delete, easy roll-back
    * any file not versioned prior to enabling versioning has version `null`
    * suspending versioning does not delete previous versions
    * deleting a file does a soft delete by applying a `delete marker` to it, deleting a `delete marker` file type will permanently delete it
* **Replication** - allows replicating objects across buckets in the same or cross region
    * must enable versioning on both source and destination buckets
    * replication types:
        * *Cross-Region Replication (CRR)* - compliance, lower latency access, replication across account
        * *Same-Region Replication (SRR)* - log aggregation, live replication between prod and test accounts
    * buckets can be in different AWS account
    * copying is asynchronous
    * requires proper IAM permissions on S3
* **AWS Storage Gateway** - bridge between on-premise data and cloud data in S3 for use with hybrid cloud architecture
    * hybrid storage service to allow on-premises to seamlessly use AWS Cloud
    * uses Amazon EBS, Amazon S3, Amazon Glacier to achieve this
    * use cases: disaster recivery, backup & resotre, tiered storage
    * types:
        * *File Gateway*
        * *Volume Gateway*
        * *Tape Gateway*

## S3 Storage Classes
* **Durability** - how often objects can be lost
    * S3 is highly durable - 99.999999999% across multiple AZs
    * example: store 10,000,000, incur loss of 1 object once every 10000 years
    * `same` for all storage classes
* **Availability** - how readily available a service is
    * S3 standard is 99.99% available, which means its not available 53 minutes a year
    * `varies` depending on storage class
* object storage classes can be changed: 
    * manually or through *S3 Lifecycle configurations*
* **Amazon S3 Standard**
    * **General Purpose** - 99.99% availability, frequently accessed data, low latency, high throughput, sustains 2 concurrent facility failures
        * use cases: big data analytics, mobile & gaming applications, content distribution
    * **Infrequent Access (IA)** - less frequent acces, but requires rapid access when needed
        * lower cost than standard
        * 99.9% Availability
        * use cases: disaster recovery, backups
    * **One Zone-Infrequent Access** - high durability within a single AZ, data lost if AZ destroyed
        * 99.5% Availability
        * use cases: secondary backup copies of on-premise data, or data you can recreate
* **Amazon S3 Glacier** - low-cost object storage meant for archiving / backup, price for storage + object retrieval
    * **Instant Retrieval** - ms retreival, great for data accessed once a quarter, minimum 90 day storage duration
    * **Flexible Retrieval** - minimum storage duration is 90 days. 3 flexibility options:
        * Expedited -> retrieval in 1 to 5 min
        * Standard -> retrieval in 3 to 5 h
        * Bulk -> retrieval in 5 to 12 h, is free
    * **Deep Archive** - min storage duration 180 days. 2 flexibility options:
        * Standard -> retrieval in 12 h
        * Bulk -> retrieval in 48 h
* **Amazon S3 Intelligent Tiering** - move objects automatically between access tiers based on usage
    * costs a small fee
    * no retrieval charges
    * tiers:
        * *Frequent Access tier* - default tier, enabled automatically
        * *Infrequent Access tier* - objects not accessed for 30 days, enabled automatically
        * *Archive Instant Access tier* - objects not accessed for 90 days, enabled automatically
        * *Archive Access tier* - objects not accessed for a configurable amount of 90 to 700+ days, enabled optionally
        * *Deep Archive Access tier* - objects not accessed for a configurable amount of 180 to 700+ days, enabled optionally

## AWS Snow Family
* a highly-secure, portable device to collect and process data at the edge and/or migrate data into and out of AWS. 
* AWS sends this portable device to the user, the user loads the data and ships the device back to AWS for import/export to S3 bucket
* all devices can run EC2 Instances & AWS Lambda functions (using AWS IoT Greengrass)
* **Data Migration** - moving large volumes of data takes a lot of time and can cost a lot, especially with limited connectivity/bandwidth/instable stability. Rule of thumb: if transfer takes more then a week you should use Snow Family. Tools:
    * *Snowcone* - smaller portable computing, anywhere, rugged & secure, resistant to harsh environments
        * light -> 4.5 pounds, 2.1 kg
        * 2 CPUs, 4 GB RAM, wired/wireless access
        * USB-C power or battery
        * used for edge computing, storage, data transfer
        * 8 TBs of usable storage
        * must provide own batteries and cables
        * send back to AWS offline, or connect to internet and use **AWS DataSync** to send data
        * *Recommended migration size* - up to 24 TB
    * *Snowball Edge* - physical data transport solution for moving TB/PB of data in/out of AWS
        * alternative to moving data across network
        * pay per data transfer job
        * provide block storage and AWS S3 compatible object storage
        * two types:
            * *Snowball Edge Storage Optimized* -> 80 TB of HDD capacity for block volume and S3 compatible object storage
                * 40 vCPUs, 80 GiB RAM
                * object clustering available
            * *Snowball Edge Compute Optimized* -> 42 TB of HDD capacity for block volume and S3 compatible object storage
                * 52 vCPUs, 208 GiB RAM
                * Optional GPU
        * use case: large data cloud migrations, DC decommission, disaster recovery
        * *Recommended migration size* - up to petabyes
    * *Snowmobile* - an actual truck that can transfer 100 PB of data (1 EB = 1000 PB = 1000000 TB)
        * high security: temperature controlled, GPS, 24/7 video surveillance
        * *Recommended migration size* - up to exabytes
* **Edge Computing** - process data while its created on an edge location(like ship) with limited/no internet access/access to computing power.
    * Tools:
        * *Snowcone*
        * *Snowball Edge*
    * Use cases: preprocessing data, machine learning at the edge, transcoding media streams
    * long-term deployment options: 1-3 years discounted pricing
* **Usage Process**
    1. Request devices from AWS console for delivery
    1. Install snowball client / AWS OpsHub on your servers
    1. connect devices to servers and copy using client
    1. ship devices back to AWS
    1. data loaded into S3 bucket
    1. devices completely wiped
* connect through CLI or AWS OpsHub (GUI application). Allows:
    * unlocking/configuring clustered devices
    * transferring files
    * launching/managing instances running on Snow Family Devices
    * monitor device metrics
    * launch AWS services on your devices


&nbsp;
# Databases and Analytics
* used to store structured data and easily access it and optimize for a purpose
* types:
    * **relational database** -> tables, can use sql, hard to scale out, easy to scale up
    * **nosql databases** -> built for specific purpose, flexible schema, more flexibility, scalable(scale out by adding distributed servers), highly functional (optimized for the data model)
        * examples: key-value, document graph, in-memory, search
        * formats: json
* **Summary**:
    * **Relational Databases - OLTP** - RDS & Aurora (SQL)
    * **In-memory Database** - ElastiCache
    * **Key/Value Database** - DynamoDB (serverless) & DAX (cache for DynamoDB)
    * **Warehouse - OLAP** - Redshift (SQL)
    * **Hadoop Cluster** - EMR
    * **Athena** - quey data on Amazon S3 (serverless & SQL)
    * **DocumentDB** - Aurora for MongoDB (JSON - NoSQL Database) 
    * **Amazon QLDB** - Financial Transactions Ledger (immutable jornal, cryptographically verifiable)
    * **Amazon Managed Blockchain** - managed Hyperledger Fabric & Ethereum blockchains
    * **Glue** - Managed ETL and Data Catalog service
    * **Database Migrations** - DMS
    * **Neptune** - graph database

## RDS
* **RDS** - **Relational Database Service** - a managed DB service for databases that use SQL as query language, like:
    * Postgres
    * MySQL
    * MariaDB
    * Oracle
    * SQL Server
    * Aurora
* managed means:
    * automated `provisioning`
    * automated `OS patching`
    * continuous `backups`
    * `Point in Time Restore` - restore to specific timestamp
    * `monitoring` dashboards
    * `read replicas` for improved read performance
    * `Multi AZ` setup for DR
    * `maintenance` windows for upgrades
    * `scaling` capability (vertical and horizontal)
    * storage backed by `EBS` (gp2 or io1)
    * `CANNOT SSH` into your instances
* includes a free tier
* **RDS Backups**
    * automatically enabled in RDS
    * daily full backup during maintenance window
    * transaction logs backed-up every 5 minutes
    * Point in Time Restore from up to 5 minutes ago
    * 7 day retention that can be increased to 35 days
    * **DB Snapshots**
        * manually triggered backup by user
        * retention as long as you want
        * allows:
            * setting up new db from snapshot
            * copy to another region for DR
            * share with other account
* **RDS Storage Autoscaling**
    * increases storage on instance dynamically and automatically 
    * triggered when RDS detects that DB is running out of storage
    * *Maximum Storage Threshold* - a setting that describes that maximum allowed storage
    * autoscaling can be triggered if:
        * free storage is `less than 10%` of allocated storage
        * low-storage lasts for at least `5 min`
        * `6 hours` have passed since last modification
    * useful for applications with unpredictable workload
    * supports all databases
* **Classic Architecture** - ELB distributes DB traffic across multiple EC2 instances (possibly in ASG) with a read/write connection to an RDB
* **Aurora** - proprietary DB technology from AWS
    * supports MySQL and PostgreSQL
    * is cloud optimized - 5x performance over MySQL, 3x performance over PostgreSQL
    * storage grows automatically in increments of 10 GB - 64 TB
    * costs more then RDS (20% more)
    * no free tier
* **Deployment Options**
    * *Read Replicas* -> scale read workload by creating replicas that services can read from
        * up to 5 Read Replicas
        * writes only to main DB
    * *Multi-AZ* ->  failover in case of AZ outage (HA)
        * read/write from main
        * in case of failure of main, failover DB in different AZ takes over
        * is passive
        * can only have one other AZ as failover
    * *Multi-Region* ->create multi-region read replicas
        * writes still need to go to the main DB (cross-region writes) - replication costs
        * useful for DR in case of region issue
        * useful for local performance for global reads

## ElastiCache
* **ElastiCache** - fully managed in-memory data store on top of Redis or Memcached
    * **Cache** - an in-memory database with really high performance and low-latency
        * `cache invalidating` - a strategy to make sure most current data is used in cache
    * helps:
        * `query caching` - reduce load off database for read intensive workloads 
        *  make your application `stateless`
    * AWS manages:
        * OS maintenance
        * patching
        * optimizations
        * setup
        * configuration
        * monitoring
        * failure recovery
        * backups
    * usage involves *heavy application code changes*
* **Solution Architecture Example**
    * `APP` <-> `Amazon Elasticache`
        * first queries cache
        * *Cache hit* - if requested data is stored in the Cache
        * saves a call to DB
    * `APP` <-> `Amazon RDS`
        * *Cache miss* - if requested data is NOT stored in the Cache
        * app reads the data from the DB
    * `APP` -> `Amazon Elasticache`
        * on *Cache miss* the application can write the data into the cache
    * can also be used to store user session so he doesn't have to log in all the time
* **Redis** vs **Memcached**
    * **Redis**
        * multi AZ with Auto-Failover
        * read replicas to scale reads and have high availability
        * Data Durability using AOF persistence
            * `AOF persistence` - Append Only File - logs every write operation received by the server
        * backup and restore features
        * good for: HA and DR
    * **Memchached**
        * `sharding` - multi-node for partitioning data
        * `no HA(replication)`
        * non persistent
        * no backup and restore
        * multi-threaded architecture
        * good for: performance on big data-sets

## DynamoDB
* **DynamoDB** - fully managed, highly available NoSQL database with replication across 3 AZ
    * scales to massive workloads -> millions of req / s, trillions of row, 100s of TB storage
    * serverless (no provisioning of EC2 instance type)
    * fast and consistent in performance -> single-digit millisecond latency, low latency retrieval
    * integrated with IAM for security, auth, administration
    * low cost and autoscaling capabilities
    * Standard / Infrequent Access (IA) Table Classes
* **Type of Data**
    * key/value
    * *Primary Key* -> composed of Partition Key(`Product ID: 1`) and Sort Key(`Type: Book ID`)
    * *Atrributes* -> schema defined per item
* **DynamoDB Accelerator (DAX)** - fully managed in-memory cache for DynamoDB
    * cache most frequently read objects
    * 10x performace improvement -> microseconds latency on read operations
    * secure / highly scalable / highly available
    * only used for DynamoDB
* only create tables -> through CLI or Console
* no joins/relations
* **Global Tables** -> way to make DynamoDB accessible with low latency in multiple regions by creating 2-way read-write replicas
    * *Active-Active* replication - read/write to any AWS Region

## Redshift
* **OLAP** (Online Analytical Processing) database based on PostgreSQL
    * used for analytics and data warehousing
    * load data once every hour
    * 10x better performance than other data warehouses
    * scale to PBs of data
    * columnar storage of data
    * **MPP** (Massively Parallel Query Execution) - highly available
    * pay as you go per provisioned instance
    * SQL interface for querying
    * out-of-the-box integration with BI tools like AWS Quicksight or Tableau
* not **OLTP** (Online Transaction Processing)

## EMR
* **Elastic MapReduce (EMR)** - a Hadoop cluster for Big Data to analyze and process vast amounts of data
    * **Hadoop** - open source technologyd that allows multiple servers in a cluster to analyze data together
        * *Ecosystem* -> Apache Sprak, HBase, Presto, Flink work on top of Hadoop
    * allows creating clusters of hundreds of EC2 instances
    * responsible for provisioning and configuration of the Hadoop Cluster
    * auto-scaling and integrated with spot instances
    * **use cases**: data processing, machine learning, web indexing, big data

## Athena
* serverless query service to perform analytics against S3 Objects
* use standard SQL to query files on S3
* supports `CSV`, `JSON`, `ORC`, `Avro`, and `Parquet` (built on Presto)
* can build reporting on top of Athena through `Amazon QuickSight`
* **pricing** - around $5.00 per TB of data scanned
* use compressed or columnar data for cost-savings due to less scanning
* use cases include: `BI`, `Analytics`, `Reporting`, `Analyze & Query VPC Flow logs`, `ELB logs`, `CloudTrail trails` 

## QuickSight
* serverless machine learning powered BI service for creating interactive dashboards
* fast / automatically scalable / embeddabke / per-session pricing
* use cases: Business analytics, building visualizations, perform ad-hoc analysis, get business insights using data
* integrations: RDS, Aurora, Athena, Redshift, S3

## DocumentDB
* proprietary cloud-optimized NoSQL database based on MongoDB
* store, query, index JSON data
* fully managed, HA, replication across 3 AZ
* storage grows automatically in increments of 10 GB up to 64 TB
* automatically scales workloads to work with millions of requests per seconds

## Neptune
* fully managed graph database
    * example graph dataset -> social network: interconnected nodes of users <-> friends <-> posts <-> comments <-> likes
* HA across 3 AZ, with 15 read replicas
* build and run applications working with highly connected datasets
* optimized for complex/hard graph db queries
* stores up to billions of relations
* query graph with ms latency
* use cases: knowledge graphs (ex. Wikipedia), fraud detection, recommendation engines, social networking

## QLDB
* **Quantum Ledger Database** - recording financial transactions
    * fully managed
    * HA -> replication across 3 AZ
    * review all changes to application data over time
    * **Immutable** - no entry can be removed or modified, cryptographically verifiable
    * 2-3x better performance than common ledger blockchain frameworks
    * manipulate data using **SQL**
    * no decentralization -> central DB owned by Amazon
    * in accordance with financial regulation rules 
* **How it works**
    * contains a **Journal** that is a sequence of modifications
    * whenever a modification is made a cryptographic hash is computed which guarentees immutability

## Managed Blockchain
* **Blockchain** - allow multiple parties to execute transaction without the need for a trusted/central authority
* Amazon Managed Blockchain is a managed service that allows:
    * join public blockchain networks
    * create own scalable private network
* compatible with frameworks:
    * Hyperledger Fabric
    * Ethereum

## Glue
* managed **ETL (Extract, transform, load)** service
* useful to prepare and transform data for analytics
* fully serverless
* example:
    * pull data from RDS / S3 into glue
    * execute scripts on data
    * load data into RedShift
* **Glue Data Catalog** - catalog of datasets that are available on your AWS account, can be used with Athena/Redshift/EMR

## DMS
* **DMS (Database Migration Service)** - allows migrating a *source DB* into a *target DB*
* quick / secure / resilient / self healing tool for migrating DBs into AWS
* source DB remains available during migration
* Supports:
    * homogeneous migrations: Oracle to Oracle
    * heterogeneous migrations: MS SQL to Aurora


&nbsp;
# Docker
* software development platform to deploy apps
* apps are packaged in `containers` that can be run on any OS
* apps run the same regardless of where they run
    * any machine
    * no compatibility issues
    * predictable behavior
    * less work
    * easier to maintain and deploy
    * works with any language, any OS, any technology
* use cases: microservices, lift-and-shift apps from on-premises to Cloud
* `containers` are build from `images` which are application like templates
* `images` are stored on Docker Repositories like:
    * **Docker Hub** - https://hub.docker.com
        * public repository
        * contains base images for many technologies
    * **Amazon ECR**
        * private repository
        * public repository also available on *Amazon ECR Public Gallery* https://gallery.ecr.aws
* works similar to virtualization technology(shares host resources):
    * **VM:** -> `Infrastructure` -> `Host OS` -> `Hypervisor` -> [`Guest OS` -> `Apps`, `Guest OS` -> `Apps`, `Guest OS` -> `Apps`]
    * **Docker:** -> `Infrastructure` -> `Host OS` -> `Docker Daemon` -> [`Container`, `Container`, `Container`, `Container`]
* how to get started:
    1. Write a `Dockerfile` which defines how an image should be built
    1. Build the docker image
    1. Push the image to a `Docker Registry`
    1. Pull images from repositories
    1. Run the image creating a container
* AWS Services for Docker containers are:
    * [ECS](#ecs) - a docker container management platform
    * [ECR](#ecr) - managed docker registry
    * [EKS](#eks) - managed kubernetes
    * [AWS Fargate](#fargate) - serverless container platform that works with ECS and EKS


## ECS
* **Elastic Container Service** - a docker container management platform
    * when you launch a Docker container on AWS you launch an **ECS Task** on an **ECS Cluster**
* **Launch Types**
    * **EC2 Launch Type**
        * **ECS Cluster** is a collection of `EC2` instances that you must `provision` and `maintain` 
        * each instances must run the `ECS Agent` to register in the cluster 
        * AWS starts / stops containers
    * **Fargate Launch Type**
        * you do `not provision` the infrastructure (no EC2 instances to manage)
        * its all `serverless`
        * create `task` definitions
        * AWS runs ECS Tasks based on `CPU / RAM` you need
        * to scale just increase number of tasks
* **IAM Roles**
    * *EC2 Instance Profile* for EC2 launch type, used by `ECS Agent`. Allows:
        * make API calls to ECS service
        * send container logs to CloudWatch Logs
        * Pull Docker image from ECR
        * Reference sesitive data in [Secrets Manager](#secrets-manager) or [SSM Parameter Store](#ssm)
    * *ECS Task Role* used both in EC2 and Fargate Launch Type and allows each task to have specific role
        * each role allows linking different ECS Services
        * task role is defined in task definition
* **Load Balancer Integrations**
    * [Application Load Balancer](#elb) supports and works for most use cases
    * [Network Load Balancer](#elb) good for high throughput / high performance use cases, or to pair with AWS Private Link
    * [Elastic Load Balancer](#elb) supported bu not recommended, no advanced features and doesn't work with [Fargate](#fargate)
* **Data Volumes (EFS)**
    * mount [EFS](#efs) file systems onto ECS tasks
    * works with both launch types
    * this way multi-AZ tasks share the same data in EFS
    * `Fargate` + `EFS` = `Serverless`
    * use case: persistent multi-AZ shared storage for containers
        * FSx For Lustre is not supported
        * [S3](#s3) cannot be mounted as a file system

## Fargate
* **AWS Fargate** - an ECS launch type with the following characteristics:
    * you do `not provision` the infrastructure (no EC2 instances to manage)
    * its all `serverless`
    * create `task` definitions
    * AWS runs ECS Tasks based on `CPU / RAM` you need
    * to scale just increase number of tasks

## ECR
* **Elastic Container Registry** - managed docker registry
    * `stores` and `manages` Docker `images` on AWS
    * `private` and `public` repositories on Amazon ECR Public Gallery (https://gallery.ecr.aws)
    * fully integrated with `ECS`
    * backed by Amazon `S3`
    * access controlled through `IAM Roles`
    * suports image vulnerability scanning, versioning, image tags, image lifecycle

``` bash
# command to get credentials to login ECR
aws ecr get-login-password --region {eu-west-1} | docker login --username AWS --password-stdin {aws_account_id}.dkr.ecr.{eu-west-1}.amazonaws.com

# docker commands
docker push {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
docker pull {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
```

&nbsp;
# Serverless
* **Serverless** - a new paradigm in which developers dont have to manage servers, since they are provisioned for them
    * originally called **FaaS**(Function as a Service) since only functions were deployed
    * was pioneered by AWS Lambda
    * now also includes databases, messaging, storage, etc. 
* serverless services in AWS include:
    * [Lambda](#lambda)
    * [DynamoDB](#dynamodb)
    * [AWS Cognito](#cognito)
    * [AWS API Gateway](#api-gateway)
    * [Amazon S3](#s3)
    * [AWS SNS & SQS](#sns)
    * AWS Kinesis Data Firehose
    * [Aurora Serverless](#aurora)
    * [Step functions](#step-functions)
    * [Fargate](#fargate)

## Lambda
* **AWS Lambda** - computing service that runs code in response to events and automatically provisions infrastructure required by that code
    * virtual functions
    * no servers to manage
    * short executions -> limited by time
    * run on demand
    * scaling is automated
    * event driven -> reactive type of service
    * benefits:
        * pay per request and compute time
        * very generous free-tier
        * integrated with whole suite of AWS services
        * integrated with many programming languages
        * easy monitoring through CloudWatch
        * easy to get more resources per function (up to 10GB of RAM)
        * increasing RAM improves CPU and network
    * compatible languages:
        * `Node.js`
        * `Python`
        * `Java`
        * `C# (.NET Core)`
        * `C# / Powershell`
        * `Golang`
        * `Ruby`
        * `Custom Runtime API` - community supported, like Rust
        * `Lambda Container Image` - must implement the Lambda Runtime API, ECS / Fargate preffered for running arbitrary Docker images
    * integrated services:
        * `API Gateway` - to create REST API that invokes Lambda functions
        * `Kinesis` - data transformations on the fly
        * `DynamoDB` - create triggers that invoke Lambda functions on specific database operations
        * `S3` - trigger Lambda functions on specific bucket operations
        * `CloudFront` - Lmabda at edge computing
        * `CloudWatch Events` - react to infrastructure specific events
        * `CloudWatch Logs` - streaming logs
        * `SNS` - react to notifications in SNS
        * `SQS` - process messages from SQS
        * `Cognito` - react to AWS user actions
    * pricing:
        * per calls: 1kk requests free, then $0.20 per 1kk requests
        * per duration: 400k GB/sec of compute time free, then $1.00 for 600k GB/sec in 1 ms increments
    * you can test your lambda within the AWS console
    * lambda settings:
        * `Code` - contains the code that is run, allows making changes and deploying them
            * information on the runtime
            * the **Lambda Handler** which is the function within the code that is invoked when the lambda is run
        * `Test` - allows running the lambda with a preset input and preset output and metrics(runtime, memory used)
        * `Monitor` - aggregated metrics presented on graphs, logs per invocation(stored in CloudWatch Logs), errors with stacktrace
            * to make this possible make sure the assigned IAM Role has:
                * `Allow: logs:CreateLogGroup`
                * `Allow: logs:CreateLogStream`
                * `Allow: logs:PutLogEvents`
        * `Configuration` - allows setting max memory(CPU scales with memory), timeout(max 15min),  execution role(IAM role that defines function permissions)
* **Synchronous Invocation** - direct invocation where you wait for the result
    * services that use synchronous invocation:
        * user invoked:
            * ELB (Application Load Balancer)
            * API Gateway
            * Cloudfront
            * Amazon S3 Batch
            * CLI
        * services invoked:
            * Cognito
            * Step Functions
            * Amazon Lex
            * Amazon Alexa
            * Amazon Kinsesis Data Firehose
            * SDK
    * error handling must be done on client side (retries, exponential backoff, etc...)
* **Asynchronous Invocations** - invocation based on events placed in an `Event Queue`
    * services that use asynchronous invocation:
        * S3
        * SNS
        * CloudWatch Events / EventBridge
        * CodeCommit
        * CodePipeline
        * CloudWatch Logs (log processing)
        * Amazon Simple Email Service
        * AWS CloudFormation
        * AWS Config
        * AWS IoT
        * AWS IoT Events
    * Lambda retries 2 times on error
        * 1 minute wait after 1st fail
        * 2 minutes wait after 2nd fail
    * Lambda function should be idempotent(in case of retries) - in case of retries the result is the same
    * retries result in duplicate logs entries in CloudWatch Logs
    * Can define a DLQ (dead-letter queue) - SNS or SQS - for failed processing
        * this requires IAM permissions
    * allows to speed up processing but running multiple lambdas in parallel

``` bash
# list lambda functions
aws lambda list-functions

# synchronous invocation
aws lambda invoke --function-name {name} --cli-binary-format raw-in-base64-out --payload '("some": "example payload)' --region eu-west-2 response.json

# asynchronous invocation
aws lambda invoke --function-name {name} --cli-binary-format raw-in-base64-out --payload '("some": "example payload)' --invocation-type Event --region eu-west-2 response.json
```

## API Gateway
* fully managed service for developers to easily create, publish, maintain, monitor, and secure APIs
* serverless and fully scalable
* supports REST and WebSocket API
* supports security / user authentication / API throttling / API keys / monitoring
* a proxy to other AWS services like Lambda


&nbsp;
# Batch
* fully managed batch processing at any scale
* efficiently run 100000s computing batch jobs
* a `batch` job is a job that has a start and an end
* load is accommodated by dynamically launching EC2 Instances or Spot Instances
* AWS Batch is responsible for provisioning resources for executing batch jobs
* you only submit / schedule batch jobs
* batch jobs are docker images that run on ECS
* good for cost optimization and less focus on infrastructure
* Batch vs Lambda
    * Lambda -> time limit, limited runtimes, limited temp disk space, serverless
    * Batch -> no time limit, any runtime that can be packaged in Docker, rely on EBS for disk space, managed service that relies on EC2


&nbsp;
# Lightsail
* provides easy to use virtual servers, storage, databases, networking at a low & predictable price
* use case: 
    * simple alternative to other AWS services like EC2 / RDS / ELB / EBS / Route 53
    * templates for simple web applications(LAMP, MEAN, Node.js, Nginx)
    * templates for websites (Joomla, Wordpress, Magento, Plesk)
    * dev / test environments
* great for ppl with little cloud experience
* allows setting notifications and monitoring
* HA but no auto-scaling and limited AWS integrations
* has completely different interface than AWS Console


&nbsp;
# Deployment & Managing Infrastructure
* Deployment services
    * **CloudFormation** - AWS only, IAC solution that works with almost all AWS services and can be repeated across Regions & Accounts
    * **Beanstalk** - AWS only, PaaS solution, limited to certain programming languages & Docker, that allows deploying code consistently with a known architecture
    * **CodeDeploy** - hybrid service for deploying & upgrading applications onto servers
    * **Systems Manager** - hybrid service that allows patch/configure/running commands at a scale
    * **OpsWorks** - managed Chef and Puppet on AWS
* Development services
    * **CodeCommit** - store code in private git repository 
    * **CodeBuild** - build & test code in AWS
    * **CodeDeploy** - deploy code onto servers
    * **CodePipeline** - orchestrate pipelines (code -> build -> test -> deploy)
    * **CodeArtifact** - store software packages / dependencies on AWS
    * **CodeStar** - unified view for CICD and code
    * **Cloud9** - Cloud IDE with collaboration feature
    * **AWS CDK** - define cloud infrastructure using a programming language

## CloudFormation
* **AWS CloudFormation** - an **IaC** solution that gives developers and businesses an easy way to automate creation, provisioning and management of AWS or third-party compute resources
    * a declarative way of outlining AWS Infrastructure for any resources
    * benefits:
        * no resources are manually created
        * code can be version controlled
        * changes to infrastructure are reviewed through code
        * cost:
            * CloudFromation in itself is free
            * stacks of resources are tagged which allows `easily identifying costs`
            * `estimate costs` of resources using the CloudFormatioin template
            * `savings strategy`: you can fe. automate deletion of templates at 5 PM and reacreate at 8 AM
        * productivity:
            * ability to destroy and re-create infrastructure on the fly
            * automatic generation of Diagram for your templates
            * declarative programming (no need to figure out ordering / orchestration)
        * `separation of concern` - create many stacks for many apps / layers:
            * VPC stacks
            * Network stacks
            * App stacks
    * lots of templates are available so DONT REINVENT THE WHEEL
    * supports almost all AWS resources
    * can use "custom resources" for unsupported resources
* **Infrastructure as Code** - code that can deploy / create / update / delete our infrastructure
* **How it works**
    1. templates have to be uploaded in S3 and referenced in CloudFormation
    1. to update we have to reupload a new version of the template (no editing)
    1. stacks are identified by name
    1. deleting a stack results in all resources created by it being deleted
* **Template deployment**
    * `Manual`
        * editing templates in the CLoudFormation Designer
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
    * **Tempalte helpers**
        * `References` linking resources in templates
        * `Functions` transform data within templates
    * templates are `YAML` or `JSON` files

## CDK
* **AWS Cloud Development Kit (CDK)** - an **IaC** solution that allows defining cloud infrastructure using a programming language
    * supports JavaScript/TypeScript, Python, Java and .NET
    * code is compiled into a CloudFormation template (JSON/YAML) using the CDK CLI
    * allows deploying infrastructure and application runtime code together
    * use cases: Lambda functions, Docker containers in ECS / EKS
    * benefits: type safety, reusability, familiar constructs, loops

## Beanstalk
* **AWS Elastic Beanstalk** - a managed orchestration service for deploying applications allong with many AWS services and features
    * Platform as a Service (**PaaS**) solution
    * developer problems on AWS include:
        * managing infrastructure
        * deploying code
        * configuring DB, load balancers and other services
        * scaling concerns
        * most web apps have the same architecture
        * just want to run code possibly consistently across different applications and environments
    * uses all popular AWS services such as EC2, ASG, ELB, RDS and more
    * managed so:
        * automatically handles capacity provisioning
        * load balancing
        * scaling
        * application health monitoring & responsiveness
        * instance configuration
        * performing deployment
    * focus on the code but still have full control over configuraiton of services
    * Elastic Beanstalk is free, but you pay for bundled services
    * creates a CloudFormation template to handle setting up infrastructure
* **Components**
    * **Application** - collection Elastic Beastalk components (env, versions, configurations,...)
    * **Application Version** - iteration of application code
    * **Environment** - collection of AWS resources running an application version 
        * only one version per environment
        * *Tiers*
            * `Single instance` - good for development
            * `Web Server Environment` - consists of ELB sending traffic to EC2 instances hosting web servers, controlled by ASG
            * `Worker Environment` - consists of SQS queue coupled with EC2 instances hosting workers, controlled by ASG
                * scales based on number of SQS messages
                * can push messages to SQS queue from a Web Server Tier
        * can create multiple environments
* **Process**
    1. Create Application
    1. Upload Version
    1. Launch Environment
    1. Manage Environments -> Upload Version
* **Supported Platforms**
    * Go
    * Java SE
    * Java with Tomcat
    * .NET Core on Linux
    * Node.js
    * PHP
    * Python
    * Ruby
    * Packer Builder
    * Single Container Docker
    * Multi-container Docker
    * Preconfigured Docker
    * if not supported you can write a custom platform (advanced)
* **Health Monitoring** - health agents are installed on each EC2 instance within Beanstalk
    * they push metrics to CloudWatch
    * Beanstalk checks for app health and publishes health events based on CloudWatch metrics


## CodeDeploy
* **AWS CodeDeploy** - managed service for deploying your code automatically
    * similar tools: Ansible, Terraform, Chef, Puppet
    * workes with EC2 instances, On-Premises Servers -> this makes it a **Hybrid service**
* **To make it work**
    * each EC2 instance or On-premise server to which you deploy MUST be running the `CodeDeploy Agent`
        * `CodeDeploy Agents` are continuously polling AWS CodeDeploy for work to do
        * if there is work to do the Application and `appspec.yml` is pulled
        * target environments run the deployment instructions in `appspec.yml`
        * agents reports of success/failure of the deployment 
    * `appspec.yml` is a specification for how code should be deployed that should be present in root directory of project
* **Primary components**
    * *Application* - a unique name that functions as a container (revision, deployment configuration, etc)
    * *Compute Platform* - target to which it is deployed like EC2, On-premise server, AWS Lambda, Amazon ECS 
    * *Deployment Configuration* - rules for success/failure
        * `EC2/On-premise` - specify the minimum number of healthy instances for the deployment
        * `AWS Lambda or Amazon ECS` - specify how traffic is routed to your updated versions
    * *Deployment Group* - group of tagged resources like EC2 instances (gradual deployment, or dev/test/prod)
    * *Deployment Type* - how the application is deployed to Deployment Groups
        * `In-place Deployment` - supports EC2/On-premises. For example `Hald At A Time` in-place deployment:
            1. Take down half the target EC2 instances
            1. Deploy to those that are taken down
            1. Take the other half down and start the previous hald
            1. Deploy to other half
        * `Blue/Green Deployment` - only supports EC2 instances, AWS Lambda, Amazon ECS. Example:
            1. Deploy to a new ASG
            1. If successful deploy reroute ALB to new ASG
    * *IAM Instance Profile* - give EC2 permissions to access artifacts in S3 or GitHub
    * *Application Revision* - combination of `application code` and `appspec.yml`
    * *Service Role* - an IAM Role for CodeDeploy to perform operations on AWS Services
    * *Target Revision* - the most recent revision you want to deploy to a Deployment Group
* **Deployment Configuration**
    * *Configurations*:
        * `One At A Time` - one EC2 instance at a time is stopped, if one fails then deployment stops
        * `Half At A Time` - half are stopped for deployment
        * `All At Once` - all are stopped for deployment, faster but downtime, good for dev
        * `Custom` - min. health host = 75%
    * *Failures*:
        * EC2 instances stay in "Failed" state
        * new deployments prioritize failed instances
        * to rollback:
            * redeploy old deployment
            * enable automated rollback for failures
    * *Deployment Groups*
        * set of tagged EC2 instances
        * directly to an ASG
        * mix of ASG / Tags to build deployment segments
        * customization in scripts with DEPLOYMENT_GOUP_NAME environment variable

## appspec.yml
* must be in root directory of project
* **files** - how to source and copy from S3 / GitHub to a filesystem
    * `source`
    * `destination`
* **hooks** - set of instructions to do to deploy the new version. Can check status of various hooks in CodeDeploy console. The order of hooks is:
    1. `ApplicationStop`
    1. `DownloadBundle`
    1. `BeforeInstall`
    1. `Install`
    1. `AfterInstall`
    1. `ApplicationStart`
    1. `ValidateService` -> run at the end to make sure the service is properly deployed

``` yml
version: 0.0
os: linux

files:
    - source: Config/config.txt
      destination: /webapps/Config
    - source: source
      destination: /webapps/myApp

hooks:
    BeforeInstall:
        - location: Scripts/UnzipResourceBundle.zip
        - location: Scripts/UnzipDataBundle.zip
    AfterInstall:
        - location: Scripts/RunResourceTests.sh
          timeout: 180
    ApplicationStart:
        - location: Scripts/RunFunctionalTests.sh
          timeout: 3600
    ValidateService:
        - location: Scripts/MonitorService.sh
          timeout: 3600
          runas: codedeployuser
```

## CodeCommit
* **AWS CodeCommit** - distributed git server
    * `version control` allows understanding various changes that happened to code over time
    * allows code roll back
    * benefits are:
        * collaborate with other developers
        * make sure the code is backed-up somewhere
        * make sure its fully viewable and auditable
    * why use:
        * `private` git repositories
        * `no size limit` on repositories
        * fully `managed`, `highly available`
        * code only in AWS Cloud account which increases `security` and `compliance`
        * secured through encryption and access control
        * integrated with Jenkins, AWS CodeBuild, and other CI tools
* **Security**
    * interact using git
    * authentication:
        * *SSH Keys* - configured SSH keys from IAM Console
        * *HTTPS* - with AWS CLI Credential helper or Git Credentials for IAM User
    * authorization
        * IAM policies to manage users/roles permission to repositories
    * encryption
        * repositories encrypted at rest using AWS KMS
        * encrypted in transit(only HTTPS or SSH access)
    * cross-account access
        * DO NOT share SSH keys or Git credentials
        * use IAM Role or AWS STS (AssumeRole API)

## CodeBuild
* **AWS CodeBuild** - tool for building our apps (compile, test, produce packages that are ready to be deployed)
    * *build instructions* - a series of instructions that are performed to build the target artifact. Defined in a `buildspec.yml` which needs to be in the root of the project
        * you can also define build instructions in Console but its not a best practice
    * build output logs can be stored in Amazon S3 & CloudWatch Logs
    * `CloudWatch Metrics` allow monitoring build statistics
    * `CloudWatch Events` allow detecting failed build and triggering notifications
    * `CloudWatch Alarms` allow notifying when "thresholds" for fails are important
    * *build projects* - can be defined either in CodePipeline or CodeBuild
    * supported environments:
        * Java
        * Ruby
        * Python
        * Go
        * Node.js
        * Android
        * .NET Core
        * PHP
        * Docker - extend any environments you like
    * CodeBuild runs in a `CodeBuild Container` which runs instructions from the `buildspec.yml`
    * a `CodeBuild Container` requires a Docker Image
    * you can store `reusable` build artifacts in an `S3 Bucket Cache`
* **Local Build** - can be run locally
    * for deep troubleshooting
    * requires Docker to run locally
    * leverage the `CodeBuild Agent`
    * https://docs.aws.amazon.com/codebuild/latest/userguide/use-codebuild-agent.html
* **Build inside VPC**
    * by default CodeBuild containers are launched outside of your VPC
    * cannot access resources in VPC
    * specify a VPC configuration with:
        * VPC ID
        * Subnet IDs
        * Security Group IDs
    * then build can access resources in VPC like RDS, ElastiCache, EC2, etc
* **Parameters** CodeBuild can pull environment variables from:
    * parameter store parameters
    * secrets manager secrets
* **Benefits**
    * fully managed / serverless
    * continuously scalable & highly available
    * secure
    * pay-as-you-go pricing (only pay for build time)

## buildspec.yml
* `builspec.yml` must be at the root of your code
* **env** - environment variables pulled from:
    * `variables` - plaintext variables
    * `parameter-store` - variables stored in [SSM Parameter Store](#ssm)
    * `secrets-manager` - variables stored in [AWS Secrets Manager](#secrets-manager)
* **phases** - specify commands to run in groups called phases
    * `install` - install dependencies
    * `pre_build` - final commands to execute before build
    * `build` - actual build commands
    * `post_build` - finishing touches (e.g., zip output)
* **artifacts** - what to upload to S3 (encrypted with KMS)
* **cache** - files to cache to S3 for future build speedup

``` yml
version: 0.2

env:
    variables:
        JAVA_HOME: "/usr/lib/jvm/java-8-openjdk-amd64"
    parameter-store:
        LOGIN_PASSWORD: /CodeBuild/dockerLoginPassword

phases:
    install:
        commands:
            - echo "Entered the install phase..."
            - apt-get update -y
            - apt-get install -y maven
    pre_build:
        commands:
            - echo "Entered the pre_build phase..."
            - docker login -u User -p $LOGIN_PASSWORD
    build:
        commands:
            - echo "Entered the build phase..."
            - echo "Build started on `date`"
            - mvn install
    post_build:
        commands:
            - echo "Entered the post_build phase..."
            - echo "Build completed on `date`"
artifacts:
    files:
        - target/messageUtil-1.0.jar

cache:
    paths:
        - "/root/.m2/**/*
```

## CodePipeline
* **AWS CodePipeline** - visual workflow tool for orchestrating CICD
    * a typical workflow involves services for the following stages:
        * *Source* - use CodeCommit, ECR, S3, Bitbucket, GitHub for a pipeline source
        * *Build* - integrate with CodeBuild, Jenkins, CloudBees, TeamCity or more to build your code
        * *Test* - integrate with CodeBuild, AWS Device Farm and 3rd party tools to test your software
        * *Deploy* - deploy to CodeDeploy, ElasticBeanstalk, CloudFormation, ECS, S3 and more
    * each stage can have sequential actions and/or parallel actions
    * manual approval can be defined at any stage
    * basis for CICD
* **Artifacts** - different software items created during the pipeline and stored in S3 Buckets
* **Troubleshooting**:
    * state changes are visible in console 
    * configure CloudWatch Events (Amazon EventBridge) for failed pipelines, cancelled stages
    * make sure pipeline has the appropriate `IAM Service Role` attached
    * if CodePipeline fails at any stage, the pipeline is stopped and you are informed in console
    * AWS CloudTrail can be used to audit AWS API calls
* **Benefits**:
    * fully managed
    * compatible with popular AWS services and 3rd party services
    * fast delivery & rapid updates


## CodeArtifact
* **AWS CodeArtifact** - tool to store, publish and share software packages
    * software packages depend on each other to be build(code dependencies)
    * **Artifact management** is storing and retrieving code dependencies
    * CodeArtifact makes setting up artifact management easier. It is:
        * secure
        * scalable
        * cost-effective
    * integrates with other dependency management tools like: `Maven`, `Gradle`, `npm`, `yarn`, `twine`, `pip`, `NuGet`
    * `developers` and `CodeBuild` can retrieve artifacts straight from `CodeArtifact`
    * artifacts live within your VPC
    * **Domains** are sets of repositories within CodeArtifact
    * when integrating with other artifact management tools CodeArtifact: 
        * works as a proxy enhancing security
        * dependencies are cached so they are available even if deleted from the source tool
* **Benefits**
    * simplicity
    * integration with popular dependency management tools
    * secure
    * scalable
    * cost-effective
    * easily retrieve dependencies by developers

## CodeStar
* **AWS CodeStar** - tool for managing software development activities in one place
    * quick start for setting up software development tools with best practices
    * integrates GitHub, CodeCommit, CodeBuild, CodeDeploy, CloudFormation, CodePipeline, CloudWatch and more
    * allows quickly creating CICD ready projects for EC2, Lambda, ElasticBeanstalk
    * supported languages: `C#`, `Go`, `HTML5`, `Java`, `Node.js`, `PHP`, `Python`, `Ruby`
    * has an `issue tracking` tool that integrates with `Jira` and `GitHub Issues`
    * integrates with `Cloud9` to obtain a web IDE (not in all regions)
    * one dashboard to view all components
    * free service, only pay for used services
    * limited customization in codestar, but can customize the tools in their dedicated dashboards

## Cloud9
* a cloud IDE (Integrated Development Environment) for writing, running and debugging code
* can be used within a web browser
* does not require additional setup
* allows code collaboration in real-time (pair programming) 

## SSM
* **AWS Systems Manager (SSM)** - helps manage EC2 and On-Premises systems at scale
    * *Hybrid Service* - allows managing both AWS and On-Premises resources
    * get operational insights about the state of your infrastructure
    * suite of 10+ products:
        * patching automation for enhanced compliance
        * run commands across an entire fleet of servers
        * store parameter configuration with the SSM Parameter Store
    * works with Windows and Linux OS
* **How it works**
    * install SSM agent on systems - default on Amazon Linux AMI / Ubunut AMI
    * SSM agent links to SSM and provides data
* debugging: if an instance cannot be controlled by SSM its usually an issue with the agent
* allows: running commands, pathcing and configuring
* **SSM Session Manager** - start SSH on EC2 and on-premises servers without SSH acces / bastion hosts / SSH keys
    * no port 22 needed
    * support for Linux / MacOS / Windows
    * send log data to S3 or CloudWatch Logs
    * **Managed Nodes** - EC2 instances and other servers configured to work with SSM Session Manager
* to connect with instances/servers you need to use EC2 Instance Connect / Session manager

## OpsWorks
* **AWS OpsWorks** is a managed Chef & Puppet, alternative to *AWS SSM*
* **Chef**, **Puppet** - tools for performing server configuration automatically, or repetitive actions
    * work great with EC2 & On-Premises VM
    * only allow provisioning standard AWS resources, like:
        * EC2 instances, Databases, Load Balancers, EBS volumes
* **Architecture**
    * *OpsWorksStacks* -> [*ELB Layer* -> [`ALB`, `OpsWorks Layers`], *Application Server Layer* -> [`EC2`, `OpsWorks Layer`], *Database Layer* -> [`Database Server(RDS)`, `OpsWorks Layers`]]
    * *Cookbook Repository* -> *Application Server Layer* <- *Applications* <- *App Repository*
* use case: if you use *Chef* and *Puppet* before moving to AWS and want to reuse templates


&nbsp;
# Leveraging Global Infrastructure
* a global application is one that is deployed in multiple geographies
* on AWS this could be *Regions* or *Edge Locatioins*
* benefits:
    * decreased latency
    * disaster recovery
    * attack protection
* https://infrastructure.aws - shows all regions, availability zones and edge locations available in the AWS Global Infrastructure
* AWS installed its own network cables for fast and reliable connection between regionis
* Services:
    * **Route 53** - global DNS, great for routing users to closest deployment and for DR strategies
    * **CloudFront** - global CDN, replicate part of application data in AWS Edge Locations and cache common requests
    * **S3 Transfer Acceleration** - accelerate global uploads/download into S3
    * **AWS Global Accelerator** - improve global application availability/performance using AWS global network
    * **AWS Outposts** - deploy outpost racks in your own Data Center to extend AWS services
    * **AWS WaveLength** - bring AWS services to the edge of 5G networks for ultra-low latency
    * **AWS Local Zones** - bring AWS resources closer to end users for latency-sensitive applications

## Route 53
* **Route 53** - a highly available, scalable, fully managed and Authoritative DNS and Domain Registrar
    * ability to check the health of resources
    * only AWS service which provides 100% availability SLA
    * *53* is a reference to traditional DNS port used by DNS services
    * a global service
* **Records** - define how you want to route traffic for a domain
    * each record contains:
        * *Domain/subdomain Name* - the domain or subdomain the rule is applied to
        * *Record Type* - a key that represents a parameter of the DNS 
            * `A` (must know) - maps a hostname to IPv4
            * `AAAA` (must know) - maps a hostname to IPv6
            * `CNAME` (must know) - maps a hostname to another hostname
                * target domain name must have an A or AAAA record
                * cammpt create CMAME for top node of a DNS namespace like `example.com` (Zone Apex )
            * `NS` (must know) - Name Servers for the Hosted Zone, they can respond to your DNS querries
                * controls how traffic is routed to domain
            * `CAA` - specify which Certification Authorities (CA) are authorized to deliver SSL certificates for your domain
            * `DS` - used to secure delegations
            * `MX` - indicates what domain email messages in accordance with SMTP are routed to
            * `NAPTR` - allows setting dynamic rules for how a website processes requests (useful for internet telecommunicatioin services)
            * `PTR` - a piece of information attached to an email to verify that sender matches ip address it claims to be. Known as *reverse DNS lookup*
            * `SOA` - *start of authority* record includes administrative information about your DNS zone
            * `TXT` - contains text information for sources outside of your domain, that can be used in various ways
            * `SPF` - contains list of all IP addresses that are permitted to send emails on behalf of your domain
            * `SRV` - a resource record which is used to identify computers hosting specific services. Used to locate domain controller for Active Directory
        * *Value*
        * *Routing Policy* - how Route 53 responds to values
        * *TTL* - amount of time record is cached
* **Hosted Zones** - a container for records that define how to route traffic to domain/subdomains
    * **Public Hosted Zones** - contain records that specify how to route internet traffic) public domain names
    * **Private Hosted Zones** - contain records the specify routing for traffic within VPC/s (private domain names)
    * cost in AWS is $0.50 per month per hosted zone
* **Routing Policies**
    * *Simple Routing Policy* - no health checks
    * *Weighted Routing Policy* - assign weights to host servers which determine the % of routed traffic that is redirected to each one. Allows health checks. Similiar to a load balancer
    * *Latency Routing Policy* - routes traffic to the server with lowest latency
    * *Failover Routing Policy* - configure a primary and failover host, in case of failed healthcheck on primary traffic is routed to the failover

## CloudFront
* **AWS CloudFront** - CDN
    * benefits: 
        * improves read performance by caching content at edge
        * DDoS protection
        * secure through integration with `Shield` and `AWS Web Application Firewall`
    * made of 216 Points of Presence globally (edge locations)
    * global service
* **Origins**
    * *S3 Bucket*
        * distributing files and caching them at the edge
        * enhanced security through CloudFront **Origin Access Control (OAC)**
        * OAC is replacing Origin Access Identity (OAI)
        * CloudFront can be used as an ingress (to upload files to S3)
        * the connection between the origin and edge location is private and managed by OAC and bucket policies
    * *Custom Origin (HTTP)*
        * ALB
        * EC2 Instance
        * S3 website
        * Any HTTP backend you want
* **CloudFront vs Cross Region Replication**
    * CloudFront
        * Global Edge network
        * files are cached for a TTL
        * great for static content that must be available everywhere
    * S3 Cross Region Replication
        * must be setup for each region you want replication to happen
        * files are updated in near real-time
        * read only
        * great for dynamic content that needs to be available at low-latency in few regions

## S3 Transfer Accelerator
* enables increased transfer speed between regions by transferring a file to an AWS edge location which then forwards it to the target S3 bucket
* file in USA -> [public network] -> Edge location in USA -> [private network] -> S3 Bucket Australia
* test at: https://s3-accelerate-speedtest.s3-accelerate.amazonaws.com/en/accelerate-speed-comparsion.html

## AWS Global Accelerator
* enables leveraging the AWS internal network to optimize the route to your application (60% improvement)
* improves global application *availability* and *performance* using the AWS global network
* allows client to connect to edge locations which then connect with the target host using the AWS internal network
* 2 **Anycast IP** are created for your app which are then used by the Edge Locations to identify your app location
* **AWS Global Accelerator vs CLoudFront**
    * both services integrate with AWS Shield for DDoS protection
    * CloudFront
        * a CDN
        * improves performance for cacheable content
        * content is *served at the edge*
    * Global Accelerator
        * no caching, *proxying packets* at the edge to applications running in one or more AWS Regions
        * improves performance for a wide range of applications over TCP / UDDP
        * good for:
            * HTTP traffic that requires a static IP
            * HTTP traffic that requires deterministic, fast regional failover 
* test at: https://speedtest.globalaccelerator.aws/#/

## AWS Outposts
* **AWS Outposts** - "server racks" that offer same AWS infrastructure,s ervices, APIs & tools to build on-premises applications just like in the cloud
    * AWS will setup and manage **Outpost Racks** within on-premise infrastructure which allow using AWS services on-premise
    * users are responsible for Outpose Rack physical security
* **Hybrid Cloud** - businesses that keep on-premise and cloud infrastructure alongside eachother, creating two ways of dealing with IT systems
* **Benefits**
    * low-latenc access to on-premises systems
    * local data processing
    * data residency
    * easier migration from on-premises to the cloud
    * full managed services
* available services on Outposts:
    * EC2
    * EBS
    * S3
    * EKS
    * ECS
    * RDS
    * EMR 

## AWS WaveLength
* **AWS WaveLength** - enables bringing some AWS services to the edge of 5G networks
    * services: EC2, EBS, VPC, more
    * enables ultra-low latency applications through 5G networks
    * traffic doesn't leave CSP (communication service provider)
    * if traffic to AWS required a high-bandwidth / secure connection the the parent AWS Region is available
    * no additional charges or service agreements
    * use cases:
        * smart cities
        * ML-assisted diagnostics
        * connected vehicles
        * interactive LiveVideo Streams
        * AR/VR
        * Real-time Gaming
* **WaveLength Zones** - infrastructure deployments embedded within the telecommunications providers datacenters at the edge of the 5G networks
* not available in all regions

## AWS Local Zones
* **AWS Local Zones** - an extension of an AWS Region that allows placing services closer to end users for latency-sensitive applications
    * allows extending a VPC to more locatioins -> can create subnets specific for a Local Zone
    * compatible with many AWS services like: EC2, RDS, ECS, EBS, ElastiCache, Direct Connect and more
* Example: Region [ N. Virginia ] -> Local Zones [Boston, Chicago, Dallas, Houston, Miami]
* not available in all regions

## Global Applications Architecture
* **Single Region, Single AZ** -> deployed to a single region and az which handles all traffic
    * no HA, Global latency, Low Difficulty
* **Single Region, Multi AZ** -> deployed to single region and multi-az and traffic is routed across btoh AZ's
    * HA, Global latency, Medium Difficulty
* **Multi Region, Active-Passive** -> services replicated across many regions, one allows for both reads and writes, the other only reads
    * HA, Improved global read latency, Global write latency, Higher Difficulty
* **Multi Region, Active-Active** -> services replicated across many regions, all allows both reads and writes
    * * HA, Improved global latency, Highest Difficulty


&nbsp;
# Integrations
* applications need to communicate between eachother and this can happen in two flavors:
    * **Synchronous** - operations are coupled, one happens write after another
        * cons: problem handling spikes of traffic
    * **Asynchronous** - or event based, operations are decoupled where some sort of proxy handles communication between services
* **Summary**
    * **SQS** - queue model for asynchronous architecture, multiple procedures, up to 14 day retention, queue is shared by multiple consumers, messages are deleted once consumed, used to decouple applications
    * **SNS** - pub/sub model for asynchronous architecture, notification service, no message retention, nmessages are sent to all topic subscribers
    * **Kinesis** - real-time data streaming model with persistence and analysis
    * **Amazon MQ** - managed message broker for ActiveMQ and RabbitMQ

## SQS
* **Simple Queue Service (SQS)** - a fully managed, serverless service for creating queues
    * cloud native
    * oldest AWS offering
    * fully managed service for decoupling applications
    * scales from 1 message per second to 10000s per second
    * default retention: 4 days, maximum 14 days
    * no limit to number of queued messages
    * messages are deleted once consumed
    * low latency - <10ms on publish and receive
    * consumers share the work to read messages & scale horizontally
* **Queue** - a mechanism that receives messages from *Producers*, queues them and allows *Consumers* to poll for messages, consume them and delete them from the queue

## Kinesis
* **AWS Kinesis** - managed service to collect, process, and analyze real-time streaming data at any scale
    * used mostly for big data - like Kafka
* **Kinesis Data Streams** - low latency streaming to ingest data at scale from 100000s sources
* **Kinesis Data Firehose** - load streams into S3, Redshift, ElasticSearch, etc.
* **Kinesis Data Analytics** - perform real-time analytics on streams using SQL
* **Kinesis Video Streams** -  monitor real-time video streams for analytics or ML
* Data Source -> Streams > Analytics > Firehose

## SNS
* **Simple Notification Service (SNS)** - serverless pub/sub solution service for creating topics
    * cloud native
    * **Event Publishers** - send messages to one SNS topic
    * **Event Subscribers** - no limit to how many can listen to an SNS topic notifications
        * each subscriber will get all the messages in a topic
        * up to 12 500 000 subscriptions per topic
        subscribers can be: SQS, Lambda, Kinesis Data Firehose, Emails, SMS / Mobile Notifications, HTTP(S) Enpoints
    * soft limit of 100 000 topics

## Amazon MQ
* **Amazon MQ** - managed message broker service for `RabbitMQ` and `ActiveMQ`
    * good for:
        * traditional applications that use open protocols such as: MQTT, AMQP, STOMP, Openwire, WSS
        * migrating to cloud - instead of re-engineering the application SQS/SNS use Amazon MQ
    * doesnt scale as much as SQS / SNS
    * runs on server
    * can run in Multi-AZ with failover
    * has both queue and topic features

&nbsp;
# Monitoring
* get information of performance of cloud infrastructure
* services:
    * **CloudWatch** - metrics, alarms, logs, events to monitor/store/react to infrastructure and application performance data
    * **CloudTrail** - audit API calls amde within AWS account and automatically analyze `CloudTrail Events` using `CloudTrail Insights`
    * **Xray** - trace requests made within distributed applicatioins
    * **CodeGuru** - automated code reviews and dynamic application performance recommendations
    * **AWS Health Dashboard** - `Service Health Dashboard` to view status of all AWS Services and `Personal Health Dashboard` to view events that impact your infrastructure


## CloudWatch
* **AWS CloudWatch** - a monitoring and management service that provides insights on AWS, hybrid, on-premise infrastructure and resources. Provides:
    * `Metrics` - collect and track key metrics
        * a Metric is a variable to monitor
        * are provided for every service in AWS
        * have timestamps
        * can create a CloudWatch dashboard for Metrics
        * examples:
            * `EC2` - CPU Utilizations, Status Check, Network, by default every 5 minutes, option for details metrics(every 1min)
            * `EBS volumes` - disk read/writes
            * `S3 buckets` - BucketSizeBytes, NumberOfObjects, AllRequests
            * `Billing` - total estimated charge (only in us-east-1)
            * `Service Limits` - how much a service API has been used
            * `Custom metrics`
    * `Logs` - collect, monitor, analyze, store log files
        * can collect logs from: Elastic Beanstalk, ECS, AWS Lambda, CloutTrail, **CloudWatch Logs Agents**(EC2 / on-premise), Route 53
        * enables real-time monitoring
        * adjustable log retention
        * **CloudWatch Logs Agents** are a hybrid service
    * `Events` - send notifications when certain events happen in your AWS -> replaced by [EventBridge](#eventbridge)
    * `Alarms`- react in real-time to metrics and trigger notifications(events)
        * `Auto Scaling` - increase or decrease EC2 instances "desired" count
        * `EC2 Actions` - stop, terminate, reboot, recover an EC2 instance
        * `SNS notifications` - send a notification into an SNS topic
        * various options for triggering alarms
        * alarms have statuses such as `OK`, `INSUFFICIENT_DATA` and `ALARM`
* **Why is monitoring important**
    * `application latency`: is it increasing over time?
    * `application outages`: customer experience should never be degraded
    * `troubleshooting` and `remediation`
    * prevent issues before they happen
    * enhance `performance` and `cost`
    * `trends` - scaling patterns
    * learning how your system works in real-time and improving it

## EventBridge
* service for scheduling jobs that replaces CloudWatch Events
    * events can perform a wide variety of tasks like triggering lambda or publishing to SQS/SNS
    * events can be triggered both by AWS Services and AWS SaaS Partners like zendesk or datadog
    * creating a custom event bus that accepts events from custom apps is also possible
    * **Schema Registry** - define models(schema) for events
    * archive events(all/filter) sent to an event bus(indefinitely or set period)
* **Event Types**
    * *Schedule* - cron-like scheduled scripts
    * *Event Pattern* - event rules to react to a service doing something


## CloudTrail
* **AWS CloudTrail** - service that enables auditing, security monitoring, operational troubleshooting by tracking user activity and API usage
    * provides:
        * `governance`, `compliance` and `audit` for AWS Account
        * is enabled by default
        * get history of events / API calls made with your AWS Account:
            * Console
            * SDK
            * CLI
            * AWS Services
        * put logs from CloudTrail into CloudWatch Logs or S3
        * trails can be applied to all regions(by default) or a single region
        * if a resource is deleted look into CloudTrails
        * *CloudTrail Insights** which provide an automated analysis of your CloudTrail Events
* **CloudTrails Events**
    * *Management Events* - operations performed on resources in your AWS account
        * examples: configuring security, rules for routing data, logging setup
        * by default Trails are configured to log management events
        * types:
            * `Read Events` - events that don't modify resources
            * `Write Events` - events that modify resources
    * *Data Events*
        * examples: S3 object level activity, AWS Lambda function execution activity
        * by default data events are not logged(high volume)
    * *Insights Events* - detect unusual activity in your account
        * requires enabling and is payed
        * examples:
            * inaccurate resource provisioning
            * hitting service limits
            * bursts of AWS IAM actions
            * gaps in periodic maintenance activity
        * analyzes normal management events to create a baseline
        * after analysis continuously analyzes WRITE events to detect unusual patterns
        * `Insights` can be visible in `CloudTrail Console`, dumped to S3 Buckets or create an EventBridge event
    * by default 90 day event retention in CloudTrail
    * to keep events for longer periods: Log to S3 and use Athena to analyze them


## X-Ray
* **AWS X-Ray** - service for analyzing and debugging distributed applications
    * provides:
        * troubleshooting application performance(bottlenecks) and errors
        * distributed tracing of microservices
        * understand dependencies in microservice architecture
        * pinpoint service issues
        * find errors and exceptions
        * review request behavior
            * are we meeting SLA?
            * where am i throttled?
            * identify users that are impacted
        * visual analysis of our applications
    * compatibility:
        * [AWS Lambda](#lambda)
        * [Elastic Beanstalk](#elastic-beanstalk)
        * [ECS](#ecs)
        * [ELB](#elb)
        * [API Gateway](#api-gateway)
        * [EC2 Instances](#ec2)
        * on-premise servers
    * security:
        * IAM for authorization
        * KMS for encryption at rest
    * enabling:
        * code is written in `Java`, `Python`, `Go`, `Node.js` or `.NET` and must import `AWS X-Ray SDK`
            * requires little code modification to import to SDK
            * the application SDK will then capture:
                * calls to AWS services
                * HTTP / HTTPS requests
                * database calls (MySQL, PostgreSQL, DynamoDB)
                * queue calls (SQS)
        * install the `X-Ray daemon` or enable `X-Ray AWS Integration`
            * the daemon is a low level UDP packet interceptor 
            * [AWS Lambda](#lambda) and other AWS services run the X-Ray daemon by default (except EC2 instance)
            * each application must have `IAM rights` to write data to X-Ray
* **How it works** - leverages `tracing` which is an e2e way to follow requests. Each component dealing with the request adds its own `trace`
    * a trace is made of `segments` and `suub-segments`
    * `annotations` can be added to traces to provide extra information
    * ability to trace:
        * every request
        * sample request - like a % or rate per minute
    * if X-Ray is properly configured it:
        * collect data from all configured services
        * a `Service Map` is computed from all the segments and traces
        * a `Graphical` representation is rendered making it easy to troubleshoot even for non-technical people 
* **Troubleshooting**
    * `EC2`
        * ensure instance has proper IAM roles
        * ensure instance is running the X-Ray Daemon
    * `Lambda`
        * ensure it has IAM execution role with proper policy (`AWSX-RayWriteOnlyAccess)
        * ensure the X-Ray is imported in the code

## CodeGuru
* **AWS CodeGuru** - an ML-poowered service for automated code reviews and application performance recommendations
    * *CodeGuru Reviewer* - automated code reviews for static code analysis (development)
        * views commits
        * identify critical issues, security vulnerabilities, hard-to-find bugs
        * examples: coding best practices, resource leaks, security detection, input validation
        * uses ML and automated reasoning
        * analyzed millions of code reviews on 1000s of open-source and Amazon repositories
        * support Java and Python
        * integrates with GitHub, BitBucket, AWS CodeCommit
    * *CodeGuru Profiler* - visibility/recommendations about application performance during runtime (production)
        * example: identify if your application is consuming excessive CPU capacity on a logging routing
        * features:
            * identify and remove code inefficiencies
            * improve application performance (e.g., reduce CPU utilization)
            * decrease compute costs
            * provides heap summary (identify which objects using up memory)
            * anomaly detection
        * supports applications running on AWS or on-premise
        * minimal overhead on application

## Dashboards
* **AWS Service History** - shows health of all services on all regions, with historical information for each day
    * general information on AWS Services, not related to your account
    * RSS feed available
    * previously called AWS Service Health Dashboard
* **AWS Health Dashboard** - provides alerts and remediation guidance when AWS is experiencing events that may impact you
    * previously called AWS Personal Health Dashboard
    * information on performance/availability of AWS Services related to your Account
    * displays relevant and timely information, proactive notifications to help plan scheduled activities
    * allows aggreagting data from an entire AWS Organization
    * Global Service
    * show how AWS outages impact you directly


&nbsp;
# VPC
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
        * can be stored in [S3](#s3) or [CloudWatch](#cloudwatch) logs
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
    * **Transit Gateway** - a service that creates a transitive peering connection between thousands of VPC and on-premises networks
        * `hub-and-spoke (star)` architecture - each network is connected through the AWS Transit Gateway (star like architecture diagram with Transit Gateway in the middle)
        * facilitates managing complicated network topology
        * all configuration like, VPC Peering, Direct Connect, Site to Site VPN is done with the Transit Gateway isntead of between specific network components
        * works with: Direct Connect Gateway, VPN connections
* a typical **3-tier architecture** would include:
    * `Public Subnet` - that manages traffic to and from end users through for example an [ELB](#elb)
    * `Private Subnet` - that manages computing requests in for example [EC2](#ec2) instances within an ASG
    * `Data Subnet` - a private subnet that contains any data used by the instances like session and cached data in an [ElastiCache](#elasticache) and read and write data available in an [RDS](#rds)
    * **LAMP** stack on EC2 would look like:
        * **L** - Linux - OS for EC2 instances
        * **A** - Apache - web server that run on Linux (EC2)
        * **M** - MySQL - database on RDS
        * **P** - PHP - application logic running on EC2
        * can add [Elasticache](#elasticache) for caching
        * can attach [EBS](#ebs) for storing local application data & software: EBS drive (root)
    * **Wordpress** on AWS
        * `Loadbalancer Tier` - images are sent through ELB to the application tier after resolving DNS queries through [Route 53](#route-53)
        * `Application Tier` - the application tier computes the images
            * the images are stored on a shared [EFS](#efs) to which communication is done over an ENI for each EC2 instance
        * a full WordPress on AWS example visible on https://aws.amazon.com/blogs/architecture/wordpress-best-practices-on-aws/


&nbsp;
# Security & Compliance
* `Layer 4` -> TCP
* `Layer 7` -> HTTP(s)
* **Summary**
    * [Shared Responsibility Model](#aws-shared-responsiblity)
    * [Shield](#waf-&-shield) - DDoS Protection + 24/7 support for advanced shield
    * [WAF](#waf-&-shield) - firewall to filter incoming requests based on rules
    * [KMS](#kms--cloudhsm) - encryption keys managed by AWS
    * [CloudHSM](#kms--cloudhsm) - hardware encryption by AWS, keys managed by user
    * [ACM](#aws-certificate-manager-acm) - provision/manage/deploy SSL/TLS certs
    * [Artifact](#artifact) - access to compliance reports
    * [GuardDuty](#guardduty) - find malicious behavior with VPC/DNS/CloudTrail Logs
    * [Inspector](#inspector) - find vulnerabilities in EC2 instances with an agent installed
    * [Config](#config) - track config changes and compliance
    * [Macie](#macie) - find sensitive data in S3 buckets
    * [CloudTrail](#cloudtrail) - track API calls made by users within account
    * [AWS Security Hub](#security-hub) - gather sec finding from multiple account
    * [Amazon Detective](#amazon-detective) - find root cause of security issues and suspicious behaviors
    * [AWS Abuse](#aws-abuse) - report AWS resources used for abusive/illegal activity
    * [Root User Privileges](#root-user-privileges) - most important are change account settings, delete aws account, change/cancel support plan, sell reserved instances in AWS Marketplace

## WAF & Shield
* **AWS Shield** - comes in two flavors, **Standard** protects againast DDOS for website and applications for all customers at no additional costs and **Advanced** gives premium DDOS protection
    * **AWS Shield Standard**
        * free service
        * activated for every AWS customer
        * provides protection from attacks such as `SYN/UDP Floods`, `Reflection attack` and other `Layer 3/4 attacks`
    * **AWS Shield Advanced**
        * optional DDoS mitigation service (3 000 $ per month per organization)
        * protect against more sophisticated attack on `EC2`, `ELB`, `CloudFront`, `AWS Global Accelerator`, `Route 53`
        * 24/7 access to AWS DDoS response team (`DRP`)
        * protect against higher fees during usage spikes due to DDoS
* **AWS WAF** - the Web Application Firewall allows filtering specific requests based on rules
    * protects from common web exploits (`Layer 7`)
    * deploy to ALB, API Gateway, CloudFront
    * define `Web ACL (Web Access Control List)`
        * rules can include `IP addresses`, `HTTP headers`, `HTTP body` or `URI strings` 
        * protects from common attacks like SQL Injection or Cross-Site Scripting (XSS)
        * size constraints (make sure requests arent too big)
        * geo-match (block countries)
        * rate based rules (count occurrences of events) - for DDoS protection
* **CloudFront and Route 53** - protect through availability protection using global edge network, combined with *AWS Shield* provides attach mitigation at the edge
* leverage AWS Auto Scaling to scale in case of overload
* **Architecture for DDoS Protection** -> users -> `AWS Shield([Route 53])` -> `AWS Shield([CloudFront Distribution])` -- `AWS WAF` -> `VPC`(`Public Subnets`(`Security Group`(`AWS Shield`[ALB])) -> `Private Subnets`(`Security Group`[ASG]))

## Penetration Testing
* **Penetration Testing** - attacking own infrastructure to test security
* customers *ARE ALLOWED* to perform pentest for the following services:
    * EC2
    * NAT Gateways
    * ELB
    * RDS
    * CloudFront
    * Aurora
    * API Gateways
    * Lambda
    * Lambda Edge Functions
    * Lightsail resources
    * Elastic Beanstalk environments
* customer *ARE NOT ALLOWED**
    * `DNS Zone` walking via Amazon Route 53 Hosted Zones
    * `DoS` (Denial of Service), `DDoS`,`Simulated DoS`, `Simulated DDoS`
    * `Port flooding`
    * `Protocol flooding`
    * `Request flooding` (login request flooding, API request flooding)
    * these would look like real attacks and would result in counter-measures by AWS employees

## KMS & CloudHSM
* **Key Management Service (KMS)** -> AWS manages encryption keys, while user decides who/what has access to them
    * encryption opt-in:
        * EBS volumes
        * RDS database
        * S3 buckets
        * Redshift database
        * EFS drives
    * encrypted automatically:
        * CloudTrail logs
        * S3 Glacier
        * Storage Gateway
* **CloudHSM** -> AWS provisions encryption `hardware`, by providing dedicated hardware (HSM - Hardware Security Module)
    * you manage your own encryption keys
    * HSM is tamper resistant
    * comopliant with `FIPS 140-2 Level 3` security standard
    * the `AWS CloudHSM Service` communicates with an `AWS CloudHSM Client` through SSL to manage keys securely
* **Customer Master Keys (CMK)** - various kinds of encryption keys available in AWS:
    * *Customer Managed CMK* -> create/manage/used by client and can be enabled/disabled, define rotation policy, bring own key
    * *AWS Managed CMK* -> created/managed/used by AWS on the customer's behalf, only used by AWS services
        * form: `aws/s3`, `aws/ebs`, `aws/redshift`
    * *AWS Owned CMK* -> collection of CMKs that an AWS service owns and manages for multiple accounts
        * aws can use to protect resources
        * customer does not have access or any type of control over these keys
    * *CloudHSM Keys (custom keystore)* -> keys generated from own CloudHSM hardware device
        * cryptographic operations happen within the CloudHSM cluster
* **Encryption types**
    * *Data at rest* -> data stored on a device
        * EFS, RDS, S3 Glacier Deep Archive
    * *Data in transit* (or in motion) -> data that is being transferred on the `network` from a source to a target
        * on-premises -> AWS, EC2 -> DynamoDB
    * ideally we want to encrypt data in both states

## AWS Certificate Manager (ACM)
* service for easily provisioning/managing/deploying SSL/TLS certificates
    * used to provide in-flight encryption for website HTTPs endpoints
    * supoorts public and private TLS certs
    * free of charge for public TLS certs
    * automatic certificate renewal
    * integrates with other services (loads the certificate):
        * ELB
        * CloudForm Distributions
        * APIs on API Gateway

## Secrets Manager
* services store secrets used across AWS services
    * capability to force rotation of secrets every X days
    * automatic generation of secrets on rotation (uses Lambda)
    * integration with RDS (MySQL, PostgreSQL, Aurora)
    * secrets encrypted in KMS
    * mostly meant for RDS integration

## Artifact
* **Artifact** - portal that provides customers on-demand access to AWS compliance documentation and AWS agreements
    * *Artifact Reports* - download AWS security/compliance documents from third-party auditors
        * AWS ISO certifications
        * Payment Card Industry (PCI)
        * System and Organization Control (SOC)
    * *Artifact Agreements* - review/accept/track status of AWS agreements
        * Business Associate Addendum (BAA)
        * Health Insurance Portability and Accountability Act (HIPAA)
        * works for individual account or organization
    * used to support internal audit or compliance
    * global service


## GuardDuty
* **AWS GuardDuty** - intelligent threat discovery to protect AWS Account 
    * uses ML, anomaly detection, 3rd party data
    * 30 day trial
    * enabling is only one click
    * looks at:
        * `CloudTrail Events Logs` - unusual API calls, unauthorized deployments
        * `VPC Flow Logs` - unusual traffic / ip address
        * `DNS Logs` - compromised EC2 instances sending encoded data within DNS queries
        * `Kubernetes Audit Logs` - suspicious activites / potential EKS cluster compromises
    * can setup EventBridge rules to be notified in case of findings - target Lambda/SNS
    * can protect against CryptoCurrency attacks (dedicated "finding" for it)

## Inspector
* **AWS Inspector** - service for running automated security assessments
    * works on:
        * `EC2 Instances` - leverages the AWS SSM agent to analyze against *unintended network accessibility* and analyzes the running OS for *vulnerabilities*
        * `ECR container images` - assesses vulnerabilities as containers are pushed
        * `Lambda Functions` - software vulnerabilities, package deps, works when deployed
    * reporting & integration with [AWS Security Hub](#security-hub)
    * can send finding to AWS EventBridge
    * evaluates only:
        * running EC2, Lambda Functions, Container Images
        * when needed
    * looks at a database of vulnerabilities (EC2, ECR, Lambda) -> CVE``
    * network reachability (EC2)
    * `risk score` is associated with all vulnerabilities for prioritization

## Config
* **AWS Config** - service that records configurations and changes over time to help auditing compliance of your AWS resources
    * provides a list of all changes that can be stored in S3, analyzed by Athena
    * questions solved by Config:
        * unrestricted SSH access to SGs
        * do buckets have public access
        * how ALB config changed over time
    * receive alerts for changes -> SNS notifications
    * per region service
    * can combine logs from various regions in a single S3 bucket
    * provides a *Configuration* timeline and *Compliance* timeline to easily visualize what changes where made at what point in time and how/when that effected compliance
    * tags resources as compliant/non-compliant

## Macie
* **AWS Macie** - fully managed data security/privacy service that utilizes ML/pattern matching to discover and protect your sensitive data in AWS
    * alerts about sensitive data like **Personally Identifiable Information (PII)**
    * example flow: [S3 Bucket] --[analyze]--> [Macie] --[notify]--> [AWS EventBridge] --> [integrations]
    * one click to enable

## Security Hub
* **AWS Security Hub** - central security tool to manage security over several AWS account and automate security checks
    * provides automated dashboards to quickly provide information on security checks
    * aggregates reports in predefined or personal format from multiple AWS Services & AWS partner tools:
        * GuardDuty
        * Inspector
        * Macie
        * IAM Access Analyzer
        * AWS Systems Manager
        * AWS Firewall Manager
        * AWS Partner Network Solutions
    * must enable **AWS Config Service** to enable AWS Security Hub
    * can investigate findings in [Amazon Detective](#amazon-detective)
    * payed service

## Amazon Detective
* **Amazon Detective** - analyze, investigate, quickly identify root causes of security issues or suspicious activities (using ML and graphs)
    * GuardDuty, Macie, Security Hub only help identify potential security findings/issues
    * security finding can take a lot of time to analyze and are a complex process
    * automatically collects and processes events from VPC Flow Logs, CloudTrail, GuardDuty
    * creates a unified view for all processed events
    * provides visualizations with details

## AWS Abuse
* **AWS Abuse** - allows reporting suspected AWS resources used for abusive/illegal activity
    * abusive/prohibited behavior include:
        * `Spam` - undesired emails from AWS resources
        * `Port scanning` - sending packets to ports to discover unsecure ones
        * `DDoS`
        * `Intrusion attempts` - logging into your resources
        * `Hosting objectionable or copyrighted content`
        * `Distributing malware`

## Root User Privileges
* Root User -> Account Owner
* has complete access to all AWS services and resources
* BEST PRACTICE: Lock away your AWS account root user access keys
* BEST PRACTICE: do not use root user for everyday tasks
* actions that can only be performed by root user:
    * `change account settings`(name, email address, root user pass, root user access keys)
    * view certain tax invoices
    * `close AWS account`
    * restore IAM user permissions
    * `change or cancel AWS Support plan`
    * `register as seller in Reserved Instance Marketplace`
    * configure S3 Bucket to enable MFA
    * edit/delete S3 Bucket policy that includes invalid VPC ID / VPC Endpoint ID
    * sign up for GovCloud


&nbsp;
# Machine Learning
* **Rekognition** - face detection, labeling, celeb recognition
* **Transcribe** - speech -> text
* **Polly** - text -> speech
* **Translate** - translate text in different languages
* **Lex** - build chat bots
* **Connect** - cloud contact center
* **Comprehend** - NLP
* **SageMaker** - fully featured ML service for DEVS/DS
* **Forecast** - AI-powered forecasting engine
* **Kendra** - ML-powered search engine
* **Personalize** - real-time personalized recommendations
* **Textract** - detect and extract text data from various documents

## Rekognition
* **AWS Rekognition** - recognize objects, people, text, scenes in images and videos using ML
    * facial analysis/facial search
    * create database of familiar faces or compare against known faces
    * use cases:
        * people count
        * user verification
        * labeling
        * content moderation
        * text detection
        * face detection and analysis (gender, age, emotions)
        * face search and verification
        * celebrity recognition
        * pathing (ex. sports game analysis)
        * content moderation

## Transcribe
* **AWS Transcribe** - automatically convert **speech -> text**
    * uses deep learning process called **Atuomatic Speech Recognition (ASR)** to convert speeach to text quickly/accurately
    * use **Redaction** to automatically remove **Personal Identification Information (PII)**
    * supports **Automatic Language Identification** for multi-lingual audio
    * use cases:
        * customer service calls
        * CC and subtitling
        * generate metadata for media assets

## Polly
* **AWS Polly** - automatically convert **text -> speech** using deep learning to create applications that talk

## Translate
* **AWS Translate** - natural and accurate language translation
    * localize content for international users
    * easily translate large volumes of text efficiently

## Lex + Connect
* **AWS Lex** - technology that powers Alexa
    * comprises of:
        * ASR to convert speeach -> text
        * Natural Language Understanding to recognize the intent of text/callers
        * helps build chatbots, call center bots
* **AWS Connect** - cloud based virtual contact center
    * enables:
        * receive calls
        * create contact flows
    * integrates with other CRM systems or AWS
    * no upfront payments -> 80% cheaper than traditional contact center solutions
* typical flow:
    1. Phone Call to Schedule Appointment
    1. Call made to number defined in *Amazon Connect*
    1. *Lex* streams information in phone call to understand intent
    1. This invokes a *Lambda* function that for example schedules a meeting in a CRM

## Comprehend
* **AWS Comprehend** - fully managed and serverless service for performing **Natural Language Processing (NLP)**
    * uses ML to find insights and relationships in text such as:
        * language
        * key phrases, place, poeple, brands, events
        * positive or negative a text is
        * analyzes text using tokenization and parts of speech
        * automatically organize text files by topic
    * takes unstructured data and gives it structure
    * use cases:
        * understand customer interaction(like emails)
        * group articles by topic

## SageMaker
* **AWS SageMaker** - fully managed service for Devs/DS to build ML models
    * simplifies ML processes and provisioning of AWS resources required to realize the processes
    * typical flow:
        1. `Acquire` Historical Data
        1. `Label` the Historical Data
        1. `Build` a ML Model
        1. `Train`/`Tune` the Model by feeding it more data
        1. `Apply model` - feed it with out-of-sample data to see how accurate a predicition is

## Forecast
* **AWS Forecast** - fully managed service for that uses ML to deliver highly accurate forcasts
    * ex. predict future sales of a raincoat
    * 50% more accurate then looking at data itself
    * reduce forcasting time from months to hours
    * use cases:
        * Resource Planning
        * Financial Planning
        * Product Demand Planning
    * typical flow:
        1. Get historical TS data
        1. upload to S3
        1. process with Forecast
        1. produce a Forecasting Model
        1. use model to predict future sales

## Kendra
* **Amazon Kendra** - fully managed `document search service` powered by ML
    * extract answers from within a document
    * documents include:
        * HTML
        * text
        * PDF
        * PowerPoint
        * MS Word
        * FAQs
    * indexes document source
    * has **incremental learning** enabled which means it learns based on user feedback
    * ability to manually fine-tune search results (importance of data, freshness, custom, ...)
    * use case:
        * automatic user support

## Personalize
* **Amazon Personalize** - fully-managed ML-service to build apps with real-time personalized reccomendations
    * example: customized direct marketing through product recommendations/reranking
    * used by Amazon.com
    * integrates into existing websites, applications, SMS, email marketing systems
    * implement model in days, not months (no need to build, train, deploy ML solutions)
    * typical flow:
        1. Personalize reads hsitorical data from source like S3
        1. Personalize reads realtime data through its **Amazon Personalize API**
        1. Personalize builds a model
        1. Personalize sends recommendations to client application through **Customized personalized API**
    * use case:
        * retail stores
        * media
        * entertainment

## Textract
* **Amazon Textract** - automatically extracts text, handwriting, data from any scanned documents using AI and ML
    * typical flow:
        1. Textract loads image of document
        1. Analyzes the image
        1. Converts into JSON format
    * extract data from forms, tables, any type of document(PDF, iamges)
    * use cases: financial services, healthcare, public secotr(passports)


&nbsp;
# Account Management, Billing & Support

## Organizations
* **AWS Organizations** - `global service` that allows managing multiple AWS Accounts by a `master account`
    * Cost benefits:
        * provides **consolidated billing** across all account that is payed by the `master account`
        * price benefits from **combined usage** (volume discount fror EC2, S3)
            * share volume pricing
            * share savings plan discounts
            * one bill for all AWS Accounts in Organization
            * pooling of Reserved EC2 instances for optimal savings
                * this can be turned of for any OU
    * API available to automate account creation
    * restrict account priviliges using **Service Control Policies (SCP)**
* **Multi Account Strategy** - separate accounts for different departments
    * better resource isolation
    * separate per account service limits
    * isolated account for logging
* **Multi-VPC** - separate departments through VPCs instead of multi-accounts
* can use tagging standards for billing purposes
* GOOD PRACTICE: enable CloudTrail on all accounts, send logs to central S3 account
* GOOD PRACTICE: send CloudWatch logs from all accounts to a central logging account
* **Organization Untis (OU)** - a logical group that could be seperated into its own Account with an Organization. 
    * strategies:
        * `business unit` - master ou -> [sales ou, retail ou, finance ou]
        * `environmental lifecycle` - master ou -> [dev ou, test ou, production ou]
        * `project-based` - master ou -> [project 1 ou, project 2 ou, project 3 ou]
        * https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy
* **Service Control Policies (SCP)** - allows whitelist/blacklist IAM actions on OU or Account
    * does not apply to Master Account
    * applied to all users/roles including the root
    * does not apply to **Service Linked Roles** - roles that enable AWS services to integrate with AWS Organizations
    * must have explicit ALLOW - by default does not allow anything
    * use cases:
        * restrict access to certain services
        * enforce PCI compliance by explicitly disabling services which are not compliant
    * DENY rules flow down the Organization Unit Hierarchy tree
    * SCP looks just like an IAM Policy -> JSON with specific format
    * you can easily check which policies are applied to which OU's in the AWS Console

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowAllActions",
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        },
        {
            "Sid": "DenyDynamoDB",
            "Effect": "Deny",
            "Action": "danymodb:*",
            "Resource": "*"
        }        
    ]
}
```

## Control Tower
* **AWS Control Tower** - easy way to setup(few clicks) and govern secure and compliant multi-account AWS environment based on best practices
    * `automated setup` in few clicks
    * `automated` ongoing `policy management` using guardrails
    * detect and remediate policy violations
    * `monitor` compliance through interactive dashboard
    * runs on top of AWS Organizations
    * a Control Tower setup is called a **Landing Zone**
* it sets up things such as:
    * OUs
    * shared accounts
    * native cloud directory with preconfigured groups and SSO access
    * preventive guardrails to enforce policies
    * detective guardrails to detect configuration violations
* **Guardrails** - rules that can be enabled on OUs to enforce policies or detect violations

## Pricing Models
* AWS has 4 pricing models:
    * **Pay as you go** - pay for what you use, remain agile, responsive, meet scale demands. Three pricing models within pay-as-you-go:
        * **Compute Pricing** - pay for compute time
            * **EC2**
                * only charged for what you use
                * number of instances
                * instance configurations -> physical capacity, regions, OS and software, instance type, instance size
                * ELB running time and amount of data processed
                * detailed monitoring
                * pricing models:
                    * **on-demand instances**: min 60s, pay per second(linux/windows) or per hour
                    * **reserved instances**: up to 75% discount compared to on-demand, 1-3 year plans, all/partial/no upfront
                    * **spot instances**: 90% discount compared to on-demand, bid for unused capacity, risk of loss of capacity
                    * **dedicated host**: on-demand or reservation for 1/3 years
                    * **savings plans**: alternative to save on sustained usage
            * **Lambda** - pay per call, pay per duration
            * **ECS** - ec2 launch type model: only pay for AWS resources stored and created in your app
            * **Fargate** - fargate launch type model: pay for vCPU and memory resources allocated to your applications in your containers
        * **Storage** - pay for data stored in the cloud
            * S3
                * based on storage class
                * number and size of objects - price can be tiered baased on volume(the bigger the better)
                * number and type of requests
                * data transfer out
                * s3 Acceleration
                * lifecycle transitions
            * EFS
                * pay per use
                * lifecycle rules
                * IA
            * EBS
                * volume type (based on performance)
                * provisioned size of volume per GB per month
                * IOPS
                    * General Purpose SSD: included
                    * Provisioned IOPS SSD: provisioned ammount of IOPS
                    * Magnetic: Number of requests
                * per GB of snapshot per month
                * tiered data transfer OUT costs
            * RDS
                * per hour billing
                * db characteristics: engine, size, memory class
                * purchase type: on-demand, reserved 1-3 years with upfront required
                * backup storage -> no additional cost for up to 100% of total db storage backup for a region
                * additional storage (per GB per month)
                * number of input/output requests per month
                * deployment type (storage and I/O variable): single AZ, Multiple AZ
                * data transfer: outbound transfer tiered for volume discounts
            * CloudFront
                * pricing is different across different geographical regions
                * aggergated for each edge location, then applied to your bill
                * data transfer out (volume diiscount)
                * number of HTTP(s) requests
        * **Network** - pay per transferred GB
            * free for traffic in
            * free for traffic within AZ over private IP
            * $0.01 per GB for cross AZ traffic over private IP
            * $0.02 per GB for cross AZ traffice over public ip / elastic ip
            * $0.02 per GB for inter-region traffic
            * for cost savings: use Private IP instead of public IP, use same AZ
    * **Save when you reserve** - minimize risk, predictable budget, comply with long-term requirements
        * reservations available for:
            * EC2 Reserved Instances
            * DynamoDB Reserved Capacity
            * ElastiCache Reserved Nodes
            * RDS Reserved Instance
            * Redshift Reserved Nodes
    * **Pay less by using more** - volume-based discounts
    * **Pay less as AWS grows** - cost reductions as number of users grows
* Free services & Free Tiers:
    * services:
        * IAM
        * VPC
        * Consolidated Billing
        * Elastic Beanstalk
        * CloudFormation
        * ASG
    * free tier: https://aws.amazon.com/free

## Savings Plan
* commit a certain & amount per hour for 1 or 3 years
* easiest way to setup long-term commitments on AWS
* EC2 Savings Plan
    * up to 72% discount compared to On-Demand
    * commit to usage of individual instance families in a region (eg C5 or M5)
    * regardless of AZ, size, OS or tenancy
    * all upfront, partial upfron, no upfront
* Compute Savings Plan
    * up to 66^ discount compared to On-Demand
    * regardless of Family, Region, size, OS, tenancy, compute options
    * Compute Options: EC2, Fargate, Lambda
* Machine Learning Savings Plan
    * SageMaker
    * Setup from the AWS Cost Explorer console
* estimate pricing at https://aws.amazon.com/savingsplans/pricing/

## Compute Optimizer
* **AWS Compute Optimizer** - reduce costs and improve performace by recommending optimal AWS resoruces for your workloads
    * helps choose optimal configurations and right-size your workloads (over/under provisioned)
    * uses ML to analyze your resources configurations and their utilization CloudWatch metrics
    * supported: EC2 Instances, EC2 ASG, EBS volumes, Lambda functions

## Billing & Costing Tools
* `estimating` costs in the cloud -> Pricing Calculator
* `tracking` costs in the cloud -> Billing Dashboard, Cost Allocation Tags, Cost and Usage Reports, Cost Explorer
* `monitoring` costs in the cluod -> Billing Alarms, Budgets

## Estimating Costs - Pricing Calculator
* **AWS Pricing Calculator** - available at https://calculator.aws/
    * estimate the cost for your solution architecture

## Tracking Costs
* **AWS Billing Dashboard** -  shows forecasts, costs for month, summary of costs, free tier dashboard with usage per service and information if you will surpass the free tier
* **Cost Allocation Tags** - use cost allocation tags to track your AWS costs on a detailed level
    * can use AWS generated tags -> automatically applied to created resource, starts with prefix **aws:** (e.g. aws:createdBy)
    * user-defined tags -> defined by the user, starts with prefix **user:**
    * tags are used for organizing resources:
        * EC2: instances, images, LB, SG
        * RDS, VPC resources, Route 53, IAM users, etc
        * resources created by CloudFormation are automatically tagged the same way
        * free naming, like: `Name`, `Environment`, `Team`
        * create **Resource Groups**(accessible under this name in console):
            * create, maintain, view a collection of resources that share common tags
            * manage these tags using the **Tag Editor**
* **Cost and Usage Reports** - generate reports with comprehensive set of costs / usage
    * most comprehensive set of AWS cost and usage data available
    * includes additional metadata about AWS services, pricing, reservations
    * lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items
    * includes tags that you have activated for cost allocation purposes
    * can be integrated with Athena, Redshift or QuickSight
* **Cost Explorer** - visualize, understand and manage AWS costs and usage over time
    * create custom reports
    * analyze data at high level - total costs over all accounts
    * monthly/hourly resource level granularity
    * choose an optimal Savings Plan
    * forecast usage up to 12 months based on previous usage
* usage:
    * estimating costs in  the cloud -> TCO Calculator, Simple Monthly Calculator / Pricing Calculator
    * tracking costs in the cloud -> Billing Dashboard, Cost Allocation Tags, Cost and Usage Reports, Cost Explorer

## Monitoring Costs
* **Billing Alarms** - billing data metric is stored in CloudWatch us-east-1
    * billing data are for overall worldwide AWS costs
    * its for actual cost, not for projected costs
    * intended a simple alarm
* **AWS Budgets** - create budgets that send alarms when actual/forecasted costs exceed a threshold
    * 4 types: Usage, Cost, Reservation, Savings Plan
    * for RI:
        * track utilization
        * supports EC2, ElastiCache, RDS, Redshit
    * up to 5 sns notification per budget
    * can filter by:
        * service
        * linked account
        * tag
        * purchase option
        * instance type
        * region
        * AZ
        * API Operation
        * more
    * has same options as AWS COst Explorer
    * 2 budgets are free, then $0.02/day/budget

## AWS Trusted Advisor
* high level AWS account assessment
* analyzes your AWS accounts and provides recommendation on 5 categories:
    * **Cost optimization**
    * **Performance**
    * **Security**
    * **Fault Tolerance**
    * **Service limits**
* **Support Plans**
    * **7 Core Checks** -> Basic & Developer Support Plan (FREE)
        * S3 Bucket Permissions
        * SG - Specific Ports Unrestricted
        * IAM Use (one IAM user minimum)
        * MFA on Root Account
        * EBS Public Snapshots
        * RDS Public Snapshots
        * Service Limits
    * **Full checks** -> Business & Enterprise Support Plan (PAYED)
        * full checks available on the 5 categories
        * ability to set CloudWatch alarms when reaching limits
        * Programmatic access using the AWS Support API

## Support Plans
* **AWS Support Plan Pricing**
    * *Basic* - Free
        * customer service, communitties
            * 24x7 access to customer service
            * documentation, whitepapers, support forums
        * AWS Trusted Advisor
            * 7 core checks
            * guidance to provision your resources following best practices to increase performance and improve security
        * AWS Personal Health Dashboard - personalized view of AWS services health with alerts when resources impacted
    * *Developer* - 29$
        * All Basic Support Plan +
        * business hours email access to Cloud Support ASsociates
        * unlimited cases / 1 primary contact
        * based on case severity response times:
            * general guidance: <24h
            * system impaired <12h
        * good for development
    * *Business* - 100$
        * good for production workloads
        * All Develop Plan +
        * Trusted Advisor -> full set of checks + API access
        * 24x7 phone, email, chat access to Cloud Support Engineers
        * unlimited cases / unlimited contacts
        * access to Infrastructure Event Management for additional fee
        * based on case severity response times:
            * general guidance: <24h
            * system impaired: <12h
            * production system impaired: <4h
            * production system down: <1h
    * *Enterprise On-Ramp* - 5500$
        * intended for production or business critical workloads
        * All of Business Plan +
        * access to `pool` of **Technical Account Managers (TAM)**
        * **Concierge Support Team** for billing and account best practices
        * **Infrastructre Event Management**, **Well-Architected & Operations Reviews**
        * based on case severity response times:
            * general guidance: <24h
            * system impaired: <12h
            * production system impaired: <4h
            * production system down: <1h
            * business-critical system down: <30min
    * *Enterprise* - 15000$
        * for mission critical workloads
        * all of Enterprise On-Ramp Plan +
        * access to `designated` Technical Account Manager (TAM)
        * based on case severity response times:
            * general guidance: <24h
            * system impaired: <12h
            * production system impaired: <4h
            * production system down: <1h
            * business-critical system down: < 15min

## Account Best Practices
* operate multiple accounts using **organizations**
* use **SCP** to restric account power
* **AWS Control Tower** - easily setup multi account with best practices
* **use tags & cost allocation tags** for easy management & billing
* **IAM guidelines**: MFA, least-privilege, password policy, password rotation
* **Config** to record all resources configurations & compliance over time
* **CloudFormation** to deploy stacks across accounts and regions
* **Trusted Advistor** to get insights, Support Plan adapted to your needs
* send service logs and access logs to **S3** and **CloudWatch Logs**
* use **CloudTrail** to record API calls made within account
* **if account is compromised**: change root pass, delete and rotate all pass / keys, contact the AWS support


&nbsp;
# Advanced Identity
* **IAM** - IAM inside AWS account for users that you trust and belong to your company
* **Organizations** - manage multiple AWS accounts
* **STS** - temporary limited-privileges creds to access AWS resources
* **Cognito** - application IAM solution with own database for users of you mobile / web apps
* **Directory Services** - integrate MS AD in AWS
* **IAM Identity Center** - SSO for multiple AWS accounts & applications

## Security Token Service (STS)
* **AWS STS** - enables creation of temporary, limited-privileges credentials to access your AWS resources
    * can configure expiration period
    * User [IAM Role] ---Assume Role--> [STS Service] ---Temporary Security Credentials--> User
    * use cases:
        * **Identity federationi** - manage user identities in external systems, and provide them with STS tokens to access AWS resources
        * IAM Roles for cross/same account access
        * IAM Roles for Amazon EC2 - provide temporary cred for EC2 instances to access AWS resources

## Cognito
* **Amazon Cognito** - identity for your Web/Mobile applications users
    * IAM solution for application users
    * instead of creating user in AWS IAM, create in Cognito
    * has own internal database of users
    * auth for apps is done through Amazon Cognito
    * compatible with OAuth

## Directory Services
* an **Active Directory** is a database of object(users, accounts, computers, printers, file shares, security groups) where you can manage security, create accounts and assign permissions
* **Amazon Directory Services** - a managed active directory that comes in 3 flavors:
    * *AWS managed Microsoft AD* - create own AD in AWS, manage users locally, supports MFA. Can establish "trust" connections between on-premise AD and AWS AD
    * *AD Connector* - Directory Gateway (proxy) to redirect to on-premise AD, supports MFA. Users are managed on the on-premise AD
    * *Simple AD* - AD-compatible managed directory on AWS, cannot be joined with on-premise AD

## AWS IAM Identity Center
* **AWS IAM Identity Center** - successor to AWS SSO, provides one login(SSO) for all your:
    * AWS accounts in AWS Organizations
    * business cloud applications(Salesforce, Box, MS 365,...)
    * SAML2.0-enabled applications
    * EC2 Windows Instances
* **Identity providers**
    * built-in identity store in IAM Identity Center
    * 3rd party: AD, OneLogin, Okta

&nbsp;
# Other Services

## WorkSpaces
* **Amazon WorkSpaces** - managed Desktop as a Service (DaaS) soltuion to easily provision Windows or Linux desktops
    * great to eliminate management of on-premise VDI (Virtual Desktop Infrastructure)
    * fast
    * quickly scalable to 1000s of users
    * secure data - integrates with KMS
    * pay-as-you service with monthly or hourly rates
    * to **minimize latency** best practice is to deploy WorkSpaces as close to Users geographically as possible
    * on-demand or always on
    * users connect to VDI and open native or WAM applications

## AppStream 2.0
* **Amazon AppStream 2.0** - desktop application streaming service to deliver an application to any computer(through web browser) without acquiring, provisioning infrastructure
    * application is delivered from within your web browser
    * does not give full VDI like WorkSpaces
    * works with any device
    * allow to configure an instance type per application type(CPU, RAM, GPU)

## Sumerian
* **Amazon Sumerian** - create and run VR, AR, 3D Applications
    * quickly create 3D models with animationis
    * ready-to-use templates and assetts available
    * accessbile via web-browser URLs or popular hardware for AR/VR

## IoT Core
* **AWS IoT Core** - allows easily connecting IoT devices to the AWS Cloud
    * serverless
    * scalable to billions of devices and trillions of messages
    * secure
    * apps can communicate with devices even when the devices arent connected
    * integrates with a lot of AWS Services (Lambda, S3, SageMaker, etc.)
    * build IoT applications that gather, process, analyze, act on data

## Elastic Transcoder
* **Amazon Elastic Transcoder** - converts media files stored in S3 to formats required by consumer playback devices (phones, etc.)
    * *Transcoding Pipeline* - a pipeline of operations performed to convert media forma  source bucket and store the converted file in a target bucket
    * benefits:
        * easy to use
        * highly scalable - large volumes and file sizes
        * cost effective - duration-based pricing model
        * fully managed
        * secure

## AppSync
* **AWS AppSync** - store and sync data in real-time across mobile and web apps
    * uses GraphQL (mobile tech from FB)
    * client code for APIs can be generated automatically
    * integration with DynamoDB / Lambda
    * real-time subscriptions
    * offline data sync (replaces Cognito Sync)
    * fine grained security
    * AWS Amplify can leverage AWS AppSync in background

## Amplify
* **AWS Amplify** - a comprehensive suite of tools to help develop/deploy scalable full-stack web and mobile applications
    * manage:
        * auth
        * storage
        * API (REST, GraphQL)
        * CI/CD
        * PubSub
        * Analytics
        * AI/ML Predictions
        * Monitoring
        * Source Code from AWS
        * GitHub
    * like Elastic Beanstalk but for Web and Mobile applications
* **Amplify Studio** - ui for setting up and managing an **Amplify Backend** created for you web/mobile app
* **Amplify Backend** - AWS Services that are used for the FS web/mobile apps include:
    * S3
    * Cognito
    * AppSync
    * API Gateway
    * SageMaker
    * Lex
    * Lambda
    * DynamoDB

## Device Farm
* **AWS Device Farm** - fully-managed service for testing web.mobile apps on real desktop browser, mobile devices and tablets 
    * run test concurrently
    * can interact with devices
    * ability to configure device settings (GPS, language, Wi-Fi, Bluetooth)
    * get reports, logs, screenshots
    * real devices, not emulators

## AWS Backup
* **AWS Backup** - fully-managed service to centrally manage and automate backups across AWS services
    * on-demand / schedule backups
    * supports PITR ( Point-in-time Recovery)
    * rerenetioin periods, lifecycle management, backup policies
    * cross-region backups
    * cross-account backup (using AWS Organizations)
    * create a backup plan that run manually or scheduled and backs-up services to S3

## Disaster Recovery Strategies
* **Disaster Recovery Strategies**
    * `backup & restore` -> *cheapest*, backup all data to S3 and restore in case of disaster for on-premise
    * `pilot light` -> *cheap*, only core functions of app are in the cloud(on ec2 for example) and ready to scale, in case of disaster of on-premise, enable all functions and scale up pilot light
    * `warm standby` -> *expensive*, full version of the app on cloud, but small scale, in case of disaster, scale up cloud version
    * `multi-site / hot-site` -> *most expensive*, full version at full size on cloud, in case of disaster, switch to cloud version

## AWS Elastic Disaster Recovery
* **AWS Elastic Disaster Recovery (DRS)** - quickly and easily recover your physical, virtual, and cloud-based servers into AWS
    * use cases: protect most critical databases, enterprise apps(SAP), from ransomware attacks
    * continuous block-level replication(seconds) for your servers
    * used to be "CloudEndure Disaster Recovery"
    * typical flow: 
        1. `continuous replication` to low cost staging env in AWS
        1. disaster strikes corporate data center or cloud
        1. `failover` within minutes to an upscaled target production environment in AWS
        1. corporate data center up again
        1. `failback` to corporate datacenter from production env in AWS

## AWS DataSync
* **AWS DataSync** - move large amounts of data from on-premises to AWS
    * can synchronize to AWS S3, EFS, FSx for Windows
    * replication can be scheduled hourly / daily / weekly
    * replication tasks are **incremental** after the first full load
    * setup: DC Server connects throu *AWS DataSync Agent* which conects to *AWS DataSync* which moves data into various AWS Storage Resources

## Application Discovery & Migration Service
* **Application Discovery Service** - service for gathering information about on-premises data centers to map out server utilization data / dependencies important for migration
    * *Agentless Discovery (AWS Agentless Discovery Container)* - maps VM inventory, configuration, performance history(CPU, memory, disk usage)
    * *Agent-based Discovery (AWS Application Discovery Agent)* - maps system configuration, system performance, running processes, details of the network connections between systems
    * data collected through discovery can be viewed within **AWS Migration Hub**
* **AWS Application Migration Service (MGN)** - `lift-and-shift` (`rehost`) solution which simplifies migrating applications to AWS
    * converts physical, virtual, cloud-based servers to run natively on AWS
    * typical flow:
        1. Corporate DC has OS / Apps / DB / Disks
        1. Install `AWS Replication Agent` on Corporate DC
        1. Perform `Continuous Replication` to a low cost staging environment on AWS
        1. Perform `Cutover` to a scaled up production environment on AWS
    * supports wide range of platforms, OS, DB
    * minimal downtime, reduced costs(done automatically by service, not by staff of engineers)

## AWS Fault Injection Simulator (FIS)
* **AWS Fault Injection Simulator (FIS)** - full managed service for running fault injection experiments on AWS workloads
    * **Chaos Engineering** - stressing an application by creating disruptive events, observing how the system responds and implementing improvements
    * helps uncover hidden bugs and performance bottlenecks
    * support for: EC2, ECS, EKS, RDS
    * use pre-built templates that generate desired disruptions
    * after running templates on resources monitor using CLoudWatch / EventBridge, stop experiment and view results(performance, observability, resiliency issues)

## Step Functions
* **AWS Step Functions** - build serverless visual workflow to perform orchestration of Lambda functions
    * create a flow chart graph where each node represents an action and control flows through graph based on predefined statuses of operations like:
        * in progress
        * success
        * failed
        * cancelled
        * caught error
    * features: sequencing, parallel functions, conditions, timeouts, error handling, human approval feature
    * can integrate with: EC2, ECS, On-premises servers, API Gateway, SQS queues, etc..
    * hybrid service
    * use cases: order fulfillment, data processing, web applications, any workflow
    
## Ground Station
* **AWS Ground Station** - fully managed service that lets you control sattelite comomuncations, process data, scale your satellite operations
    * allows you to download satellite data to your AWS VPC within seconds
    * provides global network of satelite ground stations near AWS regions
    * send satellite data to S3 or EC2 instance
    * use case: weather forecasting, surface imaging, communcations, video broadcasts

## AWS Pinpoint
* **AWS Pinpoint** - scalable *2-way (inbound/outbound)* marketing communcations service
    * supports email, SMS, push, voice, iin-app messaging
    * ability to segment and personalize messages with right content to customers
    * can receive replies
    * scales to billions of messages per day
    * use cases: marketing campaigns by bulk transactioinal SMS messages
    * streams events to SNS / Kindesis Data Firehose / CloudWatch Logs which allows building automation on top of it
    * in AWS SNS & SES -> you manage each messages audience / content / delivery schedule
    * in Amazon Pinpoint -> create message templates, deliver schedules, highly-targeted segmends, full campaigns - the rest is managed by pinpoint
        * evolution of SNS & SES for full blown marketing campaigns

&nbsp;
# AWS Architecting & Ecosystem

## AWS WhitePapers Well-Architected Framework
* `stop guessing capacity needs` -> utilize auto-scaling to grow capacity along with needs
* `test systems at production scale` -> thx to easy provisioning you can set up, test peak loads and tear down at relatively low costs
* `automate to make architectural experimentation easier` -> thx to IaC you can easily setup and tear down which makes rolling out and testing new ideas very easy and cost-effective
* `allow for evolutionary architectures` -> design based on changing requirements
* `drive architectures using data` -> monitor and analyze actual usage, what are the patterns/queries and drive architecture based on what you actually need
* `improve for game days` -> simulation applications for load spikes to figure out how the current architecture handles them
* **Design Principles**
    * *Scalability* -> vertical & horizontal
    * *Disposable Resources* -> servers should be disposable & easily configured
    * *Automation* -> Serverless, IaC, Auto Scaling
    * *Loose Coupling* -> break down big applications into smaller, loosely coupled components. A change or failure in one component should not cascade to other components
    * *Services, not Servers* -> dont just use EC2, use managed services, databases, serverless
* **6 Pillars of Well Architected Framework**
    1. *Operational Excellence*
        * the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures
        * design principles:
            * `perform operations as code` - IaC
                * CloudFormation, CDK
            * `annotate documentation` - automate the creation of annotated documentation after every build
            * `make frequent, small, reversible changes` - so in case of faulure, you can easilt reverse it
            * `refine operations procedures frequently` - ensure that team members are familiiar with it
            * `anticipate failure`
            * `learn from all operational failures`
        * services:
            * `prepare` -> AWS CloudFormation, AWS Config (evaluate cloudformation templates)
            * `operate` -> AWS CloudFormation, AWS Config, AWS CloudTrail(make sure nothing is changed manually), Amazon CloudWatch(perf of stack), AWS X-Ray(trace http requests and make sure they are working correctly)
            * `evolve` - AWS CloudFormation, AWS CodeBuild, AWS CodeCommit, AWS CodeDeploy, AWS CodePipeline (iterate quickly, deploy quickly)
    1. *Security*
        * includes the ability to protect information, systems, and assets while delivering business value trhough risk assessments and mitigation strategies
        * design principles:
            * `implement a strong identity foundation` - centralize privilege management and reduce (or eliminate) reliance on long-term credentials - principle of least privilege - IAM
            * `enable traceability` - integrate logs and metrics with systems to automatically respond and take action
            * `apply security at all layers` -  like edge netrworks, vpc, subnet, load balancer, every instance, OS, application
            * `protect data in transit and at rest` - encryption, tokenization, access control
            * `keep people away from data` - reduce or elimiate the need for direct access or manual processing of data
            * `prepare for security events` - run incident response simulations, use tools with automation to increase your speed for detection, investigation and recovery
        * services:
            * IAM -> AWS-STS, MFA Token, AWS Organizations
            * Detective Controls -> AWS Config, AWS CloudTrail, Amazon CloudWatch
            * Infrastructure Protection -> Amazon CloudFront, Amazon VPC, AWS Shield, AWS WAF, Amazon Inspector
            * Data Protectioin -> KMS, S3, Elastic Load Balancing, Amazon EBS, Amazon RDS
            * Incident Response -> IAM, AWS CLoudFormation, Amazon CloudWatch Events
    1. *Reliability*
        * ability of system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, mitigate disruptions such as misconfigurations or transient network issues
        * design principles:
            * `test recovery procedures` -  use automation to simulate different failures or recreate scenarios that led to failures before
            * `automatically recover from failure` - anticipate and remediate failures before they occur
            * `scale horizontally to increase aggregate system availability` -  distribute requests across multiple, smaller resources to ensure that they dont share a common point of failure
            * `stop guessing capacity` - maintain optimal capacity to satisfy demand without over or under provisioning - use Auto Scaling
            * `manage change in automation` - use automation to make changes in infrastructure
        * services:
            * `Foundations` -> IAM, VPC, Service Limits, AWS Trusted Advisor
            * `Change Management` -> AWS Auto Scaling, CloudWatch, CloudTrail, Config
            * `Failure Management` -> Backups, AWS CloudFormation, S3, S3 Glacier, Route 53
    1. *Performance Efficiency*
        * includes the ability to use computing resources efficiently to system requirements, and to maintain that efficiency as demand changes and technology evolve
        * design principles:
            * `Democratize advanced technologies` - advance technologies become services which allows more focus on product development
            * `Go global in minutes` - easy deployment in multiple regions
            * `Use serverless architectures` - avoid burden of managing servers
            * `Experiment more often` - easy to carry out comparative testing
            * `Mechanical sympathy` - be aware of all AWS services
        * services:
            * `Selection` - AWS Auto Scaling, Lambda, EBS, S3, RDS
            * `Review` - AWS CloudFormation, AWS News Blog
            * `Monitoring` - CloudWatch, Lambda
            * `Tradeoffs` - RDS, ElastiCache, Snowball, CloudFront
    1. *Cost Optimization*
        * includes the ability to run systems to deliver business value at the lowest price point
        * design principles:
            * `Adopt a consumption mode` - pay only for what you use
            * `measure overall efficiency` - use CloudWatch
            * `stop spending money on data center operations` - aws takes care of infrastructure so customer can focus on product
            * `analyze and attribute expenditure` - accurate identification of system usage and costs, helps measure return on investment (ROI) - make sure to use tags
            * `use managed and application level services to reduce cost of ownership` - as managed services operate at cloud scale, they can offer a lower cost per transaction or service
        * services:
            * `Expenditure Awareness` - Budgets, Cost and Usage Report, Cost Explorer, Reserved Instance Reporting
            * `Cost-effective resources` - spot instances, reserved instances, S3 Glacier
            * `Matching supply and demand` - ASG, AWS Lambda
            * `Optimizing Over Time` - Trusted Advisor, Cost and Usage report
    1. *Sustainability*
        * focus on minimizing the environmental impact of running cloud workloads
        * design principles:
            * `understand your impact` - performance indicators / evaluate improvement
            * `establish sustainability goals` - set long-term goals for each workload, model return on investment (ROI)
            * `maximize utilization` - right size each workload to maximize the energy efficiency
            * `anticipate and adopt new hardware and software offerings` - design for flexibililty to adopt new technologies over time
            * `use managed services` - shared services reduce the amount of infrastructure, managed services help automate sustainability best practices as moving infrequent accessed data to cold storage and adjusting compute capacity
            * `reduce the downstream impact of your cloud workloads` - reduce the amount of energy or resources required to use your services and reduce the need for your customers to upgrade their devices
        * services:
            * EC2 AutoScaling, Serverless Offering(Lambda, Fargate)
            * Cost Explorer, AWS Graviton 2, EC2 T instances, Spot Instances
            * EFS-IA, S3 Glacier, EBS Cold HDD volumes
            * S3 Lifecycle Configurationis, S3 Intelligent Tiering
            * Amazon Data Lifecycle Manager
            * Read Local, Write Global: RDS Read Replicas, Aurora GLobal DB, DynamoDB GlobalTable, CloudFront
* the 6 pillars are not trade-offs but a synergy
* **Well Architected Tools** - free tool to review your architecture against the 6 pillars Well-Architected Framework to help adopt best practices

## Right Sizing
* **Right Sizing** - process of matching instance type and size to your workload performance and capacity requirement at **lowest possible cost**
* scaling up is easy so always start small
* its also the process of looking at deployed instances and identifying opportunities to elimiate or downsize without compromising capacity/requirements
* important to Right Size:
    * before a Cloud Migration
    * continuously after the cloud onboarding process (reqs change over time)
* tools: CloudWatch, Cost Explorer, Trusted Advisor, 3rd party tools

## AWS Ecosystem
* **AWS Ecosystem** - lots of free resources:
    * **AWS Blogs** - https://aws.amazon.com/blogs/aws/
    * **AWS Forums** - https://forums.aws.amazon.com/index.jspa
    * **AWS Whitepaper & Guides** - https://aws.amazon.com/whitepapers
    * **AWS Quick Starts** - https://aws.amazon.com/quickstart/
        * automated, gold-standard deployments in the AWS Cloud
        * build your production environment quickly with templates
        * leverage cloudformation
    * **AWS Solutions** - https://aws.amazon.com/solutions
        * vetted tech solution foer the AWS Cloud
    * **AWS MarketPlace** - digital catalog with thousands of software listings from independent software vendors
        * AMI, CloudFormationi templates, SaaS, Containers
        * if you buy through Marketplace -> goes into AWS bill
        * sell own solutions
    * **AWS Training** - aws digital (online) and Classroom Training (in-person or virtual)
        * AWS Private Training (for organizations)
        * Training and Certification for U.S Government / Enterprise
        * AWS Academy
    * **AWS Professional Services & Partner Netowkr** - global team of experts that work alongside your team and a chosen APN
        * APN -> AWS Partner Network
        * APN Technology Partners - providing hardware, connectivity, software
        * APN Consulting Partners -> professional services firm to help build on AWS
        * APN Training Partners -> find who can help you learn AWS
        * AWS Comptenecy Program -> competencies are granted to APN Parnters who demonstrated knowledge in field
        * AWS Navigate Program -> help PArtners become better partners

## AWS Knowledge Center
* **AWS Knowledge Center** -  portal that contains answers to most common questions regarding AWS services, tools along with best practices

## AWS IQ & re:Post
* **AWS IQ** - quickly find professional help for your AWS projects
    * engage 3rd party certified experts for on-demand project work
    * video-conferencing, contract management, secure collaboration, integrated billing
    * for customers:
        1. submit request
        1, review responses
        1. select expert
        1. work securely
        1. pay per milestone charged to AWS billing
    * for experts:
        1. create profile
        1. connect with customers
        1. start a proposal
        1. work securely
        1. get paid
* **AWS re:Post** - AWS Managed Q&A service offering crowd-sourced expert reviewed answers to your technical questions about AWS
    * replaces original AWS forums
    * like stack overflow for AWS
    * part of AWS Free Tier
    * comomunity members can build reputation
    * AWS Premiunm Support cusomters that are not answered from community are passed on to AWS Support engineers
    * not intended to be used for questions that are time-sensitive or involvwe any proprietary information

&nbsp;
# AWS Service Overview
* [IAM](#iam) - https://aws.amazon.com/iam/
* [AWS CLI](#aws-cli) - https://aws.amazon.com/cli/
* [AWS CloudShell](#aws-cloudshell) -
* [AWS SDK](#aws-sdk) -
* [EC2](#ec2) -
* [AMI](#ami) -
* [EBS](#ebs) -
* [EFS](#efs) -
* [Amazon FSx](#amazon-fsx) -
* [ELB](#elb) - 
* [ASG](#asg) - 
* [S3](#S3) -
* [AWS Snow Family](#aws-snow-family) - 
* [RDS](#rds) -
* [ElastiCache](#elasticache) -
* [DynamoDB](#dynamodb) -
* [Redshift](#redshift) -
* [EMR](#emr) -
* [Athena](#athena) -
* [QuickSight](#quicksight) -
* [DocumentDB](#documentdb) -
* [Neptune](#neptune) -
* [QLDB](#qldb) -
* [Managed Blockchain](#managed-blockchain) -
* [Glue](#glue) -
* [DMS](#dms) -
* [ECS](#ecs) -
* [Fargate](#fargate) -
* [ECR](#ecr) -
* [Lambda](#lambda) -
* [API Gateway](#api-gateway) -
* [Batch](#batch)
* [Lightsail](#lightsail)
* [CloudFormation](#CloudFormation) -
* [CDK](#cdk) -
* [Beanstalk](#beanstalk) -
* [CodeDeploy](#codedeploy) -
* [CodeCommit](#codecommit) -
* [CodeBuild](#codebuild) -
* [CodePipeline](#codepipeline) -
* [CodeArtifact](#codeartifact) -
* [CodeStar](#codestar) -
* [Cloud9](#cloud9) -
* [SSM](#ssm) -
* [OpsWorks](#opsworks) -
* [Route 53](#route-53) -
* [CloudFront](#cloudfront) -
* [S3 Transfer Accelerator](#s3-transfer-accelerator) -
* [AWS Global Accelerator](#aws-global-accelerator) -
* [AWS Outposts](#aws-outposts) -
* [AWS WaveLength](#aws-wavelength) -
* [AWS Local Zones](#aws-local-zones) -
* [SQS](#sqs) -
* [Kinesis](#kinesis) -
* [SNS](#sns) -
* [Amazon MQ](#amazon-mq) -
* [CloudWatch](#cloudwatch) -
* [EventBridge](#eventbridge) -
* [CloudTrail](#cloudtrail) -
* [X-Ray](#x-ray) -
* [CodeGuru](#codeguru) -
* [Dashboards](#dashboards) -
* [VPC](#vpc) -
* [WAF](#waf-&-shield) -
* [Shield](#waf-&-shield) -
* [Penetration Testing](#penetration-testing) -
* [KMS & CloudHSM](#kms-&-cloudhsm) -
* [AWS Certificate Manager (ACM)](#aws-certificate-manager-(acm)) -
* [Secrets Manager](#secrets-manager) -
* [Artifact](#artifact) -
* [GuardDuty](#guardduty) -
* [Inspector](#inspector) -
* [Config](#config) -
* [Macie](#macie) -
* [Security Hub](#security-hub) -
* [Amazon Detective](#amazon-detective) -
* [AWS Abuse](#aws-abuse) -
* [Rekognition](#rekognition)
* [Transcribe](#transcribe)
* [Polly](#polly)
* [Translate](#translate)
* [Lex + Connect](#lex-+-connect)
* [Comprehend](#comprehend)
* [SageMaker](#sagemaker)
* [Forecast](#forecast)
* [Kendra](#kendra)
* [Personalize](#personalize)
* [Textract](#textract)
* [Organizations](#organizations)
* [Control Tower](#control-tower)
    * [Pricing Models](#pricing-models)
    * [Savings Plan](#savings-plan)
    * [Compute Optimizer](#compute-optimizer)
    * [Billing & Costing Tools](#billing-&-costing-tools)
    * [Estimating Costs - Pricing Calculator](#estimating-costs---pricing-calculator)
    * [Tracking Costs](#tracking-costs)
    * [Monitoring Costs](#monitoring-costs)
    * [AWS Trusted Advisor](#aws-trusted-advisor)
    * [Support Plans](#support-plans)
    * [Account Best Practices](#account-best-practices)
* [Security Token Service (STS)](#security-token-service-(STS)) -
* [Cognito](#Cognito) -
* [Directory Services](#directory-services) -
* [AWS IAM Identity Center](#aws-iam-identity-center) -
* [WorkSpaces](#workspaces) -
* [AppStream 2.0](#appstream-2.0) -
* [Sumerian](#sumerian) -
* [IoT Core](#iot-core) -
* [Elastic Transcoder](#elastic-transcoder) -
* [AppSync](#appsync) -
* [Amplify](#amplify) -
* [Device Farm](#device-farm) -
* [AWS Backup](#aws-backup) -
* [AWS Elastic Disaster Recovery](#aws-elastic-disaster-recovery) -
* [AWS DataSync](#aws-datasync) -
* [Application Discovery & Migration Service](#application-discovery-&-migration-service) -
* [AWS Fault Injection Simulator (FIS)](#aws-fault-injection-simulator-(fis)) -
* [Step Functions](#step-functions) -
* [Ground Station](#ground-station) -
* [AWS Pinpoint](#aws-pinpoint) -
    * [AWS WhitePapers Well-Architected Framework](#aws-whitepapers-well-architected-framework)
    * [Right Sizing](#right-sizing)
    * [AWS Ecosystem](#aws-ecosystem)
    * [AWS Knowledge Center](#aws-knowledge-center)
    * [AWS IQ & re:Post](#aws-iq-&-re:post)