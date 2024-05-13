
import Carro from './carro'

export class Concessionaria {
    constructor() {
        this.carros = []
    }


    removerCarros(index) {
        //O metodo slice altera o conteudo de uma lista podendo adicionar enquanto remove elemento
        //Abaixo vamos remover um elemento especifico
        carros.splice(index, 1)
        carregarCarros()
    }


    carregarCarros() {
        let html = "<tr><th>Index</th><th>Marca</th><th>Placa</th><th>Cor</th><th>Ano</th><th>Deletar</th></tr>"

        for (let i = 0; i < carros.length; i++) {
            html += "<tr>"
            html += "<td>" + i + "</td>"
            html += "<td>" + carros[i].marca + "</td>"
            html += "<td>" + carros[i].placa + "</td>"
            html += "<td>" + carros[i].cor + "</td>"
            html += "<td>" + carros[i].ano + "</td>"
            html += '<td><button onclick="removerCarros(' + i + ')">Deletar</button></td>'
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
        carros.push(carro)
        carregarCarros()

    }
}
