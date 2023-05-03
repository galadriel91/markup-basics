(()=>{
    const visual = $('.visual').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        accessibility:true,
        arrows: true,
    });
    const btns = document.querySelectorAll('.slick-arrow')
    const dots = document.querySelectorAll('.slick-dots button')

    btns.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            visual.slick('slickPause');
            setTimeout(()=>{
                visual.slick('slickPlay');
            },1000)
        })
    })
    dots.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            visual.slick('slickPause');
            setTimeout(()=>{
                visual.slick('slickPlay');
            },1000)
        })
    })

    visual.on('touchstart', e => {
        visual.slick('slickPlay');
    });
})()