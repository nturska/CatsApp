const Breed = require('../models/Breed.js')
const mongoose = require('mongoose');
const Cat = require('../models/Cat.js')
const BreedsController = {
    getAllBreeds: async (req, res) => {
    Breed.find()
    .populate('cats')
    .then(breeds => {
      res.json(breeds); })
    .catch(err => {
      res.status(500).json(err); })
    },

    findBreedById: async (req, res) => {
    const id = req.params.id
    Breed.findOne({ _id: id })
    .then(breed => {
      if(breed){
        res.status(200).json(breed);}
      else {
        res.status(404).json({message: "No Breed with that Id"}) }})
    .catch(err => {
        res.status(500).json(err); })
    },

    createBreed: async (req, res) => {
    const name = req.body.name
    const hair = req.body.hair
    const colour = req.body.colour
    const size = req.body.size
    const lifespan_min = req.body.lifespan_min
    const lifespan_max = req.body.lifespan_max
    const description = req.body.description
    const characteristics = req.body.characteristics

    const newBreed = new Breed({name : name, hair: hair, colour: colour, size: size, description: description, lifespan_min: lifespan_min, lifespan_max: lifespan_max, characteristics: characteristics});
    newBreed
        .save()
        .then( breed => {
          res.json(breed)
        })
        .catch( err => { 
          res.status(500).json(err) });
    },

    deleteBreed: async (req, res) => {
    const id = req.params.id;
    Breed.deleteOne({ _id: id })
    .then(breed =>{
    if(breed){
        res.json(breed);}
    else {
        res.status(404).json({message: 'No Breed with that Id'})
    }})
    .catch(err => {
        res.status(500).json(err); })
    },
    editBreed: async(req, res) => {
        const id = req.params.id;
        Breed.findByIdAndUpdate(id, { $set: req.body }, { new: true})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({ error: err}))
    },
    addCatToBreed: async(req,res) => {
      const id = req.params.id;
      const cat = req.body.cat
        Breed.findByIdAndUpdate(id, { $set: cat }, { new: true})
        .then(breed =>
          Cat.findByIdAndUpdate(cat, {$set: id}, {new: true})
          .then(res.status(200).json(result)))
        .catch(err => res.status(500).json({ error: err}))
    }
}

module.exports = BreedsController;