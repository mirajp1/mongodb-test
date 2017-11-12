const mongoose = require('mongoose');
const config=require('../config')[process.env.NODE_ENV || 'development'];
//connect to db
//connnect to mongoose db
mongoose.connect('mongodb://'+
                config['database'].host+
                '/'+
                config['database'].db
            );

//listen for connection complete to mongo
mongoose.connection.once('open',function(){
    console.log('connection has been made to mongoose');
}).on('error',function(err){
    console.log('connection error: '+err);
});
