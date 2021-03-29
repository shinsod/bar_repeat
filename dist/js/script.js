$(document).ready(function(){
    $('.carousel-promo').slick({
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/arrows/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/arrows/arrow-next.png"></button>',
        appendDots:$('.promo__counter'),
        dots: true,
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