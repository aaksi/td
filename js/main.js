
$(function(){
   
    $('.advantages__btn').on('click', function(){
        $(this).hide(),
        $('.advantages__descr').fadeIn();
    });
    $('.services__btn').on('click', function(){
        $('.services__card:nth-child(n+4)').fadeIn(),
        $(this).hide();
    });

    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn--left"></button>',
        nextArrow:'<button class="slider__btn slider__btn--right"></button>',
        dots: true,
        responsive: [
            {
              breakpoint: 1151,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 771,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            },
        ]
    });

    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn--active'),
        $('.menu').toggleClass('menu--active')
    });

});