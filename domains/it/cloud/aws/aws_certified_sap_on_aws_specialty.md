# AWS Certified SAP on AWS Specialty

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.


#### Table of contents
* [Key Services for SAP](#key-services-for-sap)
    * [VPC](#vpc)
    * [EC2](#ec2)
    * [CloudWatch](#cloudwatch)
    * [CloudFormation](#cloudformation)
    * [EC2 - Storage Options](#ec2---storage-options)
* [EC2](#ec2)
    * [EC2 - Purchasing Options](#ec2---purchasing-options)
    * [EC2 - Instance Metadata](#ec2---instance-metadata)
    * [EC2 - Bootstrapping with User Data](#ec2---bootstrapping-with-user-data)
    * [EC2 - Instance Profile](#ec2---instance-profile)
    * [EC2 - Features](#ec2---features)
    * [EC2 - Enhanced Networking](#ec2---enhanced-networking)
    * [EC2 - Placement Groups](#ec2---placement-groups)
    * [EC2 - CloudWatch Agent](#ec2---cloudwatch-agent)
    * [AWS Data Provider for SAP](#aws-data-provider-for-sap)
    * [Other AWS Compute Services](#other-aws-compute-services)
* [EBS](#ebs)
    * [EBS - Volume Types](#ebs---volume-types)
    * [EBS - Snapshots](#ebs---snapshots)
    * [EBS - Features](#ebs---features)
    * [EBS - Optimized Instances](#ebs---optimized-instances)
* [EFS - SAP Workloads](#efs---sap-workloads)
* [FSx - SAP Workloads](#fsx---sap-workloads)
* [S3](#s3)
    * [S3 - SAP Workloads](#s3---sap-workloads)
    * [S3 - Security & Encryption](#s3---security-&-encryption)
    * [S3 - Storage Classes](#s3---storage-classes)
    * [S3 - Class Analysis & Lifecycle Policies](#s3---class-analysis-&-lifecycle-policies)
    * [S3 - Bucket Versioning](#s3---bucket-versioning)
    * [S3 - Replication - SRR & CRR](#s3---replication---srr-&-crr)
    * [S3 - Features](#s3---features)
* [Other Storage](#other-storage)
    * [AWS Snow Family](#aws-snow-family)
    * [AWS Storage Gateway](#aws-storage-gateway)
    * [AWS Backup](#aws-backup)
    * [AWS Transfer Family](#aws-transfer-family)
    * [AWS DataSync](#aws-datasync)
* [AWS Networking, Scaling & Security](#aws-networking,-scaling-&-security)
    * [VPC - IP Addressing](#vpc---ip-addressing)
    * [VPC - Route Tables, Subnets & NACLs](#vpc---route-tables,-subnets-&-nacls)
    * [VPC - Security Groups](#vpc---security-groups)
    * [VPC - Endpoints](#vpc---endpoints)
    * [VPC - Peering, VPN, DC & TGW](#vpc---peering,-vpn,-dc-&-tgw)
    * [VPC - Flow Logs](#vpc---flow-logs)
    * [VPC - Traffic Mirroring](#vpc---traffic-mirroring)
    * [Route 53](#route-53)
    * [ASG](#asg)
    * [ELB](#elb)
    * [EC2 - Resizing](#ec2---resizing)
    * [AWS Global Accelerator & CloudFront](#aws-global-accelerator-&-cloudfront)
    * [IAM](#iam)
        * [IAM - Identity Center](#iam---identity-center)
        * [IAM - Roles, Policies & SCPs](#iam---roles,-policies-&-scps)
        * [IAM - Pass Role to Service](#iam---pass-role-to-service)
        * [IAM - Policy Evaluation Logic](#iam---policy-evaluation-logic)
        * [IAM - Best Practices](#iam---best-practices)
    * [KMS, SSM Parameter Store & Secrets Manager](#kms,-ssm-parameter-store-&-secrets-manager)
    * [Other AWS Security Services](#other-aws-security-services)
    * [AWS Monitoring & Auditing](#aws-monitoring-&-auditing)
    * [AWS Organizations & Control Tower](#aws-organizations-&-control-tower)
* [Automation, DevOps & Other Services](#automation,-devops-&-other-services)
    * [AWS Systems Manager](#aws-systems-manager)
    * [AppStream 2.0](#appstream-2.0)
    * [Elastic Beanstalk & AWS CI/CD](#elastic-beanstalk-&-aws-ci/cd)
    * [Serverless on AWS](#serverless-on-aws)
    * [Purpose-built Databases on AWS](#purpose-built-databases-on-aws)
    * [AWS CloudFormation 101](#aws-cloudformation-101)
    * [SAP System Refresh on AWS](#sap-system-refresh-on-aws)
    * [SAP Automation Tools on AWS](#sap-automation-tools-on-aws)
* [SAP Workloads on AWS](#sap-workloads-on-aws)
    * [AWS Launch Wizard for SAP](#aws-launch-wizard-for-sap)
    * [Connecting to SAP Systems](#connecting-to-sap-systems)
    * [SAP Software, Licenses & Hardware Keys on AWS](#sap-software,-licenses-&-hardware-keys-on-aws)
* [Designing SAP Workloads](#designing-sap-workloads)
    * [SAP - VPC Patterns](#sap---vpc-patterns)
    * [SAP - VPC Best Practices](#sap---vpc-best-practices)
    * [SAP - VPC Subnet Zoning Patterns](#sap---vpc-subnet-zoning-patterns)
    * [SAP - HA & DR on AWS](#sap---ha-&-dr-on-aws)
    * [SAP - HA & DR Best Practices](#sap---ha-&-dr-best-practices)
    * [SAP - Single-AZ Deployment Patterns](#sap---single-az-deployment-patterns)
    * [SAP - Multi-AZ Deployment Patterns](#sap---multi-az-deployment-patterns)
    * [Overlay IP & Clustering](#overlay-ip-&-clustering)
    * [DR for SAP Workloads](#dr-for-sap-workloads)
    * [SAP - DR Architectures](#sap---dr-architectures)
    * [SAP HANA - HA & DR](#sap-hana---ha-&-dr)
    * [AWS Cost Optimization](#aws-cost-optimization)
* [SAP & SAP HANA Deep Dive](#sap-&-sap-hana-deep-dive)
    * [SAP - NetWeaver & HANA Architecture](#sap---netweaver-&-hana-architecture)
    * [SAP - HANA 101](#sap---hana-101)
    * [SAP - Memory Management](#sap---memory-management)
    * [SAP HANA - Backup & Recovery Options](#sap-hana---backup-&-recovery-options)
    * [SAP HANA - AWS Backint Agent](#sap-hana---aws-backint-agent)
    * [SAP HANA - System Replication (HSR)](#sap-hana---system-replication-(hsr))
    * [SAP HANA - Dynamic Tiering on AWS](#sap-hana---dynamic-tiering-on-aws)
* [Operations & Maintenance of SAP Workloads on AWS](#operations-&-maintenance-of-sap-workloads-on-aws)
    * [Monitoring SAP on AWS](#monitoring-sap-on-aws)
    * [SAP - AWS Support Prerequisites](#sap---aws-support-prerequisites)
    * [SAP - Backup Options on AWS](#sap---backup-options-on-aws)
* [SAP to AWS Migration](#sap-to-aws-migration)
    * [Lift & Shift (Rehost) Migration](#lift-&-shift-(rehost)-migration)
    * [Refactor & Re-platform on HANA](#refactor-&-re-platform-on-hana)
    * [Migrations from Big-Endian Platforms](#migrations-from-big-endian-platforms)
    * [S4/HANA Transformation](#s4/hana-transformation)
    * [Zero Downtime Option (ZDO) of Sum](#zero-downtime-option-(zdo)-of-sum)
    * [SAP to AWS Migration - Best Practices](#sap-to-aws-migration---best-practices)



&nbsp;
# Key Services for SAP


## VPC


## EC2


## CloudWatch


## CloudFormation


## EC2 - Storage Options


&nbsp;
# EC2


## EC2 - Purchasing Options


## EC2 - Instance Metadata


## EC2 - Bootstrapping with User Data


## EC2 - Instance Profile


## EC2 - Features


## EC2 - Enhanced Networking


## EC2 - Placement Groups


## EC2 - CloudWatch Agent


## AWS Data Provider for SAP


## Other AWS Compute Services


&nbsp;
# EBS


## EBS - Volume Types


## EBS - Snapshots


## EBS - Features


## EBS - Optimized Instances


&nbsp;
# EFS - SAP Workloads


&nbsp;
# FSx - SAP Workloads


&nbsp;
# S3


## S3 - SAP Workloads


## S3 - Security & Encryption


## S3 - Storage Classes


## S3 - Class Analysis & Lifecycle Policies


## S3 - Bucket Versioning


## S3 - Replication - SRR & CRR


## S3 - Features



&nbsp;
# Other Storage


## AWS Snow Family


## AWS Storage Gateway


## AWS Backup


## AWS Transfer Family


## AWS DataSync


&nbsp;
# AWS Networking, Scaling & Security


## VPC - IP Addressing


## VPC - Route Tables, Subnets & NACLs


## VPC - Security Groups


## VPC - Endpoints


## VPC - Peering, VPN, DC & TGW


## VPC - Flow Logs


## VPC - Traffic Mirroring


## Route 53


## ASG


## ELB


## EC2 - Resizing


## AWS Global Accelerator & CloudFront


## IAM


### IAM - Identity Center


### IAM - Roles, Policies & SCPs


### IAM - Pass Role to Service


### IAM - Policy Evaluation Logic


### IAM - Best Practices


## KMS, SSM Parameter Store & Secrets Manager


## Other AWS Security Services


## AWS Monitoring & Auditing


## AWS Organizations & Control Tower



&nbsp;
# Automation, DevOps & Other Services


## AWS Systems Manager


## AppStream 2.0


## Elastic Beanstalk & AWS CI/CD


## Serverless on AWS


## Purpose-built Databases on AWS


## AWS CloudFormation 101


## SAP System Refresh on AWS


## SAP Automation Tools on AWS


&nbsp;
# SAP Workloads on AWS


## AWS Launch Wizard for SAP


## Connecting to SAP Systems


## SAP Software, Licenses & Hardware Keys on AWS



&nbsp;
# Designing SAP Workloads


## SAP - VPC Patterns


## SAP - VPC Best Practices


## SAP - VPC Subnet Zoning Patterns


## SAP - HA & DR on AWS


## SAP - HA & DR Best Practices


## SAP - Single-AZ Deployment Patterns


## SAP - Multi-AZ Deployment Patterns


## Overlay IP & Clustering


## DR for SAP Workloads


## SAP - DR Architectures


## SAP HANA - HA & DR


## AWS Cost Optimization


&nbsp;
# SAP & SAP HANA Deep Dive


## SAP - NetWeaver & HANA Architecture


## SAP - HANA 101


## SAP - Memory Management


## SAP HANA - Backup & Recovery Options


## SAP HANA - AWS Backint Agent


## SAP HANA - System Replication (HSR)


## SAP HANA - Dynamic Tiering on AWS



&nbsp;
# Operations & Maintenance of SAP Workloads on AWS


## Monitoring SAP on AWS


## SAP - AWS Support Prerequisites


## SAP - Backup Options on AWS



&nbsp;
# SAP to AWS Migration


## Lift & Shift (Rehost) Migration


## Refactor & Re-platform on HANA


## Migrations from Big-Endian Platforms


## S4/HANA Transformation


## Zero Downtime Option (ZDO) of Sum


## SAP to AWS Migration - Best Practices
