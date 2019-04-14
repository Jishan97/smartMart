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
            type:String,
            default:null

        },
        price:{
            type:String,
            default:null

        },
        barcode:{
            type:String,
            default:null

        },
        image:{
            type:String,
            default:null
        }

    }
]




});

var parchaseH =  mongoose.model('parchaseH',todoSchema);

module.exports={parchaseH}