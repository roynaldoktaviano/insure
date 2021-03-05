const hamburger = document.querySelector('.header-hamburger');
const fadeElem = document.querySelectorAll('.fade-element');
const header = document.querySelector('.header');
const html = document.querySelector('html');

hamburger.addEventListener("click",function(){
    if(header.classList.contains('open')){ //Close Hamburger
        header.classList.remove('open');
        html.classList.remove('no-scroll')
        fadeElem.forEach(function(elem){
            elem.classList.remove('fade-in')
            elem.classList.add('fade-out');
        })
    } else { //Open Hamburger
        header.classList.add('open');
        html.classList.add('no-scroll')
        fadeElem.forEach(function(elem){
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in')
            
        })
    }
})
