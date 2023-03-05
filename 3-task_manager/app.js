const express = require('express');
const app = express();
const tasks = require('./Routes/tasks');

const port = 5000;

//middleware
app.use(express.json());

// route to be created
app.get('/hello', (req, res) => res.send('Task Management Application'));

// app.get('/api/v1/tasks')             -   get all tasks
app.use('/api/v1/tasks', tasks);

// app.post('/api/v1/tasks')            -   create a new task
// app.get('/api/v1/tasks/:id')         -   get single task
// app.patch('/api/v1/tasks/:id')       -   update single task
// app.delete('/api/v1/tasks/:id')      -   delete task

app.listen(port, console.log(`server is listening on port ${port}...`));
