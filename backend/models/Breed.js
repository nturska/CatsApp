const { Schema, model } = require('mongoose');

const breedSchema = new Schema(
    {name : {type: String, required: true, unique: true},
    hair: {type: String, required: true},
    colour: {type: String, required: true},
    size: {type: String, required: true},
    description: {type: String, required: true},
    lifespan_min: {type: String, required: true},
    lifespan_max: {type: String, required: true},
    characteristics: {type: String, required: true},
    cats:  [{ type: Schema.Types.ObjectId, ref: 'Cat' }],
    date: {type: Date, default: new Date()}}
);
module.exports = model('Breed', breedSchema);