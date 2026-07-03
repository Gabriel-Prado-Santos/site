function pedidoPizza(){
    let numeroPedido = Number(document.getElementById("numeroPizza").value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Opção escolhida: ${saborPizza(numeroPedido)}.`;
}

function saborPizza(n){
    switch(n){
        case 1: 
            return "Pizza de Calabresa";
        break;
        case 2:
            return "Pizza de Quatro Queijos";
        break;
        case 3:
            return "Pizza de Frango com Catupiry";
        break;
        case 4: 
            return "Pizza de Brigadeiro";
        break;
        default:
            return "Opção inválida";
        break;
    }
}