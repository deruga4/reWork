const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: true, enum: ['Not Started', 'In Progress', 'Finished']}
},{
    timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project