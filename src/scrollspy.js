export class ScrollSpy {
  constructor (menu, options = {}){
    if (!menu) throw new Error "Error"
    if (typeof options != 'object') throw new Error "Error"
    let default_option = {
      offset: 0,
      menu_target: 'li > a',
      section: '.page',
      menu_active: 'active',
    }
    this.list_menu = menu instanceof HTMLElement ? menu : document.queryElement(menu)
    this.options = Object.assign({}, default_option, options)
    this.sections = document.queryElement(this.options.section)
  }
  onScroll (){
    this.sections.forEach((section) => {
      let current_p = document.documentElement.scrollTop
      let section_p = section.position().top
      if (section_p <= current_p + this.options.offset) {
        let section_id = document.getAttribute('id')
        let active_menu = this.list_menu.querySelector(`[href="#${section_id}"]`)
        let deactive_menu = this.list_menu.querySelector('[class="active"]')
        deactive_menu.setAttribute('data-active', 'false')
        active_menu.setAttribute('data-active', 'true')
      }
    })
  }
}
