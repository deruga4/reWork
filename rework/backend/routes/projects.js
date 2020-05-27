const router = require('express').Router()
let Project = require('../models/project')

router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const startDate = Date.parse(req.body.startDate)
    const endDate = Date.parse(req.body.endDate)
    const status = req.body.status
    
    const newProject = new Project({
        name, 
        description,
        startDate,
        endDate,
        status
        
    })

    newProject.save()
        .then(() => res.json('Project added!'))
        .catch(err => {
            console.log('Error: ' + newProject)
            res.status(400).json('Error: ' + err)
    })
})

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted'))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
        .then(project => {
            project.name = req.body.name
            project.description = req.body.description
            project.status = req.body.status

            project.save()
                .then(() => res.json('Project updated!'))
                .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router