# RabbitMQ Reference

Source:
* [official rabbitmq docs](https://www.rabbitmq.com/documentation.html)

#### Table of contents

* [configuration](#configuration)
* [dashboard](#dashboard)
* [cli tools](#cli-tools)
* [common errors](#common-errors)
* [best practices](#best-practices)

&nbsp;
# configuration

Resources:
* [full config file example with comments](https://github.com/rabbitmq/rabbitmq-server/blob/v3.7.x/docs/rabbitmq.conf.example)

```shell
# print applied configuration
rabbitmqctl environment
```


&nbsp;
# dashboard
The rabbitmq dashboard can be accessed under http://localhost:15672 once the server is running.

The default credentials are:
* **User**: `guest`
* **Password**: `guest`


&nbsp;
# cli tools

``` shell
# start server
rabbitmq-server

# list queues and messages
sudo rabbitmqctl list_queues
```

&nbsp;
# common errors

```shell
# error
Error: The `brew link` step did not complete successfully
# solution
brew link rabbitmq

# error
Error: Could not symlink <rbmq_target_dir> /usr/local/sbin is not writable
# solution
mkdir /etc/paths.d/usr_local_sbin
sudo echo "/usr/local/sbin" >> /etc/paths.d/usr_local_sbin
sudo mkdir /usr/local/sbin
sudo chown $(whoami):admin /usr/local/sbin
brew link rabbitmq
```

&nbsp;
# best practices
Source: [cloudamqp.com](https://www.cloudamqp.com/blog/2018-01-19-part4-rabbitmq-13-common-errors.html)
