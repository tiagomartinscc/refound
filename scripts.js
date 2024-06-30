// seleciona os elementos do formulario

const amount = document.getElementById('amount')

// capturando o input para formatar o valor
amount.oninput = () => {
  // remove caracteres nao numericos
  let value = amount.value.replace(/\D+/g, '')

  // converte para centavos
  value = Number(value) / 100
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  })
}