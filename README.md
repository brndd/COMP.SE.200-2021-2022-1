[![Node.js CI](https://github.com/brndd/COMP.SE.200-2021-2022-1/actions/workflows/node.js.yml/badge.svg)](https://github.com/brndd/COMP.SE.200-2021-2022-1/actions/workflows/node.js.yml) [![Coverage Status](https://coveralls.io/repos/github/brndd/COMP.SE.200-2021-2022-1/badge.svg?branch=main&t=ls1iKt)](https://coveralls.io/github/brndd/COMP.SE.200-2021-2022-1?branch=main)

# Tested functions

The following functions are (to be) tested:

- isEmpty.js
- chunk.js
- camelCase.js
- difference.js
- defaultToAny.js
- countBy.js
- memoize.js
- filter.js
- castArray.js
- endsWith.js

# Usage

## Installation 

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Running the tests

You can run the tests with `npm test`. This will print the result of the tests as well as a coverage overview into your console.

You can produce full coverage output by running `npm run test-coverage`. This will create a directory called `coverage/` in the project directory, which will contain .html files for each function that contain human-readable coverage details similar to Coveralls.

## Writing tests

All .js files in the `test/` directory are automatically ran by `npm test` and the CI pipeline. The exact name of the file doesn't matter, but we have used the pattern `test_functionName.js`.

The tests use the [Mocha testing framework](https://mochajs.org/) in tandem with the [Chai assertion library](https://www.chaijs.com). While they are quite simple, you may want to read the [Chai documentation](https://www.chaijs.com/api/bdd/) for the assertion syntax.

# Container

The supplied Dockerfile can be used to build a container to run the tests in. It has been tested with Podman, but is very simple and should also work with Docker. Here are brief instructions for its usage:

**Build the container:**
`docker build . -t node:test`

This will build the container and assign it the tag `node:test`.

**Run the container:**
`docker run --rm node:test`

This will run the container, printing the test output to stdout, and then remove the container (but not the built image). If you wish to remove the built image, which you should do to free up disk space if you do not intend to test the application again, use `docker rmi node:test`. You may also wish to remove the base node image with `docker rmi node:16-alpine`.

**Run the container with interactive shell:**
`podman run -it --rm --security-opt label=disable -v $PWD:/usr/src/test node:test /bin/ash`

This is a bit of a mouthful, but will mount the current directory (which should be your development directory) as a volume in the container and give you an interactive shell in which to run `npm test` at your leisure. This is useful for development, as it lets you avoid rebuilding the container every time you want to re-run your tests.

Note the `--security-opt label=disable` option. This is necessary if the host system uses SELinux, as otherwise the container will be unable to access the volume if it is located in a restricted directory (eg. the user's home directory). A less convenient alternative to this is to omit this option and instead append `:Z` to the parameter of the `-v` option, causing podman to relabel the directory on the host system to make it accessible to containers, which works but is probably not something you want for a rather temporary development thing like this.

# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.
