(()=>{
    $('.instaVisual').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        accessibility:true,
        pauseOnDotsHover:true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
    
})()