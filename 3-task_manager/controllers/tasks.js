const Task = require('../modals/Tasks');

// controllers
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).send({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getSingleTask = (req, res) => {
	res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = (req, res) => {
	res.send('update tasks');
};

const deleteTask = (req, res) => {
	res.send('delete tasks');
};

module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
