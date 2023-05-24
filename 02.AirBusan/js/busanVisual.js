(()=>{
    const visual = $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows:true,
        accessibility:true,
        pauseOnDotsHover:true
    });
    
    const btns = document.querySelectorAll('.slick-arrow')
    const dots = document.querySelectorAll('.slick-dots button')
    const stopBtn = document.querySelector('.stop')

    const stopSlide = () => {
        if(stopBtn.classList.contains('xi-angle-right-min')){
            stopBtn.classList.replace('xi-angle-right-min', 'xi-pause')
        }
        visual.slick('slickPause');
        setTimeout(()=>{
            visual.slick('slickPlay');
        },1000)
    }

    btns.forEach((item)=>{
        item.addEventListener('click' , stopSlide)
    })
    dots.forEach((item)=>{
        item.addEventListener('click' , stopSlide)
    })

    visual.on('touchstart', e => {
        visual.slick('slickPlay');
    });

    stopBtn.addEventListener('click', ()=>{
        if(stopBtn.classList.contains('xi-pause')){
            visual.slick('slickPause');
            stopBtn.classList.replace('xi-pause' , 'xi-angle-right-min')
        }else{
            visual.slick('slickPlay');
            stopBtn.classList.replace('xi-angle-right-min', 'xi-pause')
        }
    })
})()