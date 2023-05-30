(()=>{
    const visual = $('.instaVisual').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        accessibility:true,
        pauseOnDotsHover:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 400,
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