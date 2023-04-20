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


### S3 - Storage Classes


### S3 - Lifecycle Rules


### S3 - Security


## Kinesis


### Kinesis - Data Streams


### Kinesis - Data Firehose


### Kinesis - Data Analytics


### Kinesis - Video Streams


### Kinesis - ML


## Glue


### Glue - Data Catalog
* **Glue Data Catalog** - 
* **Glue Crawlers** -


### Glue - ETL


## Athena


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