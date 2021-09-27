const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    fullName : {
        type: String,
        require: true
    },
    schoolName : {
        type: String,
        require: true
    },
    address : {
        type: String,
        require: true
    },
    regNumber : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true,
        minlength: [6, 'password must be 6 or more characters']
    },
})

const registration = mongoose.model('register', registrationSchema)

module.exports = registration