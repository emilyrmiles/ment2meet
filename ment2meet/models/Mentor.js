const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  major: {
    type: String
  },
  position: {
    type: String
  },
  company: {
    type: String
  },
  pronounce: {
    type: String
  },
  passion: {
    passion1: {
      type: String
    },
    passion2: {
      type: String
    },
    passion3: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);