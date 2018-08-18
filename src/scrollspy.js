export class ScrollSpy {
  constructor (menu, options = {}) {
    let defaultOptions = {
      offset: 0,
      menu_target: 'li > a',
      section_class: '.scrollspy',
      active_class: 'active',
    }
    this.list_menu = menu instanceof HTMLElement ? menu : document.querySelector(menu)
    this.options = Object.assign({}, defaultOptions, options)
    this.sections = document.querySelectorAll(this.options.section_class)
  }
  
  onScroll () {
    this.sections.forEach((section) => {
      const current_p = document.documentElement.scrollTop
      const section_p = section.offsetTop
      if (section_p <= current_p + this.options.offset) {
        const section_id = section.getAttribute('id')
        const active_menu = this.list_menu.querySelector(`[href="#${section_id}"]`)
        const deactive_menu = this.list_menu.querySelector(`[class="active"]`)
        deactive_menu.setAttribute('data-active', 'false')
        deactive_menu.classList.remove(this.options.active_class)
        active_menu.setAttribute('data-active', 'true')
        active_menu.classList.add(this.options.active_class)
      }
    })
  }
}