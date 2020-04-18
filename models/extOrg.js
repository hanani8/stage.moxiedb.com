const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerOrgSchema = new Schema({
	name: {type: String},
	products:[
	{type:String}
	],
	customerOf:{type:String},
	Admin:{type:String}
})

module.exports = mongoose.model("CustomerOrgs", customerOrgSchema);