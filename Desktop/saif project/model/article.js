const mongoose = require('mongoose');
// const { article } = require('../controller/controller');

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    articleBody:{
        type:String,
        require:true
    }
})

const articleModel = mongoose.model('article', articleSchema)

module.exports = articleModel;