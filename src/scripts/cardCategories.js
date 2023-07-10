import { connectApi } from "./connectApi.js"

const sectionCards = document.querySelector('[data-categories]')

function showCard(card) {
  const elementCard = `
    <div class="col-span-1 hover:outline-black" data-id="${card.id}">
      <img src="${card.src}" alt="${card.name}" class="w-full" />
      <button class="bg-black transition-all text-white hover:text-green-700 w-full h-9 text-base py-2">
        ${card.name}
      </button>
    </div>
  `
  sectionCards.innerHTML += elementCard
}


window.addEventListener('load', async () => {
  try {
    const categories = await connectApi.getCategories()
    categories.map( category => showCard(category) )

  } catch (error) {
    sectionCards.innerHTML = `<p>Ops, houve um erro ao carregar as categorias dos produtos!</p>
      
    `
  }
})
