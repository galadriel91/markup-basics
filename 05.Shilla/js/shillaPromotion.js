(()=>{
    $('.promotionSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
    
    $('.promotionSlide').on('touchstart', e => {
        $('.promotionSlide').slick('slickPlay');
    });
})()