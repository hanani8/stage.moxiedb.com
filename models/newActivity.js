const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const activitySchema = new Schema({
    at: { type: Schema.Types.ObjectId },
    requesterName: { type: String },
    respondentName: { type: String },
    interactions: { type: String },
    time: {
        type: Date,
     
    }

})

module.exports = mongoose.model("Newactivity", activitySchema);