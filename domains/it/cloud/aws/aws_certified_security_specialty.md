# AWS Certified Security Specialty

#### Table of contents

* [Incident Response](#incident-response)
    * [GuardDuty](#guardduty)
        * [GuardDuty - Advanced](#guardduty---advanced)
    * [Security Hub](#security-hub)
        * [Security Hub - Advanced](#security-hub---advanced)
    * [Detective](#detective)
    * [Penetration Testing](#penetration-testing)
    * [Compromised AWS Resources](#compromised-aws-resources)
    * [Compromised AWS Credentials](#compromised-aws-credentials)
    * [EC2 - Key Pairs](#ec2---key-pairs)
    * [EC2 - Instance Connect](#ec2---instance-connect)
    * [EC2 - Serial Console](#ec2---serial-console)
    * [EC2 - Lost Key Pair](#ec2---lost-key-pair)
    * [EC2 - Resource Tool](#ec2---resource-tool)
    * [Acceptable Use Policy (AUP)](#acceptable-use-policy-(aup))
    * [AWS Abuse Report](#aws-abuse-report)
* [Logging And Monitoring](#logging-and-monitoring)
    * [Amazon Inspector](#amazon-inspector)
    * [Logging in AWS](#logging-in-aws)
    * [Systems Manager (SSM)](#systems-manager-(ssm))
        * [SSM - Resource Groups](#ssm---resource-groups)
        * [SSM - Documents](#ssm---documents)
        * [SSM - Run Command](#ssm---run-command)
        * [SSM - Automations](#ssm---automations)
        * [SSM - Inventory & State Manager](#ssm---inventory-&-state-manager)
        * [SSM - Patch Manager](#ssm---patch-manager)
        * [SSM - Session Manager](#ssm---session-manager)
        * [SSM - Parameter Store](#ssm---parameter-store)
    * [CloudWatch - Unified CloudWatch Agent](#cloudwatch---unified-cloudWatch-agent)
    * [CloudWatch - Logs](#cloudwatch---logs)
    * [CloudWatch - Alarms](#cloudwatch---alarms)
    * [CloudWatch - Contributor Insights](#cloudwatch---contributor-insights)
    * [EventBridge](#eventbridge)
    * [Athena](#athena)
    * [Config](#config)
        * [Config - Aggregators](#config---aggregators)
    * [Trusted Advisor](#trusted-advisor)
    * [CloudTrail](#cloudtrail)
        * [CloudTrail - SysOps](#cloudtrail---sysops)
    * [Monitoring Account Activity](#monitoring-account-activity)
    * [Amazon Macie](#amazon-macie)
    * [S3 - Event Notifications](#s3---event-notifications)
    * [VPC Flow Logs](#vpc-flow-logs)
    * [VPC Traffic Monitoring](#vpc-traffic-monitoring)
    * [OpenSearch](#opensearch)
    * [Audit Manager](#audit-manager)
* [Infrastructure Security](#infrastructure-security)
    * [Bastion Hosts](#bastion-hosts)
    * [Site-to-Site VPN and Gateways](#site-to-site-vpn-and-gateways)
    * [Client VPN](#client-vpn)
    * [VPC - DNS Resolution](#vpc---dns-resolution)
    * [VPC - Endpoints](#vpc---endpoints)
    * [AWS PrivateLink](#aws-privatelink)
    * [NACL & Security Groups](#nacl-&-security-groups)
    * [CloudFront](#cloudfront)
        * [CloudFront - OAC & OAI](#cloudfront---oac-&-oai)
        * [CloudFront - Other](#cloudfront---other)
    * [WAF](#waf)
    * [Shield](#shield)
    * [Firewall Manager](#firewall-manager)
    * [DDOS Protection](#ddos-protection)
    * [API Gateway](#api-gateway)
        * [API Gateway - Advanced](#api-gateway---advanced)
    * [AWS Artifact](#aws-artifact)
    * [Route 53 - Query Logging](#route-53---query-logging)
    * [Route 53 - DNSSEC](#route-53---dnssec)
    * [AWS Network Firewall](#aws-network-firewall)
        * [AWS Network Firewall - Advanced](#aws-network-firewall---advanced)
    * [Amazon SES](#amazon-ses)
* [Identity & Access Management](#identity-&-access-management)
    * [IAM - Policies In Depth](#iam---policies-in-depth)
    * [IAM - Condition Operators](#iam---condition-operators)
    * [IAM - Global Condition Context Keys](#iam---global-condition-context-keys)
    * [IAM - Permission Boundaries](#iam---permission-boundaries)
    * [IAM - Policy Evaluation Logic](#iam---policy-evaluation-logic)
    * [IAM - Identity-Based vs Resource-Based Policies](#iam---identity-based-vs-resource-based-policies)
    * [IAM - ABAC](#iam---abac)
    * [IAM - MFA](#iam---mfa)
    * [IAM - Credentials Report](#iam---credentials-report)
    * [IAM - Roles and PassRole to Services](#iam---roles-and-passrole-to-services)
    * [STS & Cross Account Access](#sts-&-cross-account-access)
        * [STS - Version 1 & 2](#sts---version-1-&-2)
        * [STS - External ID](#sts---external-id)
        * [STS - Revoking IAM Role Temporary Security Credentials](#sts---revoking-iam-role-temporary-security-credentials)
    * [Organizations](#organizations)
        * [Organizations - IAM Policies & Tag Policies](#organizations---iam-policies-&-tag-policies)
        * [Organizations - Sample SCPs](#organizations---sample-scps)
    * [EC2 - Instance Metadata](#ec2---instance-metadata)
    * [S3 - Authorization Evaluation Process](#s3---Authorization-Evaluation-Process)
    * [S3 - Cross Account Access and Canned ACL](#s3---cross-account-access-and-canned-acl)
    * [S3 - Sample S3 Bucket Policies](#s3---sample-s3-bucket-policies)
    * [S3 - VPC Endpoint Strategy](#s3---vpc-endpoint-strategy)
    * [S3 - Regain Access to Locked S3 Bucket](#s3---regain-access-to-locked-s3-bucket)
    * [S3 - Block Public Access Settings](#s3---block-public-access-settings)
    * [S3 - Access Points](#s3---access-points)
    * [S3 - Glacier Vault Lock and Object Lock](#s3---glacier-vault-lock-and-object-lock)
    * [S3 - CORS](#s3---cors)
    * [Cognito User Pools](#cognito-user-pools)
    * [Cognito Identity Pools](#cognito-identity-pools)  
        * [Cognito User Pools - User Groups](#cognito-user-pools---user-groups)
        * [Cognito & Identity Federation](#cognito-&-identity-federation)
    * [IAM Identity Center](#iam-identity-center)
    * [AWS Directory Services](#aws-directory-services)
    * [AWS Control Tower](#aws-control-tower)
* [Data Protection](#data-protection)
    * [Encryption](#encryption)
    * [CloudHSM](#cloudhsm)
        * [CloudHSM - Advanced](#cloudhsm---advanced)
    * [KMS](#kms)
        * [KMS - Multi Region Key](#kms---multi-region-key)
        * [KMS - Envelope Encryption](#kms---envelope-encryption)
        * [KMS - Key Rotation](#kms---key-rotation)
        * [KMS - Key Deletion](#kms---key-deletion)
        * [KMS - Key Policies](#kms---key-policies)
        * [KMS - Grants](#kms---grants)
        * [KMS - Condition Keys](#kms---condition-keys)
        * [KMS - Key Policies Evaluation Process](#kms---key-policies-evaluation-process)
        * [KMS - Key Cross-Account Access](#kms---key-cross-account-access)
        * [KMS - Asymmetric Encryption](#kms---asymmetric-encryption)
        * [KMS - API Calls Limits and Data Key Caching](#kms---api-calls-limits-and-data-key-caching)
        * [KMS - EBS](#kms---ebs)
        * [KMS - ABAC](#kms---abac)
        * [KMS - Parameter Store](#kms---parameter-store)
    * [Secrets Manager](#secrets-manager)
        * [Secrets Manager - Advanced](#secrets-manager---advanced)
    * [S3 - Encryption](#s3---encryption)
    * [S3 - Default Encryption](#s3---default-encryption)
    * [S3 - Bucket Key](#s3---bucket-key)
    * [S3 - Large File Upload with KMS](#s3---large-file-upload-with-kms)
    * [S3 - Batch Encryption](#s3---batch-encryption)
    * [ELB](#ELB)
        * [ELB - NLB](#elb---nlb)
        * [ELB - NLB - Advanced](#elb---nlb---advanced)
        * [ELB - Sticky Sessions](#elb---sticky-sessions)
        * [ELB - SSL Certificates](#elb---ssl-certificates)
        * [ELB - SSL Certificates - Advanced](#elb---ssl-certificates---advanced)
        * [NLB - TLS Listeners](#nlb---tls-listeners)
    * [ACM](#acm)
        * [ACM - Advanced](#acm---advanced)
* [Other Services](#other-services)
    * [Direct Connect](#direct-connect)
    * [ECR](#ecr)
        * [ECR - Security](#ecr---security)
    * [ECS - Secret Management](#ecs---secret-management)
    * [EKS - Concepts](#eks---concepts)
    * [Lambda - Security](#lambda---security)
    * [Lambda - VPC](#lambda---vpc)
    * [AWS Signer](#aws-signer)
    * [Glue](#glue)
        * [Glue - Security](#glue---security)
    * [Workspaces Security](#workspaces-security)
    * [ASG - Instance Refresh](#asg---instance-refresh)
    * [EBS - Data Volume Wiping](#ebs---data-volume-wiping)
    * [CloudShell](#cloudshell)
    * [RDS & Aurora Security](#rds-&-aurora-security)
    * [IoT Core Security](#iot-core-security)
    * [EC2 - Image Builder](#ec2---image-builder)
    * [EC2 - Image Builder - Troubleshooting](#ec2---image-builder---troubleshooting)
    * [Redshift - Security](#redshift---security)




&nbsp;
# Incident Response

## GuardDuty
* **AWS GuardDuty** - intelligent threat discovery to protect AWS Account 
    * uses ML, anomaly detection, 3rd party data
    * 30 day trial
    * enabling is only one click
    * looks at:
        * `CloudTrail Events Logs` - unusual API calls, unauthorized deployments
            * `Cloudtrail Management Events` -> create VPC subnet, create trail, ...
            * `CloudTrail S3 Data Events` -> get object, list object, delete object
        * `VPC Flow Logs` - unusual traffic / ip address
        * `DNS Logs` - compromised EC2 instances sending encoded data within DNS queries
        * `Kubernetes Audit Logs` - suspicious activites / potential EKS cluster compromises
    * can setup EventBridge rules to be notified in case of findings - target Lambda/SNS
    * can protect against CryptoCurrency attacks (dedicated "finding" for it)


### GuardDuty - Advanced



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

### Security Hub - Advanced



## Detective
* **Amazon Detective** - analyze, investigate, quickly identify root causes of security issues or suspicious activities (using ML and graphs)
    * GuardDuty, Macie, Security Hub only help identify potential security findings/issues
    * security finding can take a lot of time to analyze and are a complex process
    * automatically collects and processes events from VPC Flow Logs, CloudTrail, GuardDuty
    * creates a unified view for all processed events
    * provides visualizations with details


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


## Compromised AWS Resources


## Compromised AWS Credentials


## EC2 - Key Pairs


## EC2 - Instance Connect


## EC2 - Serial Console


## EC2 - Lost Key Pair


## EC2 - Resource Tool


## Acceptable Use Policy (AUP)
* no illegal, harmful, offensive use/content
* no security violations
* no network abuse
* no email/message abuse


## AWS Abuse Report
* **AWS Abuse** - allows reporting suspected AWS resources used for abusive/illegal activity
    * abusive/prohibited behavior include:
        * `Spam` - undesired emails from AWS resources
        * `Port scanning` - sending packets to ports to discover unsecure ones
        * `DDoS`
        * `Intrusion attempts` - logging into your resources
        * `Hosting objectionable or copyrighted content`
        * `Distributing malware`


&nbsp;
# Logging And Monitoring


## Amazon Inspector
* **AWS Inspector** - service for running automated security assessments
    * works on:
        * `EC2 Instances` - leverages the `AWS SSM` agent to analyze against *unintended network accessibility* and analyzes the running OS for *vulnerabilities*
        * `ECR container images` - assesses vulnerabilities as containers are pushed
        * `Lambda Functions` - software vulnerabilities, package deps, works when deployed
    * reporting & integration with [AWS Security Hub](#security-hub)
    * can send finding to `AWS EventBridge`
    * evaluates only:
        * running EC2, Lambda Functions, Container Images
        * scanning when needed
    * looks at a database of vulnerabilities (EC2, ECR, Lambda) -> `database of CVE`
        * runs again when CVE is updated
    * network reachability (EC2)
    * `risk score` is associated with all vulnerabilities for prioritization


## Logging in AWS
* for compliance requirements -> AWS provides many service-specific security / audit logs:
* **Service Logs**
    * `CloudTrail trails` -> trace all API calls
    * `Config Rules` -> for config & compliance over time
    * `CloudWatch Logs` -> for full data retention
    * `VPC Flow Logs` -> IP traffic within your VPC
    * `ELB Access Logs` -> metadata of requests made to your load balancers
    * `CloudFront Logs` -> web distributioin access logs
    * `WAF Logs` -> full logging of all requests analyzed by the service
* logs can be analyzed using AWS Athena if theyre stored in S3
* should:
    * encrypt logs in S3
    * control access using IAM & Bucket Policies
    * enable MFA
* move logs to glacier for cost savings


## Systems Manager (SSM)
* **AWS Systems Manager (SSM)** - helps manage EC2 and On-Premises systems at scale
    * `Hybrid Service` - allows managing both AWS and On-Premises resources
    * get operational insights about the state of your infrastructure
    * easily detect problems
    * free service
    * patching automation for enhanced compliance
    * suite of 10+ products:
        * `Resource Groups`
        * `Operations Management`
            * Explorer
            * OpsCenter
            * CloudWatch Dashboard
            * PHD
            * Incident Manager
        * `Shared Resources` -> Documents
        * `Change Management`
            * Change Manager
            * Automation
            * Change Calendar
            * Maintenance Windows
        * `Application Management`
            * Application Manager
            * AppConfig
            * Parameter Store
        * `Node Management`
            * Fleet Manager - view fleet of EC2 Instances
            * Compliance
            * Inventory
            * Hybrid Activations
            * Session Manager
            * Run Command
            * State Manager
            * Patch Manager
            * Distributer
    * works with Windows and Linux OS
    * integrated with:
        * `CloudWatch metrics / dashboards
        * AWS Config
* **How it works**
    * install SSM agent onto the systems we control - default on Amazon Linux 2 AMI & some Ubuntu AMI
    * if an instance cant be controlled with SSM -> most likely an SSM issue
    * make sure EC2 isntances have proper IAM role
        * create IAM instance profile
        * provide it with `AmazonSSMManagedInstanceCore` - enough permissioins for it to be managed by SSM


### SSM - Resource Groups
* **AWS Tags** - key-value pairs called `Tags` attached to many AWS resource, commonly used in EC2
    * free naming
    * common tags are: `Name`, `Environment`, `Team`
    * used for:
        * resource grouping
        * automation
        * cost allocation
    * better to have too many tags than too few
* **SSM - Resource Groups** - create / view / manage logical group of resources based on tags
    * regional service
    * works with EC2, S3, DynamoDB, Lambda, etc.
    * allows creation of logical groups like:
        * apps
        * different layers of an app stack
        * production versus development environments


### SSM - Documents
* **SSM - Documents** - define parameters and actions to perform on 
    * can be JSON or YAML
    * prebuilt documents exist in AWS
    * can:
        * perform `Run Command`
        * run actions in `State Manager`, `Patch Manager`, `Automation`
        * get parameters from `Parameter Store`

Example Document
```yaml
---
schemaVersion: '2.2'
description: State Manager Bootstrap Example
parameters: {}
mainSteps:
    - action: aws:runShellScript
      name: configureServer
      inputs:
        runCommand:
            - sudo yum install -y httpd
            - sudo yum --enablrepo=epel install -y clamav
```


### SSM - Run Command
* **SSM - Run Command** - execute document (script) or just run a command
    * run command `across multiple instances` (using resource groups)
    * run `inside` EC2 instances
    * `Rate` Control / `Error` Control
        * useful when running on a lot of instances 
        * rate -> how many to run on
        * error -> what to do in case of error 
    * `no` need for `SSH`
    * Command `Output` can be:
        * shown in the `AWS Console`
        * sent to `S3 Bucket`
        * sent to `CloudWatch Logs`
    * send notifications to `SNS` about command status (In progress, Success, Failed)
    * intergrated with `IAM` & `CloudTrail`
    * can be invoked by `EventBridge`


### SSM - Automations
* **SSM - Automations** - simplifies common maintenance and deployment tasks of EC2 isntances and other AWS resources
    * examples: restart instances, create an AMI, EBS snapshot
    * runs `outside` of EC2 instances
    * `Automation Runbook` - SSM Documents to define actions performed on your EC2 isntances or AWS resources (pre-defined or custom)
    * can be triggered using:
        * manually using AWS Console, AWS CLI or SDK
        * Amazon EventBridge
        * on a schedule using maintenance windows
        * by AWS Config for rules remediations
    * execute options:
        * `simple execution` -> execute on specific targets all at once
        * `rate control` -> define concurrency and error thresholds
        * `multi-account and region` -> execute across accounts and regions
        * `manual execution` -> step by step manual


### SSM - Inventory & State Manager
* **SSM - Inventory** - collect metadata from your managed instances (EC2 / On-premises)
    * metadata: `installed software`, `os drivers`, `configurations`, `installed updates`, `running services`
    * view data in:
        * AWS Console
        * store in `S3`
        * query and analyze with `Athena` and `QuickSight`
    * specify metadata collection interval (minutes, hours, days)
    * query data from multiple AWS accounts and regions
    * create `Custom Inventory` for your custom metadata (e.g. rack location of each managed instance)
* **SSM - State Manager** - automate the process of keeping your managed isntances in a state that you define
    * use cases: `bootstrap` instances with software, `patch` OS / `software updates` on a `schedule`
    * **State Manager Association** - defines the state that you want to maintain to your managed instances
        * example: port 22 must be closed, antivirus must be installed
        * specify schedule when configuration is applied
    * uses `SSM Documents` to create an `Association`
* **Resource Data Sync** - synces inventory data into S3 or Athena, can query installed packages etc


### SSM - Patch Manager
* **SSM - Patch Manager** - automates process of patching managed instances
    * OS updates, applications updates, security updates
    * supports EC2 instances and on-premises servers
    * supports Linux, macOS, Windows
    * patch on-demand or on a schedule using `Maintenance Windows`
    * scan instances and generate patch compliance reports
    * **Patch Baseline** - defines which patches should / shouldnt be installed on your instances
        * ability to create custom Patch Baselines (approved / rejected patches)
        * patches can be auto-approved within days of their release
        * by default -> install only critical patches / security patches
    * **Patch Group** - associate set of instances with specific Patch Baseline
        * example: `dev`, `test`, `prod`
        * instances should be defined with `tag` key `Patch Group`
        * an instance can only be in one Patch Group
        * Patch Group can be registered with only one Patch Baseline
    * process:
        * uses `Run command` to run `Document` -> `AWS-RunBatchBaseline` on each configured EC2 Instance
        * SSM Agent on each instances queries `Patch Manager` to get the list of patches that need to be installed
* **Maintenance Windows**
    * defines a schedule for when to perform actions on your instances
    * example: OS Patch, updating drivers, installing software
    * maintenance window contains:
        * schedule
        * duration
        * set of registered instances
        * set of registered tasks
        * rate control


### SSM - Session Manager
* **SSM - Session Manager** - start SSH on EC2 and on-premises servers without SSH access / bastion hosts / SSH keys
    * access through AWS Console, AWS CLI, Session Manager SDK 
    * no port 22 needed
    * support for Linux / macOS / Windows
    * send all commands as log data to S3 or CloudWatch Logs -> more compliance and security
    * `CloudTrail` integration to itnercept `StartSession` events
    * **Managed Nodes** - EC2 instances and other servers configured to work with SSM Session Manager
* **IAM Persmissions**
    * control which users / groups on which can use Session Manager on which instances
    * use tags to restrict access to only specific EC2 instances
    * access SSM + wrtie to S3 + write to CloudWatch
    * optionally: restrict commands a user can run in a session

IAM Permission that allows starting session only on dev resources
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "ssm:StartSession",
            "Resource": "arn:aws:ec2:us-east-1:123456789012:instance/*",
            "Condition": {
                "StringLike": {
                    "ssm:resourceTag/Environment": ["Dev"] 
                }
            }
        }
    ]
}

```


### SSM - Parameter Store
* **SSM - Parameter Store** - secure storage for configuration and secrets
    * optional seamless `encryption` using `KMS`
    * serverless, scalable, durable
    * easy SDK
    * `version tracking` of configurations / secrets
    * security through `IAM`
    * notifications with `Amazon EventBridge`
    * integration with `CloudFormation`
    * enables hierarchical organization of keys:
        * `/finance/`
            * `app/`
                * `dev/`
                    * `db-url`
                    * `db-password`
                * `prod/`
                    * `db-url`
                    * `db-password`
    * can access secrets in `Secrets Manager` through `/aws/reference/secretsmanager/secret_ID_in_Secrets_Manager`
    * public parameters included by aws like `/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2`
* **Tiers**
    * `Standard`: 
        * 10000 params allowed per account & region
        * max 4 KB parameter size
        * no parameter policies available
        * no additional charge
        * free storage
    * `Advanced`:
        * 100000 params allowed per account & region
        * max 8 KB parameter size
        * parameter policies available
        * charges apply
        * 0.05 $ per advanced parameter per month
* **Parameter Policies**
    * allow assigning a TTL to a parameter
    * allows forcing updating or deleting sensitive data such as passwords
    * can assign multiple policies at a time

Expiration Parameter Policy example:
```json
{
    "Type": "Expiration",
    "Version": "1.0",
    "Attributes": {
        "Timestamp": "2020-12-02T21:34:33.000Z"
    }
}
```

Expiration Notification:
```json
{
    "Type": "ExpirationNotification",
    "Version": "1.0",
    "Attributes": {
        "Before": "15",
        "Unit": "Days"
    }
        
}
```

## CloudWatch - Unified CloudWatch Agent
* **Agent** - needs to run on EC2 or on-premises to push log files to CloudWatch
* EC2 must have IAM permission to do this
    * CloudWatch Logs
    * CloudWatch Metrics
* IAM policies for Agent specific operations also available:
    * CloudWatch Agent Server
    * CloudWatch Agent Administrator -> enables storing config in SSM Parameter Store
* **CloudWatch Unified Agent**
    * new version
    * collect additional system-level metrics (RAM, processes, etc..)
        * `CPU` - active / guest / idle / system / user / steal
        * `Disk metrics` - free / used / total, Disk IO -> writes / reades / bytes / iops
        * `RAM` - free / inactive / used / total / cached
        * `Netstat` - TCP, UDP connection count / net packets / bytes
        * `Processes` -  total / dead / bloqued / idle / running / sleep
        * `Swap Space` - free / used / used %
    * collect logs and send to CloudWatch logs
     * centralized configuration using SSM Parameter Store
* out-of-the box metrics for EC2 -> disk, CPU, network (high level)
* default namespace for metrics is `CWAgent` - can be configured / changed
* **procstat Plugin** - collect metrics and monitor system utilization of individual processes
    * supports Linux and Windows
    * example metrics:
        * process use of CPU
        * process use of memory
    * select which processes to monitor by:
        * `pid_file` -> name of process identification number (PID) files they create
        * `exe` -> process name that match string you specify (RegEx)
        * `pattern` -> command lines used to start the processes (RegEx)
    * namespace for procstat metrics is `procstat`
        * `procstat_cpu_time`
* **Troubleshooting**
    * a



```shell
# enable server to send some content over http
echo "hello world" > /var/www/html/index.html
sudo systemctl start httpd
sudo systemctl enable httpd

# various logs are available for the httpd process
cat /var/log/httpd/access_log
cat /var/log/httpd/error_log

# install the CloudWatch agent
sudo yum install amazon-cloudwatch-agent

# run the install wizard
#   - stores configs in SSM Parameter Store
#   - prints thew config in json at the end
#   - can specify log file to monitor like /var/log/httpd/access_log
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard

# create required files
sudo mkdir -p /usr/share/collectd
sudo touch /usr/share/collectd/types.db

# set options
#   - can fetch configs from SSM Parameter Store
#   - in example below the config id is: AmazonCloudWatch-linux
#   - can provide reference to ssm parameter store: -c ssm:<name of parameter>
#   - can also provide flat file path: -c file:/path/to/file/config.json
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c ssm:AmazonCloudWatch-linux -s

sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c file:/opt/aws/amazon-cloudwatchagent/bin/config.json -s
```

## CloudWatch - Logs
* **Logs** - collect, monitor, analyze, store log files
    * **Log Groups** - arbitrary name, usually representing an application
        * can create 2 subscription filters per log group
    * **Log Stream** - instances within application / log files / containers
    * enables `real-time` monitoring
    * adjustable log `retention`
        * by default logs never expire
        * log retention policy can be defined at `Log Groups` level 
    * **Collect** from:
        * `SDK`
        * `Elastic Beanstalk` - collection from application
        * `ECS` - collection from containers
        * `AWS Lambda` - collection from function logs
        * `CloutTrail` - filter based
        * **CloudWatch Logs Agents**(EC2 / on-premises)
            * need to run on EC2 or on-premises to push log files to CloudWatch
            * EC2 must have IAM permission to do this
            * comes in two flavors:
                * **CloudWatch Logs Agent**
                    * old version
                    * only sends to CloudWatch Logs
                * **CloudWatch Unified Agent**
                    * new version
                    * collect additional system-level metrics (RAM, processes, etc..)
                        * `CPU` - active / guest / idle / system / user / steal
                        * `Disk metrics` - free / used / total, Disk IO -> writes / reades / bytes / iops
                        * `RAM` - free / inactive / used / total / cached
                        * `Netstat` - TCP, UDP connection count / net packets / bytes
                        * `Processes` -  total / dead / bloqued / idle / running / sleep
                        * `Swap Space` - free / used / used %
                    * collect logs and send to CloudWatch logs
                    * centralized configuration using SSM Parameter Store
                * out-of-the box metrics for EC2 -> disk, CPU, network (high level)
        * `Route 53` - DNS queries
        * `VPC Flow Logs` - VPC specific logs
        * `API Gateway` - traffic logs
    * **Send** to: 
        * **Amazon S3**
            * can take up to `12 hours` for log data to be available for export
            * **CreateExportTask** - API for exporting
            * not suitable for near-real time or real-time
        * **CloudWatch Logs Subscriptions** - filter set up on CloudWatch logs. 
            * good for near-real time or real-time
            * filtered logs can be sent to destination, like:
                * `Kinesis Data Streams`
                * `Kinesis Data Firehouse`
                * `AWS Lambda`
                * `OpenSearch`
            * can be used for `Multi-Account` / `Multi-Region` **Logs Aggregation**
    * **Metric Filters** - use filter expression, mount CloudWatch alarms on the metric filters
        * do **not retroactively** filter data, only publish metric data for events that occur after filter was created
        * use cases: 
            * find specific IP inside log
            * count occurences of ERROR in logs
            * trigger alarms
        * example: `EC2 Instance [CloudWatch Logs Agent]` --(`stream`)--> `CW Logs` ----> `Metric Filters` ----> `CW Alarm` ----> `SNS`
    * **CloudWatch Logs Insights** - used to query logs and add queries to **CloudWatch Dashboard**


## CloudWatch - Alarms
* **Alarms**- trigger notifications for any metric
    * **Period** - length of time in seconds to evaluate the metric
        * high resolution custom metrics: 10s / 30s / n * 60s
    * **Options** - for triggering alarms( sampling, %, max, min, etc...)
        * alarms are mounted on a single metric
    * **Alarm States**:
        * `OK` - metric is below threshold and alarm should not be triggered
        * `INSUFFICIENT_DATA` - not enough data to evaluate if alarm should be triggered or not
        * `ALARM` - threshold has been reached and alarm is triggered
    * **Targets**:
        * `Auto Scaling` - increase or decrease EC2 instances "desired" count
        * `EC2 Actions` - stop, terminate, reboot, recover an EC2 instance
        * `SNS notifications` - send a notification into an SNS topic
        * `Systems Manager Action`
    * **Composite Alarms** - allows monitoring the states of multiple other alarms
        * specify `AND` and `OR` conditions
        * helps reduce `alarm noise` - example: only get alarm if CPU and IOPS is high
    * **EC2 Instance Recovery**
        * *Status Check* - `Instance Status` -> check the EC2 VM, `System status` -> check the underlying hardware
        * *Recovery* - if checks fail instance is recovered with same Private / Public / Elastic IP / metadata / placement group
        * can send alarm to SNS 
    * **Good to Know**:
        * alarms can be created based on CloudWatch Logs Metrics Filters to trigger for example SNS notifications
        * to test alarms and notification, set the alarm state to `Alarm` using CLI
            * `aws cloudwatch set-alarm-state --alarm-name "myalarm" --state-value ALARM --state-reason "testing purposes"`


## CloudWatch - Contributor Insights



## EventBridge
* service for scheduling jobs that replaces CloudWatch Events
* events can perform a wide variety of tasks like triggering lambda or publishing to SQS/SNS
* **Event Bus** - a mediator that transfers a message from a sender to a receiver
    * **Default Event Bus** - generated by AWS services, same as CloudWatch Events
    * **Partner Event Bus** - receive events from SaaS service or applications(Zendesk, DataDog, Segment, Auth0 ...)
    * **Custom Event Buses** - for own applications
    * an Event Bus can be accessed by other AWS accounts
    * can `archive events`(all/filter) sent to an event bus(indefinitely or set period)
    * can `replay archived events`
* **Rules** - define how to process events
* **Schema Registry** - define models(schema) for events
    * EventBridge can analyze events in bus and `infer the schema`
    * can `generate code` for your application that will know in advance how data is structured in the event bus
    * schema can be `versioned`
* **Resource-based Policy** - manage permissions for specific Event Bus
    * allow/deny events from `another AWS account / region`
    * use case: aggregate all events from AWS Organization in a single AWS account or AWS region
* **Event Types**
    * *Schedule* - cron-like scheduled scripts
    * *Event Pattern* - event rules to react to a service doing something
* **Events Source**
    * *AWS Services*
    * *Other* - customer and partner events
    * *All Events* - centralize all events in multiple accounts
* **EventBridge vs CloudWatch Events**:
    * builds upon CloudWatch Events - same service API / endpoint / underlying service infrastructure
    * extra: event bus for custom apps and 3rd party SaaS apps / Schema Registry
    * different name to mark new capabilities
* **Sandbox** - test event rules on sample JSON events provided by you or choose sample events
* **Multi-Account Aggregation** - allows aggregating events from multiple accounts within a single account. To do this create events rules in Source Accounts that send events to an Event Bus in the Target Account


Resource-based policy:
``` json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "events:PutEvents",
            "Principal": { "AWS": "111222333" },
            "Resource": "arn:aws:events:us-east-1:123456789012:event-bus/central-event-bus"
        }
    ]
}
```

## Athena
* **Amazon Athena** - serverless query service to analyze data stored in Amazon S3
    * uses SQL (built on Presto)
    * supports `CSV`, `JSON`, `ORC`, `Avro`, and `Parquet` (built on Presto)
    * **pricing** - around $5.00 per TB of data scanned
    * can build reporting / dashboards on top of Athena through `Amazon QuickSight`
    * use cases include: `BI`, `Analytics`, `Reporting`, `Analyze & Query VPC Flow logs`, `ELB logs`, `CloudTrail trails` 
    * **Performance Improvement**
        * use **columnar data** for cost-savings (less scan)
            * `Apache Parquet` or `ORC` recommended for huge performance improvement
            * use `Glue` to convert your data to Parquet or ORC
        * **compress** data for smaller retrievals
            * `bzip2`, `gzip`, `lz4`, `snappy`, `zlip`, `zstd`
        * **partition** datasets in S3 for easy querying on virtual columns
            * ex: `s3://athena-examples/flight/parquet/year=1991/month=1/day=1/`
        * use **larger files** ( > 128 MB) to minimize overhead
    * **Federated Query** - can query data anywhere 
        * including relational, non-relational, object, custom data sources, AWS and on-premises
        * uses `Data Source Connectors` that run on AWS Lambda to run Federated Queries (e.g. CloudWatch Logs, DynamoDB, RDS, ...)
    * can store results of query in S3 Bucket
* **Troubleshooting** - 


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
* **Config Rules**
    * AWS managed (over 75)
    * custom rules
    * rules can be evaluated / triggered
    * does not prevent actions from happening (no deny)
* **Pricing** - no free tier, $0.003 per configuration item recorded per region, $0.001 per config rule evaluation per region
* **Config Resource**
    * view compliance of a resource over time
    * view configuration of a resource over time
    * view CloudTrail API calls of a resource over time
* **Remediations** - automate remediation of non-compliant resource using SSM Automation Documents
    * use AWS-Managed Automation Document or create custom Automation Document
    * can invoke Lambda function from custom Automation Documents (and do pretty much anything)
    * can set `Remediation Retries` up to 5 times if resource still non-compliant after auto-remediation
* **Notifications**
    * use EventBridge to trigger notifications
    * ability to send configuration changes and compliance state notification to SNS(can filter using SNS Filtering or client-side filtering)


### Config - Aggregators
* **Aggregators** - an Aggregator Account is one that centralizes all configurations from multiple accounts
    * **Aggregated View** shows compliant & non-compliant resources across all accounts
    * **Aggregator Account** - aggregator is created in a central Aggregator account, not on each account
    * **Aggregator Rules** - set rules across account and regions
    * no need for individual Authorization if using AWS Organizations
    * if not using AWS Organizations must authorize Aggregator to collect data form each account individually
    * rules are created in each individual source AWS account
    * can deploy rules ot multiple target accounts using CloudFormation StackSets

## Trusted Advisor
# AWS Trusted Advisor
* high level AWS account assessment
* analyzes your AWS accounts and provides recommendation on 5 categories:
    * **Cost optimization**
        * low utilization EC2 instances
        * idle load balancers
        * under-utilized EBS volumes
        * reserved instances & savings plans optimizations
    * **Performance**
        * high utilization EC2 instances
        * CloudFront CDN optimizations
        * EC2 to EBS throughput optimizations
        * Alias records recommendations
    * **Security**
        * MFA enabled on Root Account
        * IAM key rotation
        * exposed Access Keys
        * S3 Bucket Permissions for public access
        * security groups with unrestricted ports
    * **Fault Tolerance**
        * EBS snapshots age
        * AZ balance
        * ASG Multi-AZ
        * RDS Multi-AZ
        * ELB configutation
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
        * **CloudTrail Insights** which provide an automated analysis of your CloudTrail Events
* **CloudTrails Events**
    * **Management Events** - operations performed on resources in your AWS account
        * examples: configuring security, rules for routing data, logging setup
        * by default Trails are configured to log management events
        * types:
            * `Read Events` - events that don't modify resources
            * `Write Events` - events that modify resources
    * **Data Events**
        * examples: S3 object level activity, AWS Lambda function execution activity
        * by default data events are not logged(high volume)
        * can seperate Read and Write Events
    * **Insights Events** - detect unusual activity in your account
        * requires enabling and is payed
        * examples:
            * inaccurate resource provisioning
            * hitting service limits
            * bursts of AWS IAM actions
            * gaps in periodic maintenance activity
        * analyzes normal management events to create a baseline
        * after analysis continuously analyzes `WRITE` events to detect unusual patterns
        * generates `Insights Events`
        * `Insights` can be visible in `CloudTrail Console`, dumped to S3 Buckets or create an EventBridge event
    * **Events Retention**
        * by default 90 day event retention in CloudTrail
        * to keep events for longer periods: Log to S3 and use Athena to analyze them
* **Intercept API Calls** - combine with Amazon EventBridge and SNS to get notified of any destructive operations and quickly react


### CloudTrail - SysOps
* **Log File Integrity Validation** - helps you validate whether the log file has been tampered with since it was written
    * `Digest Files`
        * references the log files for the last hour and contains a hash of each
        * stored in the same S3 bucket as log files (different folder)
        * hashing using SHA-256, Digital Signing using SHA-256 with RSA
        * protect the S3 bucket using `bucket policy`, `versioning`, `MFA Delete protection`, `encryption`, `object lock`
    * helps determine whether a log was modified / deleted after CloudTrail delivered it
    * protect CloudTrail using IAM to make sure nobody disables Digest Files
* **Integration with EventBridge**
    * used to react to any API call being made in your account
    * CloudTrail is not real-tiime:
        * delivers an event within `15 min` of an API call
        * delivers log files to an S3 bucket eveyr `5 min`
* **Organization Trails**
    * setup CloudTrail on organization level
    * logs trails from all organizaitons accounts into a target S3 bucket
    * log events for management and member accounts
    * trail with the same will be created in every AWS account (IAM permissions)
    * member accounts cant remove or modify the organization trail (view only)


## Monitoring Account Activity



## Amazon Macie
* **AWS Macie** - fully managed data security/privacy service that utilizes ML/pattern matching to discover and protect your sensitive data in AWS
    * alerts about sensitive data like **Personally Identifiable Information (PII)**
    * example flow: [S3 Bucket] --[analyze]--> [Macie] --[notify]--> [AWS EventBridge] --> [integrations]
    * one click to enable
* **Advanced**
    * a


## S3 - Event Notifications
* **S3 Event Notifications** - events are any operations like Created, Removed, Replication, etc... on the S3 bucket
    * possible to filter based on object name, or **Advanced Filtering** with JSON rules(metadata, object size, name,...)
    * use case: generate thumbnails of images
    * events can be sent to: SNS, SQS, Lambda
    * events can take up to a minute or longer to propagate
    * all events end up in Amazon EventBridge from where they can be sent to 17 AWS services and destinations 
    * can send events to multiple destinations
    * events come with all EventBridge capabilities like Archive, Replay Events, Reliability


## VPC Flow Logs
* **VPC Flow Logs** - captures information about all IP traffic going into interfaces
    * types:
        * `VPC` Flow Logs
        * `Subnet` Flow Logs
        * `Elastic Network Interface` Flow Logs
    * helps monitoring and troubleshooting connectivity issues
        * subnets to internet
        * subnets to subnets
        * internet to subnets
    * captures network information from AWS managed interfaces like: ELB, ElastiCache, RDS, Aurora, etc.
    * logs can be sent to [S3](#s3), [CloudWatch](#cloudwatch) or `Kinesis Data Firehose`
    * captures network information from AWS managed interfaces too: ELB, RDS, ElastiCache, Redshift, WorkSpaces, NATGW, Transit Gateway, ...
* flow log syntax:
    * example: `2 123456789010 eni-1235b8ca123456789 172.31.16.139 172.31.17.21 20641 22 6 20 4249 14148530010 1417890070 ACCEPT OK`
    * from left to right in example:
        * `2` -> **version** ->
        * `123456789010` -> **account-id**
        * `eni-1235b8ca123456789` -> **interface-id**
        * `172.31.16.139` -> **srcaddr** - helps identify problematic IP
        * `172.31.17.21` -> **dstaddr** - helps identify problematic IP
        * `20641` -> **srcport** - helps identify problematic ports
        * `22` -> **dstport** - helps identify problematic ports
        * `6` -> **protocol**
        * `20` -> **packets**
        * `4249` -> **bytes**
        * `1418530010` -> **start**
        * `1418530070` -> **end**
        * `ACCEPT` -> **action** - success or failure of the request due to SG / NACL
            * INCOMING: inbound `REJECT` -> NACL or SG
            * INCOMING: inbound `ACCEPT`, outbound `REJECT` -> NACL
            * OUTGOING: outbound `REJECT` -> NACL or SG
            * OUTGOING: outbound `ACCEPT`, inbound `REJECT` -> NACL
        * `OK` -> **log-status**
    * can be used for analytics on usage patterns, or malicious behavior
    * `query VPC flow logs` using `Athena` on S3 or `CloudWatch Logs Insights`
* **Advanced**
    * a


## VPC Traffic Monitoring
* allows capturing and monitoring network traffic within VPC
* route the traffic to security appliances that you manage
* capture traffic:
    * `From (Source)` -> ENIs
    * `To (Targets)` -> ENI / NLB
* capture:
    * all packets
    * packets of interest
    * truncate packets
* `Source` and `Target` can be in same VPC or different VPC
* use cases:
    * content inspection
    * threat monitoring
    * troubleshooting
* **Architectures**
    * a


## OpenSearch
* **Amazon OpenSearch Service**
    * successor to `Amazon ElasticSearch`
    * allows searching any field, even `partial matches` (not like DynamoDB)
    * common to use OpenSearch as a `complement to another database`
    * opensearch requires a cluster of instances (`not serverless`)
    * `own query language`
    * `SQL` can be supported via a `plugin`
    * `ingestion` from Kinesis Data Firehose, AWS IoT, Cloudwatch Logs, custom application
    * `security` through Cognito & IAM, KMS encryption, TLS
    * can perform visualization with OpenSearch `Dashboards`
* **Patterns**
    * `DynamoDB Table` -> `DynamoDB Stream` -> `Lambda Function` -> `Amazon OpenSearch` -> partial search -> retrieve data from DynamoDB
    * `CloudWatch Logs` -> `Subscription Filter` -> `Lambda` -> `OpenSearch`
    * `CloudWatch Logs` -> `Subscription Filter` -> `Kinesis Data Firehose` -> `OpenSearch`
    * near real time: `KDS` -> `KDF` -> `Lambda Transformation` -> `KDF` -> `OpenSearch`
    * real time: `KDS` -> `Lambda` -> `OpenSearch`
* **Advanced**
    * a


## Audit Manager



&nbsp;
# Infrastructure Security


## Bastion Hosts
* **Bastion Hosts** - an EC2 instance that is in a public subnet and works as a gateway for interacting with private subnets
    * way to SSH into private resources
    * should have own SG
    * `Bastion SG` -> must allow `inbound` from the internet on port `22` from `restricted CIDR` (like public CIDR of your corporation)
    * `Private EC2 SG` -> allow `private IP` of Bastion host

## Site-to-Site VPN and Gateways
* **Site to Site VPN** - connect on-premise VPN to AWS
    * *VPN* - automatically encrypted connection over the `public internet`
    * does not have access to VPC Endpoints from VPN
    * take away: `quick to establish but less security`
    * to setup:
        * **Customer Gateway (CGW)**
            * software application or physcial device on the `customer side` of the VPN connection
        * **Virtual Private Gateway (VGW)**
            * VPN concentrator on the `AWS side` of the VPN connection
            * VGW is created and attached to the VPC from which you want to create the Site-to-Site VPN connection
            * possibility to customize the ASN (Autonomous System Number)
        * once CGW and VGW are provisioned they can be connected via Site-to-Site VPN
* **Connections**
    * `Customer Gateway Device`
        * use public internet-routable IP address for your Customer Gateway device
        * if its behind a NAT devices thats enabled for NAt traversal (NAT-T) -> use publc IP of the NAT device
    * **important step**: enable `Route Propagation` for the Virtual Private Gateway in the route table that is associated with your subnets
    * if you need to ping EC2 - enable ICMP protocol on inbound SG
* **AWS VPN CloudHub** - provide secure communication between multiple sites, if you have multiple VPN connections
    * low cost `hub-and-spoke` model for priamry or secondary network connectivity between different locations (VPN only)
    * goes over public internet
    * to setup:
        1. configure multiple VPN connections on the same `VGW`
        1. setup dynamic routing
        1. configure route tables
![VPN CloudHub](./aws_sa_vpn_cloudhub.png)


## Client VPN
* **AWS Client VPN** - connect from you computer using OpenVPN to a private network in AWS and on-premises
    * allows connecting to EC2 over a private IP
    * goes over the public internet
* **Authentication Types**
    * `` -


## VPC - DNS Resolution


## VPC - Endpoints
* **VPC Endpoints** - allow to connect AWS Services using `private network` in place of public network
    * enhanced security and lower latency for AWS services
    * enables private access from within a VPC to AWS services
    * `Amazon S3` and `DynamoDB` are the only services that have a `VPC Gateway Endpoint` - all the other services have `VPC Gateway Inteface (ENI)`(with a private IP)
    * every service is publicly exposed (public URL)
    * redundant and scale horizontally
    * in case of issues:
        * check DNS Settings Resolution in your VPC
        * check Route Tables
* types of endpoints:
    * **Interface Endpoints** - powered by PrivateLink
        * provisions an ENI (private IP address) as an entry points (must attach SG)
        * supports most AWS services
        * $ per hour + $ per GB of data processed
        * works for every service
    * **Gateway Endpoints**
        * provisions a gateway and must be used as a target in a route table (does not use SG)
        * does not leverage IP
        * supports both S3 and DynamoDB
        * free
    * gateway always preferrable over endpoints unless connecting from:
        * `on-premises` (Site to site VPN / Direct Connect)
        * different VPC
        * different region
    
## AWS PrivateLink
* **AWS PrivateLink** - allows establishing a private connection between a `Service VPC` that requires a `NLB` and a `Customer VPC` that requires an ENI
    * does not require VPC peering, Internet Gateway, NAT, route tables
    * most secure & scalable way to expose a service to 1000s of VPCs
    * each new customer only has to create a new PrivateLink to the Service VPC which is easy

## NACL & Security Groups
* **Security Groups** - firewall that controls traffic to and from an **ENI**(Elastic Network Interface) or an [EC2](#ec2) instance
    * can only have `ALLOW` rules
    * can reference ip addresses or other SG's
    * general:
        * `operates` at instance level
        * `supports` allow rules only
        * `stateful` - return traffic is automatically allowed
        * `evaluate all rules` before deciding whether to allow traffic
        * `applies` only if associated with specifically associated with instance
    * **Outbound Rules**
        * asd
    * **Managed Prefixes**
        * asdas
* **Network ACL (NACL)** - a firewall which controls traffic from and to a subnet
    * contains `ALLOW` and `DENY` rules
    * are attached to **Subnets**
    * 1 NACL per Subnet
    * define **NACL Rules**:
        * rules only include IP addresses
        * rules have a number (1-32766) -> higher precenedence with a lower number
        * last rule is asterisk and denies a request in case of no rule match
        * AWS recommends adding rules by increment of 100
        * newly created NACL will deny everything
        * NACL are a great way of blocking a specific IP address at subnet level
    * **Default NACL** - accepts everything inbound / outbound for associated subnet
    * general:
        * `operates` at subnet level
        * `supports` allow and deny rules
        * `stateless` - return traffic must be explicitly allowed by rules
        * `evaluate rules in number order` before deciding whether to allow traffic
        * `applies` automatically to all instances in subnet
* rule evaluation:
    * `Inbound`
        1. Check NACL Inbound Rules for Allow
        1. Check SG Inbound Rules for Allow
        1. Check NACL Outbound Rules for Allow
    * `Outbound`
        1. Check SG Outbound Rules for Allow
        1. Check NACL Outbound Rules for Allow
        1. Check NACL Inbound Rules for Allow
* **Ephemeral Ports**
    * for any two endpoints to establish a connection - they must use ports
    * clients connect to a `defined port` and expect a response on an `ephemeral port`
    * the `ephemeral port` is a random port within a OS specific range that is allocated temporarily by the underlying OS for the connection
    * different OS use different port ranges:
        * `IANA & MS Windows 10` -> 49152 - 65535
        * `Many Linux Kernels` -> 32768 - 60999
    * **NACL & Ephemeral Ports** - must allow port ranges for ephemeral ports for each subnets CIDR when communicating between subnets


&nbsp;
# CloudFront
* **AWS CloudFront** - a distributed CDN with features like:
    * improves `read performance`, through caching content on edge locations
        * edge location include 216 Point of Presence globally (new ones are added constantly)
    * `DDOS protection` 
    * integration with `Shield`
    * `AWS Web Application Firewall`
    * can expose external HTTPS and can talk to internal HTTPS backends
    * `GEO Restriction` - allows restricting access to your distribution based on country of requestor
        * **Allowlist** - whitelist approved countries
        * **Blocklist** - blacklist users from specific countries
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
* **Caching** - a cache lives at each CloudFront Edge Location where objects are identified using a **Cache Key**
    * you want to maximize Cache Hit ratio
    * can invalidate part of cache using `CreateInvalidation` API
    * **Cache Key** is a unique identifier for every cached object, by default `hostname + resource portion of the URL`
    * **Caching Policies** - allows adding other elements like HTTP headers, cookies, query strings to cache keys
        * use case: content that varies based on user/device/language/location
        * options:
            * *HTTP Headers*: None - Whitelist
            * *Cookies*: None - Whitelist - Include All-Except-All
            * *Query String*: None - Whitelist - Include All-Except - All
        * control he TTL (0s-1year) by using `Cache-Control` or `Expires` header
        * create own policies or use `Predefined Managed Policies`
        * all HTTP HEADER/COOKIES/QUERY STRING in Cache Key are automatically included in origin requests. This means:
            * *None* -> best caching performance cause no headers
            * *Whitelist* -> only specified cache keys are included in the req to origin
        * for performance you want to limit the amount of data sent in origin request - Caching Policies help with this
        * **Origin Request Policy** - enables including values in origin req without including them in Cache Key
            * *HTTP Headers*: None - Whitelist - All viewer headers options
            * *Cookies*: None - Whitelist - All
            * *Query String*: None - Whitelist - All
            * can add CloudFront HTTP header and Custom header even if not included in viewer request
        * **Caching Policy vs Origin Request Policy** - cache policy defines values needed for caching purposes, origin policy values needed by the origin to handle request(like User-Agent or Authorization headers)
    * **Cache Invalidation** - allows bypassing the TTL to perform entire or partial cache refresh through **CloudFront Invalidation**
        * patterns are `(*)` for all or `(/images/*)` for specific path
    * **Cache Behaviors** - allows setting different origins/origin groups based on the content type or path pattern
        * pattern examples:
            * `/images/*` -> use S3 origin
            * `/api/*` -> use ALB origin
            * `/*` -> default cache behavior
        * default cache behavior is always last to be processed and alwas `/*`
        * use cases: 
            * authorize with auth service before getting access to resources on S3 origin
            * maximize cache hits by separating static and dynamic distributions
* **Signed URL** - allows giving access to individual files (one signed URL per file)
    * attach a policy with: `URL Expiration`, `IP Ranges to access data from`, `trusted signer` -> which AWS account can create signed URLS
    * TTL for Url:
        * short for Shared Content
        * long for Private Content
    * signed URLs can be generated by AWS SDK
    * **Cloudfront vs S3 Signed URL**
        * CloudFront provides:
            * access to a path no matter the origin
            * account wide key-pair, only root can manage it
            * filter by IP / path / date / expiration
            * leverage caching features
        * S3 provides:
            * issue a request as the person that pre-signed the URL
            * use IAM key of signing IAM principal
            * limited lifetime
* **Signed Cookies** - same as Signed URL but give access to multiple files (one cookie = multiple files)
* **Key Groups** - recommended way to sign urls by using a trusted managed key group
    * can leverage APIs to create / rotate keys (and IAM for API security)
    * *alternative* -> use AWS Account that contains a CloudFront Key Pair -> NOT RECOMMENDED
        * need to manage keys using the root account and AWS console
        * cant utilize APIs
    * can create multiple trusted key group
    * can generate:
        * **public key** - is used by CloudFront to verify the URLs
        * **private key** - used by applications to sign URL
* **Advanced Concepts**:
    * **Pricing**
        * cost of data out per edge location varies
        * **Price Classess** -> reduce number of edge locations for cost reduction
            * *Price Class All* - all regions = best performance
            * *Price Class 200* - most regions, exludes the most expensive 
            * *Price Class 100* - only least expensive regions
    * **Multiple Origin** - route to different kind of origins based on content type or path pattern
    * **Origin Groups** - increase HA and failover by specifying secondary Origin Groups in case the primary fails
    * **Field Level Encryption** - protect sensitive information by encrypting specific pieces of data at edge close to the user
        * additional layer of security along with HTTPs
        * uses asymmetric encryption
        * usage:
            1. specify set of fields in POST requests to encrypt (up to 10 fields)
            1. specify public key to encrypt them
            1. web server decrypts using a matching private key
            1. Edge Location, CloudFront and ALB will only have access to the encrypted data!
* **Real Time Logs** - can send all requests to CloudFront to log in Kinesis Data Streams
    * allow mointoring / analyzing and taking actions based on CloudFront performance
    * configuration options:
        * *Sampling Rate* - % of requests for which you want to receive logs
        * specify fields and specific Cache Behaviors


### CloudFront - OAC & OAI
* **OAC** - Origin Access Control
* **OAI** - Origin Access Identity


### CloudFront - Other


## WAF
* **AWS WAF** - the Web Application Firewall allows filtering specific requests based on rules
    * protects from common web exploits (`Layer 7`)
    * deploy to:
        * `ALB`
        * `API Gateway`
        * `CloudFront`
        * `AppSync GraphQL API`
        * `Cognito User Pool`
    * define **Web ACL** `(Web Access Control List)`
        * rules can include `IP addresses`, `HTTP headers`, `HTTP body` or `URI strings` 
        * set up to 10 000 IP addresses - use multiple rules for more IPs
        * protects from common attacks like `SQL Injection` or `Cross-Site Scripting (XSS)`
        * `size constraints` (make sure requests arent too big)
        * `geo-match` (block countries)
        * `rate based rules` (count occurrences of events) - for DDoS protection
        * are regional, except for CloudFront
        * **Rule Group** - reusable set of rules that you can add to a web ACL
            * has built-in rules
            * can create own rules
        * cannot exceed 1500 rules because it would take too long to process
* **Fixed IP with WAF and Load Balancer**
    * `WAF` (Layer 7) does not support `NLB` (Layer 4)
    * can use `Global Accelerator` for fixed IP and WAF on the `ALB`
    * `Web ACL` must be in same region as ALB


## Shield
* **AWS Shield** - DDoS protection service
    * two flavors:
        * **Standard** protects againast DDOS for website and applications for all customers at no additional costs
        * **Advanced** gives premium DDOS protection
    * **AWS Shield Standard**
        * free service
        * activated for every AWS customer
        * provides protection from attacks such as `SYN/UDP Floods`, `Reflection attack` and other `Layer 3/4 attacks`
    * **AWS Shield Advanced**
        * optional DDoS mitigation service (3 000 $ per month per organization)
        * protect against more sophisticated attack on `EC2`, `ELB`, `CloudFront`, `AWS Global Accelerator`, `Route 53`
        * 24/7 access to AWS DDoS response team (`DRP`)
        * protect against higher fees during usage spikes due to DDoS
        * Shield Advanced automatic application layer DDoS mitigation - auto create / evaluate / deploy AWS WAF rules to mitigate layer 7 attacks
        * **Metrics**
            * asdads


## Firewall Manager
* **Firewall Manager** - manage rules in all account of an AWS Organization
    * **Security policy** - common set of security rules
        * examples:
            * `WAF` rules (ALB, API Gateways, CloudFront)
            * AWS `Shield` Advanced (ALB, CLB, NLB, Elastic IP, CloudFront)
            * `Security Groups` (ALB, CLB, NLB, Elastic IP, CloudFront)
            * `AWS Network Firewall` (VPC level)
            * `Route 53` Resolver DNS Firewall
            * `Policies` are created at the region level
    * rules are applied to new resources as they are created (good for compliance) across all and future accounts in your organization


## DDOS Protection
* **CloudFront**
    * protect from DDoS Common Attacks -> `Shield`
* **Global Accelerator**
    * DDoS protection  -> `Shield`
    * helpful if backend not compatible with CloudFront
* **Route 53**
    * DDoS Protection mechanism
* **Infrastructure layer defense**
    * protect EC2 against high trafic
    * use Global Accelerator / Route 53 / CloudFront to create an easily protected and minimal attack surface
    * use ELB to scale and spread traffic in case of sudden traffic surges due to flash crowd or DDoS attack
* **Application layer defense**
    * detect and filter malicious web requests using:
        * `CloudFront` cache static content and serve from edge protecting backend
        * `WAF` filter and block requests based on request signature
        * `WAF` rate-based rules can auto block IP of bad actors
        * `WAF` managed rules block attack based on IP reputation or block ananymous IPs
        * `CloudFront` can block specific geographies
    * `Shield Advanced` automatic application layer DDOS mitigation, auto deploys WAF rules to mitigate layer 7 attacks
* **Attack Surface Reduction**
    * obfuscating AWS resource -> `CloudFront`, `API Gateway`, `ELB`
    * SG and Network ACLS:
        * filter traffic based on specific IP at the subjet or ENI-level
        * elastic IP are protected by AWS Shield Advanced
    * protect API endpoints
        * hide EC2, Lambda, elsewhere
        * edge-optimized mode - CloudFron + regional mode (more control for DDoS)
        * WAF + API Gateway: burst limits, headers filtering, use API keys
* **Architecture for DDoS Protection** -> users -> `AWS Shield([Route 53])` -> `AWS Shield([CloudFront Distribution])` -- `AWS WAF` -> `VPC`(`Public Subnets`(`Security Group`(`AWS Shield`[ALB])) -> `Private Subnets`(`Security Group`[ASG]))


## API Gateway
* **AWS API Gateway** - serverless service for createing / publishing / maintaining / monitoring and securing REST / HTTP / WebSocket APIs at scale
    * proxy for client side requests
    * integrate with `lambda` and `dynamodb` for fully serverless architecture
    * maximum time API Gateway can perform a request is `29s` -> beyond that results in TimeOutError
    * **Features**:
        * handle api versioning
        * handle various environments
        * handles authentications and authorization
        * create API keys, handle request throttling
        * swagger / Open API import to quicky define APIs
        * transform and validate requests and responses
        * generate SDK and API specifications
        * cache API responses
    * **Integrations**:
        * `Lambda Function` - invoke lambda function, easy way to expost REST API by AWS Lambda, Resource Policy on Lambda must allow(added automatically when attaching to API Gateway)
        * `HTTP` - expose HTTP endpoints to add rate limiting, caching, user auth, api keys, etc
        * `AWS Service` - any AWS API through API Gateway like AWS Step Function workflow or post a message to SQS
    * **Endpoints Types**:
        * **Edge-Optimized** - requests are routed through CloudFront Edge locations, for global clients, API Gateway still lives in only one region, `default`, improves latency
        * **Regional** - for clients within the same region, can manually combine with CloudFront (more control over caching strategies and distribution)
        * **Private** - can only be accessed from your VPC using an interface VPC endpoint (ENI), define access with resource policy
    * **Security**
        * **User Auth** -> `IAM` roles(for internal apps), `Cognito` (identity for external users), `Custom Authorizer`(write own logic)
        * **Custom Domain Name HTTPS** - through itnegration with AWS Certificate Manager (ACM)
            * for Edge-Optimized Endpoint certificate must be in `us-east-1`
            * for Regional endpoint, cert must be API Gateway region
            * must setup CNAM or A-alias record in Route 53


### API Gateway - Advanced


## AWS Artifact
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


## Route 53 - Query Logging


## Route 53 - DNSSEC


## AWS Network Firewall
* for fine-grained protection network on AWS:
    * `NACL`
    * `SG`
    * `WAF`
    * `Shield`
    * `Firewall Manager` 
* **Network Firewall** - sophisticated protection for entire Amazon VPC
    * from Layer 3 - Layer 7
    * any direction you can inspect
        * VPC to VPC traffic
        * Outbound to internet
        * Inbound from internet
        * To / from Direct Connect & Site-to-Site VPN
    * internally uses AWS GLB
    * rules can be centrally managed cross-account to apply to many VPCs
    * support 1000s of rules:
        * `IP & port` -  example: 10000s of IPs filtering
        * `Protocol` - block SMB protocol for outbound communcations
        * `Stateful domain list rule groups` - only allow outbound *.mycorp.com
        * `General pattern matching using regex`
    * **Traffic filtering** - allow / drop / alert for the traffic that matches rules
    * **Active flow inspection** - protect against network threats with intrusion-prevention capabilities (like GLB but managed by AWS)
    * send logs of rule matches to S3, CloudWatch Logs, Kinesis Data Firehose


### AWS Network Firewall - Advanced


## Amazon SES



&nbsp;
# Identity & Access Management

## IAM - Policies In Depth


## IAM - Condition Operators
* **IAM Conditions**
    * `aws.SourceIp` - restrict the client IP from which teh API calls are being made
    * `aws:RequestedRegion` - restrict the region the API calls are made to
    * `ec2:ResourceTag/<tag_key>` - restrict based on tags on EC2 Instance
    * `aws:PrincipalTag/<tag_key>` - restrict based on tags on principal
    * `aws:MultiFactorAuthPresents` - force MFA
    * `arn:aws:s3:::test` - `s3:ListBucket` listing a bucket must be a bucket level permission
    * `arn:aws:s3:::test/*` - put, get, delete object are obejct level permissions hence the star
    * `aws:PrincipalOrgId` - can be used in any resource policies to restrict access to account that are member of an AWS Organization


## IAM - Global Condition Context Keys



## IAM - Permission Boundaries
* **IAM Permission Boundaries** - allows settings a managed policy to set the maximum permissions an IAM entity can get
    * supported for users and roles(not groups)
    * can be used in combinations of AWS Organizations SCP
    * use case: 
        * delegate responsibilities to non administrators within their permissions boundaries
        * allow devs to self-assign policies and manage their own permissions, while making sure the cant escalate their priviliges
        * restrict one specific user 


## IAM - Policy Evaluation Logic
* **Authorization Model** - how policies are evaluated
    * evaluation steps:
        1. Evaluate all applicable policies
        1. Evaluate Organizations SCPs
        1. Evaluate Resource-based policies
        1. Evaluate Identity-based policies
        1. Evaluate IAM permission boundaries
        1. Evaluate session policies (either a role session or an IAM federated user session)
    * for each step
        1. If theres an explicit `DENY`, end decision and `DENY`
        1. If theres an `ALLOW`, end decision with `ALLOW`
        1. If last evaluation step: `DENY`
        1. Move to next evaluation step
* **IAM Policies & S3 Bucket Policies**
    * IAM policies attached to users / roles / groups
    * Bucket policies attached to S3 buckets
    * when evaluating if IAM Pricnipal can perform operation on bucket - the `UNION` of IAM and Bucket policies will be evaluated

IAM Permission Boundary:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "cloudwatch:*",
                "ec2:*"
            ],
            "Resource": "*"
        }
    ]
}
```


## IAM - Identity-Based vs Resource-Based Policies
* **Cross account** access to resources can be accomplished through:
    * attaching a resource-based policy to a resource (like S3 bucket policy)
    * OR using a role as a proxy
* when you assume a role (user, application or service), you give up your original permission and take the permissions assigned to the role
* when using a `resource-based policy` -> principal doesnt assume role = doesnt give up permissions
* EventBridge Security:
    * for service with resource-based policies enable access for EventBridge rules through `Resource based policy` - SNS, SQS, CloudWatch Logs, API Gateway
    * for services with NO resource-based policies use IAM role: Kinesis stream, Systems Manager Run Command, ECS task...


## IAM - ABAC
* **Attribute based access control** -


## IAM - MFA


## IAM - Credentials Report
* **IAM Credentials Report** - list of account's users and various credential status - `account level`


## IAM - Roles and PassRole to Services


## STS & Cross Account Access
* **Security Token Service** - allow to grant limited and temporary access to AWS resources
    * token is valid for up to one hour (must be refreshed)
    * `AssumeRole` - API call to STS
        * within your own account -> for enhanced security
        * cross acount access -> assume role in target account to perform actions there
    * `AssumeRoleWithSAML`
        * return cred for users logged with SAML
    * `AssumeRoleWithWebIdentity`
        * return creds for users logged with and IdP (Facebook, Google, OIDC compatible)
        * deprecated -> use Cognito instead
    * `GetSessionToken`
        * for MFA, from a user or AWS account root user
* **Assume Role Process**
    1. define IAM Role within your account or cross-account
    1. define which principals can access this IAM Role
    1. use AWS STS to retrieve creds and impersonate IAM Role you have access to (`AssumeRole API`)
    1. temporary creds can be valid between 15min - 1h


### STS - Version 1 & 2


### STS - External ID


### STS - Revoking IAM Role Temporary Security Credentials



## Organizations
* **AWS Organizations** - `global service` that allows managing multiple AWS Accounts by a `master account`
    * `management account` - the master account
    * `member accounts` - part of one organizatioinal unit
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
* **Advantages**:
    * multi account vs one account multi vpc
    * use tagging standards for billing purposes
    * enable CloudTrail on all account, send logs to central S3 account
    * send CloudWatch Logs to central logging account
    * establish cross account roles for admin purposes
    * enhance security with Service Control Policies (SCP)
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
    * strategies:
        * `Blocklist` - first allow all actions on all services, then block specific ones
        * `Allowlist` - first block all actions on all services, then allow specific ones

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


### Organizations - IAM Policies & Tag Policies
* **IAM Policies** - 
* `aws:PrincipalOrgId` - condition key in your resource-based policies to restrict access to IAM principals from accounts in an AWS Organization
    * easy to give access to whole organization and not one OU at a time
* **Tag Policies** - helps standardize tags across resources in an AWS Organization
    * ensure `consistent` tags, `audit` tagged resources, maintain proper resource `categorization`
    * helps with `AWS Cost Allocatin Tags` and `Attribute based Access Control`
    * prevent any non-comliant tagging operations on specified services and resources
    * generate a report that lists all tagged/non-compliant resources

Example tag policy:
```json
{
    "tags" : {
        "costcenter": {
            "tag_key": {
                "@@assign": "CostCenter"
            },
            "tag_value": {
                "@@assign": ["100", "200"]
            },
            "enforce_for": {
                "@@assign": ["secretsmanager:*"]
            }
        }
    }
}
```

### Organizations - Sample SCPs
Restrict EC2 Instance Types in Account:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "RequireMicroInstanceType",
      "Effect": "Deny",
      "Action": "ec2:RunInstances",
      "Resource": [
        "arn:aws:ec2:*:*:instance/*"
      ],
      "Condition": {
        "StringNotEquals": {
          "ec2:InstanceType": "t2.micro"
        }
      }
    }
  ]
}
```

Deny access to AWS based on the requested AWS Region
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DenyAllOutsideEU",
            "Effect": "Deny",
            "NotAction": [
                "a4b:*",
                "acm:*",
                "aws-marketplace-management:*",
                "aws-marketplace:*",
                "aws-portal:*",
                "budgets:*",
                "ce:*",
                "chime:*",
                "cloudfront:*",
                "config:*",
                "cur:*",
                "directconnect:*",
                "ec2:DescribeRegions",
                "ec2:DescribeTransitGateways",
                "ec2:DescribeVpnGateways",
                "fms:*",
                "globalaccelerator:*",
                "health:*",
                "iam:*",
                "importexport:*",
                "kms:*",
                "mobileanalytics:*",
                "networkmanager:*",
                "organizations:*",
                "pricing:*",
                "route53:*",
                "route53domains:*",
                "s3:GetAccountPublic*",
                "s3:ListAllMyBuckets",
                "s3:PutAccountPublic*",
                "shield:*",
                "sts:*",
                "support:*",
                "trustedadvisor:*",
                "waf-regional:*",
                "waf:*",
                "wafv2:*",
                "wellarchitected:*"
            ],
            "Resource": "*",
            "Condition": {
                "StringNotEquals": {
                    "aws:RequestedRegion": [
                        "eu-central-1",
                        "eu-west-1"
                    ]
                },
                "ArnNotLike": {
                    "aws:PrincipalARN": [
                        "arn:aws:iam::*:role/Role1AllowedToBypassThisSCP",
                        "arn:aws:iam::*:role/Role2AllowedToBypassThisSCP"
                    ]
                }
            }
        }
    ]
}
```

## EC2 - Instance Metadata
* asd
* **IMDSv1 vs IMDSv1**
    * `IMDSv1` - 
    * `IMDSv2` -  

## S3 - Authorization Evaluation Process



## S3 - Cross Account Access and Canned ACL


## S3 - Sample S3 Bucket Policies


## S3 - VPC Endpoint Strategy


## S3 - Regain Access to Locked S3 Bucket


## S3 - Block Public Access Settings



## S3 - Access Points
* **S3 Access Points** - an access point to specific prefix in S3 bucket that specifies permissions to files with that prefix based on a policy that looks just like a bucket policy
    * makes managing access to specific resources for specific groups of users easier
    * attach IAM policies to access points
    * access points simplify security management for S3 Buckets
    * each Access Point has:
        * own DNS name (Internet or VPC origin)
            * VPC origin:
                * only accessible from within the VPC
                * must create VPC Endpoint to access the Access Point (Gateway or Interface Endpoint)
                * endpoint must allow access to target bucket and Access Point
                * 3 layers of protection:
                    1. VPC Endpoint Policy
                    1. `Bucket Policy` -> enforce access to bucket only through access points
                    1. `Access Point Policy` -> allow only specific user access to specific prefix
        * access point policy
* **Multi-Region Access Points** - provide global endpoint that span S3 buckets in multiple AWS regions
    * dynamically route requests to the nearest S3 Bucket (lowest latency)
    * bi-directional S3 bucket replication rules are created automatically to keep data in sync across regions
    * **Failover Controls** - allows you to shift requests across S3 buckets in different AWS regions within minutes
        * `Active-Active`
        * or `Active-Passive`
    * can define Multi-Region Access Point Access Policy


## S3 - Glacier Vault Lock and Object Lock
* **Glacier Vault Lock** - enforce a WORM (Write Once Read Many) model, where object cant be deleted by anyone
    * requires a `Vault Lock Policy`
    * lock the policy for future edits
    * helpful for compliance and data retention
* **S3 Object Lock** - adopt WORM model for object verision for a specified amount of time
    * versioning must be enabled
    * **Retention mode - Compliance**
        * object version cant be verwritten or deleted by any user, including the root user
        * objects retention modes cant be changed
        * retention periods cant be shortened
    * **Retention Mode - Governance**
        * most cant delete / overwrite / alter lock settings of an object
        * some users have special permissions to change the retention or delete the object
    * **Retention Period** - must set in both modes, protect object for fixed period, can be extended
    * **Legal Hold**
        * protect the object indefinitely, independent from retention period
        * can be freely placed and remove using the `s3:PutObjectLegalHold` IAM permission

Example Vault Lock Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "deny-based-on-archive-age",
            "Principal": "*",
            "Effect": "Deny",
            "Action": "glacier:DeleteArchive",
            "Resource": [
                "arn:aws:glacier:us-west-2:123456789012:vaults/examplevault"
            ],
            "Condition": {
                "NumericLessThan": {
                    "glacier:ArchiveAgeInDays": "365"
                }
            }
        }
    ]
}
```

## S3 - CORS
* **S3 CORS** - web browser based mechanism to allow requests to other origins while visiting the main origin
    * *Origin* = scheme (protocol) + host (domain) + port
    * CORS stands for Cross-Origin Resource Sharing
    * same origin: http://example.com/app1 & http://example.com/app2
    * different origin: http://www.example.com & http://other.example.com
    * req to different origin wont be allowed unless the other origin allows with CORS Headers (ex. `Access-Control-Allow-Origin`) 
    * ex. flow:
        1. **Web Browser** needs an image from a **Web Server** at another origin (https://www.other.com)
        1. **Web Browser** send **preflight request** [Options /, Host: www.other.com, Origin: https://www.example.com]
        1. **Web Server** return **preflight response** [`Access-Control-Allow-Origin`: https://www.example.com, `Access-Control-Allow-Methods`: GET, PUT, DELETE]
    * if client wants to make CORS request on S3 you need to enable correct CORS on S3

Example CORS configuration:
```json
[
    {
        "AllowedHeaders": [
            "Authorization"
        ],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "<url of some bucket without slash at the end>"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]
```


## Cognito User Pools
* **Cognito User Pools (CUP)** - sign in functionality for app users
    * create a serverless database of users for your web & mobile apps
    * users can:
        * login using username(or email) and password
        * reset password
        * email & phone number verification
        * set password requirements
        * MFA
        * `Federated identities`: users from Facebook, Google, SAML..., federation through 3rd party identity providers
            * if you only need federated identities use Cognito Identity Pools
        * block users if credentials are compromised elsewhere
        * login sends back a JWT
    * send emails through SNS or Cognito -> Cognito good for development, SNS is a must for production 
    * **Integrations**:
        * `API Gateway`
        * `ALB`
            * can securely authenticate users to LB
            * apps can focus on business logic
            * auth users through: 
                * `Identity Provider(IdP)` -> OIDC compliant
                * `Cognito User Pools` -> for social IdPs(like Amazon, Facebook, Google) or corporate identityes using SAML, LDAP, Microsoft AD
            * must use an `HTTPS`(443) listener to set authenticate-oidc & authenticate-cognito rules
            * `OnUnauthenticatedRequest` -> authenticate(default), deny, allow
            * process for CUP auth:
                1. create Cognito User Pool, Client and Domain
                1. make sure an ID token is returned
                1. add the social or corporate IdP if needed
                1. several URL redirections are necessary
                1. allow your Cognito User Pool Domain on your IdP apps callback URL
                    * examples: 
                        * `https://domain-prefix.auth.region.amazoncognito.com/saml2/idresponse`
                        * `https://user-pool-domain/oauth2/idpresponse`
            * process for IdP auth:
                1. configure a `Client ID` & `Client Secret`
                1. allow redirect from OIDC to your `ALB DNS name` (AWS provided) and `CNAME`(DNS Alias of app)
                    * `https://DNS/oauth2/idpresponse`
                    * `https://CNAME/oauth2/idpresponse`
    * **Hosted Authentication Page** - optionally provides a hosted UI for authenticating users
        * foundation for integration with social logins, OIDC, SAML
        * can customize logo and custom CSS
        * can host on custom domain:
            * must create ACM certificate in `us-east-1`
            * must be defined in the **App Integration** section during CUP configuration
    * **Adaptive Authentication** - allows blocking sign-in or requiring MFA if login appears suspicious
        * Cognito examines sign-in attempt and generates a `risk score`(low, medium, high) fir likeliness of malicious attacker
        * user prompted for MFA only if risk is detected
        * risk score is based on various factors:
            * using same device
            * location
            * IP address
            * more
        * checks for compromised credentials, account takeover protection, phone and email verification
        * integration with CloudWatch Logs
    * **CUP JWT**
        * Base64 encoded - easily transferred across network
        * contains:
            * `headers`
            * `payload`
            * `signature`
        * the signature must be verified to ensure the JWT can be trusted
        * payload will contain user information:
            * `sub UUID` - User ID in Cognito DB
            * `give_name`
            * `email`
            * `phone_number`
            * `attributes`
            * `expire` - when JWT expires
            * `iat` - when JWT was issued
            * more
    * **Lambda Triggers** - can integrate with AWS Lambda to perform operations during different events within CUP
        * synchronous invocation triggers:
            * `Authentication Events`:
                * `pre-auth` -> custom validation to accept/deny sign-in request
                * `post-auth` -> event logging for custom analytics
                * `pre token gen` -> augment or suppress token claims
            * `Sign-up`:
                * `pre sign-up` -> custom validation to accept/deny sign up
                * `post confirmation` -> custom welcome messages or event logging for custom analytics
                * `migrate user` -> migrate user from existing user directory to user pools
            * `Messages` -> advanced customization and localization of messages
            * `Token Creation` -> add/remove attributes in Id tokens

![Cognito User Pools - ALB integration](./aws_da_cognito_alb_cup.png)


## Cognito Identity Pools
* **Cognito Identity Pools** - provide AWS credentials to users so they can access AWS resources directly
    * used to be called `Federated Identity`
    * integrate with Cognito User Pools as an identity provider 
    * get identities for "users" so they obtain temporary AWS credentials
    * solves problems of:
        * too many users to configure all with IAM
        * limited trust
        * need an auth mechanism that scales
    * identity pool can include:
        * `Public Providers` -> amazon, facebook, google, apple
        * users in `Amazon Cognito User Pool` -> allows for unathenticated(`guest`) access
        * `OpenID Connect` Providers & `SAML` Identity Providers
        * `Developer Authenticated` Identities (custom login server)
    * once identities are provided users can access AWS services from SDK / CLI / API Gateway
    * obtained credentials are associated with `IAM policies` 
        * defined in Cognito
        * can be customized based on the user_id for fine grained control
* **IAM Roles** - various options for mapping IAM roles to identified users
    * `Default` -> setup default IAM role for authenticated and guest users
    * `Rules` -> define rules to choose which role for each user based on users ID
    * `Variables` -> partition users access using **policy variables**
    * IAM credentials are obtained by Cognito Identity Pools through STS
    * roles must have a `trust` policy of Cognito Identity Pools
* **Options**
    * `Push synchronization` -> if user settings change these changes can be pushed to all devices
    * `Cognito Streams` -> push each dataset change to Kinesis stream you own in real time.
    * `Cognito Events` -> run AWS Lambda function in response to important events in Cognito

Example guest user policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action":: [
                "s3:GetObject"
            ],
            "Effect": "Allow",
            "Resource": [
                "arn:aws:s3:::mybucket/assets/my_picture.jpg"
            ]
        }
    ]
}
```

Policy variables on S3:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": ["s3:ListBucket"],
            "Effect": "Allow",
            "Resource": ["arn:aws:s3:::mybucket"],
            "Condition": {
                "StringLike": {"s3:prefix": ["${cognito-identity.amazonaws.com:sub}/*"]}
            }
        },
        {
            "Action":: [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Effect": "Allow",
            "Resource": ["arn:aws:s3:::mybucket/${cognito-identity.amazonaws.com:sub}/*"]
        }        
    ]
}
```

Policy variables on DynamoDB:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "dynamodb:GetItem", "dynamodb:BatchGetItem", "dynamodb:Query",
                "dynamodb:PutItem", "dynamodb:UpdateItem", "dynamodb:DeleteItem",
                "dynamodb:BatchWriteItem"
            ],
            "Resource": [
                "arn:aws:dynamodb:us-west-2:123456789012:table/MyTable"
            ],
            "Condition": {
                "ForAllValues:StringEquals": {
                    "dynamodb:LeadingKeys": [
                        "${cognito-identity.amazonaws.com:sub}"
                    ]
                }
            }
        }
    ]
}
```

    
CIP with Public Providers:
![Cognito Identity Pools - Public Provider](./aws_da_cognito_cip_public_provider.png)

CIP with CUP:
![Cognito Identity Pools - Cognito User Pools](./aws_da_cognito_cip_cup.png)


### Cognito User Pools - User Groups



### Cognito & Identity Federation
* **Identity Federation** -  lets users outside of AWS to assume temporary role for accessing AWS resources
    * these users assume identity provided access role
    * federation assumes a form of 3rd party authentication:
        * LDAP
        * MS AD (~=SAML)
        * Single Sign On
        * Open ID
        * Cognito
    * using federation -> dont need to create IAM users (user management is outside of AWS)
* **SAML Federation**
    * for enterprises
    * directly integrated with AWS
    * to integrate `AD` / `ADFS` with AWS (or any `SAML 2.0`)
    * provides acces to AWS Console or CLI (through temporary creds)
    * no need to create an IAM user for each of your employees
* **Custom Identity Broker Application**
    * for enterprises that dont have identity provider compatible with SAML 2.0
    * identity broker must determine the appropriate IAM policy
    * identity broker needs to communicate with STS directly to get temporary creds
* **AWS Cognito - Federated Identity Pools**
    * for public applications
    * `Goal`: Provide direct access to AWS Resources from the Client Side
    * `How`:
        * log in to federated identity provider - or remain anonymous
        * get temporary AWS creds back from the Federate Identity Pool
        * these credentials come with a pre-defined IAM policy stating their permissions
    * `Example`: provide temp access to S3 bucket using Facebook Login
    * `Note`: Web Identity Federation is an alternative to using Cognito but AWS recommends against it


## IAM Identity Center
* **IAM Identity Center** - SSO for multiple  AWS accounts & applications
    * one login for all your:
        * AWS Account in AWS Organizations
        * Business cloud applications (e.g. Salesforce, Box, Microsoft 365,...)
        * SAML2.0-enabled applications
        * EC2 Windows Instances
* **Identity providers**
    * built-in identity store in IAM Identity Center
    * 3rd party: AD, OneLogin, Okta,...
* **Permission Sets** - specify which users have access to what
* **Fine-grained Permissions and Assignments**
    * `Multi-Account Permissions`
        * manage access across AWS accounts in your AWS Organization
        * permission sets - a collection of one or more IAM Policies assigned to users / groups to define AWS Access
    * `Application Assignments`
        * SSO access to many SAML 2.0 business applications
    * `Attribute-Based Access Control (ABAC)`
        * fine-grained permissions based on users attributes stored in IAM Identity Center Identity Store
        * example: cost center, title, locale
        * use case: define permissions once, then modify AWS access by changing the attributes


## AWS Directory Services
* **Microsoft Active Directory**
    * found on any windows server with AD Domain Services
    * database of objects:
        * user accounts
        * computers
        * printers
        * file shares
        * security groups
    * centralized security management
    * objects are organized into `trees`
    * a group of trees is a `forest`
* **AWS Directory Services**
    * **AWS Managed Microsoft AD**
        * create your own AD in AWS
        * manage users locally
        * supports MFA
        * establish `trust` connection with your on-premise AD
        * users are available both in AWS and on-premises AD and can be authenticated in both
        * `GOOD for`: you want to have users both in AWS and on-premises and share resources across them
    * **AD Connector**
        * `Directory Gateway` - a proxy to redirect to on-premise AD
        * support MFA
        * users are managed on the on-premise AD
        * users are available only in on-premise AD and AD connector serves as a proxy to that
        * `GOOD for`: you only want to have users in on-premises AD but want to let them auth through AWS
    * **Simple AD**
        * AD-compatible managed directory on AWS
        * cannot be joined with on-premise AD
* **IAM Identity Center Iintegrations**
    * connect to `AWS Managed Microsoft AD` out of the box
    * connect to `Self-Managed AD` - create two-way trust relationship using AWS Managed Microsoft AD, or use AD Connector


## AWS Control Tower
* **AWS Control Tower** - easy way to setup(few clicks) and govern secure and compliant multi-account AWS environment based on best practices
    * `automated setup` in few clicks
    * `automated` ongoing `policy management` using Guardrails
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
    * provides ongoing governance for your Control Tower environment
    * `Preventive Guardrail - using SCPs` - example restrict regions across all your account
    * `Detective Guardrail - using AWS Config` - identify untagged resources

&nbsp;
# Data Protection


## Encryption
* **Encryption** - 
    * **Encryption in flight** - data is encrypted before sending and decrypted after receiving
        * SSL certificates help with encryption (HTTPS)
        * encryption in flight ensures no MITM (man in the middle attack) can happen 
    * **Encryption at rest** - encryption by server after receiving the data
        * data is decrypted before being sent
        * stored in an encrypted form thanks to a key (usually a data key)
        * the encryption / decryption keys must be managed somewhere and the server must have access to it
    * **Client side encryption** - data is encrypted by the client and never decrypted by the server
        * data will be decrypted by a receiving client
        * the server should not be able to decrypt the data
        * could leverage `Envelope Encryption`



## CloudHSM
* **CloudHSM** -> AWS provisions encryption `hardware`, by providing dedicated hardware (HSM - Hardware Security Module)
    * AWS manages the hardware
    * you manage your own encryption keys
    * HSM is tamper resistant (FIPS 140-2 level 3 compliance)
    * compliant with `FIPS 140-2 Level 3` security standard
    * the `AWS CloudHSM Service` communicates with an `AWS CloudHSM Client` through SSL to manage keys securely
    * support both `symmetric` and `asymmetric` encryption (SSL / TLS keys)
    * no free tier
    * must use the `CloudHSM Client Software`
    * Redshift support CloudHSM for database encryption and key management
    * Good option to use with `SSE-C encryption` on top of S3 when managing own encryption keys
    * if you want to import on-premise assymetric keys -> only possible through CloudHSM
* access:
    * `IAM permissions` - allow CRUD on HSM Cluster at a high level
    * `CloudHSM Software` - manage keys, users, access to keys
* **High Availability**
    * CloudHSM clusters are spread across Multi AZ
    * great for availability and durability
* **Integration** - can intergrate with KMS, configure custom KMS Key Store with CloudHSM, AWS Service use HSM keys that are stored in AWS KMS
* **CloudHSM vs KMS**
    * `CloudHSM`
        * `tenancy`: single-tenant
        * `standard`: FIPS 140-2 Level 3
        * `master keys`: Customer Managed CMK
        * `key types`: Symmetric / Asymettric / digital signing / hashing
        * `key accessiblity`: deployed / managed in VPC, can be shared across VPCs with VPC Peering(so across multiple regions)
        * `cryptographic acceleration`: SSL / TLS Acceleration, Oracle TDE Acceleration
        * `access & authentication`: you create users and manage permissions
        * `high availability`: add multiple HSMs over AZs
        * `audit capability`: CloudTrail, CloudWatch, MFA support
        * `free tier`: no
    * `KMS`:
        * `tenancy`: multi-tenant
        * `standard`: FIPS 140-2 Level 2
        * `master keys`: AWS Owned / AWS Managed / Customer Managed CMK
        * `key types`: Symmetric / Asymettric / digital signing
        * `key accessiblity`: in multple regions
        * `cryptographic acceleration`: none
        * `access & authentication`: AWS IAM
        * `high availability`: AWS Managed Service
        * `audit capability`: CloudTrail, CloudWatch
        * `free tier`: yes


### CloudHSM - Advanced



## KMS
* **Key Management Service (KMS)** -> AWS manages encryption keys, while user decides who/what has access to them
    * `aws manages` encryption keys for us
    * fully integrated with `IAM` for `authorization`
    * can `audit` KMS Key usage using `CloudTrail`
    * GOOD PRACTICE: never store secrets in plaintext, especially in code
    * KMS Key Encryption available through `API calls` (SDK, CLI)
        * can perform encryption using KMS in apps and scripts
        * encrypted secrets can be stored in the code / environment variables
    * encryption per AWS Service:
        * `seamlessly integrated` into most AWS Services
        * opt-in:
            * EBS volumes
            * RDS database
            * S3 buckets
            * Redshift database
            * EFS drives
        * automatically:
            * CloudTrail logs
            * S3 Glacier
            * Storage Gateway
* **Encryption types**
    * *Data at rest* -> data stored on a device
        * EFS, RDS, S3 Glacier Deep Archive
    * *Data in transit* (or in motion) -> data that is being transferred on the `network` from a source to a target
        * on-premises -> AWS, EC2 -> DynamoDB
    * ideally we want to encrypt data in both states
* **Encryption keys Types**
    * `Symmetric (AES-256 keys)` - single encryption key that is used to Encrypt and Decrypt
        * AWS services that are integrated with KMS use Symmetric CMKSs
        * must call KMS API to use - never get access to the KMS Key unencrypted
        * API:
            * `Encrypt` - encrypt up to 4KB of data through KMS
            * `GenerateDataKey` - generate unique symmetric data key (DEK)
                * returns plaintext copy of DEK
                * AND a copy that is encrypted under the CMK that you specify
            * `GenerateDataKeyWithoutPlaintext` - generate DEK to use at some point and stores an encrypted DEK at CMK you specify
            * `Decrypt` - decrypt up to 4 KB of data (include DEK)
            * `GenerateRandom` - returns a random byte string
    * `Asymmetric (RSA & ECC key pairs)` - use public key to encrypt and private key to eecrypt
        * used for Encrypt / Decrypt, or Sign / Verify operations
        * the public key is downloadable, but you cant access the Private Key unencrypted
        * use case: encryption outside of AWS by users who cant call the KMS API
* **Types of Encryption Keys within AWS** - various kinds of encryption keys available in AWS:
    * `AWS Owned Keys` -> collection of CMKs that an AWS service owns and manages for multiple accounts
        * are free
        * include: `SSE-S3`, `SSE-SQS`, `SSE-DDB` (default key)
        * aws can use to protect resources
        * customer does not have access or any type of control over these keys
    * `AWS Managed KMS Key` -> created/managed/used by AWS on the customer's behalf, only used by AWS services
        * form: `aws/s3`, `aws/ebs`, `aws/redshift`
        * free to use
        * rotate automatically every 1 year
    * `Customer Managed CMK` -> create/manage/used by client and can be enabled/disabled, define rotation policy, bring own key
        * created in KMS cost; 1$ / month
        * imported symmetric key: 1$ / month
        * pay for API call to KMS: 0.03$ / 10000 calls
        * if enabled automatic rotation every 1 year
        * for imported keys only manual rotation possible using alias
    * `CloudHSM Keys (custom keystore)` -> keys generated from own CloudHSM hardware device
        * cryptographic operations happen within the CloudHSM cluster
* **Copying Snapshots across regions**  
    1. You have an EBS Volume Encrypted with KMS `KMS Key A`
    1. Create a snapshot of the EBS, will also be encrypted with  KMS `KMS Key A`
    1. Copy the snapshot and `ReEncrypt` with new key in new region `KMS Key B`
    1. The same KMS Key cannot live in two regions
* **Copying Snapshots across accounts**
    1. create a Snapshot, encryptec with your own KMS Key (Customer Managed Key)
    1. attach a KMS Key Policy to authorize cross-account access
    1. share the encrypted snapshot
    1. in target account create a copy of the snapshot
    1. encrypt the copied snapshot with a CMK in target account
    1. create a volume from the snapshot
* `ThrottlingException` - when exceeding KMS Request Quotas
    * all cryptiographic operations share a quota - across regions, includes requests made by AWS(ex. SSE-KMS)
    * quotas are different depending on region
    * solutions:
        * use exponential backoff
        * for `GenerateDataKey` consider DEK caching
        * can request a Request Quotas increase through API or AWS Support
* **Integrations**
    * **Lambda** - can encrypt environment variables and decrypt at runtime, provides easy to use snippet, IAM role must have permission to `Decrypt`
    * **S3 Bucket Key** - new encryption setting for buckets using SSE-KMS encryption
        * can decrease number of API calls to KMS from S3 by 99% 
        * can decrease costs of KMS encryption on S3 by 99%
        * leverages data keys - generates an `S3 bucket key` that is used to encrypt objects
        * will see less KMS CloudTrail events
    * **CloudWatch** - can encrypt CloudWatch logs with KMS keys
        * enabled at log group level, by associating CMK
        * can be done when creating log group or after creation
        * can only be done using CloudWatch Logs API:
            * `associate-kms-key` - if the log group exists
            * `create-log-group` - if log group doesnt exist yet


### KMS - Multi Region Key
* a featue that allows a `Primary Key` in a specific region to be replicated into other regions as `Replica Keys`
* **Multi-Region Keys** 
    * are not global
    * each one is managed independently (own Key Policies)
    * have the same:
        * `key ID`
        * `key material`
        * `automatic rotation`
* removes the need for:
    * encrypt in one Region and decrypt in other Regions
    * no need to re-encrypt or making cross-Region API calls
* **use cases**: `global` client-side encryption, encryption on Global DynamoDB, Global Aurora
* integrations:
    * **DynamoDB**:
        * can encrypt specific attributes client-side in DynamoDB table using `Amazon DynamoDB Encryption Client`
        * combined with `Global Tables`, encrypted data is replicated across regions
        * multi-region key enable low-latency API calls to KMS in their region to decrypt this data client-side
        * benefits:
            * protect `specific fields`
            * guarentee only decryption if client has API key
            * no cross-region API calls
    * **Global Aurora**
        * encrypt specific attributes client-side in Aurora using `AWS Encryption SDK`
        * combined with `Aurora Global Tables`, encrypted keys are replicated to other regions
        * multi-region key enable low-latency API calls to KMS in their region to decrypt this data client-side
        * benefits: same as for DynamoDB + can protect specific fields even from database admins


### KMS - Envelope Encryption
* **Envelope Encryption** - encryption pattern used if you want to encrypt data that is more than 4 KB in size
    * KMS Encrypt API call has a limit of 4 KB
    * this encryption pattern uses `GenerateDataKey` API which can encrypt over 4 KB of data
    * encryption process:
        1. `GenerateDataKey` API call sends back a Plaintext DEK (Data Encryption Key) and Encrypted DEK
        1. Encrypt big file client side using the `Plaintext DEK`
        1. Build `Envelope` around file containing the Encrypted DEK and Encrypted File
    * decryption process:
        1. Call `Decrypt` API with Encrypted DEK
        1. Returns `Plaintext DEK`
        1. Decrypt Encrypted Data File using the `Plaintext DEK`
    * `Encryption SDK` - implement Envelope Encryption, also exists as CLI, implements Java / Python / C / Javascript
    * **Data Key Caching** - feature that allows caching and reusing the DEK across files
        * lower security - reused DEK
        * lower cost - less number of calls to KMS
        * `LocalCryptoMaterialsCache` - defines attributes of the cached keys like, max age, max bytes, max number of messages encrypted by DEK before creating a new one


### KMS - Key Rotation
* **Automatic Rotation**
    * can enable automatic key rotation for `CMK` (customer-managed key)
    * if enabled -> key rotation happens `every 1 year`
    * `previous key` is `kept active` so you can decrypt old data
    * new key has the `same CMK ID` (only backing key is changed)
* **Manual Rotation**
    * if you want to rotate every 90 / 180 / etc days
    * new key has a `different CMK ID`
    * `keep` the `previous key` active so you can decrypt old data
    * better to `use aliases` in this case (to hide change of key for the application)
    * good solution to rotate CMK that are not eligible for automatic rotation (like asymetric CMK)
* **KMS Alias Updating** - better to use aliases in this case - to hide the change of key for the application


### KMS - Key Deletion
* **KMS Key Deletion**
    * schedule CMK deletion - waiting period of `7 - 30 days`
    * CMK goes into status `Pending Deletion` while waiting
    * during waiting -> CMK `cant` be used for `cryptographic operations`
    * the key is `not rotated` even if planned
    * can `cancel deletion`
    * can use `CloudTrail` -> `CloudWatch Logs` -> `CloudWatch Alarms` -> `SNS` -> to be notified if someone tries to perform cryptographic operations with key in Pending Deletion state


### KMS - Key Policies
* **Key Policies and IAM**
    * control access to KMS keys use a Key Policy (like an S3 buket policy)
    * you cannot control access without them
    * policy types:
        * `Default KMS Key Policy`
            * create if you dont provide a specific KMS Key Policy
            * complete access to the key to the root user = entire AWS account
        * `Custom KMS Key Policy`
            * define users / roles that can access the KMS key
            * define who can administer the key
            * useful for cross-account access of your KMS Key
    * **Principal Options** in Key Policy:
        * `AWS Account and Root User`
            * `"Principal": { "AWS": "123456789012" }`
            * `"Principal": { "AWS": "arn:aws:iam::123456789012:root" }`
        * `IAM Roles`
            * `"Principal": { "AWS": "arn:aws:iam::123456789012:role/role-name" }`
        * `IAM Role Sessions` - for assumed roles for Cognito Identity Pool or SAML
            * `"Principal": { "AWS": "arn:aws:sts::123456789012:assumed-role/role-name/role-session-name" }`
            * `"Principal": { "Federated": "cognito-identity.amazonaws.com" }`
            * `"Principal": { "Federated": "arn:aws:iam::123456789012:saml-provider/provider-name" }`
        * `IAM Users`
            * * `"Principal": { "AWS": "arn:aws:iam::123456789012:user/user-name" }`
        * `Federated User Sessions`
            * `"Principal": { "AWS": "arn:aws:sts::123456789012:federated-user/user-name" }`
        * `AWS Services`
            * `"Principal": { "Service": ["ecs:amazonaws.com", "elasticloadbalancing.amazonaws.com"] }`
        * `All Principals`
            * `"Principal": "*"`
            * `"Principal": { "AWS": "*"}`


### KMS - Grants



### KMS - Condition Keys



### KMS - Key Policies Evaluation Process



### KMS - Key Cross-Account Access



### KMS - Asymmetric Encryption



### KMS - API Calls Limits and Data Key Caching



### KMS - EBS



### KMS - ABAC



### KMS - Parameter Store



## Secrets Manager
* **Secrets Manager** - newer service meant for storing secrets
    * can force rotation of secrets every X days
    * automate rotating of secrets
    * integration with Amazon RDS
    * secrets are encrypted using KMS
    * mostly for RDS integration
    * more expensive than SSM
    * Lambda function provided for RDS, Redshift, DocumentDB
*  **Types of secrets**
    * most consist of name and password and are used for *Databases*
        * links the user and pass to the DB
        * rotates 
    * *Other type of secrets* are JSON files containing multiple key:value pairs
* seamless integration with CloudFormation for RD & Aurora through `ManageMasterUserPassword` attribute in CF template

Example CF template:
```yml
Resources:
    MyCluster:
        Type: AWS::RDS::DBCluster
        Properties:
            Engine: aurora-mysql
            MasterUsername: masteruser
            ManageMasterUserPassword: true

Outputs:
    Secret:
        Value: !GetAtt MyCluster.MasterUserSecret.SecretArn
```


### Secrets Manager - Advanced



## S3 - Encryption
* **Encryption** - encrypt object using encryption keys. Different types of encryption available:
    * **Server Side Encryption (SSE)** - the server storing the object encrypts it after receiving it (encryption at rest)
        * three flavors:
            * use keys handled, owned and managed by AWS (Amazon S3-Managed Keys (**SSE-S3**))
                * encryption type AES-256
                * must set header **"x-amz-server-side-encryption": "AES256"**
                * enabled by default for new buckets & new objects
            * KMS Keys stored in AWS KMS (**SSE-KMS**) - AWS Key Management Service
                * user control over key
                * audit key usage using CloudTrail
                * must set header **"x-amz-server-side-encryption": "aws:kms"**
                * KMS limitations: 
                    * on upload it calls `GenerateDataKey` KMS API
                    * on download it calls `Decrypt` KMS API
                    * each call counts towards KMS quota per second (5500, 10000, 30000 req/s based on region)
            * use Customer-Provided Keys (SSE-C) to use own keys
                * AWS never stores the key
                * HTTPS must be used
                * key must be provided in HTTP headers for every HTTP request made
                * this is not supported in AWS Console, only SDK and CLI
    * **Client Side Encryption** - file is encrypted before it is uploaded
        * decryption also happens on client side
        * customer fully manages keys and encryption lifecycle
    * **Encryption in transit (SSL/TLS)**
        * two exposed S3 endpoints -> HTTP and HTTPS
        * HTTPS is encrypted and recommended
        * most clients use HTTPS by default
    * you can force encryption using a bucket policy -> refuse API call PUT on S3 object without encryption headers(`SSE-KMS` or `SSE-C`)


## S3 - Default Encryption
* use keys handled, owned and managed by AWS (Amazon S3-Managed Keys (**SSE-S3**))
    * encryption type AES-256
    * must set header **"x-amz-server-side-encryption": "AES256"**
    * enabled by default for new buckets & new objects


## S3 - Bucket Key
* **S3 Bucket Key** - new encryption setting for buckets using SSE-KMS encryption
    * can decrease number of API calls to KMS from S3 by 99% 
    * can decrease costs of KMS encryption on S3 by 99%
    * leverages data keys - generates an `S3 bucket key` that is used to encrypt objects
    * will see less KMS CloudTrail events


## S3 - Large File Upload with KMS


## S3 - Batch Encryption



## ELB
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


### ELB - NLB
* **NLB** - *Network Load Balancer* - `v2`, new generation, LB available from 2017
    * ultra-high performance (millions of requests per second)
    * Static IP through Elastic IP
        * has one static IP per AZ
        * Elastic IP is good for whitelisting specific IP
    * not included in AWS Free Tier
    * Layer 4 (TCP/UDP)
    * for `protocols` TCP, TLS (secure TCP), UDP  
    * **target groups**:
        * can be:
            * EC2 Instances
            * IP Addresses -> must be private IPs
            * Application Load Balancer
    * health checks support `TCP`, `HTTP`, `HTTPS` protocols


### ELB - NLB - Advanced



### ELB - Sticky Sessions
* **Sticky Session** or **Session Affinity** - allow load balancer to redirect the same client to the same instance behind the load balancer
    * works for CLB & ALB
    * "cookie" used has expiration date which you set
    * **use case**: make sure user doesnt lose his session data
    * may bring inbalance to load over backend EC2 instances
    * **cookie names**
        * `Application-based Cookies`:
            * Custom cookie
                * generated by target
                * can inlude custom attributes required by application
                * cookie name specified individually for each target group
                * *reserved cookie names*: AWSALB, AWSALBAPP, AWSALBTG (reserved by ELB)
            * Application cookie
                * generated by LB
                * name is AWSALBAPP
            * expiration based on duration set in application
        * `Duration-based cookies`
            * generated by LB
            * name is: 
                * *AWSALB* for ALB
                * *AWSELB* for CLB
            * expiration based on duration set on LB


### ELB - SSL Certificates
* SSL / TLS - Basics
    * **SSL Certificate** - allows client -> LB traffic to be encrypted in transit(in-flight encryption)
        * issued by CA (Certificate Authorities), like Comodo, Symantec, GoDaddy, GlobalSign, Digicert, Letsencrypt
        * have an expiration date and must be renewed
    * **SSL** - Secure Socket Layer - used to encrypt connections
    * **TLS** - Transport Layer Security - newer version of SSL, mainly used nowadays but still referred to as SSL
* SSL For LB
    * client <-> LB : encrypted (HTTPS)
    * LB <-> EC2 Instances : unencrypted (HTTP)
    * LB uses X.509 certificate (SSL/TLS server certificate)
    * can manage certificates using ACM (AWS Certificate Manager)
    * can create/upload own certs
    * HTTPS listener:
        * must specify default certificate
        * can add optional list of certs to support multiple domains
        * clients can use **SNI** (Server Name Indication) to specify hostname they reach
            * solves problem of loading **multiple SSL certs onto one web server** to support multiple websites
            * a newer protocol that requires client to indicate hostname of target server in the initial SSL handshake
            * server will then find correct cert or return default
            * only works for ALB & NLB, CloudFront
        * ability to specify a security policy to support older version of SSL / TLS (legacy clients)
* ALB & NLB -> support multiple listeners with multiple SSL certs through SNI


### ELB - SSL Certificates - Advanced


### NLB - TLS Listeners



## ACM
* **Amazon Certificate Manager (ACM)** - lets you easily provision / manage / deploy `SSL / TLS certificates`
    * provies in-flight encryption for websites (HTTPS)
    * support both public / private TLS certificates
    * free of charge for public TLS certs
    * automatic TLS cert renewal
    * integration (load TLS cers onto) with: `ELB (CLB, ALB, NLB)`, `CloudFront Distributions`, APIs on `API Gateway`
    * cannot use ACM with EC2
* **Requesting Public Certificates**
    1. list domain names to included in the certificate
        * Fully Qualified Domain Name (FQDN): `corp.example.com`
        * Wildcard Domain: `*.example.com`
    1. Select Validation Methods
        * `DNS Validation` is preferred for automation purposes
        * `Email validatioin` will send emails to contact addresses in the WHOIS database
        * DNS Validation will leverage a CNAME record to DNS config (ex. Route 53)
    1. will take few hours to get verified
    1. the public certificate will be enrolled for automatic renewal
        * ACM auto renews ACM-generated certs 60 days before expiry
* **Importing Public Certificates**
    * option to generate the cert outside of ACM and the import it
    * no automatic renewal - must import new cert before expiration
    * ACM sends daily expiration events starting 45 days prior to expiration
        * \# of days configurable
        * events appear in EventBridge
    * `AWS Config` has a managed rule `acm-certificate-expiration-check` to check for expiring certificates 
* **Integration with ALB** - can set HTTP -> HTTPS redirect rule on ALB to enforce HTTPS connection
* **Endpoint types**
    * `Edge-Optimized` - for global client
        * requests are routed through the CLoudFront Edge locations (improves latency)
        * the API Gateway still lives in only one region
    * `Regional` - for clients within the same region
        * can manually combine with CLoudFront (more control over `caching` strategies and distribution)
    * `Private`
        * can only be accessed from your VPC using an interface VPC endpoint (ENI)
        * use resource policy to define access
* **Integration with API Gateway**
    * create a `Custom Domain Name` in API Gateway
    * `Edge-Optimized`
        * default
        * the TLS Certificate must be in the same region as CloudFront - `us-east-1` (where CloudFront is located)
        * then setup CNAME or (better) A-Alias record in Route 53
    * `Regional`
        * TLS certs must be imported on API Gateway in the same region as the `API Stage`
        * then setup CNAME or (better) A-Alias record in Route 53


### ACM - Advanced


&nbsp;
# Other Services



## Direct Connect
* **Direct Connect (DX)**
    * physical dedicated and private connection between on-premise network and AWS
    * must be setup between DC and AWS Direct Connect locations
    * must setup Virtual Private Gateway on your VPC
    * does not have access to VPC Endpoints from DX
    * features:
        * access public (S3) and private (EC2) resources on same connection
        * private, secure and fast
        * over `private network`
    * take away: `slow to establish but fast and secure`
    * use cases:
        * increase `bandwidth` throughput -> lower costs with large scale data sets
        * more `consistent network` experience -> real-time data feeds
        * hybrid environments
    * **Connection Types**
        * `Dedicated Connection` - 1Gbps / 10 Gbps / 100 Gbps capacity
            * physical ehternet port dedicated to a customer
            * request made to AWS first -> completed by AWS Direct Connect Partners
        * `Hosted Connections` - 50 Mbps / 500 Mbps / 10 Gbps capacity
            * connection requests made via AWS Direct Connect Partners
            * capcity can be added or removed on demand
            * 1, 2, 5, 10 Gbps available at select AWS Direct Connect Partners
        * lead time often longer than 1 month to establish connection
* **Direct Connect Gateway** - allows setup to one or more VPC in many different regions (same account)
* **Encyrption**
    * data in-transit not encrypted, but private
    * AWS Direct Connect + VPN provides an IPsec-encrypted private connection
        * good for an extra level of security, more complex to setup
* **Resiliency**
    * `High` -> one connection at multiple locations
    * `Maximum` -> separate connections terminating on separate devices in more than one location
* **Site-to-Site VPN Integration** - can setup Site-to-Site VPN connection as backup to DX
    * cheaper than DX backup

![Direct Connect Setup](./aws_sa_dx.png)


## ECR
* **Elastic Container Registry** - managed docker registry
    * `stores` and `manages` Docker `images` on AWS
    * `private` and `public` repositories on Amazon ECR Public Gallery (https://gallery.ecr.aws)
    * fully integrated with `ECS`
    * backed by Amazon `S3`
    * access controlled though `IAM Roles`
    * suports image vulnerability scanning, versioning, image tags, image lifecycle
* **Commands**
    * *Login* -> login to ECR
    * *Docker* commands -> pull and push images
    * need IAM policies for commands

``` bash
# command to get credentials to login ECR
aws ecr get-login-password --region {eu-west-1} | docker login --username AWS --password-stdin {aws_account_id}.dkr.ecr.{eu-west-1}.amazonaws.com

# docker commands
docker push {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
docker pull {aws_account_id}.dkr.ecr.{region}.amazonaws.com/demo:
```


### ECR - Security



## ECS - Secret Management



## EKS - Concepts



## Lambda - Security



## Lambda - VPC
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


## AWS Signer



## Glue
* managed **ETL (Extract, transform, load)** service
* useful to prepare and transform data for analytics
* fully serverless
* example:
    * pull data from RDS / S3 into glue
    * execute scripts on data
    * load data into RedShift
* **Glue Data Catalog** - catalog of datasets that are available on your AWS account
    * can be used with Athena/Redshift/EMR
    * integrates with:
        * S3
        * RDS
        * DynamoDB
        * JDBC
    * uses the `AWS Glue Data Crawler` that crawls DBs and writes metadata to AWS Glue Data Catalog
    * can then perform `Data Discovery` with Athena, Redhisft Spectrum, EMR
* **Convert data into Parquet format**
    * import `CSV` from `Source S3` to `Glue ETL` and transfer result into  `Output S3` for analysis with `Amazon Athena`
    * can automate process using Lambda or EventBridge which triggers Glue ETL Job
* **Glue Job Bookmarks** - prevents re-processing old data
* **Glue Elastic Views**
    * combine and replicate data across multiple data stores using SQL
    * no custom code
    * serverless
    * Glue monitors for changes in teh source data
    * leverages a "virtual table" (materialized view)
* **Glue DataBrew** - clean and normalize data using pre-built transformation
* **Glue Studio** - new GUI to create / run / monitor ETL jobs in Glue
* **Glue Streaming ETL** - allows running ETL jobs as streams (instead of batches)
    * built on Apache Spark Structured Streaming
    * compatible with Kinesis Data Streaming, Kafka, MSK (managed Kafka)


### Glue - Security




## Workspaces Security




## ASG - Instance Refresh




## EBS - Data Volume Wiping




## CloudShell




## RDS & Aurora Security




## IoT Core Security




## EC2 - Image Builder
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



## EC2 - Image Builder - Troubleshooting




## Redshift - Security