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
function maiorPalavra(arrayDeStrings) {
  let palavraDaVez = arrayDeStrings[0];
  for (let index = 0; index < arrayDeStrings.length; index += 1) {
    if (arrayDeStrings[index].length > palavraDaVez.length) {
      palavraDaVez = arrayDeStrings[index];
    };
  };
  return palavraDaVez;
};

// Requisito 5 - Crie a função maisRepetido
function maisRepetido(arrayNumerosRepetidos) {
  let contador = 0;
  let contadorFinal = 0;
  let numeroMaisRepetido = 0;
  for (let index = 0; index < arrayNumerosRepetidos.length; index += 1) {
    for (let indexNumeroDaVez = 0; indexNumeroDaVez < arrayNumerosRepetidos.length; indexNumeroDaVez += 1) {
      if (arrayNumerosRepetidos[index] === arrayNumerosRepetidos[indexNumeroDaVez]) {
        contador += 1;
      }
    }
    if (contador > contadorFinal) {
      contadorFinal = contador;
      numeroMaisRepetido = arrayNumerosRepetidos[index];
    }
    contador = 0;
  }
  return numeroMaisRepetido;
}

// Requisito 6 - Crie a função somatorio
function somatorio(numNatural) {
  let somatorio = numNatural;
  if (numNatural < 0) {
    return 'ERRO';
  }
  for (let index = numNatural - 1; index > 0; index -= 1) {
    somatorio += index;
  }
  return somatorio;
}
console.log(somatorio(5));

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
