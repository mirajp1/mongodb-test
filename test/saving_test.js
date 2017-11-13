const assert = require('assert');
const MarioChar = require('../models/mariochar');
//describe tests
describe('records saving',function(){

    //create tests for this block

    it('save a record to the db',function(done){
        var mychar = MarioChar({
            name:'miraj',
            weight:70
        });
        mychar.save().then(function(){
            assert(mychar.isNew===false);
            done();
        }).catch(function(err){
            done(err);
        });
    });

});
