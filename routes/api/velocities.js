const express = require('express');
const router =express.Router();
const auth=require('../../middleware/auth');

//Item Model
const Item =require('../../models/Velocities');
//@route get api/velocities
//@desc get all Items
//@access Public
router.get('/',(req,res) => {
    Velocities.find()
    .sort({date: -1 })
    .then(velocities => res.json(velocities))
});

//@route post api/velocities
//@desc creaye a post
//@access private
router.post('/',auth,(req,res) => {
    const newVelocity =new Velocities({
       Velocity1:req.body.Velocity1,
       Velocity2:req.body.Velocity2,
       Velocity3:req.body.Velocity3;});
       if( !Velocity1|| ! Velocity2 || !Velocity3){
        return res.status(400).json({ msg : 'Please enter all fields'});}
    if(Velocity1<0 || velocity1>126 ){
    return 
    res.status(400).json({msg: 'Please enter a value in the range'});}
    
    if(Velocity2<0 || velocity2>126 ){
        return 
        res.status(400).json({msg: 'Please enter a value in the range'});}
        if(Velocity3<0 || velocity3>126 ){
            return 
            res.status(400).json({msg: 'Please enter a value in the range'});}
    newVelocity.save().then(velocity =>res.json(velocity));
    
});

//@route delete api/items/:id
//@desc delete an item
//@access Private
router.delete('/:id',auth,(req,res) => {
    Velocities.findById(req.params.id)
    .then(velocity => velocity.remove().then (() => res.json({success : true })) )
    .catch(err => res.status(404).json ({success : false }));
    });
    


module.exports=router;
