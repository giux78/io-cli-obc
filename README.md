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
* [`obc hello [FILE]`](#obc-hello-file)
* [`obc help [COMMAND]`](#obc-help-command)

## `obc hello [FILE]`

describe the command here

```
USAGE
  $ obc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ obc hello
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
<!-- commandsstop -->
