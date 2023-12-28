const popLegales = document.querySelector('#legales')
const btnLegales = document.querySelector('#openLegales')
const closePopin = document.querySelector('.closePopin')

btnLegales.addEventListener('click', function(e){
    e.preventDefault()
    popLegales.classList.add('show')
    return false
}, false)

closePopin.addEventListener('click', function(e){
    e.preventDefault()
    popLegales.classList.remove('show')
    return false
})