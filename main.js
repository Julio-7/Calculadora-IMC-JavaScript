let button = document.getElementById('btn')

button.addEventListener('click', () => {
  const altura = parseInt(document.getElementById('altura').value)
  const peso = parseFloat(document.getElementById('peso').value)
  const resultado = document.getElementById('resposta')
  let altura_status = false, peso_status = false

  if (altura === '' || isNaN(altura) || (altura <= 0)) {
    document
      .getElementById('altura_erro')
      .innerText = 'Por favor forneça uma altura valida'
  } else {
    document.getElementById('altura_erro').innerText = ''
    altura_status = true
  }

  if (peso === '' || isNaN(peso) || (peso <= 0)) {
    document
      .getElementById('peso_erro')
      .innerText = 'Por favor forneça um peso valido'
  } else {
    document
      .getElementById('peso_erro')
      .innerText = ''
    peso_status = true
  }

  if (altura_status && peso_status) {
    const imc = (peso / ((altura * altura) / 10000)).toFixed(2)
    if (imc < 18.5) {
      resultado.innerText = `Magreza: ${imc}`

    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerText = `Normal: ${imc}`

    } else if (imc >= 25.0 && imc < 29.9) {
      resultado.innerText = `Sobrepeso: ${imc}`

    } else if (imc >= 30.0 && imc < 39.9) {
      resultado.innerText = `Obesidade: ${imc}`

    } else {
      resultado.innerText = `Obesidade grave: ${imc}`
    }

  } else {
    alert('O formulário contém erros')
    resultado.innerText = ''
  }

  resultado.style.opacity = 1

  setTimeout(function () {
    resultado.style.opacity = 0;
    button.removeAttribute('disabled')
  }, 10000)
})