const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mario characters schema
const MarioCharSchema = new Schema({
    name:{
        type:String,
        required: 'Every Mario character must have a name!'
    },
    weight:Number
});

//mario char model
const MarioChar = mongoose.model('mariochar',MarioCharSchema);

module.exports=MarioChar;
