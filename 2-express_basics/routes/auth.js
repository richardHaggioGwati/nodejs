/**
 * ? express router
 */

const express = require('express')
const router = express.Router();

let { people } = require('../../data');

/**
 * ? login page to except form submission => POST
 * ! if the proper http verb is not provided then the path  will fail
 */
router.post('/', (req, res) => {
	const { name } = req.body;
	if (name) {
		people.push({ id: Math.random(), name });
		// res.status(201).json({success: true, data: people});
		return res.status(200).send(`Welcome to ${name}`);
	}
	res.status(401).send('<h1>Name not found<h1>');
});

module.exports = router