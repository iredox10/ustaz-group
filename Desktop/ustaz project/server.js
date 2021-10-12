const express = require('express');
const app = require('express')();
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override')
const routes = require('./routes/routes')
const employerRoute = require('./routes/employerRoute')
require('dotenv').config()
// middlewares
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(routes)
app.use(employerRoute)

// connect to mongoose database
mongoose
	.connect(process.env.DBS_URL)
	.then((result) => app.listen(process.env.PORT|| 4000))
	.catch((err) => console.log(err));




