const { Schema, model } = require('mongoose');
const Breed = require('./Breed');

const catSchema = new Schema(
    {name : {type: String, required: true},
    breed: { type: Schema.Types.ObjectId, ref: 'Breed', default: null}, 
    hair: {type: String, required: true},
    colour: {type: String, required: true},
    age: {type: Number, required: true},
    image: {type: String, required: true, unique:true}, 
    description: {type: String, required: true},
    date: {type: Date, default: new Date()}});

module.exports = model('Cat', catSchema);