// seleciona os elementos do formulario

const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

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

form.onsubmit = (event) => {
  event.preventDefault()
}