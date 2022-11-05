var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PatientSchema = new Schema({
	first_name: {type: String},
	last_name: {type: String},
	email: {type: String, required: true},
	mobile: {type: String},
	gender: {type: String},
	age: {type: Number},
	address: {type: String},
	condition: {type: String, enum: ['normal', 'critical'], default:'normal'},
}, {timestamps: true});

module.exports = mongoose.model("Patient", PatientSchema);