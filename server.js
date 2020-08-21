const express = require('express');
const mongoose = require('mongoose');

const app = express();
//app.METHOD(PATH,HANDLER);
app.get('/',function(req,res){
    res.send('Hello Welcome');
})

app.get('/about',function(req,res){
    res.send('<p>This is about</p>');
})
//db is connected
mongoose.connect('mongodb://localhost/freshdb',{ useNewUrlParser: true,useUnifiedTopology: true });
//port number host name
app.listen(3001,()=>{
    console.log('Server is running...')
});