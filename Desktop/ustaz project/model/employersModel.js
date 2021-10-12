const mongoose = require('mongoose');

const employersShema = mongoose.Schema({
    name:{
        type : String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    gender: {
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
})

const employer = mongoose.model('employer', employersShema)

module.exports = employer