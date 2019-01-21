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
Current_Date:{
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

var parchaseH =  mongoose.model('parchaseH',todoSchema);

module.exports={parchaseH}