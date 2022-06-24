# Python Command Line Tools

Source:
* [python docs - cmd](https://docs.python.org/3/using/cmdline.html)

#### Table of contents

* [](#)

&nbsp;
# Install and configure pyenv on MacOS

``` bash
# install pyenv
brew install pyenv

# install pyenv dependencies
brew install openssl readline sqlite3 xz zlib

# check available python versions
pyenv install --list

# install a specific version of python
pyenv install 3.9.6
pyenv install 3.10.0

# append to Shell configuration file
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi

# set global version
pyenv global 3.10.0

# set project version
pyenv local 3.9.6
```