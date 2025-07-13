document.addEventListener('DOMContentLoaded', function() {
  
  const subtitulo = document.querySelector('#subtitulo');
  const textoParaDigitar = "DESENVOLVEDOR  FULLSTACK"; 
  const velocidadeDigitacao = 130; 
  const velocidadeApagar = 100;    
  const pausaAntesDeApagar = 2000; 
  const pausaAntesDeDigitar = 1000; 
  let indexLetra = 0;
  let estaApagando = false;

  function loopMaquinaDeEscrever() {
    const velocidadeAtual = estaApagando ? velocidadeApagar : velocidadeDigitacao;

    if (estaApagando) {
      subtitulo.innerHTML = textoParaDigitar.substring(0, indexLetra - 1);
      indexLetra--;

      if (indexLetra === 0) {
        estaApagando = false;
        setTimeout(loopMaquinaDeEscrever, pausaAntesDeDigitar);
        return;
      }
    
    } else {
      subtitulo.innerHTML = textoParaDigitar.substring(0, indexLetra + 1);
      indexLetra++;

      if (indexLetra === textoParaDigitar.length) {
        estaApagando = true;
        setTimeout(loopMaquinaDeEscrever, pausaAntesDeApagar);
        return;
      }
    }

    setTimeout(loopMaquinaDeEscrever, velocidadeAtual);
  }
  loopMaquinaDeEscrever();
});


function enviarMensagem(event) {
  event.preventDefault(); 

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5551991747743';

const texto = `Ola meu nome e ${nome}, ${mensagem}`;
const msgFormatada = encodeURIComponent(texto);

const url=`https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(url, '_blank');
}