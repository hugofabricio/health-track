const avatarInput = () => {
  let input = document.querySelector('.avatar-input')

  if (input) {
    input.addEventListener('change', (evt) => {
      let files = evt.target.files
      let image = files[0]
      let imageURL = URL.createObjectURL(image)
      document.querySelector('.avatar-label').style.backgroundImage = `url('${imageURL}')`
    })
  }
}

export default avatarInput
