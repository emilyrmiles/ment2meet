const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  questions: {
    question1: {
      type: String
    },
    question2: {
      type: String
    },
    question3: {
      type: String
    },
    question4: {
      type: String
    },
  },
  mentorpassion: {
    option1: {
      type: String
    },
    option2: {
      type: String
    },
    option3: {
      type: String
    },
  },
  mentorwork: {
    option1: {
      type: String
    },
    option2: {
      type: String
    },
    option3: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
