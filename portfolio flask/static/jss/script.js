const sumMoonContainer = document.querySelector('.sun-moon-container')
const newe= document.querySelector('.navbar-toggler-icon')


document.querySelector('.them-toogle-btn').addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        // document.querySelector('.them-toogle-btn').textContent ="Dark"
        // nav.classList.add('navbar-dark')
        document.querySelector('.them-toogle-btn').textContent ="Dark"
        console.log('dark')
        
    }
    else{
        document.getElementsByClassName('dark')
        document.body.classList.remove('dark')
    
        // document.querySelector('.them-toogle-btn').textContent ="Light"
        // nav.classList.remove('navbar-dark')
        // document.addEventListener('DOMContentLoaded', function() {
            // });
            // navbarBrand.style.color = 'black';
            document.documentElement.style.setProperty('--bs-emphasis-color-rgb', '#822714');
        document.querySelector('.them-toogle-btn').textContent ="Light"

        
        console.log('light')
        // document.querySelector('.them-toogle-btn').textContent ="Light"
    }
    // const currentRotation = parseInt(getComputedStyle(sumMoonContainer).getPropertyValue('.--rotation'))
    // sumMoonContainer.style.setProperty('--rotation',currentRotation + 180)
})

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    console.log('dark')
    document.documentElement.style.setProperty('--bs-emphasis-color-rgb', '#822714');
    document.body.classList.toggle('dark')
    document.querySelector('.them-toogle-btn').textContent ="Dark"
    
    document.querySelector('.them-toogle-btn').textContent ="Dark"
    
    
} else {
    document.body.classList.remove('dark')
    document.getElementsByClassName('dark')
    let nav = document.getElementById('nav')
    document.querySelector('.them-toogle-btn').textContent ="Light"
    console.log('light')
}



function flipCard() {
    var card = document.getElementById('card');
    card.classList.toggle('flipped');
  }
  