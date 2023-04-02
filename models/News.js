const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  categogy: {
    type: String,
  },
  img: {
    type: Object,
    default: false,
  },
  author: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("New", newSchema);
