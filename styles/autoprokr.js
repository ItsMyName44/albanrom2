$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ["Назад", "Вперёд"],
        autoplay:true,
autoplayHoverPause:true,
        smartSpeed:3000, //Время движения слайда
        autoplayTimeout:2300, //Время смены слайда
        center:true,        // margin:10,  dots:true,  margin:1, Отступ от картино если выводите больше 1
        mouseDrag:true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true
});

