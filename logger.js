/**
 *
 * @param {request made by the user} req
 * @param {you can option change the response to the user} res
 * @param {can be called to pass the middleware} next
 *
 * ! ensure that you always pass the middleware to the response by calling next() at the end
 * ! otherwise you will have the browser will be stuck with the middleware (loading)
 */
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getTime();
	console.log(method, url, time);
	next();
};

module.exports = logger;