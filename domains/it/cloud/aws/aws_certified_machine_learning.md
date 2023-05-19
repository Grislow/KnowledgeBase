# AWS Certified Machine Learning Specialist

Amazon Web Services(AWS) is a leading cloud provider, meaning they provide you with services and servers that can scale easily and on demand.

## Source
* udemy
* https://explore.skillbuilder.aws/learn
* https://www.whizlabs.com/aws-certified-machine-learning-specialty/
* https://www.youtube.com/watch?v=uQc8Itd4UTs&list=PLhr1KZpdzukcOr_6j_zmSrvYnLUtgqsZz&ab_channel=AmazonWebServices


#### Table of contents

* [Data Engineering](#data-engineering)
    * [S3](#s3)
        * [S3 - Storage Classes](#s3---storage-classes)
        * [S3 - Lifecycle Rules](#s3---lifecycle-rules)
        * [S3 - Security](#s3---security)
    * [Kinesis](#kinesis)
        * [Kinesis - Data Streams](#kinesis---data-Streams)
        * [Kinesis - Data Firehose](#kinesis---data-firehose)
        * [Kinesis - Data Analytics](#kinesis---data-analytics)
        * [Kinesis - Video Streams](#kinesis---video-streams)
        * [Kinesis - ML](#kinesis---ml)
    * [Glue](#Glue)
        * [Glue - Data Catalog](#glue---data-catalog)
        * [Glue - ETL](#glue---etl)
    * [Athena](#athena)
    * [AWS Data Stores in ML](#aws-data-stores-in-ml)
    * [AWS Data Pipelines](#aws-data-pipelines)
    * [AWS Batch](#aws-batch)
    * [DMS](#dms)
    * [Step Functions](#step-functions)
    * [Full Data Engineering Pipelines](#full-data-engineering-pipelines)
    * [AWS DataSync & MQTT](#aws-dataSync-&-mqtt)
* [Exploratory Data Analysis](#exploratory-data-analysis)
    * [Python in Data Science and Machine Learning](#python-in-data-science-and-machine-learning)
    * [Types of Data](#types-of-data)
    * [Data Distributions](#data-distributions)
    * [Time Series: Trends and Seasonality](#time-series:-trends-and-seasonality)
    * [Amazon Athena](#amazon-athena)
    * [Amazon Quicksight](#amazon-quicksight)
    * [Types of Viusalizations](#types-of-viusalizations)
    * [EMR - Hadoop](#emr---hadoop)
    * [EMR - Apache Spark](#emr---apache-spark)
    * [EMR - Notebooks, Security & Instance Types](#emr---notebooks,-security-&-instance-types)
    * [Feature Engineering & Dimensionality](#feature-engineering-&-dimensionality)
    * [Imputing Missing Data](#imputing-missing-data)
    * [Dealing with Unbalanced Data](#dealing-with-unbalanced-data)
    * [Handling Outliers](#handling-outliers)
    * [Binning, Transforming, Encoding, Scaling & Shuffling](#binning,-transforming,-encoding,-scaling-&-shuffling)
    * [SageMaker - Ground Truth & Label Generation](#sagemaker---ground-truth-&-label-generation)
    * [Preparing Data for TF-IDF with Spark and EMR](#preparing-data-for-tf-idf-with-spark-and-emr)
* [Modeling - General Deep Learning and Machine Learning](#modeling---general-deep-learning-and-machine-learning)
    * [Introduction to Deep Learning](#introduction-to-deep-learning)
    * [Activation Functions](#activation-functions)
    * [Convolutional Neural Networks](#convolutional-neural-networks)
    * [Recurrent Neural Networks](#recurrent-neural-networks)
    * [Modern NLP with BERT & GPT & Transfer Learning](#modern-nlp-with-bert-&-gpt-&-transfer-learning)
    * [Deep Learning on EC2 and EMR](#deep-learning-on-ec2-and-emr)
    * [Tuning Neural Networks](#tuning-neural-networks)
    * [Regularization - Dropout & Early Stopping](#regularization---dropout-&-early-stopping)
    * [Regularization - L1 & L2](#regularization---l1-&-l2)
    * [Grief with Gradients: The Vanishing Gradient Problem](#grief-with-gradients:-the-vanishing-gradient-problem)
    * [The Confusion Matrix](#the-confusion-matrix)
    * [Precision, Recall, F1, AUC](#precision,-recall,-f1,-auc)
    * [Ensemble Methods: Bagging & Boosting](#ensemble-methods:-bagging-&-boosting)
* [Modeling - Amazon SageMaker](#modeling---amazon-sagemaker)
    * [SageMaker - Introduction](#sagemaker---introduction)
    * [SageMaker - Linear Learner](#sagemaker---linear-learner)
    * [SageMaker - XGBoost](#sagemaker---xgboost)
    * [SageMaker - Seq2Seq](#sagemaker---seq2seq)
    * [SageMaker - DeepAR](#sagemaker---deepar)
    * [SageMaker - BlazingText](#sagemaker---blazingtext)
    * [SageMaker - Object2Vec](#sagemaker---object2vec)
    * [SageMaker - Object Deletion](#sagemaker---object-deletion)
    * [SageMaker - Image Classification](#sagemaker---image-classification)
    * [SageMaker - Semantic Segmentation](#sagemaker---semantic-segmentation)
    * [SageMaker - Random Cut Forest](#sagemaker---random-cut-forest)
    * [SageMaker - Neural Topic Model](#sagemaker---neural-topic-model)
    * [SageMaker - Latent Dirichlet Allocation (LDA)](#sagemaker---latent-dirichlet-allocation-(lda))
    * [SageMaker - K-Nearest-Neighbors (KNN)](#sagemaker---k-nearest-neighbors-(knn))
    * [SageMaker - K-Means Clustering](#sagemaker---k-means-clustering)
    * [SageMaker - Principal Component Analysis](#sagemaker---principal-component-analysis)
    * [SageMaker - Factorization Machines](#sagemaker---factorization-machines)
    * [SageMaker - IP Insights](#sagemaker---ip-insights)
    * [SageMaker - Reinforcement Learning](#sagemaker---reinforcement-learning)
    * [Automatic Model Tuning](#automatic-model-tuning)
    * [SageMaker - Apache Spark](#sagemaker---apache-spark)
    * [SageMaker - Studio & Experiments](#sagemaker---studio-&-experiments)
    * [SageMaker - Debugger](#sagemaker---debugger)
    * [SageMaker - Autopilot & AutoML](#sagemaker---autopilot-&-automl)
    * [SageMaker - Model Monitor](#sagemaker---model-monitor)
    * [Deployment Guardrails & Shadow Tests](#deployment-guardrails-&-shadow-tests)
    * [JumpStart, Data Wrangler, Features Store & Edge Manager](#jumpstart,-data-wrangler,-features-store-&-edge-manager)
    * [SageMaker - Canvas](#sagemaker---canvas)
    * [SageMaker - Bias Measures in Canvas](#sagemaker---bias-measures-in-canvas)
    * [SageMaker - Training Compiler](#sagemaker---training-compiler)
* [Modeling - High-Level ML Services](#modeling---high-level-ml-services)
    * [Amazon Comprehend](#amazon-comprehend)
    * [Amazon Translate](#amazon-translate)
    * [Amazon Transcribe](#amazon-transcribe)
    * [Amazon Polly](#amazon-polly)
    * [Amazon Rekognition](#amazon-rekognition)
    * [Amazon Forecast](#amazon-forecast)
    * [Amazon Forecast Algorithms](#amazon-forecast-algorithms)
    * [Amazon Lex](#amazon-lex)
    * [Amazon Personalize](#amazon-personalize)
    * [Textract, DeepLens, DeepRacher, Lookout & Monitron](#textract,-deeplens,-deepRacher,-lookout-&-monitron)
    * [TorchServe, AWS Neuron & AWS Panorama](#torchServe,-aws-neuron-&-aws-panorama)
    * [Deep Composer, Fraud Detection, CodeGuru & Contact Lens](#deep-composer,-fraud-detection,-codeguru-&-contact-lens)
    * [Amazon Kendra & Amazon Augmented AI (A2I)](#amazon-kendra-&-amazon-augmented-ai-(a2i))
* [Tuning a Convolutional Neural Network on EC2](#tuning-a-convolutional-neural-network-on-ec2)
* [ML Implementation and Operations](#ml-implementation-and-operations)
    * [SageMaker - Inner Details and Production Variants](#sagemaker---inner-details-and-production-variants)
    * [SageMaker - Edge: SageMaker Neo and IoT Greengrass](#sagemaker---edge:-sagemaker-neo-and-iot-greengrass)
    * [SageMaker - Security: Encryption at Rest & In Transit](#sagemaker---security:-encryption-at-rest-&-in-transit)
    * [SageMaker - Security: VPC, IAM, Logging, Monitoring](#sagemaker---security:-vpc,-iam,-logging,-monitoring)
    * [SageMaker - Resource Management: Instance Types & Spot Training](#sagemaker---resource-management:-instance-types-&-spot-training)
    * [SageMaker - Resource Management: Elastic Interference, Automatic Scaling & AZs](#sagemaker---resource-management:-elastic-interference,-automatic-scaling-&-azs)
    * [SageMaker - Serverless Inference & Inference Recommender](#sagemaker---serverless-inference-&-inference-recommender)
    * [SageMaker - Inference Pipelines](#sagemaker---inference-pipelines)
    * [MLOPs with SageMaker, Kubernetes, SageMaker Projects & SageMaker Pipelines](#mlops-with-sagemaker,-kubernetes,-sagemaker-projects-&-sagemaker-pipelines)
    * [Lab - Tuning, Deploying & Predicting with Tensorflow on SageMaker](#lab---tuning,-deploying-&-predicting-with-tensorflow-on-sagemaker)


&nbsp;
# Data Engineering


## S3
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
        * **max size** 5TB
        * **metadata** - list of text key/value pairs, system/user metadata
        * **tags** - up to 10 unicode key/value pair, good for security/lifecycle
        * **version id** - if versioning enabled
        * if uploading more than 5GB, must use `multi-part upload`
        * a public url gives access to the S3 object, a pre-signed public url contains auth information on the user which is trying to view the object
    * buckets defined at region level
    * naming convention: no uppercase, no underscore, 3-62 chars, not an ip, starts with lowercase letter/number, no prefix xn--, no suffix -s3alias
* **S3 - Machine Learning**
    * backbone for many AWS ML services
    * benefits of S3 for ML:
        * **Data Lake**
            * inifinite size
            * no provisioning
            * 99.999999999% durability
            * decoupling of storage from compute -> `EC2`, `Athena`, `Redshift Spectrum`, `Rekognition`, `Glue`
        * **Centralized Archtiecture** - all data in one place
        * **Object Storage** - supports any file format
            * popular ML formats: CSV, JSON, Parquet, ORC, Avro, Protofbuf
    * **Data Partitioning**
        * pattern for speeding up range queries (ex. AWS Athena)
        * example: 
            * `By Date` -> `s3://bucket/my-data-set/year/month/day/hour/data_00.csv`
            * `By Product` -> `s3://bucket/my-data-set/product-id/data_32.csv`
        * can define whatever partitioning strategy you like
        * some tools perform data partitioning for us (eg. AWS Glue)


### S3 - Storage Classes
* **Durability** - how often objects can be lost
    * S3 is highly durable - 99.999999999% across multiple AZs
    * example: store 10,000,000, incur loss of 1 object once every 10000 years
    * `same` for all storage classes
* **Availability** - how readily available a service is
    * S3 standard is 99.99% available, which means its not available 53 minutes a year
    * `varies` depending on storage class
* object storage classes can be changed: 
    * manually or through *S3 Lifecycle configurations*
* **Storage Classes**
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
    * **Amazon S3 Glacier** - low-cost object storage meant for `archiving` / backup, price for storage + object retrieval
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


### S3 - Lifecycle Rules
* **Lifecycle Rules** - allow setting rules for automatic transitioning S3 objects between storage classes
    * infrequently access -> Standard IA
    * dont need fast access -> Glacier / Glacier Deep Archive
    * **Actions**:
        * **Transition Actions** - rules to transition object to different storage class
            * use cases: old objects
        * **Expiration Actions** - rules to expire(delete) objects after some time
            * use cases: old versions of files, incomplete Multi-Part upload, log files
    * rules can target `prefix`, `tags`, `versions`
* **S3 Analytics** - tool to help decide when to transition objects to the right storage class
    * does not work for One-Zone IA or Glacier
    * recommended for *Standard* and *Standard IA*
    * generates a report that is updated daily
    * takes 24-48h to see data analysis
    * good first step to create or improve Lifecycle Rules


### S3 - Security
* **Encryption** - encrypt object using encryption keys. Different types of encryption available:
    * **Server Side Encryption (SSE)** - the server storing the object encrypts it after receiving it (encryption at rest)
        * three flavors:
            * use keys handled, owned and managed by AWS (Amazon S3-Managed Keys (**SSE-S3**))
                * encryption type AES-256
                * must set header **"x-amz-server-side-encryption": "AES256"**
                * enabled by default for new buckets & new objects
                * object available if public
            * KMS Keys stored in AWS KMS (**SSE-KMS**) - AWS Key Management Service
                * user control over key
                * audit key usage using CloudTrail
                * object - even if made public - CAN NEVER BE READ BY ANONYMOUS USERS
                * on `s3:PutObject` make the permission `kms:GenerateDataKey` allowed
                * must set header **"x-amz-server-side-encryption": "aws:kms"**
                * KMS limitations: 
                    * on upload it calls `GenerateDataKey` KMS API
                    * on download it calls `Decrypt` KMS API
                    * each call counts towards KMS quota per second (5500, 10000, 30000 req/s based on region)
            * use Customer-Provided Keys (**SSE-C**) to use own keys
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
    * you can force encryption using
        * `bucket policy` -> refuse API call PUT on S3 object without encryption headers(`SSE-KMS` or `SSE-C`)
        * `default encryption` -> setting that will cause all new objects to be encrypted with selected method in bucket properties
    * **Glacier** - all data is AES-256 encrypted, key under AWS control
* **Access**
    * **User-Based** - IAM Policies
        * an IAM principal can access S3 object if:
            * user IAM perm ALLOW it OR resource policy ALLOWS it
            * AND there's no explicit DENY
    * **Resource Based**
        * **Bucket Policies** - bucket wide rules from the S3 console - allows cross account access
            * used for:
                * grant public access
                * force object encryption on upload
                * grant cross account access
            * JSON document
                * `Resource` -> buckets and objects
                * `Action` -> allow or deny
                * `Actions` -> set of api to allow or deny
                * `Principal` -> the account or user to apply the policy to
        * **Object Access Control List (ACL)** - finer grain (can be disabled)
        * **Bucket Access Control List (ACL)** - less common (can be disabled)
    * IAM policies take precedence over S3 bucket policies
* **Networking**
    * use `VPC Endpoint Gateway` to ensure traffic remains within VPC
    * enables private services like `AWS SageMaker` to access `S3`
    * very important for AWS ML Exam
* **Logging & Audit**
    * S3 access logs stored in another S3 bucket
    * api calls logged in AWS CloudTrail
* **Tag Based Security**
    * use object tags combined with IAM policies and bucket policies to classify data (like PHI or PII)


## Kinesis
* **AWS Kinesis** - managed service to collect, process, and analyze real-time streaming data at any scale
    * used mostly for big data - like Kafka
    * ingest real time data such as:
        * app logs
        * metrics
        * website clickstreams
        * IoT telemetry data
    * no free tier
    * service suite that forms AWS Kinesis includes:
        * `Kinesis Data Streams` - low latency streaming service for ingesting data at scale
            * write custom code (producer / consumer)
            * real time (~200ms)
            * manage scaling (shard splitting / merging)
            * data storage for 1-365 days
            * supports replay capability
        * `Kinesis Data Firehose` - load streaming data into destinations
            * fully managed
            * near real-time (buffer time min. 60 sec)
            * automatic scaling
            * no data storage
            * doesnt support replay
        * `Kinesis Data Analytics` - perform real-time analytics on streams using SQL
        * `Kinesis Video Streams` - monitor real-time video streams for analytics or ML
    * Data Source -> `Streams` > `Analytics` > `Firehose`


### Kinesis - Data Streams
* **Kinesis Data Streams** - low latency streaming to ingest data at scale from 100000s sources
    * properties:
        * retention 1d - 365d
        * ability to reprocess data (replay)
        * multiple apps can consume same stream
        * inserted data cannot be deleted (immutability)
        * data that shares same partition goes to the same shard (ordering)
        * records up to `1MB` in size
    * streams are divided into **Shards** / **Partitions**
    * **Shards** - numbered collections of data that make up a Data Stream
        * ingested data is distributed over available shards
        * need to be provisioned ahead of time
        * define stream capacity in iterm of `ingestion` and `consumption rates`
    * **Capacity Modes**
        * **Provisioned mode**
            * choose number of shards provisioned
            * scale manually or using API
            * each shard -> 1 MB/s in (or 1000 records / s)
            * each shard -> 2 MB/s out (classic or enhanced fan-out consumer)
            * pay per shard provisioned per hour
        * **On-demand mode**
            * no provisioning or managing capacity
            * default capacity: 4 MB/s or 4000 records per second
            * scales automatically based on observed throughput peak during last 30 days
            * pay per stream per hour & data in/out per GB
* **Limits**
    * **Producer**
        * `1 MB / s` or `1 000 messages / s` at write PER SHARD
        * `ProvisionedThroughputException` otherwise
    * **Consumer Classic**
        * `2 MB / s` at read PER SHARD across all consumers
        * `5 API calls / s` PER SHARD across all consumers
    * **Data Retention**
        * 24 h data retention by default
        * can extend to 365 days


### Kinesis - Data Firehose
* **Kinesis Data Firehose** - load streams into S3, Redshift, ElasticSearch, etc.
    * features:
        * KDF requires no code to write / propagate data
        * fully managed service, no administration, `automatic scaling`, serverless
        * pay for amount of data going through Firehose
        * **Near Real Time** - `60s latency minimum` for non full batches, or `minimum 1 MB` of data at a time
        * can optionally perform custom transformations on the data using Lambda function
        * supportts many data formats
        * `data conversions` from `CSV / JSON` to `Parquet / ORC` (only for S3)
        * `data transformation` through AWS Lambda
        * supports compression when target is S3 (GZIP, ZIP & SNAPPY)
    * **Producers** - push records into Kinesis Data Firehose
        * can be:
            * **Direct PUT**
                * `Apps`, `Clients`, 
                * `SDK` - simple producer
                * `KPL(Kinesis Producer Library)` - C++, JAva, batch, compression, retries
                * `Kinesis Agent` - monitor log files and stream into KDS
                * `Amazon CloudWatch`
                * `AWS IoT`
            * `Kinesis Data Streams`
        * a record can be up to 1 MB large
    * **Destinations** - targets to which data is loaded from KDF with batch writes
        * can be:
            * `Amazon S3`
            * `Amazon Redshift` - copy through S3
            * `Amazon OpenSearch`
            * `3rd party Parner Destinations` - splunk, Datadog, New Relic, mongoDB
            * `Custom Destinations` - can implement HTTP endpoint to push data to
        * failed or all data can be pushed to an `S3 backup bucket`
        * creates batch of writes before writing -> why its NEAR-real time
    * **Buffer** - allows accumulating data before sending it to destination
        * `size`: 1 MiB - 128 MiB
            * lower -> faster, higher cost, less latency
            * higher -> lower cost, higher latency
        * `interval`: 60s - 900s
            * lower -> smaller data size, shorter cycles
            * higher -> larger data, more time to collect data


### Kinesis - Data Analytics
* **Kinesis Data Analytics** - perform real-time analytics on streams using SQL
    * use cases:
        * `Streaming ETL` -> select columns, make simple transformations on streaming data
        * `Continuous metric generation` -> live leaderboard for a mobile game
        * `Responsive analytics` -> look for specific criteria and build alerting (filtering)
    * features:
        * pay only for consumed resources (but expensive)
        * serverless / scales automatically
        * IAM permission for access to streaming source / destination(s)
        * SQL or Flink to write computation
        * schema discovery
        * lambda for pre-processing
    * **KDA for SQL apps** - can read data from `Kinesis Data Streams` and `Kinesis Data Firehose` and query that data using SQL statements
        * also allows adding *reference data* thats stored in `S3`
        * can send the results of the queries to **Sinks** which can be:
            * `Kinesis Data Streams` and `Kinesis Data Firehose`
        * real-time analytics using SQL
        * fully managed and serverless
        * automatic scaling
        * pay for actual consumption
        * Output:
            * KDS -> create streams out of real-time analytics queries
        * Use cases:
            * time-series analytics
            * real-time dashboards
            * real-time metrics
    * **KDA for Apache Flink** - use Flink (Java, Scala, SQL) to process and analyze streaming data
        * *Sources*: `KDS`, `Amazon MSK`
        * run any Apache Flink application on a managed cluster on AWS
        * provisioned compute resources
        * `parallel` computation
        * `automatic scaling`
        * application `backups` (implemented as checkpoints and snapshots)
        * much more powerful then just SQL -> use any Apache Flink programming features
        * does not read from `Firehose`
* **Machine Learning on KDA**
    * `RANDOM_CUT_FOREST` 
        * SQL function used for **anomaly detection** on numeric columns in a streama
        * uses **recent history** to compute model
    * `HOTSPOTS`
        * locate and return information about relatively **dense areas** in your data
        * example: collection of overheated servers in a data center


### Kinesis - Video Streams
* **Kinesis Video Streams** - monitor real-time video streams for analytics or ML
    * **Producers**
        * security camera, body-worn camera, `AWS DeepLens`, smartphone camera, audio feeds, images, RADAR data, `RTSP camera`
        * uses `Producer SDK`
        * convention -> 1 producer = 1 video stream
    * **COnsumers**
        * build your own (`MXNet`, `Tensorflow`)
        * `AWS SageMaker`
        * `Amazon Rekognition Video`
    * video playback capability
    * data retention -> 1h to 10 years

![KVS - ML - Architecture](./aws_mls_content/aws_mls_kvs_architecture.png)


### Kinesis - ML
* **KDS** - create real-time machine learning applications
* **KDF** - ingest massive data near-real time
* **KDA** - real-time ETL / ML algorithms on streams
* **KVS** - real-time video stream to create ML applications


## Glue
* managed **ETL (Extract, transform, load)** service
* useful to prepare and transform data for analytics
* fully serverless
* example:
    * pull data from RDS / S3 into glue
    * execute scripts on data
    * load data into RedShift


### Glue - Data Catalog
* **Glue Data Catalog** - catalog of datasets that are available on your AWS account
    * metadata repository for all your tables:
        * automated schema inference
        * schemas are versioned
    * can be used with Athena/Redshift/EMR for `Schema & Data Discovery`
    * integrates with:
        * S3
            * `Partitions` -> will extract partitions base don how S3 data is organized 
            * think up fron how you will be querying data lake in S3
            * example:
                * devices send sensor data every hour
                * query by time ranges? -> `s3://my-bucket/dataset/yyyy/mm/dd/device`
                * query by device? -> `s3://my-bucket/dataset/device/yyyy/mm/dd`
        * RDS
        * DynamoDB
        * JDBC
    * **AWS Glue Data Crawler**
        * **runs on**: S3 / Redshift / RDS
        * **performs**: schema and partition inference
        * **formats**: JSON, Parquet, CSV, relational store
        * **when**: schedule or on demand
        * **auth**: IAM role / credentials to access data stores


### Glue - ETL
* framework for building ETL pipelines
    * generate ETL code in Python / Scala
    * provide own Spark / PySpark scripts
    * targets can be `S3` / `JDBC` (RDS, Redshift) / `Glue Data Catalog`
* fully managed / cost-effectuve / pay only for consumed resources
* jobs are run on a serverless Spark platform
* run with:
    * **Glue Scheduler** - schedule jobs
    * **Glue Triggers** - automate job runs based on events
* **Transformations** - built in transformation scripts
    * `Bundled Transformations`
        * `DropFields` / `DropNullFields` -> remove (null) fields
        * `Filter` - specify a function to filter records
        * `Join` - enrich data
        * `Map` - add fields / delete fields / perform external lookups
    * `Machine Learning Transformations`
        * `FindMatches ML` - identify duplciate / matching records in datasets
            * works even if records have `no common unique identifier` and `no fields match exactly`
    * `Format Conversions` - CSV / JSON / Avro / Parquet / ORC / XML
    * `Apache Spark` transformations (example: K-Means)


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
        * uses `Data Souce Connectors` that run on AWS Lambda to run Federated Queries (e.g. CloudWatch Logs, DynamoDB, RDS, ...)
    * can store results of query in S3 Bucket


## AWS Data Stores in ML


## AWS Data Pipelines


## AWS Batch


## DMS


## Step Functions


## Full Data Engineering Pipelines


## AWS DataSync & MQTT



&nbsp;
# Exploratory Data Analysis


## Python in Data Science and Machine Learning


## Types of Data


## Data Distributions


## Time Series: Trends and Seasonality


## Amazon Athena


## Amazon Quicksight


## Types of Viusalizations


## EMR - Hadoop


## EMR - Apache Spark


## EMR - Notebooks, Security & Instance Types


## Feature Engineering & Dimensionality


## Imputing Missing Data


## Dealing with Unbalanced Data


## Handling Outliers


## Binning, Transforming, Encoding, Scaling & Shuffling


## SageMaker - Ground Truth & Label Generation


## Preparing Data for TF-IDF with Spark and EMR



&nbsp;
# Modeling - General Deep Learning and Machine Learning


## Introduction to Deep Learning


## Activation Functions


## Convolutional Neural Networks


## Recurrent Neural Networks


## Modern NLP with BERT & GPT & Transfer Learning


## Deep Learning on EC2 and EMR


## Tuning Neural Networks


## Regularization - Dropout & Early Stopping
* **Dropout** - 
* **Early Stopping** - 


## Regularization - L1 & L2


## Grief with Gradients: The Vanishing Gradient Problem


## The Confusion Matrix


## Precision, Recall, F1, AUC


## Ensemble Methods: Bagging & Boosting



&nbsp;
# Modeling - Amazon SageMaker


## SageMaker - Introduction


## SageMaker - Linear Learner


## SageMaker - XGBoost


## SageMaker - Seq2Seq


## SageMaker - DeepAR


## SageMaker - BlazingText


## SageMaker - Object2Vec


## SageMaker - Object Deletion


## SageMaker - Image Classification


## SageMaker - Semantic Segmentation


## SageMaker - Random Cut Forest


## SageMaker - Neural Topic Model


## SageMaker - Latent Dirichlet Allocation (LDA)


## SageMaker - K-Nearest-Neighbors (KNN)


## SageMaker - K-Means Clustering


## SageMaker - Principal Component Analysis


## SageMaker - Factorization Machines


## SageMaker - IP Insights


## SageMaker - Reinforcement Learning


## Automatic Model Tuning


## SageMaker - Apache Spark


## SageMaker - Studio & Experiments


## SageMaker - Debugger


## SageMaker - Autopilot & AutoML


## SageMaker - Model Monitor


## Deployment Guardrails & Shadow Tests


## JumpStart, Data Wrangler, Features Store & Edge Manager


## SageMaker - Canvas


## SageMaker - Bias Measures in Canvas


## SageMaker - Training Compiler



&nbsp;
# Modeling - High-Level ML Services


## Amazon Comprehend


## Amazon Translate


## Amazon Transcribe


## Amazon Polly


## Amazon Rekognition


## Amazon Forecast


## Amazon Forecast Algorithms


## Amazon Lex


## Amazon Personalize


## Textract, DeepLens, DeepRacher, Lookout & Monitron


## TorchServe, AWS Neuron & AWS Panorama


## Deep Composer, Fraud Detection, CodeGuru & Contact Lens


## Amazon Kendra & Amazon Augmented AI (A2I)


&nbsp;
# Tuning a Convolutional Neural Network on EC2


&nbsp;
# ML Implementation and Operations


## SageMaker - Inner Details and Production Variants


## SageMaker - Edge: SageMaker Neo and IoT Greengrass


## SageMaker - Security: Encryption at Rest & In Transit


## SageMaker - Security: VPC, IAM, Logging, Monitoring


## SageMaker - Resource Management: Instance Types & Spot Training


## SageMaker - Resource Management: Elastic Interference, Automatic Scaling & AZs


## SageMaker - Serverless Inference & Inference Recommender


## SageMaker - Inference Pipelines


## MLOPs with SageMaker, Kubernetes, SageMaker Projects & SageMaker Pipelines


## Lab - Tuning, Deploying & Predicting with Tensorflow on SageMaker