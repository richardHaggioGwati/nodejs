/**
 * ? Read and write data using http verbs
 */

const express = require('express');
const app = express();
let { people } = require('./data');
// static assets
app.use(express.static('./express_basics/methods-public'));

//parse form data
app.use(express.urlencoded({ extended: false }));

// parsing json data
app.use(express.json());

// default browser option => Get
app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

/**
 *? working with js posting data => POST
 *! if the proper http verb is not provided then the path  will fail
 */
app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).send({success: false, message:'please enter a name'});
	}
	res.status(201).json({success: true, person: name});
});

/**O
 * ? login page to except form submission => POST
 * ! if the proper http verb is not provided then the path  will fail
 */
app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		people.push({ id: Math.random(), name });
		// res.status(201).json({success: true, data: people});
		return res.status(200).send(`Welcome to ${name}`);
	}
	res.status(401).send('<h1>Name not found<h1>');
});

app.listen(5000, () => {
	console.log('listening on port 5000...');
	1;
});
