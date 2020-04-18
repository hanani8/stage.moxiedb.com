const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String },
    userName: { type: String },
    contactNumber: { type: Number},
    role: { type: String },
    organization: { type: String },
    products: [],
    canHeSendRequest: { type: Boolean },
    canHeUploadDocument: { type: Boolean },
    sentRequests: [],
    receivedRequest: [],
    uploadedDocuments: [],
    downloadedDocuments: [],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Users", UserSchema);
