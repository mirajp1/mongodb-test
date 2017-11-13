var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

//book Schema
var BookSchema = Schema({
    title:String,
    pages:Number
});

//author Schema
var AuthorSchema = Schema({
    name:String,
    age:Number,
    books:[BookSchema]
});

var Author = mongoose.model('author',AuthorSchema);

module.exports=Author;
