# AWS Certified Solutions Architect Professional

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.


#### Table of contents
* [Identity & Federation](#identity-&-federation)
    * [IAM](#iam)
        * [IAM - Access Analyzer](#iam---access-analyzer)
    * [STS](#sts)
    * [Identity Federation & Cognito](#identity-federation-&-cognito)
    * [AWS Directory Services](#aws-directory-services)
    * [AWS Organizations](#aws-organizations)
        * [AWS Organizations - Policies](#aws-organizations---policies)
    * [AWS IAM Identity Center](#aws-iam-identity-center)
    * [AWS Control Tower](#aws-control-tower)
    * [AWS Resource Access Manager - RAM](#aws-resource-access-manager---ram)
    * [Identity & Federation - Summary](#identity-&-federation---summary)
* [Security](#security)
    * [CloudTrail](#cloudtrail)
        * [CloudTrail - SA Pro](#cloudtrail---sa-pro)
    * [KMS](#kms)
    * [Parameter Store](#parameter-store)
    * [Secrets Manager](#secrets-manager)
    * [RDS Security](#rds-security)
    * [SSL Encryption, SNI & MITM](#ssl-encryption,-sni-&-mitm)
    * [AWS Certificate Manager - ACM](#aws-certificate-manager---acm)
    * [CloudHSM](#cloudhsm)
    * [Solution Architecture - SSL on ELB](#solution-architecture---ssl-on-elb)
    * [S3 - Security](#s3---security)
    * [S3 - Access Points](#s3---access-points)
    * [S3 - Multi-Region Access Points](#s3---multi-region-access-points)
    * [S3 Object Lambda](#s3-object-lambda)
    * [DDoS & AWS Shield](#ddos-&-aws-shield)
    * [AWS WAF](#aws-waf)
    * [AWS Firewall Manager](#aws-firewall-manager)
    * [Blocking an IP Address](#blocking-an-ip-address)
    * [Amazon Inspector](#amazon-inspector)
    * [AWS Config](#aws-config)
    * [AWS Managed Logs](#aws-managed-logs)
    * [Amazon GuardDuty](#amazon-guardduty)
    * [IAM Advanced Policies](#iam-advanced-policies)
    * [EC2 Instance Connect](#ec2-instance-connect)
    * [AWS Security Hub](#aws-security-hub)
    * [Amazon Detective](#amazon-detective)
* [Compute & Load Balancing](#compute-&-load-balancing)
    * [EC2](#ec2)
    * [High Performance Computing (HPC)](#high-performance-computing-(hpc))
    * [Auto Scaling](#auto-scaling)
        * [Auto Scaling - Update Strategies](#auto-scaling---update-strategies)
    * [Spot Instances & Spot Fleet](#spot-instances-&-spot-fleet)
    * [Amazon ECS](#amazon-ecs)
    * [Amazon ECR](#amazon-ecr)
    * [Amazon EKS](#amazon-eks)
    * [AWS App Runner](#aws-app-runner)
    * [ECS Anywhere & EKS Anywhere](#ecs-anywhere-&-eks-anywhere)
    * [AWS Lambda](#aws-lambda)
    * [Elastic Load Balancers](#elastic-load-balancers)
    * [API Gateway](#api-gateway)
    * [AWS AppSync](#aws-appsync)
    * [Route 53](#route-53)
        * [Route 53 - Resolvers & Hybrid DNS](#route-53---resolvers-&-hybrid-dns)
    * [AWS Global Accelerator](#aws-global-accelerator)
    * [Comparison of Solution Architectures](#comparison-of-solution-architectures)
    * [AWS Outposts](#aws-outposts)
    * [AWS WaveLength](#aws-wavelength)
    * [AWS Local Zones](#aws-local-zones)
* [Storage](#storage)
    * [EBS & Local Instance Store](#ebs-&-local-instance-store)
    * [EFS](#efs)
    * [S3](#s3)
        * [S3 - Storage Class Analysis](#s3---storage-class-analysis)
        * [S3 - Storage Lens](#s3---storage-lens)
        * [S3 - Solution Architecture](#s3---solution-architecture)
    * [Amazon FSx](#amazon-fsx)
        * [Amazon FSx - Solution Architectures](#amazon-fsx---solution-architectures)
    * [AWS DataSync](#aws-datasync)
        * [AWS DataSync - Solution Architectures](#aws-datasync---solution-architectures)
    * [AWS Transfer Family](#aws-transfer-family)
    * [AWS Storage Services - Price Comparison](#aws-storage-services---price-comparison)
* [Caching](#caching)
    * [CloudFront](#cloudfront)
    * [Lambda@Edge - CloudFront Functions](#lambda@edge---cloudFront-functions)
    * [Lambda@Edge - Reduce Latency](#lambda@edge---reduce-latency)
    * [ElastiCache](#elasticache)
    * [Handling Extreme Rates](#handling-extreme-rates)
* [Databases](#databases)
    * [DynamoDB](#dynamodb)
    * [Amazon OpenSearch](#amazon-opensearch)
    * [RDS](#rds)
    * [Aurora](#aurora)
* [Service Communication](#service-communication)
    * [Step Functions](#step-functions)
    * [SQS](#sqs)
    * [Amazon MQ](#amazon-mq)
    * [SNS](#sns)
        * [SNS - SQS Fan Out Pattern](#sns---sqs-fan-out-pattern)
        * [SNS - Message Delivery Retries](#sns---message-delivery-retries)
* [Data Engineering](#data-engineering)
    * [Kinesis Data Streams](#kinesis-data-streams)
    * [Kinesis Data Firehose](#kinesis-data-firehose)
    * [Kinesis Data Analytics](#kinesis-data-analytics)
    * [Streaming Architectures](#streaming-architectures)
    * [Amazon MSK](#amazon-msk)
    * [AWS Batch](#aws-batch)
    * [EMR](#emr)
    * [Running Jobs on AWS](#running-jobs-on-aws)
    * [AWS Glue](#aws-glue)
    * [Redshit](#redshit)
    * [DocumentDB](#documentdb)
    * [Timestream](#timestream)
    * [Athena](#athena)
    * [QuickSight](#quicksight)
    * [Big Data Architecture](#big-data-architecture)
* [Monitoring](#monitoring)
    * [CloudWatch](#cloudwatch)
        * [CloudWatch - Logs](#cloudwatch---logs)
    * [EventBridge](#eventbridge)
    * [X-Ray](#x-ray)
    * [AWS Personal Health Dashboard](#aws-personal-health-dashboard)
* [Deployment & Instance Management](#deployment-&-instance-management)
    * [Elastic Beanstalk](#elastic-beanstalk)
    * [CodeDeploy](#codedeploy)
    * [CloudFormation](#cloudformation)
    * [Service Catalog](#service-catalog)
    * [SAM - Serverless Application Model](#sam---serverless-application-model)
    * [CDK](#cdk)
    * [Systems Manager - SSM](#systems-manager---ssm)
    * [AWS Cloud Map](#aws-cloud-map)
* [Cost Control](#cost-control)
    * [Cost Allocation Tags](#cost-allocation-tags)
    * [AWS Tag Editor](#aws-tag-editor)
    * [Trusted Advisor](#trusted-advisor)
    * [AWS Service Quotas](#aws-service-quotas)
    * [EC2 Launch Types & Savings Plan](#ec2-launch-types-&-savings-plan)
    * [S3 Cost Savings](#s3-cost-savings)
    * [S3 Storage Classes - Reminder](#s3-storage-classes---reminder)
    * [AWS Budgets & Cost Explorer](#aws-budgets-&-cost-explorer)
    * [AWS Compute Optimizer](#aws-compute-optimizer)
    * [EC2 Reserved Instance](#ec2-reserved-instance)
* [Migration](#migration)
    * [Cloud Migrations - The 6R](#cloud-migrations---the-6r)
    * [Storage Gateway](#storage-gateway)
        * [Storage Gateway - Advanced Concepts](#storage-gateway---advanced-concepts)
    * [Snow Family](#snow-family)
        * [Snow Family - Improving Performance](#snow-family---improving-performance)
    * [AWS DMS](#aws-dms)
    * [AWS CART - Cloud Adoption Readiness Tool](#aws-cart---cloud-adoption-readiness-tool)
    * [Disaster Recovery](#disaster-recovery)
    * [AWS FIS - Fault Injection Simulator](#aws-fis---fault-injection-simulator)
    * [VM Migrations Services](#vm-migrations-services)
    * [AWS Migration Evaluator](#aws-migration-evaluator)
    * [AWS Backup](#aws-backup)
* [VPC](#vpc)
    * [VPC Peering](#vpc-peering)
    * [Transit Gateway](#transit-gateway)
    * [VPC Endpoints](#vpc-endpoints)
        * [VPC Endpoints - Policies](#vpc-endpoints---policies)
    * [PrivateLink](#privatelink)
    * [AWS S2S VPN](#aws-s2s-vpn)
    * [AWS Client VPN](#aws-client-vpn)
    * [Direct Connect](#direct-connect)
    * [On-Premises Redundant Connections](#on-premises-redundant-connections)
    * [VPC Flow Logs](#vpc-flow-logs)
    * [AWS Network Firewall](#aws-network-firewall)
* [Machine Learning](#machine-learning)
    * [Rekognition](#rekognition)
    * [Transcribe](#transcribe)
    * [Polly](#polly)
    * [Translate](#translate)
    * [Lex + Connect](#lex-+-connect)
    * [Comprehend](#comprehend)
    * [Comprehend Medical](#comprehend-medical)
    * [SageMaker](#sagemaker)
    * [Forecast](#forecast)
    * [Kendra](#kendra)
    * [Personalize](#personalize)
    * [Textract](#textract)
    * [Machine Learning - Summary](#machine-learning---summary)
* [Other Services](#other-services)
    * [CICD](#cicd)
    * [CodeGuru](#codeguru)
    * [Alexa for Business, Lex & Connect](#alexa-for-business,-lex-&-connect)
    * [Kinesis Video Streams](#kinesis-video-streams)
    * [AWS WorkSpaces](#aws-workspaces)
    * [AppStream 2.0](#appstream-2.0)
    * [AWS Device Farm](#aws-device-farm)
    * [Amazon Macie](#amazon-macie)
    * [Amazon SES](#amazon-ses)
    * [EC2 Image Builder](#ec2-image-builder)
    * [AWS IoT Core](#aws-iot-core)
    * [Other Services - Summary](#other-services---summary)





&nbsp;
# Identity & Federation


## IAM


### IAM - Access Analyzer


## STS


## Identity Federation & Cognito


## AWS Directory Services


## AWS Organizations


### AWS Organizations - Policies


## AWS IAM Identity Center


## AWS Control Tower


## AWS Resource Access Manager - RAM


## Identity & Federation - Summary


&nbsp;
# Security


## CloudTrail


### CloudTrail - SA Pro


## KMS


## Parameter Store


## Secrets Manager


## RDS Security


## SSL Encryption, SNI & MITM


## AWS Certificate Manager - ACM


## CloudHSM


## Solution Architecture - SSL on ELB


## S3 - Security


## S3 - Access Points


## S3 - Multi-Region Access Points


## S3 Object Lambda


## DDoS & AWS Shield


## AWS WAF


## AWS Firewall Manager


## Blocking an IP Address


## Amazon Inspector


## AWS Config


## AWS Managed Logs


## Amazon GuardDuty


## IAM Advanced Policies


## EC2 Instance Connect


## AWS Security Hub


## Amazon Detective



&nbsp;
# Compute & Load Balancing


## EC2


## High Performance Computing (HPC)


## Auto Scaling


### Auto Scaling - Update Strategies


## Spot Instances & Spot Fleet


## Amazon ECS


## Amazon ECR


## Amazon EKS


## AWS App Runner


## ECS Anywhere & EKS Anywhere


## AWS Lambda


## Elastic Load Balancers


## API Gateway


## AWS AppSync


## Route 53


### Route 53 - Resolvers & Hybrid DNS


## AWS Global Accelerator


## Comparison of Solution Architectures


## AWS Outposts


## AWS WaveLength


## AWS Local Zones


&nbsp;
# Storage


## EBS & Local Instance Store


## EFS


## S3


### S3 - Storage Class Analysis


### S3 - Storage Lens


### S3 - Solution Architecture


## Amazon FSx


### Amazon FSx - Solution Architectures


## AWS DataSync


### AWS DataSync - Solution Architectures


## AWS Transfer Family


## AWS Storage Services - Price Comparison



&nbsp;
# Caching


## CloudFront


## Lambda@Edge - CloudFront Functions


## Lambda@Edge - Reduce Latency


## ElastiCache


## Handling Extreme Rates


&nbsp;
# Databases


## DynamoDB


## Amazon OpenSearch


## RDS


## Aurora


&nbsp;
# Service Communication


## Step Functions


## SQS


## Amazon MQ


## SNS


### SNS - SQS Fan Out Pattern


### SNS - Message Delivery Retries



&nbsp;
# Data Engineering


## Kinesis Data Streams


## Kinesis Data Firehose


## Kinesis Data Analytics


## Streaming Architectures


## Amazon MSK


## AWS Batch


## EMR


## Running Jobs on AWS


## AWS Glue


## Redshit


## DocumentDB


## Timestream


## Athena


## QuickSight


## Big Data Architecture



&nbsp;
# Monitoring


## CloudWatch


### CloudWatch - Logs


## EventBridge


## X-Ray


## AWS Personal Health Dashboard


&nbsp;
# Deployment & Instance Management


## Elastic Beanstalk


## CodeDeploy


## CloudFormation


## Service Catalog


## SAM - Serverless Application Model


## CDK


## Systems Manager - SSM


## AWS Cloud Map


&nbsp;
# Cost Control


## Cost Allocation Tags


## AWS Tag Editor


## Trusted Advisor


## AWS Service Quotas


## EC2 Launch Types & Savings Plan


## S3 Cost Savings


## S3 Storage Classes - Reminder


## AWS Budgets & Cost Explorer


## AWS Compute Optimizer


## EC2 Reserved Instance


&nbsp;
# Migration


## Cloud Migrations - The 6R


## Storage Gateway


### Storage Gateway - Advanced Concepts


## Snow Family


### Snow Family - Improving Performance


## AWS DMS


## AWS CART - Cloud Adoption Readiness Tool


## Disaster Recovery


## AWS FIS - Fault Injection Simulator


## VM Migrations Services


## AWS Migration Evaluator


## AWS Backup


&nbsp;
# VPC


## VPC Peering


## Transit Gateway


## VPC Endpoints


### VPC Endpoints - Policies


## PrivateLink


## AWS S2S VPN


## AWS Client VPN


## Direct Connect


## On-Premises Redundant Connections


## VPC Flow Logs


## AWS Network Firewall



&nbsp;
# Machine Learning


## Rekognition


## Transcribe


## Polly


## Translate


## Lex + Connect


## Comprehend


## Comprehend Medical


## SageMaker


## Forecast


## Kendra


## Personalize


## Textract


## Machine Learning - Summary


&nbsp;
# Other Services


## CICD


## CodeGuru


## Alexa for Business, Lex & Connect


## Kinesis Video Streams


## AWS WorkSpaces


## AppStream 2.0


## AWS Device Farm


## Amazon Macie


## Amazon SES


## EC2 Image Builder


## AWS IoT Core


## Other Services - Summary
