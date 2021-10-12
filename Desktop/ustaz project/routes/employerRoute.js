    const { Router } = require('express');
const route = Router();
const employerController = require('../controller/employerCont')

route.get('/employees-page', employerController.get_employers);

route.get('/add-employer', employerController.get_add_employer);

route.post('/add-employer', employerController.post_add_employer);

route.delete('/delete-staff/:id', employerController.delete_staff);

//! staff routes

route.get('/staff-log', employerController.get_staff_log)
route.post('/staff-log', employerController.post_staff_log)
route.get('/staff/:id', employerController.get_staff)

//! driver route

route.get('/add-driver', employerController.get_add_driver)
route.post('/add-driver', employerController.post_driver)
route.get('/drivers', employerController.get_drivers)
route.patch('/patchUser/:id', employerController.patch_user)
route.delete('/driver/:id', employerController.delete_driver)
route.get('/assign-driver/:id', employerController.get_assign_driver)


module.exports = route