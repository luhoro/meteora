function openProduct() {

  // VARIABLES
  const buttonProduct = document.querySelectorAll('.buttonProducts')
  const modalProduct = document.querySelector('[data-product]')
  const closeModal = document.querySelector('#closeProductModal')

  //EVENTS
  buttonProduct.forEach(button => {
    button.addEventListener('click', () => modalProduct.showModal())
  })

  closeModal.addEventListener('click', () => modalProduct.close())
}


export const cardProduct = {
  openProduct
}
