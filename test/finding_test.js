const assert = require('assert');
const MarioChar= require('../models/mariochar');

describe('finding records',function(){

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

    it('finds one record from db using name',function(done){

        MarioChar.findOne({name:'luigi'}).then(function(data){
            assert(data.name==='luigi');
            done();
        }).catch(function(err){
            done(err);
        });

    });

    it('finds one record from db using _id',function(done){

        MarioChar.findOne({_id:mychar._id}).then(function(data){
            assert(data._id.toString() === mychar._id.toString());
            done();
        }).catch(function(err){
            done(err);
        });

    });

});
