const Cat = require('../models/Cat.js')
const mongoose = require('mongoose');
const Breed = require('../models/Breed')

const CatsController = {
    getAllCats: async (req, res) => {
    Cat.find()
    .populate('breed')
    .then(cats => {
      res.json(cats); })
    .catch(err => {
      res.status(500).json(err); })
    },

    findCatById: async (req, res) => {
    const id = req.params.id
    Cat.findOne({ _id: id })
    .then(cat => {
      if(cat){
        res.status(200).json(cat);}
      else {
        res.status(404).json({message: "No Cat with that Id"}) }})
    .catch(err => {
        res.status(500).json(err); })
    },

    createCat: async (req, res) => {
    const idBreed= req.body.breed
    const name= req.body.name
    const age= req.body.age
    const hair= req.body.hair
    const colour= req.body.colour
    const image= req.body.image
    const description= req.body.description

    const newCat = new Cat({name: name, breed: idBreed, hair: hair, colour: colour, age: age, image: image, description: description});
        newCat
        .save()
        .then( cat => {
          Breed.findOne({ _id: idBreed })
            .then(breed => {
              breed.cats.push(cat._id),
              breed.save(),
              res.json(cat) })
            })
        .catch( err => {
          console.log(err) 
          res.status(500).json(err)
         });
    },

    deleteCat: async (req, res) => {
    const id = req.params.id;
    Cat.deleteOne({ _id: id })
    .then(cat =>{
    if(cat){
        Breed.findOne({_id: cat.breed})
        .then(breed => {
          if(breed){
            breed.cats.filter( breedcat => breedcat!==cat._id),
            breed.save()
          }
          res.json(cat)})}
    else {
        res.status(404).json({message: 'No Cat with that Id'})
    }})
    .catch(err => {
        res.status(500).json(err); })
    },
    editCat: async(req, res) => {
        const id = req.params.id;
      Cat.findByIdAndUpdate(id, { $set: req.body }, { new: true})
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ error: err}))
    },
    addBreedToCat: async(req, res) => {
      const id =req.params.id
      const breed = req.body.breed
      Cat.findByIdAndUpdate(id, { $set: req.body }, { new: true})
      .then( cat => {
        Breed.findOne({ _id: breed })
          .then(breed => {
            breed.cats.push(cat._id),
            breed.save(),
            res.json(cat) })
            })
      .catch( err => {
        console.log(err) 
        res.status(500).json(err)
       });
    }
}

module.exports = CatsController;