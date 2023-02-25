/**
 * ? Read and write data using http verbs
 */

const express = require('express');
const app = express();

// passing express router imports
const people = require('./express_basics/routes/people');
const auth = require('./express_basics/routes/auth')

// static assets
app.use(express.static('./express_basics/methods-public'));

//parse form data
app.use(express.urlencoded({ extended: false }));

// parsing json data
app.use(express.json());

// setup for express router
app.use('/api/people', people);

app.use('/login', auth)

app.listen(5000, () => {
	console.log('listening on port 5000...');
	1;
});
