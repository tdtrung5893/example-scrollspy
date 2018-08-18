module.exports = (selector, options = {}) => {
  const {ScrollSpy} = require('./scrollspy')
  const instance = new ScrollSpy(selector, options)

  window.onload = instance.onScroll()
  window.addEventListener('scroll', () => instance.onScroll())

  return instance
}