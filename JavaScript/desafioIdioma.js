function idioma(){
    let linguagemSelecionada = document.getElementById("linguagemSelecao").value;
    let mensagem = document.getElementById("mensagem");
    switch (linguagemSelecionada) {
        case "pt":
           mensagem.innerHTML = "Olá seja bem vindo!";
            break;
        case "en":
            mensagem.innerHTML = "Hello, welcome!";
            break;
        case "es":
            mensagem.innerHTML = "Hola, bienvenido!";
            break;
        default:
            mensagem.innerHTML = "Idioma não selecionado! Escolha uma das opções.";
            break;
    }
}