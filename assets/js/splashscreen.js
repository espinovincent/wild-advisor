//## Entering main app from Splashcreen
enterButton.addEventListener('click', function(e){

    e.preventDefault()
    splashscreen.classList.remove('active')
    homepage.classList.add('active')
    return false

}, false)