(()=>{
    const slider = $('.mainProductVisual').bxSlider({
        auto: true,
        slideWidth:278,
        slideMargin: 29,
        speed:1000,
        minSlides:1,
        maxSlides:4,
        moveSlides: 1,
        autoHover : true,
        responsive : true,
        stopAutoOnClick: false,
        pager: false,

        onSliderLoad: function(){
            // 클론 슬라이드 탭 방지
            $(".bx-clone").find("a").prop("tabIndex","-1");
        },
    
        onSlideAfter: function(){
            // 아리아 히든 옵션이 있을경우 탭 방지
            $(".mainProductVisual").children("li").each(function(){
                if($(this).attr("aria-hidden") == "false"){
                    $(this).find("a").attr("tabIndex","0");
                }else{
                    $(this).find("a").attr("tabIndex","-1");
                }
            });
        }
    });
    $('.mainProductVisual a').focusin(function () {
        slider.stopAuto();
    });
    $('.mainProductVisual a').focusout(function () {
        slider.goToNextSlide()
    });
    $('.bx-next').focusout(function () {
        slider.startAuto()
    });
})()