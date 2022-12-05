var nav = document.querySelector('nav');

document.querySelector(".navbar-toggler").addEventListener('click', function(){
    nav.style.background ='#082032'
})


        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 100){
                nav.style.background ='#082032'
                nav.style.text = 'blue'
            }
            else{
                nav.style.background= "transparent"
            }
        })


$(document).ready(function() {
    setTimeout(function() {
        $("#welcome").modal('show');

    }, 100);
    // $(".navbar-toggler").click(function() {
    //     $(".navbar-nav").toggleClass("actv");
    // })
});


// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// Counter Up 
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
})

// Testimonial Splide
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
  } );
  
  splide.mount();