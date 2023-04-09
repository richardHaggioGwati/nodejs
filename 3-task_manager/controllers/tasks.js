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

const getSingleTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });
		if (!task)
			return res
				.status(404)
				.json({ msg: `no task not found with id: ${taskId}` });

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findByIdAndDelete({ _id: taskId });
		if (!task)
			return res
				.status(404)
				.json({ msg: `no task not found with id: ${taskId}` });

		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

/**
 * findOneAndUpdate - 	takes a object as it's third argument
 * 						new - ensures that the object returned is new
 * 						 
 */
const updateTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task)
			return res
				.status(404)
				.json({ msg: `no task not found with id: ${taskId}` });

		res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask,
};
