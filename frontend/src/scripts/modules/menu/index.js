class Menu {
  constructor () {
    const toggle = document.querySelector('.js-toggle-menu')
    const menu = document.querySelector('.js-menu')

    if (toggle && menu) {
      this.openMenu(toggle, menu)

      document.addEventListener('keydown', evt => {
        if (evt.keyCode === 27) this.closeMenu(toggle, menu)
      })
    }
  }

  openMenu (toggle, menu) {
    toggle.onclick = evt => {
      evt.preventDefault()

      if (!toggle.classList.contains('-active')) {
        this.toggleOverlay(false)
        this.toggleMenu(toggle, menu, false)
      } else {
        this.toggleOverlay(true)
        this.toggleMenu(toggle, menu, true)
      }
    }
  }

  closeMenu (toggle, menu) {
    this.toggleOverlay(true)
    this.toggleMenu(toggle, menu, true)
  }

  toggleOverlay (isVisible) {
    let body = document.querySelector('body')

    if (isVisible) {
      body.classList.remove('-menu-opened')
    } else {
      body.classList.add('-menu-opened')
    }
  }

  toggleMenu (toggle, menu, isVisible) {
    if (isVisible) {
      toggle.classList.remove('-active')
      menu.classList.remove('-opened')
    } else {
      toggle.classList.add('-active')
      menu.classList.add('-opened')
    }
  }
}

export default Menu
