$(document).ready(function() {

    $(".burger").click(function() {
        $(this).toggleClass("burger-cross")
        $("#header-nav").toggleClass("header-nav-open")
        $("body").toggleClass("lock")
    })

    $(".header-nav .nav-link").click(function() {
        $(".burger").toggleClass("burger-cross")
        $("#header-nav").toggleClass("header-nav-open")
        $("body").toggleClass("lock")
    })

    $(".accordion-item").click(function() {
        $(this).toggleClass("accordion-item-open")
    })

    const resourcesSwiper = new Swiper('#resources-swiper', {
        loop: true,
        spaceBetween: 60,
        slidesPerView: 1,
        speed: 1000,
        centeredSlides: true,
        pagination: {
          el: ".resources-swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.resources-btn-next',
            prevEl: '.resources-btn-prev',
        },
      });

    const quotesSwiper = new Swiper('#quotes-swiper', {

        spaceBetween: 64,
        slidesPerView: 1,
        speed: 1000,
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        pagination: {
            el: ".quotes-swiper-pagination",
            clickable: true,
        },

    });
      

})