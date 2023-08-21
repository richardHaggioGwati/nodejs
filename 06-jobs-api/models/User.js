const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a valid name'],
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid name'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6,
    }
})

// pre is running before hash password is stored in the database
UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Adding a function to the schema
UserSchema.method.createJWT = function () {
    return jwt.sign({userId: this.user._id, name: this.user.name}, 'JWT_SECRET', {
        expiresIn: '30d'
    })
}

// Validate Password
UserSchema.method.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)