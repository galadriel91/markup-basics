(()=>{
    $('.slide').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    arrows:false
                }
            }
        ]
    });
    
    const btns = document.querySelectorAll('.slick-arrow')
    const dots = document.querySelectorAll('.slick-dots button')
    
    btns.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            $('.slide').slick('slickPause');
            setTimeout(()=>{
                $('.slide').slick('slickPlay');
            },1000)
        })
    })
    dots.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            $('.slide').slick('slickPause');
            setTimeout(()=>{
                $('.slide').slick('slickPlay');
            },1000)
        })
    })
    
    $('.slide').on('touchstart', e => {
        $('.slide').slick('slickPlay');
    });
})()