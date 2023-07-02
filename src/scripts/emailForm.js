function emailConfirm(event) {

  // VARIABLES
  const formEmail = document.querySelector('[data-form-email]')
  const inputEmail = document.querySelector('#inputEmail')
  const errorEmail = document.querySelector('#errorEmail')
  const modalEmail = document.querySelector('[data-email]')
  const closeModal = document.querySelector('#closeModal')


  // FUNCTIONS
  function sendEmail() {
    const value = inputEmail.value

    if (value === '' ) {
      errorEmail.innerHTML = 'Por favor, insira um email!'

    } else if (value.length < 10) {
      errorEmail.innerHTML = 'Por favor, insira um email válido!'

    } else {
      modalEmail.show()
      setTimeout(() => modalEmail.close(), 4000)
      errorEmail.innerHTML = ''
      
    }
  }

  // EVENTS
  formEmail.addEventListener('submit', e => {
    e.preventDefault()
    sendEmail()
  })

  closeModal.addEventListener('click', () => modalEmail.close())

}

export const emailForm = {
  emailConfirm
}