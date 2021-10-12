const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    gender:{
        type: String,
        require:true
    },
    address:{
        type:String,
        require: true
    },
    pickDate : String,
    pickTime: String,
    pickAddress: String,
    dropDate : String,
    dropTime: String,
    dropAddress: String,
    createAt:{
        type: Date,
        default:Date.now()
    },
    driver:String
})

const user = mongoose.model('user', userSchema)

module.exports = user