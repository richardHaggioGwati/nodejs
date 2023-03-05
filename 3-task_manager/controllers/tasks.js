// controllers

const getAllTasks = (req, res) => {
    res.send("get tasks")
}

const getSingleTask = (req, res) => {
    res.json({id: req.params.id})
}

const createTask = (req, res) => {
    res.send("create tasks")
}

const updateTask = (req, res) => {
    res.send("update tasks")
}

const deleteTask = (req, res) => {
    res.send("delete tasks")
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,
}