function calcularEstatisticasFaturamento(vetorFaturamento) {
  var menorFaturamento = Infinity;
  var maiorFaturamento = -Infinity;
  var totalFaturamento = 0;
  var diasComFaturamentoSuperiorMedia = 0;
  var diasNoAno = 0;

  for (var i = 0; i < vetorFaturamento.length; i++) {
    var faturamentoDia = vetorFaturamento[i];

    if (faturamentoDia !== 0) {
      diasNoAno++;
      totalFaturamento += faturamentoDia;

      if (faturamentoDia < menorFaturamento) {
        menorFaturamento = faturamentoDia;
      }

      if (faturamentoDia > maiorFaturamento) {
        maiorFaturamento = faturamentoDia;
      }
    }
  }

  var mediaAnual = totalFaturamento / diasNoAno;

  for (var j = 0; j < vetorFaturamento.length; j++) {
    if (vetorFaturamento[j] > mediaAnual) {
      diasComFaturamentoSuperiorMedia++;
    }
  }

  return {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    diasComFaturamentoSuperiorMedia: diasComFaturamentoSuperiorMedia
  };
}

// Exemplo de uso
var vetorFaturamentoAnual = [1500, 2000, 0, 3000, 2500, 0, 1800, 2100, 2200, 0, 1900, 2300, 2400, ...]; // Vetor com os valores de faturamento diário ao longo do ano

var estatisticas = calcularEstatisticasFaturamento(vetorFaturamentoAnual);

console.log("Menor valor de faturamento: " + estatisticas.menorFaturamento);
console.log("Maior valor de faturamento: " + estatisticas.maiorFaturamento);
console.log("Número de dias com faturamento superior à média anual: " + estatisticas.diasComFaturamentoSuperiorMedia);
