import { connectApi } from "./connectApi.js"

const sectionCards = document.querySelector('[data-categories]')

function showCard(card) {
  const elementCard = `
    <div class="col-span-1" >
      <img src="${card.src}" alt="${card.name}" data-id="${card.id}" class="w-full" />
        <button class="bg-black transition-all hover:text-green-prim text-white w-full h-9 text-base py-2">
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
    console.log(error)
  }
})
