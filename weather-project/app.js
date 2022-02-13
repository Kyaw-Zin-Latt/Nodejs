const express = require("express");
const https = require("https");
// const { resolve } = require("path");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req, res) {

    res.sendFile(__dirname + "/index.html")
    
})

app.post("/",function(req,res){

    let prdId = req.body.productId;
     https.get("https://fakestoreapi.com/products/"+prdId,function(response){
        console.log(prdId);

        
        response.on("data",function(data){
            // console.log(data);
            const productsData = JSON.parse(data)
            console.log(productsData[0]);
            
            // console.log("adfsf" + productsData)
            res.write("<h1>" + productsData.title + "</h1>");
            
        })
    })

    // console.log("received");
})
   

app.listen(3000,() => "Server is running on port 3000")

