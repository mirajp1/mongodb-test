const assert = require('assert');
const Author = require('../models/author');
const mongoose = require('mongoose');

describe('testing nested schemas in mongo',function(){


    it('create author with sub documents',function(done){

            var pat=Author({
                name:'Patrick Rothfuss',
                age:'40',
                books:[
                    {title:'Name of the wind',pages:600}
                    // {title:"A wise man's fear",pages:1000}
                ]
            });

            pat.save().then(function(){

                Author.findOne({name:'Patrick Rothfuss'}).then(function(data){
                    assert(data.books.length===1);
                    done();
                }).catch(function(err){
                    done(err);
                })

            }).catch(function(err){
                done(err);
            });

    });


    it('enter a new book to existing author',function(done){

        var pat = Author({
            name:'Patrick',
            age: 45,
            books:[{title:'Name of the wind',pages:500}]
        });
        pat.save().then(function(){

            Author.findOneAndUpdate({name:'Patrick'},{$push:{books:{title:'A wise mans fear',pages:1000}}},function(){

                Author.findOne({name:'Patrick'}).then(function(data){
                    console.log(data.books.length==2);
                    done();
                });

            });

        }).catch(function(err){
            done(err);
        });


    });

});
