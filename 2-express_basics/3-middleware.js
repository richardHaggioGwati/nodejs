/**
 * ! request => middleware => response
 * ? middleware is between the request and the response and runs each time the request is made
 */

const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// setting middleware fpr every route

// middleware should be placed at the beginning of the app if you need to apply it to every route

// optionally you can have a route as apart of use, then the middleware will be applied to all
// the routes that follow the route you passed in.

// in order to execute multiple middleware you pass an array to the use method
app.use([logger, authorize]);

// the middleware is passed in between the route and callback function
app.get('/', (req, res) => {
	res.send('<h1>Welcome</h1>');
});

app.get('/about', (req, res) => {
	res.send('<h1>About page</h1>');
});

app.get('/login', (req, res) => {
	res.send('<h1>Login</h1>');
})

app.get('/logout', (req, res) => {
	res.send('<h1>Logout</h1>');
})

app.listen(5000, () => {
	console.log('listening on port 5000...');
});
