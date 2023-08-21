const User = require('../models/User')
const { UnauthenticatedError} = require('../errors')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    // check header
    const authHeader = req.header.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) throw new UnauthenticatedError('Authentication invalid')

    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, 'JWT_SECRET')
        // attach name to job routes if necessary
        req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {
        console.log(error)
        // throw new UnauthenticatedError('Authentication invalid')
    }
}