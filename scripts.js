// seleciona os elementos do formulario

const amount = document.getElementById('amount')
amount.oninput = () => {
  console.log(amount.value)
}