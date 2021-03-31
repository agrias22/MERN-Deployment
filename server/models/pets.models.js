const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is Required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    type: { 
        type: String,
        required: [true, 'Type is required'],
        minlength:[ 3, 'Type must be at least 3 characterse long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength:[3, 'Description must be at least 3 characters long']
    },
    skill1:{
        type: String,
        required: [false, "Skill Not Required"]
    },
    skill2:{
        type: String,
        required: [false, "Skill Not Required"]
    },
    skill3:{
        type: String,
        required: [false, "Skill Not Required"]
    }
}, { timestamps: true });
const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
