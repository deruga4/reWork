const router = require('express').Router()
let User = require('../models/user')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/register').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname

    const newUser = new User({
        username,
        password,
        firstname,
        lastname,
    })

    newUser.save()
        .then(() => res.json('User registered!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username
            user.password = req.body.password
            user.firstname = req.body.firstname
            user.lastname = req.body.lastname

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router