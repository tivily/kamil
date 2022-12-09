const mongoose=require("mongoose");

const supplySchema=new mongoose.Schema({
   water:Number,
   milk:Number,
   coffee:Number,
   cups:Number,
   money:Number
});

module.exports=mongoose.model("supply",supplySchema);