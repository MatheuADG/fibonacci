function fibonacci(n) {
  var sequence = [0, 1]; // Inicializa a sequência com os primeiros valores
  var i = 2;

  while (sequence[i - 1] <= n) {
    sequence[i] = sequence[i - 1] + sequence[i - 2]; // Calcula o próximo valor da sequência
    i++;
  }

  return sequence;
}

function verificaPertence(numero, sequencia) {
  for (var i = 0; i < sequencia.length; i++) {
    if (numero === sequencia[i]) {
      return true; // O número pertence à sequência
    }
  }

  return false; // O número não pertence à sequência
}

// Exemplo de uso
var numeroInformado = 13; // Número a ser verificado
var sequenciaFibonacci = fibonacci(numeroInformado);

console.log("Sequência de Fibonacci:", sequenciaFibonacci);

if (verificaPertence(numeroInformado, sequenciaFibonacci)) {
  console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
