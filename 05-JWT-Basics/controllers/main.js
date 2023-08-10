const { BadRequest} = require('../errors')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {username, password} = req.body

    if (!username || !password) throw new BadRequest('Please provide a valid email and password')

    //just for demo, normally provided by DB!!!
    const id = Date.now()

    // try to keep payload small
    // JWT key has to be more complex
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        msg: `Hello ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login, dashboard
}
