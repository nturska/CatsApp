const express = require('express');
const router = express.Router({ mergeParams: true });
const BreedsController = require('../controllers/breeds');

router.get('/', BreedsController.getAllBreeds);

router.get('/:id', BreedsController.findBreedById);

router.post('/', BreedsController.createBreed);

router.patch('/:id', BreedsController.editBreed);

router.delete('/:id', BreedsController.deleteBreed);

module.exports = router;
