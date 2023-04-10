const Task = require('../modals/Tasks');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

// controllers
const getAllTasks = asyncWrapper(async (req, res, next) => {
	const tasks = await Task.find({});
	res.status(200).send({ tasks });
});

const getSingleTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({ _id: taskId });
	
	if (!task) if (!task) createCustomError(`no task not found with id: ${taskId}`, 404);

	res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params;
	const task = await Task.findByIdAndDelete({ _id: taskId });
	
	if (!task) createCustomError(`no task not found with id: ${taskId}`, 404);

	res.status(200).json({ tasks });
});

/**
 * findOneAndUpdate - 	takes a object as it's third argument
 * 						new - ensures that the object returned is new
 *
 */
const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskId } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!task) createCustomError(`no task not found with id: ${taskId}`, 404);

	res.status(200).json({ task });
});

module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
