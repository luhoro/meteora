import { connectApi } from "./connectApi.js"
import { cardProducts } from "./cardProducts.js"

const formSearch = document.querySelector('#header-search')
const categories = document.querySelectorAll('[data-categorie-id]')
const listProducts = document.querySelector('[data-products]')
let filterCategorie 
let arrayProducts

formSearch.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputSearch = document.querySelector('#input-search').value.toLowerCase()

  searchProducts(inputSearch)
})

categories.forEach(card => card.addEventListener('click', (event) => {
  const idCategorie = card.getAttribute('data-categorie-id')

  filterProducts(idCategorie)
}))


async function filterProducts(idCategorie) {
  try {
    const products = await connectApi.getProducts()
    const filterProducts = products.filter(product => product.category_id === parseInt(idCategorie) ? product : null)

    if (filterCategorie == idCategorie) {
      listProducts.innerHTML = ''
      products.forEach(product => cardProducts.getCard(product))
      cardProducts.toggleModal(products)
      filterCategorie = ''

    } else {
      listProducts.innerHTML = ''
      filterProducts.forEach(product => arrayProducts = + cardProducts.getCard(product))
      cardProducts.toggleModal(products)
      filterCategorie = idCategorie

    }

  } catch (error) {
    console.log(error)
  }
}

async function searchProducts(inputSearch) {
  try {
    const products = await connectApi.getProducts()

    const filterProducts = products.filter(product => {
      const name = product.name.toLowerCase().includes(inputSearch)
      const category = product.category.toLowerCase().includes(inputSearch)
      const description = product.description.toLowerCase().includes(inputSearch)

      if (name || category || description) {
        return product
      }
    })

    listProducts.innerHTML = ''

    if (filterProducts.length === 0) {
      const sectionProducts = document.querySelector('[data-products]')
      sectionProducts.innerHTML = `
        <h4 class="bg-gray-100 col-span-3 text-center rounded-3xl font-bold p-6 text-gray-600 text-xl">
          Ops, não temos este produto! 
        </h4>
      `
    }

    filterProducts.forEach(product => arrayProducts = + cardProducts.getCard(product))
    cardProducts.toggleModal(products)

  } catch (error) {

  }
}
