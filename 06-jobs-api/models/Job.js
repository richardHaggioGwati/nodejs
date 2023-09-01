const mongoose = require('mongoose')

const JobsScheme = new mongoose.Schema({
    company: {
        type:String,
        required: [true, 'Please provide Job title'],
        maxLength: 50,
    },
    position: {
        type:String,
        required: [true, 'Please provide Job title'],
        maxLength: 100
    },
    status: {
        type:String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
}, {timestamps: true})

module.exports = mongoose.model('Jobs', JobsScheme)
