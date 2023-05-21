(()=>{
    const visual = $('.visualWrap').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:false,
        accessibility:true,
        pauseOnDotsHover:true
    });
    
    const slickDots = $('.slick-dots li')
    
    slickDots.on('click' , ()=>{
        $('.visualWrap').slick('slickPause')
        setTimeout(()=>{
            $('.visualWrap').slick('slickPlay')
        },2000)
    })
    visual.on('touchstart', e => {
        visual.slick('slickPlay');
    });
})();