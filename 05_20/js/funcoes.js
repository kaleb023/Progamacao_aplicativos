/* 
Funcoes são bolocos de construção. Nós escrevemos um trecho de codigo que podera ser reutilizado;
Para usar uma funcão, você deve defini-la em algum lugar e chamar no escopo onde precisar
;
*/

//criando uma função que retorna o quadrado de um número
function quadrado(numero){
    return numero * numero
}

let num1 = 5
num1 = quadrado(num1)
//console.log(num1) 

let num2 = 4
num2 = quadrado(num2)
//console.log(num2)

function minhaFuncao(objeto){
    objeto.fabrica = "Toyota"
}

//Criando um objeto carro
let carro = {fabrica:"Honda", modelo:"Civic", ano:"2019"}
//console.log(carro.fabrica)


let x,y //criando duas variaveis
x = carro.fabrica
//console.log(x)

minhaFuncao(carro) //Chamando um função que altera o objeto carro
y = carro.fabrica //Recebendo toyota 
//console.log(y)

let elevadoQuadrado =  function(numero){
    return numero * numero
}

let fatorial = function fac(numero){
    if(n < 2){
        return 1
    }else{
        return numero * fac(numero - 1)
    }

}
//console.log(fatorial(5))


let numeros = [1,2,3,4,5]
console.log(numeros)

//let novosNumeros = numeros.map(num=>num*2)
let novosNumeros = numeros.map(function(num){
    return num * 2 
})
console.log(novosNumeros)

