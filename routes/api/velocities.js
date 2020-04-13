const express = require('express');
const router =express.Router();
const auth=require('../../middleware/auth');

//Item Model
const  Velocities=require('../../models/Velocities');
//@route get api/velocities
//@desc get all velocities
//@access Public
router.get('/',(req,res) => {
    Velocities.find()
    .sort({date: -1 })
    .then(velocities => res.json(velocities))
});

//@route post api/velocities
//@desc create a post
//@access private
router.post('/',(req,res) => {
    const { Velocity1, Velocity2, Velocity3}=req.body;
    if( !Velocity1|| !Velocity2 || !Velocity3){
        return res.status(400).json({ msg : 'Please enter all fields'});}
   
   
    const newVelocity =new Velocities({
       Velocity1,
       Velocity2,
       Velocity3});
    
    //if(Velocity1<0 || Velocity1>126 ){
    //return res.status(400).json({msg: 'Please enter a value in the range'});}
    
  /* if(Velocity1 != Number){
        return
        res.status(400).json({msg: 'Velocities must be numbers'});}
     
    }*/
   // if(Velocity2<0 || Velocity2>126 ){
     //   return res.status(400).json({msg: 'Please enter a value in the range'});}
       // if(Velocity3<0 || Velocity3>126 ){
         //   return  res.status(400).json({msg : 'Please enter a value in the range'});}
    newVelocity.save().then(velocity=>res.json(velocity));
  
    
});

//@route delete api/items/:id
//@desc delete an item
//@access Private
router.delete('/:id',(req,res) => {
    Velocities.findById(req.params.id)
    .then(velocity => velocity.remove().then (() => res.json({success : true })) )
    .catch(err => res.status(404).json ({success : false }));
    });
    


module.exports=router;
