var mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({

Username:{
    type:String,
    required:true
},
    Products:[
        {
            name:{
                type:String,
                required:true
              },
              price:{
                type:String,
                required:true
              },
              image:{
                  type:String,
                  required:true
              }
        }
    ]
    
    


});

var whishlist =  mongoose.model('whishlist',todoSchema);

module.exports={whishlist}
