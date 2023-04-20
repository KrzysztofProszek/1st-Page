let hamburgerButton = document.querySelector('.hamburger')
let navigation = document.querySelector('.navigation')

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('open')
})

let navigationLinks = document.querySelectorAll('.menu li a')

navigationLinks.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerButton.classList.remove('active')
        navigation.classList.remove('open')
    })
})