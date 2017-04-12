/**
 * A simple web app. Built with express (expressjs.com).
 */

 var express = require('express');
 var app = express();

 app.get('/', function (request, result) {
   result.send('Hello, world!');
 })

 app.listen(3000, function () {
   console.log('simple-site-nodejs listening on port 3000...')
 })
