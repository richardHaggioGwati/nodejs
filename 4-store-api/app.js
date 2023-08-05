require("dotenv").config()
require("express-async-errors")

const connectDB = require("./db/connect")
const productsRouter = require("./routes/products")

express = require("express")
app = express()

const errorMiddleware = require("./middleware/error-handler")
const notFoundMiddleware = require("./middleware/not-found")

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(errorMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        // connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
