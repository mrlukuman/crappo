const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector("#overlay");
const darkBlue = document.querySelector('#dark-back');
const body = document.querySelector("body")

btnHamburger.addEventListener('click', 
function() {

    if (darkBlue.classList.contains('open')){  // Close hambuger menu
        darkBlue.classList.remove('open');
        overlay.classList.remove("overlay");
        body.classList.remove("noscroll")

    }else{ // open hamburgur menu
        darkBlue.classList.add('open');
        overlay.classList.add('overlay');
        body.classList.add("noscroll")
        
    
    }
});