const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require("./middleware/not_Found")
const errorHandlerMiddleware = require("./middleware/error-handler")
require('dotenv').config();


//middleware
app.use(express.static("./public"))
app.use(express.json());


// app.get('/api/v1/tasks')             -   get all tasks
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
    try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, console.log(`server is listening on port ${port}...`));
	} catch (err) {
		console.log(err);
	}
};

start();
