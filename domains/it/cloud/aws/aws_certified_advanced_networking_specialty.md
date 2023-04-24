# AWS Certified Database Specialty

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.


#### Table of contents
* [Introduction to AWS Networking](#introduction-to-aws-networking)
* [VPC Fundamentals](#vpc-fundamentals)
    * [VPC - Addressing (CIDR)](#vpc---addressing-(cidr))
    * [VPC - Route Tables](#vpc---route-tables)
    * [IP Addresses](#ip-addresses)
    * [ENI - Elastic Network Interface](#eni---elastic-network-interface)
    * [VPC - Firewall - Security Group](#vpc---firewall---security-group)
    * [VPC - Firewall - NACL](#vpc---firewall---nacl)
    * [VPC - Default](#vpc---default)
    * [NAT Gateway](#nat-gateway)
        * [NAT Gateway - High Availability](#nat-gateway---high-availability)
    * [NAT Instance](#nat-instance)
    * [Essentials](#essentials)
* [VPC - Additional Features](#vpc---additional-features)
    * [VPC - Extending Address Space](#vpc---extending-address-space)
    * [ENI - Advanced](#eni---advanced)
    * [Own IP](#own-ip)
    * [VPC - Traffic Monitoring](#vpc---traffic-monitoring)
    * [VPC - Traffic Mirroring](#vpc---traffic-mirroring)
* [VPC - DNS & DHCP](#vpc---dns-&-dhcp)
    * [VPC - DNS Server](#vpc---dns-server)
    * [EC2 - Public & Private DNS Names](#ec2---public-&-private-dns-names)
    * [EC2 - Customer Domain Name](#ec2---customer-domain-name)
    * [VPC - DHCP Option Sets](#vpc---dhcp-option-sets)
    * [Hybrid DNS Resolution](#hybrid-dns-resolution)
* [Network Performance & Optimization](#network-performance-&-optimization)
    * [Placement Groups & EBS Optimized EC2](#placement-groups-&-ebs-optimized-ec2)
    * [Enhanced Networking](#enhanced-networking)
    * [DPDK & Elastic Fabric Adapter (EFA)](#dpdk-&-elastic-fabric-adapter-(efa))
    * [Bandwidth Limits](#bandwidth-limits)
    * [Network I/O Credits](#network-i/o-credits)
    * [Network Performance Essentials](#network-performance-essentials)
* [VPC - Peering](#vpc---peering)
    * [VPC - Peering - Invalid Scenarios](#vpc---peering---invalid-scenarios)
* [VPC Endpoints](#vpc-endpoints)
    * [VPC Gateway Endpoints](#vpc-gateway-endpoints)
    * [VPC Endpoints & S3 Bucket Policy](#vpc-endpoints-&-s3-bucket-policy)
    * [VPC Gateway Endpoints - Access from Remote Network](#vpc-gateway-endpoints---access-from-remote-network)
* [VPC Interface Endpoint & PrivateLink](#vpc-interface-endpoint-&-privatelink)
    * [VPC Interface Endpoint - Features](#vpc-interface-endpoint---features)
    * [VPC Interface Endpoint - PrivateLink](#vpc-interface-endpoint---privatelink)
    * [VPC PrivateLink - Architecture](#vpc-privatelink---architecture)
    * [VPC Interface Endpoint - DNS](#vpc-interface-endpoint---dns)
    * [VPC Interface Endpoint - Remote Network](#vpc-interface-endpoint---remote-network)
    * [VPC PrivateLink vs VPC Peering](#vpc-privatelink-vs-vpc-peering)
    * [VPC PrivateLink - Exam Essentials](#vpc-privatelink---exam-essentials)
* [Transit Gateway (TGW)](#transit-gateway-(tgw))
    * [TGW - VPC Attachements & Routing](#tgw---vpc-attachements-&-routing)
    * [TGW - VPC Network Patterns](#tgw---vpc-network-patterns)
    * [TGW - AZ Considerations](#tgw---az-considerations)
    * [TGW - AZ Affinity & Appliance Mode](#tgw---az-affinity-&-appliance-mode)
    * [TGW - Peering](#tgw---peering)
    * [TGW - Connect Attachment](#tgw---connect-attachment)
    * [TGW - Direct Connect](#tgw---direct-connect)
    * [TGW - Multicast](#tgw---multicast)
    * [TGW - Centralized Outbound Internet using NAT](#tgw---centralized-outbound-internet-using-nat)
    * [TGW - Centralized IPS/IDS with GLB](#tgw---centralized-ips/ids-with-glb)
    * [TGW - Centralized VPC Interface Endpoints](#tgw---centralized-vpc-interface-endpoints)
    * [VPC Peering vs TGW](#vpc-peering-vs-tgw)
    * [TGW - Sharing](#tgw---sharing)
* [Hybrid Network Basics](#hybrid-network-basics)
    * [OSI Layers](#osi-layers)
    * [IPSec VPN](#ipsec-vpn)
    * [Static Routing vs Dynamic Routing](#static-routing-vs-dynamic-routing)
    * [BGP](#bgp)
        * [BGP - Route Selection](#bgp---route-selection)
* [AWS Site-to-Site VPN](#aws-site-to-site-vpn)
    * [VPN NAT Traversal (NAT-T)](#vpn-nat-traversal-(nat-t))
    * [VPN Route Propagation (Static vs Dynamic)](#vpn-route-propagation-(static-vs-dynamic))
    * [VPN Transitive Routing](#vpn-transitive-routing)
    * [VPN Tunnels - Active/Passive Mode](#vpn-tunnels---active/passive-mode)
    * [VPN Dead Peer Detection (DPD)](#vpn-dead-peer-detection-(dpd))
    * [VPN Monitoring](#vpn-monitoring)
    * [S2S VPN - Architecture](#s2s-vpn---architecture)
    * [VPN CloudHub](#vpn-cloudhub)
    * [EC2 Based VPN](#ec2-based-vpn)
    * [AWS Transit VPC](#aws-transit-vpc)
* [AWS Client VPN](#aws-client-vpn)
* [Direct Connect (DX)](#direct-connect-(dx))
    * [DX - Components](#dx---components)
    * [DX - Requirements](#dx---requirements)
    * [DX - Connection Types](#dx---connection-types)
    * [DX - Virtual Interfaces (VIFs)](#dx---virtual-interfaces-(vifs))
        * [VIF - Creation Parameters](#vif---creation-parameters)
        * [VIF - Public](#vif---public)
        * [VIF - Private](#vif---private)
    * [DX - Gateway](#dx---gateway)
    * [DX - TGW Integration](#dx---tgw-integration)
    * [DX - SiteLink](#dx---sitelink)
    * [DX - Routing Policies & BGP Communities](#dx---routing-policies-&-bgp-communities)
    * [Public VIF Routing Policies](#public-vif-routing-policies)
    * [Public VIF Routing Scenarios](#public-vif-routing-scenarios)
    * [Public VIF BGP Communities](#public-vif-bgp-communities)
    * [Private VIF Rouing Policies & BGP Communities](#private-vif-rouing-policies-&-bgp-communities)
    * [DX - Link Aggregation Group (LAG)](#dx---link-aggregation-group-(lag))
    * [DX - Connection Resiliency](#dx---connection-resiliency)
    * [DX - Failure Detection with BFD](#dx---failure-detection-with-bfd)
    * [DX - Security & Encryption](#dx---security-&-encryption)
    * [DX - MTU & Jumbo Frames](#dx---mtu-&-jumbo-frames)
    * [DX - Billing](#dx---billing)
    * [DX - Monitoring using CloudWatch](#dx---monitoring-using-cloudwatch)
    * [DX - TroubleShooting](#dx---troubleshooting)
    * [DX - Architecture](#dx---architecture)
    * [DX - Exam Essentials](#dx---exam-essentials)
* [CloudFront](#cloudfront)
    * [CloudFront - Origins](#cloudfront---origins)
        * [CloudFront - Origin Headers](#cloudfront---origin-headers)
        * [CloudFront - Origin Security](#cloudfront---origin-security)
    * [CloudFront - HTTPS](#cloudfront---https)
    * [CloudFront - E2E Encryption](#cloudfront---e2e-encryption)
    * [CloudFront - Geo Restrictions](#cloudfront---geo-restrictions)
    * [CloudFront - Functions & Lambda@Edge](#cloudfront---functions-&-lambda@edge)
    * [AWS Global Accelerator](#aws-global-accelerator)
* [ELB](#elb)
    * [CLB](#clb)
    * [ALB](#alb)
    * [NLB](#nlb)
    * [Connection Idle Timeout](#connection-idle-timeout)
    * [Request Routing Algorithm](#request-routing-algorithm)
    * [Sticky Session](#sticky-session)
    * [Cross-Zone Load Balancing](#cross-zone-load-balancing)
    * [ELB - SSL / TLS](#elb---ssl-/-tls)
    * [Connection Draining](#connection-draining)
    * [X-Forwarded Headers](#x-forwarded-headers)
    * [Proxy Protocol](#proxy-protocol)
    * [gRPC & ALB](#grpc-&-alb)
    * [Hybrid Connectivity](#hybrid-connectivity)
* [DNS](#dns)
* [Route 53](#route-53)
    * [Route 53 - Registering a Domain](#route-53---registering-a-domain)
    * [Route 53 - EC2 Setup](#route-53---ec2-setup)
    * [Route 53 - TTL](#route-53---ttl)
    * [Route 53 - CNAME vs Alias](#route-53---cname-vs-alias)
    * [Routing Policy - Simple](#routing-policy---simple)
    * [Routing Policy - Weighted](#routing-policy---weighted)
    * [Routing Policy - Latency](#routing-policy---latency)
    * [Route 53 - Health Checks](#route-53---health-checks)
    * [Routing Policy - Failover](#routing-policy---failover)
    * [Routing Policy - Geolocation](#routing-policy---geolocation)
    * [Routing Policy - Geoproximity](#routing-policy---geoproximity)
    * [Routing Policy - Traffic Flow & Geoproximity](#routing-policy---traffic-flow-&-geoproximity)
    * [Routing Policy - IP-based](#routing-policy---ip-based)
    * [Routing Policy - Multi Value](#routing-policy---multi-value)
    * [Route 53 - 3rd Party Domains](#route-53---3rd-party-domains)
    * [Route 53 - DNS Migration](#route-53---dns-migration)
    * [Route 53 - Common Records](#route-53---common-records)
    * [Route 53 - Subdomain Zones](#route-53---subdomain-zones)
    * [Route 53 - DNSSEC](#route-53---dnssec)
    * [Route 53 - Resolvers & Hybrid DNS](#route-53---resolvers-&-hybrid-dns)
    * [Route 53 - Logging](#route-53---logging)
    * [Route 53 - DNS Firewall](#route-53---dns-firewall)
    * [Route 53 - Architectures](#route-53---architectures)
* [AWS Network Security Services](#aws-network-security-services)
    * [SG & NACL](#sg-&-nacl)
    * [WAF](#waf)
    * [WAF - XSS Prevention](#waf---xss-prevention)
    * [Network Firewall](#network-firewall)
        * [Network Firewall - VPC & Route Tables](#network-firewall---vpc-&-route-tables)
        * [Network Firewall - Components & Rule Groups](#network-firewall---components-&-rule-groups)
* [GLB](#glb)
    * [GLB - Traffic Flow](#glb---traffic-flow)
    * [GLB - Essentials](#glb---essentials)
* [EKS Networking](#eks-networking)
    * [Containers, Microservices & Kubernetes](#containers,-microservices-&-kubernetes)
    * [K8 - Architecture](#k8---architecture)
    * [EKS - Architecture](#eks---architecture)
    * [EKS - Cluster Networking](#eks---cluster-networking)
    * [EKS - Pod Networking](#eks---pod-networking)
    * [EKS - SG - Node & Pod Level](#eks---sg---node-&-pod-level)
    * [Exposing Services - ClusterIP, NodePort, LB & Ingress](#exposing-Services---clusterIP,-nodeport,-lb-&-ingress)
    * [EKS - Custom Networking - Extending IPv4](#eks---custom-networking---extending-ipv4)
    * [EKS - Summary](#eks---summary)
* [Management & Governance](#management-&-governance)
    * [AWS CloudFormation](#aws-cloudformation)
    * [AWS Service Catalog](#aws-service-catalog)
    * [AWS Config](#aws-config)
    * [AWS CloudTrail](#aws-cloudtrail)
* [Additional Topics](#additional-topics)
    * [AWS Private NAT Gateway](#aws-private-nat-gateway)
    * [AWS Network Architecutre for Workspaces & AppStream 2.0](#aws-network-architecutre-for-workspaces-&-appstream-2.0)
    * [AWS WaveLength](#aws-wavelength)
    * [AWS Local Zones](#aws-local-zones)




&nbsp;
# Introduction to AWS Networking


&nbsp;
# VPC Fundamentals


## VPC - Addressing (CIDR)


## VPC - Route Tables


## IP Addresses


## ENI - Elastic Network Interface


## VPC - Firewall - Security Group


## VPC - Firewall - NACL


## VPC - Default


## NAT Gateway


### NAT Gateway - High Availability


## NAT Instance


## Essentials


&nbsp;
# VPC - Additional Features


## VPC - Extending Address Space


## ENI - Advanced


## Own IP


## VPC - Traffic Monitoring


## VPC - Traffic Mirroring


&nbsp;
# VPC - DNS & DHCP


## VPC - DNS Server


## EC2 - Public & Private DNS Names


## EC2 - Customer Domain Name


## VPC - DHCP Option Sets


## Hybrid DNS Resolution


&nbsp;
# Network Performance & Optimization
* **Bandwidth** - 
* **Latency** - 
* **Jitter** - 
* **Throughput** -
* **PPS** - 
* **MTU** -

## Placement Groups & EBS Optimized EC2


## Enhanced Networking


## DPDK & Elastic Fabric Adapter (EFA)


## Bandwidth Limits


## Network I/O Credits


## Network Performance Essentials



&nbsp;
# VPC - Peering
* **VPC Private Connectivity Options**
    * 

## VPC - Peering - Invalid Scenarios



&nbsp;
# VPC Endpoints


## VPC Gateway Endpoints


## VPC Endpoints & S3 Bucket Policy


## VPC Gateway Endpoints - Access from Remote Network



&nbsp;
# VPC Interface Endpoint & PrivateLink


## VPC Interface Endpoint - Features


## VPC Interface Endpoint - PrivateLink


## VPC PrivateLink - Architecture


## VPC Interface Endpoint - DNS


## VPC Interface Endpoint - Remote Network


## VPC PrivateLink vs VPC Peering


## VPC PrivateLink - Exam Essentials



&nbsp;
# Transit Gateway (TGW)


## TGW - VPC Attachements & Routing


## TGW - VPC Network Patterns


## TGW - AZ Considerations


## TGW - AZ Affinity & Appliance Mode


## TGW - Peering


## TGW - Connect Attachment


## TGW - Direct Connect


## TGW - Multicast


## TGW - Centralized Outbound Internet using NAT


## TGW - Centralized IPS/IDS with GLB


## TGW - Centralized VPC Interface Endpoints


## VPC Peering vs TGW


## TGW - Sharing



&nbsp;
# Hybrid Network Basics


## OSI Layers


## IPSec VPN


## Static Routing vs Dynamic Routing


## BGP


### BGP - Route Selection



&nbsp;
# AWS Site-to-Site VPN


## VPN NAT Traversal (NAT-T)


## VPN Route Propagation (Static vs Dynamic)


## VPN Transitive Routing


## VPN Tunnels - Active/Passive Mode


## VPN Dead Peer Detection (DPD)


## VPN Monitoring


## S2S VPN - Architecture


## VPN CloudHub


## EC2 Based VPN


## AWS Transit VPC



&nbsp;
# AWS Client VPN


&nbsp;
# Direct Connect (DX)


## DX - Components


## DX - Requirements


## DX - Connection Types


## DX - Virtual Interfaces (VIFs)


### VIF - Creation Parameters


### VIF - Public


### VIF - Private


## DX - Gateway


## DX - TGW Integration


## DX - SiteLink


## DX - Routing Policies & BGP Communities


## Public VIF Routing Policies


## Public VIF Routing Scenarios


## Public VIF BGP Communities


## Private VIF Rouing Policies & BGP Communities


## DX - Link Aggregation Group (LAG)


## DX - Connection Resiliency


## DX - Failure Detection with BFD


## DX - Security & Encryption


## DX - MTU & Jumbo Frames


## DX - Billing


## DX - Monitoring using CloudWatch


## DX - TroubleShooting


## DX - Architecture


## DX - Exam Essentials



&nbsp;
# CloudFront


## CloudFront - Origins


### CloudFront - Origin Headers


### CloudFront - Origin Security


## CloudFront - HTTPS


## CloudFront - E2E Encryption


## CloudFront - Geo Restrictions


## CloudFront - Functions & Lambda@Edge


## AWS Global Accelerator


&nbsp;
# ELB


## CLB


## ALB


## NLB


## Connection Idle Timeout


## Request Routing Algorithm


## Sticky Session


## Cross-Zone Load Balancing


## ELB - SSL / TLS


## Connection Draining


## X-Forwarded Headers


## Proxy Protocol


## gRPC & ALB


## Hybrid Connectivity


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
    * a global service
* **Records** - define how you want to route traffic for a domain
    * each record contains:
        * *Domain/subdomain Name* - the domain or subdomain the rule is applied to
        * *Record Type* - a key that represents a parameter of the DNS 
            * `A` (must know) - maps a hostname to IPv4
            * `AAAA` (must know) - maps a hostname to IPv6
            * `CNAME` (must know) - maps a hostname to another hostname
                * target domain name must have an A or AAAA record
                * cant create CNAME for top node(root domain) of a DNS namespace like `example.com` (Zone Apex = root domain = top node)
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
            * **Alias** - like CNAME allows a hostname to point to another hostname but comes with additional features
        * **Value** - the value in the record
        * **Routing Policy** - how Route 53 responds to DNS queries
            * DNS routing does not route traffic, just responds to queries
        * **TTL** - amount of time record is cached
* **Hosted Zones** - a container for records that define how to route traffic to domain/subdomains
    * **Public Hosted Zones** - contain records that specify how to route internet traffic (public domain names)
    * **Private Hosted Zones** - contain records the specify routing for traffic within VPC/s (private domain names)
    * cost in AWS is $0.50 per month per hosted zone


## Route 53 - Registering a Domain


## Route 53 - EC2 Setup


## Route 53 - TTL
* **Record TTL** - amount of time record is cached
    * if a DNS request is made the client caches this request for the amount of time specified in the TTL
    * high TTL -> less traffic on Route 53, but possibly outdated records
    * low TTL -> high traffic on Route 53, but less possible to get outdated records
    * mandatory for all records, but Alias


## Route 53 - CNAME vs Alias
* **Alias** - like CNAME allows a hostname to point to another hostname but:
    * works for root domain and non root domain
    * free of charge
    * native health check
    * maps hostname to AWS resource
    * extension to DNS functionality
    * automatically recognizes changes in the resources IP address
    * always record of type A or AAAA
    * use cases: ELB, CLoudFront Distributions, API Gateway, Elastic Beanstalk envs, S3 Websites, VPC Interface Endpoints, Global Accelerator accelerator, Route 53 in record in the same hosted zone
    * CANNOT set ALIAS record for an EC2 DNS name


## Routing Policy - Simple
* **Simple Routing Policy** - no HC, route traffic to single resource
    * can specify multiple values in single record -> a random one is chosen by client
    * specify only one AWS resource in Alias

## Routing Policy - Weighted
* **Weighted Routing Policy** - assign weights to host servers which determine the % of routed traffic that is redirected to each one. Allows health checks. Similiar to a load balancer
    * traffic (%) = [weight for record] / [sum of all the weights for all records]
    * weights dont need to sum up to 100
    * records must have same name and type
    * use cases: load balancing across regions, testing new application versions
    * assign weight of 0 to a record to stop sending traffic to a resource


## Routing Policy - Latency
* **Latency Routing Policy** - routes traffic to the server with lowest latency
    * latency is based on traffic between users and AWS Regions
    * can be associated with HC (failover capability)
    * create multiple records where an IP is mapped to a region


## Route 53 - Health Checks
* **Health Checks** - Route 53 healthchecks are only available for *public resources*. This provides automated DNS failover. 
    * 3 types:
        * monitor an **endpoint** (app, server, other AWS resource)
            * 15 global health checkers check endpoint health
            * healthy/unhealthy `threshold` -> default = 3
            * `interval` 30 sec (can set lower like 10s but higher cost)
            * support HTTP, HTTPS, TCP
            * if > 18% checkers report Healthy, then Route 53 considers it healthy
            * can choose locations Route 53 uses for HC
            * HC only pass if responds with 2xx and 3xx status codes
            * HC can be setup to fail based on text in first 5120 bytes of response
            * must configure router/firewall to allow incoming requests from Route 53 Health Checkers
        * monitor other health checks (**calculated health checks)**
            * combine result of multiple HC into a single HC
            * allows OR, AND, NOT
            * can monitor up to 256 child HC
            * specify how many child HC need to pass for parent to pass
            * usage: perform maintenance to website without causing all health check to fail
        * monitor **CloudWatch Alarms** -> eg. throttles of DynamoDB, alarms on RDS, custom metrics (good for private resources)
            * Route 53 is outside of VPC so cant access private endpoints
            * can create CW metric, associate with CW Alarm, create HC for that alarm
    * HC are integrated with CW metrics


## Routing Policy - Failover
* **Failover Routing Policy** - configure a primary and failover host, in case of failed HC on primary DNS record points to the failover


## Routing Policy - Geolocation
* **Geolocation Routing Policy** - routing based on user location
    * can specify locaiton by Continent, Country, US State
    * in case of overlapping most precise location is selected
    * should create **Default** record in case of no matching location
    * use cases: website localization, restrict content distribution, load balancing,...
    * can be associated with HC


## Routing Policy - Geoproximity
* **Geoproximity Routing Policy** - route traffic to resources based on geographic location of users and resources
    * shift more traffic to resources based on defined bias
    * to change size of geographic region, specify bias values
        * to expand (1 to 99) - more traffic to resource
        * to shrink (-1 to -99) - less traffic to resource
    * resources can be:
        * AWS resources
        * Non-AWS resources (specify Latitude and Longitude)
    * must use **Route 53 Traffic Flow** to use this feature
    * useful to shift traffic from one region to another based on defined bias


## Routing Policy - Traffic Flow & Geoproximity
* **Route 53 Traffic Flow**
    * visual editor to manage complex routing decision trees
    * simplify creating and maintaining records in large complex configurations
    * configurations can be saved as *Traffic Flow Policy*
        * can be applied to different Hosted Zones
        * supports versioning


## Routing Policy - IP-based
* **IP-based Routing Policy** - route traffic based on clients IP addresses
    * you provide a list of CIDRs for your clients
    * map CIDR to endpoints/locations (user-IP-to-endpoint mappings)
    * use cases: optimize performance, reduce network costs
    * example: route end users from a particular ISP to a specific endpoint


## Routing Policy - Multi Value
* **Multi-Value Routing Policy** - use to route traffic to multiple resources
    * Route 53 will return multiple values/resources and one will be chosen
    * can be associated with HC (only return values for healthy resources)
    * up to 8 healthy records for each Multi-Value query
    * not a substitute for ELB


## Route 53 - 3rd Party Domains
* **3rd Party Domains** -  you can use Route 53 as DNS Service for domains hosted by a different registrat then AWS Registrar
    * setting up a Public Hosted Zone you get a collection of name servers associated -> change the nameservers of the 3rd party Domain to these to start using the domain in Route 53
    * Domain Registrar != DNS Service


## Route 53 - DNS Migration


## Route 53 - Common Records


## Route 53 - Subdomain Zones


## Route 53 - DNSSEC


## Route 53 - Resolvers & Hybrid DNS


## Route 53 - Logging


## Route 53 - DNS Firewall


## Route 53 - Architectures



&nbsp;
# AWS Network Security Services


## SG & NACL


## WAF


## WAF - XSS Prevention


## Network Firewall


### Network Firewall - VPC & Route Tables


### Network Firewall - Components & Rule Groups



&nbsp;
# GLB


## GLB - Traffic Flow


## GLB - Essentials



&nbsp;
# EKS Networking


## Containers, Microservices & Kubernetes


## K8 - Architecture


## EKS - Architecture


## EKS - Cluster Networking


## EKS - Pod Networking


## EKS - SG - Node & Pod Level


## Exposing Services - ClusterIP, NodePort, LB & Ingress


## EKS - Custom Networking - Extending IPv4


## EKS - Summary



&nbsp;
# Management & Governance


## AWS CloudFormation


## AWS Service Catalog


## AWS Config


## AWS CloudTrail



&nbsp;
# Additional Topics


## AWS Private NAT Gateway


## AWS Network Architecutre for Workspaces & AppStream 2.0


## AWS WaveLength


## AWS Local Zones