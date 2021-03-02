const hamburger = document.querySelector('.header-hamburger');

hamburger.addEventListener("click",function(){
    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
    } else {
        hamburger.classList.add('open');
    }
})
