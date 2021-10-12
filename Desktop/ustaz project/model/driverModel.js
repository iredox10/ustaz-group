const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	address: {
		type: String,
		require: true,
	},
	gender: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	phoneNumber: {
		type: String,
		require: true,
	},
	licence: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
});

const driver = mongoose.model('driver', driverSchema);

module.exports = driver;
