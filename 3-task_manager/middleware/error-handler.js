const { CustomError } = require('../errors/custom-error');

const errorHandlerMiddleware = (error, req, res, next) => {
	if (error instanceof CustomError)
        return res.status(500).json({ msg: error.message });
    
	return res.status(error.status).json({ msg: error.message });
};

module.exports = errorHandlerMiddleware;
