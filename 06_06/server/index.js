const express = require("express");
const server = express();

server.use(express.json())

let usuarios = [
    {id:1,nome:'Daniel'},
    {id:2,nome:'Gabriel'},
    {id:3,nome:'Emanoel'}
]

server.get("/",(req,res)=>(
    res.json("Olá mundo")
    //res.send("Olá mundo")
));

server.get('/usuarios',(req,res)=>{
    res.send(usuarios);

});

server.get('/cadastro',(req,res)=>{
    const nome = req.query.nome;
    const senha = req.query.senha;
    res.send(nome+senha);
    
});

server.get('/cadastro_pessoa/:nome',(req,res)=>{
    const nome = req.params.nome;
    res.send(nome);

});

server.post('/usuarios',(req,res)=>{
    const id = req.body.id;
    const nome = req.body.nome;

    let usuario ={
        id:id,
        nome:nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário cadastrado");
});

server.listen(5000)

//GET = exibiciçao
//POST 
//PUT
//DELETE 