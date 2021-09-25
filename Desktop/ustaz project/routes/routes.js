const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')

route.get('/sign-in',controller.get_log )
route.post('/sign-up', controller.post_sign)

// single user 
route.get('/:id', controller.get_user)
module.exports = route