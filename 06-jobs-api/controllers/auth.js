const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError} = require('../errors')

const register = async (req, res) => {
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: {name: user.name}, token })
}

const login = async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) throw new BadRequestError('Please provide valid email or password')
    const user = await User.findOne({email})
    // compare password
    if (!user) throw new UnauthenticatedError('invalid credentials')

    const isPassword = user.comparePassword(password)
    if (!isPassword) throw new UnauthenticatedError('invalid credentials')

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}

module.exports = {
    login, register
}
