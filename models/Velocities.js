const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const VelocitySchema = new Schema({
    Velocity1:{
        type : Number,
        required: true,
        
    },
    Velocity2:{
        type : Number,
        required: true,
       
    },
    Velocity3:{
        type : Number,
        required: true
    },
    date:{ type : Date,
        default:Date.now}
});
    
    module.exports=Velocities=mongoose.model('velocity',VelocitySchema);
    