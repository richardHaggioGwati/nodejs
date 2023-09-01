const Jobs = require("../models/Job")
const {StatusCodes} = require("http-status-codes")
const {BadRequestError, UnauthenticatedError} = require("../errors")

const getAllJobs = async (req, res) => {
    const job = await Jobs.find({ createdBy: req.user.userId }).sort("createdAt")
    res.status(StatusCodes.OK).json({ job, length: job.length })
}

const getJob = async (req, res) => {
    res.send('Get job')
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Jobs.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
    res.send('Update job')
}

const deleteJob = async (req, res) => {
    res.send('Delete job')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
