const assert = require('assert');
const MarioChar= require('../models/mariochar');

describe('deleting records',function(){

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

    it('delete one record from db',function(done){

        MarioChar.findOneAndRemove({name:'luigi'}).then(function(){

            MarioChar.findOne({name:'luigi'}).then(function(data){
                assert(data===null);
                done();
            }).catch(function(err){
                done(err);
            });

        }).catch(function(err){
            done(err);
        });


    });

});
