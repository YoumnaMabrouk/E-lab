const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const bodyPasrer = require('body-parser');

const items=require('./routes/api/items');
const users=require('./routes/api/users');
const auth=require('./routes/api/auth');
const app = express();
const config=require('config');
const path=require('path'); 

//Body parser middleware
app.use(bodyPasrer.json());

//DB config
//const db = require('./config/keys').mongoURI;
const db = config.get('mongoURI');
//const uri = require
//connect to mongo

//MongoClient.connect(uri, { useNewUrlParser: true },{useUnifiedTopology: true});
mongoose.connect(db,{
    useNewUrlParser :true,
    useCreateIndex :true 
})

    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));
   
    //use routes
app.use('/api/items',items);
app.use('/api/users',users);
app.use('/api/auth',auth);

//Serve static assets if in production
if(process.env.NODE_ENV=='production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html')); 

    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on ${port}'));

