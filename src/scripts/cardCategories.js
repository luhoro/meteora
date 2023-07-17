import { connectApi } from "./connectApi.js"
import { cardProducts } from "./cardProducts.js"

const formSearch = document.querySelector('#header-search')
const categories = document.querySelectorAll('[data-categorie-id]')
const listProducts = document.querySelector('[data-products]')
let filterCategorie = ''

formSearch.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputSearch = document.querySelector('#input-search').value.toLowerCase()

  console.log(inputSearch)
  searchProducts(inputSearch)
})

categories.forEach(card => card.addEventListener('click', (event) => {
  const idCategorie = card.getAttribute('data-categorie-id')
  filterProducts(idCategorie)
}))



async function filterProducts(idCategorie) {
  try {
    listProducts.innerHTML = ''
    const products = await connectApi.getProducts()
    const filterProducts = products.filter( product => product.category_id === parseInt(idCategorie) ? product : null )
    
    let arrayProducts
    filterProducts.forEach( product => arrayProducts =+ cardProducts.getCard(product) )
    cardProducts.toggleModal(products)

  } catch (error) {
    console.log(error)
  }
}

async function searchProducts(inputSearch) {
  try {
    const products = await connectApi.getProducts()

    if (inputSearch == filterCategorie) {
      inputSearch = ''
    } 

  } catch (error) {
    
  }
}
