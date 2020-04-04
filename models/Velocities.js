onst mongoose=require('mongoose');
const Schema=mongoose.Schema;

const VelocitySchema = new Schema({
    Velocity1:{
        type : String,
        required: true,
        
    },
    Velocity2:{
        type : String,
        required: true,
       
    },
    Velocity3:{
        type : String,
        required: true
    },
    date:{ type : Date,
        default:Date.now}
});
    
    module.exports=Velocity=mongoose.model('velocity',  VelocitySchema);
    