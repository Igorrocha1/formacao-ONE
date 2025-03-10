// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) { 
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mentagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mentagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O Número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
  }
  console.log(chute == numeroSecreto);
}

function gerarUmNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}