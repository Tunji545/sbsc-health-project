document.getElementById('index-menu').addEventListener('click', () => {
  document.getElementById('nav').classList.remove('ul-width')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.getElementById('nav').classList.add('ul-width')
})

// CONTACT PAGE - SESSION STORAGE
document.querySelector('.form').addEventListener('click', (e) => {
  e.preventDefault()
  let inputEls = document.querySelectorAll('input')
  let textObj
  let emailObj
  let textAreaObj
  let arr = []
  let inputObjects
  inputEls = [...inputEls]
  const textAreaEl = document.querySelector('textarea')
  const inputs = () => {
    inputEls.map((input) => {
      let inputValue = input.value
      let txtAreaValue = textAreaEl.value
      console.log(inputValue, txtAreaValue)
      if (input.type === 'text' && inputValue) {
        textObj = {
          text: inputValue,
        }
      }
      if (input.type === 'email' && inputValue) {
        emailObj = {
          email: inputValue,
        }
      }
      if (txtAreaValue) {
        textAreaObj = {
          textArea: txtAreaValue,
        }
      }
      inputObjects = { ...emailObj, ...textObj, ...textAreaObj }

      // console.log(inputObjects)
    })
    arr.push(inputObjects)
    console.log(arr)
    sessionStorage.setItem('contactDetails', JSON.stringify(arr))
    let form = JSON.parse(localStorage.getItem('contactDetails'))
    console.log(form)
  }
  inputs()
  // console.log(textAreaEl)
})
