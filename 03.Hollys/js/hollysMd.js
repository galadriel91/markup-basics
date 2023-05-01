$('.mdSlide').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    infinite:true,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});

$('.mdSlide').on('touchstart', e => {
    $('.mdSlide').slick('slickPlay');
});