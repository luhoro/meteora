import { connectApi } from "./connectApi.js"

const sectionCards = document.querySelector('[data-categories]')

function getCard(card) {
  sectionCards.innerHTML += `
    <button class="col-span-1" data-categorie-id="${card.id}">
      <img src="${card.src}" alt="${card.name}" class="w-full" />
      <p class="bg-black text-center transition-all hover:text-green-prim text-white w-full h-9 text-base py-2">
        ${card.name}
      </p>
    </button>
  `
}

async function showCardCategories() {
  try {
    const categories = await connectApi.getCategories()
    categories.map(category => getCard(category))

  } catch (error) {
    sectionCards.innerHTML = `<p>Ops, houve um erro ao carregar as categorias!</p>`
  }
}
showCardCategories()
