const carros = ["Gol", "Palio", "Celta", "Escort"];

const conteudo = document.getElementById("mostrarCarro");
let btn = document.getElementsByClassName("decisao").value;

function criarSecao(titulo, dadosF){
    let secao = document.createElement("<div>");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}


let dados = ""
let i = 0;
do {
    dados += "<p>" + carros[i] + "</p>";
    if(btn ==="Sim")
    i++
} while(i < carros.length);

//criarSecao("Resposta", dados);