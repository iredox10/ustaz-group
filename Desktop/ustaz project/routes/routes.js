const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')
const user = require('../model/sign-up')

// home page
route.get('/', (req, res) => {
	res.render('home');
});

route.post('/sign-up', controller.post_sign)
route.get('/admin', controller.admin)
route.get('/sign-in',controller.get_log )

route.get('/booking/:id', controller.get_booking_page)
route.patch('/booking/:id', controller.post_booking_page)

route.get('/user/:id', controller.get_user)


route.delete('/admin/:id',controller.delete_user)

route.post('/sign-in', controller.post_log)


module.exports = route