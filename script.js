document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form')

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(contactForm)

    const jsonData = {}
    
    for(const [name, value] of data.entries()) {
      jsonData[name] = value
    }
    console.log(jsonData)
    
    window.open(`mailto:jonasfelixdesouza@gmail.com?subject=${jsonData.name}&body=${jsonData.message}`)
  })
})