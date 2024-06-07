import express from 'express'; //Importando o express
import { ParafusosController } from './Controllers/ParafusosController';
const parafusosController = new ParafusosController();


const server = express(); //Iniciando o express

server.use(express.json()); //Configurando o json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor funcionando")
})

server.get('/parafusos', parafusosController.read);

server.listen(5000);



