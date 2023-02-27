/**
 * ? when chaining if statements, it's important to make sure to use else if statements so that the other conditions are not rendered as false
 */

// HTTP Module
const http = require('http');

const server = http.createServer((request, response) => {
	if (request.url === '/') {
		response.write(`<h1>Welcome to our home page</h1>
        <a href="/about"> more about us </a>
    `);
		response.end();
	} else if (request.url === '/about') {
		response.write(`<h1>Learn all about us</h1>
        <a href="/"> travel back home </a>
    `);
		response.end();
	} else {
		response.write(`<h1> Oops</h1>
			<p>We can't seem to find the page you are looking for :(</p>
			<a href="/"> travel back home </a>
		`);
		response.end();
	}
});

server.listen(5000);
