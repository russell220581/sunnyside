const mobileMenu = document.querySelector('#hamburger');
const header = document.querySelector('.header');

mobileMenu.addEventListener('click', (e) => {    
    if ( header.classList.contains('open') ) { // close mobile menu
        header.classList.remove('open');
    } else { // open mobile menu
        header.classList.add('open');
    }
});