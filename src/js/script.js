$(document).ready(function(){
    $('.carousel-promo').slick({
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/arrows/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/arrows/arrow-next.png"></button>',
        appendDots:$('.promo__counter'),
        dots: true,
        arrows: true,
        responsive:[
            
            {
                breakpoint: 1760,
                settings: {
                    arrows: false
                }
            }
        ]
    });
  });

  $('.carousel-promo').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let slide_num = currentSlide+1;
    if (slide_num < 10) { slide_num = '0' + slide_num; }
    $('.promo__counter-min').text(slide_num);
  });

    /*  menu-mobile */

    const humburger = document.querySelector('.header__humburger'),
            menu = document.querySelector('.mobile-menu'),
            closerf = document.querySelector('.mobile-menu__close');

    humburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closerf.addEventListener('click', () => {
        menu.classList.remove('active');

    //modal

 

});

$('[data-modal=cons]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function(){
    $('#thanks, .overlay, #consultation').fadeOut('slow');
});
   



