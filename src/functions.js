// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(palavra) {
  let palavraReversa = palavra.split('').reverse().join('');
  return palavra === palavraReversa;
};

// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(arrayDeNumeros) {
  let numeroDaVez = arrayDeNumeros[0];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > numeroDaVez) {
      numeroDaVez = arrayDeNumeros[index];
    };
  };
  return arrayDeNumeros.indexOf(numeroDaVez);
};

// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(arrayDeNumeros) {
  let numeroDaVez = arrayDeNumeros[0];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] < numeroDaVez) {
      numeroDaVez = arrayDeNumeros[index];
    };
  };
  return arrayDeNumeros.indexOf(numeroDaVez);
};

// Requisito 4 - Crie a função maiorPalavra

// Requisito 5 - Crie a função maisRepetido

// Requisito 6 - Crie a função somatorio

// Requisito 7 - Crie a função verificaFimPalavra

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => { }),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => { }),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => { }),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => { }),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => { }),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => { }),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => { }),
};
