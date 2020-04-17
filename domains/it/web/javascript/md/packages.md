# Useful NPM packages

#### Table of contents
* [meta](#meta)
* [moment](#moment)
* [nodemon](#nodemon)


# meta
__NPM__: [meta](https://www.npmjs.com/package/meta)\
__Concerns__: managing multiple projects
__Source__: [Patrick Lee Scott](https://medium.com/@patrickleet/mono-repo-or-multi-repo-why-choose-one-when-you-can-have-both-e9c77bd0c668)

Handles multiple repos through a meta repo.

``` shell
# installation
npm i -g meta

# creates a meta-repo in the current directory
#  -the creates a .meta json file that stores linked repositories
meta init

# push the meta repo to your github repository
git init
git add -A
git commit -m "init meta repo"
git remote add origin git@github.com:you/yourProject.git
git push -u origin master

# add project to the meta repo
#  -this will edit the .meta and .gitignore files
meta project add userService git@github.com:you/userService.git
meta project add graphqlService git@github.com:you/graphqlService.git
meta project add appService git@github.com:you/appService.git

# commit and push the changes
git commit -m "added projects"
git push -u origin master

# to clone a project
meta git clone git@github.com:you/yourProject.git

# sync additional repos specified in meta file
meta git update
```

# moment
__NPM__: [moment](https://www.npmjs.com/package/moment)\
__Concerns__: Dates

A popular library for parsing, validating, manipulating and formatting __dates__.

# nodemon
__NPM__: [nodemon](https://www.npmjs.com/package/nodemon)\
__Concerns__: Dev Tool

A tool that watches files and automatically restarts a node application if a file change is detected.
