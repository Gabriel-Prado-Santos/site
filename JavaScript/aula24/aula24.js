function saudacao(){
    let nome = document.getElementById("nome").value;
    let horario = parseInt(document.getElementById("horario").value,10);
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = saudacaoPersonalizada(nome, horario);
}

function saudacaoPersonalizada(n, h){
    if(h == 8 && h < 14){
        return `Bom dia ${n}`
    } else if(h >= 14 && h < 18){
        return `Boa tarde ${n}`
    } else if(h >= 18){
        return `Boa noite ${n}`
    } else {
        return ``
    }
}