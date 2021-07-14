const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  major: {
    type: String,
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
  mentorwork: {
    work1: {
      type: String
    },
    work2: {
      type: String
    },
    work3: {
      type: String
    },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
