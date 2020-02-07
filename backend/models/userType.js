const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userTypeSchema = new Schema({
    type: {type: String, required: true},
    read: {type: Boolean, required: true},
    write: {type: Boolean, required: true}
},{
    timestamps: true,
})

const UserType = mongoose.model('Project', userTypeSchema)
module.exports = UserType