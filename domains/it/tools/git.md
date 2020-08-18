# Git Guide

#### Table of contents

* [Foundations](#foundations)
* [Areas](#areas)
* [Stashing](#stashing)
* [References](#references)
* [Commits](#commits)
    * [Conventional Commits](#conventional-commits)
    * [ChangLog](#changlog)
* [Branches](#branches)
* [Merging](#merging)
* [History](#history)
* [Diffs](#diffs)
* [Cleanup](#cleanup)
* [Rebase](#rebase)
* [Amend](#rebase)
* [Remotes](#remotes)

&nbsp;
# Foundations
Git stores information as key-value pairs. __Values__ are the data and __Keys__ are __SHA1__ hashes of that data.




&nbsp;
# Areas





&nbsp;
# Stashing





&nbsp;
# References





&nbsp;
# Commits


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

&nbsp;
# Branches





&nbsp;
# Merging

To update a local branch with recent changes from master
``` shell
# if branch is local and hasn't been pushed to remote yet
git checkout local-branch
git rebase master

# if your branch has already been pushed to remote
git checkout aq
git merge origin/master
```




&nbsp;
# History


```bash
# one local to multiple remotes and problem with unrelated history
git pull --allow-unrelated-histories
```



&nbsp;
# Diffs





&nbsp;
# Cleanup





&nbsp;
# Rebase





&nbsp;
# Amend





&nbsp;
# Remotes


&nbsp;
# Git Flow
Sources:
* [atlassian.com](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

A branching model for git repositories that serves as a robust framework for managing projects.



