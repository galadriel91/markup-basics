$('.mainEventSlide').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility:false,
    pauseOnDotsHover:true,
});

const eventBtns = document.querySelectorAll('.mainEventSlide .slick-arrow')

eventBtns.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        $('.mainEventSlide').slick('slickPause');
        setTimeout(()=>{
            $('.mainEventSlide').slick('slickPlay');
        },1000)
    })
})

$('.mainEventSlide').on('touchstart', e => {
    $('.mainEventSlide').slick('slickPlay');
});
