const express = require('express');
const app = require('express')();
const mongoose = require('mongoose');
const ejs = require('ejs');
const routes = require('./routes/routes')
// middlewares
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(routes)

// connect to mongoose database
mongoose.connect('mongodb://127.0.0.1:27017/ustaz-project')
.then(result=> console.log('connect'))
.catch(err => console.log(err))

app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(4000)
