const mongoose = require("mongoose");

const susbcriberSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes._id,
  },
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", susbcriberSchema);
