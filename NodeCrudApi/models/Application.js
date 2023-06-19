const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const ApplicationSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    RollNumber: { type: String, required: true },
    age:{ type: String, required: true },
    Phonenumber:{ type: String, required: true }
});

module.exports = Application = mongoose.model('Application', ApplicationSchema);
