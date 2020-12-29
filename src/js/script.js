
/*tabs*/

document.querySelectorAll('.tabs-buttons__item').forEach((i) =>
  i.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href').replace('#', '')

    document.querySelectorAll('.tabs-buttons__item').forEach((child) => 
      child.classList.remove('tabs-buttons__item--active')
        )

    document.querySelectorAll('.tabs-content__item').forEach((child) => 
      child.classList.remove('tabs-content__item--active')
    )
    i.classList.add('tabs-buttons__item--active')
    document.getElementById(id).classList.add('tabs-content__item--active')
  })
)
document.querySelector('.tabs-buttons__item').click()

/*validation authorization*/

const formAuthorization = document.getElementById('form-authorization')
const userNameAuthorization = document.getElementById('userNameAuthorization')
const passwordAuthorization = document.getElementById('passwordAuthorization')


formAuthorization.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const userNameValue = userNameAuthorization.value.trim()
  const passwordValue = passwordAuthorization.value.trim()

  if(userNameValue === "") {
    //show error
    // add error class
    setErrorFor(userNameAuthorization, 'Заполните имя пользователя')
  } else {
    // add success class
    setSuccessFor(userNameAuthorization)
  }
  if(passwordValue === '') {
    setErrorFor(passwordAuthorization, 'Введите пароль')
  } else {
    setSuccessFor(passwordAuthorization)
  }
}
  function setErrorFor(input, message) {
      const authorizationForm = input.parentElement
      const small = authorizationForm.querySelector('small')
      //add error message  inside small
      small.innerText = message
      // add error class
      authorizationForm.className = 'authorization__form error'
    }
  function setSuccessFor(input) {
    const authorizationForm = input.parentElement
    authorizationForm.className = 'authorization__form success'
    }