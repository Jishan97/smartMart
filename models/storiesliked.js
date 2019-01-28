var mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({


Username:{
    type:String,
    require:true

},
Likes:[
    {
        name:{
            type:String

        }

    }
]




});

var Storiesliked =  mongoose.model('storiesliked',todoSchema);

module.exports={Storiesliked}