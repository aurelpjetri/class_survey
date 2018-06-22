# Class Survey
Angular web application for issuing and completing on-site surveys.

## Install node_modules
Run `npm install` to install the needed modules inside the directory class-survey.

## Setup the [JSON server](https://github.com/typicode/json-server)
`cd path/to/fake_server`
`npm install --prefix ./ json-server` // use this command install the json-server module inside the directory
`node server.js` // launch the 'fake' server

It is possible to try the server using the below command
curl -d '{"matriculation":"PROF001", "password":"001"}' -H "Content-Type: application/json" -X POST http://localhost:3000/authentication
