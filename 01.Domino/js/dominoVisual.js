const slider = $('.visual').bxSlider({
    auto: true,
    speed:1000,
    autoHover : true,
    responsive : true,
    pager: true,
    pagerType: 'short',
    stopAutoOnClick: false,
});

const prevBtn = $('.bx-prev')
prevBtn.on('click' , ()=> {
    slider.stopAuto(false)
    timeout = setTimeout(()=>{
        slider.startAuto(false)
    },3000)
})


const nextBtn = $('.bx-next')
nextBtn.on('click' , ()=> {
    slider.stopAuto(false)
    timeout = setTimeout(()=>{
        slider.startAuto(false)
    },3000)
})