const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 5000;

//middleware
app.use(express.static("./public"))
app.use(express.json());

// route to be created
app.get('/hello', (req, res) => res.send('Task Management Application'));

// app.get('/api/v1/tasks')             -   get all tasks
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, console.log(`server is listening on port ${port}...`));
	} catch (err) {
		console.log(err);
	}
};

start();
