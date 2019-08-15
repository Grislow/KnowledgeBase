# Cli tools for a mac(and linux).

#### Table of contents
* [bit](#bit)
* [git and github](#git-and-github)
* [ifconfig](#ifconfig)
* [ping](#ping)
* [netstat](#netstat)
* [nmap](#nmap)
* [npm-scripts](#npm-scripts)
* [ssh](#ssh)

# bit
Docs: [bit documentation](https://docs.bit.dev/)

Tool for tracking and sharing reusable components.

Follow steps:
* `install` bit-bin globally
* `initialize` bit-bin in a project
* `track` your reusable components
* `define` a compiler and testing framework
* `tag` the components with an immutable version number
* `authenticate` your bit bin account to connect the components to a remote collection
* `export` your components to a bit collection
* `consume` components in other projects

## Installation
``` shell
$ npm install bit-bin -g
```

## Init
``` shell
$ cd project-directory
$ bit init
```

## Track
``` shell
$ bit add src/components/*
```

## Status
Check the status of all tracked components
``` shell
$ bit status
```

## Compiler
Define a compiler for the components. Find a list of available compilers [here](https://bit.dev/bit/envs)
``` shell
$ bit import bit.envs/compilers/babel --compiler
```

## Testing
Define a testing framework if one is used. Find a list of available testing frameworks [here](https://bit.dev/bit/envs)
``` shell
$ bit import bit.envs/testers/jest --tester
```

## Tag
Tag you components to provide them with a version number
``` shell
$ bit tag --all 1.0.0
```

## Authentication
Authenticate you bit bin account locally
``` shell
$ bit login
```

## Export
Export your local components to a remote collection
``` shell
$ bit export user-name.collection-name
```

## Consume
Use your bit components in other projects

Configure Bit as a scoped registry
``` shell 
$ npm config set '@bit:registry' https://node.bit.dev
```

Install components with a package manager
``` shell
$ npm i @bit/mui-org.material-ui.button
```

Import a component if you want to develop it from the consuming repository
``` shell
$ bit import user-name.collection-name/component-name
```


# git and github
Source: [post on interactive rebase](https://stackoverflow.com/questions/1186535/how-to-modify-a-specified-commit)

Revision control tool.

__Github__:\
If added to an organization find the invitation at:
* https://github.com/orgs/PUT_ORGANIZATION_NAME_HERE/invitation

If invited to a company repository:
* https://github.com/PUT_ORGANIZATION_NAME_HERE/PUT_REPOSITORY_NAME_HERE/invitations

If invited to a personal repository:
* https://github.com/Algorytmik/algorytm/invitations

# ifconfig
Tool for network interface configuration. 

__Functionality:__
* `ifconfig` - lists information regarding the network to which your current device is connected. 
    * __e0__ - ethernet connection
    * __en1__ - wireless connection
    * __fw0__ - firewire connection
    * __inet__ - ip4 address

# ping
Send small data packet to a domain or IP address. Get information on whether the connection was successful and how long it took the packet to reach its destination.

__Functionality:__
* `ping 192.168.8.107` - check if you can connect with device at given ip
* `ping www.google.com` - check if you can connect to google.com

# netstat
Allows viewing network connections, routing tables, interface statistics and mocking connections.

__Functionality:__
* `netstat -r` - human readable data regarding network router

# nmap
Source: [osxdaily](http://osxdaily.com/2013/03/26/nmap-for-mac-os-x/)

__Installation:__ `brew install nmap`

__Functionality:__
* `nmap localhost` - scan and diagnose localhost ports
* `sudo nmap -sn 192.168.1.0/24` - scan for devices connected to ip range(example ip)
* `nmap -O 192.168.1.0` - OS scan of device at given ip
* `nmap -osscan-guess 192.168.1.0` - guess OS of device at given ip
* `nmap --dns-servers 8.8.8.8 wp.pl` - scan an ip or domain name using alternate DNS server(overrides local settings). Useful for troubleshooting connection
* `nmap --traceroute example.com` - scan with traceroute functionality enabled


# npm-scripts
Source: 
* [docs list of cli commands](https://docs.npmjs.com/cli-documentation/cli)
* [docs on hooks](https://docs.npmjs.com/misc/scripts)

A native task runner for npm.

__Built-in commands and Hooks__
|command|description|pre-hook|post-hook|
|-------|-----------|--------|---------| 
|`npm access`|set access level on published packages|||
|`npm adduser`|add a registry user account|||
|`npm audit`|run a security audit|||
|`npm bin`|display npm bin folder|||
|`npm bugs`|checks for bugs in a web browser|||
|`npm build`|builds a package based on a package.json file|||
|`npm cache`|manipulates packages cache|||
|`npm ci`|install a project with a clean slate - meaning it removes then installs all dependencies|||
|`npm completion`|enables tab completion for npm commands|||
|`npm config`|manage npm configuration files|||
|`npm dedupe`|reorganizes the module tree to reduce duplication|||
|`npm deprecate`|deprecates a version of a package by updating its registry|||
|`npm dist-tag`|modifies distribution tag - like adding @beta|||
|`npm docs`|open package documentation in a web browser|||
|`npm doctor`|checks if environment meets all requirements for npm to work properly|||
|`npm edit`|edits an installed package|||
|`npm explore`|browser an installed package|||
|`npm help-search`|search the npm help documentation|||
|`npm help`|shows npm help documentation|||
|`npm hook`|manage registry hooks - like watching a package for changes|||
|`npm init`|create and initialize package.json file|||
|`npm install-ci-test`|clean installation of dependencies and run tests|||
|`npm install-test`|install packages and run tests|||
|`npm install`|runs after the package is installed|`npm preinstall`| is a post-hook |
|`npm link`|symlink a package folder|||
|`npm logout`|logout of the registry|||
|`npm ls`|list installed packages|||
|`npm org`|manage an organization|||
|`npm outdated`|check for outdated packages|||
|`npm owner`|manage package owners|||
|`npm pack`|packs the package|`npm prepack`| `npm postpack` |
|`npm ping`|ping npm registry|||
|`npm prefix`|prints closest parent directory with a package.json file|||
|`npm profile`|changes registry profile settings|||
|`npm prune`|removes extraneous packages - meaning those not listed in package.json|||
|`npm publish`|runs after the package is packed and published|`npm prepublish` or `npm prepublishOnly`| is a post-hook |
|`npm rebuild`|rebuild a package|||
|`npm repo`|open package repository in the browser|||
|`npm restart`|restart a package - runs `stop`, `restart` and `start`|`npm prerestart`|`npm postrestart`|
|`npm root`|displays npm root - which is the node_modules folder|||
|`npm <scriptName>`|runs a script from the "scripts" object in package.json|||
|`npm search`|search for a package|||
|`npm shrinkwrap`|lock down dependency versions for publication|`npm shrinkwrap`|`npm postshrinkwrap`|
|`npm star`|mark your favorite packages|||
|`npm stars`|view favorite packages|||
|`npm start`|starts a package - runs the start script from package.json|`npm prestart`|`npm poststart`|
|`npm stop`|stops package execution|`npm prestop`|`npm poststop`|
|`npm team`|manage teams|||
|`npm test`|run the test script from package.json|||
|`npm token`|manage your authentication tokens|||
|`npm uninstall`|runs before the package is uninstalled|is a pre-hook| `npm postuninstall` |
|`npm unpublish`|remove a package from the registry|||
|`npm update`|updates a package|||
|`npm version`|incremenets the package version|||
|`npm view`|view registry info|||
|`npm whoami`|display npm username|||

# ssh
OpenSSH is a popular SSH utility that comes prepacked with macOS. SSH runs over port 22 by default.

Enables secure file transfer with SFTP.

__Resource__: [OpenSSH Manual Pages](http://www.openssh.com/manual.html)

<u>__Check Commands__</u>
* `which ssh` - command for checking whether you have openSSH installed
* `sudo lsof -i -n | egrep '\<ssh\>'` - check for open ssh connections
* `ls -al ~/.ssh` - lists existing ssh keys
* `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` - generate an SSH private key

<u>__Github and SSH__</u>\
You can link a repository to an SSH key.

``` shell
# 1. Generating keys
ssh-keygen -t rsa -C "johndoe@example.io" -f "personal_repo"
ssh-keygen -t rsa -C "johndoe@example.io" -f "company_repo"

# 2. Adding the Account to Github
pbcopy < ~/.ssh/personal_repo.pub
    # copy into 'Key' field in 'Add Deploy Key' in 'target-repo/settings/deploy keys'
    # repeat this for other accounts

# 3. Register key with ssh-agent
ssh-add ~/.ssh/personal_repo
ssh-add ~/.ssh/company_repo

# 4. List registered ssh keys for confirmation
ssh-add -l

# 5. Handle multiple account
    # a. by having only one active account at a time
    # b. by creating an ssh config file

# a.
ssh-add -D                  # Remove all entries from ssh-agent
ssh-add ~/.ssh/key_you_want_active

# b.
touch ~/.ssh/config
code ~/.ssh/config          # open in a code editor
    # Add the following
    #
    #   # Personal account
    #   Host github.com
    #      HostName github.com
    #      User git
    #      IdentityFile ~/.ssh/personal_repo
    #   # Company account
    #   Host github.com-company
    #      HostName github.com
    #      User git
    #      IdentityFile ~/.ssh/company_repo

# 6. Configure user in local repo
git config user.name "myuser"
git config user.email "myuser@some-email.com" 

# 7. Use the account to link with existing or new github repo
git clone git@github.com-company:myuser/repo_name.git
git remote set-url origin git@github.com-company:myuser/repo_name.git
git remote add origin git@github.com-company:myuser/repo_name.git 
```