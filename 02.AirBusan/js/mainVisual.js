$('.mainSlide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    accessibility:false,
    pauseOnDotsHover:true
});

const dots = document.querySelectorAll('.slick-dots button')

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