const assert = require('assert');
const MarioChar= require('../models/mariochar');

describe('updating records',function(){

    var mychar;

    beforeEach(function(done){
        mychar = MarioChar({
            name:'luigi',
            weight:'50'
        });

        mychar.save().then(function(){
            done();
        }).catch(function(err){
            done(err);
        });

    });

    it('update one record from db',function(done){

        MarioChar.findOneAndUpdate({name:'luigi'},{name:'mario'}).then(function(){

            MarioChar.findOne({_id:mychar._id}).then(function(data){
                assert(data.name==='mario');
                done();
            }).catch(function(err){
                done(err);
            });

        }).catch(function(err){
            done(err);
        });

    });

    it('updating weight of all records by one in the db',function(done){

        MarioChar.update({},{$inc:{weight:1}}).then(function(){

            MarioChar.findOne({name:'luigi'}).then(function(data){
                assert(data.weight === 51);
                done();
            }).catch(function(err){
                done(err);
            })

        }).catch(function(err){
            done(err);
        });

    });

});
