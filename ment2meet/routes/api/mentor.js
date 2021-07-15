const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const normalize = require('normalize-url');

const Mentor = require('../../models/Mentor');

// @route    GET api/mentors
// @desc     Get all mentors
// @access   public
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json({
      status: 'success',
      result: mentors.length,
      data: {
        mentors
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/mentor
// @desc     Get one mentor
// @access   public
router.get('/:id', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: mentor
    });
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
    const newmentor = await Mentor.create(req.body);
    res.status(200).json({
      status: 'success',
      data: newmentor
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


