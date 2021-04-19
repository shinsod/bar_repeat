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
   

//service

$(document).ready(function(){
    $('.service__carousel').slick({
        prevArrow:'<button type="button" class="slick-prev"> <img src="icons/arrows/arrow-prev.png"></button>',
        nextArrow:'<button type="button" class="slick-next"> <img src="icons/arrows/arrow-next.png"></button>',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
  });
//suggest
$(document).ready(function(){
    $('.carousel-suggest').slick({
        prevArrow:'<button type="button" class="slick-prev"> <img src="icons/arrows/arrow-prev.png"></button>',
        nextArrow:'<button type="button" class="slick-next"> <img src="icons/arrows/arrow-next.png"></button>',
        infinite: true,
        dots: true,
        appendDots:$('.suggest__counter'),
        slidesToShow: 4,
        slidesToScroll:4,
        responsive:[
            {
                breakpoint: 1720,
                settings: {
                    arrows: false
                }
                
            },
            {
                breakpoint: 1601,
                settings:{
                    arrows:false,
                    slidesToShow: 3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint: 992,
                settings:{
                    arrows:false,
                    slidesToShow: 2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint: 576,
                settings:{
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }

        ]

    });
    $('.carousel-suggest').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let slide_num = Math.floor(currentSlide/4)+1;
        if (slide_num < 10) { slide_num = '0' + slide_num; }
        $('.suggest__counter-current').text(slide_num);
    });
    

});

