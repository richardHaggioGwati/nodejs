/**
 * ? express router
 */

const express = require('express');
const router = express.Router();

let { people } = require('../../data');


// default browser option => Get
router.get('/', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

/**
 *? working with js posting data => POST: Insert
 *! if the proper http verb is not provided then the path  will fail
 */
router.post('/', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.send({ success: false, message: 'please enter a name' });
	}
	res.status(201).json({ success: true, person: name });
});

/**
 *? Api testing with Postman
 */
router.post('/postman', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.send({ success: false, message: 'please enter a name' });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

/**
 * ? Put method => update
 */
router.put('/:id', (req, res) => {
	const { name } = req.body;
	const { id } = req.params;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res
			.status(404)
			.json({ success: false, message: `No such person exit's` });
	}

	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(200).json({ success: true, data: newPeople });
});

/**
 * ? Delete verb => remove 🤿
 */
router.delete('/:id', (req, res) => {
	const id = req.params.id;

	const person = people.find((person) => person.id === Number(id));

	if (!person) {
		return res.status(404).json({ success: false, message: 'Invalid user id' });
	}

	const newPeople = people.filter((person) => person.id !== Number(id));
	res.status(200).json({ success: true, message: newPeople });
});


module.exports = router
