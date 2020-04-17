# Linux reference


#### Table of contents

* [Tool Reference](#quotes)
* [Command Reference](#quotes)
* [MISC](#misc)
    * [Key Authentication Setup](#Key-Authentication-Setup)

&nbsp;
# Tool Reference
Check if package exists: https://packages.ubuntu.com/


&nbsp;
# Command Reference


&nbsp;
# MISC

## Key Authentication Setup
``` shell
# 1. Generate the private and public Key
ssh-keygen -t rsa
# 2. Copy public key to target server
scp id_rsa.pub test@some.server.como:./
# 3. Create .ssh directory on target server if it doesn't exist
mkdir ./.ssh
# 4. Copy public key to .ssh/authorized_keys file on target
cp ./id_rsa.pub ./.ssh/authorized_keys
```