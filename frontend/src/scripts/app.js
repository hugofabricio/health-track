// Load jQuery from NPM
import $ from 'jquery'

import fiap from '../images/fiap.svg'

import './modules/mask'
import './modules/share'

window.jQuery = $
window.$ = $

export default class App {
  constructor () {
    console.log(
      '\n%c     ',
      `font-size: 30px; background: url(${
        window.location.origin
      }/${fiap}) no-repeat;`
    )
    console.log(
      '%cWe love to inspect codes too \ud83d\udc40\ud83d\ude42',
      'font-size: 16px; color: #ED145B'
    )
  }
}

document.addEventListener('DOMContentLoaded', () => new App())
