function calcularEstatisticasFaturamento(vetorFaturamento) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let totalFaturamento = 0;
  let diasComFaturamentoSuperiorMedia = 0;
  let diasNoAno = 0;

  vetorFaturamento.forEach((faturamentoDia) => {
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
  });

  const mediaAnual = totalFaturamento / diasNoAno;

  vetorFaturamento.forEach((faturamentoDia) => {
    if (faturamentoDia > mediaAnual) {
      diasComFaturamentoSuperiorMedia++;
    }
  });

  return {
    menorFaturamento: menorFaturamento,
    maiorFaturamento: maiorFaturamento,
    diasComFaturamentoSuperiorMedia: diasComFaturamentoSuperiorMedia,
  };
}

// Exemplo de uso
const vetorFaturamentoAnual = [1500, 2000, 0, 3000, 2500, 0, 1800, 2100, 2200, 0, 1900, 2300, 2400, /*... preencha com os valores de faturamento diário ao longo do ano ...*/];

const estatisticas = calcularEstatisticasFaturamento(vetorFaturamentoAnual);

console.log("Menor valor de faturamento: " + estatisticas.menorFaturamento);
console.log("Maior valor de faturamento: " + estatisticas.maiorFaturamento);
console.log("Número de dias com faturamento superior à média anual: " + estatisticas.diasComFaturamentoSuperiorMedia);
