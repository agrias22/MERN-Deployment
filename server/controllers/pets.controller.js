const Pet = require('../models/pets.models')


module.exports.findAllPets = (req,res) =>{
    Pet.find({})
        .then(allPets => res.json({ pets: allPets}))
        .catch(err => res.json({ message: 'Somthing Went Wrong', error: err}))
}

module.exports.findOnePets = (req,res) => {
    Pet.findOne({_id: req.params.id})
        .then(oneSinglePet => res.json({ pets:oneSinglePet}))
        .catch(err => res.json({message: 'Something Went Wrong', error: err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.status(400).json(err));
}

module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id: req.params.id}, req.body, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => res.json(deletedPet))
        .catch(err => res.json(err))
}


