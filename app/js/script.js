const hamburger = document.querySelector('.header-hamburger');
const fadeElem = document.querySelectorAll('.fade-element');
const header = document.querySelector('.header');
const body = document.querySelector('body');

hamburger.addEventListener("click",function(){
    if(header.classList.contains('open')){ //Close Hamburger
        header.classList.remove('open');
        body.classList.remove('no-scroll')
        fadeElem.forEach(function(elem){
            elem.classList.remove('fade-in')
            elem.classList.add('fade-out');
        })
    } else { //Open Hamburger
        header.classList.add('open');
        body.classList.add('no-scroll')
        fadeElem.forEach(function(elem){
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in')
            
        })
    }
})
