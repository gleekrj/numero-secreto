let numeroMaximo = 10;
let tentativas = 1;
let listaNumerosEscolhidos = [];
let numeroSecreto = gerarNumeroAleatorio(numeroMaximo);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemOriginal(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}

exibirMensagemOriginal();


function verificarChute() {

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertô, Miserávi!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'ERROOUUUU!!!');
            exibirTextoNaTela('p', 'O número secreto é MENOR! Tente novamente!');
        } else {
            exibirTextoNaTela('h1', 'ERROOUUUU!!!');
            exibirTextoNaTela('p', 'O número secreto é MAIOR! Tente novamente!');
        }
        tentativas++;
        limparCampo();
    }
   
}

function gerarNumeroAleatorio(numeroMaximo) {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

    if (listaNumerosEscolhidos.length == numeroMaximo){
        listaNumerosEscolhidos = [];
    }
    
    if (listaNumerosEscolhidos.includes(numeroEscolhido)){
        gerarNumeroAleatorio(numeroMaximo);
    } else{
        listaNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaNumerosEscolhidos);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
    limparCampo();
    tentativas = 1;
    exibirMensagemOriginal();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}