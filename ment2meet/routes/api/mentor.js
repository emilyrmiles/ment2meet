const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Mentor = require('../../models/Mentor');

// @route    POST api/mentor
// @desc     Register mentor
// @access   Public
router.post(
  '/', 
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 8 or more characters'
  ).isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      name, 
      email, 
      major, 
      password,
      position,
      company,
      pronounce,
      passion1,
      passion2,
      passion3,
    } = req.body;

    try {
      //chech if mentor exists
      let mentor = await Mentor.findOne({ email });

      if (mentor) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Mentor already exists' }] });
      }

      //mentor gravatar
      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

      const passions = {};
      if (passion1) passions.mentorpassion.passion1 = passion1;
      if (passion2) passions.mentorpassion.passion2 = passion2;
      if (passion3) passions.mentorpassion.passion3 = passion3;

      mentor = new Mentor({
        name,
        email,
        avatar,
        major,
        password,
        passions,
        position,
      company,
      pronounce,
      });

      // hash password
      const salt = await bcrypt.genSalt(10);

      mentor.password = await bcrypt.hash(password, salt);

      //save the user to the database
      await mentor.save();

      //return web jsontoken
      const payload = {
        mentor: {
          id: mentor.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/mentors
// @desc     Get all mentors
// @access   public
router.get('/', auth, async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.json(mentors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


