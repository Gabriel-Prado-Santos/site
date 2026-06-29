const carros = ["Uno", "Fusca", "Escort", "Gol"];
let dados = ""
let i = 0
const conteudo = document.getElementById("conteudo");
// função criada na aula 22
function criarSecao(titulo, dadosF){
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>" + titulo + "</h2>" + dadosF;
    conteudo.appendChild(secao);
}

dados = "";
i = 0;
while( i < 4){
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

criarSecao("Loop While", dados);

dados = "";
i = 0;
while( i < carros.length){
    dados += "<p>" + carros[i] + "</p>";
    i++;
}

criarSecao("Loop while melhorado", dados);

dados = "";
i = 0 
do {
    dados += "<p>" + carros[i] + "</p>";
    i++;
} while(i < carros.length);
criarSecao("Loop do-while", dados);

//laço for

dados = "";
for(i = 0; i < carros.length; i++){
    dados += "<p>" + carros[i] + "</p>";
}
criarSecao("Loop whilemelhorado", dados);

dados = "";

for(let carro of carros){
    dados += "<p>" + carro + "</p>";
}
criarSecao("Loop For of", dados);

// objeto
let carro1 = {marca: "Ford", modelo: "Ka", ano: "2015"};
let carro2 = {marca: "Fiat", modelo: "Uno", ano: "2000"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

/* agora temos uma matriz*/

// for in

for(let carro of carros2){
    let propriedades = ""
    for(let prop in carro){
        propriedades += carro[prop] + " | ";
    }
    dados+= "<p>" + propriedades + "</p>";
}
