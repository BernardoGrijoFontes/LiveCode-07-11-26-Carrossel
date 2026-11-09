const conteudo = document.querySelector('.carrossel-conteudo');
const itens = document.querySelectorAll('.carrossel-item');
const bolinhas = document.querySelectorAll('.bolinha');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

let atual = 0;

function mostrarFoto(numero){

  if (numero >= itens.length) {
    numero = 0;
  }

  if (numero < 0) {
    numero = itens.length - 1;
  }

  atual = numero;

  itens[atual].scrollIntoView({inline: 'start', block: 'nearest'});


  bolinhas[atual].checked = true;
}

setaEsquerda.onclick = () => mostrarFoto(atual - 1);
setaDireita.onclick = () => mostrarFoto(atual + 1);

setInterval(() => mostrarFoto(atual + 1), 5000);

bolinhas.forEach((bolinha, numero) => {
  bolinha.onclick = () => mostrarFoto(numero);
});