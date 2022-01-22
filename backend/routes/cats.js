const express = require('express');
const router = express.Router({ mergeParams: true });
const CatsController = require('../controllers/cats');

router.get('/', CatsController.getAllCats);

router.get('/:id', CatsController.findCatById);

router.post('/', CatsController.createCat);

router.patch('/:id', CatsController.editCat);

router.patch('/breed/:id', CatsController.addBreedToCat);

router.delete('/:id', CatsController.deleteCat);

module.exports = router;
