const Staff = require('../model/employersModel')
const Driver = require('../model/driverModel')
const Users = require('../model/sign-up')

//! employers controller
exports.get_employers =async (req, res) => {
	try {
		let staffs = await Staff.find()
		
		res.render('employers', {staffs});
	} catch (err) {
		console.log(err);
	}
};
exports.get_add_employer = (req, res) => {
	res.render('add-employer');
};

exports.post_add_employer = async (req, res) => {
	const staff = new Staff({
		name: req.body.name,
		address: req.body.address,
		gender: req.body.gender,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		await staff.save()
		res.redirect('/employees-page')
	} catch (error) {
		console.log(error);
	}
};


//* delete staff 
exports.delete_staff = async (req,res) =>{
	try {
		await Staff.findByIdAndDelete(req.params.id)
		res.redirect('/employees-page');
	} catch (err) {
		console.log(err);
	}
}


//! staff controller

exports.get_staff_log = (req,res) =>{
	res.render('../views/staff/staff-log');
}

exports.post_staff_log =async (req,res) =>{
	
	try {
		let staffEmail = await Staff.findOne({email:req.body.email})
		let staffPwd = await Staff.findOne({password:req.body.password})
		if (staffEmail && staffPwd) {
			res.redirect(`staff/${staffEmail.id}`)
		}else{
			res.send('wrong email or password')
		}
	} catch (err) {
		console.log(err);
	}
}

exports.get_staff = async (req,res) =>{
	try {
		let staff = await Staff.findById(req.params.id)
		let users = await Users.find()
		res.render('../views/staff/staff-page',{staff,users})
	} catch (err) {
		
	}
}


//! driver controller

exports.get_add_driver = (req,res) =>{
	res.render('add-driver')
}

exports.post_driver = async (req,res) =>{
	try {
	let driver = new Driver({
		name: req.body.name,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		gender: req.body.gender,
		address: req.body.address,
		licence: req.body.licence,	
		password: req.body.password,
	});		
		await driver.save()
		
	} catch (err) {
		res.render('add-driver')
		console.log(err);
	}
}

exports.get_drivers =async (req,res) =>{
	try {
		let drivers = await Driver.find()
		res.render('drivers',{drivers})
	} catch (err) {
		console.log(err);	
	}
}

exports.delete_driver = async (req,res) =>{
	try {
		await Driver.findByIdAndDelete(req.param.id)
		res.redirect('/drivers')
	} catch (err) {
		console.log(err);
	}
}

exports.get_assign_driver = async(req,res) =>{
	try {
		let drivers = await Driver.find()
		let user = await Users.findById(req.params.id)
		res.render('assign-driver',{user,drivers})
	} catch (err) {
		console.log(err);
	}
}

exports.patch_user = async (req,res) =>{
	
	try {
		let user = await Users.findByIdAndUpdate(req.params.id, {
			driver: req.body.driver
		}, {new:true})	
		res.status(201).send('driver assign')
	} catch (err) {
		console.log(err);
	}
}