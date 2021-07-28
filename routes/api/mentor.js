const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const normalize = require('normalize-url');

const Mentor = require('../../models/Mentor');
const User = require('../../models/User');

// @route    GET api/mentors
// @desc     Get all mentors
// @access   public
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/mentor
// @desc     Get one mentor
// @access   public
router.get('/mentor_by_id/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!profile) return res.status(400).json({ msg: 'Mentor not found' });
    return res.json(mentor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    POST api/mentor
// @desc     Register mentor
// @access   Public
router.post('/', async (req, res) => {
  try {
    const { name, email, major, position, company, pronounce, passions} = req.body;
    const avatar = normalize(
      gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      }),
      { forceHttps: true }
    );

    newmentor = new Mentor({
      name, 
      avatar, 
      major, 
      position, 
      company, 
      pronounce, 
      passions, 
    });
    await newmentor.save();
    return res.json(newmentor);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/mentors
// @desc     Get filtered mentors
// @access   public    
router.get('/fliter', async function(req, res, next){
  try {
    let findArgs = {major: req.query.major};
    console.log(findArgs);
    const flitered = await Mentor.find(findArgs);
    console.log(flitered);
    fliteredMentor = flitered.filter(function(obj) {
      return obj.passions.passion1 === req.query.passion1 && obj.passions.passion2 === req.query.passion2 && obj.passions.passion3 === req.query.passion3;
    });
    console.log(fliteredMentor);
    return res.json(fliteredMentor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
