$(document).ready(function(){
$('.navbar>ul>li').hover(function(){
    $(this).find('.ul_inner').fadeIn(200);
}, function(){
    $(this).find('.ul_inner').fadeOut(200);
});

$('.burger_menu').click(function(){
    $(this).toggleClass('show');
    $('.bottom_header').toggleClass('show');
    $('.navbar').toggleClass('show');
})

$('.main_slider').slick({
    arrows: false,
    dots: true,
    draggable: false,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
});

$('.clothes_cards').slick({
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    prevArrow: '<i class="fas fa-arrow-circle-left"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right"></i>',
    responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});

$('.workers').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

$('.cars_slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        },
    ]
})

$('.reviews_slider').slick({
    arrows: false,
    dots: true,

})

$('.news_slider').slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 1
            }
        },
    ]
})

$(window).scroll(function(){
    if($(this).scrollTop() > 900) {
        $('.scrollUp').fadeIn(400)
    } else {
        $('.scrollUp').fadeOut(400)
    }
})
$('.scrollUp').click(function(){
    $('body, html').animate({scrollTop: 0}, 700);
})

$(window).scroll(function(){
    var sticky = $('.bottom_header'),
        scroll = $(window).scrollTop();
        

    if (scroll >= 100) {
        sticky.addClass('active');
    }else {
        sticky.removeClass('active')
    } 
   
    });
    
    
    function calcCount() {
        for (let i = 0; i < $('.counter_span').length; i++) {
            let end = $('.counter_span').eq(i).text();
            countStart(end, i);
        }
        
    }
    
    function countStart(end, i) {
        let start = 0;
        let stopInterval = setInterval(function() {
            $('.counter_span').eq(i).text(++start);
            if (start == end) {
                clearInterval(stopInterval);
            }
        }, 30);
    }
    calcCount();


    $('.fas.fa-search').click(function(){
        $('.modal_search').addClass('search');
        $('body').addClass('lock')
    });
    $('.fas.fa-times').click(function(){
        $('.modal_search').removeClass('search');
        $('body').removeClass('lock')
    });


  


});