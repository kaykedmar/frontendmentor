const entrada = document.querySelector('.entrada-usuario')
const btnEnvio = document.querySelector('.envioBtn')
const success = document.querySelector('.success')
const main = document.querySelector('main')

btnEnvio.addEventListener('click', () => {
  main.classList.add('hide')
  success.classList.remove('hide')
})