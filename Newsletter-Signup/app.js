const express = require("express");
const bodyParser =  require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
}) 

app.post("/",function(req,res){
    let firstName = req.body.fName;
    let secondName = req.body.lName;
    let email = req.body.email;

    console.log(firstName, secondName, email);

    // 7cc8ef507ec5414202efdbb914159fad-us14

})

app.listen(3000,() => "app is running in 3000")