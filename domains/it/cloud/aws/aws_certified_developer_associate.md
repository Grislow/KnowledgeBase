# AWS Certified Developer Associate

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.

Source:
* [udemy - aws-certified-developer-associate](https://www.udemy.com/course/aws-certified-developer-associate-dva-c01)

#### Table of contents

* [AWS Global Infrastructure](#aws-global-infrastructure)
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
    * [Security Groups](#Security-groups)
    * [Classic Ports](#classic-ports)
    * [EC2 Purchasing Options](#ec2-purchasing-options)
    * [AMI](#ami)
* [EBS](#ebs)
* [EFS](#efs)
* [Scalability & High Availability](#scalability-&-high-availability)
* [ELB](#elb)
* [ASG](#asg)
    * [ASG Scaling Policies](#asg-scaling-policies)
* [RDS](#rds)
* [Aurora](#aurora)
* [ElastiCache](#elasticache)
* [DNS](#dns)
* [Route 53](#route-53)
* [VPC](#vpc)
    * [Network ACL vs SGs](#network-acl-vs-sgs)
* [S3](#S3)
    * [Athena](#athena)
* [CloudFront](#cloudfront)
* [Docker](#docker)
* [ECS](#ecs)
* [Fargate](#fargate)
* [ECR](#ecr)
* [EKS](#eks)
* [Elastic Beanstalk](#elastic-beanstalk)
* [CICD](#cicd)
* [CodeCommit](#codecommit)
* [CodePipeline](#codepipeline)
* [CodeBuild](#codebuild)
    * [buildspec.yml](#buildspec.yml)
* [CodeDeploy](#codedeploy)
    * [appspec.yml](#appspec.yml)
* [CodeStar](#codestar)
* [CodeArtifact](#codeartifact)
* [CodeGuru](#codeguru)
* [CloudFormation](#cloudformation)
* [CloudWatch](#cloudwatch)
* [EventBridge](#eventbridge)
* [X-Ray](#x-ray)
* [CloudTrail](#cloudtrail)
* [SQS](#sqs)
* [SNS](#sns)
* [Kinesis](#kinesis)
* [Lambda](#lambda)
    * [Integration with ALB](#integration-with-alb)
    * [Lambda at Edge](#lambda-at-edge)
    * [Integration with S3](#integration-with-s3)
    * [Event Source Mapping](#event-source-mapping)
    * [Lambda Destinations](#lambda-destinations)
    * [Lambda Permissions](#lambda-permissions)
    * [Lambda Environment Variables](#lambda-environment-variables)
    * [Lambda Monitoring](#lambda-monitoring)
    * [Lambda in VPC](#lambda-in-vpc)
    * [Lambda Performance](#lambda-performance)
    * [Lambda Concurrency](#lambda-concurrency)
    * [Lambda External Dependencies](#lambda-external-dependencies)
    * [Lambda and CloudFormation](#lambda-and-cloudFormation)
    * [Lambda Layers](#lambda-layers)
    * [Lambda Container Images](#lambda-container-images)
    * [Lambda Versions and Aliases](#lambda-versions-and-aliases)
    * [Lambda Limits and Best Practices](#lambda-limits-and-best-practices)
* [Dynamo DB](#dynamo-db)
* [API Gateway](#api-gateway)
* [SAM](#sam)
* [Cloud Development Kit](#cloud-development-kit)
* [Cognito](#cognito)
* [Step Functions](#step-functions)
* [AppSync](#appsync)
* [KMS](#kms)
* [SSM](#ssm)
* [Secrets Manager](#secrets-manager)
* [Other Services](#other-services)

&nbsp;
# AWS Global Infrastructure
* **Regions**
    * have codes like `us-east-1`
    * a cluster of data centers
    * most services are bound to regions - https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services
    * how to choose a region:
        * *Compliance* - data governance, legal requirements, data never leaves a region without explicit permissions
        * *Proximity* - closer to customers means lower latency
        * *Service Availability* - new services/features aren't available in all regions
        * *Pricing* - pricing varies across regions
* **Availability Zones**
    * one or more discrete data centers with redundant power, networking and connectivity
    * each region has availability zone, usually 3, min 2, max 6
    * each AZ has a code like `us-east-1a`, `us-east-1b`
    * AZ's are isolated from disasters
    * AZ's are connected with high bandwidth, ultra-low latency networking
* **Edge Locations / Points of Presents**
    * Amazon has 205 Edge Locations and 11 Regional Caches in 84 cities across 42 countries
    * content is delivered to users with lower latency

More under https://infrastructure.aws/

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
* **Account Alias** is a name of the account that you can set and use instead of the number during log in
* **IAM Roles** are policies applied to services. Common roles:
    * EC2 Instance Roles
    * Lambda Function Roles
    * Roles for CloudFormation
* **IAM Secutiy Tools** various tools for checking how secure your IAM configuration is:
    * *IAM Credentials Report* - list of account's users and various credential status - `account level`
    * *IAM Access Advisor* - list of service permissions granted to user and when they where last accessed. Very handy to revise policies assigned to user - `user level`
* **AWS Shared Responsibility Model** states that AWS is responsible for its infrastructure


## IAM Policies
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
    * *Mogile SDKs* - Android, iOS and more
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
* control inbound and outbound traffice of a EC2 instances
* only contain `allow` rules
* can reference by IP or by other security groups
    * which means you can `authorise` specific security groups and traffic comming from EC2 instances with that group is allowed
* they regulate:
    * access to ports
    * authorised IP ranges - IPv4 and IPv6
    * control of inbound network (from other to the instance)
    * control of outbount network (from the instance to other)
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
        * can by and sell in the `Reserved Instance Marketplace`
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


&nbsp;
# EFS
* **EFS** - **Elastic File System** - is a *managed NFS*(network file system) that can be mounted on many EC2
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
        * *Bursting* - 1 TB = 50MiB/s + burst of up to 100MiB/s, the more space you use them more throughput
        * *Provisioned* -  set throughput regardless of storage size
* storage classes:
    * **Storage Tiers** - lifecycle management features
        * *Standard* - for frequently accessed files
        * *Infrequent access* (EFS-IA) - cost to retrieve files, lower price to store. Enable with a Lifecycle policy
    * **Availability and Durability**
        * *Regional* - multi-AZ, great for prod
        * *One Zone* - one AZ, cheaper, compatible with IA (EFS One Zone-IA), backup enabled by default, good for dev


&nbsp;
# Scalability & High Availability
* **Scalability** - can adapty greater loads by adapting
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
    * facilitated by services like [ASG](#asg) with multi AZ enabled or [ELB](#elb) with multiscaling enabled

&nbsp;
# ELB
* **Load Balances** - servers that forward traffic to multiple servers downstream. Used to:
    * `spread load` across instances
    * expose a `single point of access` (DNS) to your application
    * seamlessly `handle` downstream instance `failure` 
    * perform `healthchecks`
    * provide `SSL termination` (HTTPS) for your websites => decrypting/offloading SSL-encrypted data traffice
    * enforce `stickiness` with cookies => assign identification(through cookies or IP details) and fix routing based on it
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
    * are done on port and a route like `/health` for example:
        * Protocol: `HTTP`
        * Port: `4567`
        * Endpoint: `/health`
    * if response to health check is not `200 (OK)` then labeled `unhealthy`
* **4 kinds** of LB are available on AWS:
    * **CLB** - *Classic Load Balancer* - `v1`, old generation, LB available from 2009 
        * for `protocols` HTTP, HTTPS, TCP, SSL (secure TCP)
        * shown as deprecated and discouraged usage by AWS, but still available
    * **ALB** - *Application Load Balancer* - `v2`, new generation, LB available from 2016 
        * for `protocols` HTTP, HTTPS, WebSocket
    * **NLB** - *Network Load Balancer* - `v2`, new generation, LB available from 2017
        * for `protocols` TCP, TLS (secure TCP), UDP
    * **GWLB** - *Gateway Load Balancer* - modern LB available from 2020
        * operates at layer 3 (Network layer) - IP Protocol
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

## ASG Scaling Policies
* **Auto Scaling Alarms** - can scale an ASG based on [CloudWatch](#cloudwatch) alarms
    * alarms monitor system metrics like:
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
# RDS
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
* **RDS Backups**
    * automatically enabled in RDS
    * daily full backup during maintenance window
    * transaction logs backed-up every 5 minutes
    * Point in Time Restore from up to 5 minutes ago
    * 7 day retention that can be increased to 35 days
    * **DB Snapshots**
        * manually triggered backup by user
        * retention as long as you want
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



&nbsp;
# Aurora
* **Aurora** - a cloud-native optimized relational database service
    * `proprietary` technology from AWS 
    * compatible with `MySQL` and `Postgres` (same drivers will work)
    * claims huge `performance` improvement:
        * 5x over MySQL on RDS
        * 3x over Posgres on RDS
    * `Auto Expanding` - shared storage automatically grows from `10 GB` to `128 TB`
        * sysops dont need to monitor
    * `Self Replicating` can have `15 replicas` with `faster replication` process (sub 10ms replica lag)
        * MySQL can have 5
    * `instantaneous failover`
        * HA native
    * costs about 20% more than RDS
* **Aurora HA and Read Scaling**
    * 6 copies of data across 3 AZ
        * 4 needed for writesreads
        * 3 needed for reads
        * `Self Healing` with peer-to-peer replication
            * easily handles corrupted data
        * storage is striped across 100s of volumes
            * `Striped` - segmenting logically sequential data, so that consecutive segments are stored on different physical storage devices
    * One Aurora instances takes `writes` called the `master`
        * automatic failover for master in 30 seconds
        * only the master can write to the database
    * Up to 15 Aurora Read Replicas serve `reads`
        * a `read` replica can be transformed into a `master`
    * support for cross region replication
* **Aurora DB Cluser**
    * `Writer Endpoint` - DNS name that always points to the master, so client can maintain connection on failover
    * `Read Replicas` - 1 to 15 replicas that handle read operations, with Auto Scaling possible
    * `Reader Endpoint` - DNS name on top of a Connection Load Balancer that always point to the cluster of read replicas
* **Features** - remember fro exam:
    * `Self Replicating`
    * `Self Healing`
    * `Auto Expanding`
    * `Automatic fail-over`
    * `Backup and Recovery`
    * `Isolation and security`
    * `Industry compliance`
    * `Push-button scaling`
    * `Automatic Patching with Zero Downtime`
    * `Advanced Monitoring`
    * `Routing Maintenance`
    * `Backtrack` - restore data at any point of time without using backups
* **Aurora Security**
    * uses same engine as RDS 
    * encryption at rest using KMS
    * automated backups, snapshots and replicas are also encrypted
    * encryption in flight using SSL
    * possible to `authenticate using IAM token`
    * YOU configure Security Groups
    * YOU CAN'T SSH into it


&nbsp;
# ElastiCache
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


&nbsp;
# DNS
* **DNS** - **Domain Name System** - translates human-friendly hostnames into machine IP addresses
    * backbone of the internet
    * example: www.google.com => 172.217.18.36
* **Hierarchical naming structure**
    * `.com`
    * `example.com`
    * `www.example.com`
    * `api.example.com`
* **Terminology**
    * *Domain Registrar* - handles reservation of domain names and IP address assignments
        * Amazon Route 53, GoDaddy, ...
    * *DNS Records* - configure how the DNS server routes traffic
        * A, AAAA, CNAME, NS, ...
    * *Zone file* - contains all DNS records
    * *Name servers* - servers that resolve DNS queries 
        * *Authoritative* - the customer can update DNS records
        * *Non-Authoritative* - the customer can NOT udpate DNS records
    * *TLD* - *Top Level Domain* - highest level domain
        * .com, .us, .in, .gov, .org
    * *SLD* - *Second Level Domain* - second highest level domain
        * .amazon.com, google.com
    * example `https://api.www.example.com.` from the right:
        * `.` - root of all domain names
        * `.com` - the TLD
        * `.example` - the SLD
        * `.www` - sub domain
        * `.api` sub domain
        * `api.www.example.com.` - domain name
        * `http` - used protocol
        * `https://api.www.example.com.` - **FQDN** - **Fully Qualified Domain Name**
* **How it works**
    1. `Web Browser` -> `Local DNS Server` -> resolve `example.com`
        * `Local DNS Server` - assigned and managed by your company or ISP dynamically
    1. `Local DNS Server` -> `Root DNS Server` -> resolve `example.com`
        * `Root DNS Server` - managed by ICANN
    1. `Root DNS Server` -> `Local DNS Server` -> i don't know but i know the `.com` TLD DNS server which is `.com NS 1.2.3.4`
    1. `Local DNS Server` -> `TLD DNS Server(.com)` -> resolve `example.com`
        * `TLD DNS Server` - managed by IANA(branch of ICANN)
    1. `TLD DNS Server(.com)` -> `Local DNS Server` -> i don't know but i know the `example.com` SLD domain server which is `.com NS 5.6.7.8`
    1. `Local DNS Server` -> `SLD DNS Server(example.com)` -> resolve `example.com`
        * `SLD DNS Server` - managed by Domain Registrar
    1. `SLD DNS Server(example.com)` -> `Local DNS Server` -> it is `example.com IP 9.10.11.12`
    1. `Local DNS Server` -> `Web Browser` -> i cached the IP for `example.com`, use `IP 9.10.11.12` to access it


&nbsp;
# Route 53
* **Route 53** - a highly available, scalable, fully managed and Authoritative DNS and Domain Registrar
    * ability to check the health of resources
    * only AWS service which provides 100% availability SLA
    * *53* is a reference to traditional DNS port used by DNS services
* **Records** - define how yo want to route traffic for a domain
    * each records contains:
        * *Domain/subdomain Name* - the domain or subdomain the rule is applied to
        * *Record Type* - a key that represents a parameter of the DNS 
            * `A` (must know) - maps a hostname to IPv4
            * `AAAA` (must know) - maps a hostname to IPv6
            * `CNAME` (must know) - maps a hostname to another hostname
                * target domain name must have an A or AAAA record
                * cammpt create CMAME for top node of a DNS namespace like `example.com` (Zone Apex )
            * `NS` (must know) - Name Servers for the Hosted Zone, they can respond to your DNS querries
                * controls how traffic is routed to domain
            * `CAA` - 
            * `DS` - 
            * `MX` - 
            * `NAPTR` - 
            * `PTR` - 
            * `SOA` - 
            * `TXT` - 
            * `SPF` - 
            * `SRV` - 
        * *Value*
        * *Routing Policy* - how Route 53 responds to values
        * *TTL* - amount of time record is cached
* **Hosted Zones** - a container for records that define how to route traffic to domain/subdomains
    * **Public Hosted Zones** - contain records that specify how to route internet traffic) public domain names
    * **Private Hosted Zones** - contain records the specify routing for traffic within VPC/s (private domain names)
    * cost in AWS is $0.50 per month per hosted zone


&nbsp;
# VPC
* **VPC** - **Virtually Private Cloud** - provisions a logically isolated section of the AWS cloud. A `private network` to deploy resources. Regional meaning each region has its own. One and only one `default VPC` is created for each region.
    * **Subnets** - allows partitioning your VPC network (AZ resource)
        * `public subnet` - accessible from the internet
        * `private subnet` - not accessible from the internet
        * `Route Tables` - define access to the internet and between subnets
    * **VPC CIDR Range** - a range of ips allowed within the VPC
    * **Internet Gateways** - helps VPC instances connect with the internet through a gateway. Two-way communication - inbound and outbound. Defined at VPC level
    * **NAT Gateways** - AWS-managed NAT that provide internet access to the internet for `private subnets` while allowing them to remain private
        * **NAT Instance** - self-managed NAT
        * this works by creating a NAT gateway in a `public subnet` and providing a route to the NAT gateway to a `private subnet`
    * **Security Groups** - firewall that controls traffic to and from an **ENI**(Elastic Network Interface) or an [EC2](#ec2) instance
        * can only have `ALLOW` rules
        * can reference ip addresses or other SG's
    * **Network ACL (NACL)** - a firewall which controls traffic from and to a subnet
        * contains `ALLOW` and `DENY` rules
        * are attached to **Subnets**
        * rules only include IP addresses
    * **VPC Flow Logs** - captures information about all traffic going into interface
        * types:
            * `VPC` Flow Logs
            * `Subnet` Flow Logs
            * `Elastic Network Interface` Flow Logs
        * helps monitoring and troubleshooting connectivity
            * subnets to internet
            * subnets to subnets
            * internet to subnets
        * can be stored in [S3](#s3) or [CloudWatch](#cloudwatch) logs
    * **VPC Peering** - connect two VPC, privately using AWS network, to make them behave as if they where in the same network
        * `must not` have overlapping CIDR (IP address range)
        * `not transitive` - requires establishing for each VPC-to-VPC connection seperatly
    * **VPC Endpoints** - allow to connect AWS Services using `private network` in place of public network
        * enhanced security and lower latency for AWS services
        * enables private access from within a VPC to AWS services
        * `Amazon S3` and `DynamoDB` are the only services that have a `VPC Gateway Enpoint` - all the other services have an interface endpoint(with a private IP)
    * **Site to Site VPN** - connect on-premise VPN to AWS
        * automatically encrypted connection
        * over `public internet`
        * does not have access to VPC Endpoints from VPN
    * **Direct Connect (DX)**
        * physical connection between on-premise and AWS
        * private, secure and fast
        * over `private network`
        * takes at least a month to establish
        * does not have access to VPC Endpoints from DX
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


## Network ACL vs SGs
|Security Group|Netowrk ACL|
|--------------|-----------|
|Instance levbel|Subnet level|
|`ALLOW` rules|`ALLOW` and `DENY` rules|
|`stateful` - return traffic automatically allowed|`stateless` - return traffic explicitly allows|
|`All rules` evaluated before allowing traffic|Rules processed in `number order` to allow traffic|
|Requires specifying the SG on launch or afterwards|Automatically applied to all instances|


&nbsp;
# S3
* **S3** - **Simple Cloud Storage** - infinitely scaling storage
    * one of the main building blocks of AWS


## Athena
* **Atherna** - serverless query service to perform analytics against S3 Objects
    * use standard SQL to query files on S3
    * supports `CSV`, `JSON`, `ORC`, `Avro`, and `Parquet` (built on Presto)
    * can build reporting on top of Atherna through `Amazon QuickSight`
    * **pricing** - around $5.00 per TB of data scanned
    * use compressed or columnar data for cost-savings due to less scanning
    * use cases include: `BI`, `Analytics`, `Reporting`, `Analyze & Query VPC Flow logs`, `ELB logs`, `CloudTrail trails` 


&nbsp;
# CloudFront
* **AWS CloudFront** - a distributed CDN with features like:
    * improves `read performance`, through caching content on edge locations
        * edge location include 216 Point of Presence globally (new ones are added constantly)
    * `DDOS protection` 
    * integration with `Shield`
    * `AWS Web Application Firewall`
    * can expose external HTTPS and can talk to internal HTTPS backends
    * `GEO Restriction` - allows restricting access to your distribution
        * whitelist approved countries
        * blacklist users from specific countries
        * country is determined using a 3rd party Geo-IP database
        * use case: Copyright Laws to control access to content
* **CloudFront Origins**
    * *S3 Bucket*:
        * for distributing files and caching at edge
        * enhanced security with CloudFront **Origin Access Identity** = **OAI**
            * **OAI** - an IAM role for CloudFront origin
        * CloudFront as an ingress (to upload files to S3)
    * *Custom Origin (HTTP)* - can be anything that support HTTP
        * ALB
            * EC2 allows SG of ALB
            * ALB must be public
            * SG for ALB must allow public IP of edge locations - find all on https://d7uri8nf7uskq.cloudfront.net/tools/
        * EC2
            * must be public
            * security group must allow IP of edge locations - find all on https://d7uri8nf7uskq.cloudfront.net/tools/list-cloudfront-ips
        * S3 website - an S3 bucket enabled as a static S3 website
        * any HTTP backend
* **How it works**
    * `Client` ---- `HTTP Request` ----> `CloudFront (Edge Location)`
    * `CloudFront (Edge Location)` ---- Forwards request with query strings / headers ----> `Origin`
    * `Origin` ---- Sends response ----> `CloudFront (Edge Location)`
    * `CloudFront (Edge Location)` - caches response
    * `CloudFront (Edge Location)` ----> sends response ----> `Client`
* **CloudFront vs S3 Cross Region Replication**
    * *CloudFront*
        * global edge network
        * files are cached for a TTL (maybe a day)
        * great for static content that must be available everywhere
    * *S3 Cross Region Replication*
        * must be setup for each region you want replication to happen
        * files are updated in near real-time
        * read only
        * great for dynamic content that needs to be available at low-latency in few regions


&nbsp;
# Docker
* **Docker** - software development platform to deploy apps
    * apps are packaged in `containers` that can be run on any OS
    * apps run the same regardless of where they run
        * any machine
        * no compatibility issues
        * predictable behavior
        * less work
        * easier to maintain and deploy
        * works with any language, any OS, any technology
    * use cases: microservices, lif-and-shift apps from on-premises to Cloud
    * `containers` are build from `images` which are application like templates
    * `images` are stored on Docker Repositories like:
        * **Docker Hub** - https://hub.docker.com
            * public repository
            * contains base images for many technologies
        * **Amazon ECR**
            * private repository
            * public repository also available on *Amazon ECR Public Gallery* https://gallery.ecr.aws
    * works similar to virtualization technology:
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


&nbsp;
# ECS
* **Elastic Container Service** - a docker container management platform
    * when you launch an Docker container on AWS you launch an **ECS Task** on an **ECS Cluster**
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

&nbsp;
# Fargate
* **AWS Fargate** - an ECS launch type with the following characteristics:
    * you do `not provision` the infrastructure (no EC2 instances to manage)
    * its all `serverless`
    * create `task` definitions
    * AWS runs ECS Tasks based on `CPU / RAM` you need
    * to scale just increase number of tasks

&nbsp;
# ECR
* **Elastic Container Registry** - managed docker registry
    * `stores` and `manages` Docker `images` on AWS
    * `private` and `public` repositories on Amazon ECR Public Gallery (https://gallery.ecr.aws)
    * fully integrated with `ECS`
    * backed by Amazon `S3`
    * access controlled though `IAM Roles`
    * suuports image vulnerability scanning, versioning, image tags, image lifecycle

``` bash
# command to get credentials to login ECR
aws ecr get-login-password --region {eu-west-1} | docker login --username AWS --password-stdin {aws_account_id}.dkr.ecr.{eu-west-1}.amazonaws.com

# docker commands
docker push {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
docker pull {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
```


&nbsp;
# EKS
* **Elastic Kubernetes Service** - is managed Kubernetes cluster
    * **Kubernetes** - open-source system for automatic deployment, scaling and management of containerized applications
    * alternative to [ECS](#ecs) with a different API
    * support [EC2 Launch Type](#ecs) and [Fargate](#fargate) Launch Type
    * use case: company already using Kubernetes and wants to migrate
    * Kubernetes is cloud-agnostic
    * example -> deploy `eks nodes` on multi-AZ. Nodes can be managed by ASG. Each node runs `eks pods` which run cotnainerized applications. Can attach a private or public load balancer to `eks worker node`


&nbsp;
# Elastic Beanstalk
* **AWS Elastic Beanstalk** - a managed orchestration service for deploying applications allong with many AWS services and features
    * developer problems on AWS include:
        * managing infrastructure
        * deploying code
        * configuring DB, load balancers and other services
        * scaling concerns
        * most web apps have the same architecture
        * just want to run code possibly, consistently across different applications and environments
    * uses all popular AWS services such as EC2, ASG, ELB, RDS and more
    * managed so:
        * automatically handles capacity provisioning
        * load balancing
        * scaling
        * application health monitoring
        * instance configuration
        * and more
    * focus on the code but still have full control over configuraiton of services
    * Elastic Beanstalk is free, but you pay for bundled services
* **Components**
    * **Application** - collection Elastic Beastalk components (env, versions, configurations,...)
    * **Application Version** - iteration of application code
    * **Environment** - collection of AWS resources running an application version 
        * only one version per environment
        * *Tiers*
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
    * Packet Builder
    * Single Container Docker
    * Multi-container Docker
    * Preconfigured Docker
    * if not supported you can write a custom platform (advanced)

&nbsp;    
# CICD
* **CICD** is essential because it allows:
    * automatic deployment
    * error-free deployment
    * testing before deployment
    * control over which environments it ends up in
    * manual approval where needed
* **Continuous Integration** - developers `push code` to a repository which `triggers` a testing / build server to `check the code` as soon as its pushed. Developer gets `feedback` on any `test | checks` that have `passed | failed`
    * find bugs early, fix bugs early
    * deliver faster as code is tested
    * deploy often
    * developers are unblocked
* **Continuous Delivery** - ensures software can be `released reliably` whenever needed. When software passes tests it is deployed to a `deployment server` which deploys it to target environments
    * ensure deployments happen often and quick
    * release often thanks to automation
    * this requires automatic deployment tools
* technology stack for CICD:
    1. `Code` -> [AWS CodeCommit](#codecommit) or [Github](https://github.com/)
    1. `Build` -> [AWS CodeBuild](#codebuild) or [Jenkins CI](https://www.jenkins.io/)
    1. `Test` -> [AWS CodeBuild](#codebuild) or [Jenkins CI](https://www.jenkins.io/)
    1. `Deploy` -> [AWS CodeDeploy](#codedeploy)
    1. `Orchestrate` the above services with [AWS CodePipeline](#codepipeline)



&nbsp;
# CodeCommit
* **AWS CodeCommit** - distributed git server
    * `version control` allows understanding various changes that happened to code over time
    * allows code roll back
    * benefits are:
        * collaborate with other developers
        * makse sure the code is backed-up somewhere
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

&nbsp;
# CodePipeline
* **AWS CodePipeline** - visual workflow tool for orchestrating CICD
    * a typical workflow involves services for the following stages:
        * *Source* - use CodeCommit, ECR, S3, Bitbucket, GitHub for a pipeline source
        * *Build* - integrate with CodeBuild, Jenkins, CloudBees, TeamCity or more to build your code
        * *Test* - integrate with CodeBuild, AWS Device Farm and 3rd party tools to test your software
        * *Deploy* - deploy to CodeDeploy, ElasticBeanstalk, CLoudFormation, ECS, S3 and more
    * each stage can have sequential actions and/or parallel actions
    * manual approval can be defined at any stage
* **Artifacts** - different software items created during the pipeline and stored in S3 Buckets
* **Troubleshooting**:
    * state changes are visible in console 
    * configure CloudWatch Events (Amazon EventBridge) for failed pipelines, cancelled stages
    * make sure pipeline has the appropriate `IAM Service Role` attached
    * if CodePipeline fails at any stage, the pipeline is stopped and you are informed in console
    * AWS CloudTrail can be used to audit AWS API calls


&nbsp;
# CodeBuild
* **AWS CodeBuild** - tool for building and testing our code
    * *build instructions* - a series of instructions that are performed to build the target artifact. Defined in a `buildspec.yml` which needs to be in the root of the project
        * you can also defined build instructions in Console but its not a best practice
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


&nbsp;
# CodeDeploy
* **AWS CodeDeploy** - managed service for deploying your code automatically
    * similar tools: Ansible, Terraform, Chef, Puppet
* **To make it work**
    * each EC2 instance or On-premise server to which you deploy MUST be running the `CodeDeploy Agent`
        * `CodeDeploy Agents` are continuously polling AWS CodeDeploy for work to do
        * if there is work to do the Application and `appspec.yml` is pulled
        * target environmentrun the deployment instructions in `appspec.yml`
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


&nbsp;
# CodeStar
* **AWS CodeStar** - tool for managing software development activities in one place
    * integrates GitHub, CodeCommit, CodeBuild, CodeDeploy, CloudFormation, CodePipeline, CloudWatch and more
    * allows quickly creating CICD ready projects for EC2, Lambda, ElasticBeanstalk
    * supported languages: `C#`, `Go`, `HTML5`, `Java`, `Node.js`, `PHP`, `Python`, `Ruby`
    * has an `issue tracking` tool that integrates with `Jira` and `GitHub Issues`
    * integrates with `Cloud9` to obtain a web IDE (not in all regions)
    * one dashboard to view all components
    * free service, only pay for used services
    * limited customization in codestar, but can customize the tools in their dedicated dashboards

&nbsp;
# CodeArtifact
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


&nbsp;
# CodeGuru
* **AWS CodeGuru** - tool for `automating code reviews` and providing `application performance recommendations` using Machine Learning and automated reasoning based
    * based on millions of code reviews on 1000s of open-source and Amazon repositories
    * provides two functionalities:
        * **CodeGuru Reviewer** - automatic code reviews for static code analysis (development). This happens when the code is pushed to the repository. Identifies:
            * critical issues
            * security vulnerabilities
            * hard-to-find bugs
            * coding best practices
            * resource leaks
            * input validation
        * **CodeGuru Profiler** - visibility/recommendations about application performance during runtime (production)
            * helps understand `runtime behavior`
            * detects and optimizes expensive lines of code (`code innefficiencies`) `pre-prod` in terms of key resources like CPU, RAM, Storage
            * `measures` performance and cost `indicators` in `prod` and suggests improvements
            * improves application `performance`
            * `decrease` compute `costs`
            * provides `heap summary` (identify which objects use up memory)
            * anomaly detection
            * supports applications running on AWS or on-premise
            * minimal overhead
    * supports: `Java` and `Python`
    * integrates with `GitHub`, `BitBucket`, `AWS CodeCommit`



&nbsp;
# CloudFormation
* **AWS CloudFormation** - an IaC solution that gives developers and businesses an easy way to automate creation, provisioning and management of AWS or third-party compute resources
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


&nbsp;
# CloudWatch
* **AWS CloudWatch** - a monitoring and management service that provides insights on AWS, hybrid, on-premise infrastructure and resources
    * provides:
        * `Metrics` - collect and track key metrics
        * `Logs` - collect, monitor, analyze, store log files
        * `Events` - send notifications when certain events happen in your AWS
        * `Alarms`- react in real-time to metrics / events
* **Why is monitoring important**
    * `application latency`: is it increasing over time?
    * `application outages`: customer experience should never be degraded
    * `troubleshooting` and `remediation`
    * prevent issues before they happen
    * enhance `performance` and `cost`
    * `trends` - scaling patterns
    * learning how your system works in real-time and improving it



&nbsp;
# EventBridge
* **AWS EventBridge** -


&nbsp;
# X-Ray
* **AWS X-Ray** - service for analyzing and debugging distributed applications
    * provides:
        * troubleshooting application performance(bottlenecks) and errors
        * distributed tracing of microservices
        * understand dependencies in microservice architecture
        * pinpoint service issues
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
    
    


&nbsp;
# CloudTrail
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



&nbsp;
# SQS
* **SQS** - **Simple Queue Service** - a queue messaging service for asynchronous communcation
    * oldest offering - over 10 years
* **Messaging** - a method for peer-to-peer communication between software components. Communication can be:
    * *Synchronous* - when one application directly communicates with another
    * *Asynchronous / Event based* - applications communicate with one another through a middleware that queues and transports data
* a **Queue** contains **Messages**
    * a **Producer** sends messages into the Queue
        * you can have multiple producers
        * use SDK (`SendMessage API`)
        * message is `persisted` in SQS until consumer deletes it
    * a **Consumer** will poll messages from a queue
        * you can have multiple consumers that poll and process messages in parallel
        * run on EC2 instances, servers, AWS Lambda
        * can receive up to 10 messages at a time
        * polls and processes messages
        * deletes the messages using `DeleteMessage API` to make sure other Consumers dont poll it
        * can be integrated with [ASG](#asg)
            * scaling can be done based on metric controlled by CloudWatch -> `QueueLength` -> `ApproximateNumberOfMessages` which then uses a CloudWatch Alarm to scale the ASG
        * SQS is great for decoupling between application tiers
    * a queue decouples producers from consumers
* **Security**
    * **Encryption**
        * in-flight encryption using HTTPS API
        * at-rest encryption using KMS keys
        * client-side encryption if the client want to perform enc/dec itself
    * **Access Controls**: IAM policies to regulate access to the SQS API
    * **SQS Access Policies**: 
        * for cross-account access to SQS Queus
            * specify the external AWS Account in the `Principal` key:value pair in the `Statement`
            * example below
        * for allowing other services (SNS, S3) to write to an SQS queue
            * for example if you want a message produced upon upload to S3 Bucket
            * example policy below
* **DLQ (Dead-Letter Queue)**
    * if a consumer fails to process a message it goes back into the Queue -> but what if the message cant be processed?
    * a `threshold` can be sent of how many times a message can go back to the queue -> `MaximumReceives`
    * if `MaximumReceives` is exceeded, the msg goes to DLQ
    * messages are stored in the DLQ for debugging
    * DLQ should have a very high retention period
    * **Redrive to Source** -> allows to redrive the messages from the DLQ to Source queue after fixing the Consumer code, for reprocessing
* **Message Visibility Timeout**
    * after message is polled it becomes invisible to other consumers - how long this lasts is the `Visiblity Timeout`
    * by default `Visibility Timeout` is 30 seconds
    * if the message is not processed within 30 seconds it becomes visible to other Consumers
    * a consumer could call the `ChangeMessageVisiblity API` to extend Visibility Timeout
    * if `high` Visibility Timeout and consumer crashes, re-processing will take a lot of time
    * if `low` Visiblity Timeout, risk of duplicates
* two types of queues:
    * **Standard Queue**:
        * fully managed
        * unlimited throughput, unlimited number of messages in queue
        * retention: 
            * default: `4 days`
            * max: `14 days`
        * message size: max `256KB`
        * at least once delivery -> on occasion can have duplicate messages
        * best effort ordering -> can have out of order messages
    * **FIFO Queue** - 

### Access Policy For Cross Account Access
``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {"AWS": ["1234567890123"]},
            "Action": ["sqs:ReceiveMessage"],
            "Resource": "arn:aws:sqs:us-east-1:444455556666:queue1"
        }
    ]
}
```

### Access Policy For S3 Bucket
``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": { "AWS": "*" },
            "Action": ["sqs:SendMessage"],
            "Resource": "arn:aws:sqs:us-east-1:444455556666:queue1",
            "Condition": {
                "ArnLike": { "aws:SourceArn": "arn:aws:s3:*:*:bucket1" },
                "StringEquals": {"aws:SourceAccount": "<bucket1_owner_account_id>"}
            }
        }
    ]
}

```



&nbsp;
# SNS
* **SNS** - **Simple Notification Service** - a pub-sub messaging service for asynchronous communcation


&nbsp;
# Kinesis
* **AWS Kinesis** - a real-time streaming messaging service for asynchronous communcation

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

&nbsp;
# Lambda
* **AWS Lambda** - computing service that runs code in response to events and automatically provisions infrastructure required by that code
    * virtual functions
    * no servers to manage
    * short executions -> limited by time
    * run on demand
    * scaling is automated
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
    * you can test your lambda withing the AWS console
    * lambda settings:
        * `Code` - contains the code that is run, allows making changes and deploying them
            * information on the runtime
            * the **Lambda Handler** which is the function within the code that is invoked when the lambda is run
        * `Test` - allows running the lambda with a preset input and presents output and metrics(runtime, memory used)
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

## Integration with ALB
* to expose lambda as HTTP(S) endpoint
* Lambda must be registered in target group
* HTTP request gets transformed into a JSON document. This includes:
    * query string parameters as key value pairs
    * headers as key-value pairs
    * body and encoding
* lambda returns a JSON document that is converted to HTTP by ALB. It includes:
    * status code and description
    * headers as key/value pairs
    * body & isBase64Encoded
* multi-header values can be set on ALB settings which will convert multiheader values into an array
    * `http://example.com/path?name=foo&name=bar` -> `"name": ["foo", "bar"]`

### Request
``` json
{
    "requestContext": {
        "elb": {
            "targetGroupArn": "arn:aws:elasticloadbalancing:us-east-2:12312314124"
        }
    },
    "httpMethod": "GET",
    "path": "/lambda",
    "queryStringParameters": {
        "query": "1234ABCD"
    },
    "header": {
        "connection": "keep-alive",
        "host": "lambda-alb-123456.us-east-2.elb.amazonaws.com",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "x-amzn-trace-id": "Root=1-1231213-123123asda13123",
        "x-forwarded-for": "72.12.153.123",
        "x-forwarded-port": "80",
        "x-forwarded-proto": "http"
    },
    "body": "",
    "isBase64Encoded": false
}
```

### Response
``` json
{
    "statusCode": 200,
    "statusDescription": "200 OK",
    "headers": {
        "Content-Type": "text/html; charset=utf-8"
    },
    "body": "<h1>Hello world!</h1>",
    "isBase64Encoded": false
}
```

## Lambda at Edge
* Lambda@Edge allows deploying Lambda function alongside your CloudFront CDN
* this allows:
    * building more responsive applications
    * you dont manage servers, lambda is deployed globally
    * customize the CDN content
    * pay only for what you use
* change CloudFront requests and responses:
    * `viewer request` after CloudFront recieves a request from a viewer
    * `origin request` before CloudFront forwards the request to the origin
    * `origin response` after CloudFront receives the response from the origin
    * `viewer response` before CloudFront forwards the response to the viewer
    * can generate responses to the viewer without sending request to origin
* use cases:
    * Website Security and Privacy
    * Dynamic Web Application at the Edge
    * Search Engine Optimization
    * Intelligently Route Across Origins and Data Center
    * Bot Mitigation at the Edge
    * Real-time Image Transformation
    * A/B Testing
    * User Authentication and Authorization
    * User Prioritization
    * User Tracking and Analytics

## Integration with S3
* Lambdas can be hooked into specific S3 events such as:
    * S3:ObjectCreated
    * S3:ObjectRemoved
    * S3:ObjectRestore
    * S3:Replication
* its possible to react only to a filtered list of objects like `*.csv`
* 3 approaches:
    * event -> S3 -> SNS -> SQS -> Lambda
    * event -> S3 -> SQS -> Lambda
    * event -> S3 -> async Lambda -> SQS (DLQ)
* S3 events notification usually deliver events in seconds by sometimes can take a minute or longer
* if two writes are to single `non-versioned` object this might produce only one event notification
* to ensure that each event produces a notification make sure to enable `versioning` on your bucket
* should know:
    * lambda needs to be in same region as bucket
    * producing events is done in the `event notification` section of S3 configurations
    * need to allow S3 bucket to invoke lambda function


## Event Source Mapping
* lambda can poll event sources to retrieve records from:
    * Kinesis Data Streams
    * SQS & SQS FIFO queue
    * DynamoDB Streams
* Lambda is invoked synchronously
* internally Lambda uses an `event source mapper` to `poll` and get the `batch` from the source. Two types of mappers:
    * `Streams` - applies to Kinesis Data Streams and DynamoDB Streams
        * creates an iterator for each shard
        * processes items in order at shard level
        * can configure to start: with new items, from the beginning of the shard or from a timestamp
        * processed items `are not` removed from the stream
        * `low traffic stream` use case: use batch window to accumulate records before processing
        * `high traffic steam` use case: process multiple batche sin parallel:
            * up to 10 batches per shard
            * in order processing guarenteed for each partition key
        * **Error Handling** if function returns error, the entire batch is reprocessed until success or items in batch expire
            * to ensure in-order processing, affected shard processing is paused until error is resolved
            * you can manage this by configuring event source mapping to:
                * discard old events
                * restrict the number of retries
                * split batch on error (to workaround Lambda timeout issues)
            * discarded events can go to a Destination
    * `Queues` - applies to SQS & SQS FIFO
        * event source mapping will poll SQS (`Long Polling` - holds a connection until information becomes available)
        * you can specify a batch size (1-10 messages)
        * **recommendation**: Set the queue visibility timout to 6x the timout of you Lambda function
        * **recommnedation**: use `DLQ` - but set it up on the SQS queue, not lambda (only for async invocation), OR use `Lambda destination` for failures
        * Lambda suppports in-order processing for FIFO queues
            * scaling up to the number of active message groups
        * standard queue does not guarentee in-order processing
            * lambda scales up to process a standard queue as quicky as possible
        * **Error Handling** - batches are returned to queue as individual items and might be processed in different grouping(different batches)
            * on occasion event source mapping might receive the same item twice, even if no function error occured -> have INDEPOTENT processing
        * successfully processed items are deleted from the queue
        * you can configure a Queue to send items to DLQ if cant be processed
* **Event Source Mapper Scaling**
    * `Streams` -> 1 Lambda invocation per stream shard OR up to 10 batches processed per shard simultaneously with parallelization
    * `SQS Standard` -> Lambda adds 60 more instances per minute to scale up, with up to 1000 batches processed simultaneously
    * `SQS FIFO` -> messages with the same GroupID will be processed in order, scales to the number of active message groups
* to integrate Lambda with Event Source add a `Trigger` in the Lambda function overview
* give the Lambda the `AWSLambdaSQSQueueExecutionRole` to give access to SQS queues

## Lambda Destinations
* can configure Lambda to send result to a destination
    * **Asynchronous invocation** - define destinations for `success` and `fail` as:
        * SNS
        * SQS
        * Lambda
        * Amazon EventBridge bus
    * **Event Source mapping** - only for discarded event batches. Targets are:
        * SQS
        * SNS
* use Lambda Destinations instead of the DLQ for failures on async invocations
    * Destinations allow for more target services and are enabled for success as well

## Lambda Permissions
* Lambda Execution Role: IAM roles:
    * grants Lambda permission to invoke other services
    * `AWSLambdaBasicExecutionRole` - upload logs to CloudWatch
    * `AWSLambdaKinesisExecutionRole` - Read from Kinesis
    * `AWSLambdaDynamoDBExecutionRole` - Read from DynamoDB Streams
    * `AWSLambdaSQSQueueExecutionRole` - Read from SQS
    * `AWSLambdaVPCAccessExecutionRole` - deploy lambda funciton in VPC
    * `AWSXRayDaemonWriteAccess` - upload trace data to X-Ray
    * using `event source mapping` to invoke Lambda functions, the execution role is used to read event data
    * **best practice**: create one Lambda Execution Role per function
* Lambda Resource Based Policies
    * give account and services permission to use your Lambda
    * an IAM principal can access Lambda:
        * if policy attached to principal authorizes it(user access)
        * if resource-based policy authorizes it(service access)
    * when AWS Service like Amazon S3 calls your Lambda function, the resource based policy gives it access

## Lambda Environment Variables
* allows adjusting function behavior based on `string` key-value pairs without changing code
* env variables are available inside the code
* lambda service adds its own system environment variables as well
* environemnt variables can be encrypted with KMS -> `secret values`
    * can use a Lmabda service key or own CMK for encryption
* in python use the `os` library to `os.getenv("env_name")` like in any other Python project

## Lambda Monitoring
* all Lambda execution logs are stored in CloudWatch Logs if authorized by IAM policy in execution role
* **CloudWatch Metrics**:
    * Lambda metrics displayed in AWS CloudWatch Metrics
    * metrics include: `Invocations`, `Durations`, `Concurrent Executions`, `Error count`, `Success Rates`, `Throttles`, `Async Delivery Failures`, `Iterator Age (Streams)`(lag time for stream reading)
* **X-Ray**
    * enable *Active Tracing* in Lambda Function
    * runs X-Ray daemon for you
    * use AWS X-Ray SDK in Code
    * ensure Lambda Function has appropriate IAM Execution Role - `AWSXRayDaemonWriteAccess`
    * if needed set environment variables to communicate with X-Ray:
        * `_X_AMZN_TRACE_ID` - contains the tracing header
        * `AWS_XRAY_CONTEXT_MISSING` - by default, LOG_ERROR
        * `AWS_XRAY_DAEMON_ADDRESS` - the X-Ray Daemon IP_ADDRESS:PORT

## Lambda in VPC
* by default Lambda functions are launched in an AWS-owned VPC which is outside of your VPC - they don't have access to resources within your VPC
* to enable access to VPC you must:
    * define VPC ID
    * Subnets
    * Security Groups
    * attach `AWSLambdaVPCAccessExecutionRole` to Lambda
* Lambda creates an ENI in your subnets
    * behind the scenes the Lambda function will go through the ENI to connect to resources
* internet access:
    * Lambda functions `outside of VPC` have access to public internet
    * Lambda functions `within VPC` don't have access to public internet
    * deploying a Lambda function in a public subnet does not grant it access to public internet acess or a public IP
    * to give a Lambda `within VPC` access to public internet you must deploy in a `private subnet` and give it access through a `NAT Gateway / Instance`
* you can use VPC endpoints to privately access AWS services without a NAT
* CloudWatch logs work irrespective of Lambda network configurations

## Lambda Performance
* **RAM**:
    * from 128MB to 10GB in 1MB increments
    * vCPU cannot be set separately, it scales with RAM
    * at 1792 MB a function has the equivalent of one full VCPU
    * after 1792 MB, you get more than one CPU and need to use multi-threading to benefit from it
* **CPU**:
    * if app is computation heavy(CPU-bound) must increase RAM
* **Timeout**: by default 3 sec, with maximum of 900 sec(15minutes)
    * its good to get this right to make sure you can retry and analyze error without using unnecessary compute power
* **Lambda Execution Context**:
    * temporary runtime env that initializes any external dependencies of your lambda code
    * good for database connections, HTTP clients, SDK clients...
    * is maintained in anticipation of another Lambda function invocation
    * next function invocations can "re-use" an execution context improving performance
    * execution context includes `/tmp` directory which is a space where you can write files accessible throughout executions
    * **Best practice** - anything that takes time to initialize should be put *outside of the function handler*
* **/tmp**
    * if lambda function requires big files to work store here
    * if disk space is required use `/tmp`
    * max size is 512 MB
    * directory content remains when execution context is frozen, providing transient cache
    * for persistent storage use for example S3

```python
import os

# this establishes the db connection once and reuses it accross invocations!!
DB_URL = os.getenv("DB_URL")
db_client = db.connect("DB_URL")

def get_user_handler(event, context):
    user = db_client.get(user_id = event["user_id"])
    return user

```

## Lambda Concurrency
* Concurrency limit by default 1000 for a region
    * to get a higher limit you need to create a Support Ticket requesting it
* **reserved concurrency** at function level is a limit for concurrent executions
    * each invocation over the limit wil trigger a `Throttle`
    * Throttle behavior:
        * sync invocation -> return `ThrottleError` - `429`
        * async invocation -> retry automatically and then go to DLQ
* concurrency issues(if not reserved)
    * sync: all executions reserved for one invoker, other invokers will get throttled
    * async: 
        * for throttling errors(429) and system errors(5**) lambda returns event to queue and attempts to run for up to 6h
        * retry interval increases exponentially from 1s to up to 5min
* **Cold Starts** - new instance, run for the first time
    * code needs to be loaded and code outside the handler run(init)
    * if init is large(deps, SDK, code) process can take some time
    * first request served by new instances has higher latency then the rest
* **Provisioned Concurrency**
    * concurrency is allocated in advance
    * cold start never happens and all invocations have low latency
    * Application Auto Scaling can manage concurrency (schedule or target utilization)
* Note: cold starts in VPC have been dramatically reduced in Oct & Nov 2019

## Lambda External Dependencies
* you need to install packages alongside your code and zip it together 
* depending on language:
    * `Node.js` -> npm & "node_modules" directory
    * `Python` -> pip --target options
    * `Java` -> include .jar files
* upload straight to Lambda if less than 50MB, else to S3 first
* `native libraries` need to be compiled on Amazon Linux first
* `AWS SDK` comes by default with every lambda function
* can upload the lambda with dependencies from ZIP file or S3 object

``` bash
# have nodejs / npm isntall beforehand
npm install aws-xray-sdk

# set proper permissions for project files
chmod a+r *

# you need to have the zip command available
zip -r function.zip .

# create the Lambda function using the CLI
aws lambda create-function --zip-file fileb://function.zip --function-name lambda-xray-with-dependencies --runtime nodejs14.x --handler index.handler --role arb:aws:iam::123132:role/BasicLambdaPolicy
```

## Lambda and CloudFormation
* inline in CloudFormation template
    * use `Code.ZipFile` property
    * cannot include function dependencies
* through S3
    * must store Lambda zip in S3
    * must refer zip location in CloudFromation template:
        * S3 Buket
        * S3Key: full path to zip
        * S3ObjectVersion: if versioned bucket (`recommended`)
    * if you update the code in S3, but don't update S3 Bukcer, S3 Key or S3ObjectVerion, CloudFormation wont update your function -> why versioning is recommended
* sharing Lambda in S3 across accounts:
    * enable on bukcet through **Bucket Policy** -> Allow Principal: [Accounts ID...]
    * create Execution Role for CloudFormation in another account that allows get & list to S3 Bucket

### Inline example
``` yaml
AWSTemplateFormatVerions: '2010-09-09'
Description: Lambda function inline
Resources:
    primer:
        Type: AWS::Lambda::Function
        Properties:
            Runtime: python3.x
            Role: arn:aws:iam::123456789012:role/lambda-role
            Handler: index.handler
            Code:
                ZipFile: |
                    import os

                    DB_URL = os.getenv("DB_URL)
                    db_client = db.connect(DB_URL)
```

### S3 Example
``` yaml
AWSTemplateFormatVerions: '2010-09-09'
Description: Lambda from S3
Resources:
    Function:
        Type: AWS::Lambda::Function
        Properties:
            Handler: index.handler
            Role: arn:aws:iam::123456789012:role/lambda-role
            Code:
                S3Bucket: my-bucket
                S3Key: function.zip
                S3ObjectVersion: String
            Runtime: nodejs12.x
```

## Lambda Layers
* enable Custom Runtimes:
    * C++ -> https://github.com/awslabs/aws-lambda-cpp
    * Rust -> https://github.com/awslabs/aws-lambda-rust-runtime
* `Externalize Dependencies` for reusing -> funciton can reference layers which contain deps
    * layers can be referenced by multiple lambda functions

## Lambda Container Images
* allows deploying Lmabda functions as container images of up to 10GB from ECR
* pack complex and/or large dependencies in a container
* base image must implement `Lambda Runtime API`
* can create own lambda base image
* test containers locally using the `Lambda Runtime Interface Emulator`
* unified workflow to build apps

``` Dockerfile
FROM amazon/aws-lambda-nodejs:12

COPY app.js package*.json ./
RUN npm install
CMD ["app.lambdaHandler"]
```

## Lambda Versions and Aliases
* when you work on a Lambda function we work on $LATEST
* when a Lambda function is published we create a **version**
    * versions are immutable
    * version have increasing version numbers
    * each version has its own ARN
    * a version containers `code` and `configuration`
    * each version of the Lambda function can be accessed
* an **alias** is a pointer to a Lambda function version
    * for example a `dev`, `test` `prod` alias and have them point at different lambda versions
    * aliases are mutable
    * enable Blue / Green deployment by assigning weights to lambda functions
    * enable stable configuration of our event triggers / destinations
    * an alias has its own ARN
    * an alias cannot reference another alias



## Lambda Limits and Best Practices
* **Limits**:
    * are per region
    * execution:
        * *memory allocation*: 128 MB - 10 GB (1 MB increments)
        * *maximum execution time*: 900 sec (15 min)
        * *environment variables*: up to 4 KB
        * *disk capacity in function container* (/tmp): 512 MB
        * *concurrency executions*: 1000 (can be increased)
    * deployment:
        * *compressed deployment size* (.zip): 50 MB
        * *uncompressed deployment size* (code + deps): 250 MB
        * can load other files at startup from /tmp
        * *environment variables*: 5 KB
* **Best Practices**:
    * perform heavy-duty work outside of your function handler
        * initialize AWS SDK
        * connect to databases
        * pull in dependencies or datasets
    * use environment variables:
        * database connection strings
        * S3 bucket conecction string
        * don't put these values in the code 
        * encrypt with KMS for `passwords` and other sensitive values
    * minimize deployment package size to its runtime necessities
        * break down function if need be
        * remember Lambda limits
        * use Layers where necessary
    * avoid using recursive code -> never have a Lambda function call itself


    

&nbsp;
# Dynamo DB
* **DynamoDB** - 


&nbsp;
# API Gateway
* **AWS API Gateway** - 



&nbsp;
# SAM
* **SAM** - **Serverless Application Model** - 

* **SAR** - **Serverless Application Repository** - managed repository for serverless applications
    * applications are packaged using **SAM**
    * allows building and publishing applications that can be re-used by organizations
        * share publically
        * share with specific AWS accounts
    * prevents duplicate work
    * application settings and behaviour can be customized using `Environment variables`

&nbsp;
# Cloud Development Kit
* **CDK** - **Cloud Development Kit** -



&nbsp;
# Cognito
* **AWS Cognito** - 
* **Cognito User Pools** - 
* **Cognito Identity Pools** -
* **Cognito Sync** -


&nbsp;
# Step Functions
* **Step Functions** - 

&nbsp;
# AppSync
* **AppSynce** - 



&nbsp;
# KMS
* **KMS** - **Key Management System** - 



&nbsp;
# SSM
* **SSM** - **Systems Manager Parameter Store** - 


&nbsp;
# Secrets Manager
* **Secrets Manager** - newer service meant for storing secrets
    * can force rotation of secrets every X days
    * automate rotating of secrets
    * integration with Amazon RDS
    * secrets are encrypted using KMS
    * mostly for RDS integration
    * more expensive than SSM
    * Lambda function provided for RDS, Redshift, DocumentDB
*  **Types of scerects**
    * most consist of name and password and are used for *Databases*
        * links the user and pass to the DB
        * rotates 
    * *Other type of secrets* are JSON files containing multiple key:value pairs


&nbsp;
# Other Services
* **AWS SES** - **AWS Simple Email Service** -
* **DB Summary** - 
* **ACM** - **Amazon Certificate Manager** - 
* **AWS Cloud Map** - 
* **FIS** - **Fault Injection Simulator** -