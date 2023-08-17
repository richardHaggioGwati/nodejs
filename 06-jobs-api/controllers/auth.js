const register = async (req, res) => {
    res.json(req.body)
}

const login = async (req, res) => {
    res.send('Login user')
}

module.exports = {
    login, register
}
