# Cli tools for a mac(and linux).

#### Table of contents
* [bash basics](#bash-basics)
* [awk](#awk)
* [bit](#bit)
* [chattr](#chattr)
* [chmod](#chmod)
* [cron](#cron)
    * [crontab](#crontab)
* [git and github](#git-and-github)
* [ifconfig](#ifconfig)
* [ping](#ping)
* [nano](#nano)
* [nc](#nc)
* [netstat](#netstat)
* [nmap](#nmap)
* [npm-scripts](#npm-scripts)
* [rename](#rename)
* [sed](#sed)
* [ssh](#ssh)
    * [ssh troubleshooting](#ssh-troubleshooting)
* [stract](#strace)
* [usermod](#usermod)
* [misc](#misc)

&nbsp;
# bash basics
Basic syntax of shell scripting: https://www.gnu.org/software/bash/manual/bash.html

&nbsp;
# awk
```shell
awk -F':' '{ print $1}' /etc/passwd
```

&nbsp;
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

&nbsp;
# chattr
* `chattr` - changes the attributes of files and directories
* `lsattr` - lists the attributes of a file or directory

``` shell
# list file or directory attributes

# make file immutable
sudo chattr +i /path/to/file
# 
```


&nbsp;
# chmod
``` shell
# make script executable
chmod +x some_script.sh

# set permissions for specific file and specific user
setfacl -m u:username:rwx myfolder

# check permissions of file/dir and all intermediate directories
namei -l <file>
```

&nbsp;
# cron

Basic commands:
```shell
# On Linux
service crond status
service crond stop
service crond start
# On Debian Linux
service cron status
service cron stop
service cron start
```

## crontab

Crontab cli:
``` shell
# list configured cron jobs
crontab -l

# configure cron jobs
crontab -e
```

Crontab job definition:
```shell
# m h  dom mon dow   command

# every day, every minute
* * * * * cd /path/to/script && /path/to/script/test.sh

# at 3 on every work day
0 3 * * 1,2,3,4,5 cd /path/to/script && /path/to/script/test.sh

# redirect output to cron.log
* * * * * cd /path/to/script && /path/to/script/test.sh >/path/to/logs/cron.log 2>&1
```


&nbsp;
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

&nbsp;
# ifconfig
Tool for network interface configuration. 

__Functionality:__
* `ifconfig` - lists information regarding the network to which your current device is connected. 
    * __e0__ - ethernet connection
    * __en1__ - wireless connection
    * __fw0__ - firewire connection
    * __inet__ - ip4 address

&nbsp;
# ping
Send small data packet to a domain or IP address. Get information on whether the connection was successful and how long it took the packet to reach its destination.

__Functionality:__
* `ping 192.168.8.107` - check if you can connect with device at given ip
* `ping www.google.com` - check if you can connect to google.com

&nbsp;
# nano
A cli text editor. 

Local nano configurations are found in the `~/.nanorc` file
* `set smooth` - enable smooth scrolling
* `set mouse` - enable mouse navigation(only click)
* `set linenumbers` - show line numbers(only nano 2.7.1+)

``` shell
# example .nanorc
set smooth
set mouse
set linenumbers
```

## nano cheatsheet
|Command|Description|Group|
|-------|-----------|-----|
|`Ctrl + O`|Save as|File Handling|
|`Ctrl + R`|Insert file into current one, use `Ctrl + T` to browse for files|File Handling|
|`Ctrl + X`|Close buffer, exit from nano|File Handling|
|`Ctrl + K`|Cut current line into buffer|Editing|
|`Alt + A`|Start selection or end selection|Editing|
|`Alt + ^`|Copy selected text into buffer|Editing|
|`Ctrl + backspace`, `Ctrl + U`|Paste buffer|Editing|
|`Alt + \`|Move to beginning of file|Navigation|
|`Alt + /`|Move to end of file|Navigation|
|`Ctrl + V`|Page down|Navigation|
|`Ctrl + Y`|Page up|Navigation|
|`Alt + G`|Go to line number|Navigation|
|`Alt + ]`|Go to matching bracket `( )`, `[ ]`, `{ }`|Navigation|
|`Alt + -\=`|Scroll up and down|Navigation|
|`Alt + {\}`|Indent / outdent|Navigation|
|`Ctrl + W`|Search for phrase|Search and Replace|
|`Alt + W`|Repeat last search|Search and Replace|
|`Alt + R`|Search and replace|Search and Replace|

&nbsp;
# nc
Utility for working with TCP, UDP and UNIX-domain sockets.

``` shell
# check whether range of ports is open
nc -zv 127.0.0.1 20-30
```


&nbsp;
# netstat
Allows viewing network connections, routing tables, interface statistics and mocking connections.

__Functionality:__
* `netstat -r` - human readable data regarding network router

```shell
# lists open ports
netstat -ap tcp | grep -i "listen"
```

&nbsp;
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

A tool for upgrading all npm packages to its latest in package.json
```shell
# install npm-check-updates globally
npm install -g npm-check-updates

# update package.json
ncu -u

# install newest dependencies
npm install
```

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


# rename
Command-line utility for renaming files and directories.

``` shell
# -n -> will launch test run without actually making changes
rename -n 's/(.*)$/$1_APPENDED/' *

# remove -n to actually change names
rename 's/(.*)$/$1_APPENDED/' *
```


# sed
A stream editor - enables basic text transformations on an input stream.

``` shell
# remove last line in place
sed -i '$d' <file>
```

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

<u>__Useful__</u>

``` shell
# restart server remotely
ssh –t user@server.com ‘sudo reboot’

# remote login using .pem file
ssh -i keys.pem user@domain.pl

# add public key to remote server authorized keys
ssh-copy-id -i ~/.ssh/id_rsa.pub user@server

# restart the ssh agent - DEBIAN / UBUNTU
sudo systemctl restart ssh
```

## ssh troubleshooting
``` shell
# demanding password after adding key to authorized
#   1. make sure ~ , ~/.ssh , ~/.ssh/authorized_keys permission on REMOTE are correct
chmod 700 ~
chmod 700 ~/.ssh
chmod 700 ~/.ssh/authorized_keys

# offending key
#   1. remove offending key from known_hosts
ssh-keygen -f "/home/edulab/.ssh/known_hosts" -R "172.17.132.10"
#   2. run ssh  again to add proper key
ssh user@172.17.132.10
```

&nbsp;
# strace
```shell
# print stack trace of app
strace <app_name>
```


&nbsp;
# usermod
```shell
# add user to sudo group
usermod -aG sudo user-name
```

# Misc

```shell
# installing python packages on ubuntu
python3 -m pip install <package-name>
python3 -m pip install -U <package-name>

# finding processes based on process name
ps aux | grep 'name'

# check cpu usage
htop

# check memory usage
free -m

# check memory usage of all processes based on regexp
ps -o pid,user,%mem,command ax | sort -b -k3 -r | grep 'name'
```

# 

 awk -F':' '{ print $1}' /etc/passwd