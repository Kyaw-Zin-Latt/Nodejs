const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("ans : " + result);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
