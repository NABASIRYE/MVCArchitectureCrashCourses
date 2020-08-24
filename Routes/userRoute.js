const express = require('express');
var router = express.Router();

//app.METHOD(PATH,HANDLER);
router.get('/',function(req,res){
    res.send('All users');
})

router.get('/women',function(req,res){
    res.send('Women Users');
})

router.get('/men',function(req,res){
    res.send('Men Users');
})
module.exports = router;