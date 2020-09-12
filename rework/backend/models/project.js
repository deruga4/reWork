const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: true, enum: ['Not Started', 'In Progress', 'Completed', 'On Hold']},
    startDate: {type:Date, required: true},
    endDate: {type:Date, required: false},
},{
    timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project