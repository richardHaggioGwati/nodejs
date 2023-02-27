const express = require('express')

const app = express()

const port = 5000

// route
app.get('/hello', (req, res) => res.send('Task Management Application'))

app.listen(port,
    console.log(`server is listening on port ${port}...`)
)

