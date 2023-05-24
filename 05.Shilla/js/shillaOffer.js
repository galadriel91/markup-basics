(()=>{
    $('.mobileSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility : true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
    
    $('.mobileSlide').on('touchstart', e => {
        $('.mobileSlide').slick('slickPlay');
    });
})()