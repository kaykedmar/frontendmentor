const inputEmail = document.querySelector('#email')

const btnEmail = document.querySelector('button')
const btnBack = document.querySelector('.modal button')

const screen1 = document.querySelector('main')
const screen2 = document.querySelector('.modal')

btnEmail.onclick = (event) => { 
  event.preventDefault()

  screen1.classList.add('hidde')
  screen2.classList.remove('hidde')

}

btnBack.onclick = (e) => { 
  screen1.classList.remove('hidde')
  screen2.classList.add('hidde')
}
