const bodyparser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
var num1 = req.body.num1;
var num1 = req.body.num1;
var result = num1 + num2;
res.send(result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height*height);
  res.send("your bmi is" + result);
});

app.listen(3000,function(){
  console.log("server started");
});
