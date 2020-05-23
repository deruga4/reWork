const router = require('express').Router()
let Task = require('../models/task')

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.username
    const description = req.body.description
    const status = req.body.status

    const newTask = new Task({
        name, 
        description,
        status
    })

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.name = req.body.name
            task.description = req.body.description
            task.status = req.body.status

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router