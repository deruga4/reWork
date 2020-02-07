const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: Schema.Types.ObjectId, ref: 'UserType'}
},{
    timestamps: true,
})

const User = mongoose.model('Project', userSchema)
module.exports = User