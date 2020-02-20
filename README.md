obc
===

IO app admin cli for onboarding

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/obc.svg)](https://npmjs.org/package/obc)
[![Downloads/week](https://img.shields.io/npm/dw/obc.svg)](https://npmjs.org/package/obc)
[![License](https://img.shields.io/npm/l/obc.svg)](https://github.com/pagopa/io-cli-admin/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g obc
$ obc COMMAND
running command...
$ obc (-v|--version|version)
obc/0.0.0 darwin-x64 node-v12.14.0
$ obc --help [COMMAND]
USAGE
  $ obc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`obc hello`](#obc-hello)
* [`obc help [COMMAND]`](#obc-help-command)
* [`obc organization:create IPACODE`](#obc-organizationcreate-ipacode)
* [`obc organization:get [IPACODE]`](#obc-organizationget-ipacode)
* [`obc organization:link IPACODE`](#obc-organizationlink-ipacode)
* [`obc organization:list`](#obc-organizationlist)
* [`obc organization:unlink IPACODE`](#obc-organizationunlink-ipacode)
* [`obc organization:update IPACODE`](#obc-organizationupdate-ipacode)
* [`obc request:create`](#obc-requestcreate)
* [`obc request:get [REQUESTID]`](#obc-requestget-requestid)
* [`obc request:list`](#obc-requestlist)
* [`obc service:create`](#obc-servicecreate)
* [`obc service:disable SERVICEID`](#obc-servicedisable-serviceid)
* [`obc service:get SERVICEID`](#obc-serviceget-serviceid)
* [`obc service:link SERVICEID`](#obc-servicelink-serviceid)
* [`obc service:list`](#obc-servicelist)
* [`obc service:logo SERVICEID`](#obc-servicelogo-serviceid)
* [`obc service:regenerate-keys SERVICEID`](#obc-serviceregenerate-keys-serviceid)
* [`obc service:unlink SERVICEID`](#obc-serviceunlink-serviceid)
* [`obc service:update`](#obc-serviceupdate)
* [`obc user:create EMAIL`](#obc-usercreate-email)
* [`obc user:get EMAIL`](#obc-userget-email)
* [`obc user:list`](#obc-userlist)
* [`obc user:update EMAIL`](#obc-userupdate-email)

## `obc hello`

describe the command here

```
USAGE
  $ obc hello

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ io-ops hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/hello.ts)_

## `obc help [COMMAND]`

display help for obc

```
USAGE
  $ obc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `obc organization:create IPACODE`

Create an organization

```
USAGE
  $ obc organization:create IPACODE

ARGUMENTS
  IPACODE  ipa code for the organization

OPTIONS
  --legal.email=legal.email      (required) email of the legal rapresentative
  --logo=logo                    (required) file path or url of the logo
  --manager.email=manager.email  (required) email of the manager
  --org.id=org.id                (required) id of the organization
  --org.pec=org.pec              organization pec
```

_See code: [src/commands/organization/create.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/create.ts)_

## `obc organization:get [IPACODE]`

Get the organization info by passing an ipa code

```
USAGE
  $ obc organization:get [IPACODE]

ARGUMENTS
  IPACODE  the ipa code of the organization
```

_See code: [src/commands/organization/get.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/get.ts)_

## `obc organization:link IPACODE`

Link an account to an organization

```
USAGE
  $ obc organization:link IPACODE

ARGUMENTS
  IPACODE  ipa code for the organization

OPTIONS
  --role=legal|manager|developer  (required) role of the user
  --user=user                     (required) email of the user
```

_See code: [src/commands/organization/link.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/link.ts)_

## `obc organization:list`

Get list of organizations

```
USAGE
  $ obc organization:list
```

_See code: [src/commands/organization/list.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/list.ts)_

## `obc organization:unlink IPACODE`

Unlink an account to an organization

```
USAGE
  $ obc organization:unlink IPACODE

ARGUMENTS
  IPACODE  ipa code for the organization

OPTIONS
  --user=user  (required) email of the user
```

_See code: [src/commands/organization/unlink.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/unlink.ts)_

## `obc organization:update IPACODE`

Update an organization

```
USAGE
  $ obc organization:update IPACODE

ARGUMENTS
  IPACODE  ipa code for the organization

OPTIONS
  --legal.email=legal.email      (required) email of the legal rapresentative
  --logo=logo                    (required) file path or url of the logo
  --manager.email=manager.email  (required) email of the manager
  --org.id=org.id                (required) id of the organization
  --org.pec=org.pec              organization pec
```

_See code: [src/commands/organization/update.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/organization/update.ts)_

## `obc request:create`

Create a request for membership agreement or request delegation

```
USAGE
  $ obc request:create

OPTIONS
  --file=file                    (required) file path of a pdf file
  --legal.email=legal.email      (required) email of the legal rapresentative
  --manager.email=manager.email  (required) email of the manager
  --org.id=org.id                (required) id of the organization
  --org.pec=org.pec              organization pec
```

_See code: [src/commands/request/create.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/request/create.ts)_

## `obc request:get [REQUESTID]`

Get the request by passing a requestId

```
USAGE
  $ obc request:get [REQUESTID]

ARGUMENTS
  REQUESTID  the id of the request
```

_See code: [src/commands/request/get.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/request/get.ts)_

## `obc request:list`

Get list of requests, you can filter optionally by org and user flags

```
USAGE
  $ obc request:list

OPTIONS
  -o, --org=org    ipaCode of the organization
  -u, --user=user  email of the user
```

_See code: [src/commands/request/list.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/request/list.ts)_

## `obc service:create`

Create a service

```
USAGE
  $ obc service:create

OPTIONS
  --authorized_cidrs=authorized_cidrs                  Allowed source IPs or CIDRs for this service. String separated by
                                                       , of single IP or a range of IPs and can be empty

  --authorized_recipients=authorized_recipients        If non empty, the service will be able to send messages only to
                                                       these fiscal codes. Fiscal code format

  --department_name=department_name                    (required) Name of the department of the organization

  --logo=logo                                          File path or url of the service logo

  --organization_fiscal_code=organization_fiscal_code  (required) Name of the organization

  --organization_name=organization_name                (required) Name of the organization

  --service_id=service_id                              (required) Id of the service

  --service_name=service_name                          (required) Name of the service
```

_See code: [src/commands/service/create.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/create.ts)_

## `obc service:disable SERVICEID`

Disable a service

```
USAGE
  $ obc service:disable SERVICEID

ARGUMENTS
  SERVICEID  id of the service
```

_See code: [src/commands/service/disable.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/disable.ts)_

## `obc service:get SERVICEID`

Get the service by serviceId

```
USAGE
  $ obc service:get SERVICEID

ARGUMENTS
  SERVICEID  id of the service
```

_See code: [src/commands/service/get.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/get.ts)_

## `obc service:link SERVICEID`

Link a service to an organization

```
USAGE
  $ obc service:link SERVICEID

ARGUMENTS
  SERVICEID  id of the service

OPTIONS
  --org=org  (required) ipa code of the organization
```

_See code: [src/commands/service/link.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/link.ts)_

## `obc service:list`

Get list of services, you can filter optionally by org and user flags

```
USAGE
  $ obc service:list

OPTIONS
  -o, --org=org    ipaCode of the organization
  -u, --user=user  email of the user
```

_See code: [src/commands/service/list.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/list.ts)_

## `obc service:logo SERVICEID`

Update service data with base64 of the logo

```
USAGE
  $ obc service:logo SERVICEID

ARGUMENTS
  SERVICEID  id of the service

OPTIONS
  --logo=logo  (required) Path of logo image to be converter into base64
```

_See code: [src/commands/service/logo.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/logo.ts)_

## `obc service:regenerate-keys SERVICEID`

Regenerate keys for a service

```
USAGE
  $ obc service:regenerate-keys SERVICEID

ARGUMENTS
  SERVICEID  id of the service
```

_See code: [src/commands/service/regenerate-keys.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/regenerate-keys.ts)_

## `obc service:unlink SERVICEID`

Link a service to an organization

```
USAGE
  $ obc service:unlink SERVICEID

ARGUMENTS
  SERVICEID  id of the service

OPTIONS
  --org=org  (required) ipa code of the organization
```

_See code: [src/commands/service/unlink.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/unlink.ts)_

## `obc service:update`

Create a service

```
USAGE
  $ obc service:update

OPTIONS
  --authorized_cidrs=authorized_cidrs                  (required) Allowed source IPs or CIDRs for this service. String
                                                       separated by , of single IP or a range of IPs and can be empty

  --authorized_recipients=authorized_recipients        (required) If non empty, the service will be able to send
                                                       messages only to these fiscal codes. Fiscal code format

  --department_name=department_name                    (required) Name of the department of the organization

  --logo=logo                                          File path or url of the service logo

  --organization_fiscal_code=organization_fiscal_code  (required) Name of the organization

  --organization_name=organization_name                (required) Name of the organization

  --service_id=service_id                              (required) Id of the service

  --service_name=service_name                          (required) Name of the service
```

_See code: [src/commands/service/update.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/service/update.ts)_

## `obc user:create EMAIL`

Create a user

```
USAGE
  $ obc user:create EMAIL

ARGUMENTS
  EMAIL  email of the user

OPTIONS
  --name=name  (required) name of the user
```

_See code: [src/commands/user/create.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/user/create.ts)_

## `obc user:get EMAIL`

Get the user by email and return also the list of organization

```
USAGE
  $ obc user:get EMAIL

ARGUMENTS
  EMAIL  email of the user
```

_See code: [src/commands/user/get.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/user/get.ts)_

## `obc user:list`

Get list of users

```
USAGE
  $ obc user:list
```

_See code: [src/commands/user/list.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/user/list.ts)_

## `obc user:update EMAIL`

Update a user

```
USAGE
  $ obc user:update EMAIL

ARGUMENTS
  EMAIL  email of the user

OPTIONS
  --name=name  (required) name of the user
```

_See code: [src/commands/user/update.ts](https://github.com/pagopa/io-cli-admin/blob/v0.0.0/src/commands/user/update.ts)_
<!-- commandsstop -->
