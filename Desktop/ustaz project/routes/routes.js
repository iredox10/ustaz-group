const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')

// sign in route
route.get('/sign-in',controller.get_log )
route.get('/sign-up',controller.post_log )

// sign up route
route.post('/sign-up', controller.post_sign)

// single user 
route.get('/:id', controller.get_user)

// booking route
route.get('/booking', controller.get_booking_page)
module.exports = route