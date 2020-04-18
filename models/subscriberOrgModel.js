const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const subscriberOrgSchema = new Schema({
	name: {type: String},
	products:[
	{type:String}
	],
	Admin:{name:{type:String},role:{type:String},email:{type:String},orgName:{type:String}}
})

module.exports = mongoose.model("SubscriberOrgs", subscriberOrgSchema);