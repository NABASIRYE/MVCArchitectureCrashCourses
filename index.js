
const mongoose = require('mongoose');
//connect method to create and or connect to the databse 
mongoose.connect('mongodb://localhost/freshdb',{ useNewUrlParser: true,useUnifiedTopology: true });

//connection objest helps to access the db with some methods
const db = mongoose.connection
db.once('open',function(){
    console.log("Database is open");
})

//organise data //create schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
})

userSchema.methods.greet = function(){
    const greeting = this.name ? "Hello "+ this.name : "No user name";
    console.log(greeting);
}
//create the model
const User= mongoose.model('User',userSchema);
const andrew = new User ({name:'Andrew'});
console.log(andrew.name);
andrew.greet();

andrew.save(function(err,andrew){
    if(err) return console.error(err);
    andrew.greet();
});

User.find(function(err,users){
    if(err) return console.error(err);
    console.log(users);
});