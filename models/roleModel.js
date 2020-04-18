const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
	name: {type: String},
	organization:
	{type:String},
	role:{type:String},
	employeeID:{type:String},
	customerOf:{type:String},
	Admin:{type:String},
	phone:{type:Number},
	department:{type:String},
	designation:{type:String},
	email:{type:String},
	products:[{type:String}],
	users:[{type:String}]
})

module.exports = mongoose.model("Roles", roleSchema);