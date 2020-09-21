# Git Guide

#### Table of contents

* [Sources](#sources)
* [Foundations](#foundations)
    * [Git Benefits](#git-benefits)
    * [Archive](#archive)
* [Configurations](#configurations)
    * [Configuring Git](#configuring-git)
    * [Configure Credentials](#configure-credentials)
    * [Aliases](#aliases)
    * [Bash Aliases](#bash-aliases)
* [Init](#init)
* [Clone](#clone)
* [Areas](#areas)
* [Stashing](#stashing)
* [References](#references)
* [Commits](#commits)
    * [Conventional Commits](#conventional-commits)
    * [Squashing](#squashing)
* [Branches](#branches)
    * [Branching Strategies](#branching-strategies)
* [Merging](#merging)
* [History](#history)
* [Diffs](#diffs)
* [Cleanup](#cleanup)
* [Rebase](#rebase)
* [Amend](#amend)
* [Remotes](#remotes)
* [Git Flow](#git-flow)
* [Best Practices](#best-practices)
    * [Squash and Rebase](#squash-and-rebase)
* [Common Mistakes](#common-mistakes)

&nbsp;
# Sources
* [Pro Git](https://git-scm.com/book/en/v2)
* [atlassian git tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)

&nbsp;
# Foundations
Git is a Distributed Version Control Systems(DVCS) - a tool the help developers and software team manage changes in their code base, by keeping track of changes to files.

VCS is sometimes referred to as Source Code Management(SCM) or Revision Control System(RCS).

Git stores information as key-value pairs:
* __Values__ are:
    * folders stored in objects called `trees` containing other folders and files
    * file data stored in objects called `blobs`(file mode is also stored)
* __Keys__ are `SHA1` hashes of that data.

A commit is a single key-value pair that cannot be changed once its created.

A new commit creates a new key-value pair with new trees, blobs and references to previous blobs if they where not changed.

A point in your project history(identified by a commit hash) can be easily constructed by traversing a tree that starts from the commit object and moves through its nodes.

__Delta compression__ - for efficiency when a single file is changed many times git does not store each version of that file. Instead it used `packfiles`, where only the most recent version of the file is stored along with a collection of historical changes made to it.

## Git Benefits
__Developers__:
* branches provide an isolated environment for making changes without impacting released code
* being distributed each developer has a local copy of the whole repo history and can work on it offline
* any mistakes made locally do not propagate globally
* pull requests give allow developers to review and fix code before it is pushed to a production environment
* facilitates introducing smaller changes more frequently

__Marketing__:
* git facilitates pushing granular changes which allows leveraging the marketing value of big and small releases
* on the other hand centralized version control(VCS) would have to pack minor/small changes into a major release

__Project Management__:
* more frequent releases
* easily pause a new feature in favor of another one if priorities change

__Designers__:
* feature branches facilitate rapid prototyping

__Cusomter Support__:
* bugs can be fixed and pushed directly to production without waiting for the next big release


# Archive
The `archive` command enables creating an archive from a git ref like a commit, branch or tree.

Formats: `tar`, `zip`, `tar.gz`

``` shell
# create tar archive from current HEAD and save to repo_archive.tar
git archive --output=./repo_archive.tar --format=tar HEAD

# only build archive for repository src directory
git archive --output=./repo_archive.tar --format=tar HEAD ./src

# build archive from remote repository
git archive --output=./repo_archive.tar --remote=url-to-remote-repo --format=tar HEAD
```


&nbsp;
# Configurations
Git comes prepacked with a lot of configuration options that can make your life easier by automating the boring stuff.
* configuration options can be changed through the `git config` command
* configurations are scoped:
    * `local` - per repo, resides in `<repo>/.git/config`
    * `global` - per user, resides in the users `/.gitconfig
    * `system` - for the entire system, resides in `(prefix)/etc/gitconfig`

## Configuring Git
``` shell
# configure user marked in commits
git config --global user.name "John Smith"
git config --local user.email <email>

# configure global user marked in commits if no local user is found
git config --global alias.<alias-name> <git-command>

# set the text editor used for commit msgs for the entire system
git config --system core.editor <editor>

# open the global configurations in a text editor
git config --global --edit

```


## Configure Credentials
Thanks do this you wont need to type in a user and password each time you want to pull or push changes
``` shell
# append credentials to a .git-credentials file you create
echo 'https://USERNAME:PASSWORD@githost.com' >> ~/.git-credentials

# store credentials for all future HTTPS requests
git config --global credential.helper 'store --file ~/.git-credentials'
```

## Aliases
Creates an alias for git commands so that you can type `git alias` and run a specific command
``` shell
git config --global alias.shortcut 'command we want to run - dont include "git"'

git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.up rebase
git config --global alias.ci commit
```

## Bash Aliases
Using bash aliases is a great way to automate repetitive tasks such as:
1. `git add .`
1. `git commit -m 'msg'`
1. `git push origin branch-name`

### Example shell script
``` shell
#!/bin/sh
git add .
git commit -m "$1"
branch_name=$(git branch | grep \* | cut -d ' ' -f2)
git push origin $branch_name
```

### Add script to ~/.bashrc under alias
``` shell
echo "alias gacp='~/script/location/script_file.sh'" >> ~/.bashrc
```

### Give script execute permission
``` shell
chmod +x ~/script/location/script_file.sh
```

### Run the command when you want to push changes
```shell
gacp "my commit message"
```

&nbsp;
# Init
The `git init` command allows initializing a new git repository at the current or a target directory on your local machine.
* creates a `.git` subdirectory that contains Git metadata:
    * subdirectories for `objects`, `refs`, `template files`
    * a `HEAD` file that points to the currently checked out commit
* `$GIT_DIR` allows setting an alternative location for Git metadata
* local repository can be configured to track a remote repository
* `--bare` flag creates a repository that doesn't have a working directory
    * a bare repository is only a storage mechanism
    * often used as a central remote repository
    * ssh to server, install git, create bare repository that devs can clone and work on

``` shell
# create a .git subdirectory and master branch in current directory
git init

# same as the above but in target directory
git init ./target-directory

# set the remote repository the local repository tracks
# push a local branch to the remote repository
git remote add remote-name remote-url
git push -u remote-name local-branch-name

# create central bare repository on Git host
ssh <user>@<host> cd path/above/repo git init --bare my-project.git
```

&nbsp;
# Clone
The `git clone` command allows create a local copy of a remote repository.
* under the hood:
    * calls `git init`
    * copies data from existing repo
    * checks out a set of working files

``` shell
# clone an existing repository
git clone repository-url
```


&nbsp;
# Areas
A git repository consists of 3 areas:
* __Working Tree__
    * also called untracked
    * includes all files you are currently working on but have not been added to the git repository
    * these files are not saved in the git repository
* __Staging Area__:
    * also called the Index
    * local changes that are being tracked by the git repository
    * this area is not visible to the remote repository
    * changes are moved from the Working Tree to the Staging Area through the `git add` command
* __Local Repository__:
    * all history of all commits made to your local version of the repository
    * stored in the `.git` directory
    * changes are moved from the Staging Area to the Local Repository through the `git commit` command


&nbsp;
# Stashing





&nbsp;
# References
`refs` are references to nodes(branches or other refs) in the repository tree. They are mutable and act as bookmarks for various stages in the code.
* `HEAD` - a ref that points to the current active commit


&nbsp;
# Commits
A commit is a reference to a tree the represents the state of the files in a repository at the time of the commit. 
* also stores historical commits that are its `parents`
* no `parent` commits signifies an `initial commit`
* more then one `parent` signifies a `merge commit`
* only staged changes can be committed
* to stage a change use the `git add` command
* to commit a change use the `git commit` command

``` shell
# stage all changes
git add -A
# stage all changes on the current path
git add .
# stage modifications and deletions without new files
git add -u
# stage new files and modifications without deletions
git add --ignore-removal


```

## Conventional Commits
Sources:
* [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/)
* [highlab.pl](https://highlab.pl/conventional-commits/?fbclid=IwAR0qFUmzUAV9zupuzcYMsN3AR3qC8Q-XJ1D7kyKEAU5xGzfx8VFbxsLTqsE)

A convention for commit messages that makes them more readable and allows writing automated tools on top of them. This enables creating great ChangeLogs and make the git logs more readable and explanatory for developers.

__Structure__:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

__Type__:
* __feat__ - new feature. Correlates with `MINOR` in semvar
* __fix__ - fixing an existing feature. Correlates with `PATCH` in semvar
* __docs__ - changes in documentation
* __chore__ - a change that does not involve directly changing the source code or tests(ex. package update)
* __refactor__ - changes to existing feature that are not fixes(ex. make more DRY)
* __tests__ - anything that involves tests(new tests, editing old tests)
* __perf__ - changes that increase performance but do not change what it does
* __styles__ - static code formatting(ex. remove white spaces, commas, add semicolon)
* __ci__ - changes for CI purposes(configs, scripts)
* __build__ - changes the affect the build process
* __revert__ - revert of previous changes

__Scope__:
* __name of functionality__ - like validator
* __ticket number__ - like JIRA issue identifier
* you can use both of the above:
```
fix(forms): add validation to username field (AL-123)
```

__Breaking change__ - append `!` after type/scope means you introduced a breaking API change which correlates with `MAJOR` in semvar. Can be part of commit of any type. Explain what the change is breaking in the commit footer

In case of mistake(ex. using the wrong type) use `git rebase -i` to edit the commit history.

Commit message should always be succinct and imperative `parse object id in separate method`

In case of `revert` it is a good practice to reference the commit SHAs being reverted in the commit message footer.
```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

__Tools__: 
* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): generate changelog from conventional commits
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): parse, validate, stringify conventional commits
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): manage version and generate changelog automatically
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): `Python` tool for creating commit rules, auto bump versions, auto changelog generation
* [commitlint](https://github.com/conventional-changelog/commitlint): tool for linting commit messages
* [gitlint](https://github.com/jorisroovers/gitlint): commit message linter written in `Python`
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): calculate recommended version bump based on Conventional commits
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Automatic package release workflow(generate version, release notes, publishing) for `Python`
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Conventional commits support for VSCode
* [Pyhist](https://github.com/jgoodman8/pyhist): `Python` tool that automatically updates package version from the git history and generates ChangeLog

## Squashing
This allows merging commits to maintain a clean git history. This can be done through CLI or during pull/merge requests for most modern git repository managers
``` shell
git reset --soft HEAD~3 && git commit
```


&nbsp;
# Branches

## create new branch and checkout
``` shell
# create new-branch from old-branch and checks out into it
git checkout -b new-branch old-branch

# create new-branch from current branch and checks out into itemName
git checkout -b new-branch
```

## rename an existing branch
``` shell
# rename local branch
git branch -m new-name

# rename remote branch
git push origin :old-name new-name

# reset the upstream branch to target new branch name
git push origin -u new-name
```

## Branching Strategies
Source: [perforce.com](https://www.perforce.com/blog/vcs/best-branching-strategies-high-velocity-development)

Branching strategies are ways of organizing and working on branches in a way that:
* optimizes productivity
* facilitates parallel development
* allows for planned and simplified releases
* provides a clear promotion path for software changes
* evolve to accommodate frequents changes
* support multiple version and patches

Once you decide on a branching strategy make sure to:
* document it
    * when a developer should branch and from where
    * when they should merge and to where
* minimize how long code is checked out
* figure out your dependencies - define how changes should be propagated
* review your merge/integration process


### Naming Branches
A naming convention for branches makes it easy to identify what work it contains at a glance.

An example convention would could be `prefix-id-summary` where:
* __prefix__ - a way of grouping branches based on what kind of work they involve: `feat`, `fix`, `bug`, `refactor`
* __id__ - could be an identifier from an issue tracking tool
* __summary__ - 2-3 words separated by a dash that best describe the branch 

### Branching Infographic
![branch strategy](content/branching_strategy_1.png)

&nbsp;
# Merging

## update a local branch with recent changes from master
``` shell
# if branch is local and hasn't been pushed to remote yet
git checkout local-branch
git rebase master

# if your branch has already been pushed to remote
git checkout aq
git merge origin/master
```

## abort a merge
``` shell
# checkout to target branch
git checkout target-branch
# get id of merge commit
git log --oneline

# revert merge commit
git revert -m 1 merge-commit-id

# commit the revert 
git commit -m 'revert commit'
```


&nbsp;
# History
`tag` is a ref and a node that points to a commit and has an optional message and GPG signature.

``` shell
# one local to multiple remotes and problem with unrelated history
git pull --allow-unrelated-histories
```



&nbsp;
# Diffs

## find differences between two branches
``` shell
git diff branch1...branch2
```

## find differences between a file in two branches
``` shell
git diff branch1:file-name branch2:file-name
```



&nbsp;
# Cleanup

## remove untracked files
``` shell
# perform a dry-run to see what would be deleted
git clean -n -d

# double check and remove files
git clean -f -d
```

## unstages files
``` shell
# unstage specific file
git rm --cached file-name

# unstage all stages files
git reset
```

## remove remote file
``` shell
git rm file-name
git commit -m 'removed file-name'
git push
```

## undo commit
``` shell
# undo but keep changes
git reset --soft HEAD^

# undo and discard changes
git reset --hard HEAD^
```

## remove tag
``` shell
# remove local tag
git tag -d tag-name

# remove remote tag
git push origin :refs/tags/tag-name
```

&nbsp;
# Rebase
Modifies the history of our branch by reapplying all of the changes of our branch to the latest version of a target branch. This keep the history of the target branch clean. It is considered good practice to rebase master or develop before merging it with a feature branch. That way git can perform a fast-forward merge, which does not pollute target branch history with a redundant merge commit.

``` shell
# from the feature branch
git rebase origin/target-branch
```

&nbsp;
# Amend
Amend flag allows adding changes to an existing commit.

## change commit message
``` shell
# opens editor where you can edit last commit message
git commit --amend
```

## add to commit
``` shell
# make your change
git add . # or add individual files

# amend the changes to the most recent commit with same commit message
git commit --amend --no-edit
```

&nbsp;
# Remotes


&nbsp;
# Git Flow
Sources:
* [atlassian.com](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
* [original paper by Rein Henrichs](http://reinh.com/blog/2009/03/02/a-git-workflow-for-agile-teams.html)

A branching model for git repositories that serves as a robust framework for managing VCS workflows.

&nbsp;
# Best Practices
Sources:
* [Seth Robertson - Git Best Practices](https://sethrobertson.github.io/GitBestPractices/)

## Commit early, commit often
Git only takes responsibility once you commit. Periodic checkpoints facilitate finding any bugs early on.

## Lost changes can be recovered
Git performs garbage collection every 2 weeks. If you need to apply any old changes that might be garbage collected, they can usually be found in the following places:
* __reflog__ - 




## Squash and Rebase
Before merging a feature branch back into a main branch:
1. squash the feature branch commits into a single commit
1. rebased from the up-to-date main branch

This provides a clean git history and ensures that each commit represents code that can be built and tested.

Do this with care. Squashing and rebasing remakes history - this should be performed post code review.

``` shell
# squash commits from the current branch into one commit
git rebase -i HEAD~[NUMBER OF COMMITS]
# OR
git rebase -i [SHA]

# push this commit to the origin branch
git push origin feature-branch --force

# get most recent changes from the main branch
git checkout master
git pull origin master

# checkout the feature branch and rebase with the main branch
git checkout feature-branch
git rebase master

# make sure code builds and runs assuming you have some Makefile scripts
make run
make test

# push the effects of the rebase
git push origin feature-branch --force

# merge the changes into the main branch
git checkout master
git merge feature-branch
git push origin master
```

&nbsp;
# Common Mistakes

From: [ohshitgit.com](https://ohshitgit.com/)

## revert a mistake
``` shell
git reflog
# you will see a list of every thing you've
# done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
git reset HEAD@{index}
# magic time machine
```

## forgot to add changes to last commit
``` shell
# make your change
git add . # or add individual files
git commit --amend --no-edit
# now your last commit contains that change!
# WARNING: never amend public commits

# OR

# make your change
git add .
git commit
git rebase -i
```

## need to change commit msg
``` shell
git commit --amend
```

## accidentally committed to master branch
``` shell
# create a new branch from the current state of the master branch
git branch some-new-branch-name

# remove the last commit from the master branch
git reset HEAD~ --hard
# OR
# remote n commits from the master branch if needed
git reset HEAD@{n}

# checkout the new branch and voila
git checkout some-new-branch-name
```

## accidentally committed to the wrong branch
``` shell
# OPTION 1
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git stash
# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here";
# now your changes are on the correct branch
```

``` shell
# OPTION 2
git checkout name-of-the-correct-branch
# grab the last commit to master
git cherry-pick master
# delete it from master
git checkout master
git reset HEAD~ --hard
```

## diff staged files
``` shell
git diff --staged
```

## revert to old commit
``` shell
# find the commit you need to undo
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git revert [saved hash]
# git will create a new commit that undoes that commit
# follow prompts to edit the commit message
# or just save and commit
```

## undo changes to a file
``` shell
# find a hash for a commit before the file was changed
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git checkout [saved hash] -- patqh/to/file
# the old version of the file will be in your index
git commit -m "Wow, you don't have to copy-paste to undo"
```