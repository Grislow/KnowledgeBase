# AWS Certified SysOps Associate

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.


#### Table of contents

* [EC2 for SysOps](#ec2-for-sysops)
    * [Launching an EC2](#launching-an-ec2)
    * [Changing EC2 Instance Type](#changing-ec2-instance-type)
    * [Enhanced Networking](#enhanced-networking)
    * [EC2 - Placement Groups](#ec2---placement-groups)
    * [EC2 - Shutdown Behavior & Termination Protection](#ec2---shutdown-behavior-&-termination-protection)
    * [EC2 - TroubleShooting](#ec2---troubleshooting)
    * [EC2 - Instance Purchasing Options](#ec2---instance-purchasing-options)
    * [EC2 - Spot Instances & Spot Fleets](#ec2---spot-instances-&-spot-fleets)
    * [Burstable Instances](#burstable-instances)
    * [Elastic IPs](#elastic-ips)
    * [Cloudwatch Metrics for EC2](#cloudwatch-metrics-for-ec2)
    * [CloudWatch - Unified CloudWatch Agent](#cloudwatch---unified-cloudWatch-agent)
    * [EC2 - Instance Status Checks](#ec2---instance-status-checks)
    * [EC2 - Hibernate](#ec2---hibernate)
* [AMI - Amazon Machine Image](#ami---amazon-machine-image)
    * [AMI - No Reboot Option](#ami---no-reboot-option)
    * [EC2 - Instance Migration using AMIs](#ec2---instance-migration-using-amis)
    * [EC2 - Image Builder](#ec2---image-builder)
    * [AMI in Production](#ami-in-production)
* [Managing EC2 at Scale](#managing-ec2-at-scale)
    * [Systems Manager (SSM)](#systems-manager-(ssm))
        * [SSM - Resource Groups](#ssm---resource-groups)
        * [SSM - Documents](#ssm---documents)
        * [SSM - Run Command](#ssm---run-command)
        * [SSM - Automations](#ssm---automations)
        * [SSM - Inventory & State Manager](#ssm---inventory-&-state-manager)
        * [SSM - Patch Manager](#ssm---patch-manager)
        * [SSM - Session Manager](#ssm---session-manager)
        * [SSM - Parameter Store](#ssm---parameter-store)
    * [AWS OpsWorks](#aws-opsworks)
* [EC2 - High Availability and Scalability](#ec2---high-availability-and-scalability)
    * [ELB](#elb)
        * [ELB - Sticky Sessions](#elb---sticky-sessions)
        * [ELB - Cross Zone Load Balancing](#elb---cross-zone-load-balancing)
        * [ELB - SSL Certificates](#elb---ssl-certificates)
        * [ELB - Connection Draining](#elb---connection-draining)
        * [ELB - Health Checks](#elb---health-checks)
        * [ELB - Monitoring, Troubleshooting, Logging, Tracing](#elb---monitoring,-troubleshooting,-logging,-tracing)
        * [Target Group Attributes](#target-group-attributes)
        * [ALB - Rules](#alb---rules)
    * [ASG](#asg)
        * [ASG Scaling Policies](#asg-scaling-policies)
        * [ASG - SysOps](#asg---sysops)
        * [ASG - CloudWatch](#asg---cloudwatch)
        * [Auto Scaling](#auto-scaling)
* [Elastic Beanstalk](#elastic-beanstalk)
* [CloudFormation](#cloudformation)
    * [YAML](#yaml)
    * [CloudFormation Resources](#cloudformation-resources)
    * [CloudFormation Parameters](#cloudformation-parameters)
    * [CloudFormation Mappings](#cloudformation-mappings)
    * [CloudFormation Outputs](#cloudformation-outputs)
    * [CloudFormation Conditions](#cloudformation-conditions)
    * [CloudFormation Intrinsic Functions](#cloudformation-intrinsic-functions)
    * [CloudFormation Rollbacks](#cloudformation-rollbacks)
    * [CloudFormation User Data](#cloudformation-user-data)
    * [CloudFormation cfn-init](#cloudformation-cfn-init)
    * [CloudFormation cfn-signal](#cloudformation-cfn-signal)
    * [CloudFormation Nested Stacks](#cloudformation-nested-stacks)
    * [CloudFormation ChangeSets](#cloudformation-changesets)
    * [CloudFormation DeletionPolicy](#cloudformation-deletionpolicy)
    * [CloudFormation TerminationProtection](#cloudformation-terminationprotection)
    * [CloudFormation CreationPolicy](#cloudformation-creationpolicy)
    * [CloudFormation UpdatePolicy](#cloudformation-updatepolicy)
    * [CloudFormation DependsOn](#cloudformation-dependson)
    * [CloudFormation Stack Policies](#cloudformation-stack-policies)
    * [CloudFormation Multi Region StackSets](#cloudformation-multi-region-stacksets)
    * [CloudFormation Continue Rolling Back and Update](#cloudformation-continue-rolling-back-and-update)
* [Lambda for SysOps](#lambda-for-sysops)
    * [Lambda](#lambda)
    * [Lambda - S3 Event Notifications](#lambda---s3-event-notifications)
    * [Lambda - IAM Roles & Resource Policies](#lambda---iam-roles-&-resource-policies)
    * [Lambda - X-Ray Tracing](#lambda---x-ray-tracing)
    * [Lambda - Function Performance](#lambda---function-performance)
    * [Lambda - Concurrency](#lambda---concurrency)
    * [Lambda - Monitoring Extras](#lambda---monitoring-extras)
* [EC2 Storage and Data Management](#ec2-storage-and-data-management)
    * [EC2 - Instance Store](#ec2---instance-store)
    * [EBS](#ebs)
        * [EBS - Volume Types](#ebs---volume-types)
        * [EBS - Multi Attach](#ebs---multi-attach)
        * [EBS - Operations](#ebs---operations)
* [EFS](#efs)
    * [EFS - Access Points](#efs---access-points)
    * [EFS - Operations](#efs---operations)
    * [EFS - CloudWatch Metrics](#efs---cloudwatch-metrics)
* [S3](#s3)
    * [S3 - Policies](#s3---policies)
    * [S3 - Website](#s3---website)
    * [S3 - Versioning](#s3---versioning)
    * [S3 - Replication](#s3---replication)
    * [S3 - Storage Classes](#s3---storage-classes)
    * [S3 - Lifecycle Rules](#s3---lifecycle-rules)
    * [S3 - Event Notifications](#s3---event-notifications)
    * [S3 - Performance](#s3---performance)
    * [S3 & Glacier Select](#s3-&-glacier-select)
    * [S3 - Batch Operations](#s3---batch-operations)
    * [S3 - Inventory](#s3---inventory)
    * [S3 - Glacier](#s3---glacier)
    * [S3 - Glacier Vault Lock and Object Lock](#s3---glacier-vault-lock-and-object-lock)
    * [S3 - Multi-Part Upload](#s3---multi-part-upload)
    * [Athena](#athena)
    * [S3 - Encryption](#s3---encryption)
    * [S3 - CORS](#s3---cors)
    * [S3 - MFA](#s3---mfa)
    * [S3 - Access Logs](#s3---access-logs)
    * [S3 - Pre-signed URLs](#s3---pre-signed-urls)
    * [S3 - Access Points](#s3---access-points)
    * [S3 - VPC Endpoints](#s3---vpc-endpoints)
* [Advanced Storage](#advanced-storage)
    * [AWS Snow Family](#aws-snow-family)
    * [Amazon FSx](#amazon-fsx)
    * [Storage Gateway](#storage-gateway)
* [CloudFront](#cloudfront)
    * [CloudFront - TroubleShooting](#cloudfront---troubleshooting)
    * [CloudFront - Caching](#cloudfront---caching)
    * [CloudFront - ALB Sticky Sessions](#cloudfront---alb-sticky-sessions)
* [Databases for SysOps](#databases-for-sysops)
    * [RDS](#rds)
        * [RDS - Multi-AZ vs Read Replicas](#rds---multi-az-vs-read-replicas)
        * [RDS - Multi-AZ Failover Conditions](#rds---multi-az-failover-conditions)
        * [RDS Proxy](#rds-proxy)
        * [RDS - Parameter Groups](#rds---parameter-groups)
        * [RDS - Backups and Snapshots](#rds---backups-and-snapshots)
        * [RDS - Events and Logs](#rds---events-and-logs)
        * [RDS - CloudWatch](#rds---cloudwatch)
        * [RDS - Performance Insights](#rds---performance-insights)
    * [Aurora](#aurora)
        * [Aurora - Backups](#aurora---backups)
        * [Aurora - SysOps](#aurora---SysOps)
    * [RDS & Aurora Security](#rds-&-aurora-security)
    * [ElastiCache](#elasticache)
        * [ElastiCache - Redis Cluster Modes](#elasticache---redis-cluster-modes)
        * [ElastiCache - Redis for SysOps](#elasticache---redis-for-sysops)
        * [ElastiCache - Memcached for SysOps](#elasticache---memcached-for-sysops)
* [Monitoring, Auditing & Performance](#monitoring,-auditing-&-performance)
    * [CloudWatch - Metrics](#cloudwatch---metrics)
    * [CloudWatch - Custom Metrics](#cloudwatch---custom-metrics)
    * [CloudWatch - Dashboards](#cloudwatch---dashboards)
    * [CloudWatch - Logs](#cloudwatch---logs)
    * [CloudWatch - Alarms](#cloudwatch---alarms)
    * [CloudWatch - Synthetics](#cloudwatch---synthetics)
    * [EventBridge](#eventbridge)
        * [EventBridge - Content Filtering](#eventbridge---content-filtering)
        * [EventBridge - Input Transformation](#eventbridge---input-transformation)
    * [Service Quotas](#service-quotas)
    * [CloudTrail](#cloudtrail)
        * [CloudTrail - SysOps](#cloudtrail---sysops)
    * [Config](#config)
        * [Config - Aggregators](#config---aggregators)
* [AWS Account Management](#aws-account-management)
    * [Status Health Dashboard](#status-health-dashboard)
    * [Personal Health Dashboard](#personal-health-dashboard)
    * [Organizations](#organizations)
        * [Organizations - SysOps](#organizations---sysops)
    * [AWS Control Tower](#aws-control-tower)
    * [AWS Service Catalog](#aws-service-catalog)
    * [AWS Billing Alarms](#aws-billing-alarms)
    * [AWS Cost Explorer](#aws-cost-explorer)
    * [AWS Budgets](#aws-budgets)
    * [AWS Cost Allocation Tags & Cost & Usage Reports](#aws-cost-allocation-tags-&-cost-&-usage-reports)
    * [AWS Compute Optimizer](#aws-compute-optimizer)
* [Disaster Recovery](#disaster-recovery)
    * [AWS DataSync](#aws-datasync)
    * [AWS Backup](#aws-backup)
* [Security and Compliance](#security-and-compliance)
    * [Shared Responsibility Model](#shared-responsibility-model)
    * [DDoS, AWS Shield and AWS WAF](#ddos,-aws-shield-and-aws-waf)
    * [Penetration Testing on AWS](#penetration-testing-on-aws)
    * [Amazon Inspector](#amazon-inspector)
    * [Logging in AWS](#logging-in-aws)
    * [Amazon GuardDuty](#amazon-guardduty)
    * [Amazon Macie](#amazon-macie)
    * [Trusted Advisor](#trusted-advisor)
    * [Encryption](#encryption)
    * [KMS](#kms)
        * [KMS - Key Rotation](#kms---key-rotation)
        * [KMS - SysOps](#kms---sysops)
    * [CloudHSM](#cloudhsm)
    * [AWS Artifact](#aws-artifact)
    * [ACM](#acm)
    * [Secrets Manager](#secrets-manager)
        * [Secrets Manager - Monitoring & Troubleshooting](#secrets-manager---monitoring-&-troubleshooting)
        * [Secrets Manager vs SSM](#secrets-manager-vs-ssm)
* [Identity](#identity)
    * [IAM Security Tools](#iam-security-tools)
    * [IAM Access Analyzer](#iam-access-analyzer)
    * [Identity Federation with SAML & Cognito](#identity-federation-with-saml-&-cognito)
    * [STS & Cross Account Access](#sts-&-cross-account-access)
    * [Cognito User Pools](#cognito-user-pools)
    * [Cognito Identity Pools](#cognito-identity-pools)
    * [IAM Identity Center](#iam-identity-center)

* [Other Services](#other-services)



&nbsp;
# EC2 for SysOps

## Launching an EC2
* to connect with instances/servers you can use: 
    * `EC2 Instance Connect` - doesnt require SSH key cause they will be temporarily uploaded for the session
    * `Session manager` - no ports required
    * `SSH` - requires port 22 open in EC2 SG


## Changing EC2 Instance Type
You can change the instance type by:
1. Stop the instance
1. Right click in console and select `Change Instance Type`
1. Only works for EBS backed instances
1. Newer instance types have EBS Optimized enabled for better throughput


## Enhanced Networking
* **EC2 Enhanced Networking (SR-IOV)**
    * higher bandwidth, higher PPS (packet per second), lower latency
    * to enable:
        * Option 1 : setup `Elastic Network Adapter (ENA)` to get up to 100 Gbps
        * Option 2 : use `Intel 82599 VF` give up to 10Gbps -> LEGACY
    * is enabled by default in newer generatioin instances
* **Elastic Fabric Adapter (EFA)**
    * `improved ENA` for HPC
    * only works on `Linux`
    * great for inter-node communcations, `tightly coupled workloads`
    * leverages `Message Passing Interface (MPI)` standard
    * bypasses the underlying Linux OS to provide low-latency, reliable transport

```shell
# check if ENA is installed
modinfo ena 

# information about network interface driver
#   - driver: vif -> not using ena
#   - driver: ena -> using ena
ethtool -i eth0 
```


## EC2 - Placement Groups
* defining placement groups gives control over EC2 Instance physical placement
* **Placement Strategies**:
    * `Cluster`
        * clusters instances into a low-latency group in a single AZ on the same rack
        * pros:
            * great network (10 Gbps bandwidth between instances)
        * cons:
            * if rack fails, all instance fails at the same time
        * use case: Big Data job that needs to complete fast, app that needs extremely low latency and high network throughput
    * `Spread`
        * spreads instances across underlying hardware
        * max 7 instances per group per AZ
        * pros:
            * minimizes risk of simultaneous failure
            * can span across AZ
            * instances on different physical hardware
        cons:
            * limited to 7 instances per AZ per placement group
        * use case: HA, critical applications where instances need isolation from each other
    * `Partition`
        * spreads instances across many different partitions, which rely on different server racks within an AZ
        * scales to 100s of EC2 instances per group
        * up to 7 partitions per AZ
        * can span multiple AZs
        * instances in a partition do not share rack with instances in other partition
        * a partition failure can affect many EC2 but wont effect other partitions
        * EC2 instances get acess to the partition information as metadata
        * use case: Hadoop, Cassandra, Kafka, HBase, HDFS


## EC2 - Shutdown Behavior & Termination Protection
* **Shutdown Behavior** - if OS shuts down from OS:
    * `Stop` -> default behavior, changes status to stopped
    * `Terminate` -> changes status to terminated
    * not applicable from AWS console
    * CLI attibute: `InstanceInitiatedShutdownBehavior`
* **Termination protection**
    * can be enabled to protect against accidental termination in AWS Console or CLI
    * tip: if `shutdown behavior = terminate` and `enable termination protection = true` and we terminate from OS it will still be terminated

``` shell
# shutdown instance
sudo shutdown
```


## EC2 - TroubleShooting
* **Launch Issues**
    * `# InstanceLimitExceeded` -> you have reached your limit of max number of vCPUs per region
        * On-Demand instance limits set per-region basis
        * vCPU limits only apply to running On-Demand and Spot instances
        * resolution: 
            * launch in different region
            * request quota increase from AWS for the region
                * `Console` -> `EC2` -> `Limits` -> `Request Limit Increase`
                * `Console` -> `Service Quotas Console` -> `Amazon Elastic Compute Cloud`
    * `# InsufficientInstanceCapacity` -> AWS does not have enough On-Demand capacity in the particular AZ where the instance is launched
        * resolution:
            * wait and request again
            * if making multiple requests, break down the requests
            * submit a request for a different instance type
            * launch in different AZ
    * `# Instance Terminates Immediately` -> goes from pending to terminated
        * causes:
            * reached EBS volume limit
            * corrupt EBS snapshot
            * root EBS is encrypted and you do not have permissions for KMS key decryption
            * instance store-backed AMI used is missing required part (an `image.part.xx` file)
        * troubleshooting:
            * `Console` -> `EC2` -> `Instance` -> `Instance` -> `Description` -> reason next to State transition label
* **SSH Issues**
    * `Unprotewcted private key file`
        * private key (`pem` file) on linux machine does not have `400` permissions
    * `Host Key not found` / `Permission denied` / `Connection close by [instance] port 22`
        * username for the OS was not given correctly when logging via SSH
    * `Connection timed out`
        * causes:
            * SG doesnt allow inbound TCP traffic on port 22
            * NACL is not configured correctly
            * route table of subnet does not route traffic to IGW
            * instance doesn't have IPv4
            * CPU load of instance is high
    * **Instance Connect**
        * is used through a range of IPs
        * the user goes through `EC2 Instance Connect API` so his IP is not taken into account
        * the SG should allow SSH on a range of IPs -> `18.206.107.24/29`
            * range is region specific and can be checked: https://ip-ranges.amazonaws.com/ip-ranges.json
        * a temporary SSH public key that is valid 60s is used by AWS

Change permissions of key file:
```shell
chmod 0400 KeyPair.pem
```

Instance connect IP configuration
``` json
{
    "ip_prefix": "18.206.107.24/29",
    "region": "us-east-1",
    "service": "EC2_INSTANCE_CONNECT",
    "network_border_group": "us-east-1"
}
```
    


## EC2 - Instance Purchasing Options
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
        * can lose at any point of time if your `max spot price` is less then `current spot price`
            * in this scenario can choose to stop or terminate instance with a 2 minutes grace period
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
        * purchasing options: *On-demand*, *Reserved (No Upfront, Partial Upfront, All Upfront)*
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
        * *no time commitment* and *no billing discounts*
        * sutiable for *short-term uninterrupted workloads* that need to be in a specific AZ


## EC2 - Spot Instances & Spot Fleets
* **Spot Instances** - short workloads, can lose instances (less reliable)
    * up to 90% disount compared to on-demand
    * can lose at any point of time if your `max spot price` is less then `current spot price`
        * in this scenario can choose to stop or terminate instance with a 2 minutes grace period
    * *most cost-efficient* instances
    * useful for workloads that are *resilient to failure* like:
        * *batch jobs*
        * *data analysis*
        * *image processing*
        * *distributed workkloads*
        * *workloads with flexible start and end time*
    * *not suitable* for critical jobs or databases
    * a **spot request** consists of:
        * max price
        * desired number of instances
        * launch specification
        * request type -> one-time | persistent
        * valid from
        * valid until
* **Spot Fleets** - set of Spot Instance + optional On-Demand Instances
    * will try to meet the target capacity with price constraints
    * define possible launch pools: `instance type`, `OS`, `AZ`
    * can have multiple launch pools (fleet can choose)
    * stop launching instances when cap reached or max cost
    * strategies to allocate Spot Instances:
        * `lowerPrice`: from the pool with lowest price (cost optimization, short workload)
        * `diversified`: distributed across all pools (good for availability, long workloads)
        * `capacityOptimized`: pool with optimal capacity for the number of instances
    * benefit: Allows us to automatically request Spot Instances with the lowest price


## Burstable Instances
* **Burstable Instances** - instances within the `T` family
    * have **OK** CPU performance
    * when machine gets a spike in load, it can `burst` and CPU can be **VERY** good
    * bursting utilizes `burst credits`
    * if burst credits gone - CPU becomes **BAD** -> drops to baseline
    * different instance types have different:
        * `Launch credits` -> burst credits at launch
        * `CPU credits earned per hour` -> how quickly you replenish burst credits
        * `Maximum earned CPU credit balance` -> cap on burst credits
        * `Baseline performance` -> minimal CPU performance
    * use:
        * great for unexpected traffic
        * if consistently runs low on credit -> move to different kind of non-burstable instance
* **T2 / T3 Unlimied** - unlimited burst credit balance instance tpye
    * `pay extra` if over credit balance but wont lose performance
    * if average CPU usage over 24h exceeds baseline -> billed for additional `vCPU/h`
    * costs can go high if not monitoring CPU health


## Elastic IPs
* **Elastic IP** -> allows setting a fixed public IPv4 IP to an EC2 instance
    * wont change as long as you dont delete it
    * can attach to one instance at a time
    * allows masking the failure of an instance by `rapidly remapping` the address
    * can only have `5 Elastic` IP in your account (can ask AWS to increase)
    * free of charge if attached -> payed if reserved but not attached
    * avoid using Elastic IP:
        * often reflect poor architectural decisions
        * instead -> use random public IP and register a DNS name to it
        * can also use load balancer and not use public IP at all


## Cloudwatch Metrics for EC2
* **AWS Provided metrics**:
    * `Basic Monitoring (default)` - metrics collected at 5min interval
    * `Detailed Monitoring (paid)` - metrics collected at 1min interval
    * metrics: 
        * `CPU`
            * utilization
            * credit usage / balance
        * `Network`
            * in
            * out
            * packets
        * `Disk`
            * Read / Write for Ops / Bytes (only for isntance store)
        * `Status Check Metrics`
            * Instance status = check the EC2 VM
            * System status = check the underlying hardware
        * RAM is NOT included in the AWS EC2 metrics
* **Custom metric**:
    * `Basic Resolution` - 1 minute resolution
    * `High Resolution` - 1 second resolution
    * metrics: `RAM`, `Application level metrics`
    * access: IAM permissions on the EC2 instance role


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


## EC2 - Instance Status Checks
* **Instance Status Checks** -  autoamted checks to identify hardware and software issues
    * **System Status Checks**
        * monitors problems with AWS systems 
            * `lost of network connectivity`
            * `loss of system power`
            * `software issues on the physical host`
            * `hardware issues on the physical host that impact network reachability`
        * check `Personal Health Dashboard` for any scheduled critical maintenance by AWS to hosts
        * `Resolution`: stop and start instance -> will be migrated to a new host(new IP)
    * **Instance Status Checks**
        * monitors software / network configuration of your individual instance:
            * `incorrect networking or startup configuration`
            * `exhausted memory`
            * `corrupted file system`
            * `incompatible kernel`
        * requires your involvement to fix
        * `Resolution`: reboot the instance or change the instance configuration
    * **CW Metrics & Recovery**
        * ClouWatch Metrics:
            * `StatusCheckFailed_System`
            * `StatusCheckFailed_Instance`
            * `StatusCheckFailed` -> both
        * automate with `CloudWatch Alarm`
            * recover EC2 isntance with same private IP / public IP / EIP / metadata / Placement Group
            * send notifications using SNS
        * automate with ASG:
            * less conventional
            * set min / max / desired to 1 to recover instance
            * wont keep private IP / EIP
```shell
# set alarm state for tst / debug purposes
aws cloudwatch set-alarm-state \
    --alarm-name <alarm name here> \
    --state-value ALARM \
    --state-reason "test recovery action"
```


## EC2 - Hibernate
* operations on instances:
    * `stop` -> the data on disk (EBS) is kept intact in the next start
    * `terminate` -> any EBS volumes (root) also set-up to be destroyed is lost
    * `start` -> OS boots, EC2 User Data script is run, app starts, caches get warmed up -> can take time
* **EC2 Hibernate** - the in-memory (RAM) state is preserved
    * instance boot is much faster
    * under the hood -> RAM state is written to a file in the root EBS volume
    * root EBS volume must be encrypted, not instance store and large
    * use cases: long running processing, saving the RAM state, services that take time to initialize
    * *supported instance families*: C3, C4, C5, I3, M3, M4, R3, R4, T2, T3
    * instance RAM size must be less than 150 GB
    * not supported for bare metal instances
    * **supported AMI**: Amazon Linux 2, Linux AMI, Ubuntu, RHEL, CentOS, Windows
    * available in `On-Demand`, `Reserved`, `Spot` instances
    * instance cannot be hibernated for more than `60 days`


&nbsp;
# AMI - Amazon Machine Image
* **AMI** - **Amazon Machine Image** - *customization* of an EC2 instance:
    * add own software, configuration, OS, monitoring
    * faster boot thx to pre-packaged software
* region specific and can be copied across regions
* you can launch EC2 instances from:
    * `public AMI` - provided by AWS
    * `own AMI` - you make and maintain them
    * `AWS Marketplace AMI` - an AMI someone else made and potentially sells
* you can:
    * build an AMI from an existing EC2 instance(which creates EBS snapshot)
* **Instantiating Applications Quickly**
    * **Golden AMI** - an AMI that serves as a bootstrap for all EC2 instances you use within a logical group(like for ECS Cluster, or ASG), contain all applications, OS dependencies etc
    * **Bootstrap using User Data** - good for dynamic configurations like database URL
    * **Hybrid** - mix Golden AMI and User Data to setup a fleet of EC2 instances quickly and reliably


## AMI - No Reboot Option
* enables you to create an AMI without shutting down your instance
* not selected by default -> EC2 will shutdown before creating an AMI to maintain file system integrity
* risk: no-reboot causes OS buffers not to be flushed before the snapshot is created
* **AWS Backup**
    * does not reboot instances while taking EBS snapshot
    * wont guarentee creation of AMI with file system integrity
    * to maintain integrity:
        * provide reboot parameter while taking images
        * `EventBridge` + `Lambda` + `CreateImage API with reboot`


## EC2 - Instance Migration using AMIs
* `AZ to AZ`
    * create AMI in AZ 1
    * launch / restore from AMI in AZ 2
* `Cross-Account AMI Sharing`
    * does not affect ownership of AMI
    * can only share AMI that:
        * have `unencrypted` volumes
        * volumes `encrypted` with custom managed key
            * must share key with Key Policy
            * provide permissions `kms:DescribeKey`, `kms:CreateGrant`, `kms:Decrypt`, `kms:GenerateDataKey`, `kms:ReEncrypt`
* `Cross-Account AMI Copy`
    * you are owner of copied AMI
    * source AMI owner must grant read permissions for the storage that backs AMI (EBS Snapshot)
    * if encrypted owner must share key / keys 
    * can reencrypt AMI with own CMK while copying


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


## AMI in Production
* can `force` users to only launch EC2 isntances from `pre-approved AMIs` using `IAM policies`
* **Pre-approved AMIs** are AMIs with specific tags
* can combine with `AWS Config` to find non-compliant EC2 instances (launch with non-approved AMIs)

```json
{
    "Condition": {
        "StringEquals": {
            "ec2:ResourceTag/Environment": "Prod"
        }
    }
}
```


&nbsp;
# Managing EC2 at Scale
* how to manage flee of EC2 instances and on-premise servers?
* how to apply patches at scale?
* how to run automations?
* how to store parameters?


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


## AWS OpsWorks
* **AWS OpsWorks** is a managed Chef & Puppet, alternative to `AWS SSM`
* **Chef**, **Puppet** - tools for performing server configuration automatically, or repetitive actions
    * work great with EC2 & On-Premises VM
    * only allow provisioning standard AWS resources, like:
        * EC2 instances, Databases, Load Balancers, EBS volumes
* **Architecture**
    * *OpsWorksStacks* -> [*ELB Layer* -> [`ALB`, `OpsWorks Layers`], *Application Server Layer* -> [`EC2`, `OpsWorks Layer`], *Database Layer* -> [`Database Server(RDS)`, `OpsWorks Layers`]]
    * *Cookbook Repository* -> *Application Server Layer* <- *Applications* <- *App Repository*
* use case: if you use *Chef* and *Puppet* before moving to AWS and want to reuse templates
* work with Linux / Windows
* automate user accounts / cron / ntp / packages / services
* leverage `Recipes` or `Manifests`
* similiarities with SSM / Beanstalk / CloudFormation
* open-source tools -> cloud-agnostic


&nbsp;
# EC2 - High Availability and Scalability
* **Scalability** - can handle greater loads by adapting
    * `Vertical Scalability` - increasing the size of an instance, `scale up / down`
        * common for non-distributed systems like a DB ( RDS, ElastiCache )
        * limited by hardware
    * `Horizontal Scalability` (elasticity) - increasing number of instances / systems for application, `scale out / in`
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


## ELB
* **Load Balances** - servers that forward traffic to multiple servers downstream. Used to:
    * `spread load` across instances
    * expose a `single point of access` (DNS) to your application
    * seamlessly `handle` downstream instance `failure` 
    * perform `healthchecks`
    * provide `SSL termination` (HTTPS) for your websites => decrypting SSL-encrypted data traffic before offloading it to a web server
    * enforce `stickiness` with cookies => assign identification(through cookies or IP details) and fix routing based on it
        * `Stickiness` - the ability to route traffic from a client to a single destination, instead of balancing traffic across multiple destinations
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
    * need to configure security groups on load balancers to specify rules for incoming/outgoing traffic
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
        * **retired in 2023**
    * **ALB** - *Application Load Balancer* - `v2`, new generation, LB available from 2016
        * Layer 7 (HTTP)
        * HTTP routing features
            * load balancing to multiple HTTP applications across machines(target groups)
            * can load balance to multiple apps on one EC2 instance(like Docker containers)
            * support redirects (like HTTP -> HTTPS)
        * Routing Tables to multiple target groups:
            * routing based on path in URL (example.com/`users`)
            * routing based on hostname in URL (`one`.example.com, `other`.example.com)
            * routing based on query string, headers (example.com/users?`id=123&order=false`)
        * Static DNS (URL)
        * for `protocols` HTTP, HTTPS, WebSocket, gRPC
        * **use cases**: micro services & container-based apps (ex. Docker & Amazon ECS)
        * Port mapping feature -> redirect to a dynamic port in ECS
        * **target group**:
            * can be:
                * EC2 Instances -> HTTP
                * ECS tasks -> HTTP
                * Lambda functions -> HTTP -> JSON event
                * IP Addresses -> only  Private IP Address, like a Data Center
            * can route to multiple target groups
            * health checks are at target group level (not instance, or container)
        * **good to know**:
            * get fixed hostname
            * app server doesnt see IP of client directly
                * true IP is inserted in the header `X-Forwarded-For`
                * port in `X-Forwarded-Port`
                * proto in `X-Forwarded-Proto`
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
                * IP Addresses -> must be private IPS 
                * Application Load Balancer
        * health checks support TCP, HTTP, HTTPS protocols
    * **GWLB** - *Gateway Load Balancer* - modern LB available from 2020, used to deploy/scale/manage a fleet of 3rd part network virtual appliances in AWS
        * operates at layer 3 (Network layer) - IP Protocol for IP Packets
        * combines functions:
            * **Transparent Network Gateway** - single entry/exit for all traffic
            * **Load Balancer** - distributes traffic to your virtual appliances
        * uses the `GENEVE protocol` on port **6081** on IP Packets
        * Route Traffic to Firewalls that you manage on EC2 Instances
        * **Use cases**: Firewall, Intrusion detection and prevention systems, Deep packet inspection, payload manipulation
        * sends traffic through 3rd Party Security Virtual Appliances before routing it to the destination(application)
            * after traffic is accepted it is resent to GLB
            * once accepted GLB forwards traffic to application 
        * **target groups**: 
            * EC2 instances -> with for example third party security appliances
            * IP addresses -> must be private IPs
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

### ELB - Sticky Sessions
* **Sticky Session** or **Session Affinity** - allow load balancer to redirect the same client to the same instance behind the load balancer
    * works for CLB & ALB
    * "cookie" used has expiration date which you set
    * **use case**: make sure user doesnt lose his session data
    * may bring inbalance to load over back-end EC2 instances
    * **cookie names**
        * `Application-based Cookies`:
            * Custom cookie
                * generated by target
                * can include custom attributes required by application
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

### ELB - Cross Zone Load Balancing
* **Cross Zone Load Balancing** - allows LB to distirbute traffic evenly across all registered instances in all AZs
    * without this traffic is distributed evenly amongs nodes of LB in all AZs (not targets)
    * ALB:
        * enabled by default
        * can be disabled at Target Group level
        * no charges for inter AZ data
    * NLB & GLB
        * disabled by default
        * pay for inter AZ data if enabled

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


### ELB - Connection Draining
* **Connection Draining** or **Deregistration Delay** - a delay when de-registering instance(for example when flagged as unhealthy) to provide time to complete "in-flight requests"
    * can configure the delay to between 1 - 3600s, default 300s
    * can be disabled
    * lower delay good for short requests


### ELB - Health Checks
* **Health Checks** are crucial for loadbalancers
    * enable to know if instances handling traffic can reply to requests 
    * are done on a specific port and a specific route like `/health` for example:
        * Protocol: `HTTP`
        * Port: `4567`
        * Endpoint: `/health`
    * if response to health check is not `200 (OK)` then labeled `unhealthy`
* **HealthCheck Settings**:
    * `HealthCheckProtocol` - ex. `HTTP` - protocol used to perform health checks
    * `HealthCheckPort` - ex. `80` - port used to perform health checks
    * `HealthCheckPath` - ex. `/` - destination for health checks on targets
    * `HealthCheckTimeoutSeconds` - ex. `5` - consider health check failed if time has elapsed
    * `HealthCheckIntervalSeconds` - ex. `30` - send healthcheck every n seconds
    * `HealthCheckThresholdCount` - ex. `3` - consider target healthy after n successful health checks
    * `UnhealthyThresholdCount` - ex. `5` - consider target unhealthy after n failed health checks
* **Target Health Status**
    * `Initial` - registering the target
    * `Healthy`
    * `Unhealthy`
    * `Unused` - target is not registered
    * `Draining` - de-registering target
    * `Unavailable` - health checks disabled
* if a target group contains only unhealthy targets -> ELB routes across its unhealthy targets


### ELB - Monitoring, Troubleshooting, Logging, Tracing
* **Errors**
    * `4xx` - Client errors
        * `400` - Bad Request
        * `403` - Access Denied, WAF filtered
        * `429` - Quota exceeded, Throttle
        * `460` - Client closed connection
        * `463` - X-Forwarded-For header with > 30 IP (similar to malformed request)
    * `5xx` - Server errors
        * `500` - internal server error would mean some error on the LEB itself
        * `502` - Bad Gateway Exception
            * usually incompatible output returned from a Lambda proxy integration
            * occasionally for out-of-order invocations due to heavy loads
        * `503` - Service Unavailable Exception
        * `504` - Gateway timeout - probably an issue within the server
        * `561` - Unauthorized
* **ELB CloudWatch**
    * all metrics are directly pushed to CloudWatch metrics
    * **Monitoring**:
        * `BAckendConnectionErrors`
        * `HealhtyHostCount` / `UnHealthyHostCount`
        * `HTTPCode_Backend_2XX` - succesful requests
        * `HTTPCode_Backend_3XX` - redirected request
        * `HTTPCode_Backend_ELB_4XX` - client error codes
        * `HTTPCode_Backend_ELB_5XX` - server error codes generated by the load balancer
        * `Latency` - how long it takes to get a rsponse to client
        * `RequestCount`
        * `RequestCountPerTarget` - how many requests an instances receives on average
        * `SurgeQueueLength` - total number of requests (HTTP listener) or connections (TCP listener) that are pending routing to a healthy instance
            * helps to scale out ASG
            * max value is 1024
        * `SpilloverCount` - the total number requests that were rejected because the surge queue is full
            * if over 0 scale your backend
    * **Troubleshooting Metrics**
        * `HTTP 400: BAD_REQUEST` -> client sent a malformed requests that does not meet HTTP specifications
        * `HTTP 503: Service Unavailable` -> ensure that you have healthy instances in each AZ that LB is configured on
            * look for HealthHostCount in CloudWatch
        * `HTTP 504: Gateway Timeout` -> check if keep-alive settings on your EC2 instances are enabled
            * make sure keep-alive timeout is greater than the idle timeout settings of load balancer
        * useful link: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ts-elb-error-message.html
    * **Access Logs**
        * stored in S3 containing:
            * Time
            * Client IP address
            * Latencies
            * Request paths
            * Server response
            * Trace Id
        * only pay for S3 storage
        * helpful for:
            * compliance reason
            * keeping access data even after LEB or EC2 instances termination
        * are already encrypted
    * **Request Tracing**
        * request tracing -> each HTTP req has an added custom header `X-Amzn-Trace-Id`
        * useful in logs / distributed tracing platform to track a single request
        * `ALB` is `not` (yet) integrated with `X-Ray`


### Target Group Attributes
* `deregistration_delay.timeout_seconds` -> time the LB waits before deregistering a target
* `slow_start.duration_seconds` -> **Slow Start Mode** - gives healthy target time to warm-up before LB sends them full share of traffic
    * by default a target receives its full share of requests once its registered with the target group
    * with Slow Start LB linearly increases the number of reqs it sends to target
    * target exits Slow Start Mode when:
        * the duration period elapses
        * target becomes unhealthy
    * to disable set `Slow start duration` value to 0
* `load_balancing.algorithm.type` -> method used to select target when routing requests (Round Robin, Least Outstanding Requests)
    * **Least Outstanding Requests** 
        * the next instance to receive the request -> instance that has lowest number of pending / unfinished reqs
        * works with ALB and CLB (HTTP / HTTPS)
    * **Round Robin** - equally choose targets from the target group
        * works with ALB / CLB (TCP)
    * **Flow Hash**
        * select a target based on:
            * protocol
            * source / destination IP address
            * source / destination port
            * TCP sequence number
        * each TCP / UDP connection is routed to single target for life of the connection
        * works with NLB
        * when connection established, a `Flow Hash` is generated for the connection and target is maintained
* `stickiness.enabled`
* `stickiness.type` -> application based or duration-based cookie
* `stickiness.app_cookie.cookie_name` -> name of app cookie 
* `stickiness.app_cookie.duration_seconds` -> app based cookie expiration period
* `stickiness.lb_cookie.duration_seconds` -> duration-based cookie expiration period


### ALB - Rules
* **Rules** determine how traffic is forwarded to targets
    * processed in `order`
    * has a final `Defaul Rule`
    * supported `Actions` -> forward, redirect, fixed-response
    * **Rule Conditions**
        * `host-header`
        * `http-request-method`
        * `path-pattern`
        * `source-ip`
        * `http-header`
        * `query-string`
* **Target Group Weighting**
    * specify weight for each Target Group on a single Rule
    * example: multiple version of app, blue / green deployment
    * allows control of distribution of traffic to apps


## ASG
* **ASG** - **Auto Scaling Groups** - a group of EC2 instances that is treated as a logical grouping for the purpose of automatically scalling
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
    * *Min Size* 
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
    * Good metrics: `CPUUtilization`, `RequestCountPerTarget`, `Average Network In / Out` (if app is network bound), `Custom Metrics` (push using CloudWatch)
    * **Scaling Cooldown** - after scaling activity happens a cooldown period is triggered (default 300s), ASG will not launch / terminate instances during the cooldown (this allows for metrics to stabilize)
        * **Advice** - use ready-to-use AMI to reduce cooldown period
* **Clean-up** - delete ASG > delete ALB > delete EC2 instances
* **ASG Instance Refresh** - a feature that allows gradually removing EC2 instances and reacreating them with a new launch template
    * set *minimum healthy percentage* which specifies the min % of healthy instances that should be available during instance refresh
    * set *warm up time* to specify how long until instance is ready to use


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


## ASG - SysOps
* **ASG - Lifecycle Hooks** - allows performing actions at different stages of an instances lifecycle
    * by default as soon as instance launched by ASG -> it is in service
    * states:
        1. ASG Scale out
        1. `Pending` -> perform extra steps before instance goes in service
            * ex. define script to run on instances as the start
        1. `Pending:Wait` - lifecycle hook = **EC2_Instance_Launching**
        1. `Pending:Proceed` - lifecycle hook = **EC2_Instance_Launching**
        1. `InService`
        1. ASG Scale in
        1. `Terminating` -> perform actions before instance is terminated
            * ex. pause the instances before they're terminated for troubleshooting
        1. `Terminating:Wait` - lifecycle hook = **EC2_Instance_Terminating**
        1. `Terminating:Proceed` - lifecycle hook = **EC2_Instance_Terminating**
        1. `Terminated`
    * use cases: cleanup, log extraction, special health checks
    * intergrations: `EventBridge`, `SNS`, `SQS`
* **Launch Configuration vs Launch Template** 
    * **Both**
        * ide of AMI
        * instance type
        * SSH key pair
        * SG
        * tags
        * EC2 user-data
        * other EC2 params
        * cant edit both
    * **Launch Configuration**
        * legacy
        * must be re-created every time
    * **Launch Template**
        * newer
        * can have multiple versions
        * create parameters subsets - partial config for re-use and inheritance
        * provision using both On-Demand and Spot instance (or mix - spot fleet)
        * can use T2 unlimited burst feature
        * recommended
* **SQS with ASG** - use CloudWatch Metric - `ApproximateNumberOfMessages` to scale out target group based on CloudWatch Alarm trigger
* **ASG Health Check** - ensure HA means 2 instances, across 2 AZ in ASG
    * must configure `multi-AZ ASG`
    * health checks available:
        * `EC2 Status Checks`
        * `ELB Health Checks`
        * `Custom Health Checks` - send intsnaces health to ASG using AWS CLI or AWS SDK
    * ASG will launch new instance after terminating unhealthy one
    * ASG will not reboot unhealthy hosts for you
    * CLI:
        * `set-instance-health` - use with custom health checks
        * `terminate-instance-in-auto-scaling-group`
* **Troubleshooting**
    * `Cannot launch new instances` -> update maximum capacity / capacity issue in AZ
    * `Launching EC2 instance fails` -> SG does not exist / SG deleted / key pair does not exist
    * if ASG fails launching instances for over 24h -> automatically suspeds the process (`administration suspension`)


## ASG - CloudWatch
* metrics collected every 1 min
* ASG-level metrics (opt-in):
    * `GroupMinSize` / `GroupMaxSize` / `GroupDesiredCapacity`
    * `GroupInServiceIinstances` / `GroupPendingInstances` / `GroupStandbyInstances`
    * `GroupTerminatingInstances` / `GroupTotalInstances`
    * should enable metric colleciton to see them
* EC2-level metrics (enabled) - CPU / Storage / Network, Basic (5min) or Details (1min)


## Auto Scaling
* **AWS Auto Scaling** - backbone of all autoscaling for scalable resource in AWS
    * central place to manage autoscaling across different services
    * `Amazon EC2 Auto Scaling groups` -> launch / terminate EC2 instances
    * `Amazon EC2 Spot Fleet requests` -> launch / terminate instance from Spot Flee req, or auto replace those interrupted for price / capacity reasons
    * `Amazon ECS` -> adjust ECS service desired count up or down
    * `Amazon DynamoDB` -> table or global secondary index - WCU & RCU
    * `Amazon Aurora` -> dynamic read replicas auto-scaling
* **Scaling Plans**
    * `Dynamic scaling` - create a target tracking scaling policy
        * optimize for availability => 40% resource utilization
        * balance availability and cost => 50% resource utilization
        * optimize for cost => 70% resource utilization
        * custom => choose own metric and target value
        * options: disable scale-in, cooldown period, warmup time (for ASG)
    * `Predictive scaling` - continuously forecast load and schedule scaling ahead


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
* **Deployment Modes** - what environment is set up
    * *Single Instance* - 1 Elastic IP, 1 EC2 Instance, 1 RDS Master
        * good for dev env
    * *High Availability with Load Balancer* - ALB, ASG with RDS Master and Standby
        * good for production
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
* **Deployment Options for Updates** - how Beansalk manages deploying updated versions
    * *All at once* - fastest, but cause downtime
        - stop -> update -> start
        - no additional cost
        - good for development
    * *Rolling* - few at a time, move on to next element once previous is healthy
        * `bucket` -> group of instances terminated and updated, can set(like 2 = 2 instances are brought down, started up, then another 2)
        * application runs below capacity for some time
        * no additional cost
        * at some point there are 2 different versions running at the same time
    * *Rolling with additional batches* - spins up new instances to move the batch 
        * additional cost
        * never below capacity
        * running both versions simultanuously
        * longer deployment
        * good for prod
        * can set `bucket` size
        * zero downtime
    * *Immutable* - spins up new instances in new ASG, deploys version to new instances, swaps instances when everything is healthy
        * zero downtime
        * new code deployed to new instances on temp ASG
        * longest deployment
        * high cost, double capacity
        * quick rollback in case of failure
        * great for prod
    * *Blue Green* - create new environment and switch over when ready
        * not a direct feature of Elastic Beanstalk
        * zero downtime and release facility
        * create new Beanstalk Environment -> deploy v2 there -> use Route 53 to weight some traffic to new env -> "swap URLs" using Beanstalk when done
        * can swap environment urls from Beanstalk view (this takes some time)
    * *Traffic Splitting* - canary testing - send small % fo traffic to temporary ASG for new deployment
        * can configure to trigger automated rollbacak (very quick) on failed deployment
        * no app downtime
* **CLI** - a special CLI is available for Beanstalk called **EB CLI** 
    *  Basic commands: `eb create`, `eb status`, `eb health`, `eb events`, `eb logs`, `eb open`, `eb deploy`, `eb config`, `eb terminate`
    * helpful for automated deployment pipelines
* **Deployment Process**:
    * describe dependencies (package.json)
    * package code as zip
    * *Console* - upload zip file in AWS Console and deploy
    * *CLI* - create new app version using CLI(uploads zip) an deploy
    * Beanstalk takes zip and deploys to every EC2 instances and start the app
* **Lifecycle Policy** - allows phasing out old application to make room for new ones
    * Beanstalk can store at most 1000 application versions
    * if you dont remove old versions, cant deploy new ones
    * phase out based on:
        * `Time` - old versions are removed
        * `Space` - removes old versions if you exceed a threshold of app versions
    * used versions arent deleted
    * option not to delete source bundle from S3 to prevent data loss
* **Extensions** - files containing code that define Beanstalk parameters that are normally configured in the UI
    * requirements:
        * code in the `.ebextensions/` directory in root of source code
        * YAML / JSON format
        * file must end in `.config`
        * can modify default settings using `option_settings` - like environment variables
        * can add resources like `RDS`, `ElastiCache`, `DynamoDB`
    * resource managed by .ebextensions are deleted if the Beanstalk Environment is deleted
* **Beanstalk & CloudFormation** - ElasticBeanstalk relies on CloudFormatioin under the hood
    * you can define CloudFormation resources in `.ebextensions`
* **Beanstalk Cloning** - clone existing environment into new environment
    * useful for deploying test version
    * all configured resources are preserved (along with their configurations)
    * can change settings after cloning
* **Beanstalk Migrations**
    * Elastic Load Balancer
        * cannot change ELB type after creating environment(can only change config), need to migrate
        * steps:
            1. create new env with same configuration except LB (cant use clone, would also clone LB)
            1. deploy application to new env
            1. perform a CNAME swap or Route 53 update to point traffic to new env
    * Decouple RDS
        * RDS for prod environment should live outside of ElasticBeanstalk so that its lifecycle is not tied to environment lifecycle
        * should create seperate RDS and provide connection string to EB app
        * steps to decouple RDS from EB:
            1. create snapshot of RDS DB (as safeguard)
            1. Protect RDS from deletion in console
            1. Create new EB, without RDS, point app to RDS
            1. Shift traffic to new env using CNAME swap or Route 53 update
            1. terminate old env
            1. Delete CloudFormation stack in case of DELETE_FAILED state
* **Beanstalk with Docker** - can run app as single docker container or multi docker container
    * Single Docker Container
        * options:
            * `Dockerfile` - EB will build and run the Docker container
            * `Dockerrun.aws.json (v1)` - describe where already build image is
                * Image
                * Ports
                * Volumes
                * Logging
                * etc.
        * Beanstalk in Single Docker Container does not use ECS
    * Multi Docker Container
        * run multiple container per ec2 instance in EB
        * will create: ECS Cluster, ASG, EC2 Instances, Load Balancer, Task definition and execution
        * requires a config: `Dockerrun.aws.json (v2)` at root of source code
        * `Dockerrun.aws.json` used to generate ECS task definition
        * Docker images must be prebuilt and stored in ECR
        * maps beanstalk urls to container ports
* **Advanced Concepts**
    * **HTTPS with Beanstalk** - to load SSL cert onto LB in beanstalk
        * from Console -> EB console, LB configuration
        * from `.ecextensions/securelistener-alb.config`
        * SSL Cert can be provisioned using ACM or CLI
        * must configure SG that allows HTTPS
    * **Beanstalk redirect HTTP to HTTPS** - configure instances to redirect or configure ALB with a rule
        * make sure healthchecks arent redirected
    * **Web Server vs Worker Environment** - if app performs tasks that take long to complete, offload to dedicated worker environment
        * decouples app into two tiers
        * use case: processing video, generating zip
        * can define periodic tasks in `cron.yaml` file
    * **Custom Platform** - can define from scratch OS, Additional Software, Scripts that Beanstalk runs on these platforms
        * use case: app language is incompatible with Beanstalk & doesnt use Docker
        * to create:
            * define AMI using `Platform.yaml` file
            * build that platform using the `Packet software` -> open source tool to create AMIs
        * **Customer Image (AMI)** -> tweak an exisitng Beanstalk Platform



&nbsp;
# CloudFormation
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
* **ChangeSets** - information on what is changed before a stack is updated. Can view, execute and optionally create additional change sets for greater confidence
    * does not inform if update successful
* **Nested stacks** - stacks that are parts of other stacks
    * isolate repeated patters / common components, like:
        * LB configuration
        * SG
    * considered BEST PRACTICE
    * to update nested stack -> update the parent (root stack)
    * Cross Stacks vs Nested Stacks:
        * *Cross Stacks* -> use when stacks have different lifecycles, use Outputs Export and !ImportValue when you need to pass export to many stacks
        * *Nested Stacks* -> helpful when components must be reused, only important to higher level stack, not shared across stacks
* **StackSets** - create / update / delete across multi account and regions with single operation
    * need admin account to create StackSets
    * trusted account to create / update / delete StackSets
    * updating one stack updates all stacks in set throughout all regions and account
* **CloudFormation Drift** - tool for managing manual configuration changes to created resources which cause `Drift` status
    * Action -> Detect Drift -> checks resources for changes that dont adhere to YAML configuration
* **CloudFormation Stack Policies** - a JSON document that defines the update actions allowed on specific resources during stack updates
    * by default update actions are allowed on all resources
    * looks like IAM policy
    * specify explicity ALLOW for resources


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


## CloudFormation Resources
* resources included in a stack created based on a template
* core of CF template (mandatory)
* resources are declared and can reference eachother
* AWS figures out creation / updates / deletes of resources for us
* over 224 types of resources -> ALMOST every service
    * you can use `AWS Lambda Custom Resources` for resources that are not available
* resource types indentifiers are of the form `AWS::aws-product-name::data-type-name`
* cannot create dynamic resources - cant perform code generation in CF YAML


## CloudFormation Parameters
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


## CloudFormation Mappings
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


## CloudFormation Outputs
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


## CloudFormation Conditions
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


## CloudFormation Intrinsic Functions
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

## CloudFormation Rollbacks
* Stack Creation Fails
    - default: everything rolls back (gets deleted)
    - disable rolback and troubleshoot what happened
    - get details in logs
* Stack Update Fails:
    * stack automatically rolls back to previous known working state
    * check logs to view error message and debug


## CloudFormation User Data
* can include EC2 user data in a CloudFormation template
* pass entire script through the function `Fn::Base64`
* logs from user data script is in `/var/log/cloud-init-output.log`
* stack will mark as green even if user data hasnt loaded yet

```yaml
Resource:
    MyInstance:
        Type: AWS::EC2:Instance
        Properties:
            ...
            UserData:
                Fn::Basea64: |
                    #!/bin/bash -xe
                    yum update -y
                    yum install -y httpd
                    systemctl start httpd
                    systemctl enable httpd
                    echo "Hello World from user data" > /var/www/html/index.html
```


## CloudFormation cfn-init
* `cfn-init` script help make complex EC2 configuration readable
* the EC2 instance will query the CF service to get the init data
* query for the init data within the `UserData` 
* `AWS::CloudFormation::init` must be in the `Metadata` of a resource
* logs go to `/var/log/cfn-init.log`
* has options like:
    * `packages` -> which packages should be installed and with what tool
    * `files` -> manipulate content of file and mode
    * `command` -> run commands
    * `services` -> start and configure services

```yaml
Resource:
    MyInstance:
        Type: AWS::EC2:Instance
        Properties:
            ...
            UserData:
                Fn::Basea64: |
                    #!/bin/bash -xe
                    
                    # get latest CFN package
                    yum update -y aws-cfn-bootstrap
                    
                    # start cfn-init
                    /opt/aws/bin/cfn-init -s ${AWS::StackId} -r MyInstance --region ${AWS::Region} ||
                    error_exit 'Failed to run cfn-init'
        Metadata:
            Comment: Install a simple Apache HTTP page
            AWS::CloudFormation::Init:
                config:
                    packages:
                        yum:
                            httpd: []
                    files:
                        "/var/www/html/index.html":
                            content: |
                                <h1>Hello World from EC2 instance!</h1>
                                <p>This was created using cfn-init</p>
                            mode: '000644'
                    commands:
                        hello:
                            command: "echo 'hello world'"
                    services:
                        sysvinit:
                            httpd:
                                enabled: 'true'
                                ensureRunning: 'true'
```


## CloudFormation cfn-signal
* `cfn-signal` - allows writing a script that waits for a signal from the resource - use this signal to determine whether creation was a success / failure
* `WaitCondition` - define to block the template until it receives a signal from `cfn-signal`
* to make this work attach a `CreationPolicy`
* example flow:
    1. CF -> Launches EC2 Instance
    1. EC2 -> retreive init data from CF
    1. EC2 -> run cfn-init
    1. EC2 -> send signal to CF
    1. CF -> get signal from `cfn-signal`
    1. CF -> set stack to CREATED
* **failures troubleshooting** - wait condition didnt receive the required number of signals
    * ensure AMI has `CF helper scripts`
        * can also download them to instance
    * verify `cfn-init` and `cfn-signal` run successfully
        * check `/var/logs/cloud-init.log` or `/var/log/cfn-init.log`
    * disable `rollback on failure` to analyze logs - otherwise CF deletes instances after stack fails
    * verify instance has connection to internet -> private suubnet -> NAT device, public subnet -> IGW

```yaml
Resource:
    MyInstance:
        Type: AWS::EC2:Instance
        Properties:
            ...
            UserData:
                Fn::Basea64: |
                    #!/bin/bash -xe
                    
                    # get latest CFN package
                    yum update -y aws-cfn-bootstrap
                    
                    # start cfn-init
                    /opt/aws/bin/cfn-init -s ${AWS::StackId} -r MyInstance --region ${AWS::Region} ||
                    error_exit 'Failed to run cfn-init'

                    # start cfn-signal to the wait condition
                    /opt/aws/bin/cfn-signal -e $? --stack ${AWS::StackId} --resource SampleWaitCondition --region ${AWS::Region}
        Metadata:
            ...

SampleWaitCondition:
    CreationPolicy:
        ResourceSignal:
            Timeout: PT1M
            Count: 1
    Type: AWS::CloudFormation::WaitCondition
```


## CloudFormation Nested Stacks
* stack nested in other stacks
* allow isolating repeated patterns and calling them from other stacks
* example:
    * Load Balancer configuration
    * Security Group
* are considered best practice
* to update nested stack - always update parent stack(the stack that uses the nested stack)

```yaml
Resource:
    myStack:
        Type: AWS::CloudFormation::Stack
        Properties:
            TemplateURL: https://s3.amazonaws.com/cloudformation-templates-us-east-1/LAMP_Signle_Instance.template
            Parameters:
                KeyName: !Ref SSHKey
                DBName: "mydb"
                DBUser: "user"
                DBPassowrd: "pass"
                DBRootPassowrd: "passroot"
                InstanceType: t2.micro
                SSHLocation: "0.0.0.0/0"

Outputs:
    StackRef:
        Value: !Ref myStack
    OutputFromNestedStack:
        Value: !GetAll myStack.Outputs.WebsiteURL

```


## CloudFormation ChangeSets
* a set of changes to the current set
* a sort of dry run for applying changes to your stack
* shows what will change in Console or JSON format
* can apply multiple change sets to refine methodology


## CloudFormation DeletionPolicy
* **DeletionPolicy** - set on any resource to control what happens when CF template is deleted
    * `Retain`
        * specify to preserve / backup in case of deletion
        * to keep resource, specify `Retain`
        * works for any resource / nested stack
    * `Snapshot`
        * creates a snapshot before resource is deleted
        * works with:
            * `EBS Volume`
            * `ElastiCache Cluster`
            * `ElasiCache ReplicationGroup`
            * `RDS DBInstance`
            * `RDS DBCluster`
            * `Redshift Cluster`
    * `Delete` (default behavior)
        * for `AWS::RDS::DBCluster` resource default is `Snapshot`
        * to delete an S3 Bucket, need to first empty the bucket of its content

```yaml
Resources:
    MySG:
        Type: AWS::EC2::SecurityGroup
        DeletionPolicy: Retain
        ...

    MyEBS:
        Type: AWS::EC2::Volume
        DeletionPolicy: Snapshot
        ...
```


## CloudFormation TerminationProtection
* **TerminationProtection** - enable to prevent accidental deletes of CF templates


## CloudFormation CreationPolicy
* `CreationPolicy` allow specifying conditions that need to be met after resource creation to ensure it is working correctly
    * if policy specifications not met -> stack will fail to launch

```yaml
Resources:
    AutoScalingGroup:
        Type: AWS::AutoScaling::AutoScalingGroup
        Properties:
            AvailabilityZones:
                Fn::GetAZs:
                    Ref: "AWS::Region"
                LaunchConfigurationName:
                    Ref: LaunchConfig
                DesiredCapcity: '3'
                MinSize: '1'
                MaxSize: '4'
            CreationPolicy:
                ResourceSIgnal:
                    Count: '3'
                    Timeout: PT15M
```


## CloudFormation UpdatePolicy
* `UpdatePolicy` - attribute to specify how CF handles updates for some resources 
    * applies to `AWS::AutoScaling::AutoScalingGroup`, `AWS::Lambda::Alias`, `AWS::ElasticCahe::ReplicationGroup`
    * for ASG can specify three update policies:
        * `AutoScalingReplacingUpdate` - will create a whole new ASG and switch to it once CreationPolicy is satisfied
        * `AutoScalingRollingUpdate` - will update in batches respecting mix instances in services
        * `AutoScalingScheduledAction`


```yaml
Resources:
    AutoScalingGroup:
        Type: AWS::AutoScaling::AutoScalingGroup
        Properties:
            AvailabilityZones:
                Fn::GetAZs:
                    Ref: "AWS::Region"
                LaunchConfigurationName:
                    Ref: LaunchConfig
                DesiredCapcity: '3'
                MinSize: '1'
                MaxSize: '4'
            CreationPolicy:
                ResourceSIgnal:
                    Count: '3'
                    Timeout: PT15M
            UpdatePolicy:
                AutoScallingRollingUpdate:
                    MinInstancesInService: '1'
                    MaxBatchSize: '2'
                    # how much time to wait for the signal
                    PauseTime: PT1M
                    WaitOnResourceSignals: 'true'
                    # can suspend processes during the update
                    # SuspendProcesses:
                    #   - list of processes...
                AutoScalingScheduledAction:
                    # Prevent Scheduled Actions from modifying min/max/desired for CLoudFormation
                    IgnoreUnmodifiedGroupSizeProperties: 'true'
```


## CloudFormation DependsOn
* `DependsOn` - attribute that allows defining which resources a resource depends on
    * dependant resource will not be created until the resources it depends on are created
    * dependant resources are deleted before resources they depend on are deleted

```yaml
Resources:
    EC2Instances:
        Type: AWS::EC2::Instance
        Properties:
            ...
        DependsOn: MyDB

    MyDB:
        Type: AWS::RDS::DBInstance
        Properties:
            AllocatedStorage: '5'
            ...
```


## CloudFormation Stack Policies
* **Stack Policy** - a json document in which permissions for specific actions on specific stack items are defined

```json
{
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "Update:*",
            "Principal": "*",
            "Resource": "*"
        },
        {
            "Effect": "Deny",
            "Action": "Update:*",
            "Principal": "*",
            "Resource": "LogicalResourceId/CriticalSecurityGroup"
        }
    ]
}
```

## CloudFormation Multi Region StackSets
* create / update / delete stacks across `multiple accounts and regions` with a single operation
* Administrator account to create StackSets
* Trusted accounts to create / update / delete stack instances from StackSets
* when you update stack set -> **all** associated stack instances are updated throughout all accounts and regions
* can set:
    * max concurrent actions on targets (# or %)
    * failure tolerance (# or %)
* need to create IAM Roles for admin -> can be done with CF ready templates you can find online


## CloudFormation Continue Rolling Back and Update
* a stack goes into the `UPDATE_ROLLBACK_FAILED` state when CF cant roll back all changes during an update
* resource cant return to original state -> causing rollback to fail
* example: DB removed from console during rollback
* **Solutions**
    * fix error manually then continue update rollback the stack
    * skip resources that cant rollback successfully (CF will mark failed resources as UPDATE_COMPLETE)
* cant update a stack in `UPDATE_ROLLBACK_FAILED`
* nested stacks -> rolling back parent stack will attempt to roll back child stacks





&nbsp;
# Lambda for SysOps


## Lambda
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
        * `CloudFront` - Lambda at edge computing
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
                * **Event Object** - an JSON-formatted document passed to the lambda handler function that contains data for the function to process
                    * information on invoking service
                    * based on the used runtime it is converted to an object
                    * example: input arguments, invoking service arguments
                * **Context Object** - a JSON-formatted document containing method / properties that provide information about the invocation / function / runtime environment
                    * passed to function at runtime
                    * example: `aws_request_id`, `function_name`, `memoty_limit_in_mb`
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


## Lambda - S3 Event Notifications
* an S3 event can be sent to:
    * `SNS` -> `SQS` - fan out pattern
    * `SQS` -> `Lambda` - buffer events
    * `Lambda` -> async invocation, can setup DLQ for failures
* if two writes made to single non-versioned object -> possible that only a single event notification will be sent
* enable versioning -> ensure event notification sent for every successful write operation


## Lambda - IAM Roles & Resource Policies
* `Lambda Execution Role`: **IAM roles**:
    * grants Lambda permission to invoke other services
    * `AWSLambdaBasicExecutionRole` - upload logs to CloudWatch
    * `AWSLambdaKinesisExecutionRole` - Read from Kinesis
    * `AWSLambdaDynamoDBExecutionRole` - Read from DynamoDB Streams
    * `AWSLambdaSQSQueueExecutionRole` - Read from SQS
    * `AWSLambdaVPCAccessExecutionRole` - deploy lambda funciton in VPC
    * `AWSXRayDaemonWriteAccess` - upload trace data to X-Ray
    * using `event source mapping` to invoke Lambda functions, the execution role is used to read event data
    * **best practice**: create one Lambda Execution Role per function
* Lambda **Resource Based Policies**
    * give account and services permission to use your Lambda
    * an IAM principal can access Lambda:
        * if policy attached to principal authorizes it(user access)
        * if resource-based policy authorizes it(service access)
    * when AWS Service like Amazon S3 calls your Lambda function, the resource based policy gives it access


## Lambda - X-Ray Tracing
* all Lambda execution logs are stored in CloudWatch Logs if authorized by IAM policy in execution role
* **CloudWatch Metrics**:
    * Lambda metrics displayed in AWS CloudWatch Metrics
    * metrics include: `Invocations`, `Durations`, `Concurrent Executions`, `Error count`, `Success Rates`, `Throttles`, `Async Delivery Failures`, `Iterator Age (Streams)`(lag time for stream reading)
* **X-Ray**
    * enable `Active Tracing` in Lambda Function
    * runs X-Ray daemon for you
    * must use AWS X-Ray SDK in Code
    * ensure Lambda Function has appropriate IAM Execution Role - `AWSXRayDaemonWriteAccess`
    * if needed set environment variables to communicate with X-Ray:
        * `_X_AMZN_TRACE_ID` - contains the tracing header
        * `AWS_XRAY_CONTEXT_MISSING` - by default, LOG_ERROR
        * `AWS_XRAY_DAEMON_ADDRESS` - the X-Ray Daemon IP_ADDRESS:PORT


## Lambda - Function Performance
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
    * max size is 10 GB
    * default size is 512 MB
    * directory content remains when execution context is frozen, providing transient cache
    * for persistent storage use for example S3
    * to encrypt content on /tmp, must generate KMS Data Keys(cant be done from console)

```python
import os

# this establishes the db connection once and reuses it accross invocations!!
DB_URL = os.getenv("DB_URL")
db_client = db.connect("DB_URL")

def get_user_handler(event, context):
    user = db_client.get(user_id = event["user_id"])
    return user

```

## Lambda - Concurrency
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


## Lambda - Monitoring Extras
* **CloudWatch Metrics**:
    * `Invocations` - number of time function invoked (success / failure)
    * `Durations` - amount of time functio nspends processing an event
    * `Errors` - number of invocations that result in function error
    * `Throttles` - numbe rof invocation requests that are throttled (no concurrency available)
    * `DeadLetterErrors` - number of times Lambda filaed to send an event to a DLQ (async)
    * `IteratorAge` - time between when Stream receives record and when the Event Source Mapping sends the event to the function (for Event Source Mapping that reads from Stream)
    * `ConcurrentExecutions` - number of function instances that are processing events
* **CloudWatch Alarms**
    * when error > 0 -> debug
    * when throttles > 0 -> increase capacity
* **CloudWatch Logs Insights** - use to inspect logs across all Lambdas
* **Lambda Insights**
    * collects / aggregates / summarizes:
        * `System-level Metrics` -> CPU time, memory, disk, network
        * `Diagnostic Information` -> cold starts, Lambda worker shutdowns
    * sent into CloudWatch Logs into `/aws/lambda-insights/...` log group
    * helps isolate issues with your Lambda functions and resolve them quickly
    * must use a `CloudWatch Lambda Extension` provided as a `Lambda layer`


```sql
--How many time Lambda function had errors in the last 7 days
fields @timestamp, @message
  filter @message like /ERROR/
  sort @timestamp desc

--last 100 errors
fields Timestamp, LogLevel, Message
 | filter LogLevel == "ERR"
 | sort @timestamp desc
 | limit 100

--percentage of cold starts in total invocations
filter @type = "REPORT"
 | stats sum(strcontains(@message, "Init Duration"))/count(*) * 100 as
 coldStartPct, avg(@duration) by bin(5min)

--invocations using 100% of assigned memory
filter @type = "REPORT" and @maxMemoryUsed=@memorySize
 | statscount_distinct(@requestId) by bin(30m)

--average memory used across invocations
avgMemoryUsedPERC, avg(@billedDuration) as avgDurationMS by bin(5m)

--invoications that timed out
filter @message like /Task time out/
 | stats count() by bin(30m)
```


&nbsp;
# EC2 Storage and Data Management
* **EBS** vs **EFS**
    * **EBS**: 
        * one instance (except io1/io2 multi-attach)
        * locked at AZ level
        * `gp2`: IOPS increases with disk size
        * `io1`: provisioned IOPS
        * to migrate across AZ take a snapshot and restore in other AZ
        * backups use IPS, shouldnt run while application handling high traffic
        * root EBS volume for EC2 instance terminated by defualt (can disable)
    * **EFS**:
        * network filesystem that can be attached to 100s of EC2 instances
        * not bound to AZ level
        * share files
        * only for Linux instances (POSIX)
        * higher price
        * can leverage EFS-IA for cost savings


## EC2 - Instance Store
* **EC2 Instance Store** - high-performance ephemeral storage connected directly to the EC2 hardware
    * better IOPS performance than network drives
    * losses storage on instance termination(ephemeral)
    * good for buffer/cache/scratch data/temporary content
    * risk of data loss if hardware fails -> Backup and Replication is your responsiblity


## EBS
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
        * *Recycle Bin for EBS Snapshots* - rules to retain deleted snapshots, specify retention 1d-1y, find deleted snapshots
        * *FSR* - Fast Snapshot Restore - force full initialization of snapshot for low latency on first use, cost extra, useful with very big snapshots if you need them available fast


### EBS - Volume Types
* **Volume Types**
    * *gp2 / gp3 (SSD)* - general purpose SSD, balances price and performance for wide variaty of workloads
        * cost effective, low latency
        * **use cases**: system boot, virtual desktops, development/test envs
        * 1 GiB - 16 TiB
        * **gp3**: 
            * baseline of 3000 IOPS and throughput of 125 MiB/s
            * can increase IOPS to 16000 and throughput to 1000 MiB/s independently
        * **gp2**:
            * small volumes can burst to 3000 IOPS
            * size of volume and IOPS linked, 3 IOPS per GB, max of 16000 IOPS at 5334 GB
    * *io1 / io2 (SSD)* - highest-performance SSD, mission-critical low-latency or high-throughput workloads
        * highest performance, throughput and lowest latency
        * **PIOPS** - provisioned IOPS SSD
        * **use cases**: critical business applications, apps that need more than 16000 IOPS, database workloads
        * 4 GiB - 16 TiB
        * Max PIOPS -> 64000 for Nitro EC2 Instances, 32000 for other
        * can increase PIOPS independently of storage size
        * io2 -> more durability, more IOPS per GiB at same price as io1
        * **io2 Block Express** - 4 GiB - 64 Gib, sub-ms latency, max PIOPS: 256000, IOPS:GIB ratio of 1000:1
        * supports EBS Multi-Attch
    * *st 1 (HDD)* - lowest costs HDD, designed for frequently accessed, throughput-intensive workloads
        * 125 GiB to 16 TiB
        * throughput optimized HDD: max throughput -> 500 MiB / s, max IOPS 500
    * *sc1 (HDD)* - lowest cost HDD volume designed for less frequently accessed workloads
        * Cold HDD
        * scenario for lowest cost
        * max throughput 250 MiB/s, max IOPS 250
    * **EBS Volumes** are characterized in Size / Throughput / IOPS
    * only *gp2/gp3* and *io1/io2* can be used as boot volumes


### EBS - Multi Attach
* **EBS Multi-Attach** -  attach same EBS volume to multiple EC2 instances in the same AZ
    * only compatible with io1/io2 volume types
    * each instance has read & write permissions
    * **use case** : 
        * higher application availability in clustered Linux applications (ex: Teradata)
        * applications must manage concurrent write operations
    * **limitations**: same AZ, max of 16 EC2 Instances, must use cluster-aware file system(not XFS, EX4, etc...)


### EBS - Operations
* **Volume Resizing** - can increase EBS volumes
    * increase:
        * `Size` - any volume type
        * `IOPS` - only in io1
    * after resizing an EBS volume -> need to `repartition` your drive - use `growpart` command and specify the partition
        * `sudo growpart /dev/xvda 1`
    * volume goes into `optimisation phase` -> but is still usable
    * cant decrease size -> must create smaller volume then migrate data
    * commands:
        * `lsblk` -> lists information about all available or the specified block devices
        * `df -h`-> displays disk space used in file system in human readable format
        * `sudo growpart <partition> 1` -> repartitions an EBS volume
* **Sanpshots** - make a backup (snapshot) of your EBS volume at a point in time
    * not necessary to detach volume, but recommended
    * can copy cross AZ or Region
    * **Data Lifecycle Manager**
        * automate the creation / retention / deletion of EBS snapshots and EBS-backed AMIs
        * schedule backups / cross-account snapshot copies / delete outdated backups ...
* **Volume Migration** - 
* **Volume Encryption** - encrypting an EBS give the following:
    * data at rest is encrypted
    * data in flight moving between instance and volume is encrypted
    * all snapshots are encrypted
    * volumes created from snapshot are encrypted
    * encryption - decryption is handled transparently (no extra work needed by you)
    * minimal impact on latency
    * leverages keys from KMS (AES-256)
    * copying an unencrypted snapshot allows encryption
    * can only encrypt during creation
    * `process`:
        1. 


## EFS
* **EFS** - **Elastic File System** - is a *managed NFS*(network file system) that can be mounted on many EC2(EFS mount targets)
    * an EFS can work in multi-AZ (regional, for durability and availability)
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
    * **Storage Tiers** - lifecycle management features, can set to rules to transition between IA and out of it
        * *Standard* - for frequently accessed files
        * *Infrequent access* (EFS-IA) - cost to retrieve files, lower price to store 
            * enable with a Lifecycle policy, which moves from standard automatically based on last access time 
            * optimal for non-frequent access(up to 92% lower costs compared to standard)
    * **Availability and Durability**
        * *Regional* - multi-AZ, great for prod
        * *One Zone* - one AZ, cheaper, compatible with IA (EFS One Zone-IA), backup enabled by default, good for dev
* network access: setup groups of: `AZ` -> `Subnet ID` -> `IP address` -> `SG`


### EFS - Access Points


### EFS - Operations


### EFS - CloudWatch Metrics




&nbsp;
# S3
* **S3** - **Simple Cloud Storage** - infinitely scaling storage
* one of the main building blocks of AWS
* use cases: backup/storage/disaster recovery/archive/hybrid cloud storage/application hosting/media hosting/data lakes/big data analytics/software delivery/static websites
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


## S3 - Policies
* **User-Based** - IAM Policies
    * an IAM principal can access S3 object if:
        * user IAM perm ALLOW it OR resource policy ALLOWS it
        * AND there's no explicit DENY
    * IAM policies take precedence over S3 bucket policies
* **Resource Based**
    * **Bucket Policies** - bucket wide rules from the S3 console - allows cross account access
        * used for:
            * grant public access
            * force object encryption on upload
            * grant cross account access
        * JSON document
            * Resource -> buckets and objects
            * Action -> allow or deny
            * Actions -> set of api to allow or deny
            * Principal -> the account or user to apply the policy to
    * **Object Access Control List (ACL)** - finer grain (can be disabled)
    * **Bucket Access Control List (ACL)** - less common (can be disabled)
* **Encryption** - encrypt object using encryption keys. Different types of encryption available:
    * **Server Side Encryption** - the server storing the object encrypts it after receiving it (encryption at rest)
    * **Client Side Encryption** - file is encrypted before it is uploaded ( encryption in flight)
* new buckets are configured by default to block all public access even if you allow it through a bucket policy - disable this in settings


## S3 - Website
* **Static Webstie Hosting** - S3 can host static websites
    * url examples:
        * http://bucket-name.s3-website-aws-region.amazonaws.com
        * http://bucket-name.s3-website.aws-region.amazonaws.com
    * enable this in S3 settings
    * bucket must be made public


## S3 - Versioning
* **Versioning** - makes uploading objects with existing key create a new version without deleting the old version
    * enabled at bucket level
    * a good practice, easy to restore on delete, easy roll-back
    * any file not versioned prior to enabling versioning has version `null`
    * suspending versioning does not delete previous versions
    * deleting a file does a soft delete by applying a `delete marker` to it, deleting a `delete marker` file type will permanently delete it


## S3 - Replication
* **Replication** - allows replicating objects across buckets in the same or cross region
    * must enable versioning on both source and destination buckets
    * replication types:
        * *Cross-Region Replication (CRR)* - compliance, lower latency access, replication across account
        * *Same-Region Replication (SRR)* - log aggregation, live replication between prod and test accounts
    * buckets can be in different AWS account
    * copying is asynchronous
    * requires proper IAM permissions on S3
    * only new objects are replicated
    * to replicate existing objects you must use S3 Batch Replication
    * DELETE operations
        * can replicate delete markers (optional)
        * deletions with a version ID are not replicated
    * no replication chaining -> bucket 1 replicates to bucket 2 and bucket 2 to bucket 3, then bucket 1 IS NOT replicated to bucket 3


## S3 - Storage Classes
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


## S3 - Lifecycle Rules
* **Lifecycle Rules** - allow setting rules for automatic transitioning S3 objects between storage classes
    * infrequently access -> Standard IA
    * dont need fast access -> Glacier / Glacier Deep Archive
    * **Actions**:
        * *Transition Actions* - rules to transition object to different storage class
            * use cases: old objects
        * *Expiration Actions* - rules to expire(delete) objects after some time
            * use cases: old versions of files, incomplete Multi-Part upload, log files
    * rules can target prefix, tags, versions
* **S3 Analytics** - tool to help decide when to transition objects to the right storage class
    * does not work for One-Zone IA or Glacier
    * recommended for *Standard* and *Standard IA*
    * generates a report that is updated daily
    * takes 24-48h to see data analysis
    * good first step to create or improve Lifecycle Rules


## S3 - Event Notifications
* **S3 Event Notifications** - events are any operations like Created, Removed, Replication, etc... on the S3 bucket
    * possible to filter based on object name, or **Advanced Filtering** with JSON rules(metadata, object size, name,...)
    * use case: generate thumbnails of images
    * events can be sent to: SNS, SQS, Lambda
    * events can take up to a minute or longer to propagate
    * all events end up in Amazon EventBridge from where they can be sent to 17 AWS services and destinations 
    * can send events to multiple destinations
    * events come with all EventBridge capabilities like Archive, Replay Events, Reliability


## S3 - Performance
* **S3 Baseline Performance**
    * scales to high request rates 100-200 ms latency
    * can achieve at least 3500 PUT/COPY/POST/DELETE or 5500 GET/HEAD requests per second per prefix in a bucket
    * no limit to number of prefixes in buckets
    * **Multi-Part upload**
        * recommended for files > 100 MB
        * must use for files > 5GB
        * helps parallelize uploads
    * **S3 Transfer Acceleration** - transfer to edge locationi which then forwards data to s3 bucket, compatible with multi-part upload, maximizes private AWS network traffic
    * **S3 Byte-Range Fetches** - parallelize GETs by requesting specific byte ranges
        * better resilience in case of failures
        * use cases:
            * speed up downloads due to parallelization
            * retrieve only partial data (like first 20 records of file)


## S3 & Glacier Select
* **S3 Select & Glacier Select** - allows retrieving less data using SQL by performing **server-side filtering**
    * can filter by rows/columns
    * less network transfer, less CPU cost client-side
    * get CSV with S3 Select using SQL


## S3 - Batch Operations
* **S3 Batch Operations** - perform bulk operations on existing S3 objects with a single request
    * features:
        * manage retries
        * track progress
        * send completion notifications
        * generate reports
    * use:
        1. `S3 Inventory` to get Object List Report
        1. `S3 Select` to filter your inventory
        1. `S3 Batch Operations` to process object - use can set operation and parameters
    * use cases:
        * modify object metadata & p roperties
        * copy object between S3 buckets
        * encrypt un-encrypted object
        * modify ACLs, tags
        * restore objects from S3 Glacier
        * invoke Lambda function to perform custom action on each object


## S3 - Inventory



## S3 - Glacier



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



## S3 - Multi-Part Upload



## Athena



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


## S3 - MFA
* **S3 MFA Delete** - way to force authenticating with a device before performing destructive S3 operations
    * will be required to(for destructive operations):
        * permanently delete an object version
        * suspend versioning on bucket
    * MFA wont be required for(non-destructive operations):
        * enable versioning
        * list deleted versions
    * to use this feature versioning must be enabled
    * only bucket owner (root account) can enable/disable MFA delete
    * this can only be enabled via AWS CLI


## S3 - Access Logs
* **S3 Access Logs** - for audit purposes all access to S3 buckets (authorized and denied) can be logged
    * data can be analyzed using data analysis tools
    * logging bucket must be in same region
    * do not set logging bucket same as monitored bucket -> `logging loop`, bucket will grow exponentially


## S3 - Pre-signed URLs
* **S3 Pre-signed URLs** - generate pre-signed URL using S3 Console, AWS CLI, SDK
    * can set URL Expiration:
        * **S3 Console** - 1 - 720 min
        * **AWS CLI** - use `--expires-in` parameter to specify value in seconds, default 3600, max 604800 (168 hours)
    * users given pre-signed URL inherit permissions of the user that generated the URL for GET / PUT
    * use case: 
        * allow user to upload file to specific location in bucket
        * allow dynamic list of users to download files by generating URLs dynamically
        * allow only logged-in users to download a premium video


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
        * access point policy
* **Multi-Region Access Points** - 



## S3 - VPC Endpoints



&nbsp;
# Advanced Storage


## AWS Snow Family
* a highly-secure, portable device to collect and process data at the edge and/or migrate data into and out of AWS. 
* AWS sends this portable device to the user, the user loads the data and ships the device back to AWS for import/export to S3 bucket
* all devices can run EC2 Instances & AWS Lambda functions (using AWS IoT Greengrass)
* **Data Migration** - moving large volumes of data takes a lot of time and can cost a lot, especially with limited connectivity/bandwidth/instable stability. Rule of thumb: if transfer takes more then a week you should use Snow Family. Tools:
    * *Snowcone* - smaller portable computing, anywhere, rugged & secure, resistant to harsh environments
        * light -> 4.5 pounds, 2.1 kg
        * 2 CPUs, 4 GB RAM, wired/wireless access
        * `Snowcone` - 8 TB, HDD ; `SNowcone SSD` - 14 TB, SSD
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
* **Snowball into Glacier** - must use S3 first, in combination with a S3 lifecycle policy to transition into Glacier


## Amazon FSx
* 3rd-party high performance file systems on AWS
* fully managed services
* options:
    * **FSx for Lustre**
        * `Lustre` - type of parallel distributed file system, for large-scale computing
        * fully managed/high-performance/scalable file storage
        * for High Performance Computing (HPC)
        * *Luster* -> Linux + Cluster
        * good for Machine Learning/Analytics/Video Processing/Financial Modeling
        * scales up to 100s GB/s, millions of IOPS, sub-ms latencies
        * proxy that allows sharing data between corporate data center and AWS compute instances(VPN or Direct Connect)
        * stores data on AWS Storage services like S3
        * **Storage Options**
            * `SSD` - low latency, IOPS intensive workloads, small & random file operations
            * `HDD` - throughput-intensive workloads, large & sequential file operations
        * seamless integration with S3
            * can read S3 as a file system (through FSx)
            * can write the output of computation back to S3
    * **FSx for Windows File Server**
        * fully managed/highly reliable/scalable/Windows native shared file system
        * built on Windows File Server
        * supports SMB protocol & Windows NTFS
        * can integrate with a windows client in a corporate data center and serves as a proxy that enables access for cloud resources(ec2)
        * integration with Microsoft Active Directory
        * can be accessed from AWS resources and on-premise infrastructure - VPN or Direct Connect integration
        * supports Microsofts Distributed File System (DFS) Namespaces (group files across multiple FS)
        * scale up to 10s GB/s, millions IOPS, 100s PB of data
        * **Storage Options**:
            * `SSD` - latency sensitive workloads (databases, media processing, data analytics,...)
            * `HDD` - broad spectrum of workloads (home directory, CMS, ...)
        * can be configured to be Multi-AZ (HA)
        * data is backed-up daily to S3 
    * **FSx for NetApp ONTAP**
        * managed NetApp ONTAP on AWS
        * File System compatible with `NFS`, `SMB`, `iSCSI` protocol
        * move workloads running on ONTAP or NAS to AWS
        * works with:
            * Linux
            * Windows
            * MacOS
            * VMware Cloud on AWS
            * Amazon Workspaces & AppStream 2.0
            * Amazon EC2, ECS and EKS
        * storage shrinks and grows automatically
        * snapshots, replication, low-cost, compression and data de-duplication
    *** FSx for OpenZFS**
        * managed OpenZFS file system on AWS
        * File System compatible with NFS (v3, v4, v4.1, v4.2)
        * move workloads running on ZFS to AWS
        * very performance - up to 1 000 000 IOPS, < 0.5 ms latency
        * works with:
            * Linux
            * Windows
            * MacOS
            * VMware Cloud on AWS
            * Amazon Workspaces & AppStream 2.0
            * Amazon EC2, ECS, EKS
        * snapshots, compression and low-cost
        * `Point-in-time` instantaneous cloning (helpful testing new workloads)
* **File System Deployment Options**
    * `Scratch File System`
        * temporary storage
        * data is not replicated (doesnt replicate if file server fails)
        * high burst (6x faster, 200 MBps per TiB)
        * usage: short-term processing, optimize costs
    * `Persistent File System`
        * long-term storage
        * data is replicated within same AZ
        * replace failed files within minutes
        * usage: long-term processing, sensitive data


## Storage Gateway
* AWS is pushing for "hybrid cloud" due to:
    * long cloud migrations
    * security requirements
    * compliance requirements
    * IT strategy
* storage types on AWS:
    * `Block` - EBS, EC2 Instance Store
    * `File` - Amazon EFS, Amazon FSx
    * `Object` - Amazon S3, Amazon Glacier
* **AWS Storage Gateway** - bridge between on-premise data and cloud data in S3 for use with hybrid cloud architecture
    * hybrid storage service to allow on-premises to seamlessly use AWS Cloud
    * uses Amazon EBS, Amazon S3, Amazon Glacier to achieve this
    * use cases: 
        * disaster recovery
        * backup & resotre
        * tiered storage
        * on-premises cache & low-latency files access
    * types:
        * **S3 File Gateway** - works as a proxy between on-premise application server and S3
            * on-premise communciates with gateway using `NFS` / `SMB` protocols
            * gateway translates NFS / SMB requests to HTTPS requests to S3
            * most recently used data is cached in the file gateway
            * supports: `S3 Standard`, `S3 Standard IA`, `S3 One Zone A`, `S3 Intelligent Tiering`
            * transition to S3 Glacier using lifecycle policy
            * control bucket access with IAM roles linked to each File Gateway
            * SMB protocl has integration Active Directory for user authentication
        * **FSx File Gateway** - provides native access to Amazon FSx for Window File Server
            * useful for adding local cache for frequently accessed data
            * windows native compatibility (SMB, NTFS, Active Directory, ...)
            * useful for group fiel shares and home directories
        * **Volume Gateway** - blobk storage using iSCSI protocol backed by S3
            * backed by EBS snapshots which can help restore on-premises volumes
            * **Cached volumes** -  low latency access to most recent data
            * **Stored volumes** - entire dataset is on premise, scheduled backups to S3
        * **Tape Gateway** - allows sing same processes as physical tape backups in the cloud
            * `Virtual Tape Library (VTL)` backed by Amazon S3 and Glacier
            * back up data using existing tape-based processes (and iSCSI interface)
            * works with leading backup software vendors
    * **Hardware appliance**
        * usually storage gateway requires running the Gateway on your on-premises hardware
        * `Storage Gateway Hardware Appliance` allows buying hardware for Storage Gateway from Amazon
        * works with `File Gateway`, `Volume Gateway`, `Tape Gateway`
        * has required CPU, memory, network, SSD cache resources
        * helpful for daily NFS backups in small data centers

![AWS Storage Gateway](./aws_saa_storage_gateway.png)


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


## CloudFront - TroubleShooting
* **Reports** - 
* **Logs** - 
* **TroubleShooting** - 


## CloudFront - Caching


## CloudFront - ALB Sticky Sessions


&nbsp;
# Databases for SysOps


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


### RDS - Multi-AZ vs Read Replicas
* **Read Replicas** for improved read performance
    * up to 5
    * within AZ, Cross AZ, Cross Region
    * ASYNC replication -> reads are eventually consistent
    * replicas can be promoted to own DB
    * application must update connection string to leverage read replicas
    * use case: Reporting, Analytics Application
    * Network Cost: 
        * dont pay for data transfer across the same region between instance and replicas
        * pay for data transfer across region with cross region replicas
* **Multi AZ** setup for DR
    * SYNC replication
    * One DNS name -> automatic app failover to standby instance
    * increase availability
    * failover in case of loss of AZ/network/instance/storage
    * no manual intervention
    * NOT USED for scaling
    * can setup Read Replicas as Multi AZ for DR
* **Transition RDS from Signle-AZ to Multi-AZ**
    * zero downtime operation
    * a snapshot of DB is taken and new DB is restored from the snapshot in new AZ
    * synchronization established between two DBs


### RDS - Multi-AZ Failover Conditions



### RDS Proxy
* **RDS Proxy** - managed database proxy for RDS
    * rds connection pooling
    * improves DB efficiency by reducing the stress on DB resources and minimize open connections (and timeouts)
    * serverless, autoscaling, HA (multi-AZ)
    * reduced RDS & Aurora failover time by up to 66%
    * supports RDS(MySQL, PostgreSQL, MariaDB) and Aurora (MySQL, PostgreSQL)
    * no code changes required
    * can *enforce IAM Authenctication* for DB and securily store credentials in *AWS Secrets Manager*
    * only available in VPC (never public)


### RDS - Parameter Groups


### RDS - Backups and Snapshots
* **RDS Backups**
    * `Automated Backups`
        * daily full backup of the db (during backup window)
        * transaction logs are backed-up by RDS every 5 minutes
        * ability to restore to any point in time (from oldest backup 5 minutes ago)
        * 1 - 35 days of retention
        * set retention to 0 to disable automated backups
    * `Manual DB Snapshots`
        * manually triggered by the user
        * retention of backup for as long as you want
    * `Trick` - if planning RDS to be down for a long time - take snapshot, terminate, restore when you need it
* **Restore Options**
    * restoring RDS / Aurora backup or a snapshot creates a new database
    * can restore MySQL RDS database from S3
        1. create a backup of your on-premises database
        1. store it on Amazon S3
        1. restore the backup file onto a new RDS instance running MySQL
    * can restore MySQL Aurora cluster from S3
        1. create a backup of your on-premises database using `Percona XtraBackup`
        1. store the backup file on Amazon S3
        1. restore the backup file onto a new Aurora cluster running MySQL


### RDS - Events and Logs


### RDS - CloudWatch


### RDS - Performance Insights



## Aurora
* **Aurora** - a cloud-native optimized relational database service
    * `proprietary` technology from AWS 
    * compatible with `MySQL` and `Postgres` (same drivers will work)
    * claims huge `performance` improvement:
        * 5x over MySQL on RDS
        * 3x over Postgres on RDS
    * `Auto Expanding` - shared storage automatically grows from `10 GB` to `128 TB`
        * sysops dont need to monitor
    * `Self Replicating` can have `15 replicas` with `faster replication` process (sub 10ms replica lag)
        * MySQL can have 5
    * `instantaneous failover`
        * HA native
    * costs about 20% more than RDS
* **Aurora HA and Read Scaling**
    * 6 copies of data across 3 AZ
        * 4 needed for writes/reads
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
* **Aurora DB Cluster**
    * `Writer Endpoint` - DNS name that always points to the master, so client can maintain connection on failover
    * `Read Replicas` - 1 to 15 replicas that handle read operations, with Auto Scaling possible
    * `Reader Endpoint` - DNS name on top of a Connection Load Balancer that always point to the cluster of read replicas
* **Features** - remember for exam:
    * `Self Replicating` - numerous and fast replication
    * `Self Healing` - easily handles corrupted data
    * `Auto Expanding` - storage automatically grows without the need of monitoring or provisioning
    * `Automatic fail-over` - endpoints with single DNS, fail-over handled underneath
    * `Backup and Recovery` - read and write multi-AZ replicas natively
    * `Isolation and security` - safely process multiple transactions thx to replication
    * `Industry compliance` - ACID-compliant
    * `Push-button scaling` - can scale without incurring downtime
    * `Automatic Patching with Zero Downtime`
    * `Advanced Monitoring`
    * `Routing Maintenance` - handles routing traffic between replicas for zero downtime during maintenance
    * `Backtrack` - restore data at any point of time without using backups


### Aurora - Backups
* **Aurora Backups**
    * `Automated Backups`
        * 1-35 days
        * cannot be disabled
        * point-in-time recovery in that timeframe
    * `Manual DB Snapshots`
        * manually triggered by the user
        * retention of backup for as long as you want
* **Aurora Database Cloning**
    * create a new Aurora DB Cluster from an existing on
    * faster than snapshot & restore
    * uses `copy-on-write` protocol
        * initially new DB cluster uses same data volume as the original DB cluster
        * when updates are made to the new DB cluster data, then additional storage is allocated and data is copied to be separated
        * very fast & cost-effective
        * use case: creating a `staging` db from `production` db without impacting the production database


### Aurora - SysOps


## RDS & Aurora Security
* **RDS Security**:
    * encryption at rest using KMS - must be defined at launch time
    * replicas cant be encrypted if master isnt
    * automated backups
    * to encrypt an unecrypted DB: take a DB snapshot -> restore as encrypted
    * encryption in flight using SSL by default -> use AWS TLS root certificates provided on client-side
    * possible to `authenticate using IAM roles` (only for open-source databases)
    * YOU configure Security Groups
    * YOU CAN'T SSH into it unless using RDS Custom service
    * Audit logs can be enabled and sent to CloudWatch Logs for longer retention
    * to enforce SSL run `REQUIRE SSL` to all your DB users
* **Aurora Security**
    * uses same engine as RDS 
    * encryption at rest using KMS
    * automated backups, snapshots and replicas are also encrypted
    * encryption in flight using SSL
    * possible to `authenticate using IAM token`
    * YOU configure Security Groups
    * YOU CAN'T SSH into it


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
    * configuration options:
        * encryption at rest
        * encryption in flight -> can use Redis AUTH which requires a Redis AUTH token
        * can enable automatic backups
        * maintenance window with topic for SNS notifications

### ElastiCache - Redis Cluster Modes
* **Cluster Mode**: enables replication across multiple shards for scalability and availability
    * if disabled Redis will have single shard with one primary node and up to *5 replicas*
* **Multi-AZ** - provide enhanced HA, automatic failover to read replica, cross AZs


### ElastiCache - Redis for SysOps


### ElastiCache - Memcached for SysOps



&nbsp;
# Monitoring, Auditing & Performance
* **CloudTrail**
    * Audit API calls made by users / services / AWS Console
    * useful to detect anauthorized calls or root cause of changes
    * can define trails for specific resources
    * global service
* **CloudWatch**
    * metrics over time for monitoring
    * logs for storing application logs
    * alarms to send notification in case of unexpected metrics
* **Config**
    * record configuration changes
    * evaluate resources against compliance rules
    * get timeline of changes and compliance
    * automatically remediate non-compliant resources


## CloudWatch - Metrics
* **Metrics** - collect and track key metrics
    * a Metric is a `variable` to monitor
    * are provided for `every service` in AWS
    * have `timestamps`
    * belong to `namespaces`
    * **Dimensions** are an attribute of a metric (instance id, environment, etc)
    * can create a CloudWatch `dashboard` for Metrics
    * examples:
        * **EC2** - CPU Utilizations, Status Check, Network
            * default sampled every 5 minutes
            * can enable `detailed metrics` - sampled every 1min (extra cost)
                * good if you want to scale faster for ASG
                * 10 detailed monitoring metrics in Free Tier
            * EC2 Memory usage is not pushed by default (must be pushed from instance as Custom Metric)
        * **EBS volumes** - disk read/writes
        * **S3 buckets** - BucketSizeBytes, NumberOfObjects, AllRequests
        * **Billing** - total estimated charge (only in us-east-1)
        * **Service Limits** - how much a service API has been used
    * **CloudWatch Metric Stream** - continually stream metrics to a KDF or 3rd party service provider(Datadog, Dynatrace, New Relic, etc.), with `near-real-time delivery` and `low latency`


## CloudWatch - Custom Metrics
* **Custom Metrics** - define and send your own CloudWatch metrics
    * example: RAM, disk space, number of logged users...
    * **PutMetricData** - API to upload custom metrics
    * **StorageResolution** - API parameter for metric resolution:
        * `Standard` - 1 minute sampling
        * `High Resolution` - 1/5/10/30 sec sampling - higher cost
    * can use dimensions
    * accepts metric data points *two weeks in the past* or *two hours in the future*
        * make sure to configure time in EC2 for integrity between CloudWatch data and EC2 data


## CloudWatch - Dashboards



## CloudWatch - Logs
* **Logs** - collect, monitor, analyze, store log files
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
    * enables `real-time` monitoring
    * adjustable log `retention`
        * by default logs never expire
        * log retention policy can be defined at `Log Groups` level
    * **Log Groups** - arbitrary name, usually representing an application
        * can create 2 subscription filters per log group
    * **Log Stream** - instances within application / log files / containers
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


## CloudWatch - Synthetics
* **CloudWatch Synthetics** - configurable script to monitor APIs, URLs, Websites,...
    * reproduce what customers do programatically to find issues before customers are impacted - `E2E tests`
    * `check availability / latency` of endpoints
    * store `load time data` and `screenshots` of the UI
    * integrates with `CloudWatch Alarms` - this allows integration with Lambda to perform actions based on script output
    * write scripts in `Node.js / Python`
    * programmatic access to a `headless Google Chrome browser`
    * run `once`, or on a regular `schedule`
    * **Blueprints**
        * *Heartbeat Monitor* - load URL, store screenshot and an HTTP archive file
        * *API Canary* - test basic read / write functions of REST APIs
        * *Broken Link Checker* - chceck all links inside the URL that you are testing
        * *Visual Monitoring* - compare screenshot taken during canary run with baseline screenshot - `Visual Regression Testing`
        * *Canary Recorder* - integrates with **CloudWatch Synthetics Recorder** which records actons on a website and automatically generates a script for that
        * *GUI Workflow Builder* - verifies that actions can be taken on your webpage (ex. test login form)


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

### EventBridge - Content Filtering


### EventBridge - Input Transformation


## Service Quotas


## CloudTrail


### CloudTrail - SysOps


## Config


### Config - Aggregators



&nbsp;
# AWS Account Management


## Status Health Dashboard



## Personal Health Dashboard


## Organizations


### Organizations - SysOps


## AWS Control Tower


## AWS Service Catalog


## AWS Billing Alarms


## AWS Cost Explorer


## AWS Budgets


## AWS Cost Allocation Tags & Cost & Usage Reports


## AWS Compute Optimizer


&nbsp;
# Disaster Recovery


## AWS DataSync


## AWS Backup



&nbsp;
# Security and Compliance


## Shared Responsibility Model


## DDoS, AWS Shield and AWS WAF 


## Penetration Testing on AWS


## Amazon Inspector


## Logging in AWS


## Amazon GuardDuty


## Amazon Macie


## Trusted Advisor


## Encryption


## KMS


### KMS - Key Rotation


### KMS - SysOps


## CloudHSM


## AWS Artifact


## ACM


## Secrets Manager


### Secrets Manager - Monitoring & Troubleshooting


### Secrets Manager vs SSM



&nbsp;
# Identity


## IAM Security Tools


## IAM Access Analyzer


## Identity Federation with SAML & Cognito


## STS & Cross Account Access


## Cognito User Pools


## Cognito Identity Pools


## IAM Identity Center



&nbsp;
# Route 53




&nbsp;
# VPC



&nbsp;
# Other Services
* **OpenSearch** - 
* **ES + Kibana** - 
    * **Production Setup** - 
* **X-Ray** - 
* **AWS Amplify** -
