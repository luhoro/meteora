const apiURL = 'src/database/db.json'

async function getCategories() {
  try {
    const connect = await fetch(apiURL)
    const conversion = await connect.json()
    const categories = conversion.categories

    return categories

  } catch (error) {
    console.log(error)
  }
}

async function getProducts() {
  try {
    const connect = await fetch(apiURL)
    const conversion = await connect.json()
    const products = conversion.products

    return products

  } catch (error) {
    console.log(error)
  }
}

export const connectApi = {
  getCategories,
  getProducts
}