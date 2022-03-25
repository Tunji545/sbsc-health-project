document.getElementById('index-menu').addEventListener('click', () => {
  document.getElementById('nav').classList.remove('ul-width')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.getElementById('nav').classList.add('ul-width')
})

// Form Validation
const errText = document.querySelector('.err-hint')
const errBorder = document.querySelector('.err-border')

// CONTACT PAGE - SESSION STORAGE
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault()
  let inputEls = document.querySelectorAll('input')
  let textAreaEl = document.querySelector('textarea')
  let textObj
  let emailObj
  let textAreaObj
  let arr = []
  let inputObjects
  inputEls = [...inputEls]
  const inputs = () => {
    inputEls.map((input) => {
      document.addEventListener('input', () => {
        input.classList.remove('err-border')
        input.nextElementSibling.classList.add('err-hide')
      })
      document.addEventListener('onfocus', () => {
        textAreaEl.classList.remove('err-border')
        textAreaEl.nextElementSibling.classList.add('err-hide')
      })
      let inputValue = input.value
      let txtAreaValue = textAreaEl.value
      if (input.type === 'text' && inputValue) {
        textObj = {
          text: inputValue,
        }
        console.log(input)
      } else {
        input.classList.add('err-border')
        input.nextElementSibling.classList.remove('err-hide')
      }
      if (input.type === 'email' && inputValue) {
        emailObj = {
          email: inputValue,
        }
      } else {
        input.classList.add('err-border')
        input.nextElementSibling.classList.remove('err-hide')
      }
      if (inputValue && txtAreaValue) {
        textAreaObj = {
          textArea: txtAreaValue,
        }
      } else {
        textAreaEl.classList.add('err-border')
        textAreaEl.nextElementSibling.classList.remove('err-hide')
      }
      inputObjects = { ...emailObj, ...textObj, ...textAreaObj }

      // console.log(inputObjects)
    })
    arr.push(inputObjects)
    sessionStorage.setItem('contactDetails', JSON.stringify(arr))
    let form = JSON.parse(localStorage.getItem('contactDetails'))
  }
  inputs()
  // console.log(textAreaEl)
})
