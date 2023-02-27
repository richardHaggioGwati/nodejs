/**
 * ? When serving static sites, you can optionally dump all static files including index.html
 * ? into public and exclude the check for a '/' request. By default the browser will look
 * ? at public and serve the index.html
 */

const express = require('express');
const path = require('path');

const app = express();

// get all static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
	// add to static assets
	// SSR
});

app.get('*', (req, res) => {
	res.status(200).send('resource not found');
});

app.listen(5000, () => {
	console.log('listening on port 5000...');
});
