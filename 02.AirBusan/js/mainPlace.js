$('.mainPlaceSlider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility:false,
    pauseOnDotsHover:true,
});

const btns = document.querySelectorAll('.mainPlace .slick-arrow')

btns.forEach((item)=>{
    item.addEventListener('click' , ()=>{
        $('.mainPlace').slick('slickPause');
        setTimeout(()=>{
            $('.mainPlace').slick('slickPlay');
        },1000)
    })
})

$('.mainPlace').on('touchstart', e => {
    $('.mainPlace').slick('slickPlay');
});