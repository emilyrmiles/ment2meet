const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.user.id
      }).populate('user', ['name', 'avatar', 'major']);
  
      if (!profile) {
        return res.status(400).json({ msg: 'There is no profile for this user' });
      }
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

    // @route    POST api/profile
    // @desc     Create or update user profile
    // @access   Private

    router.post(
        '/',
        auth,
        async (req, res) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
      
          // destructure the request
          const {
            question1,
            question2,
            question3,
            question4,
            passion1, 
            passion2, 
            passion3,
            work1, 
            work2, 
            work3,
          } = req.body;
      
          // build a profile
          const profileFields = {};
          profileFields.user = req.user.id,
          profileFields.major = req.major,
      
          // Build questionsFields object
          profileFields.questions = {};
          if (question1) profileFields.questions.question1 = question1;
          if (question2) profileFields.questions.question2 = question2;
          if (question3) profileFields.questions.question3 = question3;
          if (question4) profileFields.questions.question4 = question4;

          profileFields.mentorpassion = {};
          if (passion1) profileFields.mentorpassion.passion1 = passion1;
          if (passion2) profileFields.mentorpassion.passion2 = passion2;
          if (passion3) profileFields.mentorpassion.passion3 = passion3;

          profileFields.mentorwork = {};
          if (work1) profileFields.mentorwork.work1 = work1;
          if (work2) profileFields.mentorwork.work2 = work2;
          if (work3) profileFields.mentorwork.work3 = work3;
      
          try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate(
              { user: req.user.id },
              { $set: profileFields },
              { new: true, upsert: true, setDefaultsOnInsert: true }
            );
            return res.json(profile);
          } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
          }
        }
      );

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
    try {
      const profiles = await Profile.find().populate('user', ['name', 'avatar', 'major']);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async ({ params: { user_id } }, res) => {
      try {
        const profile = await Profile.findOne({ user: user_id
        }).populate('user', ['name', 'avatar', 'major']);
        if (!profile) return res.status(400).json({ msg: 'Profile not found' });
        return res.json(profile);
      } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectID') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        return res.status(500).json({ msg: 'Server error' });
      }
    }
);

module.exports = router;