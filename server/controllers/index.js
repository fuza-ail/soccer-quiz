const { User, Room } = require('../models')

class Controller {

    static createUser(req, res) {
        let { name } = req.body
        User.create(name)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error'
                })
            })
    }

    static getUser(req, res) {
        User.findAll()
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Internal Server Error'
                })
            })
    }
}

module.exports = Controller