const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));//use to pass data which comes from html form, extended allows us to pass nested objects

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmiCalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = weight/(height*height);
    res.send("The BMI is "+ BMI);
})

app.listen('3000', function(){
    console.log("Calculator Listening")
})