var http = require('http');

http.createServer(function(req, res){
    res.end("Estamos On")
}).listen(8081);

console.log("Servidor rodando!")