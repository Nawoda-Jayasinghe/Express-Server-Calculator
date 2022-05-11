const express = require('express');

//we have to requre the body parser
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));//use to pass data which comes from html form, extended allows us to pass nested objects


app.get("/", function(req,res){
    //res.send("Hello Calcuator Bro"); //now we need to send a entire document as the response. the index.html doc
    res.sendFile(__dirname + "/index.html"); //__dirname gives the current file path no matter where we are. even when hosted on the cloude
   
}) //still we do not accept post methods

app.post("/", function(req,res){
    //now we have to get the data and calculate it here. for that we need body-parser
    //npm i body-parser will pass out data here. then we can do our calculations
    //req.body will give all the form data. this was done by body parser
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    res.send("<h1 style ={color: #45a049 , padding: 50px , text-align: center}>You calculated successfully "+ result+"</h1>");
})

app.listen('3000', function(){
    console.log("App listnening");
    
})

//npm init
//npm i express
//npm i nodmon
//node server.js
