var mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({


Username:{
    type:String,
    require:true
  
},
Email:{
    type:String

},
Products:[
    {
        name:{
            type:String
            
        },
        price:{
            type:String
            
        },
        barcode:{
            type:String
            
        }

    }
]




});

var parchaseHistory =  mongoose.model('parchasehistory',todoSchema);

module.exports={parchaseHistory}
