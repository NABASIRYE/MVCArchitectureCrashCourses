const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');

const app = express();

//Middleware
app.use('/static',express.static('public'));
app.use('/users',userRoute);


//db is connected
mongoose.connect('mongodb://localhost/freshdb',{ useNewUrlParser: true,useUnifiedTopology: true });
//port number host name
app.listen(3002,()=>{
    console.log('Server is running...')
});