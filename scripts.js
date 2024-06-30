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

// captura o evento do form
form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date()
  }

}