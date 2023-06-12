const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
})

// app.get("/ola/:nome/:cargo", function(req, res){
//     res.send(req.params);
// })

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" 
    + "<h2>Seu cargo " + req.params.cargo + "</h2>");
    
})

app.listen(8081, function(){
    console.log("Rodando em http://localhost:8081/");
});