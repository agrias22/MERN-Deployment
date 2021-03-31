const PetController = require('../controllers/pets.controller');

module.exports = function(app){
    app.get('/api/pet/:id', PetController.findOnePets);
    app.get('/api/allpets', PetController.findAllPets);
    app.post('/api/pets', PetController.createPet);
    app.put('/api/edit/:id', PetController.updatePet);
    app.delete('/api/delete/:id', PetController.deletePet);
}
