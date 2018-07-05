# Class Survey
Angular web application for issuing and completing on-site surveys.

## Disclaimer
This is a demo project focused on testing [Angular2+](https://angular.io/) and [NativeScript](https://docs.nativescript.org/) and it is possible that some of the packages used are not updated therefore this can produce security vulnerabilities.

**In general we don't implement any security procedure at all.**

## Install node_modules
Run `npm install` to install the needed modules inside the directory class-survey.

## Setup the [JSON Server](https://github.com/typicode/json-server)
- `cd path/to/fake_server`
- `npm install --prefix ./ json-server`
- `node server.js`

It is possible to try the server using the command
`curl -d '{"matriculation":"PROF001", "password":"001"}' -H "Content-Type: application/json" -X POST http://localhost:3000/authentication`
