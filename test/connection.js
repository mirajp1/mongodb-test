const mongoose = require('mongoose');
const config=require('../config')[process.env.NODE_ENV || 'development'];


//set es6 default promise in mongoose
mongoose.Promise=global.Promise;


before(function(done){
    //connnect to mongoose db
    mongoose.connect('mongodb://'+
                    config['database'].host+
                    '/'+
                    config['database'].db
                );

    //listen for connection complete to mongo
    mongoose.connection.once('open',function(){
        console.log('connection has been made to mongoose');
        done();
    }).on('error',function(err){
        console.log('connection error: '+err);
        done(err);
    });
});


//drop mariochar collection before each tests
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop().then(function(){
        done();
    }).catch(function(err){
        done();
    });
});
