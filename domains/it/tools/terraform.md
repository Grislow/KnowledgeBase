# Terraform Guide & Reference

## Table of Content

* [Terminology](#terminology)
* [Basic](#basics)
    * [Build Infrastructure](#build-infrastructure)
    * [Change Infrastructure](#change-infrastructure)
    * [Destroy Infrastructure](#destroy-infrastructure)
    * [Define Input Variables](#define-input-variables)
    * [Query Data with Outputs](#query-data-with-outputs)
    * [Store Remote State](#store-remote-state)
* [CLI](#cli)
    * [Initialize Configuration](#initialize-configuration)
    * [Create Terraform Plan](#create-terraform-plan)
    * [Apply Terraform Configuration](#apply-terraform-configuration)
    * [Customize Terrafom Configuration with Variables](#customize-terrafom-configuration-with-variables)
    * [Output Data from Terraform](#output-data-from-terraform)
    * [Manage Terraform Versions](#manage-terraform-versions)
    * [Lock & Update Provider Versions](#lock-&-update-provider-versions)
    * [Target Resources](#target-resources)
    * [Manage Resources in Terraform State](#manage-resources-in-terraform-state)
    * [Import Terraform Configuration](#import-terraform-configuration)
    * [Use Refresh-Only Mode to Sync Terraform State](#use-refresh-only-mode-to-sync-terraform-state)
    * [Log in to Terraform Cloud from the CLI](#log-in-to-terraform-cloud-from-the-cli)
    * [Troubleshoot Terraform](#troubleshoot-terraform)
    * [Develop Configuration with the Console](#develop-configuration-with-the-console)
    * [Verify Terraform Binary Archives](#verify-terraform-binary-archives)
* [Configuration Language](#configuration-language)
    * [Define Infrastructure with Terraform Resources](#define-infrastructure-with-terraform-resources)
    * [Protect Sensitive Input Variables](#protect-sensitive-input-variables)
    * [Simplify Terraform Configuration with Locals](#simplify-terraform-configuration-with-locals)
    * [Query Data Sources](#query-data-sources)
    * [Create Resource Dependencies](#create-resource-dependencies)
    * [Manage Similar Resources with Count](#manage-similar-resources-with-count)
    * [Manage Similar Resources with For Each](#manage-similar-resources-with-for-each)
    * [Perform Dynamic Operations with Functions](#perform-dynamic-operations-with-functions)
    * [Create Dynamic Expressions](#create-dynamic-expressions)
    * [Use Configuration to Move Resources](#use-configuration-to-move-resources)
    * [Validate Modules with Custom Conditions](#validate-modules-with-custom-conditions)
* [Modules](#modules)
    * [Modules Overview](#modules-overview)
    * [Use Registry Modules in Configuration](#use-registry-modules-in-configuration)
    * [Build and Use a Local Module](#build-and-use-a-local-module)
    * [Customize Modules with Object Attributes](#customize-modules-with-object-attributes)
    * [Share Modules in the Private Registry](#share-modules-in-the-private-registry)
    * [Add Public Providers and Modules to your Private Registry](#add-public-providers-and-modules-to-your-private-registry)
    * [Refactor Monolithic Terraform Configuration](#refactor-monolithic-terraform-configuration)
    * [Module Creation - Recommended Pattern](#module-creation---recommended-pattern)
    * [Use Configuration to Move Resources](#use-configuration-to-move-resources)
    * [Create and Use No-Code Modules](#create-and-use-no-code-modules)
* [AWS Services](#aws-services)
    * [Auto Scaling Groups](#auto-scaling-groups)
    * [Control Tower Account Factory](#control-tower-account-factory)
    * [Cloud Control Provider](#cloud-control-provider)
    * [Upgrade RDS Major Version](#upgrade-rds-major-version)
    * [AssumeRole for Cross-Account Provisioning](#assumerole-for-cross-account-provisioning)
    * [Configure Default Tags](#configure-default-tags)
    * [Create IAM Policies](#create-iam-policies)
    * [Deploy Serverless Applications](#deploy-serverless-applications)
    * [ALB for Blue-Green & Canary Deployments](#alb-for-blue-green-&-canary-deployments)
    * [Static Website with S3 & Cloudflare](#static-website-with-s3-&-cloudflare)
    * [Manage AWS RDS Instances](#manage-aws-rds-instances)
    * [Provision an EKS Cluster](#provision-an-eks-cluster)
    * [Preview Environments with Terraform, GitHub Actions & Vercel](#preview-environments-with-terraform,-gitHub-actions-&-vercel)
    * [Manage AWS DynamoDB Scale](#manage-aws-dynamodb-scale)
* [Provision](#provision)
    * [Provision Infrastructure with Cloud-Init](#provision-infrastructure-with-cloud-init)
    * [Provision Infrastructure with Packer](#provision-infrastructure-with-packer)
    * [Set Up Terraform Cloud Run Task for HCP Packer](#set-up-terraform-cloud-run-task-for-hcp-packer)
    * [Identify Compromised Images with Terraform Cloud](#identify-compromised-images-with-terraform-cloud)
    * [Enforce Image Compliance with Terraform Cloud](#enforce-image-compliance-with-terraform-cloud)
    * [Standardize Machine Images Across Multiple Cloud Providers](#standardize-machine-images-across-multiple-cloud-providers)
* [State](#state)
    * [Import Terraform Configuration](#import-terraform-configuration)
    * [Migrate State to Terraform Cloud](#migrate-state-to-terraform-cloud)
    * [manage Resources in Terraform State](#manage-resources-in-terraform-state)
    * [Target Resources](#target-resources)
    * [Troubleshoot Terraform](#troubleshoot-terraform)
    * [Manage Resource Drift](#manage-resource-drift)
    * [Manage Resource Lifecycle](#manage-resource-lifecycle)
    * [Version Remote State with the Terraform Cloud API](#version-remote-state-with-the-terraform-cloud-api)
    * [Use Refresh-Only Mode to Sync Terraform State](#use-refresh-only-mode-to-sync-terraform-state)
    * [Develop Configuration with the Console](#develop-configuration-with-the-console)
    * [Use Configuration to Move Resources](#use-configuration-to-move-resources)
* [Tips & Tricks](#tips-&-tricks)
* [Tools](#tools)



&nbsp;
# Terminology
* `Terraform Core` - an application that contains logic for all terraform operations including:
    * interpreting onfigurations
    * managing state file
    * managing resource dependency graph
    * communicating with provider plugins
* `Terraform Plugins` - providers and provisioners bridge the Terraform Core and their respective target APIs
    * implelment resources via basic CRYD APIs to communicate with 3rd part services
* `State` - file that stores information on provisioned resources. The main source of truth for what is built for a terraform project
* `Provider` - plugin used by TF to create & manage resource
    * ex: `aws`
    * can use multiple provider blocks
    * can use different providers together -> ex.: pass AWS EC2 instance IP addess to a monitoring resource in DataDog
    * handle:
        * authentication with target environment
        * api calls
        * mapping resources to services
* `Resource` - components of your infrastructure, can be physical / virtual / logical component
    * ex: `"awsinstance" "app_server"`
    * naming: `resource type` `resource name`
    * **unique id** formed from the naming, like `resource_type.resource_name`
    * resource blocks contain arguments used to configure the resource


&nbsp;
# Basics
Terraform isan IaC solution created adn maintained by HashiCorp

To deploy infrastructure with Terraform:
* `Scope` - identify the infrastructure for your project
* `Author` - write the configuration for your infrastructure
* `Initialize` - install the plugins Terraform needs to manage the infrastructure
* `Plan` - prevew the changes Terraform needs to manage the infrastructure
* `Apply` - make the planned changes

Terraform keeps track of your real infra in a `state file` that acts as a source of truth for your environment.

For `Terraform with AWS` make sure to have the following:
* `Terraform CLI` installed
* `AWS CLI` installed
* `AWS account` and associated credentials

## Build Infrastructure
* **main.tf** -> main entrypoint to running your IaC script
    * **terraform** block -> teraform settings, providers used to provision infrastructure
        * `source` -> (optional) hostname, namespace, provider type
            * example: `hashicorp/aws` is shorthand for `registry.terraform.io/hashicorp/aws`
        * `version` -> specify version for provider, by default its the latest version during initialization
    * **provider "aws"** -> configurations for specific providers
        * a `provider` is a plugin Terraform uses to create & manage resources
    * **resource "aws_instance" "app_server"** -> component of infrastructure
* `terraform init` -> initialize terraform project locally when you create new config or check out existing config
    * downloads & installs providers defined in config - stores provider code in `.terraform` folder
    * prints out which version of provider was installed
    * creates `.terraform.lock.hcl` which specifies version of provider used
* `terraform fmt` -> updates configurations in the current directory for readability and consistency
    * prints out names of files it modified
* `terraform validate` -> validate your configuration
* `terraform apply` -> prints out execution plan, similiar to git diff. Use command prompt to accept/reject plan. Once accepted it will apply changes to infrastructure
* **inspect state** - applied configurations result in data written into a file called `terraform.tfstate`.
    * stores IDs & properties of resources it manages in this file
    * helps with update & destroy actions on these resources
    * only way Terraform can track which resources it manages
    * often contains `sensitive information`
    * good practice:
        * store file securely
        * restrict access to only trusted team members who need to manage infrastructure
        * store state remotely in production (can use `Terraform Cloud` or `Terraform Enterprise` for this)
* `terraform show` -> cli to inspect current state
* `terraform state` -> cli tool for advanced state management
    * `list` -> list resources in projects state
* if `terraform validate` = `success` but `terraform apply` = `fail` you can **troubleshoot**
    * changing regions will need you to cahnge ami -> AMI ID's are region-specific
    * make sure you have a VPC in the correct account and region


``` json
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```


## Change Infrastructure
* if a change cannot be applied to running resource -> TF will destroy the old resource and create a new one!
    * within the `execution plan` a resource that will be recreated is marked as `-/+`
    * terraform shows what causes the need to recreate


## Destroy Infrastructure
* `terraform destroy` - terminates resources managed by your Terraform projecyt and only those managed by the project
    * shows `execution plan` before applying


## Define Input Variables
* variables let you make configuration more dynamic and flexible
* variables are defined in a `variable.tf` file
* variables are referenced with `var.<variable_name>` syntax
* you can overwrite a variables with cli flag -> `terraform apply -var "instance_name=SomeOtherName"

Example `variable.tf` file
```json
variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "ExampleAppServerInstance"
}
```

## Query Data with Outputs
* outputs are variables that are initialized as a result of applying the terraform script
* ex.: `aws_instance.app_server.id` -> the id of an EC2 instance
* output definitions are stroed in a `outputs.tf` file
* output values are printed to the screen when you apply your configuration
* **outputs** can be used to conenct a TF project with other parts of your infrastructure or with other TF projects

Example `outputs.tf` file content:
```json
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}

```


## Store Remote State
* for a production environment you should keep `state secure & encrypted` by running Terraform in a remote environment
* things to consider when selecting a remote environment:
    * versioning
    * auditing
    * collaboration
    * securely store variables -> API tokens / access keys
    * safety & stability for long-running Terraform processes
* **Terraform Cloud** - native TF solution that allows storing state remotely and more
    * `terraform login` -> login to cloud account using cli
    * after configuring Terraform Cloud integration run `terraform init` again to re-initialize config and migrate state to remote server provided by TF Cloud
    * 
* once statefile is migrated delete local statefile `rm terraform.tfstate`

```json
terraform {
  cloud {
    organization = "organization-name"
    workspaces {
      name = "learn-tfc-aws"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
}
```


&nbsp;
# CLI
Core TF workflow consists of:
* **Initialize** prepares the working directory so Terraform can run the configuration.
* **Plan** enables you to preview any changes before you apply them.
* **Apply** makes the changes defined by your Terraform configuration to create, update, or destroy resources.

## Initialize Configuration
* **Initialize** prepares the working directory so Terraform can run the configuration.
    * configures backend
    * installs providers in `.terraform/providers`
    * installs modules in `.terraform/modules`
    * creates lock file if doesnt exist
    * can use `init` to update providers / modules
    * ensures TF uses correct state / modules / providers to create / update / destroy resources

Only need to initialize configuration with `terraform init`:
* first time you use it
* modify any provider version / module version / backend
    * if provider must run with -upgrade flag -> `terraform init -update`

After initializing run `terraform validate` to ensure:
* resources are not missing required fields
* resources dont have mismatched argument types


## Create Terraform Plan
* **Plan** enables you to preview any changes before you apply them
    * generates **execution plan**
    * reconciles local TF config with the config tracked in workspaces state file
    * based on execution plan creates list of resources to create / update / destroy
* `terraform plan` is a cli that is flexible in operation:
    * target specific resources
    * run refresh-only -> reconcile state file with the actual configuration of resources it tracks
    * WARNING: Terraform plan can contain sensitive data -> do not commit plan to version control
        * stores sensitive input variables in plain text format
* TF `does NOT record environment variables` used for configuration in plan files! -> use these for sensitive values!
* **execution plan**
    * features:
        * review contents
        * analyze how plan reflects changes to your configuration
        * save plan file
        * automation workflows in CI/CD to ensure applied changes match approved changes
    * commands to generate:
        * `terraform plan` -> preview modify actions or save a speculative plan which you can apply later
        * `terraform apply` -> common outside automation, performs changes and prompts to accept
            * can pass saved plan flag to also save the exection plan
        * `terraform destroy` -> creates execution plan to delete all of the resources managed by project
    * a execution plan in json format contains lots of **useful data** including the following objects:
        * `.terrform_version` -> version of TF used when plan was generated
        * `.configuration.provider_config` -> configuration of the provider
        * `.configuration.root_module.resources` -> resources in top level `root_module`
        * `.configuration.root_module.module_calls` -> details of modules used / input variables / outputs / resources to create
        * `.configuration.root_module.resources[0].expressions.image.references` -> references to other resources which helps Terraform determine the correct order of operations
        * `.resource_changes[]` -> list of objects representing changes to a specific resource
        * `.variables` -> defined input variables
        * `.prior_state` -> state prior to the plan action
        * `.resource_drift` -> detected drift
    * apply a saved plan with `terraform apply <plan_name>` -> will not prompt
* modify configuration:
    * use variables to modify configurations
    * store variables in `variables.tf`
    * store variables value in `terraform.tfvars` -> never commit `.tfvars` files to version control

Example bash commands:
```bash
# Save execution plan to file
terraform plan -out tfplan

# Convert plan to json format, show it, and pipe it to a jq for formatting and storing in new file
terraform show -json tfplan | jq > tfplan.json

# Show terraform and format version for the plan
jq '.terraform_version, .format_version' tfplan.json

# Review the changes to a specific resources
jq '.resource_changes[] | select( .address == "docker_image.nginx")' tfplan.json

# Apply a saved plan
terraform apply tfplan
```

Example `variables.tf`:
```json
variable "secret_key" {
  type        = string
  sensitive   = true
  description = "Secret key for hello module"
}
```

Example `terraform.tfvars`:
```bash
secret_key = "TOPSECRET"
```


## Apply Terraform Configuration
* **Apply** makes the changes defined by your Terraform configuration to create, update, or destroy resources
    * **CLI** -> `terraform apply`
    * **Steps**:
        1. `lock` projects `state` -> no other instances withh attempt to modify state
        1. `create plan`, wait for approval -> or provide saved plan where it will not wait for approval
        1. `executes plan`
            * in parallel where possible
            * sequentially where a resource depends on another
        1. `update state` file with snapshot of the current state of your resources
        1. `unlock state` file
        1. `print report` of made changes & `output values`
    * **Errors** -> no support for rollback on partially-completed apply. Must fix and reapply
        1. logs the error and reports it to the console
        1. updates state file with any changes
        1. unlocks the state file
        1. exits
    * **Common Error Root Cause**
        * change to resource outside of TF control
        * networking or other transient errors
        * expected error from the upstream API -> duplicate srouce name / reach a resource limit
        * unexpected error from upstream API -> internal server error
        * bug in TF provider code, or TF itself
        * resource limit at cloud provider
    * commands to interact with specific resources
        * `-replace` -> instruct TF to reprovision the resourceusing the same configuration
        * `-target` -> applies new TF only to target resource


``` bash
# example of using terraform output to send HTTP request to a container containing nginx
> curl $(terraform output -json nginx_hosts | jq -r '.[0].host')

# list resources
$ terraform state list
docker_container.data
docker_container.nginx[0]
docker_container.nginx[1]
docker_container.nginx[2]
docker_container.nginx[3]

# replace a specific container
$ terraform apply -replace "docker_container.nginx[1]"
```


## Customize Terrafom Configuration with Variables
* **Variables** provide a consistent interface to change how a given configuration behaves
    * variable block **arguments**:
        * `description` -> a short description to document the purpose of the variable
        * `type` -> the type of data contained in the variable
        * `default` -> the default value
    * **recommendation**
        * always define `description` and `type`
    * **good to know**
        * TF does not support unassigned variables
        * variable must contain `literal values` (no computed values)
        * reference with: `var.<variable_name>`
    * **types** - tf will convert a variable to the correct type if possible `"2"` -> `2` for number type
        * `simple types` -> string, number, bool
        * `collection types`
            * **list** - ordered, specify type of elements with `list(type)`, can have lists of complex types liek `list(map)`
                * can index list `var.private_subnet_cidr_blocks[1]`
                * can slice list `slice(var.private_subnet_cidr_blocks, 0, 3)` , 3 arguemnts -> list / start / end
            * **map** - unordered lookup, specify type of values with `map(type)`
                * keys are always string
                * reference by key -> `var.resource_tags["environment"]`
            * **set** - unordered unique
        * `structural types`
            * **tuple** -  a fixed-length sequence of values of specified types
            * **object** - a lookup table, matching a fixed set of keys to values of specified types
    * **string interpolation**
        * can use variables / local values / output of functions to create strings
        * ex: `"web-sg-${var.resource_tags["project"]}-${var.resource_tags["environment"]}"`
    * **validate**
        * can add conditions that validate a variable and display an error message if validation doesnt pass
* **terraform.tfvars** - file for capturing TF vairable values
    * TF automatically loads all file in cwd with matching `terraform.tfvars` or `*.auto.tfvars`
    * can also use `-var-file` to specify other files by name
    * can be in JSON
* `terraform console` -> opens a console that allows performing operations on the TF state value
    * leave console with `Control-D` or typing `exit`


Example `variables.tf`:
``` json
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "vpc_cidr_block" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "instance_count" {
  description = "Number of instances to provision."
  type        = number
  default     = 2
}

variable "enable_vpn_gateway" {
  description = "Enable a VPN gateway in your VPC."
  type        = bool
  default     = false
}

variable "public_subnet_cidr_blocks" {
  description = "Available cidr blocks for public subnets."
  type        = list(string)
  default     = [
    "10.0.1.0/24",
    "10.0.2.0/24",
    "10.0.3.0/24",
    "10.0.4.0/24",
    "10.0.5.0/24",
    "10.0.6.0/24",
    "10.0.7.0/24",
    "10.0.8.0/24",
  ]
}

variable "private_subnet_cidr_blocks" {
  description = "Available cidr blocks for private subnets."
  type        = list(string)
  default     = [
    "10.0.101.0/24",
    "10.0.102.0/24",
    "10.0.103.0/24",
    "10.0.104.0/24",
    "10.0.105.0/24",
    "10.0.106.0/24",
    "10.0.107.0/24",
    "10.0.108.0/24",
  ]
}

variable "resource_tags" {
  description = "Tags to set for all resources"
  type        = map(string)
  default     = {
    project     = "project-alpha",
    environment = "dev"
  }
}
```

Example `terraform.tfvars`:
```json
resource_tags = {
  project     = "project-alpha",
  environment = "dev",
  owner       = "me@example.com"
}

ec2_instance_type = "t3.micro"

instance_count = 3
```

Example of variables with validation logic:
```json
variable "resource_tags" {
  description = "Tags to set for all resources"
  type        = map(string)
  default     = {
    project     = "my-project",
    environment = "dev"
  }

  validation {
    condition     = length(var.resource_tags["project"]) <= 16 && length(regexall("[^a-zA-Z0-9-]", var.resource_tags["project"])) == 0
    error_message = "The project tag must be no more than 16 characters, and only contain letters, numbers, and hyphens."
  }

  validation {
    condition     = length(var.resource_tags["environment"]) <= 8 && length(regexall("[^a-zA-Z0-9-]", var.resource_tags["environment"])) == 0
    error_message = "The environment tag must be no more than 8 characters, and only contain letters, numbers, and hyphens."
  }
}
```


## Output Data from Terraform
* **Output** values let you export structured data about your resources
    * **block fields**
        * `description` -> optional, documents intent and onctent of the output
        * `value` -> can use result of any TF expression as the value of an output
    * **use**
        * configure other parts of infra
        * data source for another TF workspace
        * expose data from a child module to root module
    * **recommend**
        * define output in separate file `outputs.ts`
        * always add description
    * **cli** -> `terraform output` - queries all outputs
    * **redact** - designate output as sensitive, which will hide htme to avoid accidentally printing them out to the console
        * works only in -> `planning`, `applying`, `destroying`, `querying all outputs`
        * does not work -> `querying outputs in JSON`, `querying specific outputs by name`, `using outputs from child in root`
    * **format**
        * `terraform output` -> human-readable format
        * `terraform output -json` -> machine-readable format



Example output:
```json
output "vpc_id" {
  description = "ID of project VPC"
  value       = module.vpc.vpc_id
}

output "lb_url" {
  description = "URL of load balancer"
  value       = "http://${module.elb_http.elb_dns_name}/"
}

output "web_server_count" {
  description = "Number of web servers provisioned"
  value       = length(module.ec2_instances.instance_ids)
}

output "db_username" {
  description = "Database administrator username"
  value       = aws_db_instance.database.username
  sensitive   = true
}

output "db_password" {
  description = "Database administrator password"
  value       = aws_db_instance.database.password
  sensitive   = true
}
```

CLI:
```shell
# query all outputs
$ terraform output
lb_url = "http://lb-5YI-project-alpha-dev-2144336064.us-east-1.elb.amazonaws.com/"
vpc_id = "vpc-004c2d1ba7394b3d6"
web_server_count = 4

# query by name
$ terraform output lb_url
"http://lb-5YI-project-alpha-dev-2144336064.us-east-1.elb.amazonaws.com/"

# get raw output value (no quotes around strings)
$ terraform output lb_url
"http://lb-5YI-project-alpha-dev-2144336064.us-east-1.elb.amazonaws.com/"

# cURL load balancer
$ curl $(terraform output -raw lb_url)
<html><body><div>Hello, world!</div></body></html>

# see values of sensitive outputs in state file
$ grep --after-context=10 outputs terraform.tfstate
```


## Manage Terraform Versions
* **Versions** - new versions come with new features, but you must be careful when updating
    * **good to know**
        * if your version and `required_version` in config is a mismatch CLI will throw error when attempting to apply
        * `major.minor.patch` -> version fomat used by HasiCorp
            * minor / path versions are backward compatible
        * `version` - the state file version, only updated if TF version requires it
        * `terraform_version` - TF version is updated whenever you apply a change to config using a newer version
        * attempting to work with older version that in state file -> results in `state lock error`
        * provider versions are only compatible with specific TF versions
    * **possible update consequences**
        * require to update provider versions
        * refresh your state file version
        * require configfuration edits to implement new features
    * **good practice**
        * use `required_version` setting to control which versions of TF will work with your config
        * use `~>` style version constraints
    * **syntax for pinning versions in required_version**
        * `0.15.0` -> only v0.15.0
        * `>= 0.15` -> any v0.15.0 or greater
        * `~> 0.15.0` -> any v0.15.x
        * `>= 0.15, < 2.0.0` -> v0.15.0 or greater, but less than v2.0.0

Example `main.tf`
```json
terraform {
  required_providers {
    aws = {
      version = "~> 2.13.0"
    }
    random = {
      version = ">= 2.1.2"
    }
  }

  required_version = "~> 0.12.29"
}
```

```shell
# print versio nof TF and check if is latest
$ terraform version

# inspect terraform state file version format and TF version that generated it
$ grep -e '"version"' -e '"terraform_version"' terraform.tfstate
"version": 4,
"terraform_version": "0.15.0",
```


## Lock & Update Provider Versions
* **Providers** manage resource by communicating between TF and target APIs
    * **good to know**
        * target APIs change -> provider maintainers may update and version the provider
        * some AWS provider versions are not compatible with `M1` or `M2` CPU Chips
    * **good practice**
        * multiple users / automation tools should run same TF config and the same versions of required providers
    * **manage provider version**
        * two way:
            * specify provider version constraints in your `terraform` block
            * use dependency lock file
        * if version wasnt specified TF will use latest version compatible with the used TF version
    * **tips**
        * you can also use `terraform init -upgrade` to downgrade provider versions to conform with constraints


Example `terraform.tf` with spcified TF version sand provider versions:
```json
terraform {
  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "3.1.0"
    }

    aws = {
      source  = "hashicorp/aws"
      version = ">= 2.0.0"
    }
  }

  required_version = ">= 1.1"
}
```

```shell
# upgrade providers to latest versions consistent with version constraints
terraform init -upgrade
```

## Target Resources
* **Target** flag lets you apply changes only to a specific resource
    * **uses** -> troubleshooting errors
    * **good practice**
        * should not be part of your normal workflow
        * after applying changes to target -> apply changes to whole project for consistency
    * **targets**
        * single resource -> `-target="random_pet.bucket_name"`
            * WILL updates resources that the target depends on
            * WILL NOT update resources that depend on the target
        * module -> `-target="module.s3_bucket"`
        * multiple resources -> `-target="aws_s3_object.objects[2]" -target="aws_s3_object.objects[3]"`
    * `dependency graph` - is created by TF to determine the correct order in which to apply changes


```shell
# only target specific resource
terraform plan -target="random_pet.bucket_name"

# target module
terraform plan -target="module.s3_bucket"
```


## Manage Resources in Terraform State
* **State** - file named `terraform.tfstate` that track the configure resources
    * **WARNING**: never manually modify state files
    * **sections**:
        * **resources** - schema for any resources you create
            * `mode` - type of resource - either a resource `managed`, or data source `dataz`
            * `key` - resource type like `aws_ami`
            * **instances** - attributes of the resource
            * `dependencies` - what the resource depends on
    * **replace** - flag for plan/ apply to safely recreate resources in your environment
        * works even if no changes in configuration
        * **use**:
            * system malfunction
            * when user manually changes a setting
            * update a provisioning script
    * **refresh** - applies changes to state that are the result of drift within the actual resources
        * this does nto change the configuration
        * `refresh` is run anyway during `plan` / `apply` / `destroy`


CLI
```shell
# human-friendly output of the resources contained in your state
terraform show

# show actions TF would take to recreate a specific resource
terraform plan -replace="aws_instance.example"

# destroy and recreate a resource
terraform apply -replace="aws_instance.example"
```

## Import Terraform Configuration
* **Import** allows bringing existing infrastructure under its management of a terraform project
    * **steps**
        1. identify the existing infrastructure you will import
        1. import infrastructure into your TF state file
        1. write TF configuration that matches that infrastructure
        1. review the TF plan to ensure the configuration matches expected state and infrastructure
        1. apply the configuration to u pdate your TF state
    * **good practice**
        * make copy of `terraform.tfstate` and `.terraform` directory before doing import in a real project
* **Update** configuration to match state after `terraform plan` has two approaches:
    * `Accept entire current state as-is` -> this approach is often faster, but can lead to overly verbose configuration since not all attributes in state are necessary in the configuration.
    * `Cherry-pick required attributes into configuration one at a time` -> This creates a more manageable configuration, but requires understanding which attributes are required.

```shell
# identify resource
docker ps --filter "name=hashicorp-learn"

# import the docker container by ID into the docker tf config file
terraform import docker_container.web $(docker inspect --format="{{.ID}}" hashicorp-learn)

# review contents of state file 
#   -> if import successful container should be visible in output
terraform show

# run a plan to see what is missing in the configuration
terraform plan
```

## Use Refresh-Only Mode to Sync Terraform State
* **Refresh-Only** refreshes the state file without making modifications to the infrastructure
    * makes it safe to check the state file against the actual infrastructure
    * `plan` and `apply` implictly perform an in-memory refresh as part of their functionality
    * run `terraform plan -refresh-only` to review how Terraform would update your state file
    * `terraform apply -refresh-only`
        * updates outputs if necessary


## Log in to Terraform Cloud from the CLI
* `terraform login` - command that allows authenticating with Terraform Cloud
    * will need to generate a token in the browser app


## Troubleshoot Terraform
* potential causes for TF errors:
    * **Language Errors** - syntax error in HCL. CLI will print out line number in which it occurred
    * **State Errors** - out of sync state can result in destroyed / changed resources
    * **Core Errors** - bug in terraform core application. Should open GitHub issue in case of this type of error
    * **Provider Errors** - provider logic error. Should open GitHub issue in case of this type of error
* `TF_LOG_CORE=TRACE` -> env variable that enables core logging -> `TRACE` provides highest level of logging
* `TF_LOG_PROVIDER=TRACE` -> env variables that enables provider logging -> `TRACE` provides highest level of logging
* `TF_LOG_PATH=logs.txt` -> set the file to which logs will be written


## Develop Configuration with the Console
* `terraform console` - opens a terraform console
    * **uses**:
        * develop and debug configuration
        * good for complex state data and TF expressions
    * **good to know**
        * console locks state file
        * cannot plan / apply while console is open

``` bash
# open terraform console
$ terraform console

# check a resources
$ aws_s3_bucket.data

# transform a json document to HCL map to use in a TF configuration
echo 'jsondecode(file("bucket_policy.json"))' | terraform console
```

## Verify Terraform Binary Archives

```bash
# install curl to download files to local machine
brew install curl

# install gpg to import and verify HashiCorps keys
brew install --cask gpg-suite

# install sha3sum to verify checksum of your TF archive file
brew install sha3sum

# create a temporary GPG configuration and key
export GNUPGHOME=./.gnupg
gpg --quick-generate-key --batch --passphrase "" human@example.com

# download and import hashicorps public key
curl --remote-name https://keybase.io/hashicorp/pgp_keys.asc
gpg --import pgp_keys.asc

# sign the hashicorp key with the gpg key created earlier
gpg --sign-key 34365D9472D7468F

# verify public key id and fingerprint 
#   - output fingerprint: C874 011F 0AB4 0511 0D02  1055 3436 5D94 72D7 468F
#   - output key ID: 34365D9472D7468F
#   - you can verify these values against PGP Public Keys provided by HashiCorp
$ gpg --fingerprint --list-signatures "HashiCorp Security"
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   1  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: depth: 1  valid:   1  signed:   0  trust: 1-, 0q, 0n, 0m, 0f, 0u
gpg: next trustdb check due at 2023-05-12
pub   rsa4096 2021-04-19 [SC] [expires: 2026-04-18]
      C874 011F 0AB4 0511 0D02  1055 3436 5D94 72D7 468F
uid           [  full  ] HashiCorp Security (hashicorp.com/security) <security@hashicorp.com>
sig 3        34365D9472D7468F 2021-04-19  HashiCorp Security (hashicorp.com/security) <security@hashicorp.com>
sig          33B7139B683F1365 2021-05-12  human@example.com
sub   rsa4096 2021-04-19 [E] [expires: 2026-04-18]
sig          34365D9472D7468F 2021-04-19  HashiCorp Security (hashicorp.com/security) <security@hashicorp.com>
sub   rsa4096 2021-04-19 [S] [expires: 2022-04-20]
sig          34365D9472D7468F 2021-04-20  HashiCorp Security (hashicorp.com/security) <security@hashicorp.com>
sub   rsa4096 2021-04-21 [S] [expires: 2026-04-20]
sig          34365D9472D7468F 2021-04-21  HashiCorp Security (hashicorp.com/security) <security@hashicorp.com>

# download terraform and archive checksums
#   - these are made available along with the binaries
curl --remote-name https://releases.hashicorp.com/terraform/0.15.3/terraform_0.15.3_darwin_amd64.zip
curl --remote-name https://releases.hashicorp.com/terraform/0.15.3/terraform_0.15.3_SHA256SUMS
curl --remote-name https://releases.hashicorp.com/terraform/0.15.3/terraform_0.15.3_SHA256SUMS.sig

# verify checksum and signatures
gpg --verify terraform_0.15.3_SHA256SUMS.sig terraform_0.15.3_SHA256SUMS

# verify terraform archive
shasum --algorithm 256 --check terraform_0.15.3_SHA256SUMS
```



&nbsp;
# Configuration Language
* **HashiCorp Configuration Language (HCL)** - a declarative configuration language used to interact with Terraform


## Define Infrastructure with Terraform Resources
* **Resource** - components of your infrastructure, can be physical / virtual / logical component
    * ex: `"awsinstance" "app_server"`
    * naming: `resource type` `resource name`
    * **unique id** formed from the naming, like `resource_type.resource_name`
    * resource blocks contain arguments used to configure the resource
    * **Have**:
        * **Arguments** - configure a particular resource
            * can be `required` or `optional`
            * if a required argument is missing TF will give an error
        * **Attributes** - values exposed by existing resource
            * references: `<resource_type>.<resoure_name>.<attribute_name>`
            * usually assigned by the underlying cloud provider or API
        * **Meta-arguments** - change a resources behavior
            * example: use `count` meta-argument to create multiple resources
            * function of terraform itself


## Protect Sensitive Input Variables
* TF `does NOT record environment variables` used for configuration in plan files! -> use these for sensitive values!
    * `export TF_VAR_db_username=admin TF_VAR_db_password=adifferentpassword`
    * keep in mind that these values will be in your environment
* can also set outputs as `sensitive`


Example `variables.tf`:
```json
variable "secret_key" {
  type        = string
  sensitive   = true
  description = "Secret key for hello module"
}
```

Example `terraform.tfvars`:
```bash
secret_key = "TOPSECRET"
```

Example `outputs.tf` with sensitive data:
```json
output "db_connect_string" {
  description = "MySQL database connection string"
  value       = "Server=${aws_db_instance.database.address}; Database=ExampleDB; Uid=${var.db_username}; Pwd=${var.db_password}"
}
```

## Simplify Terraform Configuration with Locals
* **Locals** are static values that can be referenced multiple times within your configuration
    * allow for a cleaner configuration -> less repetition
    * put locals at top of file for readability

Example locals in `main.tf`
```json
locals {
  name_suffix = "${var.resource_tags["project"]}-${var.resource_tags["environment"]}"
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.66.0"

  name = "vpc-${local.name_suffix}"
}

module "elb_http" {
  source  = "terraform-aws-modules/elb/aws"
  version = "2.4.0"

  # Ensure load balancer name is unique
  name = "lb-${random_string.lb_id.result}-${local.name_suffix}"
  ## ...
}
```

## Query Data Sources
* **Data Sources** - let you dynamically fetch data from APIs or other TF state backends.
    * make your configurations more flexible and dynamic
    * examples:
        * availability zones
        * machine image IDs
    * reference with: `data.<NAME>.<ATTRIBUTE>`

Example of `aws_availability_zones` which is a data source provided by the AWS provider:
* `state` -> limits only to those that are available
```json
data "aws_availability_zones" "available" {
  state = "available"

  filter {
    name   = "zone-type"
    values = ["availability-zone"]
  }
}
```

Add in output to figure out which region was finally selected:
```json
data "aws_region" "current" { }
```
```json
output "aws_region" {
  description = "AWS region"
  value       = data.aws_region.current.name
}
```

A data source containing the latest amazon linux ami:
* then refrence with: `ami = data.aws_ami.amazon_linux.id`
```json
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}
```


## Create Resource Dependencies
* sometimes resources / modeules depend on eachother
    * usually TF infers dependencies and creates / destroys in the correct order based on that
    * `depends_on` - argument that allows setting dependency explictly
        * sometimes TF cant infer dependency
        * compatible with all types of resources
        * **type** -> array
        * dependent resources cannot be crated in parallel -> can extend TF script execution time
* destruction of resources happens in reverse sequence to creation for dependent resources
* exernal modules always need to be installed first
  

Example where TF will infer dependency:
* `aws_eip.ip` depends on `aws_instance.example_a`
* sequential creation: `aws_instance.example_a` > `aws_eip.ip`
* parallel creation: `aws_instance.example_a` && `aws_instance.example_b`
```json
provider "aws" {
  region = var.aws_region
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

resource "aws_instance" "example_a" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
}

resource "aws_instance" "example_b" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"
}

resource "aws_eip" "ip" {
  vpc      = true
  instance = aws_instance.example_a.id
}
```

Example with explicit setting of dependency with `depends_on`:
* the sqs modules is installed first
* then the s3 bucket
* then the instance
* finally the sqs queue
```json
resource "aws_s3_bucket" "example" { }

resource "aws_instance" "example_c" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t2.micro"

  depends_on = [aws_s3_bucket.example]
}

module "example_sqs_queue" {
  source  = "terraform-aws-modules/sqs/aws"
  version = "3.3.0"

  depends_on = [aws_s3_bucket.example, aws_instance.example_c]
}
```


## Manage Similar Resources with Count
* **count** - provides an incremental counter for identical resources that are created multiple times

Example that speifies how to genrate `count` and then use it:
```json
resource "aws_instance" "app" {
  depends_on = [module.vpc]

  count = var.instances_per_subnet * length(module.vpc.private_subnets)

  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  subnet_id              = module.vpc.private_subnets[count.index % length(module.vpc.private_subnets)]
  vpc_security_group_ids = [module.app_security_group.this_security_group_id]

  ## ...
}
```


## Manage Similar Resources with For Each
* **for_each** - meta argument allows configuring a set of similar resources by iterating over a data structure and configuring a resources for each element in the data structure
    * supports map / list / set
    * use `for_each` key to specify what you will iterate through like `for_each = var.an_iterable`
    * use `each` to reference a specific key in each item of iterable liek `each.value.private_subnets_per_vpc`
    * cannot use `count` and `for_each` in the same block
    * can use `for` similar to list comprehensions in python -> `{ for p in sort(keys(var.project)) : p => module.ec2_instances[p].instance_ids }`

```shell
# variables.tf
variable "project" {
  description = "Map of project names to configuration."
  type        = map(any)

  default = {
    client-webapp = {
      public_subnets_per_vpc  = 2,
      private_subnets_per_vpc = 2,
      instances_per_subnet    = 2,
      instance_type           = "t2.micro",
      environment             = "dev"
    },
    internal-webapp = {
      public_subnets_per_vpc  = 1,
      private_subnets_per_vpc = 1,
      instances_per_subnet    = 2,
      instance_type           = "t2.nano",
      environment             = "test"
    }
  }
}

# main.tf
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.2"

  for_each = var.project

  cidr = var.vpc_cidr_block

  azs             = data.aws_availability_zones.available.names
  private_subnets = slice(var.private_subnet_cidr_blocks, 0, each.value.private_subnets_per_vpc)
  public_subnets  = slice(var.public_subnet_cidr_blocks, 0, each.value.public_subnets_per_vpc)
##...
}

module "ec2_instances" {
  source     = "./modules/aws-instance"
  depends_on = [module.vpc]

  for_each = var.project

  instance_count     = each.value.instances_per_subnet * length(module.vpc[each.key].private_subnets)
  instance_type      = each.value.instance_type
  subnet_ids         = module.vpc[each.key].private_subnets[*]
  security_group_ids = [module.app_security_group[each.key].security_group_id]

  project_name = each.key
  environment  = each.value.environment
}

## outputs.tf
output "public_dns_names" {
  description = "Public DNS names of the load balancers for each project."
  value       = { for p in sort(keys(var.project)) : p => module.elb_http[p].elb_dns_name }
}

output "vpc_arns" {
  description = "ARNs of the vpcs for each project."
  value       = { for p in sort(keys(var.project)) : p => module.vpc[p].vpc_arn }
}

output "instance_ids" {
  description = "IDs of EC2 instances."
  value       = { for p in sort(keys(var.project)) : p => module.ec2_instances[p].instance_ids }
}
```


## Perform Dynamic Operations with Functions
* some built-in functions allow performing operations dynamically:
    * `templatefile` -> dynamically create an EC2 instance user data script
    * `lookup` -> reference values from a map
    * `file` -> read contents of a file
* `user_data.tftpl` - a template file is a text file with variable references that can be interpolated
    * reference syntax -> `${name}`

```shell
# template interpolation with templatefile function
resource "aws_instance" "web" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.subnet_public.id
  vpc_security_group_ids      = [aws_security_group.sg_8080.id]
  associate_public_ip_address = true
  user_data                   = templatefile("user_data.tftpl", { department = var.user_department, name = var.user_name })
}

# lookup function from a map
variable "aws_amis" {
  type = map
  default = {
    "us-east-1" = "ami-0739f8cdb239fe9ae"
    "us-west-2" = "ami-008b09448b998a562"
    "us-east-2" = "ami-0ebc8f6f580a04647"
  }
}

resource "aws_instance" "web" {
  ami                         = lookup(var.aws_amis, var.aws_region)
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.subnet_public.id
  vpc_security_group_ids      = [aws_security_group.sg_8080.id]
  associate_public_ip_address = true
  user_data                   = templatefile("user_data.tftpl", { department = var.user_department, name = var.user_name })
}

# file function to create ssh_key
resource "aws_security_group" "sg_22" {
  name = "sg_22"
  vpc_id = aws_vpc.vpc.id

  ingress {
    from_port = 22
    to_port  = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "ssh_key" {
  key_name = "ssh_key"
  public_key = file("ssh_key.pub")
}
```


## Create Dynamic Expressions
* **Expressions** - allow to compute or generate values for your infrastructure configuration to make it more dynamic
    * `conditional expressions` - select value based on expression evaluation to true or false
    * `splat expression` - `*` - captures all objects in a list that share an attribute -> `aws_instance.ubuntu[*].id`

```shell
# TERNARY CONDITION

resource "random_id" "id" {
  byte_length = 8
}

locals {
  name  = (var.name != "" ? var.name : random_id.id.hex)
  owner = var.team
  common_tags = {
    Owner = local.owner
    Name  = local.name
  }
}

resource "aws_vpc" "my_vpc" {
  cidr_block           = var.cidr_vpc
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags                 = local.common_tags
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.my_vpc.id
  tags   = local.common_tags
}

resource "aws_subnet" "subnet_public" {
  vpc_id     = aws_vpc.my_vpc.id
  cidr_block = var.cidr_subnet
  tags       = local.common_tags
}

resource "aws_route_table" "rtb_public" {
  vpc_id = aws_vpc.my_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
  tags = local.common_tags
}


# CONDITIONAL COUNT CRITERIA

variable "high_availability" {
  type        = bool
  description = "If this is a multiple instance deployment, choose `true` to deploy 3 instances"
  default     = true
}

resource "aws_instance" "ubuntu" {
  count                       = (var.high_availability == true ? 3 : 1)
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  associate_public_ip_address = (count.index == 0 ? true : false)
  subnet_id                   = aws_subnet.subnet_public.id
  tags                        = merge(local.common_tags)
}

# SPLAT EXPRESSION
resource "aws_elb" "learn" {
##...
  instances                   = aws_instance.ubuntu[*].id
  idle_timeout                = 400
  connection_draining         = true
  connection_draining_timeout = 400
  tags                        = local.common_tags
}
```


## Use Configuration to Move Resources
* **Modules** - limit scope of potential changes and abstract your resources, making your configuration easier to understand
* **Moved** - must let configuration know you are moving a resource - otherwise it will create and delete
    * moving resources from parent to child -> resource IDs will change
    * `moved` configuration block lets you plan / preview / validate resource moves enalbling safer refactor of configuration
* CAREFUL! removing a `moved` block plans to delete that existing resources instead of moving it

```shell
# MOVE RESOURCES

moved {
  from = module.security_group.aws_security_group.sg_8080
  to   = module.web_security_group.aws_security_group.this[0]
}

moved {
  from = module.security_group.aws_security_group_rule.ingress_rule
  to   = module.web_security_group.aws_security_group_rule.ingress_with_cidr_blocks[0]
}

moved {
  from = module.security_group.aws_security_group_rule.egress_rule
  to   = module.web_security_group.aws_security_group_rule.egress_with_cidr_blocks[0]
}

moved {
  from = aws_instance.example
  to = module.ec2_instance.aws_instance.example
}

# RENAME RESOURCES

moved {
  from = module.vpc
  to   = module.learn_vpc
}
```


## Validate Modules with Custom Conditions
* **Validate** - define `custom conditions` in module configuration to validate resources / data sources / outputs
* `lifecycle` - allows adding `preconditions` and `postconditions` to the lifecycle of a resource / data source / output
    * `precondition` -> evaluated before the block ensuring configuration is compliant before applying
    * `postcondition` -> evaluate after enclosing block -> letting you confirm that the results of applied changes are compliant before it applies the rest of configuration
* `self` -> refers to itself, like a the resource for which data is created

```shell
data "aws_ec2_instance_type" "app" {
  instance_type = var.aws_instance_type
}

# USE OF PRECONDITIONS

resource "aws_instance" "app" {
  count = var.aws_instance_count

  instance_type = var.aws_instance_type
  ami           = var.aws_ami_id

  subnet_id              = var.aws_private_subnet_ids[count.index % length(var.aws_private_subnet_ids)]
  vpc_security_group_ids = [module.app_security_group.security_group_id]

  lifecycle {
    precondition {
      condition     = var.aws_instance_count % length(var.aws_private_subnet_ids) == 0
      error_message = "The number of instances (${var.aws_instance_count}) must be evenly divisible by the number of private subnets (${length(var.aws_private_subnet_ids)})."
    }

    precondition {
      condition     = data.aws_ec2_instance_type.app.ebs_optimized_support != "unsupported"
      error_message = "The EC2 instance type (${var.aws_instance_type}) must support EBS optimization."      
    }
  }
}

# USE OF POSTCONDITIONS

data "aws_vpc" "app" {
  id = var.aws_vpc_id

  lifecycle {
    postcondition {
      condition     = self.enable_dns_support == true
      error_message = "The selected VPC must have DNS support enabled."      
    }
  }
}
```



&nbsp;
# Modules


## Modules Overview


## Use Registry Modules in Configuration


## Build and Use a Local Module


## Customize Modules with Object Attributes


## Share Modules in the Private Registry


## Add Public Providers and Modules to your Private Registry


## Refactor Monolithic Terraform Configuration


## Module Creation - Recommended Pattern


## Use Configuration to Move Resources


## Create and Use No-Code Modules


&nbsp;
# AWS Services


## Auto Scaling Groups


## Control Tower Account Factory


## Cloud Control Provider


## Upgrade RDS Major Version


## AssumeRole for Cross-Account Provisioning


## Configure Default Tags


## Create IAM Policies


## Deploy Serverless Applications


## ALB for Blue-Green & Canary Deployments


## Static Website with S3 & Cloudflare


## Manage AWS RDS Instances


## Provision an EKS Cluster


## Preview Environments with Terraform, GitHub Actions & Vercel


## Manage AWS DynamoDB Scale



&nbsp;
# Provision


## Provision Infrastructure with Cloud-Init


## Provision Infrastructure with Packer


## Set Up Terraform Cloud Run Task for HCP Packer


## Identify Compromised Images with Terraform Cloud


## Enforce Image Compliance with Terraform Cloud


## Standardize Machine Images Across Multiple Cloud Providers


&nbsp;
# State


## Import Terraform Configuration



## manage Resources in Terraform State


## Target Resources


## Troubleshoot Terraform


## Manage Resource Drift


## Manage Resource Lifecycle


## Version Remote State with the Terraform Cloud API


## Use Refresh-Only Mode to Sync Terraform State


## Develop Configuration with the Console


## Use Configuration to Move Resources


&nbsp;
# Tips & Tricks
* use `output` right and you can then use `curl` to interact with your setup infrastructure based on outputs available in the state

&nbsp;
# Tools

## AWS Provider Documentation
https://registry.terraform.io/providers/hashicorp/aws/latest/docs


