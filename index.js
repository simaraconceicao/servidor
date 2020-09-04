//importando express
const express = require("express")
//criando a instância 
const app = express()
//criando aplicação para enviar 
//mensagem para o lado do cliente
app.get("/", function(req, res){
    res.send("Hello, World!")
})
//criando rotas
app.get("/sobre", function(req, res){
    res.send("Quem sou eu?")
})
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu Blog!")
})
//criando rotas dinâmicas utilizando parâmentros e receber dados de requisição
app.get("/contato/:tel/:email/:linkedin", function(req, res){
    res.send(req.params)
})
//criando servidor e enviando aplicação para o servidor
app.listen(8081, function(){console.log("Servidor rodando na porta 8081!")})
