const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var RequestSchema = new Schema({
    documentNames: [{ type: String }],
    vendorOrg: { type: String },
    products: [{ type: Schema.Types.Mixed }],  
    market: { type: String },
    date: { type: Date },
    criticality: { type: String },
    comment: { type: String },
    allComments: [{ type: String }],
    respondentName: { type: String },
    respondentEmail: { type: String },
    respondentContact: { type: Number },
    requesterName:{type:String},
    uploadDate: {
        type: Date,
        default: Date.now
    },
    requestStatus: {type: String},
    uploads:[{type: String}]
});

module.exports = mongoose.model("Requests", RequestSchema);
