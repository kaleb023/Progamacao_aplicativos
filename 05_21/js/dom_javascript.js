// Quando a página web é carregada o navegador cria um Document Object Model (DOM)
// o DOM possui uma arvore de objetos 

document.getElementById("saudacao").innerHTML = "Terça feira" //Adicionando uma saudação a uma div com id "saudacao"

let h1 = document.getElementsByTagName("h1")// Pegando um array com todos os elementos h1

h1[0].innerText="Introdução"

let descricao = document.getElementsByClassName("descricao") // pegando um array com cada elemento com tag descricao


for (let i = 0;i < descricao.length;i++){
    descricao[i].innerText = "Div: "+1
}

function alternandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
    alert("Teste")
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")
}