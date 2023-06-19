const express = require('express');
const router = express.Router();
const Item = require('../models/Items.js');


// Get all items
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Get a single item
router.get('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ message: 'Item not found' }));
});

// Create a new item
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description
  });

  newItem.save().then(item => res.json(item));
});

// Update an item
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => res.json(item))
    .catch(err => res.status(404).json({ message: 'Item not found' }));
});

// Delete an item
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ message: 'Item not found' }));
});

module.exports = router;
