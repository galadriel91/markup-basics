(()=>{
    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:true,
        accessibility:true,
        pauseOnDotsHover:true
    });
    
    const btns = document.querySelectorAll('.slick-arrow')
    const dots = document.querySelectorAll('.slick-dots button')

    btns.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            $('.mainSlide').slick('slickPause');
            setTimeout(()=>{
                $('.mainSlide').slick('slickPlay');
            },1000)
        })
    })

    dots.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            $('.mainSlide').slick('slickPause');
            setTimeout(()=>{
                $('.mainSlide').slick('slickPlay');
            },1000)
        })
    })
    
    $('.mainSlide').on('touchstart', e => {
        $('.mainSlide').slick('slickPlay');
    });
})()