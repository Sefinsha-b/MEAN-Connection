const express = require('express');
const router = express.Router();
const Application = require('../models/Application.js');


// Get all items
router.get('/', (req, res) => {
    Application.find()
    .sort({ date: -1 })
    .then(Application => res.json(Application));
});

// Get a single item
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(Application => res.json(Application))
    .catch(err => res.status(404).json({ message: 'Application not found' }));
});

// Create a new item
router.post('/', (req, res) => {
  const newApplication = new Application({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    RollNumber:req.body.RollNumber,
    age:req.body.age,
    Phonenumber:req.body.Phonenumber
  });

  newApplication.save().then(Application => res.json(Application));
});

// Update an item
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(Application => res.json(Application))
    .catch(err => res.status(404).json({ message: 'Application not found' }));
});

// Delete an item
router.delete('/:id', (req, res) => {
    Application.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ message: 'Application not found' }));
});

module.exports = router;
