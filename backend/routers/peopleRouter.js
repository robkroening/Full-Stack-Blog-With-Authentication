const express = require('express');
const router = express.Router();
const Person = require("../models/Person");

// get all people
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(200).json(error);
    }
});

// get a single person
router.get('/:id', async (req, res) => {
    try {
        const person = await Person.findById(req.params.id);
        res.status(200).json(person);
    } catch (error) {
        res.status(200).json(error);
    }
});

// create a new person
router.post('/', async (req, res) => {
    try {
        const person = Person.create(req.body);
        res.status(200).json(person);
    } catch (error) {
        res.status(200).json(error);
    }
});

// edit a person -- need to use await .save() here
// delete a person -- need to use await .save() here

module.exports = router;