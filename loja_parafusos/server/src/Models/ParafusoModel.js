class ParafusoModel{
    constructor(){
        this.parafusos = [
            {nome:"sextavado"},
            {nome:"francês"},
            {nome:"máquina"}
        ]
    }

    create(nome){
        let parafuso = {
            nome:nome
        }

        this.parafusos.push(parafuso)
    }

    read(){
        return this.parafusos;
    }

    update(index,nome){
        let parafuso = {
            nome:nome
        }
        
        this.parafusos[index] = parafuso;

    }

    delete(index){
        this.parafusos.splice(index, 1);
    }
}

export default new ParafusoModel();