export class ParafusosController{


    constructor(){
        this.parafusos = [
            {nome:"sextavado"},
            {nome:"francês"},
            {nome:"máquina"}
        ]
    }

    create(req,res){
        const nome = req.body.nome
        let parafuso ={
            nome:nome
        }

        parafusos.push(parafuso);

        res.status(201).json("Parafuso criado")
    }
    
    read(req,res){
        res.status(200).json(this.parafusos);
    }
}