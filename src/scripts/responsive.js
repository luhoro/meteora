export default function headerMenu() {
  const menuButton = document.querySelector('#menu-switch')
  const menu = document.querySelector('[data-mobile]')

  let open = false

  function toggleButton() {
    if (open === false) {
      open = true
      menu.classList.remove('hidden')
      menuButton.src = './src/images/icons/menu-close.svg'
    } else {
      open = false
      menu.classList.add('hidden')
      menuButton.src = './src/images/icons/menu.svg'
    }
  }

  menuButton.addEventListener('click', () => {
    toggleButton()
    console.log('aaaa')
  })  
}
