
import { Carro }  from './carro.js'

export class Concessionaria {
    constructor() {
        this.carros = []

        this.carros.push(new Carro("Fiat", "XXY-4404", "VERDE", 2001))
        this.carros.push(new Carro("Volkswagen", "ZWA-3321", "AMARELO", 1998))
        this.carros.push(new Carro("Ford", "TYW-9904", "ROSA", 2001))
        this.carros.push(new Carro("Toyota", "HBF-2334", "AZUL", 2001))
    }


    removerCarros(index) {
        alert(this.carros[index].marca + "Carro deletado com sucesso")
        //O metodo slice altera o conteudo de uma lista podendo adicionar enquanto remove elemento
        //Abaixo vamos remover um elemento especifico
        this.carros.splice(index, 1)
        this.carregarCarros()
    }


    carregarCarros() {
        let html = "<tr><th>Index</th><th>Marca</th><th>Placa</th><th>Cor</th><th>Ano</th><th>Deletar</th></tr>"

        for (let i = 0; i < this.carros.length; i++) {
            html += "<tr>"
            html += "<td>" + i + "</td>"
            html += "<td>" + this.carros[i].marca + "</td>"
            html += "<td>" + this.carros[i].placa + "</td>"
            html += "<td>" + this.carros[i].cor + "</td>"
            html += "<td>" + this.carros[i].ano + "</td>"
            html += '<td><button onclick="window.novaConcessionaria.removerCarros(' + i + ')">Deletar</button></td>'
            html += "</tr>"

        }
        document.getElementById("listaCarros").innerHTML = html
    }

    cadastrarCarro() {

        let marca = document.getElementById("marca").value
        let placa = document.getElementById("placa").value
        let cor = document.getElementById("cor").value
        let ano = parseFloat(document.getElementById("ano").value)
        let carro = new Carro(marca, placa, cor, ano)
        this.carros.push(carro)
        alert(this.carros[this.carros.length-1].marca + "Cadastrado com sucesso")
        this.carregarCarros()
        this.limparCampos()

    }

    limparCampos(){
        document.getElementById("marca").value = ""
        document.getElementById("placa").value = ""
        document.getElementById("cor").value = ""
        document.getElementById("ano").value = ""
    }
}
