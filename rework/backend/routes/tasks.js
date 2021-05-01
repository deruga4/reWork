const router = require('express').Router()
let Task = require('../models/task')

router.route('/').get((req, res) => {
    if (req.query.id){
        console.log(req.query.id)
        Task.find({project: req.query.id})
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    else{
        Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err))
    }
    
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const status = req.body.status
    const startDate = Date.parse(req.body.startDate)
    const endDate = Date.parse(req.body.endDate)
    const project = req.body.project

    const newTask = new Task({
        name, 
        description,
        status,
        startDate,
        endDate,
        project
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
            task.startDate = new Date(req.body.startDate)
            task.endDate = req.body.endDate === null ? null : new Date(req.body.endDate)

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router