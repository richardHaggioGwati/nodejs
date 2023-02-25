/**
 * ! this is for demonstration purposes only !
 */

const authorize = (req, res, next) => {
    const { user } = req.query
    if (!user) {
        req.user = { name: user, id: Math.random().toString }
        next()
    } else {
        res.status(401).send('Unable to authorize')
    }
}

module.exports = authorize;