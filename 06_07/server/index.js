const express = require("express");
const server = express();

server.use(express.json())
//Criando um CRUD (Create, Read, Update, Delete)

let usuarios = [
    {nome:'Daniel'},
    {nome:'Gabriel'},
    {nome:'Emanoel'}
]

server.get('/',(req,res)=>(
    res.json("Olá mundo")
    //res.send("Olá mundo")
));

server.get('/usuarios',(req,res)=>{  //o verbo GET usado para o READ 
    res.send(usuarios);

});


server.post('/usuarios',(req,res)=>{ //o verbo POST usado para o CREATE
    const nome = req.body.nome;

    let usuario ={
        nome:nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário cadastrado");
});

server.put('/usuarios/:index',(req,res)=>{ //o verbo PUT usado para o UPDATE
    const index = req.params.index; //Params é variavel passada via URL
    const nome = req.body.nome;
    
    let usuario ={
        nome:nome
    }

    usuarios[index] = usuario   

    res.status(200).json("Usuário atualizado")
})

server.delete('/usuarios/:index',(req,res)=>{ //o verbo DELETE usado para o DELETE
    const index = req.params.index;

    usuarios.splice(index,1)

    res.status(200).json("Usuário deletado")
})
server.listen(5000)








//GET = exibiciçao
//POST 
//PUT
//DELETE 