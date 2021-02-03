
$(function(){
   
    $('.advantages__btn').on('click', function(){
        $('.advantages__descr').fadeIn();
    });
    $('.services__btn').on('click', function(){
        $('.services__card:nth-child(n+4)').fadeIn();
    });

    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn--left"></button>',
        nextArrow:'<button class="slider__btn slider__btn--right"></button>',
        dots: true,
    });

});