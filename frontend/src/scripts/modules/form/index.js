import flatpickr from 'flatpickr'
import { Portuguese } from 'flatpickr/dist/l10n/pt.js'

const validationForm = () => {
  window.addEventListener('load', () => {
    let forms = document.getElementsByClassName('needs-validation')
    Array.prototype.filter.call(forms, form => {
      form.addEventListener('submit', event => {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}

const getDatePicker = () => {
  flatpickr('.js-datepicker', {
    dateFormat: 'd/m/Y',
    locale: Portuguese
  })
}

const getDateTimePicker = () => {
  let d = new Date()

  flatpickr('.js-datetimepicker', {
    enableTime: true,
    time_24hr: true,
    dateFormat: 'd/m/Y H:i',
    locale: Portuguese,
    defaultHour: d.getHours(),
    defaultMinute: d.getMinutes()
  })
}

const getTimePicker = () => {
  let d = new Date()

  flatpickr('.js-timepicker', {
    enableTime: true,
    time_24hr: true,
    noCalendar: true,
    dateFormat: 'H:i',
    locale: Portuguese,
    defaultHour: d.getHours(),
    defaultMinute: d.getMinutes()
  })
}

const Form = () => {
  validationForm()
  getDatePicker()
  getDateTimePicker()
  getTimePicker()
}

export default Form
