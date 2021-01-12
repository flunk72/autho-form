
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
const formAuthentication = document.getElementById('formAuthentication')
const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')


formAuthorization.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputsAuthorization()
})

function checkInputsAuthorization() {
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

/*validation authentication*/

formAuthentication.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputsAuthentication()
})

function checkInputsAuthentication() {
  const nameValue = name.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordConfirmationValue = passwordConfirmation.value.trim()

  if(nameValue === "") {
    //show error
    // add error class
    setErrorFor(name, 'Заполните имя пользователя')
  } else {
    // add success class
    setSuccessFor(name)
  }
  if(emailValue === '') {
    setErrorFor(email, 'Введите e-mail')
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Неправильно введен e-mail')
  } else {
    setSuccessFor(email)
  }
  if(passwordValue.length < 6) {
    setErrorFor(password, 'Введите корректный пароль. Пароль не может быть менее 6 символов')
  } else {
    setSuccessFor(password)
  }
  if(passwordConfirmationValue.length < 6) {
    setErrorFor(passwordConfirmation, 'Подтвердите пароль')
  } else if(passwordValue !== passwordConfirmationValue) {
    setErrorFor(passwordConfirmation, 'Пароли не совпадают')
  } else {
    setSuccessFor(passwordConfirmation)
  }
}

function setErrorFor(input, message) {
  const authenticationForm = input.parentElement
  const small = authenticationForm.querySelector('small')
      //add error message inside small
  small.innerText = message
      // add error class
  authenticationForm.className = 'authentication__form error'
}

function setSuccessFor(input) {
  const authenticationForm = input.parentElement
  authenticationForm.className = 'authentication__form success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

document.getElementById('check').addEventListener('change', function(e) {
  document.getElementById('btn').disabled = !e.target.checked
})
