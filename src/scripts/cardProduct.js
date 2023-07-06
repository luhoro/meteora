// VARIABLES
const buttonProduct = document.querySelectorAll('.buttonProducts')
const modalProduct = document.querySelector('[data-product]')
const closeModal = document.querySelector('#closeProductModal')

//EVENTS
buttonProduct.forEach(button => {
  button.addEventListener('click', () => modalProduct.showModal())
})

closeModal.addEventListener('click', () => modalProduct.close())



async function conectaAPI() {

}

function createCard() {
  // determinar estrutura html para receber parametros
}

function showCard() {
  // percorrer todos os produtos da api e gerar html para cada
}

function createModal() {
  // determinar estrutura html para receber parametros dinâmicos
  // dentro de alguns parametros, utilizar foreach para imprimir personalizado
}

function openModal() {
  // percorrer os ids dos produtos da api e comparar com o id clicado
  // se for igual, gerar o modal correspondente a informação do elemento clicado
}

// https://real-eel-tights.cyclic.app/products