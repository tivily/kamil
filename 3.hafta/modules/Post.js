const mongoose = require("mongoose")


const postschema=mongoose.Schema({

    water: {
        type:Number,
      },
      milk: {
        type:Number,
      },
      coffee: {
        type:Number,
      },
      cups: {
        type:Number,
      },
      money: {
        type:Number,
      }
      
}

)

module.exports=mongoose.model('supplies',postschema);