const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: true, enum: ['Not Started', 'In Progress', 'Finished']},
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: false}
},{
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task