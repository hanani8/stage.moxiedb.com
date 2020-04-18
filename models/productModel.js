const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  casNumber: {
    type: Schema.Types.Mixed,
    
  },
  productType: {
    type: String,
    // required: true
  },
  compositionMolecule: {
    type: Schema.Types.Mixed,
    // required: true
  },
  therapeuticCategory: {
    type: String,
    // required: true
  },
  dosageForm: {
    type: String,
    // required: true
  },
  ndc: {
    type: Schema.Types.Mixed,
    // required: true
  },
  packing: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Products", ProductSchema);
