const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: false
    }
},
{ timestamps: true }
);

const Person = mongoose.model('Person', personSchema);
module.exports = Person;