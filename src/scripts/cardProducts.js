import { connectApi } from "./connectApi.js"

const sectionCards = document.querySelector('[data-products]')
const modalProduct = document.querySelector('[data-modal-product]')

function getCard(card) {
  sectionCards.innerHTML += `
  <div class="col-span-1 border border-[#00000020] rounded-lg flex flex-col justify-between ">
    <div class="h-96">
      <img src="${card.src}" alt="${card.name}" class="w-full h-full object-cover rounded-t-lg"/>
    </div>
    <div class="p-4 pt-3 h-full flex flex-col justify-between">
      <h4 class="font-bold">${card.name}</h4>
      <span class="text-sm mt-3 mb-4">${card.description}</span>
      <p class="font-bold">R$ ${card.price},00</p>
      <button id="${card.id}" class="buttonProducts bg-purple-prim py-2 px-4 text-white border mt-[10px] transition-all hover:text-purple-prim hover:bg-transparent hover:border-purple-prim rounded-md w-fit">
       Ver mais
      </button>
    </div>
  </div>
  `
}

async function toggleModal(products) {

  const buttonProducts = document.querySelectorAll('.buttonProducts')

  buttonProducts.forEach(buttonProduct => buttonProduct.addEventListener('click', event => {
    const id = event.target.id

    products.map(product => {
      if (product.id == id) {
        getModal(product)
        modalProduct.showModal()

        const closeModal = document.querySelector('#closeProductModal')
        closeModal.addEventListener('click', () => modalProduct.close())
      }
    })
  }))
}

function getModal(product) {
  modalProduct.innerHTML = `
    <div class="bg-black py-4 px-7 flex gap-5 justify-between items-center ">
      <img src="./src/images/icons/check.svg" alt=""/>
      <p class="text-white text-xl w-full"> Confira detalhes sobre o produto </p>

      <button id="closeProductModal" >
        <img src="./src/images/icons/close.svg" alt="Fechar confirmação cadastro"/>
      </button>
    </div>

    <div class="bg-white p-4 ">
      <div class="grid grid-cols-1 md:grid-cols-2 w-full border border-gray-300 h-fit">

        <div class="w-full h-full md:max-h-[80vh]">
          <img src="${product.src}" alt="${product.name}" class="object-cover h-full w-full"/>
        </div>

        <div class="flex flex-col px-4 pt-6 gap-4 justify-between h-full md:max-h-[80vh]">
          <div class="flex flex-col gap-6">
            <h4 class="font-bold">${product.name}</h4>
            <span>${product.description}</span>
            <div class="w-full h-[1px] bg-black"></div>
            <p class="text-xl font-bold">R$ ${product.price},00</p>
            <span class="text-gray-400">Vendido e entregue por Riachuelo</span>
          </div>

          <div id="color" class="border-t border-gray-prim">
            <h5 class="py-4 font-bold">Cores:</h5>

            <div class="flex gap-5">
              ${product.colors.map(color => {
                return `
                  <div class="flex flex-col gap-2 items-center">
                    <input type="radio" name="color" id="${color}">
                    <label for="${color}">${color}</label>
                  </div>            
                `
              }).join('')}
            </div>
          </div>

          <div id="size" class="border-t border-gray-prim">
            <h5 class="py-4 font-bold">Tamanhos:</h5>
            <div class="flex gap-5">
              ${product.sizes.map(size => {
                return `
                  <div class="flex flex-col gap-2 items-center">
                    <input type="radio" name="num" id="${size}">
                    <label for="${size}">${size}</label>
                  </div>
                `
              }).join('')}
            </div>
          </div>
          <button class="w-fit h-fit px-4 py-2 mb-4 border transition-all border-purple-prim bg-purple-prim text-white font-bold hover:bg-white hover:text-purple-prim">
            Adicionar à sacola
          </button>
        </div>
      </div>
    </div>
  `
}

async function showCardProducts() {
  try {
    const products = await connectApi.getProducts()
    products.map(product => getCard(product))
    toggleModal(products)

  } catch (error) {
    sectionCards.innerHTML = `<p>Ops, houve um erro ao carregar os produtos!</p>`
  }
}
showCardProducts()


export const cardProducts = {
  getCard,
  showCardProducts,
  toggleModal
}