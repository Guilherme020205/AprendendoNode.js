const express = require("express");
const { dirname } = require("path");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.listen(8081, function(){
    console.log("Rodando em http://localhost:8081/");
});