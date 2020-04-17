# Docker Reference

Source:
* [Official documentation](https://docs.docker.com/get-started/)
* [docker-curriculum](https://docker-curriculum.com/)

#### Table of contents

* [Introduction](#introduction)
* [Terminology](#terminology)
  * [Docker Engine](#Docker-Engine)
  * [Docker Daemon](#Docker-Daemon)
  * [Docker Client](#Docker-Client)
  * [Docker Registry](#Docker-Registry)
  * [Image](#Image)
  * [Container](#container)
  * [Services](#Services)
  * [Namespaces](#Namespaces)
  * [Control Groups](#Control-Groups)
  * [Containerization](#Containerization)
  * [Orchestrators](#Orchestrators)
  * [Docker Hub](#Docker-Hub)
  * [Repository](#Repository)
  * [Docker Context](#Docker-Context)
* [Dockerfile](#dockerfile)
    * [dockerignore](#dockerignore)
    * [Commands](#commands)
* [CLI](#CLI)
* [This and that](#this-and-that)

&nbsp;
# Introduction
Docker is a tool that enables the creation of lightweight application oriented environments without the extra resource consumption or burdening configuration that comes with traditional virtualization.

&nbsp;
# Terminology

## Docker Engine
A client-server application comprised of 3 main components
1. the core which is a **server** that runs as a daemon process accessible through `dockerd` command, also called the docker daemon
1. a **REST API** that describes an interface used to communicate with the server
1. a **CLI client** accessible through the `docker` command, also called the Docker client

![Docker engine](docker_engine.png)

## Docker Daemon
Listens for, then processes Docker API requests and manages docker objects. A daemon can also communicate with other daemons.

## Docker Client
The docker user interface that allows communicating with one or more docker daemons 

## Docker Registry
A storage for docker images. There are publicly available registries such as Docker Hub. You can perform operations on docker images residing in the registry like `pull`, `push`, `run`

## Image
A template for creating a Docker container. You can use prebuilt images(`redhat` os image), customize existing ones(`redhat` os image with preconfigured executables) or create one from scratch(a `Dockerfile`).

An image is defined in a **Dockerfile** through a set of steps(instructions) required to build it. Each instruction is a separate layer and when changes are made to a specific instruction only that layer is rebuilt.

Images contain everything that is needed to run an application and has a private filesystem in which binaries, runtimes, dependencies, etc. are stored.

## Container
A loosely isolated environment within which an application is packaged and run. Runs within the hosting machines kernel.

A plefora of operations can be performed on or through a container:
* created 
* started
* stopped
* moved
* deleted
* connected to one or more networks
* create a new image based on the containers state

When a container is removed all data that was not persisted will be removed with it. Apart from defining a container within an image you can also additionally configure it from the CLI.

## Services
Allow scaling containers across multiple Docker daemons. These daemons work together as a swarm and communicate through the Docker API. This enables seamless load balancing while appearing to the consumer as single application.

## Namespaces
A technology used by docker to provide a level of isolation to a docker container. Access to each layer of a container is done through its namespace. The following namespaces are used by the docker engine on Linux:
* `pid` - process isolation(PID: Process ID)
* `net` - managing network interfaces (NET: Networking)
* `ipc` - managing access to IPC resources (IPC: InterProcess Communication)
* `mnt` - managing filesystem mount points (MNT: Mount)
* `uts` - isolating kernel and version identifiers. (UTS: Unix Timesharing System)

## Control Groups
Group to which docker containers can be assigned. Each groups defines hardware limitations for assigned containers(ex. max available RAM)

## Containerization
The use of containers to build, share and run an application. Benefits of containers:
* **Lightweight** - use less system resources than virtual machines
* **Flexible** - any application can be containerized
* **Portable** - build locally, deploy anywhere, run anywhere
* **Scalable** - easily replicate and distribute across a datacenter
* **Secure** - apply aggressive constraints and isolations without additional configuration

## Orchestrators
Tools used to manage, scale and maintain containerized applications such as:
* [Kubernetes](https://kubernetes.io/) - an all in one framework for distributed systems
* [Docker Swarm](https://docs.docker.com/engine/swarm/swarm-tutorial/) - easy to configure and start using but limited

## Docker Hub
A platform that serves as a versioning and sharing tool for containers. Before pushing images make sure to name them as follows: 

`<Docker Hub ID>/<Repository Name>:<tag>`

## Repository
A place to store one or more versions of a docker image

## Docker Context
A set of files at a specific PATH or URL that is used alongside a Dockerfile to create an image.

&nbsp;
# Dockerfile
Containerizing an application always starts from writing the Dockerfile. The Dockerfile is a text document containing a set of commands that mimic those available in any command line.

To speed up the build process you can use an optimized backend [BuildKit](https://github.com/moby/buildkit)

The format of a Dockerfile is as follows:
```Dockerfile
# Comment
INSTRUCTION arguments
```

## dockerignore
Use `.dockerignore` files to have the daemon ignore certain files when building an image - this can greatly increase performance. Uses `Go` language regexp match rules and glob syntax

```Dockerfile
# comments are ignored

# exclude files and dirs starting with 'temp' in any immediate subdirectory of the root 
*/temp*
# exclude files and dirs starting with 'temp' in any subdirectory that is two levels below the root 
*/*/temp*
# excludes files and dirs in the root whose names are a one character extension of 'temp'
temp?
# excludes all files and directories ending with '.csv' in all directories including the root dir
**/*.csv
# includes the data.csv file after it was excluded by the previous rule
!data.csv
```

## Commands

### FROM
Sets the base image for all subsequent instructions. 
* needs to be the first instruction in a Dockerfile.
* there can be more than one `FROM` instruction in one Dockerfile
* each `FROM` instruction clears state created by previous instructions
* 

```Dockerfile
FROM [--platform=<platform>] <image> [AS <name>]
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
```

&nbsp;
# CLI
Docs: [CLI Reference](https://docs.docker.com/engine/reference/run/)

## attach
`docker attach [OPTIONS] CONTAINER`

Attach local standard input, output and error streams to a running container

## build
`docker build [OPTIONS] PATH | URL | -`

Builds an image from a Dockerfile. The location can be a PATH or URL. The Docker file will be read from the specified location and docker will treat the root of that location as its context.

`docker build -t [DockerFile LOCATION] [CONTEXT LOCATION]`

Build image from a Dockerfile that is outside of the image context location

`docker build -t shykes/myapp:1.0.2 -t shykes/myapp:latest .`

Tags the docker image into one or more repositories using the `-t` flag

## commit
`docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]`

Creates a new image from a containers changes

## config
`docker config COMMAND`

Manage Docker configurations

## container
`docker container COMMAND`

Manage Docker containers

|Command|Description|
|-|-|
|`attach`|attach local std out/in/err to container|
|`commit`|create a new image from a container's changes|
|`cp`|copy file and folders between a container and local file system|
|`create`|create a container|
|`diff`|inspect changes to files on containers filesystem|
|`exec`|run a command in a running container|
|`export`|export a containers filesystem as an archive|
|`inspect`|display detailed information on one or more containers|
|`kill`|kill running container/s|
|`logs`|get a containers logs|
|`ls`|lists all containers|
|`pause`|pauses all processes within container/s|
|`port`|list port mappings|
|`prune`|remove all stopped containers|
|`rename`|rename a container|
|`restart`|restart container/s|
|`rm`|remove container/s|
|`run`|run a command in a new container|
|`start`|start stopped container/s|
|`stats`|get container resource usage statistics|
|`stop`|stop one or more running containers|
|`top`|display the running processes of a container|
|`unpause`|unpause processes within a container|
|`update`|update container/s configs|
|`wait`|block until a container stops and print exit code|

`docker container run --publish 8000:8080 --detach --name bb bulletinboard:1.0`

Starts a container that:
* is build from the `bulletinboard:1.0` image
* has traffic forwarded from the hosts port 8000 to the containers port 8080 `--publish 8000:8080`
* runs in the background `--detach`
* can be referenced through bb `--name bb`

`docker container rm --force bb`

Removes the container under the alias `bb`

## context
`docker context COMMAND`

Manage docker contexts

|Command|Description|
|-|-|
|`create`|create a docker context|
|`export`|export context to a tar or kubeconfig file|
|`import`|import context from a zip or tar file|
|`inspect`|display details information on context/s|
|`ls`|list contexts|
|`rm`|remove context/s|
|`update`|update a context|
|`use`|set the current context|

## cp
```
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH
```

Copy files and folders between a container and the local file system

## create
`docker create [OPTIONS] IMAGE [COMMAND] [ARG...]`

Create a new docker container

## events
`docker events [OPTIONS]`

Get real time events from the server

## exec
`docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`

Run a command in a running container

## history
`docker history [OPTIONS] IMAGE`

Show the history of an image

## image
`docker image COMMAND`

Manage docker images

|Command|Description|
|-|-|
|`build`|build an image form a Dockerfile|
|`history`|show history of an image|
|`import`|import the contents from a tarball to create a filesystem image|
|`inspect`|display detailed information on image/s|
|`load`|load an image from an archive file or STDIN|
|`ls`|list images|
|`prune`|remove unused images|
|`pull`|pull an image from a registry|
|`push`|push an image to a registry|
|`rm`|remove image/s|
|`save`|save image/s to a tar archive|
|`tag`|create a tag that refers to an image|

## images
`docker images [OPTIONS] [REPOSITORY[:TAG]]`

List images

## info
`docker info [OPTIONS]`

Displays system-wide information

## inspect
`docker inspect [OPTIONS] NAME|ID [NAME|ID...]`

Displays low level information on Docker objects such as:
* instances ip address
* instances MAC address
* instances log PATH
* get instances image name
* all port bindings

`docker inspect --format='{{json .Config}}' $INSTANCE_ID`

Get information in JSON format

## login
`docker login [OPTIONS] [SERVER]`

Login to a Docker registry

## logout
`docker logout [SERVER]`

Logout from a Docker registry

## network
`docker network COMMAND`

Manage docker networks

|Command|Description|
|-|-|
|`connect`|connect a container to a network|
|`create`|create a network|
|`disconnect`|disconnect a container from a network|
|`inspect`|display detailed information on network/s|
|`ls`|list networks|
|`prune`|remove unused networks|
|`rm`|remove a network|

## node
`docker node COMMAND`

Manage Swarm nodes

|Command|Description|
|-|-|
|`demote`|demote node/s from manager in Swarm|
|`inspect`|display detailed information on node/s|
|`ls`|list nodes|
|`promote`|promote node/s to manage in Swarm|
|`ps`|list tasks running on node/s|
|`rm`|remove node/s|
|`update`|update a node|

## plugin
`docker plugin COMMAND`

Manage plugins

|Command|Description|
|-|-|
|`create`|creates a plugin from rootfs and configuration|
|`disable`|disable a plugin|
|`enable`|enable a plugin|
|`inspect`|display detailed information on one or more plugins|
|`install`|install a plugin|
|`ls`|list plugins|
|`push`|push a plugin to a registry|
|`rm`|remove plugin/s|
|`set`|change settings for a plugin|
|`upgrade`|upgrade existing plugin|

## ps
`docker ps [OPTIONS]`

List docker containers

## pull
`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`

Pull an image or repository from a registry

## 

&nbsp;
# This and that

Peak ram usage of container
```bash
# choose a container
docker container ls
# list its processes
docker container exec -it [container_name] top -bn 1
# get containers PID
docker inspect -f '{{.State.Pid}}' [container_name]
# get peak memory usage of the container
grep VmPeak /proc/[PID]/status
```