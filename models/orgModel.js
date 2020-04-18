const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrgSchema = new Schema({
    SubscriberName: { type: String },
    CustomerNames: [
    {name: {type: String}, 
    status: {type: String},
    products: 
    [
    {
        productName: {type:String},
    casNumber: {
    type: Schema.Types.Mixed}
    }
    ]
}
    ],
    Admin: {type: String},
    products: [{
  productName: {
    type: String,
    required: true
  },
  casNumber: {
    type: Schema.Types.Mixed,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  compositionMolecule: {
    type: Schema.Types.Mixed,
    required: true
  },
  therapeuticCategory: {
    type: String,
    required: true
  },
  dosageForm: {
    type: String,
    required: true
  },
  ndc: {
    type: Schema.Types.Mixed,
    required: true
  },
  packing: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}],
Users:[{
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
}],  

    uploadDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Orgs", OrgSchema);
