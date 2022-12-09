const express=require('express');
const Post =require('../modules/Post');

const router=express.Router();



router.post('/', (req,res) =>{
  const post = new Post({
    water: req.body.water,
    milk: req.body.milk,
    coffee:req.body.coffee,
    cups:req.body.cups,
    money:req.body.money

  });

  post.save()
      .then(data => {
         res.json(data);
      })
      .catch(err => {
        res.json({message:err});
     });
});

module.exports=router;