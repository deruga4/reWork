const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: true, enum: ['Not Started', 'In Progress', 'Finished']},
    project: {type: Schema.Types.ObjectId, ref: 'Project'}
},{
    timestamps: true,
})

const Task = mongoose.model('Project', taskSchema)
module.exports = Task