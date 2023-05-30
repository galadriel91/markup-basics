(()=>{
    const visual = $('.eventSlide').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        accessibility:true,
        pauseOnDotsHover:true,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
    visual.on('touchstart', e => {
        visual.slick('slickPlay');
    });
})()