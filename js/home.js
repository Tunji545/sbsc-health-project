document.getElementById('index-menu').addEventListener('click', () => {
  document.getElementById('nav').classList.remove('ul-width')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.getElementById('nav').classList.add('ul-width')
})
