const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
res.render("home");
});

app.get("/about",function(req,res){
res.render("about");
});
app.get("/archives",function(req,res){
res.render("archives");
});

app.get("/blog1",function(req,res){
res.render("blog1");
});
app.get("/blog2",function(req,res){
res.render("blog2");
});
app.get("/blog3",function(req,res){
res.render("blog3");
});
app.get("/blog4",function(req,res){
res.render("blog4");
});
app.get("/blog5",function(req,res){
res.render("blog5");
});
app.get("/blog6",function(req,res){
res.render("blog6");
});
app.get("/blog7",function(req,res){
res.render("blog7");
});
app.get("/blog8",function(req,res){
res.render("blog8");
});









app.listen(process.env.PORT||3000, ()=>{
console.log("Server started on port 3000");
});
