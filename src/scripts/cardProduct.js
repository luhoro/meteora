import { connectApi } from "./connectApi.js"

const sectionCards = document.querySelector('[data-products]')

function showCard(card) {
  sectionCards.innerHTML += `
  <div class="product" data-id="${card.id}">
    <img src="${card.src}" alt="" class="w-full h-fit"/>
    <div class="p-4 pt-3">
      <h4 class="font-bold">${card.name}</h4>
      <span class="text-sm mt-3 mb-4">${card.description}</span>
      <p class="font-bold">R$ ${card.price},00</p>
      <button class="buttonProducts">Ver mais</button>
    </div>
  </div>
  `
}


async function getCardProducts() {
  try {
    const products = await connectApi.getProducts()
    products.map(product => showCard(product))
    toggleModal()

  } catch (error) {
    sectionCards.innerHTML = `<p>Ops, houve um erro ao carregar os produtos!</p>`
  }
}

getCardProducts()

function toggleModal() {
  const buttonProduct = document.querySelectorAll('.buttonProducts')
  const modalProduct = document.querySelector('[data-product]')
  const closeModal = document.querySelector('#closeProductModal')

  //EVENTS
  buttonProduct.forEach(button => {
    button.addEventListener('click', () => modalProduct.showModal())
  })

  closeModal.addEventListener('click', () => modalProduct.close())
}
// VARIABLES
